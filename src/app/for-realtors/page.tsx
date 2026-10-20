import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Button } from "@/components/ui/Button";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";

export const metadata: Metadata = buildMetadata({
  title: "A Lending Partner for North Carolina Realtors",
  description:
    "Strong pre-approvals, fast closings, clear communication, and scenario strategy: the lending partner NC agents actually want on their deals.",
  path: "/for-realtors",
});

const pillars = [
  {
    title: "Communication that keeps you in the loop",
    body: "Weekly status updates, same-day callbacks, and proactive flags the moment a file needs attention. You never chase me for an update.",
  },
  {
    title: "Pre-approvals sellers take seriously",
    body: "Every pre-approval I issue is backed by verified documentation, not a desktop underwrite based on stated numbers. Listing agents know the difference.",
  },
  {
    title: "Speed without cutting corners",
    body: "Most files get to clear-to-close well ahead of the contract date. I protect your closing timeline from day one, not day twenty-five.",
  },
  {
    title: "Scenario strategy on complex deals",
    body: "Self-employed income, second homes, gift funds, bridge situations. I work the numbers with you so we know what's possible before your client writes an offer.",
  },
  {
    title: "Deal-saving problem solving",
    body: "When a file hits an unexpected snag, I dig in and solve it, not punt it back to processing. Your commission stays where it belongs.",
  },
  {
    title: "Respecting your client relationship",
    body: "Your client is your client. I'll never go around you, cross-sell, or try to turn a mortgage conversation into something else.",
  },
];

export default function ForRealtorsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "For Realtors" },
        ]}
        eyebrow="For Realtors"
        title="The lending partner you actually want on your deal."
        lead="A sharp loan officer makes every part of your job easier, from the first showing to the closing table. Here's what working together looks like."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            Let&apos;s Work Together
          </Button>
          <Button href="/about" size="lg" variant="secondary">
            About Me
          </Button>
        </div>
      </PageHero>

      <Section className="pt-0">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/Closing table.png"
            alt="Image placeholder"
            width={1800}
            height={1067}
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </Section>

      <Section className="bg-paper">
        <div className="max-w-2xl">
          <Eyebrow>What you can expect</Eyebrow>
          <Heading level={2} className="mt-4">
            The things that matter, done right.
          </Heading>
        </div>
        <FeatureGrid items={pillars} columns={3} className="mt-14" />
      </Section>

      {/* LAUNCH BLOCKER: Add a real realtor testimonial here once approved.
          Uncomment and replace when ready:
          <Section>
            <div className="max-w-3xl">
              <Eyebrow>From the field</Eyebrow>
              <Heading level={2} className="mt-4 mb-10">
                What agents say.
              </Heading>
              <TestimonialCard
                variant="card"
                quote="Real approved testimonial text."
                name="Agent Name"
                role="Realtor, Brokerage"
              />
            </div>
          </Section>
      */}

      <ContactCTAStrip />
    </>
  );
}
