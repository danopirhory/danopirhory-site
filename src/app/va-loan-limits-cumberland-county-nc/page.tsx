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
  partialEntitlementMath,
} from "@/lib/loanLimits";

const PINEHURST_EXAMPLE = partialEntitlementMath(1_000_000);

const PATH = "/va-loan-limits-cumberland-county-nc";
const LAST_UPDATED_DISPLAY = "April 2026";
const LAST_UPDATED_ISO = "2026-04-23";

export const metadata: Metadata = buildMetadata({
  title: "VA Loan Limits in Cumberland County, NC (2026)",
  description:
    "2026 VA loan limits for Cumberland County and Fayetteville, NC: full entitlement, when jumbo VA kicks in, and Cumberland vs. neighboring counties.",
  path: PATH,
  ogType: "article",
});

const faqs = [
  {
    q: "What is the 2026 VA loan limit in Cumberland County, NC?",
    a: `Cumberland County is a standard-cost county. The ${CONFORMING_LIMIT_YEAR} FHFA baseline conforming loan limit for a one-unit home is ${CONFORMING_LIMIT_DISPLAY}. Important: this number only matters if you have partial VA entitlement. With full entitlement, there is no maximum loan amount on a $0-down VA purchase.`,
  },
  {
    q: "Did the VA actually eliminate loan limits?",
    a: "Yes, for full-entitlement borrowers. The Blue Water Navy Vietnam Veterans Act of 2019 removed the VA's county-level loan caps starting January 2020. If you have full entitlement, you can borrow above the conforming limit with $0 down. Partial entitlement still uses the conforming limit.",
  },
  {
    q: "When does a VA loan become jumbo VA in Cumberland County?",
    a: `When the loan amount exceeds the county conforming limit (${CONFORMING_LIMIT_DISPLAY} for ${CONFORMING_LIMIT_YEAR}). Full-entitlement borrowers go jumbo with $0 down. Partial-entitlement borrowers need a down payment equal to 25% of the amount above the conforming limit.`,
  },
  {
    q: "How do I know if I have full or partial VA entitlement?",
    a: "Full entitlement usually means: never used your VA loan, or paid off a prior VA loan in full and sold the property. Partial entitlement usually means: you have a current active VA loan, you previously defaulted on a VA loan that the VA paid out on, or you're using second-tier entitlement after a duty-station change. Pull your COE to confirm.",
  },
  {
    q: "Are VA limits in Cumberland County different from neighboring counties?",
    a: `All neighboring counties (Hoke, Harnett, Sampson, Bladen, Robeson, Moore) are also standard-cost FHFA counties for ${CONFORMING_LIMIT_YEAR}, so the conforming loan limit is the same: ${CONFORMING_LIMIT_DISPLAY}. Where they diverge is the actual purchase price for an equivalent home.`,
  },
  {
    q: "What if I want to buy in Pinehurst above the conforming limit?",
    a: `Moore County (Pinehurst) is also a standard-cost county. With full entitlement, no problem: VA covers the full amount with $0 down. With partial entitlement, the same 25%-of-the-amount-above-the-limit math applies. Worked example: ${CONFORMING_LIMIT_DISPLAY} limit, ${PINEHURST_EXAMPLE.purchasePriceDisplay} purchase price, amount above the limit ${PINEHURST_EXAMPLE.amountAboveDisplay}, required down payment ${PINEHURST_EXAMPLE.downPaymentDisplay}.`,
  },
  {
    q: "Do most Fort Liberty buyers ever bump into the loan limit?",
    a: "Honestly, no. The vast majority of active-duty buyers in Spring Lake, Hope Mills, and central Fayetteville purchase well under $400K, nowhere near the conforming limit. The limit only becomes a real variable for buyers in higher-end Haymount, Linden, Pinehurst, or post-service buyers using partial entitlement at the top of the market.",
  },
];

const COUNTIES = [
  {
    name: "Cumberland County",
    seat: "Fayetteville, NC",
    currentLimit: CONFORMING_LIMIT_DISPLAY,
    note: "Standard-cost county. Home of Fort Liberty (formerly Fort Bragg).",
  },
  {
    name: "Hoke County",
    seat: "Raeford, NC",
    currentLimit: CONFORMING_LIMIT_DISPLAY,
    note: "Standard-cost. Western neighbor of Cumberland; popular VA buyer overflow market.",
  },
  {
    name: "Harnett County",
    seat: "Lillington, NC",
    currentLimit: CONFORMING_LIMIT_DISPLAY,
    note: "Standard-cost. Includes Cameron and growing rural inventory north of Fayetteville.",
  },
  {
    name: "Moore County",
    seat: "Carthage, NC",
    currentLimit: CONFORMING_LIMIT_DISPLAY,
    note: "Standard-cost. Pinehurst-area pricing pushes higher despite the same baseline limit.",
  },
  {
    name: "Sampson County",
    seat: "Clinton, NC",
    currentLimit: CONFORMING_LIMIT_DISPLAY,
    note: "Standard-cost. More rural; lower typical pricing than Cumberland.",
  },
];

