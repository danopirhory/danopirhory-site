import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  // Champagne gold pill, near-black text. Reads as the primary "go" CTA
  // against the dark theme.
  primary: "bg-accent text-cream hover:bg-accent-soft",
  // Outlined pill that feels like a glassy button - subtle border,
  // brightens on hover toward the accent.
  secondary:
    "border border-ink/20 text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink hover:bg-ink/10",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

/**
 * Renders one of three things, depending on `href`:
 *
 * 1. No `href`            → native `<button>` (use for form submits, modals, etc.)
 * 2. Internal `href` (e.g. "/contact") → Next.js `<Link>` for client-side nav
 * 3. External http(s) `href` → plain `<a>` opened in a new tab with
 *    `rel="noopener noreferrer"` for security
 *
 * The external-link behavior lets us point any CTA at an off-domain URL
 * (the lender's application portal, for example) without changing the call
 * site - `<Button href={site.applicationUrl}>Get Pre-Approved</Button>`
 * Just Works.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  type = "button",
  onClick,
  disabled,
  ...aria
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          {...aria}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={cls} onClick={onClick} {...aria}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      {...aria}
    >
      {children}
    </button>
  );
}
