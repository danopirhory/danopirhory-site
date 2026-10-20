/**
 * Typed fallback snapshot of client reviews.
 *
 * Illustrative sample reviews: the names and quotes below are fictional
 * placeholders for this portfolio copy, not real clients. In production,
 * replace them with verbatim reviews from your review platform.
 *
 * Reviews are fetched live from the page at the `REVIEWS_SOURCE_URL` env
 * var (when set) and revalidated every 24 hours via
 * `src/lib/fetchReviews.ts`. This file serves as the safety-net fallback -
 * if the source is unset, down, returns a different markup structure, or
 * otherwise fails to parse, the site falls back to this snapshot so the
 * section never breaks.
 *
 * To update the snapshot with real reviews:
 *   1. Visit the review source page.
 *   2. Copy reviews verbatim - do NOT paraphrase, edit, or invent text.
 *   3. Update the `REVIEWS_LAST_SYNCED_AT` constant so we know how fresh
 *      the snapshot is.
 *   4. Run `npm run lint`.
 */

export type Review = {
  /** Reviewer's display name as shown on the source page. */
  name: string;
  /** City + state if the source provides it. */
  location?: string;
  /** 1-5, matching the source rating. */
  rating: number;
  /** Human-readable date as shown on the source. */
  date: string;
  /** Verbatim review text - do not edit. */
  quote: string;
};

/** Public "see more reviews" link. Placeholder in this portfolio copy. */
export const REVIEWS_SOURCE_URL = "https://example.com/reviews";

/** Update whenever you manually re-sync the snapshot below. */
export const REVIEWS_LAST_SYNCED_AT = "2026-01-05";

// Illustrative sample reviews - fictional names and text, not real clients.
export const reviews: Review[] = [
  {
    name: "Jordan M.",
    location: "Example City, NC",
    rating: 5,
    date: "January 5, 2026",
    quote:
      "The whole process was organized from start to finish. Every step was explained ahead of time and closing day had no surprises.",
  },
  {
    name: "Taylor R.",
    rating: 5,
    date: "January 5, 2026",
    quote:
      "As a first-time buyer I had a lot of questions, and every one got a quick, clear answer. I would work with Dan again for my next purchase or a refinance.",
  },
  {
    name: "Casey L.",
    location: "Example Town, NC",
    rating: 5,
    date: "January 5, 2026",
    quote:
      "Dan walked me through my VA refinance options and the numbers behind each one. Responsive, patient, and easy to work with.",
  },
];
