import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software for Wholesalers, Distributors and Shops",
  description:
    "OpesFlux for UK wholesalers, food and drinks distributors, cash and carry, off-licences, café groups, multi-site shops and small manufacturers.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "" }, { name: "Industries", path: "/industries" }]} />
      <div className="pt-32 pb-4 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan-ink) mb-3">Industries</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
            Software for wholesalers, distributors and multi-site shops
          </h1>
          <p className="text-lg text-(--color-muted) leading-[1.7]">
            OpesFlux puts the till, stock, purchasing, invoicing, accounts and payroll in one system. Pick your trade to see what that looks like day to day.
          </p>
        </div>
      </div>
      <IndustriesGrid heading={false} />
      <CTASection />
    </>
  );
}
