import Image from "next/image";
import Link from "next/link";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { CTASection } from "@/components/sections/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Features: POS, Stock, Purchasing, Accounts, Payroll",
  description:
    "Every OpesFlux feature: offline POS, stock per location, purchase orders, invoicing, credit control, double-entry accounts, bank feeds and UK payroll.",
  path: "/features",
  absoluteTitle: true,
});

function ScreenshotVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-(--color-border) shadow-[0_8px_32px_-8px_rgba(10,37,64,0.18)] bg-(--color-deep-blue)">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={750}
        className="w-full h-auto"
        sizes="(max-width: 1024px) 100vw, 600px"
      />
    </div>
  );
}

function POSVisual() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="relative w-full rounded-2xl overflow-hidden border border-(--color-border) shadow-[0_8px_32px_-8px_rgba(10,37,64,0.18)]">
        <Image
          src="/features/POS1.png"
          alt="OpesFlux point of sale screen with a product grid and basket"
          width={1260}
          height={760}
          className="w-full h-auto"
          sizes="(max-width: 1024px) 100vw, 600px"
          priority
        />
      </div>
      <div className="relative w-52 self-end rounded-2xl overflow-hidden border border-(--color-border) shadow-[0_8px_32px_-8px_rgba(10,37,64,0.22)] -mt-16 mr-4">
        <Image
          src="/features/POS2.png"
          alt="OpesFlux point of sale payment screen"
          width={490}
          height={640}
          className="w-full h-auto"
          sizes="208px"
        />
      </div>
    </div>
  );
}

const features = [
  {
    id: "pos",
    eyebrow: "Point of sale",
    title: "A till that keeps selling when the internet doesn't.",
    description:
      "The OpesFlux point of sale runs in a web browser on a PC, laptop or tablet. Scan barcodes, apply discounts, take cash, card or bank transfer, and print a receipt. Every sale takes stock off and posts to the accounts straight away.",
    bullets: [
      "Works offline: sales are stored and sync when the connection returns",
      "Barcode scanning, product search and a product grid",
      "Cash, card and bank transfer; attach a customer to a sale",
      "Per-product VAT rates, including zero-rated goods",
    ],
    visual: <POSVisual />,
  },
  {
    id: "inventory",
    eyebrow: "Stock control",
    title: "Stock you can trust, in every location.",
    description:
      "Every sale, delivery, return, transfer and adjustment is recorded as a stock movement that can't be edited or deleted, and stock can never go below zero. Products can have variants, such as sizes or pack sizes, each with its own barcode.",
    bullets: [
      "Stock per shop, branch or warehouse",
      "Transfers between locations",
      "Low-stock and reorder alerts",
      "Stock adjustments with a full movement history",
    ],
    visual: <ScreenshotVisual src="/features/Inventory.png" alt="OpesFlux stock levels by product and location" />,
  },
  {
    id: "sales",
    eyebrow: "Sales and customers",
    title: "From quote to paid invoice without re-typing.",
    description:
      "Turn a quote into a sales order and the order into an invoice. Delivery notes and shipping labels come from the same order. Customers have credit limits and payment terms, and OpesFlux emails overdue reminders every morning.",
    bullets: [
      "Quotes, sales orders, invoices and recurring invoices",
      "Returns and credit notes",
      "Credit limits, payment terms and aged receivables",
      "Card payments through Stripe, and a customer portal for invoices and statements",
    ],
    visual: <ScreenshotVisual src="/features/SOD.png" alt="OpesFlux sales order form" />,
  },
  {
    id: "purchasing",
    eyebrow: "Purchasing and suppliers",
    title: "Buying with a paper trail.",
    description:
      "Raise a purchase request, ask suppliers for quotes, turn the best one into a purchase order, send it for approval and record what actually arrived on a goods received note. Received goods go straight into stock.",
    bullets: [
      "Purchase requests and requests for quotation",
      "Purchase orders with approval",
      "Goods received notes",
      "Supplier payments and aged payables",
    ],
  },
  {
    id: "accounting",
    eyebrow: "Accounts and VAT",
    title: "The books keep up with the business.",
    description:
      "Sales, purchases and payments post their own journal entries, so the double-entry accounts stay current. Reconcile the bank from open banking feeds, run your P&L and balance sheet, and get your VAT return figures. Submitting the VAT return is done by your accountant or MTD bridging software.",
    bullets: [
      "Chart of accounts and journals",
      "Bank reconciliation with open banking feeds",
      "VAT return figures and VAT reports",
      "Fixed assets, multi-currency and multi-company reporting",
    ],
    visual: <ScreenshotVisual src="/features/Invoices.png" alt="OpesFlux invoices list" />,
  },
  {
    id: "payroll",
    eyebrow: "Staff and payroll",
    title: "Rotas, hours and pay in one place.",
    description:
      "Build shifts and rotas, let staff clock in on the employee app (with a face check and optional geofence), handle leave requests, and run payroll from those hours. UK payroll calculates PAYE, National Insurance and auto-enrolment pensions; RTI submissions are sent by you or your payroll bureau.",
    bullets: [
      "Shifts, rotas and attendance",
      "Leave requests and holiday accrual",
      "Payroll runs and payslips: UK, Japan, Pakistan and US rules",
      "Employee records, documents and recruitment",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "" }, { name: "Features", path: "/features" }]} />
      <div className="pt-32 pb-16 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan-ink) mb-3">Features</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
            Everything OpesFlux does, in one system
          </h1>
          <p className="text-lg text-(--color-text) leading-[1.7]">
            Point of sale, stock, purchasing, invoicing, accounts and payroll share one database and one login.
            Start on Starter and add purchasing, payroll and accounts as you grow. Also included: Shopify and WooCommerce sync, manufacturing (bills of materials, MRP, work orders), roles and permissions, and an audit log.
          </p>
          <p className="text-sm text-(--color-muted) mt-4">
            See it for your trade: <Link href="/industries/wholesale" className="underline underline-offset-4">wholesale</Link>,{" "}
            <Link href="/industries/cash-and-carry" className="underline underline-offset-4">cash and carry</Link>,{" "}
            <Link href="/industries/off-licences" className="underline underline-offset-4">off-licences</Link>,{" "}
            <Link href="/industries/retail" className="underline underline-offset-4">multi-site shops</Link>.
          </p>
        </div>
      </div>

      <div className="divide-y divide-(--color-border)">
        {features.map((f, i) => (
          <div key={f.id} className={i % 2 === 1 ? "bg-(--color-cream)" : "bg-white"}>
            <FeatureBlock
              id={f.id}
              eyebrow={f.eyebrow}
              title={f.title}
              description={f.description}
              bullets={f.bullets}
              visual={f.visual}
              reverse={i % 2 === 1}
            />
          </div>
        ))}
      </div>

      <CTASection title="See it in action" subtitle="Book a 20-minute demo and we'll walk through the features that matter to your business." />
    </>
  );
}
