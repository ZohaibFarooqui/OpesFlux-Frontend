import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { COMPARISONS, COMPARISONS_BY_SLUG } from "@/config/compare";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = COMPARISONS_BY_SLUG[slug];
  if (!c) return {};
  return pageMetadata({
    title: c.seo.title,
    description: c.seo.description,
    path: `/compare/${slug}`,
    absoluteTitle: c.seo.title.length > 49,
  });
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const c = COMPARISONS_BY_SLUG[slug];
  if (!c) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "" },
          { name: "Compare", path: "/compare" },
          { name: `OpesFlux vs ${c.name}`, path: `/compare/${slug}` },
        ]}
      />
      <FaqJsonLd faqs={c.faqs} />

      <div className="pt-32 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-(--color-muted) mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-(--color-cyan)">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-(--color-cyan)">Compare</Link>
            <span>/</span>
            <span className="text-(--color-deep-blue)">{c.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-6">{c.h1}</h1>
          <div className="rounded-2xl border border-(--color-border) bg-(--color-cream) p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan-ink) mb-2">The short answer</p>
            <p className="text-base text-(--color-text) leading-[1.75]">{c.summary}</p>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-6">Side by side</h2>
          <div className="overflow-x-auto rounded-2xl border border-(--color-border)">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-(--color-border) bg-(--color-cream)">
                  <th scope="col" className="text-left px-5 py-3 font-semibold text-(--color-deep-blue) w-1/4"> </th>
                  <th scope="col" className="text-left px-5 py-3 font-semibold text-(--color-deep-blue)">OpesFlux</th>
                  <th scope="col" className="text-left px-5 py-3 font-semibold text-(--color-deep-blue)">{c.name}</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.label} className="border-b border-(--color-border) last:border-0 align-top">
                    <th scope="row" className="text-left px-5 py-3 font-medium text-(--color-deep-blue)">{r.label}</th>
                    <td className="px-5 py-3 text-(--color-text)">{r.opesflux}</td>
                    <td className="px-5 py-3 text-(--color-text)">{r.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-(--color-muted) mt-3">
            {c.name} details are taken from {c.name.split(" ")[0]}&apos;s own website, checked on {formatDate(c.checked)}:{" "}
            {c.sources.map((s, i) => (
              <span key={s}>
                {i > 0 && ", "}
                <a href={s} rel="nofollow noopener noreferrer" target="_blank" className="underline underline-offset-2">
                  {s.replace(/^https:\/\/(www\.)?/, "")}
                </a>
              </span>
            ))}
            . Prices and features change, so check their site before you decide.
          </p>
        </div>
      </section>

      {/* Who should choose which */}
      <section className="py-12 bg-(--color-cream)">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-(--color-border) p-6">
            <h2 className="text-xl font-semibold text-(--color-deep-blue) mb-4">Choose {c.name} if…</h2>
            <ul className="space-y-3">
              {c.themBetter.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-(--color-text)">
                  <Check className="h-5 w-5 text-(--color-muted) shrink-0 mt-0.5" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-(--color-cyan)/40 p-6">
            <h2 className="text-xl font-semibold text-(--color-deep-blue) mb-4">Choose OpesFlux if…</h2>
            <ul className="space-y-3">
              {c.usBetter.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-(--color-text)">
                  <Check className="h-5 w-5 text-(--color-cyan-ink) shrink-0 mt-0.5" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing and switching */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-4">Pricing</h2>
            <p className="text-sm text-(--color-text) leading-relaxed mb-2"><strong>OpesFlux:</strong> {c.pricing.opesflux}</p>
            <p className="text-sm text-(--color-text) leading-relaxed"><strong>{c.name}:</strong> {c.pricing.them}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-4">Switching from {c.name}</h2>
            <p className="text-sm text-(--color-text) leading-relaxed mb-6">{c.switching}</p>
            <Button asChild>
              <Link href={`/contact?from=${slug}`}>Book a demo and see your own data</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={c.faqs} title={`OpesFlux vs ${c.name}: questions`} />

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-(--color-deep-blue) mb-4">Other comparisons</h2>
          <div className="flex flex-wrap gap-3">
            {COMPARISONS.filter((o) => o.slug !== slug).map((o) => (
              <Link
                key={o.slug}
                href={`/compare/${o.slug}`}
                className="rounded-full border border-(--color-border) px-4 py-2 text-sm text-(--color-deep-blue) hover:border-(--color-cyan) hover:text-(--color-cyan)"
              >
                OpesFlux vs {o.name}
              </Link>
            ))}
            <Link href="/industries/wholesale" className="rounded-full border border-(--color-border) px-4 py-2 text-sm text-(--color-deep-blue) hover:border-(--color-cyan) hover:text-(--color-cyan)">
              OpesFlux for wholesalers
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