export default function Page() {
  const url = `${site.url}${PATH}`;
  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "VA Loan Limits in Cumberland County, NC (2026)",
    description:
      "A clear, current breakdown of 2026 VA loan limits for Cumberland County, including how full entitlement removes the cap and when jumbo VA financing kicks in.",
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
      { "@type": "Thing", name: "VA loan limits" },
      { "@type": "Place", name: "Cumberland County, NC" },
      { "@type": "Place", name: "Fayetteville, NC" },
      { "@type": "Place", name: "Fort Liberty" },
    ],
  };

  return (
    <>
      <script {...jsonLd(articleSchemaForGuide)} />
      <script {...jsonLd(faqPageSchema(faqs))} />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "VA Loans - Fayetteville, NC",
            href: "/va-loans-fayetteville-nc",
          },
          { label: "VA Loan Limits - Cumberland County" },
        ]}
        eyebrow="VA loan limits · Cumberland County"
        title="VA loan limits in Cumberland County, NC (2026)."
        lead="The actual 2026 limit, when it applies, when it doesn't, and the partial-entitlement math that catches Fort Liberty buyers off guard at higher price points."
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
            VA loan limits are the most-misunderstood number in the entire VA
            loan playbook. Most active-duty soldiers I work with at Fort
            Liberty assume there&apos;s a single dollar figure that caps what
            they can borrow. There used to be, but for the majority of
            buyers since 2020, that cap doesn&apos;t exist anymore.
          </p>
          <p>
            For the broader Fayetteville VA strategy, see{" "}
            <Link
              href="/va-loans-fayetteville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA loans in Fayetteville, NC
            </Link>
            . For the PCS-specific timeline, see{" "}
            <Link
              href="/fort-liberty-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              the Fort Liberty VA loan guide
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Framework */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>The framework</Eyebrow>
          <Heading level={2} className="mt-4">
            How VA loan limits actually work in 2026.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>Two facts to anchor everything else:</p>
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                <strong>The VA stopped publishing loan limits for full-entitlement
                borrowers in 2020.</strong> The Blue Water Navy Act removed
                county-level VA caps for any Veteran with full entitlement. With
                full entitlement, you can borrow as much as a lender will
                approve, with $0 down.
              </li>
              <li>
                <strong>For partial-entitlement borrowers, the FHFA conforming
                loan limit is the operative number.</strong> Anything above it
                requires a down payment equal to 25% of the amount above the
                limit (the VA&apos;s 25% guaranty math).
              </li>
            </ol>
            <p>
              Most active-duty Fort Liberty soldiers and recent Veterans have
              full entitlement. For them, the conforming-limit number is
              informational, not restrictive. The math becomes operational for
              second-time VA users still holding a prior VA-financed property,
              previous defaulters, and second-tier entitlement scenarios.
            </p>
          </div>
        </div>
      </Section>

      {/* The number */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The number</Eyebrow>
          <Heading level={2} className="mt-4">
            Cumberland County&apos;s {CONFORMING_LIMIT_YEAR} conforming loan limit.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Cumberland County is a standard-cost county under the FHFA&apos;s
              annual designation. Standard-cost means the baseline conforming
              limit applies, no high-cost adjustment. For{" "}
              {CONFORMING_LIMIT_YEAR} the baseline figure for a one-unit
              property is <strong>{CONFORMING_LIMIT_DISPLAY}</strong>.
            </p>
            <p className="rounded-md border border-line bg-paper px-5 py-4 text-base">
              <strong>Verify the live number.</strong> Loan limits are published
              annually by the FHFA. Always confirm the current figure before
              making an offer at higher price points. See the{" "}
              <a
                href="https://www.fhfa.gov/data/conforming-loan-limit-cll-values"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                FHFA Conforming Loan Limit page
              </a>{" "}
              and the{" "}
              <a
                href="https://www.va.gov/housing-assistance/home-loans/loan-limits/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                VA loan limits page
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* Comparison */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>County comparison</Eyebrow>
          <Heading level={2} className="mt-4">
            Cumberland vs. neighboring NC counties ({CONFORMING_LIMIT_YEAR} baseline).
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            All five of the closest VA-buyer counties to Fort Liberty carry the
            same FHFA baseline limit because none qualify as high-cost. Where
            they diverge is what you can actually buy at that price point.
            Moore County (Pinehurst) trades meaningfully higher than
            Cumberland or Sampson at equivalent square footage.
          </p>
        </div>
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="py-3 pr-4 font-display text-base text-ink">County</th>
                <th className="py-3 pr-4 font-display text-base text-ink">County seat</th>
                <th className="py-3 pr-4 font-display text-base text-ink">{CONFORMING_LIMIT_YEAR} baseline limit</th>
                <th className="py-3 font-display text-base text-ink">Notes</th>
              </tr>
            </thead>
            <tbody>
              {COUNTIES.map((c) => (
                <tr key={c.name} className="border-b border-line align-top">
                  <td className="py-4 pr-4 text-ink">{c.name}</td>
                  <td className="py-4 pr-4 text-ink/80">{c.seat}</td>
                  <td className="py-4 pr-4 text-ink/80 whitespace-nowrap">
                    {c.currentLimit}
                  </td>
                  <td className="py-4 text-ink/70 leading-relaxed">{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-muted max-w-3xl">
          Baseline figure shown is the FHFA-published limit for one-unit
          properties in standard-cost counties. Confirm live numbers before
          any offer.
        </p>
      </Section>

      {/* Jumbo VA */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Jumbo VA</Eyebrow>
          <Heading level={2} className="mt-4">
            When a VA loan becomes &quot;jumbo VA&quot; in Cumberland County.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              A VA loan is informally &quot;jumbo VA&quot; when the loan amount
              exceeds the county conforming limit. The mechanics depend
              entirely on your entitlement.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Full entitlement at jumbo price points
            </h3>
            <p>
              Effectively unchanged from a standard VA loan. $0 down, no PMI,
              VA funding fee per the standard schedule (subject to your waiver
              status). VA loans well into the seven figures are routine for
              full-entitlement Pinehurst-area buyers.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Partial entitlement at jumbo price points
            </h3>
            <p>
              You&apos;ll need a down payment equal to 25% of the amount above
              the conforming limit.
            </p>
            <p>
              <strong>Worked example:</strong> {CONFORMING_LIMIT_YEAR}{" "}
              conforming limit {CONFORMING_LIMIT_DISPLAY}, target Pinehurst
              purchase price {PINEHURST_EXAMPLE.purchasePriceDisplay}. Amount
              above the limit: {PINEHURST_EXAMPLE.amountAboveDisplay}.
              Required down payment: 25% of{" "}
              {PINEHURST_EXAMPLE.amountAboveDisplay} ={" "}
              <strong>{PINEHURST_EXAMPLE.downPaymentDisplay}</strong>. With
              full entitlement, $0 down on the same purchase.
            </p>
          </div>
        </div>
      </Section>

      {/* Real prices */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Real numbers</Eyebrow>
          <Heading level={2} className="mt-4">
            Real-world Cumberland County price examples.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The vast majority of Fort Liberty buyers I work with land at
              price points the conforming limit doesn&apos;t even touch:
            </p>
            <ul className="space-y-3 pl-1">
              <li>
                <strong>Spring Lake, entry-level Hope Mills, central Fayetteville:</strong>{" "}
                roughly the $150K-$300K band. Conforming limit irrelevant for
                any entitlement scenario.
              </li>
              <li>
                <strong>Established Hope Mills, Raeford, Sanford:</strong>{" "}
                typically $250K-$450K. Still well below the limit.
              </li>
              <li>
                <strong>Haymount, Linden, Cameron with acreage:</strong>{" "}
                $400K-$700K range typically. Approaching the limit at the top
                end, but full-entitlement buyers don&apos;t care.
              </li>
              <li>
                <strong>Pinehurst and Southern Pines:</strong> $500K-$1.5M+
                common. This is where partial-entitlement math actually starts
                to matter.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* COE step */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Action step</Eyebrow>
          <Heading level={2} className="mt-4">
            Confirm your live entitlement before house hunting.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The single highest-leverage thing you can do before house
              hunting is pull your Certificate of Eligibility. The COE shows
              your current entitlement amount, full or partial, which
              determines everything else in this article.
            </p>
            <p>
              Once you have the COE in hand, the math becomes specific to your
              situation. For step-by-step guidance on the rest of the process,
              see{" "}
              <Link
                href="/fort-liberty-va-loan-guide"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                the Fort Liberty VA loan guide
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            FAQ: VA loan limits in Cumberland County.
          </Heading>
        </div>
        <Accordion items={faqs} className="mt-12" />
      </Section>

      {/* Closing CTA */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Run your numbers</Eyebrow>
          <Heading level={2} className="mt-4">
            Limits are abstract until they hit your entitlement and your price.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Send me your entitlement situation and target price point. I&apos;ll
            pull your COE, calculate your live entitlement, and tell you
            exactly what your $0-down purchase ceiling is, usually within a
            single phone call.
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
              href="/va-loans-fayetteville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Fayetteville VA pillar
            </Link>
            {" · "}
            <Link
              href="/fort-liberty-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Fort Liberty PCS guide
            </Link>
            {" · "}
            <Link
              href="/best-neighborhoods-near-fort-liberty"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Best neighborhoods
            </Link>
          </p>
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
