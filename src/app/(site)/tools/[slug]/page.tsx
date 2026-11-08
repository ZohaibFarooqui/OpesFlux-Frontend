import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BreadcrumbJsonLd, FaqJsonLd, ToolJsonLd } from "@/components/seo/JsonLd";
import { InvoiceGenerator } from "@/components/tools/InvoiceGenerator";
import { MarginCalculator } from "@/components/tools/MarginCalculator";
import { ReorderCalculator } from "@/components/tools/ReorderCalculator";
import { VatCalculator } from "@/components/tools/VatCalculator";
import { TOOLS, TOOLS_BY_SLUG } from "@/config/tools";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

const WIDGETS: Record<string, ComponentType> = {
  "vat-calculator": VatCalculator,
  "profit-margin-calculator": MarginCalculator,
  "reorder-point-calculator": ReorderCalculator,
  "invoice-generator": InvoiceGenerator,
};

const SOURCES: Record<string, { label: string; href: string }> = {
  "vat-calculator": { label: "VAT rates on GOV.UK", href: "https://www.gov.uk/vat-rates" },
  "invoice-generator": {
    label: "What an invoice must include, on GOV.UK",
    href: "https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include",
  },
};

export async function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = TOOLS_BY_SLUG[slug];
  if (!t) return {};
  return pageMetadata({ title: t.seo.title, description: t.seo.description, path: `/tools/${slug}` });
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const t = TOOLS_BY_SLUG[slug];
  if (!t) notFound();
  const Widget = WIDGETS[slug];
  const source = SOURCES[slug];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "" },
          { name: "Free tools", path: "/tools" },
          { name: t.name, path: `/tools/${slug}` },
        ]}
      />
      <ToolJsonLd name={t.name} description={t.seo.description} path={`/tools/${slug}`} />
      <FaqJsonLd faqs={t.faqs} />

      <div className="pt-32 pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-(--color-muted) mb-4">
            <Link href="/tools" className="hover:text-(--color-cyan-ink)">Free tools</Link> / {t.name}
          </nav>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">{t.h1}</h1>
          <p className="text-lg text-(--color-muted) leading-[1.7] mb-10 max-w-3xl">{t.intro}</p>

          <div className="rounded-2xl border border-(--color-border) p-6 md:p-8 mb-14">
            <Widget />
          </div>

          <div className="max-w-3xl">
            {t.sections.map((s) => (
              <section key={s.heading} className="mb-10">
                <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-3">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p} className="text-(--color-text) leading-[1.8] mb-3">{p}</p>
                ))}
              </section>
            ))}
            {source && (
              <p className="text-sm text-(--color-muted) mb-3">
                Source: <a href={source.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-(--color-cyan-ink)">{source.label}</a>.
              </p>
            )}
            <p className="text-sm text-(--color-muted) mb-12">
              This tool gives general guidance only and isn&apos;t tax or accounting advice.
            </p>

            <section className="rounded-2xl bg-(--color-mist) p-6 mb-12">
              <h2 className="text-lg font-semibold text-(--color-deep-blue) mb-2">Doing this every day?</h2>
              <p className="text-(--color-text) leading-relaxed">
                {t.opesflux} <Link href="/features" className="underline text-(--color-cyan-ink)">See the features</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-(--color-deep-blue) mb-3">More free tools</h2>
              <ul className="space-y-2">
                {TOOLS.filter((o) => o.slug !== slug).map((o) => (
                  <li key={o.slug}>
                    <Link href={`/tools/${o.slug}`} className="underline text-(--color-cyan-ink)">{o.name}</Link>
                    <span className="text-(--color-muted)">: {o.summary}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <FAQAccordion faqs={t.faqs} title="Questions people ask" />
      <CTASection />
    </>
  );
}
