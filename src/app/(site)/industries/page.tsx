import type { Metadata } from "next";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industries — OpesFlux for Every UK Business",
  description:
    "OpesFlux is built for UK retail, restaurants, wholesale, construction, and professional services. Industry-specific features in one unified platform.",
  alternates: { canonical: "https://opesflux.devsandvisuals.com/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <div className="pt-32 pb-4 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3">Industries</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
            Built for how your industry actually works.
          </h1>
          <p className="text-lg text-(--color-muted) leading-[1.7]">
            OpesFlux ships with industry-specific workflows, compliance tools, and reports — not a blank canvas you spend months configuring.
          </p>
        </div>
      </div>
      <IndustriesGrid />
      <CTASection />
    </>
  );
}
