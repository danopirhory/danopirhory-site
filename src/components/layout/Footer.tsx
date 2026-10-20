import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { footerNav } from "@/lib/nav";
import { Container } from "./Container";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-line bg-charcoal md:mt-24">
      <Container>
        {/* Brand block - logo + click-to-call. The visible phone comes
            from site.phone, the same value used in the JSON-LD, so the
            NAP (Name / Address / Phone) stays consistent across web, GBP,
            and directory citations. */}
        <div className="pb-8 pt-12 md:pb-10 md:pt-16">
          <Link href="/" aria-label={`${site.legalName} - home`}>
            <Image
              src="/images/logo-horizontal.png"
              alt={`${site.legalName} logo`}
              width={1600}
              height={200}
              sizes="(min-width: 768px) 280px, 220px"
              className="h-auto w-full max-w-[220px] md:max-w-[280px]"
            />
          </Link>
          <a
            href={`tel:${site.phone.tel}`}
            className="mt-5 inline-flex items-center font-sans text-sm font-medium text-ink/80 hover:text-ink"
            aria-label={`Call ${site.name} at ${site.phone.display}`}
          >
            {site.phone.display}
          </a>
        </div>

        {/* Nav columns - 2-up grid on mobile so 4 columns become two
            rows of two, instead of one tall stack. Desktop falls back
            to the original 4-across layout. */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-10 md:grid-cols-4 md:gap-x-8 md:pb-16">
          {Object.entries(footerNav).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.16em] text-ink md:mb-4">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => {
                  const isExternal = /^https?:\/\//i.test(item.href);
                  const linkClasses = "text-sm text-ink/70 hover:text-ink";
                  return (
                    <li key={item.href}>
                      {isExternal ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClasses}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link href={item.href} className={linkClasses}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-line py-8 text-xs leading-relaxed text-muted">
          <div className="space-y-3">
            <p>
              <span className="text-ink/80">{site.legalName}</span> ·{" "}
              {site.nmlsId} · {site.companyNmls}
            </p>
            <p>{site.licensingDisclosure}</p>
            <p>{site.equalHousingDisclosure}</p>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
