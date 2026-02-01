/**
 * Variables de entorno: .env local y Netlify (Site settings → Environment variables).
 * PUBLIC_* se exponen al cliente; SMTP_/MAIL_ solo en el servidor (API contact).
 */
interface ImportMetaEnv {
  readonly PUBLIC_GA4_MEASUREMENT_ID?: string;
  readonly PUBLIC_META_PIXEL_ID?: string;
  readonly PUBLIC_ANALYTICS_REQUIRE_CONSENT?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_FORM_ENDPOINT?: string;
  readonly SMTP_HOST?: string;
  readonly SMTP_PORT?: string;
  readonly SMTP_USER?: string;
  readonly SMTP_PASS?: string;
  readonly MAIL_FROM?: string;
  readonly MAIL_TO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
