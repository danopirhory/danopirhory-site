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

const PATH = "/va-loans-jacksonville-nc";

export const metadata: Metadata = buildMetadata({
  title: "VA Loan Jacksonville NC - Camp Lejeune Buyer's Guide",
  description:
    "A complete VA loan guide for Camp Lejeune and Jacksonville, NC: eligibility, process, local market notes, and PCS timing from an Army Veteran.",
  path: PATH,
  ogType: "article",
});

const faqs = [
  {
    q: "Can I use a VA loan while I'm still active duty at Camp Lejeune?",
    a: "Yes. Active-duty service members generally become eligible for a VA loan after 90 continuous days of active service. You'll need a Certificate of Eligibility (COE), which I can pull on your behalf in most cases within a day. Many of the buyers I work with at Camp Lejeune are still active duty when they close.",
  },
  {
    q: "Do I have to put any money down on a VA loan in Jacksonville?",
    a: "No. The VA does not require a down payment as long as the purchase price is within your entitlement. That's the headline benefit: most Camp Lejeune buyers I work with close with $0 down on the loan itself. You'll still need funds for earnest money, an inspection, and any negotiated closing costs not covered by seller concessions.",
  },
  {
    q: "What is the VA funding fee and can it be waived?",
    a: "The VA funding fee is a one-time charge that funds the VA loan program. The percentage varies by down payment, first-versus-subsequent use, and service category. The fee is fully waived for Veterans with a service-connected disability rating, surviving spouses receiving DIC, and Purple Heart recipients on active duty. Most disabled Veterans I work with pay no funding fee at all. Confirm your current waiver status with the VA before closing. Exact rates change over time.",
  },
  {
    q: "How do VA loans handle PCS orders if I have to move before closing?",
    a: "PCS timing is a real risk on VA loans because residency intent matters. The VA requires that you intend to occupy the home as your primary residence within a reasonable time, usually 60 days, though there's flexibility for active-duty buyers with deployment or PCS situations. If you're house hunting before orders, we structure the file so a PCS doesn't unwind the deal. If you have orders in hand, we plan around the report date.",
  },
  {
    q: "Can I use a VA loan to buy a multi-family property near Camp Lejeune?",
    a: "Yes. VA loans can finance up to a 4-unit property as long as you live in one of the units as your primary residence. This is one of the most under-used VA strategies for service members in Jacksonville. You can have tenants in the other units helping cover the mortgage, build equity, and the rental income can sometimes count toward qualification.",
  },
  {
    q: "Will a VA loan close as fast as a conventional loan in Onslow County?",
    a: "Generally yes, when the file is run cleanly. The myth that VA loans always close slower comes from situations where the appraisal is delayed or the property has condition issues that trigger a re-inspection. With a lender who knows VA appraisers in the Onslow County area and an agent who understands the VA's Minimum Property Requirements, 30-day closes are normal.",
  },
  {
    q: "What are the VA loan limits in Onslow County right now?",
    a: "For Veterans with full entitlement (no other active VA loans), there is no maximum loan amount you can borrow with $0 down. The old county loan limits were eliminated for full-entitlement borrowers under the Blue Water Navy Vietnam Veterans Act. If you have a partial entitlement (existing VA loan, prior default, etc.), the conforming loan limit for the county applies and you'd need a down payment for amounts above it. Always confirm your current entitlement status before house hunting at higher price points.",
  },
  {
    q: "Are sellers in Jacksonville reluctant to accept VA offers?",
    a: "Sometimes, usually because of outdated information about VA appraisals or VA fee structures. The fix is a strong pre-approval letter, a knowledgeable buyer's agent, and seller-credit math that pencils for both sides. I write VA pre-approvals that are explicit about what the seller is and isn't on the hook for, so listing agents can compare apples to apples with conventional offers.",
  },
  {
    q: "Can I use my VA loan more than once?",
    a: "Yes. VA loan benefits are reusable for the rest of your life. You can also have more than one VA loan at the same time in some cases (typically when you've had a duty-station change and aren't selling the previous home). This is called second-tier entitlement and the math gets specific. If you've used your VA loan before, we'll calculate exactly what's available before you make an offer.",
  },
  {
    q: "Does the VA actually issue VA loans?",
    a: "No. The VA guarantees a portion of the loan, which is why lenders can offer the no-down-payment, no-PMI structure. The actual loan comes from a VA-approved private lender. When you compare VA lenders, you're comparing rate, fees, communication, and how well they know the program, not the underlying VA guarantee.",
  },
  {
    q: "What credit score do I need for a VA loan in Jacksonville?",
    a: "The VA itself does not set a minimum credit score, but lenders do. Most lenders look for 580 or 620 minimum. Higher scores get better rates. If your score is borderline, we can run scenarios to see whether a few months of credit-rebuilding moves you into a meaningfully better rate bracket. Sometimes the wait is worth it, sometimes the cost of waiting (rising prices, expiring rate environment) outweighs it. I'll give you the honest math.",
  },
  {
    q: "How do I get a Certificate of Eligibility (COE)?",
    a: "Three options: pull it yourself through the VA's eBenefits portal, request it by mail with VA Form 26-1880, or have your lender pull it electronically through the VA's automated system. Option three is the fastest. I can usually pull a COE within minutes for active-duty service members and within a day for most Veterans.",
  },
];

