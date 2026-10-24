import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import type { Faq } from "@/config/faq";

export const metadata = pageMetadata({
  title: "Partner Programme for Accountants and Bookkeepers",
  description:
    "Refer clients to OpesFlux and earn 20% of their subscription for 12 months. Clients can give you a read-only login to their books.",
  path: "/partners",
  absoluteTitle: true,
});

const faqs: Faq[] = [
  {
    q: "How much do partners earn?",
    a: "20% of each referred client's OpesFlux subscription for that client's first 12 months.",
  },
  {
    q: "What can I see in a client's OpesFlux account?",
    a: "With a read-only login you can see the accounts, bank, invoices, customers, suppliers, stock and reports, and export data to CSV. You can't change anything.",
  },
  {
    q: "Does OpesFlux submit VAT returns or RTI?",
    a: "No. OpesFlux prepares VAT return figures and calculates payroll, but VAT returns and RTI submissions are sent by you, the client or bridging software. That keeps the filing work with you.",
  },
  {
    q: "Can I export to Xero, Sage or QuickBooks?",
    a: "There's no direct export to those packages. Reports and data export as CSV and PDF.",
  },
  {
    q: "Is there a contract?",
    a: "We agree the details, including how and when commission is paid, on a short call before you refer anyone.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "" }, { name: "Partners", path: "/partners" }]} />
      <FaqJsonLd faqs={faqs} />

      <div className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan-ink) mb-3">For accountants and bookkeepers</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-6">
            Refer clients to OpesFlux and earn 20% for 12 months
          </h1>
          <p className="text-lg text-(--color-text) leading-[1.7] mb-8">
            Many of your shop and wholesale clients run a till, a stock spreadsheet and an accounting package that don&apos;t talk to each other, and you end up reconciling them.
            OpesFlux puts the till, stock, invoicing, accounts and payroll in one system. Refer a client, get a read-only view of their books, and earn 20% of their subscription for their first year.
          </p>
          <Button size="lg" asChild>
            <a href={`mailto:${siteConfig.email}?subject=Partner%20programme`}>Talk to us about partnering</a>
          </Button>
        </div>
      </div>

      <section className="py-14 bg-(--color-cream)">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-4">What you get</h2>
            <ul className="space-y-3">
              {[
                "20% of each referred client's subscription for 12 months",
                "A read-only login to each client's books",
                "Trial balance, P&L, balance sheet and VAT return figures",
                "Customer and supplier ledgers, bank and stock",
                "CSV exports of sales, stock and customers",
                "Every change logged in an audit trail",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-(--color-text)">
                  <Check className="h-5 w-5 text-(--color-cyan-ink) shrink-0 mt-0.5" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-4">Which clients fit</h2>
            <p className="text-sm text-(--color-text) leading-relaxed mb-4">
              UK wholesalers and distributors, cash and carry businesses, off-licences, café groups and shops with more than one site, usually 2 to 50 staff, who run separate tools for the till, stock, accounts and payroll.
            </p>
            <p className="text-sm text-(--color-text) leading-relaxed">
              Not a fit: clients who need MTD filing, RTI or CIS from their own software, or construction firms needing job costing.
              See the <Link href="/industries" className="text-(--color-cyan-ink) underline underline-offset-4">industry pages</Link> for detail.
            </p>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs} title="Partner questions" />
    </>
  );
}
