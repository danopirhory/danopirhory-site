import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Long-form content wrapper. Use for article / resource pages.
 * Relies on descendant selectors so markdown-rendered HTML can drop straight in.
 */
export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-prose text-ink/80 leading-relaxed",
        "[&_p]:mt-5 [&_h2]:mt-12 [&_h2]:mb-3 [&_h3]:mt-8 [&_h3]:mb-2",
        "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1",
        "[&_a]:underline [&_a]:decoration-ink/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}
