import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  q: string;
  a: ReactNode;
};

/**
 * Accessible accordion using native <details>/<summary>.
 * Keyboard + screen-reader support comes for free, no JS required.
 *
 * Design notes:
 * - The default marker is hidden, replaced with a custom plus/close icon.
 * - Multiple items can be open at once (native <details> behavior).
 *   If only one should be open, wrap them in `<details name="...">` - omitted
 *   here to keep the API simple and allow richer page layouts.
 */
export function Accordion({
  items,
  className,
}: {
  items: ReadonlyArray<AccordionItem>;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "divide-y divide-line/70 border-y border-line/70",
        className,
      )}
    >
      {items.map((item, i) => (
        <details
          key={i}
          className="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 md:py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm transition-colors hover:text-accent">
            <span className="font-display text-lg md:text-xl text-ink">
              {item.q}
            </span>
            <span
              aria-hidden="true"
              className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-accent transition-transform duration-300 group-open:rotate-45"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M7 1v12M1 7h12" />
              </svg>
            </span>
          </summary>
          <div className="pb-6 md:pb-7 md:pr-12 text-ink/70 leading-relaxed">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
