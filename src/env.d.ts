/**
 * Environment variables for SEO and analytics (production-ready).
 * Set in .env or deployment: PUBLIC_GA4_MEASUREMENT_ID, PUBLIC_META_PIXEL_ID,
 * PUBLIC_ANALYTICS_REQUIRE_CONSENT, PUBLIC_GOOGLE_SITE_VERIFICATION.
 */
interface ImportMetaEnv {
  readonly PUBLIC_GA4_MEASUREMENT_ID?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PUBLIC_ANALYTICS_REQUIRE_CONSENT?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
