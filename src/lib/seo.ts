/**
 * Central SEO configuration and schema helpers.
 * Single source of truth for site URL, defaults, and JSON-LD generation.
 * Production-ready: no placeholders; use env for IDs.
 */

import {
  COMPANY_CITY,
  COMPANY_COUNTRY,
  COMPANY_COUNTRY_CODE,
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from "./company";

export const SITE_URL = "https://zekiri.io";

/** One-line description of the company, shared by the Organization and WebSite schemas. */
const SITE_DESCRIPTION = `Empresa de desarrollo de software a medida y automatización de procesos en ${COMPANY_CITY}, ${COMPANY_COUNTRY}.`;

/** Default OG image path (absolute URL for social crawlers). */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo.png`;

/** OG image dimensions for og:image:width/height (improves crawl/social). */
export const OG_IMAGE_WIDTH = 105;
export const OG_IMAGE_HEIGHT = 34;

/** Google Search Console: código de verificación (meta tag). Si env no está en build, se usa este. */
export const GOOGLE_SITE_VERIFICATION = "qm0MYautpusZN1n3si5z4QmydNqRAYgih18QC2Fx7tI";

/** Supported locales for hreflang. */
export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

/** Build canonical URL for a path (no trailing slash). */
export function canonicalUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withoutTrailing = clean.replace(/\/+$/, "") || "/";
  return `${SITE_URL}${withoutTrailing}`;
}

/** Build hreflang URLs for a canonical path; only include real alternates. */
export function alternateUrls(canonicalPath: string, language: Locale): { lang: string; url: string }[] {
  const clean = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  const withoutTrailing = clean.replace(/\/+$/, "") || "/";

  // Every page exists in a single locale; add explicit alternates here if a translation ships.
  return [{ lang: language, url: canonicalUrl(withoutTrailing) }];
}

/** Organization JSON-LD (validates with Google Rich Results). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Zékiri",
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    description: SITE_DESCRIPTION,
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE,
    // City and country only: no street address is published on the site.
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY_CITY,
      addressCountry: COMPANY_COUNTRY_CODE,
    },
    areaServed: { "@type": "Country", name: COMPANY_COUNTRY },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: COMPANY_EMAIL,
      telephone: COMPANY_PHONE,
      areaServed: COMPANY_COUNTRY_CODE,
      availableLanguage: ["Spanish", "English"],
    },
  };
}

/** WebSite JSON-LD with SearchAction for sitelinks. */
export function websiteSchema(canonical: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zékiri",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: ["es"],
  };
}

/** FAQPage JSON-LD from Q&A list (required for FAQ rich results). */
export function faqSchema(
  items: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** BreadcrumbList JSON-LD for home (and future pages). */
export function breadcrumbSchema(pathSegments: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: pathSegments.map((segment, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: segment.name,
      item: segment.url,
    })),
  };
}

/** Service schema for local business / service pages. */
export function serviceSchema(canonical: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: canonical,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: COMPANY_COUNTRY },
  };
}
