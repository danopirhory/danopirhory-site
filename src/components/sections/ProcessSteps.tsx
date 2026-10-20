import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    n: "01",
    title: "Conversation",
    body: "We talk through your goals, timeline, and budget. No pressure.",
  },
  {
    n: "02",
    title: "Pre-Approval",
    body: "A rigorous pre-approval that realtors and sellers take seriously.",
  },
  {
    n: "03",
    title: "Strategy",
    body: "We review program options and choose the right loan for you.",
  },
  {
    n: "04",
    title: "Closing",
    body: "Disciplined execution so we close on time, every time.",
  },
];

export function ProcessSteps() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>The process</Eyebrow>
        <Heading level={2} className="mt-4">
          Four steps. No surprises.
        </Heading>
      </div>
      <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="border-t border-line pt-6">
            <div className="font-display text-sm text-muted">{s.n}</div>
            <h3 className="mt-3 font-display text-xl text-ink">{s.title}</h3>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
