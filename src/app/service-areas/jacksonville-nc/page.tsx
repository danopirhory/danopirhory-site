import type { Metadata } from "next";
import Link from "next/link";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { Section } from "@/components/layout/Section";
import { locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const data = locations["jacksonville-nc"];

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/service-areas/${data.slug}`,
});

export default function Page() {
  return (
    <>
      <Section className="pb-0">
        <div className="max-w-3xl border-l-2 border-ink/15 pl-5">
          <p className="text-sm uppercase tracking-[0.14em] text-muted">
            VA-eligible buyers
          </p>
          <p className="mt-2 text-base text-ink/75 leading-relaxed">
            Active duty, Veteran, or surviving spouse? Read{" "}
            <Link
              href="/va-loans-jacksonville-nc"
              className="underline underline-offset-4 decoration-ink/40 hover:decoration-ink"
            >
              the complete VA loan guide for Camp Lejeune &amp; Jacksonville
            </Link>
            : eligibility, process, and PCS timing covered in depth.
          </p>
        </div>
      </Section>
      <LocationTemplate data={data} />
    </>
  );
}
