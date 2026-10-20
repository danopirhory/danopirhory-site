import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { LeadForm } from "@/components/forms/LeadForm";
import { ComplianceNotice } from "@/components/ui/ComplianceNotice";
import { jsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact Dan Opirhory - Mortgage Advisor NC, SC, TX, TN, GA",
  description: `Talk to ${site.name}, an Army Veteran mortgage advisor licensed in NC, SC, TX, TN, and GA. Send a message and Dan will respond within one business day.`,
  path: "/contact",
});

const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

export default function ContactPage() {
  return (
    <>
      <script {...jsonLd(breadcrumbSchema(crumbs))} />
      <section className="pt-10 pb-16 md:pt-16 md:pb-20">
        <Container>
          <Breadcrumb items={crumbs} className="mb-8" />
          <div className="mx-auto max-w-2xl">
            <Eyebrow>Get in touch</Eyebrow>
            <Heading level={1} className="mt-4">
              Let&apos;s talk.
            </Heading>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">
              Fill out the form below and I&apos;ll be in touch within one
              business day. No pressure, just a real conversation about
              your options.
            </p>

            <div className="mt-8 overflow-hidden rounded-lg">
              <Image
                src="/images/Computer at desk.png"
                alt="Sending a message and scheduling a call from your desk"
                width={1600}
                height={1000}
                sizes="(min-width: 768px) 42rem, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="mt-8 rounded-lg border border-line bg-paper p-6 md:p-8">
              <LeadForm />
            </div>
            <ComplianceNotice className="mt-6" />
          </div>
        </Container>
      </section>

      <Section className="border-t border-line bg-paper/50 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>What happens next</Eyebrow>
          <Heading level={2} className="mt-4">
            From your first message to your closing day.
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            You don&apos;t need to know what loan program you want, what your
            credit looks like, or how much you can afford. That&apos;s what the
            first call is for. The goal of the conversation is to give you a
            clear picture of where you stand and what your real options are,
            not to push you into an application before you&apos;re ready.
          </p>

          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            <li className="rounded-lg border border-line bg-paper p-6">
              <div className="text-sm font-semibold text-accent">Step 1</div>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                A short conversation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Fifteen to twenty minutes by phone or video. We talk about
                your timeline, what you&apos;re trying to do, and what numbers
                actually matter for your situation. No commitments, no
                applications.
              </p>
            </li>
            <li className="rounded-lg border border-line bg-paper p-6">
              <div className="text-sm font-semibold text-accent">Step 2</div>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                Strategy and numbers
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                I run scenarios: VA vs. conventional, 5% vs. 20% down, today
                vs. waiting six months. You see the math behind each path,
                including monthly payment, cash to close, and lifetime cost,
                before deciding what to do next.
              </p>
            </li>
            <li className="rounded-lg border border-line bg-paper p-6">
              <div className="text-sm font-semibold text-accent">Step 3</div>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                Pre-approval, when you&apos;re ready
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                If and when you decide to move forward, the formal application
                takes about fifteen minutes through the online application portal. You&apos;ll
                get a pre-approval letter that real estate agents and sellers
                take seriously, not the generic kind that wastes everyone&apos;s
                time.
              </p>
            </li>
          </ol>
        </div>
      </Section>

      <Section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Helpful to mention</Eyebrow>
          <Heading level={2} className="mt-4">
            What to share when you reach out.
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            None of this is required to send a message, but the more context
            you share up front, the more useful the first call will be. If
            any of these apply to you, mention them in the form:
          </p>

          <ul className="mt-6 space-y-3 text-base leading-relaxed text-ink/80">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span>
                <strong>Veteran status or active-duty service.</strong> If
                you&apos;re VA-eligible, that changes the conversation
                entirely. PCS orders, Certificate of Eligibility status, and
                disability rating all matter.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span>
                <strong>Timeline.</strong> Buying in 30 days, three months,
                or sometime next year? Each of those is a different
                conversation.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span>
                <strong>Where you&apos;re looking.</strong> A specific city,
                a corridor, or relocating from out of state. Local market
                dynamics matter as much as the loan program.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span>
                <strong>What you&apos;ve been told before.</strong> If
                another lender pre-approved you, denied you, or quoted you a
                rate that didn&apos;t feel right, share what happened. Often
                there&apos;s a better path that nobody walked you through.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span>
                <strong>Self-employed or non-W-2 income.</strong> Bank
                statement, 1099, DSCR, asset-depletion: there are real
                programs for this. Mention how you earn so we don&apos;t waste
                time on pathways that won&apos;t work.
              </span>
            </li>
          </ul>

          <p className="mt-8 text-base leading-relaxed text-ink/70">
            Response time is one business day. If you&apos;re on a tighter
            timeline (under contract, PCS orders received, a closing date
            that&apos;s already locked), say so in the message and I&apos;ll
            prioritize it.
          </p>
        </div>
      </Section>
    </>
  );
}
