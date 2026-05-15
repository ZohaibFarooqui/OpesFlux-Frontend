import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { ComplianceCallout } from "@/components/sections/ComplianceCallout";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { CTASection } from "@/components/sections/CTASection";
import { SoftwareAppJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "OpesFlux — All-in-One ERP & POS Platform",
  description:
    "POS, inventory, accounting, payroll, and tax compliance in one platform — for businesses of any size. Book a free demo.",
  openGraph: {
    title: "OpesFlux — All-in-One ERP & POS Platform",
    description:
      "POS, inventory, accounting, payroll, and tax compliance in one platform — for businesses of any size.",
    url: "https://opesflux.devsandvisuals.com",
    type: "website",
  },
  alternates: { canonical: "https://opesflux.devsandvisuals.com" },
};

export default function HomePage() {
  return (
    <>
      <SoftwareAppJsonLd />
      <Hero />
      <TrustBar />
      <StatsSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <IndustriesGrid />
      <ComplianceCallout />
      <TestimonialsCarousel />
      <CTASection />
    </>
  );
}
