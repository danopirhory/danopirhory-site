import type { Metadata } from "next";
import Link from "next/link";
import { LoanProgramTemplate } from "@/components/templates/LoanProgramTemplate";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { loanPrograms } from "@/lib/loanPrograms";
import { buildMetadata } from "@/lib/seo";

const data = loanPrograms.va;

/**
 * Full index of the VA guide cluster. The homepage <FeaturedGuides />
 * intentionally surfaces only 6 to concentrate link equity, which leaves
 * the rest of the cluster (Seymour Johnson, Cherry Point, the PCS
 * checklist, the county loan-limit pages, VA-vs-conventional, etc.)
 * orphaned -- discovered via sitemap but with no crawl path from a
 * high-authority page, so they sit in "Discovered - currently not
 * indexed." This page IS that high-authority hub (it is in the main nav),
 * so linking every guide from here gives Google a real path to all of
 * them. Keep this list complete when guides are added or removed.
 */
const vaGuides = [
  {
    href: "/va-loans-jacksonville-nc",
    title: "VA loans in Jacksonville, NC",
    body: "The complete Camp Lejeune buyer's guide: eligibility, process, local market, and PCS timing.",
  },
  {
    href: "/pcs-camp-lejeune-va-loan-guide",
    title: "PCS to Camp Lejeune VA loan guide",
    body: "Timing a VA purchase around PCS orders to Camp Lejeune without missing your report date.",
  },
  {
    href: "/va-loans-fayetteville-nc",
    title: "VA loans in Fayetteville, NC",
    body: "Fort Liberty buyers: eligibility, the Cumberland County market, and the full PCS-to-keys timeline.",
  },
  {
    href: "/fort-liberty-va-loan-guide",
    title: "Fort Liberty VA loan guide",
    body: "PCS, eligibility, and process specifics for soldiers and families at Fort Liberty.",
  },
  {
    href: "/va-loans-cherry-point-nc",
    title: "VA loans near MCAS Cherry Point",
    body: "Havelock and the Cherry Point market: VA eligibility and the local buying timeline.",
  },
  {
    href: "/seymour-johnson-afb-va-loan-guide",
    title: "Seymour Johnson AFB VA loan guide",
    body: "Goldsboro and Wayne County: VA financing for airmen and families at Seymour Johnson.",
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
    href: "/va-loan-vs-conventional-loan",
    title: "VA loan vs. conventional loan",
    body: "When zero-down VA wins and when conventional makes more sense, run side by side.",
  },
  {
    href: "/va-loan-pcs-checklist",
    title: "VA loan PCS checklist",
    body: "A step-by-step checklist for financing a home purchase around military PCS orders.",
  },
  {
    href: "/va-loan-limits-onslow-county-nc",
    title: "VA loan limits: Onslow County",
    body: "Current conforming and VA entitlement figures for Onslow County (Camp Lejeune).",
  },
  {
    href: "/va-loan-limits-cumberland-county-nc",
    title: "VA loan limits: Cumberland County",
    body: "Current conforming and VA entitlement figures for Cumberland County (Fort Liberty).",
  },
  {
    href: "/funding-fee-waiver-disabled-veterans",
    title: "Funding fee waiver for disabled Veterans",
    body: "How the disabled-Veteran funding fee waiver works: eligibility, timing, and refund rules.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/loan-programs/${data.slug}`,
});

export default function Page() {
  return (
    <>
      <Section className="pb-0">
        <div className="max-w-3xl border-l-2 border-ink/15 pl-5">
          <p className="text-sm uppercase tracking-[0.14em] text-muted">
            Camp Lejeune & Jacksonville buyers
          </p>
          <p className="mt-2 text-base text-ink/75 leading-relaxed">
            Stationed at or near Camp Lejeune? Read{" "}
            <Link
              href="/va-loans-jacksonville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              the complete VA loan guide for Jacksonville, NC
            </Link>{" "}
            for local market notes, PCS timing, and the mistakes that cost
            service members money.
          </p>
        </div>
      </Section>
      <LoanProgramTemplate data={data} />
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>VA loan guides</Eyebrow>
          <Heading level={2} className="mt-4">
            Every VA loan guide, in one place.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Base-specific, county-specific, and topic guides, written by an
            Army Veteran for the service members and military families I work
            with most often.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vaGuides.map((g) => (
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
    </>
  );
}
