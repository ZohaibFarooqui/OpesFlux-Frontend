import { Check, X } from "lucide-react";
import { PricingCards } from "@/components/sections/PricingCards";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareAppJsonLd } from "@/components/seo/JsonLd";
import { PRICING_TIERS, COMPARISON_FEATURES } from "@/config/pricing";
import { PRICING_FAQS } from "@/config/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing: Starter £19, Growth £49, Enterprise £99",
  description:
    "OpesFlux pricing in GBP: Starter £19, Growth £49, Enterprise £99 a month. POS, stock, purchasing, accounts and payroll. Free 7-day trial, no card needed.",
  path: "/pricing",
});

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-5 w-5 text-(--color-deep-blue) mx-auto" aria-label="Included" />;
  if (value === false) return <X className="h-5 w-5 text-(--color-muted) mx-auto" aria-label="Not included" />;
  return <span className="text-xs text-(--color-text) text-center block">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <SoftwareAppJsonLd />
      <FaqJsonLd faqs={PRICING_FAQS} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "" }, { name: "Pricing", path: "/pricing" }]} />

      <div className="pt-32 pb-16 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
            OpesFlux pricing
          </h1>
          <p className="text-lg text-(--color-text) leading-[1.7]">
            Three plans, prices published in GBP: Starter £19, Growth £49 and Enterprise £99 a month, with 20% off when you pay annually.
            Every plan starts with a free 7-day trial after a demo, and no credit card is needed.
          </p>
        </div>
      </div>

      <div className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <PricingCards />
        </div>
      </div>

      <div className="py-20 bg-(--color-cream)">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-(--color-deep-blue) tracking-tight text-center mb-12">
            Compare plans
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-(--color-border) bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-(--color-border)">
                  <th scope="col" className="text-left px-6 py-4 font-semibold text-(--color-deep-blue) w-1/2">Feature</th>
                  {PRICING_TIERS.map((t) => (
                    <th scope="col" key={t.name} className="px-4 py-4 font-semibold text-(--color-deep-blue) text-center">
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row, i) => (
                  <tr key={row.label} className={`border-b border-(--color-border) last:border-0 ${i % 2 === 1 ? "bg-cream/50" : ""}`}>
                    <th scope="row" className="text-left font-normal px-6 py-3 text-(--color-text)">{row.label}</th>
                    <td className="px-4 py-3"><CellValue value={row.starter} /></td>
                    <td className="px-4 py-3 bg-cyan/5"><CellValue value={row.growth} /></td>
                    <td className="px-4 py-3"><CellValue value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-(--color-text) mt-4">Prices in GBP per month.</p>
        </div>
      </div>

      <FAQAccordion faqs={PRICING_FAQS} />

      <CTASection
        title="Not sure which plan?"
        subtitle="Book a free demo and we'll help you choose. We'll show you OpesFlux with the kind of products and sites you actually run."
      />
    </>
  );
}
