import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { MetaPixel } from "@/components/MetaPixel";
import { Footer } from "@/components/layout/Footer";
import { FixedCutout } from "@/components/layout/FixedCutout";
import { site } from "@/lib/site";
import {
  jsonLd,
  localBusinessSchema,
  personSchema,
  websiteSchema,
} from "@/lib/schema";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const AHREFS_KEY = process.env.NEXT_PUBLIC_AHREFS_KEY;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: `${site.url}/about` }],
  creator: site.name,
  publisher: site.legalName,
  keywords: [
    "mortgage loan officer",
    "VA loans",
    "FHA loans",
    "conventional mortgage",
    "DSCR loan",
    "jumbo mortgage",
    "first-time homebuyer",
    "Wilmington NC mortgage",
    "North Carolina mortgage",
    "Fort Liberty mortgage",
    "Camp Lejeune mortgage",
    "Dan Opirhory",
  ],
  category: "finance",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    // Explicit reference to the dynamic OG image route so og:image is
    // always emitted, even on subroutes whose metadata defines its own
    // openGraph object (which can suppress the file-convention auto-inject).
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // favicon.ico at `src/app/favicon.ico` is picked up automatically via
  // Next's file convention, no explicit `icons` override needed.
};

/**
 * Viewport configuration. Must be exported separately from `metadata` in
 * Next.js 14+ - the old `metadata.viewport` shape was deprecated.
 *
 * `themeColor` is split by color scheme so iOS Safari's address bar
 * matches the page tone in both light and dark modes.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1b2b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink">
        {/*
          Skip-to-content link, visually hidden until focused. Lets
          keyboard users jump past the header on every page.
        */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-cream focus:shadow-lg"
        >
          Skip to content
        </a>

        {/*
          Global structured data. FinancialService describes the practice;
          Person describes the loan officer. Both reference each other via
          @id so search engines understand the relationship.
        */}
        <script {...jsonLd(websiteSchema())} />
        <script {...jsonLd(localBusinessSchema())} />
        <script {...jsonLd(personSchema())} />

        {/* Analytics tags render only when their IDs are set (see
            .env.example). Plain <script> tags so they land in the
            server-rendered HTML, which the Ahrefs verifier requires. */}
        {GA_ID && (
          <>
            {/* Google Analytics 4 (gtag.js) */}
            <script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              async
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`,
              }}
            />
          </>
        )}

        {AHREFS_KEY && (
          <script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key={AHREFS_KEY}
            async
          />
        )}

        {/* Meta (Facebook) Pixel - base code fires the initial PageView;
            client-side route changes are tracked by the MetaPixel
            component (src/components/MetaPixel.tsx). */}
        {META_PIXEL_ID && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`,
              }}
            />
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                alt=""
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
            <MetaPixel />
          </>
        )}

        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FixedCutout />
      </body>
    </html>
  );
}
