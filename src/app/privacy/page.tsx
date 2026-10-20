import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Prose } from "@/components/ui/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy & Disclosures",
  description: `Privacy policy, licensing disclosures, and equal housing information for ${site.name} at ${site.legalName}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy & Disclosures" },
        ]}
        eyebrow="Legal"
        title="Privacy Policy & Disclosures"
        lead="Licensing information, equal housing disclosures, and privacy practices."
      />

      <Section>
        <Prose className="mx-auto">
          <h2>Equal Housing & Fair Lending</h2>
          <p>
            {site.legalName} is an Equal Housing Lender. As prohibited by
            federal law, we do not engage in business practices that
            discriminate on the basis of race, color, religion, national
            origin, sex, marital status, age (provided you have the capacity
            to enter into a binding contract), because all or part of your
            income may be derived from any public assistance program, or
            because you have, in good faith, exercised any right under the
            Consumer Credit Protection Act. The federal agency that
            administers our compliance with these federal laws is the Federal
            Trade Commission, Equal Credit Opportunity, Washington, DC,
            20580.
          </p>

          <h2>Texas Residents</h2>
          <p className="uppercase text-sm">
            Consumers wishing to file a complaint against a mortgage banker
            or residential mortgage loan originator licensed in Texas should
            send a completed complaint form to the Department of Savings and
            Mortgage Lending (SML). Information and forms are available on
            SML&apos;s website: sml.texas.gov.
          </p>

          <h2>State Licenses & Registrations</h2>
          <p>
            {site.legalName} holds the following state mortgage licenses
            and registrations (placeholder values in this portfolio copy):
          </p>
          <ul>
            <li>Georgia: License #000000</li>
            <li>North Carolina: License #L-000000</li>
            <li>South Carolina: License #MLS-0000000</li>
            <li>Tennessee: License #000000</li>
            <li>Texas: SML Mortgage Banker Registration</li>
          </ul>
          <p>
            {site.legalName} | {site.companyNmls} |{" "}
            <a
              href="https://www.nmlsconsumeraccess.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.NMLSConsumerAccess.org
            </a>
          </p>

          <h2>Privacy Practices</h2>
          <p>
            When you submit the contact form on this website, we collect
            your name, email address, and phone number. We use this
            information to respond to your inquiry and discuss mortgage
            options. We do not sell, rent, or share your personal contact
            information with third parties for marketing purposes. Form
            submissions are transmitted over HTTPS encryption and access is
            limited to authorized personnel.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Reach out through the{" "}
            <a href={site.contactCta.href}>contact form</a>.
          </p>

          <p className="mt-10 text-xs text-muted">
            {site.nmlsId} · {site.companyNmls}. {site.equalHousingDisclosure}
          </p>
        </Prose>
      </Section>
    </>
  );
}
