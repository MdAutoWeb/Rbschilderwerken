import { BUSINESS } from "./business";

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rbschilderwerken.be"
  );
}

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}&query_place_id=${BUSINESS.googlePlaceId}`;

/** Iframe-embed zonder API-key (adres-query). Place ID blijft voor open-link + hasMap. */
const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Langepijpestraat+1,+8820+Torhout,+Belgi%C3%AB&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=nl";

export { MAPS_EMBED_URL, MAPS_URL };

function logoImageObject(siteUrl: string) {
  return {
    "@type": "ImageObject",
    url: `${siteUrl}/assets/logo.png`,
    width: 512,
    height: 512,
    caption: "Logo RB Schilderwerken",
  };
}

/** HousePainter JSON-LD — sitewide via root layout */
export function getLocalBusinessSchema(siteUrl = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": `${siteUrl}/#business`,
    name: BUSINESS.name,
    image: logoImageObject(siteUrl),
    logo: logoImageObject(siteUrl),
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
      "Wingene",
      "Zwevezele",
      "Zedelgem",
      "Aartrijke",
      "Loppem",
      "Veldegem",
      "Ichtegem",
      "Bekegem",
      "Eernegem",
      "Koekelare",
      "Bovekerke",
      "Zande",
      "Kortemark",
      "Handzame",
      "Werken",
      "Zarren",
      "Oostkamp",
      "Hertsberge",
      "Ruddervoorde",
      "Waardamme",
      "Ardooie",
    ],
    url: siteUrl,
    priceRange: "€€",
    description:
      "Vakkundige schilderwerken in Torhout, Lichtervelde, Zedelgem, Ichtegem, Koekelare, Kortemark, Oostkamp en omstreken.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0648,
      longitude: 3.0977,
    },
    hasMap: MAPS_URL,
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

export function getWebPageSchema(options: {
  path: string;
  name: string;
  description: string;
  siteUrl?: string;
}) {
  const siteUrl = options.siteUrl ?? getSiteUrl();
  const url = `${siteUrl}${options.path === "/" ? "" : options.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url === siteUrl ? siteUrl : url}#webpage`,
    url,
    name: options.name,
    description: options.description,
    inLanguage: "nl-BE",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` },
  };
}

export function getServiceSchema(options: {
  city: string;
  slug: string;
  description: string;
  siteUrl?: string;
}) {
  const siteUrl = options.siteUrl ?? getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/${options.slug}#service`,
    name: `Schilderwerken ${options.city}`,
    serviceType: "Schilderwerken",
    description: options.description,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: {
      "@type": "City",
      name: options.city,
    },
    url: `${siteUrl}/${options.slug}`,
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
