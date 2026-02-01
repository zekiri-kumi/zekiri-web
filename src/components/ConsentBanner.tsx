/**
 * GDPR-ready cookie consent banner. Sets analytics_consent cookie and
 * triggers gtag/fbq config so analytics run only after consent.
 */
import { useState, useEffect } from "react";

const COOKIE_NAME = "analytics_consent";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

export function ConsentBanner() {
  const [show, setShow] = useState(false);
  const gaId = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID as string | undefined;
  const pixelId = import.meta.env.PUBLIC_META_PIXEL_ID as string | undefined;
  const requireConsent = import.meta.env.PUBLIC_ANALYTICS_REQUIRE_CONSENT === "true";

  useEffect(() => {
    if (!requireConsent || (!gaId && !pixelId)) return;
    const accepted = document.cookie.includes(`${COOKIE_NAME}=true`);
    const dismissed = document.cookie.includes(`${COOKIE_NAME}=dismissed`);
    if (!accepted && !dismissed) setShow(true);
  }, [requireConsent, gaId, pixelId]);

  const setCookie = (value: string) => {
    document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  };

  const accept = () => {
    setCookie("true");
    setShow(false);
    if (typeof window !== "undefined") {
      if (gaId && window.gtag) {
        window.gtag("config", gaId, { send_page_view: true });
      }
      if (pixelId && window.fbq) {
        window.fbq("init", pixelId);
        window.fbq("track", "PageView");
      }
    }
  };

  const decline = () => {
    setCookie("dismissed");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-background p-4 shadow-lg md:flex md:items-center md:justify-between md:gap-4 md:px-8"
    >
      <p className="text-foreground text-sm md:max-w-2xl">
        We use cookies to improve your experience and analyze traffic. By clicking &quot;Accept&quot; you consent to analytics (Google Analytics, Meta). You can decline and we will not load tracking scripts.
      </p>
      <div className="mt-4 flex gap-3 md:mt-0">
        <button
          type="button"
          onClick={decline}
          className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={accept}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
