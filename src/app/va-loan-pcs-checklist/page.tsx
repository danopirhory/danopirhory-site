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

const PATH = "/va-loan-pcs-checklist";
const LAST_UPDATED_DISPLAY = "April 2026";
const LAST_UPDATED_ISO = "2026-04-23";

export const metadata: Metadata = buildMetadata({
  title: "VA Loan PCS Checklist - Buy a Home With Orders in Hand",
  description:
    "Phase-by-phase VA loan checklist for any service member PCS-ing to North Carolina, cross-base, cross-branch, by an Army Veteran loan officer.",
  path: PATH,
  ogType: "article",
});

const phases = [
  {
    when: "Day 1: orders received (or imminent)",
    items: [
      "Take a photo of your orders. Save it somewhere persistent. You'll need it for the lender, the agent, and possibly the title company.",
      "Note your report date, your departure window, and any travel days authorized.",
      "Identify your destination base and the gates you'll most likely use day-to-day. Commute math drives neighborhood selection.",
      "Pull your free annual credit report from each of the three bureaus. Address surprises before they reach a lender.",
      "Estimate your housing budget against your destination BAH. The DoD publishes BAH rates by zip code, rank, and dependent status.",
    ],
  },
  {
    when: "Days 2-7: pull COE and start pre-approval",
    items: [
      "Contact a VA-fluent lender. I can pull your Certificate of Eligibility electronically, usually same-day for active duty.",
      "Upload your income documents: most recent LES, two most recent pay stubs (if you have civilian income), W-2s, two years of tax returns.",
      "Upload two months of bank statements showing the funds you'll use for earnest money and inspection.",
      "Authorize the credit pull. Underwriter reviews the file end-to-end against actual VA program guidelines.",
      "Request your pre-approval letter, sized to your target price point with a comfortable cushion.",
    ],
  },
  {
    when: "Weeks 2-4: identify destination and start house hunt",
    items: [
      "Pick a buyer's agent in your destination market who works with military families regularly. Ask the lender for referrals.",
      "Set up MLS alerts in 1-2 specific submarkets near your base. Don't try to shop the whole state.",
      "Schedule a house-hunting trip if you can. Most service members manage one trip; some buy sight-unseen via video tours.",
      "Verify school assignments if your kids are school-age. The school zoning often matters more than the address itself.",
      "Confirm flood-zone exposure on any property you're seriously considering, especially in coastal NC markets.",
    ],
  },
  {
    when: "Weeks 4-6: offer and contract",
    items: [
      "Write the offer with your buyer's agent, including the pre-approval letter.",
      "Negotiate seller concessions. VA allows up to 4% in concessions plus standard closing-cost contributions.",
      "Sign the contract. The clock starts on inspection, appraisal, and underwriting.",
      "Schedule the home inspection (separate from the VA appraisal).",
      "Lock your interest rate if you haven't yet. Discuss the lock period with your lender to avoid expensive extensions.",
    ],
  },
  {
    when: "Weeks 6-8: appraisal, inspection, underwriting",
    items: [
      "VA appraisal ordered through the lender; expect 7-14 days in most NC counties.",
      "Home inspection performed during the contract's inspection period; review the report carefully.",
      "Negotiate any inspection items via repair request, credit, or contract amendment.",
      "Underwriter requests final document updates: most recent LES, refreshed bank statements.",
      "Bind homeowners insurance with a local agent (and flood insurance if applicable).",
    ],
  },
  {
    when: "Weeks 8-12: clear-to-close and sign",
    items: [
      "Final underwriting approval issued.",
      "Title commitment reviewed and approved.",
      "Closing Disclosure issued at least 3 business days before closing.",
      "Verify wire instructions for closing funds with the title company by phone. Never trust email-only instructions.",
      "Final walk-through 24-48 hours before closing.",
      "Sign at the title company or via remote online notarization if pre-arranged.",
      "Get keys. Occupy within 60 days of closing per VA occupancy requirements.",
    ],
  },
];

const faqs = [
  {
    q: "How early should I start the VA loan process before my PCS report date?",
    a: "Start the day you have orders in hand. The minimum useful runway is about 60 days from contract to close. From orders to keys, 90-120 days is comfortable; 60 days is doable but tight; 30 days is possible only if everything is pre-staged.",
  },
  {
    q: "Can I close before I officially report to my new base?",
    a: "Yes, in most cases. The VA requires occupancy within a reasonable time of closing, typically interpreted as 60 days. As long as your report date falls within that window, closing before reporting is standard practice.",
  },
  {
    q: "What documents do I need to give my lender?",
    a: "At minimum: most recent LES, two months of bank statements, two years of W-2s and tax returns (especially if you have any non-W-2 income), photo ID, and your orders. Self-employment, commission income, or unusual financial situations require additional documentation.",
  },
  {
    q: "What if my orders change mid-file?",
    a: "Tell your lender and your buyer's agent the day it happens. VA underwriting cares about your stated occupancy intent. We can usually restructure the file when changes are caught early; the worst-case outcome is a contract cancellation under the financing or military clause.",
  },
  {
    q: "Should I include a military clause in my offer?",
    a: "Yes, when possible. A military clause allows you to terminate the contract if your orders change in ways that prevent the purchase. Listing agents in heavily-military markets understand and accept these clauses; in less military-experienced markets, your buyer's agent may need to explain why.",
  },
  {
    q: "Can I PCS-buy without traveling to the destination first?",
    a: "Yes, sight-unseen purchases work, especially with a knowledgeable buyer's agent who walks the property for you via video. The risk drops if you can manage one in-person visit (for inspection or final walk-through), but plenty of service members close on properties they've never seen in person.",
  },
];

