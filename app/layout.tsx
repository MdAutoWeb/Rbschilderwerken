import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RevealInit from "@/components/RevealInit";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rbschilderwerken.be";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | RB Schilderwerken",
    default: "RB Schilderwerken, schilder in Torhout & West-Vlaanderen",
  },
  description:
    "Vakkundige schilderwerken in Torhout en West-Vlaanderen. Binnenschilderwerk, buitenschilderwerk, behangwerken en renovatie. Gratis offerte.",
  keywords: [
    "schilder Torhout",
    "schilderwerken West-Vlaanderen",
    "schilder West-Vlaanderen",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "RB Schilderwerken",
  description:
    "Vakkundige schilderwerken in Torhout en West-Vlaanderen. Binnenschilderwerk, buitenschilderwerk, behangwerken en renovatie.",
  url: SITE_URL,
  telephone: "+32474271575",
  email: "info@rbschilderwerken.be",
  image: `${SITE_URL}/og.png`,
  logo: `${SITE_URL}/assets/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Langepijpestraat 1 bus v009",
    addressLocality: "Torhout",
    postalCode: "8820",
    addressRegion: "West-Vlaanderen",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.0648,
    longitude: 3.0977,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Torhout" },
    { "@type": "City", name: "Wijnendale" },
    { "@type": "City", name: "Lichtervelde" },
    { "@type": "City", name: "Kortemark" },
    { "@type": "City", name: "Ichtegem" },
    { "@type": "City", name: "Zedelgem" },
    { "@type": "City", name: "Roeselare" },
    { "@type": "AdministrativeArea", name: "West-Vlaanderen" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Schilderwerk diensten",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Binnenschilderwerk" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Buitenschilderwerk" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Behangwerken" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovatie & nieuwbouw" } },
    ],
  },
  priceRange: "$$",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Overschrijving",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <RevealInit />
      </body>
    </html>
  );
}
