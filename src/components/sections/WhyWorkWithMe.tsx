import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";

const pillars = [
  {
    title: "Strategy first, product second.",
    body: "I don\u2019t lead with rates. I lead with your plan. Whether you\u2019re building a rental portfolio, buying your dream home, or using a VA benefit, the financing should serve the strategy, not the other way around.",
  },
  {
    title: "Complex deals. Clean execution.",
    body: "VA purchases, jumbo and luxury financing, DSCR investment loans, multi-state relocations. I\u2019ve built my practice around the deal types most lenders avoid. Complex files are where I do my best work.",
  },
  {
    title: "Veteran discipline, every file.",
    body: "I spent years in the Army before I entered mortgage lending. That training shows up in how I run a deal: structured process, proactive communication, no loose ends, no excuses.",
  },
];

export function WhyWorkWithMe() {
  return (
    <Section className="bg-paper">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
        <div className="lg:col-span-2">
          <Eyebrow>Why work with me</Eyebrow>
          <Heading level={2} className="mt-4">
            Discipline and strategy in every deal.
          </Heading>
          <p className="mt-6 max-w-md text-ink/70 leading-relaxed">
            Financing a property is stressful enough. My job is to bring
            clarity, structure, and sharp thinking to every file, so you
            can focus on the decision, not the paperwork.
          </p>
        </div>

        <div className="lg:col-span-3">
          <ul className="border-t border-line">
            {pillars.map((p) => (
              <li
                key={p.title}
                className="border-b border-line py-8 last:border-b-0"
              >
                <h3 className="font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-3 text-ink/70 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
