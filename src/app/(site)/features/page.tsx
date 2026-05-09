import type { Metadata } from "next";
import Image from "next/image";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Features — Everything Your Business Runs On | OpesFlux",
  description:
    "OpesFlux features: POS, inventory, accounting, payroll, tax compliance, CRM, and reporting. All in one platform. Works for any business in any country.",
  alternates: { canonical: "https://opesflux.devsandvisuals.com/features" },
};

function ScreenshotVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-(--color-border) shadow-[0_8px_32px_-8px_rgba(10,37,64,0.18)] bg-(--color-deep-blue)">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={750}
        className="w-full h-auto block"
        quality={90}
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
          alt="OpesFlux POS product grid"
          width={1260}
          height={760}
          className="w-full h-auto block"
          quality={90}
        />
      </div>
      <div className="relative w-52 self-end rounded-2xl overflow-hidden border border-(--color-border) shadow-[0_8px_32px_-8px_rgba(10,37,64,0.22)] -mt-16 mr-4">
        <Image
          src="/features/POS2.png"
          alt="OpesFlux POS payment screen"
          width={490}
          height={640}
          className="w-full h-auto block"
          quality={90}
        />
      </div>
    </div>
  );
}

const features = [
  {
    id: "pos",
    eyebrow: "Point of Sale",
    title: "The fastest POS your team will ever use.",
    description:
      "OpesFlux POS is built for speed. Barcode scanning, split payments, gift cards, and offline mode are standard. Whether you're on a tablet at the till or a desktop in the back office, every transaction flows through the same system — and every sale updates your stock, your accounts, and your CRM simultaneously.",
    bullets: [
      "Works offline — transactions queue and sync when reconnected",
      "Barcode scanning, manual SKU entry, and keyword search",
      "Split payments: cash, card, gift card, account credit",
      "Multi-location: every location's sales feed one dashboard",
    ],
    visual: <POSVisual />,
  },
  {
    id: "inventory",
    eyebrow: "Inventory & Stock Control",
    title: "Stock that knows where it is — in real time.",
    description:
      "Every sale, purchase, and transfer updates your stock instantly. No batch runs, no nightly syncs. OpesFlux tracks quantity, cost, and location for every SKU. Set reorder points and let the system raise purchase orders automatically when stock runs low.",
    bullets: [
      "Real-time stock levels per location and warehouse",
      "Batch and serial number tracking for perishables and high-value items",
      "Automatic reorder alerts and purchase order generation",
      "Inter-branch transfers with digital delivery notes",
    ],
    visual: <ScreenshotVisual src="/features/Inventory.png" alt="OpesFlux Inventory management" />,
  },
  {
    id: "sales",
    eyebrow: "Sales Orders & CRM",
    title: "Every customer. Every order. One view.",
    description:
      "OpesFlux CRM gives every team member full visibility into customer history, credit limits, loyalty points, and outstanding balances. Raise quotes, convert to orders, invoice on delivery, and chase aged debts — all from the same screen.",
    bullets: [
      "Customer profiles with full transaction history",
      "Credit limits, payment terms, and account statements",
      "Loyalty points with automatic redemption at POS",
      "Aged receivables and automated overdue reminders",
    ],
    visual: <ScreenshotVisual src="/features/SOD.png" alt="OpesFlux Sales Order form" />,
  },
  {
    id: "purchasing",
    eyebrow: "Purchasing & Suppliers",
    title: "From order to shelf — with a full paper trail.",
    description:
      "Raise purchase orders, send to suppliers, track expected delivery, and match goods-received notes to invoices. Every discrepancy is flagged before you post. No more chasing supplier invoices or reconciling month-end statements from scratch.",
    bullets: [
      "Raise and approve purchase orders with multi-level workflows",
      "Goods-received notes with three-way matching to PO and invoice",
      "Supplier price lists with automatic best-price lookup",
      "Aged payables and payment run management",
    ],
  },
  {
    id: "accounting",
    eyebrow: "Finance & Accounting",
    title: "Your books, done automatically.",
    description:
      "Full double-entry accounting under the hood — without making you learn bookkeeping. Every sale posts a journal entry. Every supplier invoice posts a creditor. Tax is calculated and filed per your jurisdiction's rules, directly from OpesFlux — no third-party plugins required.",
    bullets: [
      "Double-entry bookkeeping with a full audit trail",
      "Bank reconciliation via open banking feeds",
      "Tax filing — jurisdiction configurable, no hardcoded rules",
      "P&L, balance sheet, and cash flow updated in real time",
    ],
    visual: <ScreenshotVisual src="/features/Invoices.png" alt="OpesFlux Invoicing and Finance" />,
  },
  {
    id: "payroll",
    eyebrow: "HR & Payroll",
    title: "Pay your team right — every time, on time.",
    description:
      "OpesFlux Payroll handles statutory deductions, pension contributions, and payroll submissions per your local regulations. Run payroll for full-time, part-time, and variable-hours staff in minutes. Payslips are generated and sent automatically. Holiday accruals and statutory leave are calculated for you.",
    bullets: [
      "Statutory deductions calculated per your jurisdiction",
      "Pension and benefits management with auto-enrolment support",
      "Holiday tracking, sick leave, and statutory pay calculations",
      "Payslips delivered by email, on demand",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-16 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3">Platform overview</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
            Every feature your business needs.<br />Nothing you don&apos;t.
          </h1>
          <p className="text-lg text-(--color-muted) leading-[1.7]">
            OpesFlux is modular — pay only for what you need and expand as you grow. Every module shares one database, one login, and one source of truth. Works for any business in any country.
          </p>
        </div>
      </div>

      {/* Feature blocks */}
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

      <CTASection title="See it in action" subtitle="Book a 20-minute demo and we'll walk through every feature relevant to your business — in your currency, for your market." />
    </>
  );
}
