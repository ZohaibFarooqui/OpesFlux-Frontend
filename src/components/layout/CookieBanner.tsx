"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      setAnalyticsEnabled(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setAnalyticsEnabled(true);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  return (
    <>
      {/* Load Plausible only after explicit consent */}
      {analyticsEnabled && process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
        <Script
          defer
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}

      {visible && (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full bg-white rounded-2xl shadow-[0_12px_40px_-12px_rgba(10,37,64,0.2)] border border-(--color-border) p-6">
          <h3 className="font-semibold text-(--color-deep-blue) mb-2">We value your privacy</h3>
          <p className="text-sm text-(--color-muted) mb-4">
            We use analytics cookies to understand how visitors use our site. No personal data is sold or shared with advertisers.
          </p>
          <div className="flex gap-2">
            <Button size="sm" onClick={accept} className="flex-1">
              Accept all
            </Button>
            <Button size="sm" variant="ghost" onClick={decline} className="flex-1">
              Decline
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
