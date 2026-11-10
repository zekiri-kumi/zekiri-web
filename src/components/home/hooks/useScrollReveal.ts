import { useEffect, type CSSProperties, type RefObject } from "react";

const REVEAL_SELECTOR = "[data-reveal]";

/** Inline style that delays an element's reveal by its position inside a group. */
export function revealOrder(order: number): CSSProperties {
  return { "--reveal-order": order } as CSSProperties;
}

function revealOnEntry(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    (entry.target as HTMLElement).dataset.reveal = "in";
    observer.unobserve(entry.target);
  }
}

/**
 * Fades in the `[data-reveal]` descendants of `rootRef` the first time they scroll into view.
 * Blocks are only hidden once this hook runs, so they stay visible without JavaScript, and
 * never when they are already on screen or the visitor prefers reduced motion.
 */
export function useScrollReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(revealOnEntry, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.08,
    });

    root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((block) => {
      const isBelowTheFold = block.getBoundingClientRect().top >= window.innerHeight;
      if (!isBelowTheFold) return;
      block.dataset.reveal = "pending";
      observer.observe(block);
    });

    return () => observer.disconnect();
  }, [rootRef]);
}
