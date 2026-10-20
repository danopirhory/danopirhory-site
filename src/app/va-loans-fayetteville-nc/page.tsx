import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import { jsonLd, faqPageSchema } from "@/lib/schema";
import {
  CONFORMING_LIMIT_DISPLAY,
  CONFORMING_LIMIT_YEAR,
} from "@/lib/loanLimits";

const PATH = "/va-loans-fayetteville-nc";
const LAST_UPDATED_DISPLAY = "April 2026";
const LAST_UPDATED_ISO = "2026-04-23";

export const metadata: Metadata = buildMetadata({
  title: "Fayetteville VA Loans - Fort Liberty Buyers",
  description:
    "VA loan financing for Fayetteville and Fort Liberty buyers: eligibility, process, Cumberland County market notes, and PCS timing from an Army Veteran.",
  path: PATH,
  ogType: "article",
});

const faqs = [
  {
    q: "Can active-duty soldiers at Fort Liberty buy with a VA loan?",
    a: "Yes. Active-duty soldiers generally become VA-eligible after 90 continuous days of active service. Most Fort Liberty soldiers are well past that threshold. We can pull your COE electronically and have you pre-approved in 24-48 hours.",
  },
  {
    q: "Are VA loans common in the Fayetteville housing market?",
    a: "Extremely common. The volume of active-duty soldiers, Veterans, and military families in Cumberland County means listing agents understand VA offers, builders structure spec inventory for VA appraisals, and the local appraisal panel handles VA condition reviews routinely.",
  },
  {
    q: "What's the VA loan limit in Cumberland County?",
    a: `Cumberland is a standard-cost county. The ${CONFORMING_LIMIT_YEAR} FHFA baseline conforming loan limit is ${CONFORMING_LIMIT_DISPLAY}. With full entitlement, no limit applies on a $0-down purchase. With partial entitlement, the limit governs the threshold above which you'd need a down payment.`,
  },
  {
    q: "Will builders in Fayetteville work with VA buyers?",
    a: "Yes. The Fayetteville-area new construction market is heavily VA-experienced. Most large builders write contracts that work cleanly with VA financing and seller concessions. Confirm with your buyer's agent that the specific builder and community are VA-friendly before writing.",
  },
  {
    q: "How long does a VA closing take in Cumberland County?",
    a: "30 days from contract is normal when the file is run cleanly. The local title and appraisal infrastructure is well-equipped for VA volume, and clean files close on time the vast majority of the time.",
  },
  {
    q: "Should I use my VA loan or go conventional?",
    a: "For most Fort Liberty soldiers and Veterans with full entitlement, VA wins decisively. There are specific scenarios (investment property, second home, very strong credit with 20%+ down) where conventional is the better answer. See the VA vs. conventional comparison for the full decision flow.",
  },
  {
    q: "Can retiring service members at Fort Liberty still use the VA loan?",
    a: "Yes. The VA benefit doesn't expire. Retiring soldiers staying in NC are some of the highest-leverage VA buyers. Many have a service-connected disability rating that fully waives the funding fee, making VA the cheapest mortgage product on the market for their situation.",
  },
];

