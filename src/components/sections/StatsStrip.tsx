import { Section } from "@/components/layout/Section";

/**
 * Credibility strip - keep claims verifiable.
 *
 * COMPLIANCE NOTE: Every number here must be supportable with real data.
 * Update the values below with Dan's actual verified metrics before
 * launch, or replace with qualitative differentiators.
 */
const stats = [
  { value: "5.0★", label: "Client rating", accent: true },
  { value: "5", label: "States licensed" },
  { value: "VA", label: "Lending specialist" },
  { value: "24 hr", label: "Pre-approval turnaround" },
];

export function StatsStrip() {
  return (
    <Section
      as="aside"
      className="border-y border-line/70 bg-paper/40 py-14 md:py-16"
    >
      <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-10">
        {stats.map((s) => (
          <li key={s.label}>
            <div
              className={
                "font-display text-4xl leading-none md:text-5xl " +
                (s.accent ? "text-accent" : "text-ink")
              }
            >
              {s.value}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">
              {s.label}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
