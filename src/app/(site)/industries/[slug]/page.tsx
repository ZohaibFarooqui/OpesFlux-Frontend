import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { INDUSTRIES, INDUSTRIES_LIST } from "@/config/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return INDUSTRIES_LIST.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  if (!industry) return {};
  return {
    title: `${industry.name} — OpesFlux for UK ${industry.name} Businesses`,
    description: industry.hero.description,
    alternates: { canonical: `https://opesflux.devsandvisuals.com/industries/${slug}` },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];
  if (!industry) notFound();

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
          style={{ background: "radial-gradient(circle at top right, rgba(0,194,255,0.06) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="text-xs text-(--color-muted) mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-(--color-cyan) transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-(--color-cyan) transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-(--color-deep-blue)">{industry.name}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3">{industry.hero.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-6 max-w-3xl">
            {industry.hero.title}
          </h1>
          <p className="text-lg text-(--color-muted) leading-[1.7] max-w-2xl mb-10">
            {industry.hero.description}
          </p>
          <Button size="lg" asChild>
            <Link href={`/contact?industry=${slug}`}>Book a demo for {industry.name}</Link>
          </Button>
        </div>
      </div>

      {/* Challenges */}
      <div className="py-16 bg-(--color-cream)">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-8">Common challenges we solve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.challenges.map((c, i) => (
              <div key={i} className="rounded-2xl bg-white border border-(--color-border) p-5">
                <div className="w-8 h-8 rounded-lg bg-(--color-error)/10 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-(--color-error)">{i + 1}</span>
                </div>
                <p className="text-sm text-(--color-text) font-medium">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-8">Built for {industry.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industry.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-(--color-border) p-6 hover:border-(--color-cyan)/40 transition-colors">
                <h3 className="text-lg font-semibold text-(--color-deep-blue) mb-2">{f.title}</h3>
                <p className="text-sm text-(--color-muted) leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-(--color-deep-blue)">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {industry.stats.map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-5xl font-bold text-(--color-cyan) mb-2">{s.value}</div>
                <div className="text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title={`Ready to run your ${industry.name.toLowerCase()} business in flow?`}
        subtitle={`Book a 20-minute demo tailored to ${industry.name.toLowerCase()} businesses. We'll show you exactly what OpesFlux can do for you.`}
      />
    </>
  );
}
