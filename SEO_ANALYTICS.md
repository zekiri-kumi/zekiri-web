# SEO & Analytics — Production Checklist

This project is configured for production-ready SEO, Core Web Vitals, and analytics. Use this checklist when deploying.

---

## 1. Environment Variables

Create a `.env` (or set in your host) with:

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_GA4_MEASUREMENT_ID` | For GA4 | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `PUBLIC_META_PIXEL_ID` | For Meta | Facebook/Meta Pixel ID (numeric) |
| `PUBLIC_ANALYTICS_REQUIRE_CONSENT` | Optional | Set to `"true"` to show cookie consent banner (GDPR). Omit or `"false"` to load analytics without consent (e.g. non-EU). |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | For GSC | Google Search Console verification meta tag value |

**Example `.env` (production):**

```env
PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_META_PIXEL_ID=123456789012345
PUBLIC_ANALYTICS_REQUIRE_CONSENT=true
PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_string_from_gsc
```

---

## 2. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property: `https://zekiri.io` (or your domain).
3. Choose **HTML tag** verification.
4. Copy the `content` value from the meta tag and set `PUBLIC_GOOGLE_SITE_VERIFICATION` to that value.
5. After deploy, click **Verify**. Submit `https://zekiri.io/sitemap.xml` in Sitemaps.

---

## 3. Google Analytics 4

1. Create a GA4 property at [Google Analytics](https://analytics.google.com).
2. Get the **Measurement ID** (e.g. `G-XXXXXXXXXX`) from Admin → Data Streams → your web stream.
3. Set `PUBLIC_GA4_MEASUREMENT_ID` to that ID.
4. Events already tracked: `page_view`, `cta_click` (with label), `form_submit` (contact conversion). No duplicate events.

---

## 4. Meta (Facebook) Pixel

1. Create a Pixel in [Meta Events Manager](https://business.facebook.com/events_manager).
2. Copy the Pixel ID (numeric).
3. Set `PUBLIC_META_PIXEL_ID` to that ID.
4. Events: `PageView`, `Contact` (CTA clicks), `Lead` (contact form submit).

---

## 5. GDPR / Cookie Consent

- Set `PUBLIC_ANALYTICS_REQUIRE_CONSENT=true` to show the consent banner and load GA/Meta only after **Accept**.
- **Decline** sets a cookie so the banner does not show again; no tracking scripts load.
- Banner component: `src/components/ConsentBanner.tsx`. Customize copy there if needed.

---

## 6. HTTPS & Security

- Enforce HTTPS at your host (redirect HTTP → HTTPS). HSTS is set in `src/middleware.ts` when the request is HTTPS.
- Security headers (X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS) are applied by middleware.

---

## 7. Sitemap & robots.txt

- **Sitemap:** `https://zekiri.io/sitemap.xml` (server-rendered). Add new paths in `src/pages/sitemap.xml.ts` → `SITE_ENTRIES`.
- **robots.txt:** In `public/robots.txt`. Disallows `/api/` and `/markdown-page`. Update `Sitemap:` URL if domain changes.

---

## 8. Schema Validation

- Validate JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results). Implemented: Organization, WebSite, BreadcrumbList, FAQPage (home).
- Optional: add Service or LocalBusiness schema in `src/lib/seo.ts` and pass via page `content.jsonLd`.

---

## 9. No Index Leaks

- Test/staging: use a different domain or set `noindex` in layout content for those builds.
- Markdown demo page uses `src/layouts/markdown.astro` (noindex) and is disallowed in `robots.txt`.

---

## 10. Core Web Vitals

- LCP: hero logo preloaded; above-the-fold image has `fetchpriority="high"` and dimensions.
- CLS: images use `width`/`height`. Lazy loading on footer/off-screen images.
- Scripts: gtag and Meta Pixel load async; analytics and consent run client-side without blocking render.
