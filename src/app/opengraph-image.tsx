import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Root-level OpenGraph / social-share image.
 *
 * Next.js 16 auto-wires this into every route's <head> as `og:image` and
 * `twitter:image`. Individual segments can override by adding their own
 * `opengraph-image.tsx`.
 *
 * Rendered at build time (static) unless request-time APIs are used.
 * No custom fonts loaded here on purpose - the default edge font-loading
 * is reliable and keeps the build cacheable.
 */

export const alt = `${site.name} - ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const bg = "#08090b"; // near-black page bg
  const panel = "#14161a"; // charcoal panel
  const text = "#ededec"; // cream text
  const accent = "#c9a86a"; // champagne
  const line = "rgba(237, 237, 236, 0.12)";
  const muted = "rgba(237, 237, 236, 0.62)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `radial-gradient(ellipse at top, ${panel} 0%, ${bg} 70%)`,
          color: text,
          fontFamily: "serif",
        }}
      >
        {/* Top row - brand + eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: muted,
            }}
          >
            {site.brandLabel}
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: muted,
              border: `1px solid ${line}`,
              borderRadius: 999,
              padding: "10px 22px",
            }}
          >
            {site.nmlsId}
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.04,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: muted,
              maxWidth: 900,
              fontFamily: "sans-serif",
            }}
          >
            Mortgage guidance across NC, SC, TX, TN &amp; GA, built around
            your strategy, not someone else&apos;s script.
          </div>
        </div>

        {/* Bottom row - url + states served */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${line}`,
            paddingTop: 28,
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ fontSize: 26, color: accent }}>
            www.danopirhory.com
          </div>
          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 20,
              color: muted,
              letterSpacing: 3,
            }}
          >
            <span>VA</span>
            <span>·</span>
            <span>CONVENTIONAL</span>
            <span>·</span>
            <span>DSCR</span>
            <span>·</span>
            <span>JUMBO</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
