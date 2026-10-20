import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/**
 * Compact inline CTA for the bottom of subpages (program pages, about,
 * resources). More restrained than the full-bleed dark <CTA /> block on
 * the homepage.
 *
 * `showImage` opt-in: defaults to text+button only. Pass `showImage`
 * to render the consultation photo alongside the copy. Used currently
 * only on /resources where the visual fits the editorial context.
 */
export function ContactCTAStrip({ showImage = false }: { showImage?: boolean }) {
  if (!showImage) {
    return (
      <Section className="py-12 md:py-16">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-12 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl text-ink">
              Have a question about your situation?
            </h2>
            <p className="mt-2 text-ink/70">
              Straightforward answers, no pressure. Usually a reply within one
              business day.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button href={site.contactCta.href} size="lg">
              {site.contactCta.label}
            </Button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="py-12 md:py-16">
      <div className="border-t border-line pt-12">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr] md:gap-10 lg:gap-14">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/Consult with MLO.png"
              alt="Image placeholder"
              width={1200}
              height={900}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl md:text-3xl text-ink">
                Have a question about your situation?
              </h2>
              <p className="mt-2 text-ink/70">
                Straightforward answers, no pressure. Usually a reply within
                one business day.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={site.contactCta.href} size="lg">
                {site.contactCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
