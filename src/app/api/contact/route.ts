import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

/**
 * Contact form route handler.
 *
 * Receives a JSON POST from <LeadForm /> and forwards it to Dan via
 * Resend. Server-side only, secrets never reach the browser.
 *
 * Required environment variables (see .env.example):
 *   RESEND_API_KEY      - API key from https://resend.com/api-keys
 *   CONTACT_TO_EMAIL    - inbox that should receive new submissions
 *   CONTACT_FROM_EMAIL  - verified sender address in your Resend account
 *
 * Spam protection:
 *   - Honeypot field `hp_company` - silently discards submissions where
 *     it's filled in. Real users don't see the field; basic bots do.
 *   - In-memory IP rate limit (RATE_LIMIT_MAX submissions per
 *     RATE_LIMIT_WINDOW_MS). Per serverless instance only - a sustained
 *     attacker hitting cold starts can still get more through. Upgrade
 *     to a shared store (Upstash, KV) if real abuse appears.
 *
 * On success, also sends a brief confirmation email back to the lead.
 */

export const runtime = "nodejs";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const submissionLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const recent = (submissionLog.get(ip) ?? []).filter((t) => t > cutoff);
  if (recent.length >= RATE_LIMIT_MAX) {
    submissionLog.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissionLog.set(ip, recent);
  // Opportunistic cleanup so the Map doesn't grow unbounded.
  if (submissionLog.size > 5000) {
    for (const [key, times] of submissionLog) {
      const fresh = times.filter((t) => t > cutoff);
      if (fresh.length === 0) submissionLog.delete(key);
      else submissionLog.set(key, fresh);
    }
  }
  return false;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  hp_company?: unknown;
  sourcePage?: unknown;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { name, email, phone, hp_company, sourcePage } = body ?? {};

  // Honeypot - bots fill this; humans don't see it. Pretend it worked.
  if (typeof hp_company === "string" && hp_company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Rate limit by IP. Same opaque success response as the honeypot so
  // we don't tell scrapers what tripped them.
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json({ ok: true });
  }

  // Lightweight, inline validation. We don't pull in zod for three fields.
  const errors: string[] = [];
  const cleanName = typeof name === "string" ? name.trim() : "";
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  const cleanPhone = typeof phone === "string" ? phone.trim() : "";

  if (cleanName.length < 1 || cleanName.length > 100) {
    errors.push("Please enter your name.");
  }
  if (!/^\S+@\S+\.\S+$/.test(cleanEmail) || cleanEmail.length > 200) {
    errors.push("Please enter a valid email address.");
  }
  if (cleanPhone.replace(/\D/g, "").length < 7 || cleanPhone.length > 50) {
    errors.push("Please enter a valid phone number.");
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "[contact] Missing required env vars (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL).",
    );
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const cleanSource =
    typeof sourcePage === "string" && sourcePage.length <= 200
      ? sourcePage
      : "unknown";
  const submittedAt = new Date().toISOString();

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: cleanEmail,
      subject: `New contact form submission - ${cleanName}`,
      html: `
        <h2 style="font-family: -apple-system, sans-serif;">New contact form submission</h2>
        <p style="font-family: -apple-system, sans-serif; color: #444;">
          A new lead came in through the website contact form.
        </p>
        <table cellpadding="6" cellspacing="0" border="0" style="border-collapse: collapse; font-family: -apple-system, sans-serif;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(cleanName)}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a></td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(cleanPhone)}</td></tr>
          <tr><td><strong>Source page</strong></td><td>${escapeHtml(cleanSource)}</td></tr>
          <tr><td><strong>Submitted</strong></td><td>${escapeHtml(submittedAt)}</td></tr>
        </table>
      `.trim(),
      text: [
        "New contact form submission",
        "",
        `Name:        ${cleanName}`,
        `Email:       ${cleanEmail}`,
        `Phone:       ${cleanPhone}`,
        `Source page: ${cleanSource}`,
        `Submitted:   ${submittedAt}`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[contact] Resend send failed:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 },
    );
  }

  // Confirmation autoreply to the lead. Best-effort - if it fails, we
  // still report success because Dan got the lead notification, which is
  // the part that matters.
  try {
    await resend.emails.send({
      from: fromEmail,
      to: cleanEmail,
      replyTo: site.email,
      subject: `Thanks for reaching out, ${cleanName}`,
      html: `
        <p style="font-family: -apple-system, sans-serif; color: #222;">
          Hi ${escapeHtml(cleanName.split(" ")[0] || cleanName)},
        </p>
        <p style="font-family: -apple-system, sans-serif; color: #222;">
          Thanks for reaching out through ${escapeHtml(site.url.replace(/^https?:\/\//, ""))}. Your message is in, and I&rsquo;ll get back to you personally within one business day.
        </p>
        <p style="font-family: -apple-system, sans-serif; color: #222;">
          If anything is time-sensitive, you can also reply directly to this email.
        </p>
        <p style="font-family: -apple-system, sans-serif; color: #222;">
          - ${escapeHtml(site.name)}<br/>
          <span style="color: #666;">Mortgage Loan Officer, ${escapeHtml(site.legalName)}</span><br/>
          <span style="color: #666;">${escapeHtml(site.nmlsId)}</span>
        </p>
      `.trim(),
      text: [
        `Hi ${cleanName.split(" ")[0] || cleanName},`,
        "",
        `Thanks for reaching out through ${site.url.replace(/^https?:\/\//, "")}. Your message is in, and I'll get back to you personally within one business day.`,
        "",
        "If anything is time-sensitive, you can also reply directly to this email.",
        "",
        `- ${site.name}`,
        `Mortgage Loan Officer, ${site.legalName}`,
        site.nmlsId,
      ].join("\n"),
    });
  } catch (err) {
    console.warn("[contact] Confirmation autoreply failed (non-fatal):", err);
  }

  return NextResponse.json({ ok: true });
}

/** Escape user-supplied strings before inserting into the email HTML. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
