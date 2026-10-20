import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Mortgage-specific product mockup section - three dark glassy cards
 * representing the actual artifacts a buyer gets from working with Dan:
 *
 *   1. Loan scenario comparison (program × monthly × cash-to-close)
 *   2. Pre-approval status (underwritten checklist)
 *   3. Closing tracker (pipeline stages)
 *
 * Pure CSS, no images, no rate quotes. Numbers are illustrative round
 * figures clearly framed as "example scenario" so nothing reads as a
 * lender rate quote or commitment.
 */
export function PlatformMockups() {
  return (
    <Section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-30"
      />

      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Inside the process</Eyebrow>
          <Heading level={2} className="mt-4">
            Real numbers, not estimates.
          </Heading>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            From the first conversation to the closing table, every step
            is documented in plain language. Here&apos;s what you&apos;ll
            actually see.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <ScenarioCard />
          <PreApprovalCard />
          <ClosingTrackerCard />
        </div>
      </div>
    </Section>
  );
}

/* ---------- 1. Scenario comparison ---------- */

function ScenarioCard() {
  const scenarios = [
    {
      label: "VA · 0% down",
      payment: "$2,612",
      cash: "$5,400",
      pmi: "-",
      highlight: true,
    },
    {
      label: "Conv · 5% down",
      payment: "$2,748",
      cash: "$31,200",
      pmi: "$185 /mo",
    },
    {
      label: "Conv · 20% down",
      payment: "$2,418",
      cash: "$110,400",
      pmi: "-",
    },
  ];

  return (
    <MockupCard label="Scenario comparison" subtitle="Side-by-side, your numbers">
      <div className="mt-5 grid grid-cols-[1fr_auto_auto_auto] gap-x-2 gap-y-2 text-xs sm:gap-x-3">
        <div className="font-mono uppercase tracking-[0.14em] text-muted">
          Program
        </div>
        <div className="text-right font-mono uppercase tracking-[0.14em] text-muted">
          P&amp;I
        </div>
        <div className="text-right font-mono uppercase tracking-[0.14em] text-muted">
          Cash
        </div>
        <div className="text-right font-mono uppercase tracking-[0.14em] text-muted">
          PMI
        </div>
        {scenarios.map((s) => (
          <Row
            key={s.label}
            label={s.label}
            values={[s.payment, s.cash, s.pmi]}
            highlight={s.highlight}
          />
        ))}
      </div>
      <p className="mt-5 border-t border-line/60 pt-4 text-[0.7rem] uppercase tracking-[0.16em] text-muted">
        Illustrative - $400K purchase, 720 FICO
      </p>
    </MockupCard>
  );
}

function Row({
  label,
  values,
  highlight,
}: {
  label: string;
  values: string[];
  highlight?: boolean;
}) {
  return (
    <>
      <div
        className={
          "flex items-center text-sm " +
          (highlight ? "text-accent" : "text-ink")
        }
      >
        {highlight && (
          <span
            aria-hidden="true"
            className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"
          />
        )}
        {label}
      </div>
      {values.map((v, i) => (
        <div
          key={i}
          className={
            "text-right font-mono text-sm tabular-nums " +
            (highlight ? "text-accent" : "text-ink-soft")
          }
        >
          {v}
        </div>
      ))}
    </>
  );
}

/* ---------- 2. Pre-approval checklist ---------- */

function PreApprovalCard() {
  const items = [
    { label: "Credit report pulled & reviewed", done: true },
    { label: "Income verified · W-2 + LES", done: true },
    { label: "Assets sourced · 2 mo statements", done: true },
    { label: "DTI calculated against program", done: true },
    { label: "Run through automated underwriting", done: true },
    { label: "Pre-approval letter issued", done: true },
  ];

  return (
    <MockupCard
      label="Pre-approval status"
      subtitle="Verified, not estimated"
    >
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-start gap-3 text-sm text-ink"
          >
            <span
              aria-hidden="true"
              className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-accent/15 text-accent"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 6.5 5 9l4.5-5" />
              </svg>
            </span>
            <span className="leading-snug">{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-4">
        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          Status
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-accent">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
          Approved · ready to write
        </span>
      </div>
    </MockupCard>
  );
}

/* ---------- 3. Closing tracker ---------- */

function ClosingTrackerCard() {
  const stages = [
    { label: "Pre-approval", status: "done" as const },
    { label: "Offer accepted", status: "done" as const },
    { label: "Appraisal ordered", status: "active" as const },
    { label: "Underwriting", status: "pending" as const },
    { label: "Clear to close", status: "pending" as const },
    { label: "Sign at table", status: "pending" as const },
  ];

  return (
    <MockupCard label="Closing tracker" subtitle="Where the file is, today">
      <div className="mt-5">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-start gap-3 py-1.5">
            <div className="flex flex-col items-center">
              <span
                aria-hidden="true"
                className={
                  "flex h-4 w-4 items-center justify-center rounded-full " +
                  (s.status === "done"
                    ? "border border-accent/60 bg-accent/20"
                    : s.status === "active"
                      ? "border border-accent bg-accent/30 ring-2 ring-accent/20"
                      : "border border-line bg-paper")
                }
              >
                {s.status === "done" && (
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <path d="M2.5 6.5 5 9l4.5-5" />
                  </svg>
                )}
                {s.status === "active" && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                )}
              </span>
              {i < stages.length - 1 && (
                <span
                  aria-hidden="true"
                  className={
                    "mt-1 h-6 w-px " +
                    (s.status === "done" ? "bg-accent/40" : "bg-line")
                  }
                />
              )}
            </div>
            <div className="flex flex-1 items-center justify-between pt-[1px]">
              <span
                className={
                  "text-sm " +
                  (s.status === "pending" ? "text-muted" : "text-ink")
                }
              >
                {s.label}
              </span>
              {s.status === "active" && (
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-accent">
                  In progress
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 border-t border-line/60 pt-4 text-[0.7rem] uppercase tracking-[0.16em] text-muted">
        Updated weekly · proactive flags via email
      </p>
    </MockupCard>
  );
}

/* ---------- Shared card chrome ---------- */

function MockupCard({
  label,
  subtitle,
  children,
}: {
  label: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl border border-line/70 bg-paper/60 p-5 backdrop-blur-sm transition-colors hover:border-accent/40 md:p-7">
      <div className="flex items-center justify-between border-b border-line/60 pb-4">
        <div>
          <div className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            {label}
          </div>
          <div className="mt-1 font-display text-base text-ink">
            {subtitle}
          </div>
        </div>
        <div className="flex gap-1">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-line"
          />
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-line"
          />
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-line"
          />
        </div>
      </div>
      {children}
    </div>
  );
}
