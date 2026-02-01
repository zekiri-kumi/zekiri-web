/**
 * Middleware: security and SEO-related response headers.
 * HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
 * CSP is not set here (third-party analytics need allowlist); configure at host or use experimental CSP if needed.
 */
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // Security: prevent MIME sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");
  // Security: restrict referrer to same-origin for privacy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  // Security: lock down features (camera, mic, etc. not needed for this site)
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  );
  // Security: HSTS — only when served over HTTPS (host should redirect HTTP→HTTPS)
  if (context.url.protocol === "https:") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    );
  }

  return response;
});
