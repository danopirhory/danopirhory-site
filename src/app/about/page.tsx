import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import Link from "next/link";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `${site.name}, Army Veteran and mortgage loan officer with ${site.legalName}. Licensed in NC, SC, TX, TN, and GA. Disciplined, plain-English mortgage guidance.`,
  path: "/about",
});

const howIHelp = [
  {
    title: "Plain-English numbers",
    body: "Every rate, fee, and assumption explained in terms you can actually use. No jargon, no fine print that matters, no calculator tricks.",
  },
  {
    title: "Strategic guidance",
    body: "The cheapest rate isn't always the smartest loan. I help you think about your mortgage as one piece of a much bigger financial picture.",
  },
  {
    title: "A process that respects your time",
    body: "Proactive updates, fast turnarounds, and no black-box waiting. You always know exactly where your file stands.",
  },
  {
    title: "Long-term relationships",
    body: "I'd rather earn your next loan than win this one the wrong way. That changes how every conversation goes.",
  },
];

const whyAgents = [
  {
    title: "Pre-approvals that land offers",
    body: "I verify documentation up front, so my pre-approval letters carry real weight when a listing agent is stacking multiple offers.",
  },
  {
    title: "Responsive communication",
    body: "Weekend availability, same-day callbacks, and clear status updates at every file milestone. No radio silence.",
  },
  {
    title: "Problem-solving under pressure",
    body: "When a deal starts to wobble, I work the scenario, not the script. Your client stays protected and your commission stays intact.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        eyebrow="About"
        title="A trusted advisor, not a salesperson."
        lead={`${site.name} is a mortgage loan officer with ${site.legalName}, licensed across NC, SC, TX, TN, and GA, focused on educating clients, building long-term relationships, and making home financing feel less like a transaction.`}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-5 md:items-start">
          <div className="md:col-span-2 space-y-6">
            <Image
              src="/images/About.jpg"
              alt="Portrait placeholder"
              width={1200}
              height={1600}
              quality={90}
              sizes="(min-width: 768px) 28rem, 100vw"
              className="w-full max-w-md rounded-md object-cover"
            />
            <Image
              src="/images/Veteran pic.png"
              alt="Image placeholder"
              width={480}
              height={640}
              className="w-full max-w-md rounded-md object-cover"
            />
          </div>

          <div className="md:col-span-3 space-y-12">
            <div>
              <Eyebrow>My story</Eyebrow>
              <Heading
                level={2}
                as="h2"
                className="mt-4 text-3xl md:text-4xl"
              >
                Where I come from.
              </Heading>
              <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
                <p>
                  Dan is a veteran mortgage loan officer who helps military
                  families use their VA benefit, and helps investors and
                  first-time buyers structure financing around a long-term
                  plan.
                </p>
                <p>
                  His military background made him numbers-driven,
                  disciplined, and service-minded, and it shapes every
                  mortgage conversation he has today. Licensed across NC, SC,
                  TX, TN, and GA, he works with Veterans, investors,
                  and families from all over.
                </p>
              </div>
            </div>

            <div>
              <Eyebrow>Why mortgages</Eyebrow>
              <Heading
                level={2}
                as="h2"
                className="mt-4 text-3xl md:text-4xl"
              >
                Why I do this work.
              </Heading>
              <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
                <p>
                  Too many borrowers get pushed into products without
                  understanding the strategy behind them. Dan got into
                  mortgage lending to fix that, bringing clarity, structure,
                  and honest numbers to every conversation.
                </p>
                <p>
                  That same approach applies to refinancing. Dan will
                  walk through{" "}
                  <Link
                    href="/resources/when-to-refinance"
                    className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
                  >
                    when refinancing actually makes sense
                  </Link>{" "}
                  and, just as importantly, when it doesn&apos;t.
                </p>
                <p>
                  Whether it&apos;s a VA purchase, a DSCR investment deal,
                  or a luxury home, the goal is always the same: make sure
                  the financing serves your plan, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>For buyers</Eyebrow>
          <Heading level={2} className="mt-4">
            What working together actually looks like.
          </Heading>
        </div>
        <FeatureGrid items={howIHelp} className="mt-14" />
      </Section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>For realtors</Eyebrow>
          <Heading level={2} className="mt-4">
            Why agents send me their clients.
          </Heading>
          <p className="mt-6 text-ink/70 leading-relaxed">
            I work hard to be the lender agents actually want in their corner,
            because when the lender is dialed in, the whole deal feels
            different for everyone involved.
          </p>
        </div>
        <FeatureGrid items={whyAgents} columns={3} className="mt-14" />
      </Section>

      <ContactCTAStrip />
    </>
  );
}
