/**
 * GA4 click events with template shape: event "click", category "button".
 * Respects PUBLIC_ANALYTICS_REQUIRE_CONSENT + analytics_consent cookie.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const REQUIRE_CONSENT = import.meta.env.PUBLIC_ANALYTICS_REQUIRE_CONSENT === "true";

function hasConsent(): boolean {
  if (typeof document === "undefined") return false;
  if (!REQUIRE_CONSENT) return true;
  return document.cookie.includes("analytics_consent=true");
}

export function trackButtonClick(eventLabel: string): void {
  if (!hasConsent()) return;
  const id = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID as string | undefined;
  if (!id || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "click", {
    event_category: "button",
    event_label: eventLabel,
  });
}
