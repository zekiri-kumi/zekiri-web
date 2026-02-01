/**
 * Central SEO configuration and schema helpers.
 * Single source of truth for site URL, defaults, and JSON-LD generation.
 * Production-ready: no placeholders; use env for IDs.
 */

export const SITE_URL = "https://zekiri.io";

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

/** Build alternate URLs for hreflang (index: / and /?lang=es). */
export function alternateUrls(language: string): { lang: string; url: string }[] {
  const base = `${SITE_URL}/`;
  return LOCALES.map((locale) => ({
    lang: locale === "en" ? "en" : "es",
    url: locale === "en" ? base : `${base}?lang=es`,
  }));
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
    description: "AI automation that frees time and multiplies results.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@zekiri.com",
      availableLanguage: ["English", "Spanish"],
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
    description: "AI automation that frees time and multiplies results.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: ["en", "es"],
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
  };
}
