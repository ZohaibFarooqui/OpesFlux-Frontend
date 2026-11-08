import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { TOOLS } from "@/config/tools";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Free Business Calculators and Tools",
  description:
    "Free tools for UK businesses: a VAT calculator, profit margin calculator, reorder point calculator and invoice generator. No sign-up needed.",
  path: "/tools",
});

export default function ToolsIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "" }, { name: "Free tools", path: "/tools" }]} />
      <div className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
            Free tools for UK businesses
          </h1>
          <p className="text-lg text-(--color-muted) leading-[1.7] mb-10">
            Quick calculators for the sums that come up every week. They are free to use, with no sign-up, and each one shows how the answer is worked out.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TOOLS.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="rounded-2xl border border-(--color-border) p-6 hover:border-(--color-cyan)/40 transition-colors"
              >
                <h2 className="text-lg font-semibold text-(--color-deep-blue) mb-2">{t.name}</h2>
                <p className="text-sm text-(--color-muted) leading-relaxed">{t.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
