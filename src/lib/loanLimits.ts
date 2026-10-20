/**
 * Single source of truth for the FHFA conforming loan limit referenced
 * across the VA loan content. When the FHFA publishes the next year's
 * baseline, update the two constants below - every page that references
 * the limit (article copy, comparison tables, worked examples, FAQ
 * answers) picks it up automatically.
 *
 * Source: https://www.fhfa.gov/data/conforming-loan-limit-cll-values
 */

export const CONFORMING_LIMIT_YEAR = 2026;

/** Baseline (standard-cost county) one-unit conforming loan limit, USD. */
export const CONFORMING_LIMIT_VALUE = 832_750;

export const CONFORMING_LIMIT_DISPLAY = `$${CONFORMING_LIMIT_VALUE.toLocaleString("en-US")}`;

export function formatCurrency(amount: number): string {
  return `$${Math.round(amount).toLocaleString("en-US")}`;
}

/**
 * Computes the partial-entitlement down-payment math for a given
 * purchase price above the conforming limit. Returns numeric and
 * display-formatted fields so worked examples in articles stay in sync
 * with the live limit constant.
 */
export function partialEntitlementMath(purchasePrice: number) {
  const amountAbove = purchasePrice - CONFORMING_LIMIT_VALUE;
  const downPayment = Math.round(amountAbove * 0.25);
  return {
    purchasePrice,
    purchasePriceDisplay: formatCurrency(purchasePrice),
    amountAbove,
    amountAboveDisplay: formatCurrency(amountAbove),
    downPayment,
    downPaymentDisplay: formatCurrency(downPayment),
  };
}
