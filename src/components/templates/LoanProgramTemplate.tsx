import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Accordion } from "@/components/ui/Accordion";
import { ProsCons } from "@/components/sections/ProsCons";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import { jsonLd, faqPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import type { LoanProgram } from "@/lib/loanPrograms";

/**
 * Rendering template for every loan program landing page.
 *
 * Accepts a fully typed `LoanProgram` data object and renders the full
 * page - hero, overview, who-it-fits grid, pros/considerations, FAQ with
 * schema.org markup, related programs, and CTA strip.
 *
 * To add a new loan program: add an entry to `lib/loanPrograms.ts` and
 * create a 15-line page file under `/app/loan-programs/<slug>/page.tsx`
 * that imports the data and this template. Nothing else changes.
 */
export function LoanProgramTemplate({ data }: { data: LoanProgram }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Loan Programs", href: "/loan-programs" },
    { label: data.eyebrow },
  ];

  const programUrl = `${site.url}/loan-programs/${data.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["Service", "FinancialProduct"],
    "@id": `${programUrl}#service`,
    name: data.metaTitle,
    description: data.metaDescription,
    serviceType: data.eyebrow,
    category: "Mortgage loan",
    provider: { "@id": `${site.url}/#business` },
    areaServed: [
      { "@type": "State", name: "North Carolina" },
      { "@type": "State", name: "South Carolina" },
      { "@type": "State", name: "Texas" },
      { "@type": "State", name: "Tennessee" },
      { "@type": "State", name: "Georgia" },
    ],
    url: programUrl,
  };

  return (
    <>
      {/* Service + FAQ schema. Breadcrumb schema is auto-injected by <PageHero />. */}
      <script {...jsonLd(serviceSchema)} />
      <script {...jsonLd(faqPageSchema(data.faqs))} />

      <PageHero
        breadcrumbs={crumbs}
        eyebrow={data.eyebrow}
        title={data.title}
        lead={data.lead}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={data.primaryCta.href} size="lg">
            {data.primaryCta.label}
          </Button>
          <Button
            href={data.secondaryCta.href}
            size="lg"
            variant="secondary"
          >
            {data.secondaryCta.label}
          </Button>
        </div>
      </PageHero>

      {/* Overview - plain-English explanation */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>{data.overviewEyebrow}</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.overviewHeading}
          </Heading>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
            {data.overviewBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Who it fits */}
      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>Who it fits</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.fitHeading}
          </Heading>
          {data.fitIntro && (
            <p className="mt-6 text-ink/70 leading-relaxed">{data.fitIntro}</p>
          )}
        </div>
        <FeatureGrid items={data.fitItems} className="mt-14" />
      </Section>

      {/* Pros and considerations */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Pros & considerations</Eyebrow>
          <Heading level={2} className="mt-4">
            The real trade-offs.
          </Heading>
        </div>
        <ProsCons
          prosHeading={data.prosHeading}
          pros={data.pros}
          considerationsHeading={data.considerationsHeading}
          considerations={data.considerations}
          className="mt-14"
        />
      </Section>

      {/* FAQ with schema */}
      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.faqHeading}
          </Heading>
        </div>
        <Accordion items={data.faqs} className="mt-12" />
      </Section>

      {/* Related programs - internal linking */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Related programs</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.relatedHeading}
          </Heading>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {data.related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block border-t border-line pt-6"
            >
              <h3 className="font-display text-xl text-ink underline-offset-4 decoration-ink/30 group-hover:underline">
                {item.label} →
              </h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                {item.note}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
