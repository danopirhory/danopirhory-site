import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Prose } from "@/components/ui/Prose";
import { DraftBanner } from "@/components/ui/DraftBanner";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms of use for ${site.name}'s website: informational scope, licensing jurisdiction, and links to third-party regulatory verification.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
        eyebrow="Legal"
        title="Terms of Use"
        lead="These terms govern your use of this website and the informational materials it contains."
      />

      <Section>
        <Prose className="mx-auto">
          <DraftBanner lastReviewed="April 2026" />
          {/* LAUNCH BLOCKER: Have the lender's compliance team review and approve
              this copy before going live. Once approved, remove
              <DraftBanner /> above. */}

          <h2>Informational purposes only</h2>
          <p>
            The content on this website is general educational information
            about mortgage products and the home financing process. It is
            not personalized financial advice and does not constitute a
            commitment to lend, an offer to lend, or a guarantee of any
            specific rate, term, or program. Rates, terms, and program
            availability change frequently and are subject to credit
            approval, underwriting review, property appraisal, and other
            conditions described at the time of formal application.
          </p>
          <p>
            Articles, calculators, examples, and worked scenarios on this
            site are intended to help you frame your own decisions.
            They are not a substitute for a personalized conversation with
            a licensed mortgage loan officer. Numbers shown in examples
            (rates, payments, closing costs) are illustrative and may not
            reflect what you would actually qualify for given your
            specific credit, income, debts, property, and program.
          </p>

          <h2>No lender-borrower relationship</h2>
          <p>
            Use of this website, including reading content, submitting
            the contact form, or downloading materials, does not create a
            lender-borrower relationship between you and {site.name},{" "}
            {site.legalName}, or any affiliated party. A lender-borrower
            relationship is established only when you complete a formal
            mortgage loan application through {site.legalName}&apos;s
            authorized application platform and that application is
            accepted for underwriting review.
          </p>

          <h2>Licensing jurisdiction</h2>
          <p>
            {site.name} is a mortgage loan originator with{" "}
            {site.legalName}, licensed to originate residential mortgage
            loans in specific states only. The state license inventory and
            individual NMLS license number are listed on the{" "}
            <a href="/privacy">Privacy Policy &amp; Disclosures</a> page
            and are publicly verifiable through the{" "}
            <a
              href="https://www.nmlsconsumeraccess.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              NMLS Consumer Access
            </a>{" "}
            registry.
          </p>
          <p>
            Information on this site is not directed at residents of
            states where {site.legalName} is not licensed to originate
            residential mortgages. If you are a resident of an unlicensed
            state, the educational content here may still be useful, but
            we cannot accept a loan application from you.
          </p>

          <h2>Accuracy of information</h2>
          <p>
            We make reasonable efforts to keep information on this site
            accurate and current. However, mortgage program rules, loan
            limits, agency guidelines, and tax laws change frequently. We
            do not warrant the completeness or accuracy of any content and
            disclaim liability for errors or omissions. For any
            decision-grade information (current loan limits, current
            rates, current eligibility rules), verify directly with the
            relevant authority (FHFA, VA, FHA, USDA, IRS) or with a
            licensed mortgage loan originator.
          </p>

          <h2>Third-party links and resources</h2>
          <p>
            This website may contain links to external sites including
            VA.gov, FHFA.gov, NMLS Consumer Access, and other federal,
            state, and regulatory resources. We are not responsible for
            the content, accuracy, privacy practices, or availability of
            those sites. External links are provided for your convenience
            and do not constitute endorsement of any third-party product,
            service, or organization.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All content on this site (articles, guides, photographs,
            graphics, and structural design) is either owned by{" "}
            {site.name} / {site.legalName} or used under license. You may
            link to pages on this site without prior permission. You may
            not copy, redistribute, or reproduce significant portions of
            site content without written permission, except as fair use
            for personal reference.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We reserve the right to update these terms at any time. The
            current version is the version posted on this page; the
            &quot;last reviewed&quot; date in the draft notice above
            reflects the most recent revision. Continued use of the site
            after changes constitutes acceptance of the updated terms. If
            a change is material, we will note it on the homepage or
            relevant page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Reach out at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or through
            the <a href={site.contactCta.href}>contact form</a>.
          </p>

          <p className="mt-10 text-xs text-muted">
            {site.nmlsId} · {site.companyNmls}. {site.equalHousingDisclosure}
          </p>
        </Prose>
      </Section>
    </>
  );
}
