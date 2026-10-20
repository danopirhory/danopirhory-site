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
  title: "Relocation Mortgages - Moving to North Carolina",
  description:
    "Financing a move to North Carolina from out of state. Remote-friendly process, smart timing coordination, and local market insight for relocation buyers.",
  path: "/loan-programs/relocation",
});

const whatsDifferent = [
  {
    title: "Timing is the hardest part",
    body: "Coordinating a lease end, a job start, and a closing date across state lines takes real planning. I build the timeline backward from your must-move-by date so nothing collides.",
  },
  {
    title: "Remote-first process",
    body: "Everything happens online by default: secure document upload, e-sign, virtual notarizations where your title company allows them. You don't need to fly in to sign paperwork.",
  },
  {
    title: "Pre-approval before the listing search",
    body: "Out-of-state buyers often get this backward. Getting pre-approved before you start looking gives you a real budget, a letter sellers trust, and time to clean up anything unexpected.",
  },
  {
    title: "Local market guidance",
    body: "Raleigh-Durham, Charlotte, Wilmington, Asheville. Each submarket has its own personality. I'll help you understand what normal looks like where you're actually buying.",
  },
];

const commonScenarios = [
  {
    title: "Corporate relocation packages",
    body: "If your employer is covering closing costs, temporary housing, or a buyout on your current home, I'll coordinate with your relo coordinator to make sure nothing falls through the cracks.",
  },
  {
    title: "PCS moves for military families",
    body: "VA loans and PCS timing go hand in hand, but they need careful sequencing. I've worked with enough military families to know what usually breaks, and how to prevent it.",
  },
  {
    title: "Buying before selling",
    body: "If you want to buy your NC home before selling your current one, we'll talk through bridge financing, contingent offers, and which strategy fits your situation.",
  },
  {
    title: "Renting first",
    body: "Not every relocation buyer should buy right away. Sometimes renting for 6-12 months while you learn the market is the smarter play, and I'll tell you honestly when that's the case.",
  },
];

export default function RelocationPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Loan Programs", href: "/loan-programs" },
          { label: "Relocation" },
        ]}
        eyebrow="Relocation to NC"
        title="Financing a move you haven't made yet."
        lead="Relocating is stressful on its own. Buying a home in a state you don't live in yet adds another layer. Here's how I help out-of-state buyers land in North Carolina calmly, and close on time."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={site.applicationUrl} size="lg">
            Start Your Move
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Let&apos;s Talk Timing
          </Button>
        </div>
      </PageHero>

      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>What&apos;s different</Eyebrow>
          <Heading level={2} className="mt-4">
            Why relocation deals need a different playbook.
          </Heading>
          <p className="mt-6 text-ink/70 leading-relaxed">
            Every out-of-state purchase has variables a local deal doesn&apos;t.
            Good planning up front is the difference between a smooth move and
            a miserable one.
          </p>
        </div>
        <FeatureGrid items={whatsDifferent} className="mt-14" />
      </Section>

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Common scenarios</Eyebrow>
          <Heading level={2} className="mt-4">
            Situations I see most often.
          </Heading>
          <p className="mt-6 text-ink/70 leading-relaxed">
            Most relocation buyers fall into one of a few patterns. Recognizing
            yours early lets us pick the right strategy, and avoid the
            mistakes other buyers make in the same spot.
          </p>
        </div>
        <FeatureGrid items={commonScenarios} className="mt-14" />
      </Section>

      <ContactCTAStrip />
    </>
  );
}
