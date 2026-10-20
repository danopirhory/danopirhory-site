import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "solid";

const variants: Record<Variant, string> = {
  default: "bg-line/40 text-ink/80 border border-line",
  outline: "border border-ink/20 text-ink/80 bg-transparent",
  solid: "bg-ink text-cream",
};

/**
 * Small pill label. Use for trust markers, category tags, status chips,
 * and the credential row in <TrustBar /> style contexts.
 */
export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-tight",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
