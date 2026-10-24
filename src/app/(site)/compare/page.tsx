import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { COMPARISONS } from "@/config/compare";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Compare OpesFlux with Sage 50, Xero and More",
  description:
    "Honest comparisons of OpesFlux with Sage 50, Unleashed, Xero and Brightpearl, sourced from their own websites, including where they're the better choice.",
  path: "/compare",
});

export default function CompareIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "" }, { name: "Compare", path: "/compare" }]} />
      <div className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
            How OpesFlux compares
          </h1>
          <p className="text-lg text-(--color-muted) leading-[1.7] mb-10">
            Every comparison uses facts from the other company&apos;s own website, dated, and says plainly when they are the better choice.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMPARISONS.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="rounded-2xl border border-(--color-border) p-6 hover:border-(--color-cyan)/40 transition-colors"
              >
                <h2 className="text-lg font-semibold text-(--color-deep-blue) mb-2">OpesFlux vs {c.name}</h2>
                <p className="text-sm text-(--color-muted) leading-relaxed line-clamp-3">{c.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