const processSteps = [
  {
    n: "01",
    t: "Pull your COE",
    b: "I can request your Certificate of Eligibility through the VA's automated system, usually same-day for active-duty service members. This confirms your entitlement amount before we run any numbers.",
  },
  {
    n: "02",
    t: "Get fully underwritten pre-approval",
    b: "Not a soft pre-qual: a real, verified pre-approval that holds up against conventional offers. Income, assets, credit, and DTI all reviewed up front so the offer letter you take to a Jacksonville listing carries weight.",
  },
  {
    n: "03",
    t: "House hunt with realistic numbers",
    b: "We build a budget that accounts for property taxes in Onslow County, homeowners insurance for the area, the VA funding fee (or your waiver), and any HOA dues. You shop knowing your true monthly payment, not a placeholder.",
  },
  {
    n: "04",
    t: "Offer and contract",
    b: "Your buyer's agent writes the offer; I provide the pre-approval letter and any seller-concession math. For VA buyers I lay out closing-cost split scenarios so the listing agent has clean numbers to take back to the seller.",
  },
  {
    n: "05",
    t: "VA appraisal and inspection",
    b: "The VA appraiser is ordered through a VA-managed panel, different from a conventional appraisal. I work with appraisers familiar with Onslow County and the Minimum Property Requirements specific to VA. We do this in parallel with your separate buyer-paid home inspection.",
  },
  {
    n: "06",
    t: "Underwriting and clear-to-close",
    b: "Final document review, title work, insurance binding, and the VA's requirements all close out. You'll get a Closing Disclosure 3 days before closing showing exactly what you're signing.",
  },
  {
    n: "07",
    t: "Close",
    b: "Sign at the closing table, get keys, occupy within a reasonable window. Most VA closings I run in the Jacksonville market hit 30 days or less from contract.",
  },
];

const marketNotes = [
  {
    t: "Piney Green",
    b: "One of the most popular areas for active-duty Marines because of the short commute to Camp Lejeune's main gates. Mix of newer construction and 1990s-2010s family homes. Inventory turns fast around PCS season.",
  },
  {
    t: "Hubert",
    b: "Slightly farther east, more space for the dollar, often appeals to families wanting a larger lot. Some properties sit in flood-prone zones near the New River. Flood-zone verification belongs in your pre-offer checklist.",
  },
  {
    t: "Sneads Ferry",
    b: "Coastal, with proximity to both Camp Lejeune and the beaches. Higher-end inventory near Topsail Island, working-family inventory inland. VA loans absolutely work here, including at jumbo price points with full entitlement.",
  },
  {
    t: "Swansboro",
    b: "About 25-30 minutes from main-side Camp Lejeune. Quieter market, popular with retiring Veterans and second-career families. Older housing stock means VA appraisal condition issues come up more often, worth knowing before you write.",
  },
  {
    t: "Jacksonville city core",
    b: "More entry-level pricing, walkable to base for some neighborhoods, strong rental demand which matters if you ever convert your primary residence into a rental after a future PCS.",
  },
  {
    t: "Richlands & northern Onslow",
    b: "Rural feel, larger acreage, and pricing that often surprises buyers from higher-cost markets. A favorite of senior NCOs and officers wanting space without the coastal premium.",
  },
];

