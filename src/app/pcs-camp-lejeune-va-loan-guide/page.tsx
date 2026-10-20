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

const PATH = "/pcs-camp-lejeune-va-loan-guide";
const LAST_UPDATED_DISPLAY = "April 2026";
const LAST_UPDATED_ISO = "2026-04-23";

export const metadata: Metadata = buildMetadata({
  title: "PCS to Camp Lejeune VA Loan Guide - Week-by-Week",
  description:
    "A practical week-by-week PCS timeline for buying a home at Camp Lejeune with a VA loan, from orders received to closing day, written by an Army Veteran.",
  path: PATH,
  ogType: "article",
});

const faqs = [
  {
    q: "How early should I start the VA loan process before I PCS to Camp Lejeune?",
    a: "Start the day you have orders in hand, earlier if your orders are likely. The minimum useful runway is about 60 days from contract to close, and you want pre-approval and a buyer's agent lined up before you start house hunting. From orders to keys, 90-120 days is comfortable; 60 days is doable but tight; 30 days is possible only if everything is pre-staged.",
  },
  {
    q: "Can I close on a Camp Lejeune home before I officially report?",
    a: "Yes, in most cases. The VA requires that you intend to occupy the home as a primary residence within a reasonable time of closing, usually interpreted as 60 days. As long as your report date falls within that window, closing before reporting is standard. Plenty of the active-duty buyers I work with sign closing documents in their first week at Camp Lejeune or even before they arrive.",
  },
  {
    q: "What if my PCS orders get cancelled or modified after I'm under contract?",
    a: "Talk to your lender and your buyer's agent the day it happens. VA underwriting cares about your stated occupancy intent. If orders change before closing, we may be able to restructure the file. Sometimes the deal continues with documentation, sometimes the cleanest path is a contract cancellation under the financing or military clause. Don't try to push through and figure it out later.",
  },
  {
    q: "Should I buy or rent when I first PCS to Camp Lejeune?",
    a: "Honest answer: depends on your tour length and your financial picture. If you're on a 3-year tour, the math on buying versus renting in Jacksonville is usually close. On a 4-year tour or with intent to extend, buying typically wins on the financial side, especially with a VA loan's $0-down structure. The right answer is run real numbers. Don't take a generic blog post's word for it.",
  },
  {
    q: "Can I use a VA loan if my spouse is the homeowner and I'm the service member?",
    a: "VA loans require the eligible service member or Veteran on the loan and on title. Your spouse can be on the loan and title with you. Most VA buyers I work with structure it as both names. A VA loan with only the spouse (not the service member) on it is not a thing. If your spouse has independent VA-eligible service, that's a different conversation.",
  },
  {
    q: "What does my BAH cover and how does it affect VA loan qualification?",
    a: "BAH (Basic Allowance for Housing) for Camp Lejeune-area service members is real, recurring income that VA underwriting absolutely counts. It's typically the most stable line on a Marine's income calculation. We use it to qualify for the mortgage payment, and most active-duty buyers I work with structure their target payment to land at or near their BAH so the home covers itself.",
  },
  {
    q: "How long does the VA appraisal take in Onslow County?",
    a: "Generally 7-14 days from order. The VA's panel of appraisers covers the area well, and most files I run come back within that window. Slowdowns happen when the property has condition issues that trigger Minimum Property Requirement re-inspections. Working with a buyer's agent who understands VA MPRs is the single best way to avoid appraisal-related delays.",
  },
];

const phases = [
  {
    when: "12+ weeks out",
    title: "Orders in hand or expected",
    items: [
      "Pull your Certificate of Eligibility (your lender can do this in minutes)",
      "Confirm your full vs. partial VA entitlement status",
      "Get a fully underwritten pre-approval (income, assets, credit, DTI all verified)",
      "Identify a Jacksonville-area buyer's agent who works with military families",
      "Pull a credit report and address any flags before house hunting",
      "Build a rough budget that includes BAH, taxes, insurance, and HOA dues",
    ],
  },
  {
    when: "8-10 weeks out",
    title: "House hunt with real numbers",
    items: [
      "Tour neighborhoods virtually or in person if you can take a house-hunting trip",
      "Narrow to 2-3 areas that match commute, schools, and price (Piney Green, Hubert, Sneads Ferry, etc.)",
      "Set up MLS alerts with your agent for matching inventory",
      "Drive school zones or research them remotely if your kids are school-age",
      "Confirm flood-zone exposure on any property you seriously consider",
    ],
  },
  {
    when: "6-8 weeks out",
    title: "Offer and contract",
    items: [
      "Write the offer with your buyer's agent",
      "Submit your VA pre-approval letter alongside the offer",
      "Negotiate seller concessions (VA-friendly closing-cost contributions)",
      "Sign the contract. Clock starts on inspection, appraisal, and underwriting",
    ],
  },
  {
    when: "4-6 weeks out",
    title: "Inspection, appraisal, underwriting",
    items: [
      "Order the home inspection (separate from the VA appraisal)",
      "VA appraisal is ordered through the lender; expect 7-14 days",
      "Lender requests final document updates (LES, bank statements, etc.)",
      "Lock your interest rate if you haven't yet",
      "Address any inspection items via repair request or credit",
    ],
  },
  {
    when: "2-4 weeks out",
    title: "Clear-to-close",
    items: [
      "Final underwriting approval issued",
      "Bind homeowners insurance with a local agent (and flood insurance if applicable)",
      "Title commitment reviewed and approved",
      "Closing Disclosure issued at least 3 business days before closing",
      "Verify wire instructions for closing funds with the title company by phone, never by email alone",
    ],
  },
  {
    when: "Closing week",
    title: "Sign and report",
    items: [
      "Final walk-through 24-48 hours before closing",
      "Bring photo ID and your closing-funds wire confirmation",
      "Sign at the title company or via remote online notarization if pre-arranged",
      "Get keys, take possession, occupy within 60 days",
      "Update your DEERS / official military housing paperwork",
    ],
  },
];

