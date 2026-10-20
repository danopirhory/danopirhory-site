import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import { locations } from "@/lib/locations";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas - Mortgage Lender Across North Carolina",
  description:
    "Local mortgage guidance for buyers in Wilmington, Charlotte, Raleigh, Fayetteville, the NC beaches, and across North Carolina. Pick your market for advice.",
  path: "/service-areas",
});

const additionalAreas = [
  "Chapel Hill",
  "Cary",
  "Wake Forest",
  "Apex",
  "Holly Springs",
  "Mount Holly",
  "Holly Ridge",
  "Kure Beach",
  "Aberdeen",
  "Asheville",
  "Greensboro",
  "Winston-Salem",
];

export default function ServiceAreasPage() {
  const cities = Object.values(locations);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
        eyebrow="Service areas"
        title="Local mortgage guidance, across North Carolina."
        lead="I work with buyers across the state. The cities below have dedicated guides built around their specific market, plus a broader list of communities I serve regularly."
      />

      <Section>
        <Eyebrow>Featured markets</Eyebrow>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="group block border-t border-line pt-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl text-ink underline-offset-4 decoration-ink/30 group-hover:underline">
                    {city.city}, {city.state}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                    {city.region}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-2 text-ink/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">
                {city.lead}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>Also serving</Eyebrow>
          <Heading level={2} className="mt-4">
            Plus communities across the state.
          </Heading>
          <p className="mt-6 text-ink/70 leading-relaxed">
            I work with buyers throughout North Carolina. If your community
            isn&apos;t on the featured list, that doesn&apos;t mean I
            can&apos;t help. It just means I don&apos;t have a dedicated
            page for it yet. Get in touch and we&apos;ll talk about your
            specific situation.
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap gap-3">
          {additionalAreas.map((a) => (
            <li
              key={a}
              className="rounded-full border border-line bg-cream px-4 py-2 text-sm text-ink/70"
            >
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
