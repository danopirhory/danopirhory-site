"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-md border border-line/70 bg-paper/60 px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:outline-none focus:border-accent/70 focus:ring-2 focus:ring-accent/20";

/**
 * Three-field contact form: name, email, phone.
 *
 * On submit, posts JSON to `/api/contact`, which validates the payload
 * and sends an email via Resend. State (idle/submitting/success/error)
 * lives entirely on the client; no PII is persisted in the browser.
 *
 * A honeypot field (`hp_company`) is rendered visually hidden but
 * present in the DOM. The route handler silently discards any submission
 * where the honeypot is non-empty.
 */
export function LeadForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      hp_company: String(formData.get("hp_company") ?? ""),
      sourcePage:
        typeof window !== "undefined" ? window.location.pathname : "/",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(
          data?.error ?? "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      form.reset();

      // Meta Pixel: report a Lead conversion so website form submissions
      // feed the Meta Pixel dataset (used by FB ads optimization
      // and retargeting). No PII is sent - just the standard event.
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead");
      }
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-lg border border-line bg-paper p-8 md:p-10 text-center",
          className,
        )}
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-2xl text-ink">
          Thanks, message received.
        </h3>
        <p className="mt-3 text-ink/70">
          I&apos;ll be in touch within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-ink/60 underline underline-offset-4 hover:text-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-5", className)}
      noValidate
    >
      {/*
        Honeypot - visually hidden but present in the DOM. Real users
        won't see or focus this field; bots that auto-fill all fields
        will. The /api/contact handler silently discards any submission
        where this field is non-empty.
      */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="hp_company">Company (leave blank)</label>
        <input
          type="text"
          id="hp_company"
          name="hp_company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field label="Full name" htmlFor="name" required>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className={fieldBase}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" required>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={fieldBase}
          />
        </Field>
        <Field label="Phone" htmlFor="phone" required>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            className={fieldBase}
          />
        </Field>
      </div>

      <p className="text-xs text-muted leading-relaxed">
        By submitting, you agree to be contacted about your inquiry. See our{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 decoration-ink/30 hover:decoration-ink"
        >
          Privacy Policy
        </Link>
        .
      </p>

      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Get in Touch"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-xs font-medium uppercase tracking-[0.12em] text-ink/70"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-ink/40">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
