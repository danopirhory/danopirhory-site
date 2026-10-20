import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  title: string;
  body: ReactNode;
};

/**
 * Top-rule grid of short title+body blocks. The same editorial pattern
 * that appears across the homepage, abstracted so subpages can drop it
 * in with a single line.
 */
export function FeatureGrid({
  items,
  columns = 2,
  className,
}: {
  items: FeatureItem[];
  columns?: 2 | 3;
  className?: string;
}) {
  const colsCls = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <div className={cn("grid gap-x-10 gap-y-12", colsCls, className)}>
      {items.map((item) => (
        <div key={item.title} className="border-t border-line pt-6">
          <h3 className="font-display text-xl text-ink">{item.title}</h3>
          <p className="mt-3 text-ink/70 leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
