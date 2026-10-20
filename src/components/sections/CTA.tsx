import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <Section className="py-12 md:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-paper px-6 py-10 sm:px-8 sm:py-14 md:px-16 md:py-20">
        {/* Subtle grid + glow accents to give the panel depth. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent/[0.08] blur-3xl"
        />
        <div className="relative max-w-2xl">
          <Heading level={2}>Ready to talk through your next move?</Heading>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            A quick, no-pressure conversation is the best place to start.
            I&apos;ll help you understand your options and what to expect.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={site.contactCta.href} size="lg">
              {site.contactCta.label}
            </Button>
            <Button
              href={site.applicationUrl}
              size="lg"
              variant="secondary"
            >
              Get Pre-Approved
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
