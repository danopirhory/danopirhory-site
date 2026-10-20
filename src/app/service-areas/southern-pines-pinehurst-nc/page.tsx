import type { Metadata } from "next";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { locations } from "@/lib/locations";
import { buildMetadata } from "@/lib/seo";

const data = locations["southern-pines-pinehurst-nc"];

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/service-areas/${data.slug}`,
});

export default function Page() {
  return <LocationTemplate data={data} />;
}
