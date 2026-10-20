import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "minimal" | "card";

/**
 * Testimonial / review presentation component. Two visual variants:
 *
 * - `minimal` (default) - top-rule only, editorial feel. Best for a grid
 *   of three on the homepage or a program page.
 * - `card` - bordered surface with subtle shadow. Best when standing alone
 *   (a single quote inside a program page) or inside the homepage review
 *   carousel.
 *
 * `rating` and `date` are optional. When provided, the card renders a
 * star row above the quote and the date inline with the attribution.
 * Older callers that omit them get the original visual unchanged.
 */
export function TestimonialCard({
  quote,
  name,
  role,
  rating,
  date,
  variant = "minimal",
  className,
}: {
  quote: ReactNode;
  name: string;
  role: string;
  rating?: number;
  date?: string;
  variant?: Variant;
  className?: string;
}) {
  const base =
    variant === "card"
      ? "rounded-xl border border-line/70 bg-paper/60 p-5 md:p-8 backdrop-blur-sm"
      : "border-t border-line pt-6";

  return (
    <figure className={cn("flex flex-col", base, className)}>
      {typeof rating === "number" && (
        <div
          className="mb-3 flex items-center gap-0.5 text-base text-ink md:mb-5"
          aria-label={`Rated ${rating} out of 5 stars`}
          role="img"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} aria-hidden="true">
              {i < Math.round(rating) ? "\u2605" : "\u2606"}
            </span>
          ))}
        </div>
      )}
      <blockquote className="font-display text-base leading-snug text-ink md:text-xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted md:mt-auto md:pt-6">
        <span className="text-ink">{name}</span>
        <span className="mx-1.5">·</span>
        {role}
        {date && (
          <>
            <span className="mx-1.5">·</span>
            <time>{date}</time>
          </>
        )}
      </figcaption>
    </figure>
  );
}
