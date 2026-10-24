import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { INDUSTRIES, INDUSTRIES_LIST } from "@/config/industries";
import { pageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return INDUSTRIES_LIST.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  if (!industry) return {};
  return pageMetadata({
    title: industry.seo.title,
    description: industry.seo.description,
    path: `/industries/${slug}`,
    absoluteTitle: industry.seo.title.length > 49,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  if (!industry) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${slug}` },
        ]}
      />
      <FaqJsonLd faqs={industry.faqs} />

      {/* Hero */}
      <div className="pt-32 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-(--color-muted) mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-(--color-cyan) transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-(--color-cyan) transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-(--color-deep-blue)">{industry.name}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan-ink) mb-3">{industry.hero.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-6 max-w-3xl">
            {industry.hero.h1}
          </h1>
          <p className="text-lg text-(--color-text) leading-[1.7] max-w-3xl mb-10">{industry.hero.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href={`/contact?industry=${slug}`}>Book a free demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Problems and how OpesFlux handles them */}
      <section className="py-16 bg-(--color-cream)">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-(--color-deep-blue) tracking-tight mb-10">{industry.problemsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.problems.map((p) => (
              <div key={p.problem} className="rounded-2xl bg-white border border-(--color-border) p-6">
                <h3 className="text-lg font-semibold text-(--color-deep-blue) mb-3">{p.problem}</h3>
                <p className="text-sm text-(--color-text) leading-relaxed">{p.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features and fit */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-6">What you get</h2>
            <ul className="space-y-3">
              {industry.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-(--color-text)">
                  <Check className="h-5 w-5 text-(--color-cyan-ink) shrink-0 mt-0.5" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-4">Which plan fits</h2>
              <p className="text-sm text-(--color-text) leading-relaxed">{industry.plan}</p>
            </div>
            <div className="rounded-2xl border border-(--color-border) bg-(--color-cream) p-6">
              <h2 className="text-lg font-semibold text-(--color-deep-blue) mb-2">When OpesFlux isn&apos;t the right fit</h2>
              <p className="text-sm text-(--color-text) leading-relaxed">{industry.notFor}</p>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={industry.faqs} title="Questions we get asked" />

      {/* Related */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-(--color-deep-blue) mb-5">Related</h2>
          <div className="flex flex-wrap gap-3">
            {industry.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center gap-2 rounded-full border border-(--color-border) px-4 py-2 text-sm text-(--color-deep-blue) hover:border-(--color-cyan) hover:text-(--color-cyan) transition-colors"
              >
                {r.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See it with your own products"
        subtitle="Book a 20-minute demo with someone from the team that builds OpesFlux. We'll show you the parts that matter to your business."
      />
    </>
  );
}
