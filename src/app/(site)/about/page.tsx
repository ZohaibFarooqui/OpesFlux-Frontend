import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About OpesFlux",
  description:
    "OpesFlux is a product of Devs and Visuals in Kington, England: one system for the till, stock, purchasing, accounts and payroll, launching first in the UK.",
  path: "/about",
});

const values = [
  {
    title: "One system",
    desc: "One database and one login for the till, stock, purchasing, invoicing, accounts and payroll, so there is nothing to export or re-key between them.",
  },
  {
    title: "Start small",
    desc: "Start with the till and stock on Starter, then add purchasing, payroll and accounts as the business grows.",
  },
  {
    title: "Published prices",
    desc: "£19, £49 or £99 a month, on the pricing page. No need to talk to sales to find out what it costs.",
  },
  {
    title: "Honest about the gaps",
    desc: "Every industry and comparison page says what OpesFlux doesn't do. We'd rather you know before the demo than after.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "" }, { name: "About", path: "/about" }]} />
      <div className="pt-32 pb-12 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-deep-blue) mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-6">
            Why we built OpesFlux
          </h1>
        </div>
      </div>

      <div className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-lg text-(--color-text) leading-[1.8]">
          <p>
            Most small businesses run on a till, a stock spreadsheet, an accounting package and a payroll service that don&apos;t talk to each other.
            Someone spends hours every week re-keying sales and reconciling stock, and the numbers still don&apos;t match.
          </p>
          <p>
            OpesFlux puts all of it in one system. A sale at the till updates stock and the books straight away, purchase orders feed stock when goods arrive,
            and staff hours flow into payroll.
          </p>
          <p>
            OpesFlux is a product of{" "}
            <a href="https://devsandvisuals.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Devs and Visuals</a>,
            based in Kington, England. It is launching first in the UK, for wholesalers, distributors and shops with more than one site, and is already used
            by businesses in Pakistan and Japan, where each company runs in its own currency, tax rates and payroll rules.
          </p>
          <p>
            We&apos;re early, so demos are run by the team that builds OpesFlux. See <Link href="/industries" className="underline underline-offset-4">who it&apos;s for</Link> or{" "}
            <Link href="/pricing" className="underline underline-offset-4">what it costs</Link>.
          </p>
        </div>
      </div>

      <div className="py-20 bg-(--color-cream)">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-(--color-deep-blue) tracking-tight text-center mb-12">How we work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-(--color-border) p-6">
                <h3 className="text-lg font-semibold text-(--color-deep-blue) mb-2">{v.title}</h3>
                <p className="text-sm text-(--color-text) leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection title="Talk to the people who build it" subtitle="Book a 20-minute demo and tell us how your business runs today." />
    </>
  );
}
