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

const SNEADS_FERRY_EXAMPLE = partialEntitlementMath(900_000);

const PATH = "/va-loan-limits-onslow-county-nc";
const LAST_UPDATED_DISPLAY = "April 2026";
const LAST_UPDATED_ISO = "2026-04-23";

export const metadata: Metadata = buildMetadata({
  title: "VA Loan Limits in Onslow County, NC (2026)",
  description:
    "2026 VA loan limits for Onslow County and Jacksonville, NC: full entitlement rules, when jumbo VA kicks in, and how Onslow compares to neighboring counties.",
  path: PATH,
  ogType: "article",
});

const faqs = [
  {
    q: "What is the 2026 VA loan limit in Onslow County, NC?",
    a: `Onslow County is a standard-cost county, which means the conforming loan limit set by the Federal Housing Finance Agency (FHFA) applies. The ${CONFORMING_LIMIT_YEAR} baseline limit for a one-unit home is ${CONFORMING_LIMIT_DISPLAY}. Important: this number only matters if you have partial VA entitlement. With full entitlement, there is no maximum loan amount on a $0-down VA purchase.`,
  },
  {
    q: "Did the VA actually eliminate loan limits?",
    a: "Yes, for full-entitlement borrowers. The Blue Water Navy Vietnam Veterans Act of 2019 removed the VA's county-level loan caps starting January 2020. If you have full entitlement, you can borrow above the conforming limit with $0 down. If you have partial entitlement, the conforming limit still applies and you'd need a down payment for any amount above it.",
  },
  {
    q: "When does a VA loan become a jumbo VA loan?",
    a: "A VA loan is considered jumbo when the loan amount exceeds the county conforming limit. With full entitlement and $0 down, jumbo VA is straightforward: same VA-backed structure, just at a higher price point. With partial entitlement, going jumbo means bringing a down payment to cover 25% of the amount above the conforming limit (the VA's standard guaranty math).",
  },
  {
    q: "How do I know if I have full or partial VA entitlement?",
    a: "Full entitlement usually means: you've never used your VA loan, or you paid off a prior VA loan in full and sold the property. Partial entitlement usually means: you have a current active VA loan, you previously defaulted on a VA loan that the VA paid out on, or you have a second-tier entitlement situation from a duty-station change. The fastest way to confirm is to pull your Certificate of Eligibility. Your lender can do this in minutes.",
  },
  {
    q: "Are VA loan limits in Onslow County different from New Hanover or Brunswick?",
    a: "All three are standard-cost FHFA counties for 2026, so the conforming loan limit is the same. Where they differ is the actual purchase price for an equivalent home. Wilmington (New Hanover) and Brunswick coastal areas trade higher than most of Onslow, which means a Wilmington VA buyer is more likely to bump into the partial-entitlement limit than a Jacksonville buyer at the same loan-amount threshold.",
  },
  {
    q: "What if I want to buy a home in Sneads Ferry above the conforming limit?",
    a: `If you have full entitlement, no problem: VA covers the full amount with $0 down. If you have partial entitlement, you'd need a down payment equal to 25% of the amount above the conforming limit. Example math: with the ${CONFORMING_LIMIT_YEAR} limit at ${CONFORMING_LIMIT_DISPLAY} and a purchase price of ${SNEADS_FERRY_EXAMPLE.purchasePriceDisplay}, the amount above the limit is ${SNEADS_FERRY_EXAMPLE.amountAboveDisplay}, and 25% of that is about ${SNEADS_FERRY_EXAMPLE.downPaymentDisplay}. That's the rough down payment under partial entitlement. We'd run live numbers before you wrote an offer.`,
  },
  {
    q: "Do VA loan limits include the funding fee?",
    a: "No. The conforming loan limit is calculated on the base loan amount before the funding fee. If you finance the funding fee into the loan (very common), the total loan amount on closing day will be slightly higher than the limit comparison number. This rarely matters for full-entitlement borrowers but can affect partial-entitlement scenarios near the limit.",
  },
];