const myths = [
  {
    t: "Myth: VA loans always close slower than conventional",
    b: "Reality: VA loans close in line with conventional when run by a VA-experienced lender. The slowdowns come from VA-unfriendly appraisers, MPR surprises, or files that weren't underwritten up front. Avoid those three and 30-day closes are routine in Onslow County.",
  },
  {
    t: "Myth: Sellers will reject my VA offer",
    b: "Reality: Sellers reject offers with weak pre-approvals or vague closing-cost math. A clean, fully-underwritten VA pre-approval competes with conventional. The lender's reputation in the local market matters as much as the loan type.",
  },
  {
    t: "Myth: I have to use the VA's appraiser, so the appraisal will come in low",
    b: "Reality: The VA's panel is independent, not adversarial. Low appraisals happen on conventional too. They're a market-pricing question, not a loan-type question. We build appraisal-gap scenarios into your offer strategy when needed.",
  },
  {
    t: "Myth: I'm only eligible if I deployed",
    b: "Reality: Deployment is not a requirement. Most active-duty service members at Camp Lejeune become eligible after 90 continuous days. Reservists and National Guard have their own paths. Eligibility hinges on service category and length, not combat status.",
  },
  {
    t: "Myth: VA loans require perfect credit",
    b: "Reality: The VA itself sets no minimum credit score. Lenders set their own minimums, typically 580-620. Lower scores still get approved when the rest of the file (income, assets, DTI) is strong.",
  },
  {
    t: "Mistake: Using your VA loan benefit on the wrong purchase",
    b: "Reality: Sometimes a conventional loan with 5% down genuinely beats a VA loan once funding-fee math is factored. Other times VA wins by a mile. The right answer depends on your entitlement status, the price point, your funding-fee waiver, and how long you'll hold the property.",
  },
];

