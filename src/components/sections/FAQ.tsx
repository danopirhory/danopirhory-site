import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { jsonLd, faqPageSchema } from "@/lib/schema";

const faqs: AccordionItem[] = [
  {
    q: "How much can I afford?",
    a: "Affordability isn't one number. It's a range shaped by your income, debts, down payment, and the monthly payment you're actually comfortable with. We walk through the real numbers together before you start shopping, so you make offers with confidence.",
  },
  {
    q: "What credit score do I need?",
    a: "There are programs across a wide credit spectrum, starting around 580. The bigger question isn't the minimum. It's which program gives you the best terms for your specific profile. I'll walk you through the options once I've seen the full picture.",
  },
  {
    q: "How long does the process take?",
    a: "Most purchase loans close within 21-30 days of a ratified contract, assuming a clean file and responsive communication from everyone involved. Pre-approvals are usually turned around within 24 hours.",
  },
  {
    q: "Can I buy from out of state?",
    a: "Yes. Relocation buyers are a core part of my practice, and the process is built to work smoothly from anywhere. We handle documents electronically and coordinate with your realtor so you can focus on the move, not the paperwork.",
  },
];

/**
 * Homepage FAQ section.
 *
 * Each `<FAQ />` instance carries its own `FAQPage` JSON-LD - the schema
 * matches the visible Q/A content one-for-one, which is what Google wants
 * for rich-snippet eligibility.
 */
export function FAQ() {
  return (
    <Section>
      <script
        {...jsonLd(
          faqPageSchema(faqs.map((f) => ({ q: f.q, a: String(f.a) }))),
        )}
      />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <Eyebrow>Common questions</Eyebrow>
          <Heading level={2} className="mt-4">
            Answers before you ask.
          </Heading>
        </div>
        <Link
          href="/resources"
          className="text-sm text-ink/70 underline underline-offset-4 hover:text-ink"
        >
          More answers →
        </Link>
      </div>
      <Accordion items={faqs} className="mt-12" />
    </Section>
  );
}
