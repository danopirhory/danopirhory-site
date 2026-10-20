"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error("[global-error]", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#faf9f6",
          color: "#0b1b2b",
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center", padding: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 500 }}>
            Something went wrong.
          </h1>
          <p style={{ marginTop: 12, color: "#6b7280", lineHeight: 1.6 }}>
            We hit an unexpected error. Please try refreshing the page, or{" "}
            <a
              href="/contact"
              style={{ color: "#0b1b2b", textDecoration: "underline" }}
            >
              get in touch
            </a>{" "}
            if the problem continues.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            style={{
              marginTop: 24,
              padding: "10px 20px",
              backgroundColor: "#0b1b2b",
              color: "#faf9f6",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Back to Home
          </button>
        </div>
      </body>
    </html>
  );
}