const COUNTIES = [
  {
    name: "Onslow County",
    seat: "Jacksonville, NC",
    currentLimit: CONFORMING_LIMIT_DISPLAY,
    note: "Standard-cost county. Home of Camp Lejeune and MCAS New River.",
  },
  {
    name: "New Hanover County",
    seat: "Wilmington, NC",
    currentLimit: CONFORMING_LIMIT_DISPLAY,
    note: "Standard-cost. Higher actual sale prices push more buyers near the limit.",
  },
  {
    name: "Brunswick County",
    seat: "Bolivia, NC",
    currentLimit: CONFORMING_LIMIT_DISPLAY,
    note: "Standard-cost. Coastal premium in Oak Island, Bald Head, Holden Beach.",
  },
  {
    name: "Pender County",
    seat: "Burgaw, NC",
    currentLimit: CONFORMING_LIMIT_DISPLAY,
    note: "Standard-cost. Mostly inland/rural; Topsail/Hampstead command coastal pricing.",
  },
  {
    name: "Carteret County",
    seat: "Beaufort, NC",
    currentLimit: CONFORMING_LIMIT_DISPLAY,
    note: "Standard-cost. Atlantic Beach, Emerald Isle, and Beaufort drive higher pricing.",
  },
];

export default function Page() {
  const url = `${site.url}${PATH}`;
  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "VA Loan Limits in Onslow County, NC (2026)",
    description:
      "A clear, current breakdown of 2026 VA loan limits for Onslow County, including how full entitlement removes the cap and when jumbo VA financing kicks in.",
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
      { "@type": "Place", name: "Onslow County, NC" },
      { "@type": "Place", name: "Jacksonville, NC" },
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
            label: "VA Loans - Jacksonville, NC",
            href: "/va-loans-jacksonville-nc",
          },
          { label: "VA Loan Limits - Onslow County" },
        ]}
        eyebrow="VA loan limits · Onslow County"
        title="VA loan limits in Onslow County, NC (2026)."
        lead="What the limits actually are this year, when they don't apply at all, and the partial-entitlement math that catches Camp Lejeune buyers off guard."
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
            VA loan limits are the most-misunderstood number in the entire
            VA loan playbook. Most active-duty Marines I work with at Camp
            Lejeune assume there&apos;s a single dollar figure that caps
            what they can borrow. There used to be, but for the majority
            of buyers since 2020, that cap doesn&apos;t exist anymore.
          </p>
          <p>
            This guide is a focused deep-dive on one slice of the broader
            picture. For the full strategy on using a VA loan in the
            Jacksonville market, start with my{" "}
            <Link
              href="/va-loans-jacksonville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              complete VA loan guide for Camp Lejeune &amp; Jacksonville,
              NC
            </Link>
            . If you&apos;re trying to decide whether VA is even the right
            product for your situation, see{" "}
            <Link
              href="/va-loan-vs-conventional-loan"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA loan vs. conventional loan
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* How VA loan limits work in 2026 */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>The framework</Eyebrow>
          <Heading level={2} className="mt-4">
            How VA loan limits actually work in 2026.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Two facts to anchor everything else in this article:
            </p>
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                <strong>The VA itself stopped publishing loan limits for
                full-entitlement borrowers in 2020.</strong> The Blue Water
                Navy Vietnam Veterans Act removed county-level VA loan caps
                for any Veteran with full entitlement. If you qualify for
                full entitlement, you can borrow as much as a lender will
                approve, with $0 down.
              </li>
              <li>
                <strong>For partial-entitlement borrowers, the FHFA
                conforming loan limit is the operative number.</strong>{" "}
                Anything above it requires a down payment equal to 25% of
                the amount above the limit (the VA&apos;s 25% guaranty
                math).
              </li>
            </ol>
            <p>
              In practice, most active-duty Marines and recent Veterans I
              work with have full entitlement: they&apos;ve never used a
              VA loan, or they paid off and sold a previous home. For them,
              the conforming-limit number is informational, not
              restrictive.
            </p>
            <p>
              Where it matters: second-time VA users still holding a prior
              VA-financed property, anyone who&apos;s defaulted on a
              previous VA loan, and active-duty buyers using second-tier
              entitlement after a PCS without selling.
            </p>
          </div>
        </div>
      </Section>

      {/* Onslow County conforming loan limit */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The number</Eyebrow>
          <Heading level={2} className="mt-4">
            Onslow County&apos;s {CONFORMING_LIMIT_YEAR} conforming loan limit.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Onslow County is a standard-cost county under the FHFA&apos;s
              annual designation. Standard-cost means the baseline
              conforming limit applies, no high-cost adjustment. For{" "}
              {CONFORMING_LIMIT_YEAR} the baseline figure for a one-unit
              property is <strong>{CONFORMING_LIMIT_DISPLAY}</strong>.
            </p>
            <p className="rounded-md border border-line bg-paper px-5 py-4 text-base">
              <strong>Verify the live number.</strong> Loan limits are
              published annually by the FHFA and adjusted by the VA. Always
              confirm the current figure before making an offer at higher
              price points. The most authoritative reference is the{" "}
              <a
                href="https://www.fhfa.gov/data/conforming-loan-limit-cll-values"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                FHFA Conforming Loan Limit page
              </a>
              {" "}and the{" "}
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

      {/* Comparison table */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>County comparison</Eyebrow>
          <Heading level={2} className="mt-4">
            Onslow vs. neighboring NC counties ({CONFORMING_LIMIT_YEAR} baseline).
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            All five of the closest VA-buyer counties to Camp Lejeune carry
            the same FHFA baseline limit because none qualify as
            high-cost. Where they diverge is what you can actually buy at
            that price point: coastal premium drives Wilmington, the
            Brunswick beaches, and Carteret well above what an equivalent
            home costs in Jacksonville.
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
          properties in standard-cost counties. Confirm live numbers
          before any offer.
        </p>
      </Section>

      {/* When jumbo VA kicks in */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Jumbo VA</Eyebrow>
          <Heading level={2} className="mt-4">
            When a VA loan becomes &quot;jumbo VA.&quot;
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              A VA loan is informally &quot;jumbo VA&quot; when the loan
              amount exceeds the county conforming limit. The mechanics
              depend entirely on your entitlement.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Full entitlement at jumbo price points
            </h3>
            <p>
              Effectively unchanged from a standard VA loan. $0 down, no
              PMI, VA funding fee per the standard schedule (subject to
              your waiver status). I&apos;ve closed VA loans well into the
              seven figures for Sneads Ferry and Topsail-area buyers with
              full entitlement.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Partial entitlement at jumbo price points
            </h3>
            <p>
              You&apos;ll need a down payment equal to 25% of the amount
              above the conforming limit. The VA&apos;s 25% guaranty
              math is what determines this. The VA still backs 25% of the
              loan, but on the portion above the limit, you&apos;re
              providing the equity that closes the guaranty gap.
            </p>
            <p>
              <strong>Worked example:</strong> {CONFORMING_LIMIT_YEAR}{" "}
              conforming limit {CONFORMING_LIMIT_DISPLAY}, target purchase
              price {SNEADS_FERRY_EXAMPLE.purchasePriceDisplay}. Amount
              above the limit: {SNEADS_FERRY_EXAMPLE.amountAboveDisplay}.
              Required down payment: 25% of{" "}
              {SNEADS_FERRY_EXAMPLE.amountAboveDisplay} ={" "}
              <strong>{SNEADS_FERRY_EXAMPLE.downPaymentDisplay}</strong>.
              That&apos;s the cash you&apos;d bring under partial
              entitlement; with full entitlement, $0 down on the same
              purchase.
            </p>
          </div>
        </div>
      </Section>

      {/* Real-world Jacksonville price examples */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Real numbers</Eyebrow>
          <Heading level={2} className="mt-4">
            Real-world Jacksonville and Onslow County price examples.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The vast majority of Camp Lejeune buyers I work with land at
              price points the conforming limit doesn&apos;t even touch.
              Here&apos;s the rough lay of the land for typical
              VA-eligible inventory in the area:
            </p>
            <ul className="space-y-3 pl-1">
              <li>
                <strong>Jacksonville city core, Piney Green, and entry
                Hubert:</strong> roughly the $200K-$400K band for most
                3-bed, 2-bath single-family inventory. The conforming
                limit is irrelevant here for any entitlement scenario.
              </li>
              <li>
                <strong>Established Hubert, Richlands, and inland
                Onslow:</strong> typically $300K-$500K, depending on lot
                size and age. Still well below the conforming limit.
              </li>
              <li>
                <strong>Sneads Ferry inland and Swansboro:</strong> commonly
                $400K-$700K. Approaching the limit at the top end of this
                range, but full-entitlement buyers don&apos;t care.
              </li>
              <li>
                <strong>Sneads Ferry coastal, Topsail Island, North
                Topsail Beach:</strong> $700K-$1.5M+ is common. This is
                where the partial-entitlement math actually starts to
                matter.
              </li>
            </ul>
            <p>
              Bottom line: for entry-level and move-up buyers in Onslow
              County, VA loan limits are a footnote. For luxury coastal
              VA buyers with prior loan history, they&apos;re a real
              variable that needs live calculation before you write an
              offer.
            </p>
          </div>
        </div>
      </Section>

      {/* How to confirm entitlement */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Action step</Eyebrow>
          <Heading level={2} className="mt-4">
            How to confirm your live VA entitlement.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The single highest-leverage thing you can do before house
              hunting is pull your Certificate of Eligibility (COE). The
              COE shows your current entitlement amount, which determines
              everything else in this article.
            </p>
            <p>Three ways to get it:</p>
            <ul className="space-y-2 pl-1">
              <li>
                <strong>Through your lender&apos;s automated VA system.</strong>{" "}
                Fastest. I can usually pull a COE in minutes for active-duty
                service members and within a day for most Veterans.
              </li>
              <li>
                <strong>VA eBenefits portal (yourself).</strong> Free and
                free of intermediaries: log in, request, download.
              </li>
              <li>
                <strong>VA Form 26-1880 by mail.</strong> Slowest path. Only
                use this if the electronic options don&apos;t work.
              </li>
            </ul>
            <p>
              Once you have the COE in hand, the partial-vs-full
              entitlement question is settled and we can run real
              scenarios. For more on PCS timing and what to do once your
              entitlement is confirmed, see{" "}
              <Link
                href="/pcs-camp-lejeune-va-loan-guide"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                how to PCS to Camp Lejeune and buy a home with a VA loan
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
            FAQ: VA loan limits in Onslow County.
          </Heading>
        </div>
        <Accordion items={faqs} className="mt-12" />
      </Section>

      {/* Closing CTA */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Next step</Eyebrow>
          <Heading level={2} className="mt-4">
            Run your real numbers, not someone else&apos;s averages.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            VA loan limits are abstract until they hit your actual
            entitlement and your actual purchase price. As an Army Veteran
            who runs VA scenarios for Camp Lejeune buyers every week, I
            can pull your COE, calculate your live entitlement, and tell
            you exactly what your $0-down purchase ceiling is, usually
            within a single phone call.
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
            More from the Camp Lejeune VA series:{" "}
            <Link
              href="/va-loans-jacksonville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA loans in Jacksonville
            </Link>
            {" · "}
            <Link
              href="/va-loan-vs-conventional-loan"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA vs. conventional
            </Link>
            {" · "}
            <Link
              href="/best-neighborhoods-near-camp-lejeune"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Best neighborhoods near Camp Lejeune
            </Link>
          </p>
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
