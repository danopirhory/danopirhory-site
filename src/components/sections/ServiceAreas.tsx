import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { locations } from "@/lib/locations";

/**
 * Cities with dedicated landing pages get linked. Other notable areas
 * stay as plain visual pills, they signal coverage without creating
 * dead links or thin pages.
 */
const linked = Object.values(locations).map((l) => ({
  label: l.city,
  href: `/service-areas/${l.slug}`,
}));

const additional = [
  "Chapel Hill",
  "Cary",
  "Wake Forest",
  "Apex",
  "Asheville",
  "Greensboro",
];

export function ServiceAreas() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>Local market</Eyebrow>
        <Heading level={2} className="mt-4">
          Serving buyers across multiple states.
        </Heading>
        <p className="mt-6 text-ink/70 leading-relaxed">
          Remote-friendly from anywhere in the state, and a trusted resource
          for buyers relocating to NC from out of state. I know the local
          market conditions, the agents who actually close, and the small
          details that make North Carolina deals different.
        </p>
      </div>

      <ul className="mt-10 flex flex-wrap gap-3">
        {linked.map((a) => (
          <li key={a.href}>
            <Link
              href={a.href}
              className="inline-block rounded-full border border-ink/20 bg-paper px-4 py-2 text-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
            >
              {a.label}, NC →
            </Link>
          </li>
        ))}
        {additional.map((a) => (
          <li
            key={a}
            className="inline-block rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink/70"
          >
            {a}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href="/service-areas"
          className="text-sm text-ink/70 underline underline-offset-4 hover:text-ink"
        >
          View all service areas →
        </Link>
      </div>
    </Section>
  );
}
