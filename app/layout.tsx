import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";
import RevealInit from "@/components/RevealInit";
import {
  getLocalBusinessSchema,
  getSiteUrl,
  getWebSiteSchema,
} from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const SITE_URL = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | RB Schilderwerken",
    default: "RB Schilderwerken, schilder in Torhout, Lichtervelde & omstreken",
  },
  description:
    "Vakkundige schilderwerken in Torhout, Lichtervelde, Wingene en omstreken. Binnenschilderwerk, buitenschilderwerk, behangwerken en renovatie. Gratis offerte.",
  keywords: [
    "schilder Torhout",
    "schilder Lichtervelde",
    "schilder Wingene",
    "schilderwerken Torhout",
    "binnenschilderwerk",
    "buitenschilderwerk",
    "schilder offerte",
    "renovatie schilderwerk",
    "behangwerken",
    "RB Schilderwerken",
  ],
  authors: [{ name: "RB Schilderwerken" }],
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: "RB Schilderwerken",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "RB Schilderwerken logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessSchema = getLocalBusinessSchema(SITE_URL);
const webSiteSchema = getWebSiteSchema(SITE_URL);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        {children}
        <RevealInit />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