export default function Page() {
  const url = `${site.url}${PATH}`;
  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "How to PCS to Camp Lejeune and Buy a Home with a VA Loan - Week by Week",
    description:
      "A timeline-driven guide for Marines PCS'ing to Camp Lejeune and buying a home with a VA loan. Action items by phase, written by an Army Veteran loan officer.",
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
      { "@type": "Thing", name: "PCS Camp Lejeune home buying" },
      { "@type": "Thing", name: "VA loan PCS timeline" },
      { "@type": "Place", name: "Camp Lejeune" },
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
          { label: "PCS to Camp Lejeune Guide" },
        ]}
        eyebrow="PCS moves · Camp Lejeune"
        title="How to PCS to Camp Lejeune and buy a home with a VA loan."
        lead="A week-by-week timeline for Marines and Navy corpsmen with orders to Camp Lejeune. From the day orders drop to the day you sign at closing, written by a Veteran who's been on the receiving end of a PCS."
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
            As an Army Veteran, I know what short-notice orders do to a
            household, to a savings account, and to your sleep, and I
            know what it&apos;s like to try to buy a house in the middle
            of a PCS.
          </p>
          <p>
            This guide is the timeline I wish someone had handed me. If
            you have orders to Camp Lejeune (or you&apos;re expecting
            them) and you want to buy with a VA loan when you arrive,
            this is the path. For the broader strategy on using a VA
            loan in this market, start with my{" "}
            <Link
              href="/va-loans-jacksonville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              complete VA loan guide for Camp Lejeune &amp; Jacksonville,
              NC
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Why PCS timing breaks deals */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>The core issue</Eyebrow>
          <Heading level={2} className="mt-4">
            Why PCS timing breaks more VA deals than anything else.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The VA loan program is designed around a specific assumption:
              you&apos;ll occupy the home as your primary residence within
              a reasonable time of closing, usually 60 days. PCS timing
              is the variable most likely to violate that assumption, and
              it&apos;s the variable most likely to derail an otherwise
              clean file.
            </p>
            <p>
              Three timing failure modes I see most often:
            </p>
            <ul className="space-y-3 pl-1">
              <li>
                <strong>The orders-cancelled mid-contract scenario.</strong>{" "}
                You go under contract assuming a report date, orders shift,
                and now your occupancy intent is in question.
              </li>
              <li>
                <strong>The we-haven&apos;t-started-yet scenario.</strong>{" "}
                You report to Camp Lejeune, then start looking for a
                lender. By the time you&apos;re pre-approved, the best
                inventory is gone and you&apos;re into temporary lodging
                or a stop-gap rental.
              </li>
              <li>
                <strong>The we-tried-to-do-it-all-remotely scenario.</strong>{" "}
                Buying sight-unseen from your previous duty station
                usually works, but only when the lender, agent, and you
                are all aligned on tight communication. One missed
                handoff and the timeline collapses.
              </li>
            </ul>
            <p>
              All three are avoidable with a real timeline. Here&apos;s
              the one I run.
            </p>
          </div>
        </div>
      </Section>

      {/* Week-by-week timeline as printable checklist */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The timeline</Eyebrow>
          <Heading level={2} className="mt-4">
            The PCS-to-keys checklist, phase by phase.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Print this page or save it. The phases below are calibrated
            to a comfortable 12-week runway. Compress as needed if your
            orders give you less.
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
                {p.title}
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

      {/* Three common PCS scenarios */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>In practice</Eyebrow>
          <Heading level={2} className="mt-4">
            Three common Camp Lejeune PCS scenarios.
          </Heading>
          <div className="mt-8 space-y-8 text-lg leading-relaxed text-ink/80">
            <div>
              <h3 className="font-display text-xl text-ink">
                Scenario 1: Orders in hand, 90 days out
              </h3>
              <p className="mt-3">
                The cleanest case. We pull your COE and pre-approve you
                while you&apos;re still at your current duty station. You
                schedule a house-hunting trip in week 6 or 7, write an
                offer that week, go under contract on a 30-day close, and
                sign documents within your first two weeks at Camp
                Lejeune. Most of my smoothest PCS closings look like
                this.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-ink">
                Scenario 2: Orders expected but not in hand
              </h3>
              <p className="mt-3">
                You&apos;re fairly sure orders are coming but they
                haven&apos;t dropped. Pre-approval is still useful: it
                lets us run scenarios with real numbers and shortens the
                runway when orders do come. Don&apos;t go under contract
                without orders unless your contract has a clear military
                clause; the risk of orders not landing where you expect
                is too high.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-ink">
                Scenario 3: Already at Camp Lejeune in temporary lodging
              </h3>
              <p className="mt-3">
                Common situation: you reported, you&apos;re in TLF or a
                short-term rental, and now you want to buy. Skip the
                pre-approval shopping phase: get pre-approved
                immediately and start writing offers within the first
                two weeks. Most of the temporary-housing buyers I work
                with close within 45 days of reporting.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mistakes that blow up PCS purchases */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>What not to do</Eyebrow>
          <Heading level={2} className="mt-4">
            Mistakes that blow up PCS-driven home purchases.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <ul className="space-y-4 pl-1">
              <li>
                <strong>Opening new credit during the file.</strong> A new
                car loan, a new credit card, even a co-signed loan can
                shift your DTI enough to undo your pre-approval. Don&apos;t
                open new credit until you have keys.
              </li>
              <li>
                <strong>Large, unexplained deposits.</strong> Underwriting
                will source every deposit over a small threshold. Cash
                deposits, Venmo transfers, gifts not properly documented.
                All of these can delay the file. Talk to your lender
                before any non-payroll deposit hits your account.
              </li>
              <li>
                <strong>Switching jobs mid-file.</strong> Some job changes
                are fine (same field, similar pay, with a written offer).
                Many are not. Always loop in your lender before signing
                anything.
              </li>
              <li>
                <strong>Hiding orders changes from your lender.</strong>{" "}
                If your orders shift, tell us. The earlier we know, the
                more options we have to keep the file alive.
              </li>
              <li>
                <strong>Picking the lender by rate alone.</strong> A 0.125%
                lower rate from a lender who&apos;s never closed a VA
                loan in Onslow County is not a bargain. PCS deals
                require a lender who runs them every week and an agent
                who knows military timing.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* BAH and special situations */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Special situations</Eyebrow>
          <Heading level={2} className="mt-4">
            BAH, dual-military, and the geographic-bachelor question.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              <strong>BAH:</strong> Camp Lejeune BAH varies by rank and
              dependent status, and it&apos;s real income that VA
              underwriting absolutely counts. Most of the active-duty
              buyers I work with target a monthly payment that lands at
              or just below their BAH so the home effectively pays for
              itself.
            </p>
            <p>
              <strong>Dual-military couples:</strong> Both spouses
              deployable, both possibly PCS-eligible. We can use both
              incomes if both are W-2 stable. The occupancy question gets
              more complex: at least one spouse must intend to occupy as
              primary residence within the 60-day window.
            </p>
            <p>
              <strong>Geographic bachelor:</strong> Service member at
              Camp Lejeune, family staying at the previous duty station.
              VA loans still work for a service member buying near Camp
              Lejeune as the primary residence, but you have to actually
              occupy. This is one of the situations where partial-vs-full
              entitlement and prior-VA-loan history matters most. See{" "}
              <Link
                href="/va-loan-limits-onslow-county-nc"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                VA loan limits in Onslow County
              </Link>{" "}
              for the entitlement math, and{" "}
              <Link
                href="/va-loan-vs-conventional-loan"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                VA vs. conventional
              </Link>{" "}
              if you&apos;re weighing whether to use entitlement at all
              for a short tour.
            </p>
            <p>
              <strong>Picking the right neighborhood:</strong> Commute to
              the right gate matters more than commute to base in
              general. See{" "}
              <Link
                href="/best-neighborhoods-near-camp-lejeune"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                best neighborhoods near Camp Lejeune
              </Link>{" "}
              for a gate-by-gate breakdown.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            FAQ: PCS to Camp Lejeune with a VA loan.
          </Heading>
        </div>
        <Accordion items={faqs} className="mt-12" />
      </Section>

      {/* Closing CTA */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Talk to a Veteran loan officer</Eyebrow>
          <Heading level={2} className="mt-4">
            Don&apos;t plan a PCS purchase off a generic checklist.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            I&apos;ve lived through the orders-changed-everything
            version of a PCS. I know how fragile the timeline is, and I
            know what it takes to keep a VA loan alive when service
            life refuses to cooperate. Send me your orders timeline and
            I&apos;ll build the rest of the plan around it.
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
              href="/best-neighborhoods-near-camp-lejeune"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Best neighborhoods near Camp Lejeune
            </Link>
            {" · "}
            <Link
              href="/va-loan-pcs-checklist"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Universal PCS checklist
            </Link>
            {" · "}
            <Link
              href="/funding-fee-waiver-disabled-veterans"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Disabled-Veteran funding fee waiver
            </Link>
          </p>
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
