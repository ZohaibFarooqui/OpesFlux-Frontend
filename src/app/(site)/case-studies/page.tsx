import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";

// No published customer stories yet. Kept out of the index (noindex, not in the
// sitemap) until there is a real case study to show.
export const metadata = pageMetadata({
  title: "Customer Stories",
  description: "OpesFlux is new and looking for its first UK customers. Early customers work directly with the team that builds it.",
  path: "/case-studies",
  noindex: true,
});

export default function CaseStudiesPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-deep-blue) mb-3">Customer stories</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-6">
            We&apos;re looking for our first UK customer stories
          </h1>
          <p className="text-lg text-(--color-text) leading-[1.7] mb-4">
            OpesFlux is new. We haven&apos;t published any customer stories yet, and we won&apos;t invent any.
          </p>
          <p className="text-lg text-(--color-text) leading-[1.7]">
            If you&apos;re a UK wholesaler, distributor or multi-site shop, early customers work directly with the team that builds OpesFlux.
            Start with the <Link href="/industries" className="underline underline-offset-4">industry pages</Link> or book a demo.
          </p>
        </div>
      </div>
      <CTASection title="Be one of our first customers" />
    </>
  );
}
