import type { Metadata } from "next";
import { MilitaryBaseTemplate } from "@/components/templates/MilitaryBaseTemplate";
import { militaryBases } from "@/lib/military-bases";
import { buildMetadata } from "@/lib/seo";

const data = militaryBases["seymour-johnson"];

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/${data.slug}`,
  ogType: "article",
});

export default function Page() {
  return <MilitaryBaseTemplate data={data} />;
}