export default function Page() {
  const url = `${site.url}${PATH}`;
  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "VA Loan PCS Checklist - Buy a Home With Orders in Hand",
    description:
      "Universal phase-by-phase VA loan checklist for any service member PCS'ing to a new duty station. Cross-base, cross-branch.",
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
      { "@type": "Thing", name: "VA loan PCS checklist" },
      { "@type": "Thing", name: "Buying a home with PCS orders" },
    ],
  };

  return (
    <>
      <script {...jsonLd(articleSchemaForGuide)} />
      <script {...jsonLd(faqPageSchema(faqs))} />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "VA Loan PCS Checklist" },
        ]}
        eyebrow="PCS checklist"
        title="The VA loan PCS checklist."
        lead="A universal phase-by-phase checklist for any service member with PCS orders. Cross-base, cross-branch: works whether you're heading to Camp Lejeune, Fort Liberty, Cherry Point, Seymour Johnson, or any other NC base. Written by an Army Veteran loan officer."
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
            This is the universal version of the PCS-buy playbook. The
            timeline, the document list, the order of operations: the
            fundamentals don&apos;t change between bases or branches. What
            changes is the local market: which neighborhoods, which agents,
            which appraisers, what the typical price point looks like. Use
            this checklist as the operating system; pair it with one of the
            base-specific guides below for the local layer.
          </p>
          <p>
            Base-specific deep-dives:{" "}
            <Link
              href="/pcs-camp-lejeune-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Camp Lejeune
            </Link>
            {" · "}
            <Link
              href="/fort-liberty-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Fort Liberty
            </Link>
            {" · "}
            <Link
              href="/va-loans-cherry-point-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Cherry Point
            </Link>
            {" · "}
            <Link
              href="/seymour-johnson-afb-va-loan-guide"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Seymour Johnson
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Why a checklist */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Why a checklist</Eyebrow>
          <Heading level={2} className="mt-4">
            PCS timing breaks more deals than anything else.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The VA loan program is built around occupancy intent. You have to
              actually move into the home as your primary residence within a
              reasonable window of closing. PCS is the variable most likely to
              violate that assumption when nothing else in the file goes wrong.
            </p>
            <p>
              The fix is doing things in the right order on a realistic
              timeline. The phases below are calibrated to a comfortable 12-week
              runway. Compress as needed; expand if you have more lead time.
              Work the list in order.
            </p>
          </div>
        </div>
      </Section>

      {/* The checklist */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The checklist</Eyebrow>
          <Heading level={2} className="mt-4">
            Phase by phase.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Print this page or save it. Each item below is a real action. Most
            of them take less than 30 minutes once you know what you&apos;re
            doing.
          </p>
        </div>
        <div className="mt-12 space-y-10">
          {phases.map((p) => (
            <div
              key={p.when}
              className="border-l-2 border-ink/15 pl-6 md:pl-8"
            >
              <div className="text-xs font-mono uppercase tracking-[0.14em] text-muted">
                {p.when}
              </div>
              <h3 className="mt-1 font-display text-2xl text-ink">
                Action items
              </h3>
              <ul className="mt-5 space-y-3">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-ink/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[6px] inline-block h-4 w-4 shrink-0 rounded-sm border border-ink/40"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Things to avoid */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>What not to do</Eyebrow>
          <Heading level={2} className="mt-4">
            Common PCS-buy mistakes.
          </Heading>
          <ul className="mt-8 space-y-3 text-lg leading-relaxed text-ink/80 pl-1">
            <li>
              <strong>Opening new credit during the file.</strong> A new car
              loan, a new credit card, even a co-signed loan can shift your DTI
              enough to undo your pre-approval.
            </li>
            <li>
              <strong>Hiding orders changes from your lender.</strong> The
              earlier we know about modifications, the more options we have.
            </li>
            <li>
              <strong>Picking the lender by rate alone.</strong> A 0.125% lower
              rate from a lender who&apos;s never closed a VA file in your
              destination county is not a bargain.
            </li>
            <li>
              <strong>Skipping the buyer&apos;s home inspection because the VA
              appraisal exists.</strong> Different purposes. Always pay for the
              separate inspection.
            </li>
            <li>
              <strong>Wiring closing funds based on email-only
              instructions.</strong> Wire fraud targeting real estate closings
              is rampant. Always verify wire instructions by phone with the
              title company directly.
            </li>
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            FAQ: PCS VA loan checklist.
          </Heading>
        </div>
        <Accordion items={faqs} className="mt-12" />
      </Section>

      {/* CTA */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Talk to a Veteran loan officer</Eyebrow>
          <Heading level={2} className="mt-4">
            Don&apos;t plan a PCS buy off a generic checklist alone.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Send me your orders timeline and destination, and I&apos;ll build a
            specific finance plan around it. The checklist gives you the
            framework; the plan gives you the dates, the people, and the
            numbers.
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
