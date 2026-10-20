import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line/70 bg-paper/60 p-6 md:p-8 backdrop-blur-sm transition-colors hover:border-accent/40",
        className,
      )}
    >
      {children}
    </div>
  );
}