export default function Page() {
  const url = `${site.url}${PATH}`;
  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "VA Loans in Fayetteville, NC - Fort Liberty Mortgage Guide",
    description:
      "A complete VA loan guide for Fayetteville, NC and Fort Liberty soldiers: eligibility, local market context, and the process from COE to closing.",
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
      { "@type": "Place", name: "Fayetteville, NC" },
      { "@type": "Place", name: "Fort Liberty" },
      { "@type": "Place", name: "Cumberland County, NC" },
      { "@type": "Thing", name: "VA loan" },
    ],
  };

  return (
    <>
      <script {...jsonLd(articleSchemaForGuide)} />
      <script {...jsonLd(faqPageSchema(faqs))} />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "VA Loans - Fayetteville, NC" },
        ]}
        eyebrow="VA loans · Fayetteville, NC"
        title="VA loans in Fayetteville, NC: the complete guide for Fort Liberty soldiers."
        lead="Eligibility, the actual process, what the Cumberland County market looks like for VA buyers right now, and how to make the most of your benefit. Written by an Army Veteran who lives in Fayetteville."
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
          <p>
            I&apos;m Dan Opirhory, a U.S. Army Veteran and a mortgage loan
            officer with {site.legalName}.
            My office is in Fayetteville. Fort Liberty is my immediate backyard,
            and a meaningful share of the VA loans I run are for active-duty
            soldiers, retiring service members, and military families across
            Cumberland County.
          </p>
          <p>
            This is the broad-strokes Fayetteville VA pillar. For the
            week-by-week PCS playbook, see{" "}
            <Link
              href="/fort-liberty-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              the Fort Liberty VA loan guide
            </Link>
            . For the entitlement and jumbo math, see{" "}
            <Link
              href="/va-loan-limits-cumberland-county-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA loan limits in Cumberland County
            </Link>
            . For neighborhood selection,{" "}
            <Link
              href="/best-neighborhoods-near-fort-liberty"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              best neighborhoods near Fort Liberty
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Why VA matters at Fort Liberty */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Why VA loans matter</Eyebrow>
          <Heading level={2} className="mt-4">
            Why the VA loan is the best mortgage product for most Fort Liberty soldiers.
          </Heading>
          <ul className="mt-8 space-y-3 text-lg leading-relaxed text-ink/80 pl-1">
            <li>
              <strong>Zero down payment with full entitlement.</strong> The VA
              loan funds 100% of the purchase price up to your entitlement.
              Earnest money and inspection costs only.
            </li>
            <li>
              <strong>No private mortgage insurance, ever.</strong> Conventional
              with low down adds PMI. VA skips it. Compounded over years, that&apos;s
              real money.
            </li>
            <li>
              <strong>Competitive interest rates</strong> backed by the VA guarantee.
            </li>
            <li>
              <strong>Funding fee waivers for service-connected disability.</strong>{" "}
              For many retiring Fort Liberty soldiers, this means thousands off
              cash-to-close.
            </li>
            <li>
              <strong>Reusable benefit.</strong> Sell, restore, use again.
              Second-tier entitlement covers PCS-without-sale scenarios.
            </li>
            <li>
              <strong>Assumable.</strong> A future buyer can take over your
              low-rate VA loan, a real selling-point asset.
            </li>
            <li>
              <strong>Multi-unit allowed.</strong> Up to 4 units with $0 down if
              you occupy one. Under-used in the Fayetteville market.
            </li>
          </ul>
        </div>
      </Section>

      {/* Eligibility */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Eligibility</Eyebrow>
          <Heading level={2} className="mt-4">
            Who qualifies - Fort Liberty edition.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              VA loan eligibility comes down to service category, length, and
              discharge status. The categories most relevant to the Fort Liberty
              community:
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Active-duty soldiers
            </h3>
            <p>
              Generally eligible after 90 continuous days of active service. Most
              Fort Liberty soldiers I work with have been past that threshold for
              years. We can pull your COE electronically, usually within the same
              business day.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Veterans
            </h3>
            <p>
              Most post-1990 service Veterans become eligible after 24 continuous
              months of active duty. Discharge status matters: anything other
              than dishonorable usually qualifies. If you have an
              other-than-honorable discharge, eligibility can sometimes be
              re-established through the VA&apos;s discharge upgrade process.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              National Guard and Reserves
            </h3>
            <p>
              Generally eligible after six years of service or 90 days of
              federal active-duty call-up. Plenty of NC Guard members in the
              Fayetteville area qualify this way.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Surviving spouses
            </h3>
            <p>
              The surviving spouse of a service member who died in the line of
              duty or from a service-connected disability may be eligible,
              including a fully waived funding fee. One of the most under-used
              VA benefits in the Fayetteville community.
            </p>
          </div>
        </div>
      </Section>

      {/* Local market */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>The Fayetteville market</Eyebrow>
          <Heading level={2} className="mt-4">
            What Cumberland County looks like for VA buyers.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Fayetteville is one of the most VA-friendly housing markets in the
              country. Active-duty volume from Fort Liberty supports a deep pool
              of listing agents who understand the program, builders who write
              VA-friendly contracts, and a local appraisal panel that handles
              Minimum Property Requirement reviews routinely.
            </p>
            <p>
              Pricing is meaningfully more accessible than the Triangle, Charlotte,
              or coastal NC markets. Entry-level inventory in Spring Lake, Hope
              Mills, and parts of Fayetteville sits in the $150K-$300K range.
              Move-up family homes in newer subdivisions push to $300K-$450K.
              Higher-end inventory in Haymount, the historic downtown, and rural
              Linden or Cameron pushes into $500K+. Most full-entitlement VA
              buyers never bump into the conforming loan limit.
            </p>
            <p>
              Inventory rhythm tracks PCS season: late spring and early summer
              see the most movement. Buyers who can shop in winter or early
              spring often get more breathing room on price and inspection
              negotiations.
            </p>
          </div>
        </div>
      </Section>

      {/* Process snapshot */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The process</Eyebrow>
          <Heading level={2} className="mt-4">
            From COE to keys.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Most VA closings in Cumberland County run 30 days or less from
            contract. The phases:
          </p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "01", t: "Pull COE", b: "Same-day for active duty in most cases." },
            { n: "02", t: "Pre-approve", b: "24-48 hours once documents are uploaded." },
            { n: "03", t: "Build budget", b: "BAH, taxes, insurance, HOA, funding fee or waiver." },
            { n: "04", t: "House hunt", b: "With a Fayetteville agent who works with military families." },
            { n: "05", t: "Offer", b: "Pre-approval letter + seller-concession math." },
            { n: "06", t: "Appraisal & inspection", b: "VA appraisal in 7-14 days; separate buyer-paid inspection." },
            { n: "07", t: "Close", b: "Sign at title company, occupy within 60 days." },
          ].map((s) => (
            <li key={s.n} className="border-t border-line pt-5">
              <div className="text-xs font-mono text-muted">{s.n}</div>
              <h3 className="mt-2 font-display text-xl text-ink">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{s.b}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* What's different about VA buyers in Fayetteville */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>What makes Fayetteville different</Eyebrow>
          <Heading level={2} className="mt-4">
            VA-specific dynamics in this market.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Three things that the Fayetteville VA market does differently from
              the rest of NC:
            </p>
            <ul className="space-y-3 pl-1">
              <li>
                <strong>Builders structure for VA.</strong> Most spec construction
                in Cumberland County is built and priced expecting VA buyers.
                Concession structures, optional upgrades, and warranty packages
                are usually VA-friendly out of the box.
              </li>
              <li>
                <strong>Listing agents take VA offers seriously.</strong> The
                local volume means listing agents and sellers don&apos;t flinch
                at VA the way they might in markets with less military presence.
                A clean pre-approval competes head-to-head with conventional.
              </li>
              <li>
                <strong>Retirement and post-service settlement is huge.</strong>{" "}
                Cumberland County has one of the highest retired-military
                populations in NC. The post-service VA buyer, often with a
                service-connected disability waiving the funding fee, is a
                meaningful share of the market.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            FAQ: VA loans in Fayetteville.
          </Heading>
        </div>
        <Accordion items={faqs} className="mt-12" />
      </Section>

      {/* Closing CTA */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Get started</Eyebrow>
          <Heading level={2} className="mt-4">
            Local Veteran lender. Local Fayetteville office.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Send me your situation (duty status, target neighborhood, timeline)
            and I&apos;ll build a plan around it. Pre-approval typically takes
            24-48 hours once documents are uploaded.
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
          <p className="mt-8 text-sm text-muted">
            More from the Fort Liberty series:{" "}
            <Link
              href="/fort-liberty-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Fort Liberty VA guide
            </Link>
            {" · "}
            <Link
              href="/va-loan-limits-cumberland-county-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Cumberland County limits
            </Link>
            {" · "}
            <Link
              href="/best-neighborhoods-near-fort-liberty"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Best neighborhoods near Fort Liberty
            </Link>
            {" · "}
            <Link
              href="/funding-fee-waiver-disabled-veterans"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Funding fee waiver
            </Link>
            {" · "}
            <Link
              href="/va-loan-pcs-checklist"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              PCS checklist
            </Link>
            {" · "}
            <Link
              href="/va-loans-cherry-point-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Cherry Point VA loans
            </Link>
            {" · "}
            <Link
              href="/seymour-johnson-afb-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Seymour Johnson VA guide
            </Link>
          </p>
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
