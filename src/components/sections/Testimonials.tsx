import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ReviewCarousel } from "@/components/ui/ReviewCarousel";
import { REVIEWS_SOURCE_URL } from "@/lib/reviews";
import { getReviews } from "@/lib/fetchReviews";

/**
 * Homepage reviews section - async Server Component.
 *
 * Fetches live reviews from the page at REVIEWS_SOURCE_URL (when set),
 * cached and revalidated every 24 hours via ISR (the `fetch` inside
 * `getReviews()` uses `next: { revalidate: 86400 }`). Falls back to the
 * typed snapshot in `lib/reviews.ts` if the upstream is unreachable.
 *
 * The `ReviewCarousel` client component handles the rolling marquee
 * presentation - it receives a plain `Review[]` prop, fully serializable.
 */
export async function Testimonials() {
  const reviews = await getReviews();

  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <Eyebrow>What clients say</Eyebrow>
          <Heading level={2} className="mt-4">
            Trust, earned one closing at a time.
          </Heading>
          <p className="mt-6 text-ink/70 leading-relaxed">
            Client reviews written after their loans closed. (Portfolio
            copy: the reviews shown are illustrative samples.)
          </p>
        </div>
        <a
          href={REVIEWS_SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-ink/70 underline underline-offset-4 hover:text-ink"
        >
          See more reviews ↗
        </a>
      </div>

      <div className="mt-12">
        <ReviewCarousel reviews={reviews} />
      </div>
    </Section>
  );
}
