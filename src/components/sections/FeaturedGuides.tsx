import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Surfaces the deepest cluster guides directly from the homepage so they
 * receive PageRank and get crawled regularly. Without a homepage entry
 * point, cluster pages sit in Google's "Discovered - currently not
 * indexed" status because nothing on the most-crawled page on the site
 * points to them.
 *
 * Edit the list when adding or rotating featured cluster pages. Keep it
 * to 6 - more dilutes the link equity each card passes through.
 */
const guides = [
  {
    href: "/va-loans-jacksonville-nc",
    title: "VA loans in Jacksonville, NC",
    body: "The complete VA loan guide for Camp Lejeune buyers: eligibility, process, local market notes, PCS timing.",
  },
  {
    href: "/va-loans-fayetteville-nc",
    title: "VA loans in Fayetteville, NC",
    body: "Fort Liberty buyers: eligibility, Cumberland County market, and the full PCS-to-keys timeline.",
  },
  {
    href: "/fort-liberty-va-loan-guide",
    title: "Fort Liberty VA loan guide",
    body: "PCS, eligibility, and process specifics for soldiers and their families at Fort Liberty.",
  },
  {
    href: "/best-neighborhoods-near-camp-lejeune",
    title: "Best neighborhoods near Camp Lejeune",
    body: "Piney Green, Hubert, Sneads Ferry, Swansboro, Richlands: commute, prices, schools, vibe.",
  },
  {
    href: "/best-neighborhoods-near-fort-liberty",
    title: "Best neighborhoods near Fort Liberty",
    body: "Spring Lake, Hope Mills, Haymount, Linden, Cameron: commute, price range, schools.",
  },
  {
    href: "/funding-fee-waiver-disabled-veterans",
    title: "Funding fee waiver for disabled Veterans",
    body: "How the disabled-Veteran funding fee waiver works: eligibility, timing, refund rules.",
  },
];

export function FeaturedGuides() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>Local VA loan guides</Eyebrow>
        <Heading level={2} className="mt-4">
          Deeper guides for Veterans and military families.
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          Long-form, base-specific, and county-specific guides written by
          an Army Veteran for the buyers I work with most often.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group block border-t border-line pt-5"
          >
            <h3 className="font-display text-xl text-ink underline-offset-4 decoration-ink/30 group-hover:underline">
              {g.title} →
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {g.body}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
