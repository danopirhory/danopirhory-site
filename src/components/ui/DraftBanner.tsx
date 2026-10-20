/**
 * Draft / pre-compliance-review banner.
 *
 * Shown on legal pages whose body copy hasn't yet been signed off by
 * the lender's compliance team. Visitors get a clear flag that the wording is
 * subject to change so the live page isn't read as the final authority.
 *
 * Remove the `<DraftBanner />` usage from each page once compliance
 * approves the policy text.
 */
export function DraftBanner({ lastReviewed }: { lastReviewed?: string }) {
  return (
    <aside
      role="note"
      aria-label="Draft policy notice"
      className="mb-10 rounded-md border border-accent/40 bg-paper/70 px-5 py-4 text-sm leading-relaxed text-ink-soft"
    >
      <p className="font-medium text-ink">
        Draft - currently under compliance review.
      </p>
      <p className="mt-2">
        The wording below is the latest draft and is being reviewed by
        Example Mortgage Company compliance. Final approved policy may differ in
        specific terms. For binding policy questions, contact us
        directly.
        {lastReviewed && (
          <>
            {" "}
            <span className="text-muted">Last revised {lastReviewed}.</span>
          </>
        )}
      </p>
    </aside>
  );
}
