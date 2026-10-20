import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Accordion } from "@/components/ui/Accordion";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import { jsonLd, faqPageSchema } from "@/lib/schema";
import { loanPrograms } from "@/lib/loanPrograms";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";
import type { Location } from "@/lib/locations";

/**
 * Rendering template for every city-level local SEO page.
 *
 * Accepts a fully typed `Location` data object and renders a unique local
 * landing page: hero, local intro, market notes, buyer scenarios, popular
 * loan programs for the market, FAQ with schema.org markup, and CTA strip.
 *
 * The `programs` array on a Location references loan program slugs - this
 * template looks up each one in `loanPrograms` so the displayed heading
 * and URL always match the real program pages.
 */
export function LocationTemplate({ data }: { data: Location }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas" },
    { label: `${data.city}, ${data.state}` },
  ];

  const pageUrl = `${site.url}/service-areas/${data.slug}`;
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#local-service`,
    name: `Mortgage services in ${data.city}, ${data.state}`,
    description: data.metaDescription,
    serviceType: "Mortgage origination",
    provider: { "@id": `${site.url}/#business` },
    areaServed: {
      "@type": "City",
      name: `${data.city}, ${data.state}`,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: data.region,
      },
    },
    url: pageUrl,
  };

  return (
    <>
      {/* Service + FAQ schema. Breadcrumb schema is auto-injected by <PageHero />. */}
      <script {...jsonLd(placeSchema)} />
      <script {...jsonLd(faqPageSchema(data.faqs))} />

      <PageHero
        breadcrumbs={crumbs}
        eyebrow={data.eyebrow}
        title={data.title}
        lead={data.lead}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={site.contactCta.href} size="lg">
            {site.contactCta.label}
          </Button>
          <Button href={site.applicationUrl} size="lg" variant="secondary">
            Get Pre-Approved
          </Button>
        </div>
      </PageHero>

      {/* Unique local intro */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>{data.region}</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.introHeading}
          </Heading>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
            {data.introBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Market notes */}
      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>Market notes</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.marketHeading}
          </Heading>
        </div>
        <FeatureGrid
          items={data.marketNotes}
          columns={3}
          className="mt-14"
        />
      </Section>

      {/* Buyer scenarios */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common scenarios</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.scenariosHeading}
          </Heading>
          {data.scenariosIntro && (
            <p className="mt-6 text-ink/70 leading-relaxed">
              {data.scenariosIntro}
            </p>
          )}
        </div>
        <FeatureGrid items={data.scenarios} className="mt-14" />
      </Section>

      {/* Popular programs - internal links to /loan-programs/* */}
      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>Programs for this market</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.programsHeading}
          </Heading>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {data.programs.map(({ slug, why }) => {
            const program = loanPrograms[slug];
            return (
              <Link
                key={slug}
                href={`/loan-programs/${program.slug}`}
                className="group block border-t border-line pt-6"
              >
                <h3 className="font-display text-xl text-ink underline-offset-4 decoration-ink/30 group-hover:underline">
                  {program.eyebrow} →
                </h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  {why}
                </p>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            {data.faqHeading}
          </Heading>
        </div>
        <Accordion items={data.faqs} className="mt-12" />
      </Section>

      {/* Related articles - internal links to /resources/<slug> */}
      {data.relatedArticleSlugs && data.relatedArticleSlugs.length > 0 && (
        <Section className="bg-paper">
          <div className="max-w-2xl">
            <Eyebrow>Worth reading</Eyebrow>
            <Heading level={2} className="mt-4">
              Related insights for {data.city} buyers.
            </Heading>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {data.relatedArticleSlugs.map((slug) => {
              const article = articles.find((a) => a.slug === slug);
              if (!article) return null;
              return (
                <li key={slug}>
                  <Link
                    href={`/resources/${article.slug}`}
                    className="group block border-t border-line pt-6"
                  >
                    <h3 className="font-display text-lg text-ink underline-offset-4 decoration-ink/30 group-hover:underline">
                      {article.title} →
                    </h3>
                    <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>
      )}

      <ContactCTAStrip />
    </>
  );
}
