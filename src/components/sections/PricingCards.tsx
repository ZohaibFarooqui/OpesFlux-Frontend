"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/config/pricing";
import { cn } from "@/lib/utils";

export function PricingCards() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className={cn("text-sm font-medium", !annual ? "text-(--color-deep-blue)" : "text-(--color-muted)")}>Monthly</span>
        <button
          onClick={() => setAnnual((v) => !v)}
          className={cn(
            "relative w-12 h-6 rounded-full transition-colors",
            annual ? "bg-(--color-cyan)" : "bg-(--color-border)"
          )}
          aria-label="Toggle annual billing"
        >
          <span
            className={cn(
              "absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform",
              annual ? "translate-x-7" : "translate-x-1"
            )}
          />
        </button>
        <span className={cn("text-sm font-medium", annual ? "text-(--color-deep-blue)" : "text-(--color-muted)")}>
          Annual <span className="text-(--color-cyan) font-semibold">(save 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRICING_TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "relative rounded-2xl border p-8 flex flex-col",
              tier.highlighted
                ? "border-2 border-(--color-cyan) scale-105 shadow-[0_16px_48px_-12px_rgba(0,194,255,0.2)]"
                : "border-(--color-border) shadow-[0_4px_24px_-8px_rgba(10,37,64,0.08)]"
            )}
          >
            {tier.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-(--color-cyan) text-(--color-deep-blue) text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                {tier.badge}
              </div>
            )}

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-2">{tier.name}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold text-(--color-deep-blue)">
                  {tier.currencySymbol}{annual ? Math.round(tier.price.annual / 12) : tier.price.monthly}
                </span>
                <span className="text-(--color-muted) text-sm mb-2">/month</span>
              </div>
              {annual && (
                <p className="text-xs text-(--color-muted)">{tier.currencySymbol}{tier.price.annual}/year — save 20%</p>
              )}
              <p className="text-xs text-(--color-muted) italic mt-1">{tier.note}</p>
              <p className="text-sm text-(--color-muted) mt-3">{tier.description}</p>
              <p className="text-xs text-(--color-muted) mt-1">{tier.users} · {tier.locations}</p>
            </div>

            <Button
              variant={tier.highlighted ? "default" : "outline"}
              size="lg"
              className="w-full mb-6"
              asChild
            >
              <Link href={tier.ctaHref}>{tier.cta}</Link>
            </Button>

            <div className="border-t border-(--color-border) pt-6 flex-1">
              <p className="text-xs font-semibold text-(--color-muted) uppercase tracking-wider mb-4">Includes:</p>
              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-(--color-text)">
                    <Check className="h-4 w-4 text-(--color-cyan) shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-(--color-muted) italic mt-6">
              Best for: {tier.bestFor}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-(--color-muted) mt-6">
        Prices shown in USD. Local currency billing available on all plans.
      </p>
    </div>
  );
}
