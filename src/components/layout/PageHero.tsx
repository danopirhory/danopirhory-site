import type { ReactNode } from "react";
import { Section } from "./Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { jsonLd, breadcrumbSchema } from "@/lib/schema";

/**
 * Standard page header for every subpage: optional breadcrumb, eyebrow,
 * H1, lead paragraph, and a slot for CTAs below. Keeps visual rhythm
 * consistent across `/about`, `/contact`, `/loan-programs/*`, etc.
 *
 * When `breadcrumbs` are provided, this component automatically injects
 * a `BreadcrumbList` JSON-LD script - every page that uses PageHero gets
 * the structured data for free. Pages that need extra schemas (FAQ,
 * Article) inject those separately.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <>
      {breadcrumbs && breadcrumbs.length > 1 && (
        <script {...jsonLd(breadcrumbSchema(breadcrumbs))} />
      )}
      <Section className="relative pt-8 md:pt-20 pb-10 md:pb-16">
        {/* Faint grid backdrop - feathered via radial mask so it dissolves
            at the edges rather than cutting hard. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40"
        />
        <div className="relative">
          {breadcrumbs && <Breadcrumb items={breadcrumbs} className="mb-8" />}
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Heading level={1} className="mt-6 text-balance">
              {title}
            </Heading>
            {lead && (
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
                {lead}
              </p>
            )}
            {children && (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {children}
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
