import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTAStrip } from "@/components/sections/ContactCTAStrip";
import { loanPrograms } from "@/lib/loanPrograms";

export const metadata: Metadata = buildMetadata({
  title: "Loan Programs",
  description:
    "Conventional, FHA, VA, USDA, Jumbo, DSCR, and first-time buyer loans in NC, SC, TX, TN, GA. Clear guidance on finding the right program.",
  path: "/loan-programs",
});

// Manual card order for the overview grid. First-time and relocation
// are educational pages (not on the template), so they're listed inline.
const cards: { title: string; href: string; body: string; who: string }[] = [
  {
    title: "First-Time Homebuyer",
    href: "/loan-programs/first-time-homebuyer",
    body: "A hands-on guide through pre-approval, making offers, and closing, explained in plain English.",
    who: "For buyers with limited savings, newer credit, or a first mortgage.",
  },
  {
    title: "Conventional Loans",
    href: `/loan-programs/${loanPrograms.conventional.slug}`,
    body: loanPrograms.conventional.card.body,
    who: loanPrograms.conventional.card.who,
  },
  {
    title: "FHA Loans",
    href: `/loan-programs/${loanPrograms.fha.slug}`,
    body: loanPrograms.fha.card.body,
    who: loanPrograms.fha.card.who,
  },
  {
    title: "VA Loans",
    href: `/loan-programs/${loanPrograms.va.slug}`,
    body: loanPrograms.va.card.body,
    who: loanPrograms.va.card.who,
  },
  {
    title: "USDA Loans",
    href: `/loan-programs/${loanPrograms.usda.slug}`,
    body: loanPrograms.usda.card.body,
    who: loanPrograms.usda.card.who,
  },
  {
    title: "Jumbo Loans",
    href: `/loan-programs/${loanPrograms.jumbo.slug}`,
    body: loanPrograms.jumbo.card.body,
    who: loanPrograms.jumbo.card.who,
  },
  {
    title: "DSCR / Investor Loans",
    href: `/loan-programs/${loanPrograms.dscr.slug}`,
    body: loanPrograms.dscr.card.body,
    who: loanPrograms.dscr.card.who,
  },
  {
    title: "Relocation to NC",
    href: "/loan-programs/relocation",
    body: "A remote-friendly process built for out-of-state buyers moving to the Carolinas.",
    who: "For transplants, corporate relocations, and military PCS moves.",
  },
];

export default function LoanProgramsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Loan Programs" },
        ]}
        eyebrow="Loan programs"
        title="The right loan for your situation."
        lead="Every buyer has a different story: income, credit, timeline, goals. The right mortgage depends on all of it, not just the rate. Here are the programs I work with most often."
      />

      <Section className="pt-0">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/consult-2.jpg"
            alt="Image placeholder"
            width={1376}
            height={768}
            quality={90}
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((p) => (
            <Link key={p.title} href={p.href} className="group block">
              <Card className="flex h-full flex-col">
                <h2 className="font-display text-xl text-ink">{p.title}</h2>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  {p.body}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
                  {p.who}
                </p>
                <span className="mt-auto pt-6 inline-block text-sm text-ink/60 group-hover:text-ink">
                  Learn more →
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <p className="max-w-2xl text-base text-ink/70 leading-relaxed">
          Already own and wondering whether the math works on a refi? Read{" "}
          <Link
            href="/resources/when-to-refinance"
            className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
          >
            when refinancing actually makes sense
          </Link>{" "}
          before you start shopping rates.
        </p>
      </Section>

      <ProcessSteps />
      <FAQ />
      <ContactCTAStrip />
    </>
  );
}
