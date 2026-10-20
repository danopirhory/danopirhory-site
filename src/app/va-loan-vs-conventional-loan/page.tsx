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

const PATH = "/va-loan-vs-conventional-loan";
const LAST_UPDATED_DISPLAY = "April 2026";
const LAST_UPDATED_ISO = "2026-04-23";

export const metadata: Metadata = buildMetadata({
  title: "VA Loan vs. Conventional Loan - Which Is Better?",
  description:
    "An honest VA-vs-conventional comparison for Camp Lejeune buyers: when each one wins, the funding-fee math, and a decision flow from a Veteran loan officer.",
  path: PATH,
  ogType: "article",
});

const faqs = [
  {
    q: "Should I always use my VA loan benefit if I'm eligible?",
    a: "No. The VA loan is the strongest mortgage product for most primary-residence purchases by service members and Veterans, but it's not the answer in every scenario. Investment property purchases, second homes, and some short-tour situations can favor conventional. The right call depends on entitlement, funding fee, down payment availability, and how long you'll hold the property.",
  },
  {
    q: "Does PMI on a conventional loan ever beat the VA funding fee?",
    a: "Sometimes. If you're putting 20% down, conventional has no PMI and no funding fee. That's a clean win over VA in pure cost terms (you'd still need to compare rates). At 5% or 10% down on conventional, PMI applies but can drop off automatically once you reach 20% equity. The VA funding fee is a one-time cost; conventional PMI is a recurring monthly cost. Run the breakeven year before you decide.",
  },
  {
    q: "Can I use a VA loan for an investment property?",
    a: "Not directly. VA loans require primary-residence occupancy. The exception is multi-unit properties (up to 4 units) where you live in one unit. Pure investment property purchases (single-family rentals you don't live in) don't qualify for VA. Conventional, DSCR, or other investor loan products are the right tools there.",
  },
  {
    q: "If I have great credit and 20% to put down, why would I use VA?",
    a: "Sometimes you wouldn't. With 20% down and an 800 credit score, conventional often beats VA on total cost over 5-7 years because there's no funding fee and no PMI. But if you'd rather keep the 20% in the market, in reserves, or in another property and use $0 down with VA, the opportunity cost calculation can flip the answer back. There's no universal rule. It depends on what else you'd do with the cash.",
  },
  {
    q: "How does the VA funding fee compare to conventional PMI in real numbers?",
    a: "Funding fee is a one-time charge, typically a low single-digit percentage of the loan amount, and it's waived entirely for Veterans with a service-connected disability rating. Conventional PMI is a monthly cost (varies by credit and LTV) that continues until you hit 20% equity. On a 5-year hold with no disability waiver, VA usually still wins on total cost. On a 15-year hold with strong credit and 5% down, the math gets closer.",
  },
  {
    q: "Are conventional loans easier to get accepted by sellers in Jacksonville?",
    a: "Sometimes, but it's mostly perception. Sellers and listing agents who've had bad VA experiences (slow appraisals, condition issues, weak pre-approvals) sometimes flinch at VA offers. The fix is the strength of the pre-approval and the lender's reputation, not switching loan types. A clean fully-underwritten VA pre-approval competes with conventional in this market.",
  },
];

