import { siteConfig } from "@/config/site";
import { PRICING_TIERS } from "@/config/pricing";
import { INDUSTRIES_LIST } from "@/config/industries";
import { COMPARISONS } from "@/config/compare";
import { PRICING_FAQS } from "@/config/faq";

// /llms.txt: plain facts for AI assistants and answer engines, built from the
// same config the pages use so prices and features never drift.
export const dynamic = "force-static";

export function GET() {
  const u = siteConfig.url;
  const body = `# OpesFlux

> OpesFlux is cloud software that runs point of sale (EPOS), stock control, purchasing, invoicing, double-entry accounts and payroll in one system. It is built for UK wholesalers, distributors, cash and carry businesses, off-licences, café groups and shops with more than one site. It runs in a web browser. Prices start at £19 a month. OpesFlux is a product of Devs and Visuals, based in Kington, England.

## Key facts

- Product: OpesFlux (cloud POS, stock control, purchasing, invoicing, accounts, HR and payroll)
- Made by: Devs and Visuals, Kington, England
- Website: ${u}
- App sign-in: ${siteConfig.appUrl}
- Contact: ${siteConfig.email}
- Main market: United Kingdom. Each company sets its own currency, tax rates, tax name (VAT, GST or sales tax), time zone and date format, so it also works outside the UK.
- Trial: free 7-day trial after a demo, no credit card required.

## Pricing (GBP per month, 20% off when paid annually)

${PRICING_TIERS.map((t) => `- ${t.name}: £${t.price.monthly}/month. ${t.users}, ${t.locations.toLowerCase()}. ${t.features.filter((f) => !f.startsWith("Everything")).join("; ")}.`).join("\n")}

Full pricing: ${u}/pricing

## What OpesFlux does

- Point of sale in the browser: barcode scanning, receipts, discounts, cash, card or bank transfer; keeps selling offline and syncs later
- Stock control: products with variants and barcodes, stock per location, transfers, low-stock alerts, movement history that cannot be edited, stock never below zero
- Sales: quotes, sales orders, invoices, recurring invoices, returns and credit notes, delivery notes, shipping labels, Stripe card payments
- Credit control: customer credit limits, payment terms, aged receivables, daily overdue reminder emails, customer portal with invoices and statements
- Purchasing: purchase requests, requests for quotation, purchase orders with approval, goods received notes, supplier payments
- Accounts: chart of accounts, automatic journals, bank reconciliation, open banking bank feeds, fixed assets, VAT return figures and VAT reports, multi-currency, multi-company reporting
- Staff: shifts and rotas, attendance (employee app with face check and optional geofence), leave, recruitment, employee documents
- Payroll: UK PAYE, National Insurance and auto-enrolment pensions with payslips; payroll rules also for Japan, Pakistan and the United States
- Manufacturing: multi-level bills of materials, master production schedule, MRP, work orders, actual vs standard cost
- Integrations: Shopify and WooCommerce (orders in, stock out), Stripe, open banking; CSV import of products, customers and suppliers; CSV and PDF exports
- Roles and permissions, including a read-only login for an accountant; audit log of every change

## What OpesFlux does not do

- It does not submit VAT returns to HMRC (Making Tax Digital). It prepares the VAT figures; the accountant or MTD bridging software submits them.
- It does not send RTI payroll submissions to HMRC, and has no CIS or IR35 features.
- No loyalty schemes, gift cards, split payments, table plans or kitchen display screens.
- No batch, lot, serial number, best-before or bin-location tracking.
- No alcohol duty or bonded warehouse features.
- No published customer case studies yet: OpesFlux is new.

## Who it is for

${INDUSTRIES_LIST.map((i) => `- [${i.name}](${u}/industries/${i.slug}): ${i.seo.description}`).join("\n")}

## Comparisons (competitor facts sourced from their own websites, dated)

${COMPARISONS.map((c) => `- [OpesFlux vs ${c.name}](${u}/compare/${c.slug}): ${c.summary}`).join("\n")}

## Accountant and bookkeeper partners

Partners earn 20% of each referred client's subscription for the client's first 12 months, and clients can give their accountant a read-only login. ${u}/partners

## Frequently asked questions

${PRICING_FAQS.map((f) => `- ${f.q} ${f.a}`).join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
