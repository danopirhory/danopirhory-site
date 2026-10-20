"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { primaryNav } from "@/lib/nav";
import { site } from "@/lib/site";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-18">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display tracking-tight text-ink leading-tight"
            aria-label={`${site.brandLabel} - home`}
          >
            <Image
              src="/images/Personal logo.png"
              alt={`${site.name} logo`}
              width={760}
              height={744}
              priority
              sizes="40px"
              className="h-9 w-auto lg:h-10"
            />
            <span className="flex flex-col">
              <span className="block text-lg lg:text-xl">{site.name}</span>
              <span className="block text-[10px] font-sans font-medium uppercase tracking-[0.18em] text-muted">
                Mortgage Advisor
              </span>
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Primary"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={site.contactCta.href}
              size="sm"
              variant="secondary"
            >
              {site.contactCta.label}
            </Button>
            <Button href={site.applicationUrl} size="sm">
              Apply Now
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="w-5 space-y-[5px]">
              <span
                className={`block h-px bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>

        {open && (
          <div
            id="mobile-nav"
            className="lg:hidden border-t border-line py-4"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-base text-ink/80 border-b border-line last:border-b-0"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="pt-5 space-y-3">
              <Button
                href={site.contactCta.href}
                variant="secondary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {site.contactCta.label}
              </Button>
              <Button
                href={site.applicationUrl}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
