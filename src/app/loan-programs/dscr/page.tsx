import type { Metadata } from "next";
import { LoanProgramTemplate } from "@/components/templates/LoanProgramTemplate";
import { loanPrograms } from "@/lib/loanPrograms";
import { buildMetadata } from "@/lib/seo";

const data = loanPrograms.dscr;

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/loan-programs/${data.slug}`,
});

export default function Page() {
  return <LoanProgramTemplate data={data} />;
}
