"use client";

import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { cn } from "@/lib/utils";
import type { Review } from "@/lib/reviews";

/**
 * Continuous rolling review marquee.
 *
 * - The reviews are rendered twice in a single horizontal track.
 * - A CSS keyframe (defined in `globals.css`) animates the track from
 *   `translateX(0)` to `translateX(-50%)`. Because the second copy is
 *   identical to the first, the loop is visually seamless, no jump.
 * - Pure CSS animation, no JS scroll handling, no setInterval, no
 *   requestAnimationFrame. Cheap and smooth.
 *
 * Interaction:
 * - Hover or focus inside the carousel pauses the animation so visitors
 *   can finish reading a card.
 * - `prefers-reduced-motion` stops the animation entirely (the track
 *   sits at translateX(0) showing the first set of cards).
 *
 * Accessibility:
 * - The wrapping <section> carries `aria-roledescription="marquee"` and
 *   a label naming the source.
 * - The duplicated set is marked `aria-hidden` so screen readers only
 *   announce each review once.
 *
 * Spacing math (must stay consistent for the seamless loop):
 *   Every slide uses the SAME width and the SAME right margin.
 *   Total track width = 2 × (slides + their margins).
 *   translateX(-50%) advances the track by exactly one set's worth.
 */
export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  // Duration scales with the number of reviews so the visual speed of
  // each card across the screen stays consistent regardless of how many
  // reviews are loaded. ~12 seconds per card feels readable but not slow.
  const durationSeconds = Math.max(20, reviews.length * 12);

  return (
    <section
      aria-roledescription="marquee"
      aria-label="Client reviews"
      className="group/marquee"
    >
      <div className="-mx-4 sm:-mx-6 md:-mx-8 overflow-hidden">
        <div
          className={cn(
            "flex w-max",
            // Pause when a visitor hovers or tabs into the carousel.
            "group-hover/marquee:[animation-play-state:paused]",
            "group-focus-within/marquee:[animation-play-state:paused]",
            // Honor the OS reduced-motion preference.
            "motion-reduce:animate-none",
          )}
          style={{
            animation: `marquee ${durationSeconds}s linear infinite`,
          }}
        >
          {/* Original set - read by assistive tech. */}
          {reviews.map((review, i) => (
            <ReviewSlide key={`a-${i}`} review={review} />
          ))}
          {/* Duplicate set - present only to make the loop seamless. */}
          {reviews.map((review, i) => (
            <ReviewSlide key={`b-${i}`} review={review} ariaHidden />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewSlide({
  review,
  ariaHidden,
}: {
  review: Review;
  ariaHidden?: boolean;
}) {
  return (
    <div
      // Width and right-margin must be identical on every slide so the
      // marquee math (50% = one full set) holds at every viewport.
      className="mr-4 sm:mr-6 md:mr-8 w-[280px] sm:w-[340px] md:w-[380px] shrink-0"
      aria-hidden={ariaHidden ? true : undefined}
    >
      <TestimonialCard
        variant="card"
        quote={review.quote}
        name={review.name}
        role={review.location ?? "Verified Client"}
        rating={review.rating}
        date={review.date}
        className="h-full"
      />
    </div>
  );
}
