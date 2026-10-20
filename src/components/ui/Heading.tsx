import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Level = 1 | 2 | 3 | 4;

const sizes: Record<Level, string> = {
  1: "text-4xl md:text-6xl lg:text-7xl leading-[1.05]",
  2: "text-3xl md:text-5xl leading-[1.1]",
  3: "text-2xl md:text-3xl leading-tight",
  4: "text-xl md:text-2xl leading-snug",
};

export function Heading({
  level = 2,
  as,
  className,
  children,
}: {
  level?: Level;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: ReactNode;
}) {
  const Tag = (as ?? (`h${level}` as const)) as "h1" | "h2" | "h3" | "h4";
  return (
    <Tag
      className={cn(
        "font-display tracking-tight text-balance",
        sizes[level],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
