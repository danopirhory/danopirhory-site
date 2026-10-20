import { cn } from "@/lib/utils";

/**
 * Two-column split showing pros on the left and considerations on the
 * right. Used inside loan program pages.
 *
 * Intentionally restrained: neutral palette, no red/green checkmarks and
 * X marks, no icons, this site sells trust through calm typography, not
 * emotional cues.
 */
export function ProsCons({
  prosHeading = "Pros",
  pros,
  considerationsHeading = "Considerations",
  considerations,
  className,
}: {
  prosHeading?: string;
  pros: string[];
  considerationsHeading?: string;
  considerations: string[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-10 md:grid-cols-2 md:gap-16", className)}>
      <div className="border-t border-line pt-6">
        <h3 className="font-display text-xl text-ink">{prosHeading}</h3>
        <ul className="mt-5 space-y-3">
          {pros.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-ink/80 leading-relaxed"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink/50"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-line pt-6">
        <h3 className="font-display text-xl text-ink">
          {considerationsHeading}
        </h3>
        <ul className="mt-5 space-y-3">
          {considerations.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-ink/80 leading-relaxed"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink/50"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
