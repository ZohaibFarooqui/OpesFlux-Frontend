import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { ComplianceCallout } from "@/components/sections/ComplianceCallout";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { FaqJsonLd, SoftwareAppJsonLd } from "@/components/seo/JsonLd";
import { COMPARISONS } from "@/config/compare";
import { PRICING_FAQS } from "@/config/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "OpesFlux: EPOS, Stock Control and Accounts for UK Business",
  description:
    "POS, stock control, purchase orders, invoicing, accounts and payroll in one system for UK wholesalers and multi-site shops. From £19 a month.",
  absoluteTitle: true,
});

const HOME_FAQS = PRICING_FAQS.filter((f) =>
  [
    "Does the till keep working if the internet drops?",
    "Does OpesFlux file my VAT return with HMRC?",
    "Does OpesFlux run UK payroll?",
    "Can I bring my existing data across?",
    "Can my accountant see my books?",
  ].includes(f.q)
);

export default function HomePage() {
  return (
    <>
      <SoftwareAppJsonLd />
      <FaqJsonLd faqs={HOME_FAQS} />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <IndustriesGrid />
      <HowItWorks />
      <ComplianceCallout />

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-(--color-deep-blue) tracking-tight mb-3">
            Weighing up other systems?
          </h2>
          <p className="text-(--color-text) mb-8">
            Honest comparisons, sourced from each company&apos;s own website, including when they are the better choice.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {COMPARISONS.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="rounded-full border border-(--color-border) px-5 py-2.5 text-sm font-medium text-(--color-deep-blue) hover:border-(--color-cyan) hover:text-(--color-cyan) transition-colors"
              >
                OpesFlux vs {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={HOME_FAQS} title="Common questions" />
      <CTASection />
    </>
  );
}
