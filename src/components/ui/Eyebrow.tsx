import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Section kicker in "pop title" style: uppercase, letter-spaced champagne-gold
 * text with no enclosing pill.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
