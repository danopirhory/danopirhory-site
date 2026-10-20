import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Button } from "@/components/ui/Button";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "First-Time Homebuyer Loans in North Carolina",
  description:
    "A hands-on guide to buying your first home in NC: pre-approval, mistakes to avoid, what to prepare, and what to expect from first call to closing.",
  path: "/loan-programs/first-time-homebuyer",
});

const whatToExpect = [
  {
    title: "A real conversation, not a sales call",
    body: "We start by understanding your goals, your timeline, and how much you're actually comfortable spending each month, before we even look at programs.",
  },
  {
    title: "Clear numbers, every step",
    body: "You'll see exactly what your payment looks like, what fees are involved, and what your cash to close will be. No surprises at the closing table.",
  },
  {
    title: "Hands-on support through the offer",
    body: "When you find the right home, I work directly with your realtor to structure an offer that stands out, including a pre-approval letter sellers take seriously.",
  },
  {
    title: "A closing process that respects your time",
    body: "I'll tell you what I need, when I need it, and why. Most of my first-time buyers close in under 30 days with no last-minute drama.",
  },
];

const toPrepare = [
  {
    title: "Two years of W-2s",
    body: "Plus your most recent pay stubs covering the last 30 days. If you're self-employed, two years of personal and business tax returns.",
  },
  {
    title: "Two months of bank statements",
    body: "All pages, including the blank ones. Statements show your reserves and any large deposits we may need to source.",
  },
  {
    title: "A rough comfort number",
    body: "Not what a calculator says you qualify for, what actually feels comfortable to you after rent, savings goals, and everyday life.",
  },
  {
    title: "A realistic timeline",
    body: "When do you need to be in the home? Are you in a lease? Moving for a job? Timing shapes the whole strategy.",
  },
];

const mistakes = [
  {
    title: "Shopping before pre-approval",
    body: "Touring homes before you know your real budget, and before sellers have a letter they trust, leads to disappointment or missed opportunities.",
  },
  {
    title: "Stretching to the max payment",
    body: "Just because you qualify for a $500,000 loan doesn't mean you should take it. The right number is the one that still lets you live your life.",
  },
  {
    title: "Changing finances mid-process",
    body: "New credit cards, large purchases, or job changes between application and closing can derail a deal. We'll talk about what to avoid up front.",
  },
  {
    title: "Ignoring total cost of ownership",
    body: "Your mortgage is one piece. Property taxes, insurance, HOA, and maintenance all belong in the real number, and we'll factor them in.",
  },
];

export default function FirstTimeHomebuyerPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Loan Programs", href: "/loan-programs" },
          { label: "First-Time Homebuyer" },
        ]}
        eyebrow="First-Time Homebuyers"
        title="Buying your first home, without the anxiety."
        lead="First-time buyers deserve a guide, not a sales pitch. Here's how I help you buy smart, from your first question to the keys in your hand."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={site.applicationUrl} size="lg">
            Get Pre-Approved
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Ask a Question
          </Button>
        </div>
      </PageHero>

      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>What to expect</Eyebrow>
          <Heading level={2} className="mt-4">
            A calmer way to buy your first home.
          </Heading>
        </div>
        <FeatureGrid items={whatToExpect} className="mt-14" />
      </Section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Why pre-approval matters</Eyebrow>
          <Heading level={2} className="mt-4">
            Pre-approval is leverage. Use it right.
          </Heading>
          <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
            <p>
              A real pre-approval isn&apos;t a form you fill out online in two
              minutes. It&apos;s a verified review of your income, assets, and
              credit, the kind of letter sellers and listing agents take
              seriously when multiple offers hit the table.
            </p>
            <p>
              I&apos;ll walk you through exactly what to send, review it
              carefully, and issue a pre-approval that reflects what you can
              actually afford, not just the maximum number a computer says
              you qualify for.
            </p>
            <p>
              The goal: when you find the right home, we move fast and
              confidently. No scrambling, no guessing, no letters that
              don&apos;t hold up.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>What to prepare</Eyebrow>
          <Heading level={2} className="mt-4">
            What I&apos;ll ask for up front.
          </Heading>
          <p className="mt-6 text-ink/70 leading-relaxed">
            Having these ready before we talk makes the whole process faster,
            and lets me give you a much more accurate picture of where you
            actually stand.
          </p>
        </div>
        <FeatureGrid items={toPrepare} className="mt-14" />
      </Section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common mistakes</Eyebrow>
          <Heading level={2} className="mt-4">
            What to avoid, and why.
          </Heading>
        </div>
        <FeatureGrid items={mistakes} className="mt-14" />
      </Section>

      <ContactCTAStrip />
    </>
  );
}
