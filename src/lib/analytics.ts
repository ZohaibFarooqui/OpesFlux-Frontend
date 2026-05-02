"use client";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, props?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  if (window.plausible) {
    window.plausible(name, { props });
  }
  if (window.gtag) {
    window.gtag("event", name, props);
  }
}
