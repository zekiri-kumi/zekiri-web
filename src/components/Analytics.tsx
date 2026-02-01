/**
 * Analytics: GA4 + Meta Pixel, consent-aware (GDPR-ready).
 * Loads only when IDs are set (prod); respects cookie analytics_consent when
 * PUBLIC_ANALYTICS_REQUIRE_CONSENT is true. Fires page_view once; CTA/form
 * events tracked via data attributes and form submit.
 */
import { useEffect, useRef } from "react";

const GA_ID = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID as string | undefined;
const META_PIXEL_ID = import.meta.env.PUBLIC_META_PIXEL_ID as string | undefined;
const REQUIRE_CONSENT = import.meta.env.PUBLIC_ANALYTICS_REQUIRE_CONSENT === "true";

function hasConsent(): boolean {
  if (typeof document === "undefined") return false;
  if (!REQUIRE_CONSENT) return true;
  return document.cookie.includes("analytics_consent=true");
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  const pageViewSent = useRef(false);

  useEffect(() => {
    if (!GA_ID && !META_PIXEL_ID) return;

    const sendPageView = () => {
      if (!hasConsent()) return;
      if (GA_ID && window.gtag) {
        window.gtag("event", "page_view", { page_path: window.location.pathname + window.location.search });
      }
      if (META_PIXEL_ID && window.fbq) {
        window.fbq("track", "PageView");
      }
    };

    // Single page_view: when consent required, we send from here (layout uses send_page_view: false). When not required, layout already sent via gtag('config').
    if (REQUIRE_CONSENT && hasConsent() && !pageViewSent.current) {
      pageViewSent.current = true;
      sendPageView();
    }

    // CTA / link tracking: delegate from document (no duplicate listeners)
    const handleClick = (e: MouseEvent) => {
      if (!hasConsent()) return;
      const target = e.target as HTMLElement;
      const link = target.closest("a[data-ga-event], button[data-ga-event]");
      if (!link) return;
      const event = link.getAttribute("data-ga-event");
      const label = link.getAttribute("data-ga-label") || "";
      if (event && GA_ID && window.gtag) {
        window.gtag("event", event, { event_category: "engagement", event_label: label });
      }
      if (META_PIXEL_ID && window.fbq && (event === "cta_click" || event === "form_submit")) {
        window.fbq("track", "Contact");
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}

/**
 * Call from Contact form on successful submit (conversion).
 * Ensures one conversion event per submit; no duplicate.
 */
export function trackFormConversion() {
  if (!hasConsent()) return;
  if (GA_ID && window.gtag) {
    window.gtag("event", "form_submit", { event_category: "conversion", event_label: "contact" });
  }
  if (META_PIXEL_ID && window.fbq) {
    window.fbq("track", "Lead");
  }
}
