/**
 * Server-side review fetching and HTML parsing.
 *
 * How it works:
 *   1. Fetches the review source page at `process.env.REVIEWS_SOURCE_URL`
 *      (a WordPress loan-officer profile page, server-rendered HTML).
 *   2. Parses reviews from the markup with regex.
 *   3. Returns the parsed array, or the hardcoded snapshot on any failure.
 *      When `REVIEWS_SOURCE_URL` is unset, the snapshot is returned
 *      without any network request.
 *
 * Caching:
 *   The `fetch` call uses `next: { revalidate: 86400 }` (24 hours). This
 *   tells Next.js to cache the HTTP response and revalidate in the
 *   background after one day, which is the correct non-cacheComponents
 *   approach for Next.js 16. The homepage becomes ISR and will re-render
 *   with fresh review data every 24 hours on Vercel, no cron needed.
 *
 * Fallback:
 *   If the variable is unset or the source is down, returns a redirect, changes its markup, or
 *   otherwise produces 0 parseable reviews, we fall back to the typed
 *   snapshot in `src/lib/reviews.ts`. The site never breaks.
 */

import {
  reviews as fallbackReviews,
  type Review,
} from "./reviews";

/** Page to scrape for live reviews. Unset = always use the snapshot. */
const SOURCE_URL = process.env.REVIEWS_SOURCE_URL;

/**
 * Entry point - call this from any Server Component.
 *
 * Returns a `Review[]` that's either freshly parsed from the source page
 * or the hardcoded fallback. Never throws.
 */
export async function getReviews(): Promise<Review[]> {
  if (!SOURCE_URL) return fallbackReviews;

  try {
    // 5-second hard ceiling. Without this, a hanging source could pin
    // the server-render of any page that uses <Testimonials> (or any
    // other consumer of getReviews) until Vercel's function timeout,
    // long enough for crawlers like Ahrefs to record the URL as a
    // timeout instead of a 200.
    const res = await fetch(SOURCE_URL, {
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.warn(
        `[reviews] Source returned ${res.status}, using fallback.`,
      );
      return fallbackReviews;
    }

    const html = await res.text();
    const parsed = parseReviewsFromHtml(html);

    if (parsed.length === 0) {
      console.warn(
        "[reviews] Parsed 0 reviews from source, using fallback.",
      );
      return fallbackReviews;
    }

    return parsed;
  } catch (err) {
    console.warn("[reviews] Fetch failed, using fallback:", err);
    return fallbackReviews;
  }
}

/**
 * Parse `Review[]` from the loan-officer profile page HTML.
 *
 * Each review block follows this pattern in the WordPress markup:
 *
 *   <div style='background-color: white; ...'>
 *     <b>Name</b> - 5.0 <i class="fas fa-star" ...></i>×N<br>
 *     <small>Date</small><br>
 *     <small>Location</small><br>      ← optional
 *     <p>Quote text</p>
 *   </div>
 *
 * The regex is intentionally loose on whitespace and strict on the
 * structural tags (<b>, <small>, <p>) so it survives minor CSS changes
 * but still rejects completely different markup.
 */
export function parseReviewsFromHtml(html: string): Review[] {
  // Split the HTML into per-review blocks. Each block starts with <b>
  // (the reviewer name) and ends with </p> followed by </div>.
  const blocks = html.match(
    /<b>[^<]+<\/b>\s*-\s*[\d.]+[\s\S]*?<\/p>\s*<\/div>/g,
  );
  if (!blocks) return [];

  const reviews: Review[] = [];

  for (const block of blocks) {
    const nameMatch = block.match(/<b>([^<]+)<\/b>/);
    const ratingMatch = block.match(/-\s*([\d.]+)/);
    const smalls = [...block.matchAll(/<small>([^<]+)<\/small>/g)];
    const quoteMatch = block.match(/<p>([\s\S]*?)<\/p>/);

    const name = nameMatch?.[1]?.trim();
    const quote = quoteMatch?.[1]
      ?.trim()
      // The source page sometimes inserts extra spaces between words;
      // collapse them so the displayed text reads normally.
      .replace(/\s+/g, " ");
    const date = smalls[0]?.[1]?.trim();
    const rating = parseFloat(ratingMatch?.[1] ?? "5");
    const location =
      smalls.length > 1 ? smalls[1]?.[1]?.trim() : undefined;

    if (name && quote && date) {
      reviews.push({
        name: decodeEntities(name),
        rating,
        date: decodeEntities(date),
        location: location ? decodeEntities(location) : undefined,
        quote: decodeEntities(quote),
      });
    }
  }

  return reviews;
}

/** Decode the most common HTML entities that appear in review text. */
function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x27;/g, "'");
}
