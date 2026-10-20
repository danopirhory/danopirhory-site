import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="py-32 md:py-48">
      <div className="max-w-xl text-center mx-auto">
        <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-muted">
          404
        </p>
        <Heading level={1} className="mt-4">
          Page not found.
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </div>
    </Section>
  );
}
