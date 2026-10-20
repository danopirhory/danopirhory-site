import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ComplianceNotice } from "@/components/ui/ComplianceNotice";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import { jsonLd, faqPageSchema } from "@/lib/schema";

const PATH = "/funding-fee-waiver-disabled-veterans";
const LAST_UPDATED_DISPLAY = "April 2026";
const LAST_UPDATED_ISO = "2026-04-23";

export const metadata: Metadata = buildMetadata({
  title: "VA Funding Fee Waiver for Disabled Veterans",
  description:
    "How the VA funding fee waiver works for disabled Veterans, surviving spouses, and Purple Heart recipients: eligibility, timing, refund rules.",
  path: PATH,
  ogType: "article",
});

const faqs = [
  {
    q: "Who qualifies for the VA funding fee waiver?",
    a: "Three groups, generally: Veterans receiving (or entitled to receive) compensation for a service-connected disability; surviving spouses of Veterans who died in service or from a service-connected disability and who are receiving Dependency and Indemnity Compensation; and Purple Heart recipients on active duty at the time of loan closing. Eligibility specifics are governed by federal law and VA policy. Confirm your current status directly with the VA before relying on a waiver in your closing math.",
  },
  {
    q: "How does the VA confirm my disability rating for the waiver?",
    a: "Through the VA's records. When your lender pulls your Certificate of Eligibility (COE), the COE typically reflects your funding fee status, including any exemption. If your COE shows a waiver, the lender doesn't charge the fee at closing. If it doesn't show one but you believe you qualify, the VA can issue a corrected COE.",
  },
  {
    q: "What if my disability rating decision is pending?",
    a: "It's worth a conversation with your lender about timing. If you're close to a rating decision, in some cases waiting a short period for the determination to be issued can save thousands at closing. The VA does have provisions to refund the funding fee if your disability rating becomes effective later and the rating's effective date predates your loan closing, but the refund process takes time and isn't a substitute for getting the waiver applied at closing when possible.",
  },
  {
    q: "Can a surviving spouse use the funding fee waiver?",
    a: "In specific cases, yes. The surviving spouse of a service member who died in the line of duty or from a service-connected disability may be eligible for VA loan benefits, including a funding fee waiver if the spouse is receiving Dependency and Indemnity Compensation (DIC). Remarriage rules and other eligibility factors apply. Confirm your specific situation with the VA before relying on the waiver.",
  },
  {
    q: "Does the waiver reduce my loan amount or my monthly payment?",
    a: "Both, indirectly. Most VA buyers finance the funding fee into the loan, so without a waiver your loan amount is slightly higher than your purchase price (and your monthly payment is slightly higher to match). With the waiver, your loan equals your purchase price minus your down payment: no funding fee added. Over the life of the loan, that's real interest savings as well.",
  },
  {
    q: "How much is the funding fee for someone who isn't waived?",
    a: "It varies by down payment, first-versus-subsequent VA loan use, and (historically) service category. The fee is a percentage of the loan amount and the schedule changes from time to time. Your lender will calculate your specific fee against current VA guidelines. The VA's official funding fee page is the authoritative reference.",
  },
  {
    q: "Can I get a refund of the funding fee I already paid if I become disability-rated later?",
    a: "Possibly. If your disability rating's effective date predates your loan closing, the VA may issue a refund of the funding fee. The refund process is administrative and takes time. If you're close to a rating decision, talk to your lender before closing about whether to wait for the decision or close now and pursue a refund later.",
  },
];

