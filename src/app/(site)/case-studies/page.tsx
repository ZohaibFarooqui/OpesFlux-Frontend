import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies — Real Businesses, Real Results | OpesFlux",
  description:
    "Real businesses, real results. Read how OpesFlux helped retailers, restaurants, and distributors worldwide run more efficiently.",
  alternates: { canonical: "https://opesflux.devsandvisuals.com/case-studies" },
};

const placeholders = [
  {
    industry: "Retail",
    location: "UAE",
    name: "Multi-location Retailer (Coming Soon)",
    headline: "3x faster stock reconciliation",
    desc: "A multi-location retailer replaced their fragmented POS and accounting stack with OpesFlux, eliminating end-of-day reconciliation errors across all branches.",
  },
  {
    industry: "Wholesale",
    location: "Pakistan",
    name: "Distribution Company (Coming Soon)",
    headline: "60% reduction in invoice disputes",
    desc: "A wholesale distributor brought purchase orders and supplier invoicing into one platform, cutting disputes and improving supplier relationships.",
  },
  {
    industry: "Restaurants",
    location: "United Kingdom",
    name: "Restaurant Group (Coming Soon)",
    headline: "Payroll time cut by 80%",
    desc: "A growing restaurant group streamlined shift-based payroll and tip distribution across five sites using OpesFlux's unified HR module.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3">Case studies</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
              Real businesses, real results.
            </h1>
            <p className="text-lg text-(--color-muted) leading-[1.7]">
              Customer stories from businesses worldwide are coming soon as our customers go live. In the meantime, book a demo to hear what early adopters are saying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placeholders.map((cs) => (
              <div key={cs.name} className="rounded-2xl border border-(--color-border) p-6 bg-(--color-cream) relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-(--color-mist) text-(--color-muted) text-xs px-2 py-1 rounded-full">Coming soon</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-(--color-cyan)">{cs.industry}</span>
                  <span className="text-(--color-border)">·</span>
                  <span className="text-xs text-(--color-muted)">{cs.location}</span>
                </div>
                <div className="text-3xl font-bold text-(--color-deep-blue) mb-2">{cs.headline}</div>
                <p className="text-sm text-(--color-muted) mb-4">{cs.name}</p>
                <p className="text-sm text-(--color-text) leading-relaxed">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection
        title="Be one of our first case studies"
        subtitle="Book a demo now and become part of the OpesFlux story. We'd love to feature your business — wherever you operate."
      />
    </>
  );
}
