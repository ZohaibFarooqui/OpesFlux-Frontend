import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlowLines } from "@/components/visual/FlowLines";
import { DashboardMockup } from "@/components/visual/DashboardMockup";

// Server component on purpose: the headline and intro are the Largest Contentful
// Paint, so they must be visible in the server HTML, not faded in by JavaScript.

const trustPoints = [
  "From £19 a month, prices published",
  "Free 7-day trial after a demo",
  "No credit card required",
];

export function Hero() {
  return (
    <section className="relative min-h-175 lg:min-h-screen flex items-center overflow-hidden bg-white">
      <div
        className="absolute top-0 right-0 w-175 h-175 pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(0,194,255,0.07) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <FlowLines />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/8 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, #1E6AB5, #00C2FF)" }} />
              <span className="text-xs font-semibold text-(--color-deep-blue) uppercase tracking-wide">
                For UK wholesalers, distributors and multi-site shops
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-(--color-deep-blue) leading-[1.08] tracking-tight mb-6">
              Till, stock and accounts in <span className="gradient-text">one system.</span>
            </h1>

            <p className="text-base sm:text-lg text-(--color-text) leading-[1.7] max-w-xl mb-8">
              OpesFlux is cloud software that runs your point of sale, stock control, purchase orders, invoicing, accounts and payroll together.
              A sale at the till updates stock and the books straight away, so nobody re-keys anything at the end of the week.
            </p>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {trustPoints.map((pt) => (
                <li key={pt} className="flex items-center gap-1.5 text-sm text-(--color-text)">
                  <CheckCircle className="h-4 w-4 text-(--color-cyan-ink) shrink-0" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/contact">Book a free demo</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 w-full" aria-hidden="true">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
