import { Container } from "@/components/layout/Container";

const items = [
  "VA lending",
  "Investment financing",
  "Fully underwritten preapprovals",
  "Luxury financing",
];

/**
 * Slim value-prop strip. Sits directly under the hero as a reinforcement
 * layer - four signals of specialization, stated plainly.
 */
export function TrustBar() {
  return (
    <div className="border-y border-line/70 bg-paper/50">
      <Container>
        <ul
          aria-label="What you can expect"
          className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 text-xs uppercase tracking-[0.16em] text-ink-soft md:flex md:items-center md:justify-between md:gap-8 md:py-5"
        >
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
