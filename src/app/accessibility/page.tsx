import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/layout/Section";
import { Prose } from "@/components/ui/Prose";
import { DraftBanner } from "@/components/ui/DraftBanner";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description: `${site.name}'s accessibility statement: our commitment to WCAG 2.1 AA standards, known limitations, and how to report accessibility issues with the site.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Accessibility" },
        ]}
        eyebrow="Legal"
        title="Accessibility Statement"
        lead={`${site.name} is committed to providing a website that is usable by as many people as possible, regardless of ability or technology.`}
      />

      <Section>
        <Prose className="mx-auto">
          <DraftBanner lastReviewed="April 2026" />
          {/* LAUNCH BLOCKER: Have the lender's compliance team review and approve
              this copy before going live. Once approved, remove
              <DraftBanner /> above. */}

          <h2>Our commitment</h2>
          <p>
            We aim to conform to WCAG 2.1 Level AA as a baseline standard
            and to continuously improve the accessibility of this site over
            time.
          </p>

          <h2>Ongoing improvements</h2>
          <p>
            This website uses semantic HTML, keyboard-navigable components,
            sufficient color contrast, alt text for meaningful images, and
            respects user motion preferences.
          </p>

          <h2>Known limitations</h2>
          <p>
            Some areas of this site may not yet fully meet the target
            standard. We actively identify and address accessibility gaps
            as part of our ongoing development process.
          </p>

          <h2>Third-party content</h2>
          <p>
            Some embedded third-party content, such as application portals,
            may not fully conform to the same accessibility standard.
          </p>

          <h2>Feedback</h2>
          <p>
            If you encounter an accessibility barrier on this site, or if
            you&apos;d like information in an alternate format, please
            reach out at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or through
            the <a href={site.contactCta.href}>contact form</a>. Your
            feedback helps me make the site better for everyone.
          </p>

          <p className="mt-10 text-xs text-muted">
            {site.nmlsId} · {site.companyNmls}. {site.equalHousingDisclosure}
          </p>
        </Prose>
      </Section>
    </>
  );
}