export default function Page() {
  const url = `${site.url}${PATH}`;
  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "VA Loan vs. Conventional Loan: Which Is Better for Camp Lejeune Buyers?",
    description:
      "Honest, side-by-side comparison of VA loans and conventional loans for active-duty Marines, Veterans, and military families buying near Camp Lejeune.",
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
      { "@type": "Thing", name: "VA loan vs conventional loan" },
      { "@type": "Thing", name: "VA loan benefits" },
      { "@type": "Place", name: "Camp Lejeune" },
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
          { label: "VA vs. Conventional" },
        ]}
        eyebrow="VA vs. conventional"
        title="VA loan vs. conventional loan - which is better for Camp Lejeune buyers?"
        lead="An honest side-by-side from someone who runs both products every week. The cases where VA wins by a mile, the cases where conventional quietly wins, and a decision flow you can actually use."
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
            Most of the &quot;VA vs. conventional&quot; content on the
            internet is written by people who have never been in
            uniform and who default to recommending whichever product
            their company makes more money on. This is not that.
          </p>
          <p>
            I&apos;m a U.S. Army Veteran and I run both VA and
            conventional loans every week
            with {site.legalName}. The honest answer to which one is
            better for you depends on your entitlement, your funding-fee
            waiver status, your credit, your down payment availability,
            and how long you plan to hold the property. Sometimes
            it&apos;s VA by a mile. Sometimes it&apos;s conventional.
            Here&apos;s the framework I use.
          </p>
          <p>
            For the broader VA loan strategy in this market, start with
            my{" "}
            <Link
              href="/va-loans-jacksonville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              complete guide for Camp Lejeune &amp; Jacksonville, NC
              homebuyers
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Side-by-side comparison table */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Side by side</Eyebrow>
          <Heading level={2} className="mt-4">
            VA loan vs. conventional loan: feature comparison.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            High-level comparison across the dimensions that actually
            move the needle for Camp Lejeune buyers. Read the row, then
            read the section below to see when each one matters.
          </p>
        </div>
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="py-3 pr-4 font-display text-base text-ink">Feature</th>
                <th className="py-3 pr-4 font-display text-base text-ink">VA loan</th>
                <th className="py-3 font-display text-base text-ink">Conventional loan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">Down payment</td>
                <td className="py-4 pr-4 text-ink/80">$0 with full entitlement</td>
                <td className="py-4 text-ink/80">3-20% (5%+ typical)</td>
              </tr>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">PMI / mortgage insurance</td>
                <td className="py-4 pr-4 text-ink/80">None, ever</td>
                <td className="py-4 text-ink/80">Required &lt; 20% down; drops at 20% equity</td>
              </tr>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">One-time funding fee</td>
                <td className="py-4 pr-4 text-ink/80">Yes (waived for service-connected disability)</td>
                <td className="py-4 text-ink/80">No</td>
              </tr>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">Credit score minimum</td>
                <td className="py-4 pr-4 text-ink/80">No VA minimum; lender minimums typically 580-620</td>
                <td className="py-4 text-ink/80">620 minimum; 740+ for best pricing</td>
              </tr>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">Debt-to-income (DTI) ceiling</td>
                <td className="py-4 pr-4 text-ink/80">Flexible; residual-income test allows higher DTI</td>
                <td className="py-4 text-ink/80">Generally 45-50% max</td>
              </tr>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">Seller concessions</td>
                <td className="py-4 pr-4 text-ink/80">Up to 4% of value (plus all closing costs)</td>
                <td className="py-4 text-ink/80">3% (≤ 10% down), 6% (10-25%), 9% (25%+)</td>
              </tr>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">Property requirements</td>
                <td className="py-4 pr-4 text-ink/80">VA Minimum Property Requirements (MPRs)</td>
                <td className="py-4 text-ink/80">Standard appraisal, looser condition rules</td>
              </tr>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">Assumability</td>
                <td className="py-4 pr-4 text-ink/80">Yes, major asset in high-rate environments</td>
                <td className="py-4 text-ink/80">Generally no</td>
              </tr>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">Investment property</td>
                <td className="py-4 pr-4 text-ink/80">Not allowed (multi-unit ok if you occupy)</td>
                <td className="py-4 text-ink/80">Allowed (with higher down + rate)</td>
              </tr>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">Second home</td>
                <td className="py-4 pr-4 text-ink/80">Not allowed (primary residence only)</td>
                <td className="py-4 text-ink/80">Allowed</td>
              </tr>
              <tr className="border-b border-line align-top">
                <td className="py-4 pr-4 text-ink font-medium">Loan limits</td>
                <td className="py-4 pr-4 text-ink/80">None for full-entitlement borrowers</td>
                <td className="py-4 text-ink/80">FHFA conforming limit by county; jumbo above</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* When VA wins */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The VA-wins cases</Eyebrow>
          <Heading level={2} className="mt-4">
            When VA wins by a mile.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The vast majority of Camp Lejeune buyers I work with end
              up using their VA loan, and for good reason. The VA wins
              decisively in these scenarios:
            </p>
            <ul className="space-y-3 pl-1">
              <li>
                <strong>You have full entitlement and minimal down
                payment cash.</strong> $0 down vs. 5-20% down isn&apos;t a
                close call. VA wins, and you keep your savings as
                reserves.
              </li>
              <li>
                <strong>You have a service-connected disability rating.</strong>{" "}
                Funding-fee waiver means VA has zero one-time cost AND
                no PMI. Conventional can&apos;t mathematically catch up
                unless you&apos;re putting 20%+ down.
              </li>
              <li>
                <strong>Your credit is in the 580-680 range.</strong>{" "}
                VA pricing is more forgiving in this band than
                conventional pricing. Same credit profile, lower rate
                with VA.
              </li>
              <li>
                <strong>You&apos;re buying at the top of your DTI
                comfort zone.</strong> The VA&apos;s residual-income
                test gives you more room than conventional&apos;s
                strict DTI ceiling, and BAH is fully counted as
                qualifying income.
              </li>
              <li>
                <strong>You think rates may stay high for years.</strong>{" "}
                Assumability is a real long-term asset. A future buyer
                being able to take over your low-rate VA loan can be a
                meaningful selling point in a high-rate environment.
              </li>
              <li>
                <strong>You&apos;re buying a duplex/triplex/fourplex
                you&apos;ll occupy.</strong> $0 down on a 2-4 unit
                primary residence with rental income offsetting your
                mortgage is one of the most under-used VA strategies in
                the Jacksonville market.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* When conventional wins */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>The conventional-wins cases</Eyebrow>
          <Heading level={2} className="mt-4">
            When conventional quietly wins.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              Sometimes the right answer for a service member or Veteran
              is conventional. Honestly. These are the situations where
              I&apos;ve recommended conventional over VA:
            </p>
            <ul className="space-y-3 pl-1">
              <li>
                <strong>Investment property purchase.</strong> VA
                doesn&apos;t allow it. Conventional or DSCR is the
                tool. No close call.
              </li>
              <li>
                <strong>Second-home purchase.</strong> Same: VA is
                primary-residence only. If you&apos;re buying a
                vacation home or a future-rental getaway, conventional
                wins by default.
              </li>
              <li>
                <strong>Strong credit (740+) and 20%+ down.</strong>{" "}
                With no PMI and no funding fee, conventional often
                beats VA on total cost over a 5-10 year hold.
              </li>
              <li>
                <strong>You want to preserve your VA entitlement for a
                future purchase.</strong> If you&apos;re likely to PCS
                in 12-24 months and want full entitlement available
                later, using conventional now keeps your VA powder
                dry.
              </li>
              <li>
                <strong>You&apos;re buying a property that
                won&apos;t pass VA Minimum Property Requirements.</strong>{" "}
                Older homes, fixer-uppers, properties with non-permitted
                additions. Conventional has more flexibility on
                condition.
              </li>
              <li>
                <strong>Partial entitlement at a high price point with
                no down payment cash.</strong> The required down
                payment math under partial VA entitlement can sometimes
                be bigger than what a conventional loan with PMI
                requires. See{" "}
                <Link
                  href="/va-loan-limits-onslow-county-nc"
                  className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
                >
                  VA loan limits in Onslow County
                </Link>{" "}
                for the entitlement math.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Decision flow */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Decision flow</Eyebrow>
          <Heading level={2} className="mt-4">
            Which one is right for you - a quick decision flow.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Walk through these in order. The first &quot;yes&quot;
            usually points you in the right direction.
          </p>
        </div>
        <ol className="mt-12 space-y-6 max-w-3xl">
          {[
            {
              q: "Are you buying an investment property or a second home?",
              a: "Conventional (or DSCR for investment). VA is primary-residence only.",
            },
            {
              q: "Do you have a service-connected disability rating?",
              a: "VA, almost certainly. Funding fee waived + no PMI is a hard combination to beat.",
            },
            {
              q: "Are you putting 20%+ down with a 740+ credit score?",
              a: "Run the math both ways. Conventional often wins on total cost; VA wins on opportunity cost if you'd rather keep the cash invested elsewhere.",
            },
            {
              q: "Is your credit in the 580-680 range?",
              a: "VA. Better pricing in this credit band than conventional.",
            },
            {
              q: "Do you have full entitlement and limited cash?",
              a: "VA. $0 down with no PMI is the strongest entry-point product available.",
            },
            {
              q: "Are you buying a 2-4 unit property to live in?",
              a: "VA, almost always. The rental income from the other units is the cherry on top.",
            },
            {
              q: "Are you near or above the conforming loan limit with partial entitlement?",
              a: "Compare carefully. Partial-entitlement VA jumbo math can sometimes underprice a conventional jumbo, sometimes overprice it. Run both.",
            },
          ].map((step, i) => (
            <li key={i} className="border-l-2 border-ink/15 pl-5">
              <div className="text-xs font-mono uppercase tracking-[0.14em] text-muted">
                Step {i + 1}
              </div>
              <h3 className="mt-2 font-display text-xl text-ink">
                {step.q}
              </h3>
              <p className="mt-2 text-ink/75 leading-relaxed">
                <strong>If yes:</strong> {step.a}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* The funding fee math */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>The math people skip</Eyebrow>
          <Heading level={2} className="mt-4">
            VA funding fee vs. conventional PMI: which costs more?
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              This is the question most VA-vs-conventional articles
              dodge with platitudes. Here&apos;s the actual framing:
            </p>
            <ul className="space-y-3 pl-1">
              <li>
                <strong>VA funding fee is a one-time charge.</strong>{" "}
                Typically a low single-digit percent of the loan amount,
                varying by down payment, first-vs-subsequent use, and
                service category. Often financed into the loan
                (you don&apos;t bring it to closing as cash). Waived
                entirely for disability-rated Veterans.
              </li>
              <li>
                <strong>Conventional PMI is a recurring monthly cost.</strong>{" "}
                Until you reach 20% equity. Varies by credit score and
                LTV. At 5% down with 700 credit, expect somewhere in
                the $150-$350 per month range, multiplied by the
                number of months until you hit 20% equity.
              </li>
              <li>
                <strong>The breakeven calculation is hold time.</strong>{" "}
                Short hold (3-5 years) often favors VA because you pay
                the funding fee once and PMI compounds monthly. Long
                hold (10+ years) at 20% down often favors conventional
                because there&apos;s zero ongoing mortgage-insurance
                cost after the initial PMI period ends.
              </li>
            </ul>
            <p>
              The cleanest way to know is to actually run both loans
              with real numbers: your loan amount, your credit, your
              expected hold period, and the live VA funding fee that
              applies to your situation. That takes about 15 minutes
              and produces a definitive answer instead of a generic
              comparison.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            FAQ: VA loan vs. conventional loan.
          </Heading>
        </div>
        <Accordion items={faqs} className="mt-12" />
      </Section>

      {/* Closing CTA */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Get a real quote</Eyebrow>
          <Heading level={2} className="mt-4">
            Run both, and then decide.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            VA-vs-conventional content on the internet is full of
            opinions. The actual answer for your specific situation
            requires your specific numbers: entitlement, credit,
            funding-fee waiver status, target purchase price, expected
            hold period. I&apos;ll run both side by side and tell you
            which one wins for you. No upsell, no preference for the
            product that pays the lender more.
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
              href="/va-loan-limits-onslow-county-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA loan limits
            </Link>
            {" · "}
            <Link
              href="/pcs-camp-lejeune-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              PCS to Camp Lejeune
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