export default function Page() {
  const url = `${site.url}${PATH}`;
  const articleSchemaForGuide = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "The Complete Guide to VA Loans for Camp Lejeune & Jacksonville, NC Homebuyers",
    description:
      "A comprehensive guide for active-duty Marines, Veterans, and surviving spouses buying a home in Jacksonville, NC and the Camp Lejeune area using a VA loan.",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${url}/opengraph-image`,
    inLanguage: "en-US",
    articleSection: "VA Loans",
    author: { "@id": `${site.url}/#person` },
    publisher: { "@id": `${site.url}/#business` },
    about: [
      { "@type": "Thing", name: "VA loan" },
      { "@type": "Place", name: "Jacksonville, NC" },
      { "@type": "Place", name: "Camp Lejeune" },
      { "@type": "Place", name: "Onslow County, NC" },
    ],
    audience: {
      "@type": "PeopleAudience",
      audienceType:
        "Active-duty US Marines, US Veterans, and surviving spouses purchasing in Jacksonville, NC",
    },
  };

  return (
    <>
      <script {...jsonLd(articleSchemaForGuide)} />
      <script {...jsonLd(faqPageSchema(faqs.map((f) => ({ q: f.q, a: f.a }))))} />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "VA Loans - Jacksonville, NC" },
        ]}
        eyebrow="VA loans · Jacksonville, NC"
        title="The complete guide to VA loans for Camp Lejeune & Jacksonville, NC homebuyers."
        lead="Written by an Army Veteran who works with Camp Lejeune families every week. Real eligibility rules, the actual process, local market notes, and the mistakes that cost service members money."
      >
        <div className="flex flex-wrap gap-3">
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

      {/* Intro / authority */}
      <Section>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            I&apos;m Dan Opirhory, a U.S. Army Veteran and a mortgage loan
            officer with{" "}
            {site.legalName}. I&apos;m licensed in North Carolina and work with
            VA-eligible buyers across the state, including a steady volume of
            active-duty Marines and Veteran families in the Jacksonville and
            Camp Lejeune market.
          </p>
          <p>
            This is the guide I wish every Camp Lejeune buyer read before
            their first phone call with a lender. It covers what the VA loan
            actually does, who&apos;s eligible, the step-by-step process,
            what the Onslow County market looks like for VA buyers right now,
            the myths that cost service members money, and how to time a
            purchase against PCS orders. No fluff, no upsell, no rate-bait.
          </p>
          <p className="text-base text-ink/70">
            If you want to skip ahead and just talk through your situation,{" "}
            <Link
              href={site.contactCta.href}
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              get in touch
            </Link>{" "}
            or{" "}
            <Link
              href={site.applicationUrl}
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              start a pre-approval
            </Link>
            . Otherwise, keep reading.
          </p>
        </div>
      </Section>

      {/* Why VA loans for Camp Lejeune service members */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Why VA loans matter</Eyebrow>
          <Heading level={2} className="mt-4">
            Why the VA loan is the most powerful financing tool for Camp Lejeune service members.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The VA loan benefit is a guarantee from the U.S. Department of
              Veterans Affairs that lets approved lenders offer Veterans and
              active-duty service members financing terms no civilian loan
              program can match. The headline features:
            </p>
            <ul className="space-y-3 pl-1">
              <li>
                <strong>Zero down payment required.</strong> For most Camp
                Lejeune buyers with full entitlement, the VA loan funds 100%
                of the purchase price up to your entitlement limit. You bring
                earnest money and inspection costs, not a 5% or 20% down
                payment.
              </li>
              <li>
                <strong>No private mortgage insurance.</strong> Conventional
                loans below 20% down add PMI, which can run $100-$300+ per
                month. VA loans skip it entirely. The savings compound over
                the life of the loan.
              </li>
              <li>
                <strong>Competitive interest rates.</strong> Because the VA
                guarantees a portion of the loan, lenders take less risk and
                pass the savings through. VA rates are typically at or below
                conventional rates for similar credit profiles.
              </li>
              <li>
                <strong>VA funding fee waivers for disability ratings.</strong>{" "}
                The funding fee, a one-time charge that funds the program,
                is fully waived for Veterans with a service-connected
                disability rating, surviving spouses receiving Dependency and
                Indemnity Compensation, and Purple Heart recipients on active
                duty. For many of the buyers I work with, this is thousands
                of dollars off the cash-to-close.
              </li>
              <li>
                <strong>Reusable for life.</strong> Your VA loan benefit
                doesn&apos;t expire after one use. You can buy, sell, and use
                it again, including in some cases simultaneously when a
                duty-station change leaves you holding a previous home.
              </li>
              <li>
                <strong>Assumable.</strong> A future buyer can assume your VA
                loan at your locked-in rate. In a high-rate environment,
                that&apos;s a real selling point.
              </li>
            </ul>
            <p>
              Put it together and the VA loan is, for most Camp Lejeune
              service members, the single best mortgage product available.
              The catch is using it correctly, with a lender who knows the
              program and the local market. That&apos;s what the rest of this
              guide is for.
            </p>
          </div>
        </div>
      </Section>

      {/* Eligibility */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Eligibility</Eyebrow>
          <Heading level={2} className="mt-4">
            Who qualifies: active duty, Veterans, and surviving spouses.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              VA loan eligibility comes down to three things: service category,
              service length, and discharge status (for Veterans). Here are
              the categories most relevant to the Camp Lejeune community.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Active-duty Marines at Camp Lejeune
            </h3>
            <p>
              Generally eligible after 90 continuous days of active service.
              Most of the active-duty buyers I work with at Camp Lejeune
              qualify with a Statement of Service confirming current status
              and start date. We can pull your Certificate of Eligibility
              electronically through the VA&apos;s system, usually within
              the same business day.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Veterans
            </h3>
            <p>
              Length-of-service requirements depend on era of service, but
              most post-1990 service Veterans become eligible after 24
              continuous months of active duty (or the full period for which
              you were called or ordered). Discharge status matters: anything
              other than dishonorable usually qualifies. If you have an
              other-than-honorable discharge, eligibility can sometimes be
              re-established through the VA&apos;s discharge upgrade process.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              National Guard and Reserves
            </h3>
            <p>
              Path is different from active duty. Generally eligible after
              six years of service, or 90 days of active-duty service under a
              federal call-up. Plenty of Reserve Marines in the area qualify
              this way.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Surviving spouses
            </h3>
            <p>
              The surviving spouse of a service member who died in the line
              of duty, or from a service-connected disability, may be
              eligible for a VA loan with full benefits, including a waived
              funding fee. There are remarriage rules and DIC eligibility
              considerations. This is one of the most underused VA benefits
              in the Jacksonville community, and one I take particular care
              with.
            </p>
            <p>
              For the official rules, see{" "}
              <a
                href="https://www.va.gov/housing-assistance/home-loans/eligibility/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                VA.gov&apos;s eligibility page
              </a>
              . For real numbers on your situation,{" "}
              <Link
                href={site.contactCta.href}
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                send me a message
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* Process step-by-step */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>The process</Eyebrow>
          <Heading level={2} className="mt-4">
            The VA loan process, step by step, on a Jacksonville-area timeline.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            From COE to closing, most VA loans I run in the Onslow County
            market hit 30 days or less from contract. Here&apos;s what each
            step actually involves.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <li
              key={s.n}
              className="border-t border-line pt-5"
            >
              <div className="text-xs font-mono text-muted">{s.n}</div>
              <h3 className="mt-2 font-display text-xl text-ink">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {s.b}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Local Jacksonville / Onslow market insights */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Local market</Eyebrow>
          <Heading level={2} className="mt-4">
            Jacksonville &amp; Onslow County: where Marines actually buy.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Knowing the program is half the battle. Knowing the local market
            is the other half: what neighborhoods Marines and Navy corpsmen
            from Camp Lejeune actually settle in, what tradeoffs each one
            carries, and how PCS season moves inventory. Quick tour:
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketNotes.map((m) => (
            <div key={m.t} className="border-t border-line pt-5">
              <h3 className="font-display text-xl text-ink">{m.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {m.b}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl text-lg leading-relaxed text-ink/80">
          <p>
            For deeper local context across the area, see my{" "}
            <Link
              href="/service-areas/jacksonville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Jacksonville, NC service-area page
            </Link>{" "}
            with broader market notes and common buyer scenarios.
          </p>
        </div>
      </Section>

      {/* Myths and mistakes */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Myths and mistakes</Eyebrow>
          <Heading level={2} className="mt-4">
            What Camp Lejeune buyers get wrong about VA loans.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Most of the bad VA loan advice in circulation comes from
            outdated rules, confused real estate professionals, or borrowers
            who had a bad experience with a lender who didn&apos;t know the
            program. Here are the myths I correct most often.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {myths.map((m) => (
            <div key={m.t} className="border-t border-line pt-5">
              <h3 className="font-display text-lg text-ink">{m.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {m.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* VA loan limits & jumbo VA */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Loan limits and jumbo VA</Eyebrow>
          <Heading level={2} className="mt-4">
            VA loan limits in Onslow County, and what changed.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              The most important update on VA loan limits in recent years:
              if you have full entitlement, there is no maximum loan amount
              you can borrow with $0 down. The Blue Water Navy Vietnam
              Veterans Act removed the old county-level loan caps for
              full-entitlement borrowers. That means Camp Lejeune buyers
              looking at higher-priced inventory in Sneads Ferry, near
              Topsail, or in Swansboro can use the VA at jumbo price points
              without bringing a down payment.
            </p>
            <p>
              <strong>Full entitlement</strong> usually means: never used
              your VA loan, or paid a previous VA loan in full and sold the
              property. <strong>Partial entitlement</strong> usually means:
              you have a current VA loan, or you previously defaulted on a
              VA loan that the VA paid out on. With partial entitlement, the
              county conforming loan limit applies and you&apos;d need a
              down payment for any amount above it.
            </p>
            <p>
              Loan-limit numbers and conforming caps adjust annually, so
              I&apos;ll always confirm current limits and your live
              entitlement status before we run scenarios. The VA&apos;s{" "}
              <a
                href="https://www.va.gov/housing-assistance/home-loans/loan-limits/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                official loan limits page
              </a>{" "}
              is the source of truth.
            </p>
            <p>
              For more on conventional jumbo financing if VA isn&apos;t the
              right fit, see my{" "}
              <Link
                href="/loan-programs/jumbo"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                jumbo loans page
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* PCS orders timing */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>PCS timing</Eyebrow>
          <Heading level={2} className="mt-4">
            How to time a VA loan purchase around PCS orders.
          </Heading>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              PCS orders are the variable that breaks more VA loans in the
              Camp Lejeune market than any other single factor. The VA
              requires that you intend to occupy the property as your
              primary residence within a reasonable time of closing,
              typically 60 days. PCS timing has to be planned around that.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Buying before you have orders
            </h3>
            <p>
              If you&apos;re house hunting before orders are cut and a PCS
              comes through, you&apos;re generally fine. Orders after
              contract and before closing are usually accommodated, but the
              file needs to document occupancy intent at the time of
              application. Don&apos;t hide it; communicate the situation up
              front and we&apos;ll structure the file to survive a PCS.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              Buying with orders in hand to Camp Lejeune
            </h3>
            <p>
              The cleanest scenario. We pull your COE, get pre-approved
              before you arrive, line up a buyer&apos;s agent who works with
              military families, and time the closing to your report date.
              I&apos;ve done plenty of these where the buyer signs at
              closing within their first two weeks at Camp Lejeune.
            </p>
            <h3 className="font-display text-xl text-ink mt-6">
              PCS&apos;ing out and keeping the home as a rental
            </h3>
            <p>
              Common scenario: you bought in Jacksonville with a VA loan,
              got PCS&apos;d to a different duty station, and now want to
              rent the home and use your VA benefit again at the new base.
              This is where second-tier entitlement math kicks in. It&apos;s
              doable but requires careful entitlement calculation.
              Don&apos;t make an offer at the new station without running
              the numbers first.
            </p>
            <p>
              For broader military relocation support including non-VA
              programs, see my{" "}
              <Link
                href="/loan-programs/relocation"
                className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
              >
                relocation to NC
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            Frequently asked questions about VA loans in Jacksonville, NC.
          </Heading>
        </div>
        <Accordion
          items={faqs.map((f) => ({ q: f.q, a: f.a }))}
          className="mt-12"
        />
      </Section>

      {/* Related Guides - cluster cross-links */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Related guides</Eyebrow>
          <Heading level={2} className="mt-4">
            Go deeper on any one piece of this.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            This pillar covers the full picture. Each of the guides
            below dives into a single subtopic in real depth. Read the
            one that matches your current question.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              href: "/va-loan-limits-onslow-county-nc",
              title: "VA loan limits in Onslow County, NC (2026)",
              body: "Full vs. partial entitlement, when jumbo VA kicks in, and how Onslow compares to neighboring NC counties.",
            },
            {
              href: "/pcs-camp-lejeune-va-loan-guide",
              title: "How to PCS to Camp Lejeune and buy a home with a VA loan",
              body: "A week-by-week timeline from orders received to closing day, with a printable phase-by-phase checklist.",
            },
            {
              href: "/va-loan-vs-conventional-loan",
              title: "VA loan vs. conventional loan - which is better?",
              body: "Honest side-by-side comparison, the cases where conventional actually wins, and a 7-step decision flow.",
            },
            {
              href: "/best-neighborhoods-near-camp-lejeune",
              title: "Best neighborhoods near Camp Lejeune for military families",
              body: "Piney Green, Hubert, Sneads Ferry, Swansboro, Richlands, Midway Park, Holly Ridge: commute, price, schools, vibe.",
            },
            {
              href: "/funding-fee-waiver-disabled-veterans",
              title: "VA funding fee waiver for disabled Veterans",
              body: "Eligibility, timing, and refund rules for service-connected disability, surviving spouses, and Purple Heart recipients.",
            },
            {
              href: "/va-loan-pcs-checklist",
              title: "Universal VA loan PCS checklist",
              body: "Phase-by-phase action items for any service member with PCS orders to North Carolina, regardless of base.",
            },
          ].map((g) => (
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

      {/* Closing CTA */}
      <Section className="bg-paper">
        <div className="max-w-3xl">
          <Eyebrow>Get started</Eyebrow>
          <Heading level={2} className="mt-4">
            Let&apos;s talk through your VA scenario.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Whether you&apos;re three years into your enlistment, retiring
            from the Marine Corps, PCS&apos;ing in next month, or a
            surviving spouse trying to understand what benefits you have,
            the next step is a real conversation about your specific
            situation. No script, no pressure, no rate-bait. Just honest
            math and a plan.
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
            More related reading:{" "}
            <Link
              href="/loan-programs/va"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              VA loans overview
            </Link>
            {" · "}
            <Link
              href="/about"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              About Dan
            </Link>
            {" · "}
            <Link
              href="/resources"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              Articles
            </Link>
          </p>
        </div>
      </Section>

      <ContactCTAStrip />
    </>
  );
}
