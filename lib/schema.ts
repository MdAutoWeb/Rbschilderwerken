import { BUSINESS } from "./business";

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rbschilderwerken.be"
  );
}

/** LocalBusiness JSON-LD — homepage, contact en sitewide via root layout */
export function getLocalBusinessSchema(siteUrl = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: BUSINESS.name,
    image: `${siteUrl}/assets/logo.png`,
    logo: `${siteUrl}/assets/logo.png`,
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS.address.street} ${BUSINESS.address.bus}`,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postalCode,
      addressRegion: "West-Vlaanderen",
      addressCountry: "BE",
    },
    areaServed: [
      "Torhout",
      "Wijnendale",
      "Lichtervelde",
      "Kortemark",
      "Ichtegem",
      "Zedelgem",
      "Roeselare",
      "Rumbeke",
      "Beveren",
      "Oekene",
      "West-Vlaanderen",
    ],
    url: siteUrl,
    priceRange: "€€",
    description:
      "Vakkundige schilderwerken in Torhout en West-Vlaanderen. Binnenschilderwerk, buitenschilderwerk, behangwerken en renovatie.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0648,
      longitude: 3.0977,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
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
    foundingDate: BUSINESS.foundedDate,
    vatID: BUSINESS.vatNumber,
    sameAs: ["https://www.facebook.com/profile.php?id=61577985017802"],
  };
}

export function getWebSiteSchema(siteUrl = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: BUSINESS.name,
    inLanguage: "nl-BE",
    publisher: { "@id": `${siteUrl}/#business` },
  };
}

export function getContactPageSchema(siteUrl = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#webpage`,
    url: `${siteUrl}/contact`,
    name: "Contact — RB Schilderwerken",
    inLanguage: "nl-BE",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` },
    mainEntity: { "@id": `${siteUrl}/#business` },
  };
}