export default function Page() {
  const url = `${site.url}${PATH}`;
  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "VA Funding Fee Waiver for Disabled Veterans - How It Works",
    description:
      "A focused guide to the VA funding fee waiver: who qualifies, how it's documented through the COE, and what to do if your disability rating is pending.",
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
      { "@type": "Thing", name: "VA funding fee waiver" },
      { "@type": "Thing", name: "Disabled Veteran VA loan benefits" },
    ],
  };

  return (
    <>
      <script {...jsonLd(articleSchemaForGuide)} />
      <script {...jsonLd(faqPageSchema(faqs))} />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "VA Funding Fee Waiver" },
        ]}
        eyebrow="Funding fee waiver"
        title="The VA funding fee waiver for disabled Veterans."
        lead="The single most under-used part of the VA loan program. Here's who qualifies, how it's documented, and the timing decisions that can save thousands at closing."
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

      {/* Important compliance disclaimer up front */}
      <Section>
        <div className="max-w-3xl">
          <div className="rounded-md border border-line bg-paper px-6 py-5 text-base leading-relaxed text-ink/80">
            <p className="font-medium text-ink">A note on authority.</p>
            <p className="mt-3">
              VA disability rating eligibility is governed by federal law and VA
              policy, and only the VA can determine your specific status. The
              guidance below describes how the funding fee waiver typically
              works in practice for buyers I&apos;ve seen go through this, but
              it isn&apos;t a substitute for confirming your eligibility
              directly with the VA. The authoritative reference is{" "}
              <a
                href="https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                VA.gov&apos;s funding fee page
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* What it is */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>What it is</Eyebrow>
          <Heading level={2} className="mt-4">
            The funding fee, in plain English.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The VA funding fee is a one-time charge that helps fund the VA
              loan program. It applies to most VA purchases, refinances, and
              construction loans. The fee is calculated as a percentage of the
              loan amount and varies based on:
            </p>
            <ul className="space-y-3 pl-1">
              <li>
                <strong>Your down payment.</strong> $0-down purchases carry a
                higher fee than purchases with 5% or 10% down.
              </li>
              <li>
                <strong>First use vs. subsequent use.</strong> Your first VA
                loan typically carries a lower fee than later ones.
              </li>
              <li>
                <strong>Loan type.</strong> Purchase, IRRRL streamline refi,
                and cash-out refi each have different fee schedules.
              </li>
            </ul>
            <p>
              Most VA buyers finance the funding fee into the loan rather than
              paying it in cash at closing. Either way, it&apos;s a real cost
              that affects your total loan amount, your monthly payment, and
              your interest paid over the life of the loan.
            </p>
            <p>
              For a service-connected disabled Veteran with a waiver, that cost
              is <strong>zero</strong>. No fee charged at closing, no fee
              financed into the loan, no interest accrued on it over 30 years.
              For many of the buyers I work with, this is one of the most
              valuable single benefits in the entire VA program.
            </p>
          </div>
        </div>
      </Section>

      {/* Who qualifies */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Who qualifies</Eyebrow>
          <Heading level={2} className="mt-4">
            Three groups generally eligible for the waiver.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <h3 className="font-display text-xl text-ink mt-6">
              Veterans with a service-connected disability rating
            </h3>
            <p>
              Veterans who are receiving (or who would be entitled to receive
              if not for retirement pay) compensation for a service-connected
              disability typically qualify for the funding fee waiver. The
              waiver is documented through the VA&apos;s records and reflected
              on your Certificate of Eligibility.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Surviving spouses receiving DIC
            </h3>
            <p>
              The surviving spouse of a service member who died in the line of
              duty or from a service-connected disability may be eligible, and
              the funding fee waiver applies in many cases. Remarriage rules,
              DIC eligibility, and specific circumstances matter; this is one
              of the most under-used VA benefits in any market.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Purple Heart recipients on active duty
            </h3>
            <p>
              Active-duty service members who are Purple Heart recipients are
              generally eligible for the funding fee waiver under current VA
              policy. Confirm your specific eligibility through the VA before
              relying on the waiver in your closing math.
            </p>
          </div>
        </div>
      </Section>

      {/* How it's documented */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>How it&apos;s documented</Eyebrow>
          <Heading level={2} className="mt-4">
            The COE does the work.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              When your lender pulls your Certificate of Eligibility (COE), the
              COE typically reflects your funding fee status, including any
              exemption. If your COE shows that you&apos;re exempt, the lender
              simply doesn&apos;t charge the fee at closing. The Loan Estimate
              and Closing Disclosure will show $0 in the funding fee line.
            </p>
            <p>
              If your COE doesn&apos;t reflect your waiver but you believe you
              qualify (for instance, because your disability rating decision was
              issued recently and the COE on file is older), the VA can issue
              a corrected COE. Your lender can request this on your behalf, but
              it adds time to the file. Bring it up early.
            </p>
            <p>
              For active-duty Purple Heart recipients, documentation requirements
              can be a bit more involved. Talk to your lender at the start of
              the file about how your specific eligibility will be evidenced.
            </p>
          </div>
        </div>
      </Section>

      {/* Timing decisions */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>The timing decision</Eyebrow>
          <Heading level={2} className="mt-4">
            What to do if your disability rating is pending.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              This is the conversation that can save thousands. If your VA
              disability rating decision is pending and you&apos;re trying to
              close on a home, you have three general paths:
            </p>
            <ul className="space-y-3 pl-1">
              <li>
                <strong>Wait for the decision.</strong> If you&apos;re close to
                a rating decision and your home purchase timeline allows, waiting
                a few weeks for the determination to be issued can mean closing
                with the waiver already in place. Coordinate with your buyer&apos;s
                agent on contract timing.
              </li>
              <li>
                <strong>Close now and pursue a refund.</strong> If your timeline
                doesn&apos;t allow waiting, you can close without the waiver and
                potentially pursue a funding fee refund later if your rating&apos;s
                effective date predates your closing date. The refund process is
                administrative and takes time, but the money is real.
              </li>
              <li>
                <strong>Restructure the contract.</strong> Sometimes the right
                move is to modify the contract to accommodate a slightly later
                closing. The VA-friendly seller and a knowledgeable buyer&apos;s
                agent can usually accommodate this when the reason is clear.
              </li>
            </ul>
            <p>
              Which path makes sense depends on how close your rating decision
              is, how time-sensitive your contract is, and how much the funding
              fee would be on your specific loan amount. This is a conversation
              worth having with your lender before you sign a contract, not
              after.
            </p>
          </div>
        </div>
      </Section>

      {/* What it means in dollars */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>What it means in dollars</Eyebrow>
          <Heading level={2} className="mt-4">
            Why this benefit is worth your attention.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The dollar value of the funding fee waiver depends on your loan
              amount and the specific funding fee that would otherwise apply.
              For a typical $300K-$500K VA purchase loan in NC, the funding
              fee for a non-waived first-use $0-down buyer commonly runs into
              the thousands of dollars. The waiver eliminates that cost
              entirely.
            </p>
            <p>
              And because most buyers finance the funding fee into the loan,
              the waiver also eliminates the interest you&apos;d otherwise pay
              on that fee over the life of the loan. Over a 30-year term, the
              compounded savings is meaningfully larger than the fee itself.
            </p>
            <p>
              For disability-rated Veterans, this combination (no funding fee,
              no PMI, $0 down) produces a mortgage product with literally no
              mortgage-insurance cost in any form. There is no other loan type
              in the market that can match it.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            FAQ: VA funding fee waiver.
          </Heading>
        </div>
        <Accordion items={faqs} className="mt-12" />
      </Section>

      {/* Compliance + CTA */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Talk to a Veteran loan officer</Eyebrow>
          <Heading level={2} className="mt-4">
            Confirm your specific eligibility before counting on it.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            If you have a service-connected disability rating, a pending rating
            decision, or you&apos;re a surviving spouse trying to understand
            what benefits you have, the next step is a real conversation
            about your specific situation. The waiver mechanics are real but
            the eligibility specifics are individual.
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
          <ComplianceNotice className="mt-12" />
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
