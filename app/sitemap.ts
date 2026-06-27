import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rbschilderwerken.be";

// Statische datum: enkel bijwerken wanneer de inhoud effectief wijzigt.
const LAST_MODIFIED = "2026-06-27";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/schilder-torhout`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/schilder-roeselare`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/realisaties`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
