import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import { jsonLd, faqPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import type { MilitaryBase } from "@/lib/military-bases";

const LAST_UPDATED_DISPLAY = "April 2026";
const LAST_UPDATED_ISO = "2026-04-23";

/**
 * Rendering template for base-specific VA loan guide pages.
 *
 * Accepts a fully typed `MilitaryBase` data object and renders a
 * long-form guide with consistent structure across bases. Hand-tuned
 * base-specific paragraphs live in the data file; the template
 * provides the layout, schema injection, and cross-link footer.
 *
 * Word-count target per rendered page: ~1,500-1,800 words.
 */
export function MilitaryBaseTemplate({ data }: { data: MilitaryBase }) {
  const path = `/${data.slug}`;
  const url = `${site.url}${path}`;

  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${data.baseName} VA Loan Guide - ${data.primaryTown}, ${data.state}`,
    description: data.metaDescription,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${url}/opengraph-image`,
    inLanguage: "en-US",
    articleSection: "VA Loans",
    datePublished: LAST_UPDATED_ISO,
    dateModified: LAST_UPDATED_ISO,
    author: { "@id": `${site.url}/#person` },
    publisher: { "@id": `${site.url}/#business` },
    about: [
      { "@type": "Place", name: data.baseName },
      { "@type": "Place", name: `${data.primaryTown}, ${data.state}` },
      { "@type": "Place", name: `${data.county}, ${data.state}` },
      { "@type": "Thing", name: "VA loan" },
    ],
    audience: {
      "@type": "PeopleAudience",
      audienceType: `${data.branch} service members and Veterans purchasing in ${data.primaryTown}, ${data.state}`,
    },
  };

  return (
    <>
      <script {...jsonLd(articleSchemaForGuide)} />
      <script {...jsonLd(faqPageSchema(data.faqs))} />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: `${data.baseName} VA Loan Guide` },
        ]}
        eyebrow={data.eyebrow}
        title={data.title}
        lead={data.lead}
      >
        <p className="text-xs uppercase tracking-[0.14em] text-muted">
          Last updated: {LAST_UPDATED_DISPLAY} · By {site.name}, U.S. Army Veteran &amp; Mortgage Loan Officer
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={site.applicationUrl} size="lg">
            Get Pre-Approved
          </Button>
          <Button
            href={site.contactCta.href}
            size="lg"
            variant="secondary"
          >
            {site.contactCta.label}
          </Button>
        </div>
      </PageHero>

      {/* Intro */}
      <Section>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
          {data.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Why VA */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Why VA loans matter at {data.baseName}</Eyebrow>
          <Heading level={2} className="mt-4">
            What the VA loan actually does for you.
          </Heading>
          <ul className="mt-8 space-y-3 text-lg leading-relaxed text-ink/80 pl-1">
            {data.whyVa.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The process</Eyebrow>
          <Heading level={2} className="mt-4">
            From COE to keys, step by step.
          </Heading>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.process.map((s) => (
            <li key={s.n} className="border-t border-line pt-5">
              <div className="text-xs font-mono text-muted">{s.n}</div>
              <h3 className="mt-2 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Local market */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Local market</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.localMarketHeading}
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            {data.localMarket.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Neighborhoods */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Where {data.branch.replace("U.S. ", "")} families live</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.neighborhoodsHeading}
          </Heading>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.neighborhoods.map((n) => (
            <div key={n.name} className="border-t border-line pt-5">
              <h3 className="font-display text-xl text-ink">{n.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{n.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PCS */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>PCS timing</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.pcsHeading}
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            {data.pcsBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Mistakes */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>What to avoid</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.mistakesHeading}
          </Heading>
          <ul className="mt-8 space-y-3 text-lg leading-relaxed text-ink/80 pl-1">
            {data.mistakes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            FAQ: {data.baseName} VA loans.
          </Heading>
        </div>
        <Accordion items={data.faqs} className="mt-12" />
      </Section>

      {/* Related */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Related guides</Eyebrow>
          <Heading level={2} className="mt-4">
            Go deeper on any one piece of this.
          </Heading>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.related.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group block border-t border-line pt-5"
            >
              <h3 className="font-display text-xl text-ink underline-offset-4 decoration-ink/30 group-hover:underline">
                {r.label} →
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{r.note}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Talk to a Veteran loan officer</Eyebrow>
          <Heading level={2} className="mt-4">
            Run your real numbers, not someone else&apos;s averages.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Send me your situation, duty status, target {data.primaryTown}-area neighborhood,
            timeline, and I&apos;ll build a real plan around it. Pre-approval typically
            takes 24-48 hours once documents are uploaded.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.applicationUrl} size="lg">
              Get Pre-Approved
            </Button>
            <Button
              href={site.contactCta.href}
              size="lg"
              variant="secondary"
            >
              {site.contactCta.label}
            </Button>
          </div>
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
