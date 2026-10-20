type ClassValue = string | number | false | null | undefined;

/**
 * Tiny className combinator - filters falsy values and joins with spaces.
 * No dependency on clsx/tailwind-merge; add those later if class-conflict
 * resolution becomes necessary.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
