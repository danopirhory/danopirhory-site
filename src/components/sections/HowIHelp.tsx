import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";

const items = [
  {
    title: "VA Loans",
    href: "/loan-programs/va",
    body: "Zero-down financing backed by the full weight of your service. As a Veteran myself, I handle VA files with the precision and respect they deserve.",
  },
  {
    title: "Investment & DSCR",
    href: "/loan-programs/dscr",
    body: "Cash-flow-based lending for portfolio builders, STR operators, and investors who\u2019ve outgrown conventional qualification. The deal qualifies the property, not your W-2.",
  },
  {
    title: "Luxury & Jumbo",
    href: "/loan-programs/jumbo",
    body: "High-end purchases above the conforming limit, with the underwriting attention and deal structuring that serious capital demands.",
  },
  {
    title: "First-Time Buyers",
    href: "/loan-programs/first-time-homebuyer",
    body: "Your first home deserves the same strategic guidance as a seven-figure purchase. I help you understand every number, avoid the common mistakes, and close with confidence.",
  },
];

export function HowIHelp() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>How I help</Eyebrow>
        <Heading level={2} className="mt-4">
          Every deal gets the same discipline.
        </Heading>
        <p className="mt-6 text-ink/70 leading-relaxed">
          Whether you&apos;re a Veteran using your benefit, an investor
          scaling a portfolio, or a family buying for the first time, you
          get the same thing: clear numbers, a structured process, and a
          strategy built around your goals.
        </p>
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group block border-t border-line pt-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <span
                aria-hidden="true"
                className="mt-2 text-ink/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
              >
                →
              </span>
            </div>
            <p className="mt-3 max-w-md text-ink/70 leading-relaxed">
              {item.body}
            </p>
            <span className="mt-5 inline-block text-sm text-ink/60 group-hover:text-ink">
              Learn more
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
