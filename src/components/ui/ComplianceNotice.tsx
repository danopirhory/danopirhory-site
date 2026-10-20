import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Compact compliance disclosure block. Drop on transactional pages
 * (contact, apply, lead-form pages) where buyers are about to share
 * personal information - gives them the legal context in one tidy place
 * without making the footer carry all the weight.
 *
 * All copy comes from `lib/site.ts` so a single edit updates every page
 * that uses this component.
 */
export function ComplianceNotice({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Compliance and licensing"
      className={cn(
        "rounded-md border border-line/70 bg-paper/50 px-6 py-5 text-xs leading-relaxed text-muted",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-medium uppercase tracking-[0.14em] text-ink/70">
          Equal Housing Lender
        </span>
        <span aria-hidden="true" className="text-muted/40">·</span>
        <span>{site.nmlsId}</span>
        <span aria-hidden="true" className="text-muted/40">·</span>
        <span>{site.companyNmls}</span>
      </div>
      <p className="mt-3">{site.licensingDisclosure}</p>
      <p className="mt-2">{site.equalHousingDisclosure}</p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        <Link
          href="/privacy"
          className="underline underline-offset-4 decoration-muted/60 hover:text-ink"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="underline underline-offset-4 decoration-muted/60 hover:text-ink"
        >
          Terms
        </Link>
        <Link
          href="/accessibility"
          className="underline underline-offset-4 decoration-muted/60 hover:text-ink"
        >
          Accessibility
        </Link>
      </p>
    </aside>
  );
}
