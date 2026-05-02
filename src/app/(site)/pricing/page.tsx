import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PricingCards } from "@/components/sections/PricingCards";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { PRICING_TIERS, COMPARISON_FEATURES } from "@/config/pricing";

export const metadata: Metadata = {
  title: "Pricing — Simple Plans for Any Business | OpesFlux",
  description:
    "OpesFlux pricing: Starter from $49/month. Growth $129/month. Enterprise $299/month. Multi-currency. Cancel anytime. Free 7-day trial.",
  alternates: { canonical: "https://opesflux.devsandvisuals.com/pricing" },
};

const faqData = [
  { q: "Do I need to install anything?", a: "No. OpesFlux is fully web-based and works on any device through your browser." },
  { q: "Can I switch plans later?", a: "Yes. Upgrades take effect immediately; downgrades at your next billing cycle." },
  { q: "What happens during the free trial?", a: "Full access for 7 days. No credit card required. We won't charge you automatically." },
  { q: "Is my data safe and backed up?", a: "Yes. GDPR-compliant, encrypted in transit and at rest. Daily automated backups." },
  { q: "Do you charge per location or per user?", a: "Both — Starter: 1 location, 3 users. Growth: 5 locations, 15 users. Enterprise: unlimited both." },
  { q: "Can I pay in my local currency?", a: "Yes. Prices shown in USD; local currency billing available on all plans." },
  { q: "What tax and payroll systems does OpesFlux support?", a: "Any jurisdiction — UK, UAE, Pakistan, India, USA, Australia, and more. All rates are database-configurable." },
  { q: "How does the compliance module work for my country?", a: "Select your jurisdiction during onboarding. OpesFlux loads your local tax rates and filing schedules automatically." },
  { q: "Can I import data from another system?", a: "Yes — from Xero, QuickBooks, Sage, and most POS systems via CSV or API." },
  { q: "What's your cancellation policy?", a: "Cancel anytime. Monthly plans end at billing period close. Annual plans: pro-rated refund within 30 days." },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-5 w-5 text-(--color-cyan) mx-auto" />;
  if (value === false) return <X className="h-5 w-5 text-(--color-border) mx-auto" />;
  return <span className="text-xs text-(--color-muted) text-center block">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <FaqJsonLd faqs={faqData} />

      {/* Hero */}
      <div className="pt-32 pb-16 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
            Simple pricing. Built for businesses of every size.
          </h1>
          <p className="text-lg text-(--color-muted) leading-[1.7]">
            Start where you are, scale when you&apos;re ready. All plans include a 7-day free trial and local currency billing.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <PricingCards />
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-20 bg-(--color-cream)">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-(--color-deep-blue) tracking-tight text-center mb-12">
            Compare all features
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-(--color-border) bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-(--color-border)">
                  <th className="text-left px-6 py-4 font-semibold text-(--color-deep-blue) w-1/2">Feature</th>
                  {PRICING_TIERS.map((t) => (
                    <th key={t.name} className="px-4 py-4 font-semibold text-(--color-deep-blue) text-center">
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row, i) => (
                  <tr key={row.label} className={`border-b border-(--color-border) last:border-0 ${i % 2 === 1 ? "bg-cream/50" : ""}`}>
                    <td className="px-6 py-3 text-(--color-text)">{row.label}</td>
                    <td className="px-4 py-3"><CellValue value={row.starter} /></td>
                    <td className="px-4 py-3 bg-cyan/5"><CellValue value={row.growth} /></td>
                    <td className="px-4 py-3"><CellValue value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-(--color-muted) mt-4">
            Prices shown in USD. Local currency billing available on all plans.
          </p>
        </div>
      </div>

      <FAQAccordion />

      <CTASection
        title="Not sure which plan?"
        subtitle="Book a free demo and we'll help you decide. We'll show you exactly what OpesFlux looks like for a business like yours — in your currency, for your market."
      />
    </>
  );
}
