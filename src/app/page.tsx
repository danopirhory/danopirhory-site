import type { Metadata } from "next";
import { site } from "@/lib/site";

import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { PlatformMockups } from "@/components/sections/PlatformMockups";
import { HowIHelp } from "@/components/sections/HowIHelp";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { FeaturedGuides } from "@/components/sections/FeaturedGuides";
import { FAQ } from "@/components/sections/FAQ";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | VA Loans & Mortgage Lender in North Carolina`,
  },
  description:
    "Army Veteran mortgage lender in North Carolina: VA loans, DSCR investment loans, jumbo, and conventional financing. Also serving SC, TX, TN & GA.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | VA Loans & Mortgage Lender in North Carolina`,
    description:
      "Strategic mortgage guidance for Veterans, investors, and homebuyers. VA, DSCR, luxury, and conventional financing across four states.",
    url: site.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsStrip />
      <PlatformMockups />
      <HowIHelp />
      <WhyWorkWithMe />
      <ProcessSteps />
      <ServiceAreas />
      <FeaturedGuides />
      <FAQ />
      <InsightsPreview />
      <CTA />
    </>
  );
}
