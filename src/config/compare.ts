import type { Faq } from "@/config/faq";

// Comparison pages. RULES:
// - Every competitor fact must come from the competitor's own website, with the
//   source URL and the date it was checked in a comment beside it.
// - "Not listed" means not found on the pages we checked, not "they can't do it".
// - Say plainly where the competitor is the better choice.
// - Re-check every competitor fact at least every 3 months (see `checked`).

export type CompareRow = {
  label: string;
  opesflux: string;
  them: string;
};

export type Comparison = {
  slug: string;
  name: string; // competitor name as shown in headings
  checked: string; // ISO date competitor facts were last verified
  sources: string[];
  seo: { title: string; description: string };
  h1: string;
  summary: string; // TL;DR, first thing on the page
  rows: CompareRow[];
  themBetter: string[];
  usBetter: string[];
  pricing: { opesflux: string; them: string };
  switching: string;
  faqs: Faq[];
};

export const COMPARISONS: Comparison[] = [
  {
    slug: "sage-50",
    name: "Sage 50",
    checked: "2026-10-24",
    sources: ["https://www.sage.com/en-gb/products/sage-50-accounts/"],
    seo: {
      title: "Sage 50 Alternative for Wholesale and Retail (UK)",
      description:
        "OpesFlux vs Sage 50 Accounts for UK wholesalers and shops: tills, stock, payroll and pricing compared honestly, including where Sage 50 is better.",
    },
    h1: "OpesFlux vs Sage 50: a Sage 50 alternative for wholesalers and shops",
    summary:
      "Sage 50 Accounts is long-established desktop accounting software with stock control and full Making Tax Digital support. OpesFlux is browser-based software that puts the till, stock, purchasing, invoicing, accounts and payroll in one system. Choose Sage 50 if accounting is the centre of your business and you need MTD filing built in. Choose OpesFlux if you run tills or several locations and want stock, sales, staff and accounts working from the same numbers.",
    rows: [
      // sage.com/en-gb/products/sage-50-accounts/ (24/10/2026): "Desktop accounting software, with cloud flexibility"
      { label: "How it runs", opesflux: "In a web browser on any device", them: "Desktop software with cloud connectivity" },
      // sage.com page (24/10/2026): no point of sale listed on the Sage 50 Accounts page
      { label: "Point of sale (tills)", opesflux: "Included, keeps selling offline", them: "Not listed on the Sage 50 Accounts page" },
      // sage.com page (24/10/2026): Standard "Track and manage stock"; Professional "Advanced stock management"
      { label: "Stock control", opesflux: "Stock per location, transfers, low-stock alerts", them: "Stock tracking; advanced stock management on Professional" },
      // sage.com page (24/10/2026): Professional "Create sales and purchase orders"
      { label: "Sales and purchase orders", opesflux: "Included on Growth and Enterprise", them: "Professional plan" },
      // sage.com page (24/10/2026): "Making Tax Digital for VAT and Income Tax Self Assessment"
      { label: "Submit VAT returns to HMRC (MTD)", opesflux: "No: prepares VAT figures; submit via accountant or bridging software", them: "Yes, included" },
      // sage.com page (24/10/2026): FAQ "Sage 50 Payroll allows you to process payroll", a separate product
      { label: "Payroll", opesflux: "Included on Growth and Enterprise (PAYE, NI, pensions; no RTI submission)", them: "Separate product: Sage 50 Payroll" },
      { label: "Rotas, attendance and leave", opesflux: "Included on Growth and Enterprise", them: "Not listed on the Sage 50 Accounts page" },
      // sage.com page (24/10/2026): Professional "Set up contacts with individual pricing and discounts"
      { label: "Individual pricing per customer", opesflux: "Not available", them: "Professional plan" },
      // sage.com page (24/10/2026): "Manage multiple companies, departments and budgets"
      { label: "Several companies", opesflux: "Enterprise plan", them: "Included" },
      // sage.com page (24/10/2026): Standard "Starts from £115.00 +VAT/mo"; Professional "Starts from £234.00 +VAT/mo"
      { label: "Price", opesflux: "£19, £49 or £99 a month", them: "From £115 + VAT a month (Standard), from £234 + VAT (Professional)" },
    ],
    themBetter: [
      "You need to submit VAT returns to HMRC directly from your accounting software.",
      "Your accountant works in Sage and wants you to stay there.",
      "You need individual price lists per customer, project costing or CIS, which Sage 50 Professional lists and OpesFlux doesn't do.",
    ],
    usBetter: [
      "You run tills: OpesFlux includes a point of sale that keeps selling offline and updates stock instantly.",
      "You have several shops or warehouses and need stock per location with transfers.",
      "You want payroll, rotas, attendance and leave in the same system as sales, without a second product.",
      "You want to work from a browser on any device rather than a desktop install.",
    ],
    pricing: {
      opesflux: "Starter £19, Growth £49, Enterprise £99 a month, published on our pricing page. Payroll is included from Growth.",
      them: "Sage 50 Accounts Standard from £115 + VAT a month and Professional from £234 + VAT a month (sage.com, checked 24/10/2026). Sage 50 Payroll is a separate product.",
    },
    switching:
      "Export your products, customers and suppliers from Sage 50 as CSV and import them into OpesFlux. Many businesses switch at the start of a VAT quarter or financial year so the books start clean. Keep Sage 50 read-only for history, and your accountant can be given a read-only OpesFlux login.",
    faqs: [
      {
        q: "Is OpesFlux a full replacement for Sage 50?",
        a: "For many shops and wholesalers, yes, on the Enterprise plan with double-entry accounts and bank feeds. The main gap is MTD: OpesFlux prepares VAT return figures but doesn't submit them to HMRC, so your accountant or bridging software files the return.",
      },
      {
        q: "Does OpesFlux include payroll like Sage 50 Payroll?",
        a: "Payroll is included on Growth and Enterprise, with PAYE, NI and pension calculations and payslips. RTI submissions to HMRC are not sent from OpesFlux.",
      },
      {
        q: "Can I import my Sage 50 data?",
        a: "Products, customers and suppliers import from CSV. Opening balances are entered when you set up the accounts.",
      },
    ],
  },
  {
    slug: "unleashed",
    name: "Unleashed",
    checked: "2026-10-24",
    sources: ["https://www.unleashedsoftware.com/pricing", "https://www.unleashedsoftware.com/features"],
    seo: {
      title: "Unleashed Alternative for UK Wholesalers",
      description:
        "OpesFlux vs Unleashed inventory software: features, accounting, POS and pricing compared honestly, including where Unleashed is the better choice.",
    },
    h1: "OpesFlux vs Unleashed: an Unleashed alternative for smaller UK wholesalers",
    summary:
      "Unleashed is specialist inventory management software with batch and serial tracking, bin locations and a B2B ordering store, and it connects to Xero or QuickBooks for accounting. OpesFlux is a broader, lower-cost system with tills, stock, purchasing, invoicing, accounts and payroll built in. Choose Unleashed if you need traceability or a B2B web store. Choose OpesFlux if you want one system for stock, sales, accounts and staff at small-business prices.",
    rows: [
      // unleashedsoftware.com/pricing (24/10/2026): Core US$399/mo, Pro US$729/mo, prices in USD excluding taxes
      { label: "Price", opesflux: "£19, £49 or £99 a month", them: "US$399 a month (Core) or US$729 a month (Pro), excluding tax" },
      // unleashedsoftware.com/pricing (24/10/2026): Core 3 users, Pro 5 users; extra users US$69 / US$89
      { label: "Users included", opesflux: "3, 15 or unlimited", them: "3 (Core) or 5 (Pro); extra users charged" },
      // unleashedsoftware.com/pricing (24/10/2026): onboarding one-off US$449 / US$799 / US$5,549
      { label: "Onboarding fee", opesflux: "None listed", them: "One-off, from US$449 to US$5,549" },
      // unleashedsoftware.com/features (24/10/2026): "connects with your accounting system"; Xero and QuickBooks integrations
      { label: "Accounting", opesflux: "Built in (double-entry on Enterprise)", them: "Connects to Xero or QuickBooks Online" },
      // unleashedsoftware.com/features (24/10/2026): "Track inventory in batches", "by serial number"
      { label: "Batch and serial tracking", opesflux: "Not available", them: "Yes" },
      // unleashedsoftware.com/features (24/10/2026): "transfer across bin locations with barcode scanning"
      { label: "Bin locations", opesflux: "Not available", them: "Yes" },
      // unleashedsoftware.com/features (24/10/2026): B2B eCommerce Platform
      { label: "B2B ordering web store", opesflux: "Not available (customer portal shows invoices and statements)", them: "Yes" },
      // unleashedsoftware.com pricing and features pages (24/10/2026): no POS listed
      { label: "Point of sale (tills)", opesflux: "Included, keeps selling offline", them: "Not listed on their pricing or features pages" },
      // unleashedsoftware.com pricing and features pages (24/10/2026): no payroll listed
      { label: "Payroll and rotas", opesflux: "Included on Growth and Enterprise", them: "Not listed on their pricing or features pages" },
      // unleashedsoftware.com/features (24/10/2026): Production & BOM Management, assemblies
      { label: "Bills of materials / production", opesflux: "Yes (multi-level BOM, MRP, work orders)", them: "Yes (assemblies and BOM)" },
    ],
    themBetter: [
      "You need batch or serial number traceability, or bin locations in a large warehouse.", // claims-ok: where Unleashed is better
      "You want a B2B web store where trade customers place their own orders.",
      "You're happy running accounts in Xero or QuickBooks and want a specialist inventory tool on top.",
    ],
    usBetter: [
      "Price: OpesFlux starts at £19 a month with no onboarding fee listed, against Unleashed's US$399 a month plus onboarding.",
      "You also run tills, a trade counter or shops: OpesFlux includes a point of sale.",
      "You want accounts, payroll, rotas and leave in the same system instead of connecting several apps.",
      "You need more users without paying per extra user: Growth includes 15, Enterprise unlimited.",
    ],
    pricing: {
      opesflux: "Starter £19, Growth £49, Enterprise £99 a month in GBP.",
      them: "Unleashed Core US$399 and Pro US$729 a month (USD, excluding tax), plus a one-off onboarding package from US$449 (unleashedsoftware.com/pricing, checked 24/10/2026).",
    },
    switching:
      "Export products, customers and suppliers from Unleashed as CSV and import them into OpesFlux. Count stock on the day you switch and enter it as opening stock per location.",
    faqs: [
      {
        q: "Does OpesFlux do batch tracking like Unleashed?",
        a: "No. If you need batch or serial traceability, Unleashed is the better fit today.",
      },
      {
        q: "Do I still need Xero with OpesFlux?",
        a: "Not necessarily. The Enterprise plan includes double-entry accounts, bank reconciliation and open banking feeds. VAT returns are submitted through your accountant or MTD bridging software.",
      },
    ],
  },
  {
    slug: "xero-and-spreadsheets",
    name: "Xero and spreadsheets",
    checked: "2026-10-24",
    sources: [
      "https://www.xero.com/uk/pricing-plans/",
      "https://www.xero.com/uk/accounting-software/manage-inventory/",
    ],
    seo: {
      title: "Xero Stock Control: When to Move Beyond Spreadsheets",
      description:
        "Does Xero do stock control? What Xero's inventory covers, when Xero plus spreadsheets stops working, and how OpesFlux compares for UK businesses.",
    },
    h1: "OpesFlux vs Xero and spreadsheets for stock control",
    summary:
      "Xero is excellent accounting software and includes basic inventory: it tracks up to 4,000 items and lets you add them to invoices and purchase orders. Many shops and wholesalers then run tills, stock per location and staff rotas in separate tools and spreadsheets. OpesFlux replaces that stack with one system. Keep Xero if your stock is simple and accounting is what you need most. Move to OpesFlux when the spreadsheets are doing the real work.",
    rows: [
      // xero.com/uk/pricing-plans (24/10/2026): Ignite £18, Grow £39, Comprehensive £55, Ultimate £70 per month excl. VAT (after intro offer)
      { label: "Price", opesflux: "£19, £49 or £99 a month", them: "Xero £18 to £70 a month excl. VAT, plus your till and other tools" },
      // xero.com/uk/accounting-software/manage-inventory (24/10/2026): "Manage up to 4000 finished items"
      { label: "Inventory", opesflux: "Stock per location, transfers, low-stock alerts", them: "Tracks up to 4,000 items in Xero" },
      // xero.com/uk/accounting-software/manage-inventory (24/10/2026): multiple locations not mentioned
      { label: "Stock per shop or warehouse", opesflux: "Yes", them: "Not mentioned on Xero's inventory page" },
      // xero.com pages (24/10/2026): no point of sale listed
      { label: "Point of sale (tills)", opesflux: "Included, keeps selling offline", them: "Not part of Xero; a separate till system is needed" },
      // xero.com/uk/pricing-plans (24/10/2026): "Submit VAT returns to HMRC"
      { label: "Submit VAT returns to HMRC (MTD)", opesflux: "No: prepares VAT figures; submit via accountant or bridging software", them: "Yes" },
      // xero.com/uk/pricing-plans (24/10/2026): Grow 1 person, Comprehensive 5, Ultimate 10; £1.50 per extra person
      { label: "Payroll", opesflux: "Included on Growth and Enterprise", them: "1 to 10 people included depending on plan, then £1.50 per person" },
      { label: "Rotas, attendance and leave", opesflux: "Included on Growth and Enterprise", them: "Usually a separate app or spreadsheet" },
      // xero.com/uk/pricing-plans (24/10/2026): multi-currency on Comprehensive and Ultimate
      { label: "Multi-currency", opesflux: "Enterprise plan", them: "Comprehensive and Ultimate plans" },
    ],
    themBetter: [
      "You want to file VAT returns to HMRC directly from your accounting software.",
      "Your stock is simple, in one place, and well under Xero's item limit.",
      "Your accountant and bookkeeper already work in Xero and its app marketplace.",
    ],
    usBetter: [
      "You run tills and want every sale to take stock off immediately.",
      "You hold stock in more than one shop or warehouse and move it between them.",
      "You're re-keying sales, stock or hours between Xero, a till and spreadsheets every week.",
      "You want rotas, attendance, leave and payroll next to your sales.",
    ],
    pricing: {
      opesflux: "Starter £19, Growth £49, Enterprise £99 a month. The till, stock and payroll are included from Growth.",
      them: "Xero UK plans are £18, £39, £55 or £70 a month excl. VAT after the introductory offer (xero.com/uk/pricing-plans, checked 24/10/2026). A till system and any rota or stock apps cost extra.",
    },
    switching:
      "You don't have to switch everything at once. Many businesses start with OpesFlux for the till and stock, then move the accounts across at a VAT quarter or year end. Products, customers and suppliers import from CSV.",
    faqs: [
      {
        q: "Does Xero do stock control?",
        a: "Yes, at a basic level. Xero's own site says it can manage up to 4,000 items and add them to invoices and purchase orders. It doesn't mention stock per location, and it has no till.",
      },
      {
        q: "Can I use OpesFlux and Xero together?",
        a: "There is no direct Xero export from OpesFlux. Most businesses moving off spreadsheets use OpesFlux's built-in accounts on the Enterprise plan, with their accountant given a read-only login.",
      },
      {
        q: "Will I lose MTD filing if I leave Xero?",
        a: "OpesFlux prepares your VAT return figures but doesn't submit them, so your accountant or MTD bridging software files the return.",
      },
    ],
  },
  {
    slug: "brightpearl",
    name: "Brightpearl",
    checked: "2026-10-24",
    sources: ["https://www.brightpearl.com/pricing", "https://www.brightpearl.com/"],
    seo: {
      title: "Brightpearl Alternative for Smaller UK Businesses",
      description:
        "OpesFlux vs Brightpearl: pricing, set-up time, tills, accounts and payroll compared honestly, including where Brightpearl is the better choice.",
    },
    h1: "OpesFlux vs Brightpearl: a Brightpearl alternative for smaller businesses",
    summary:
      "Brightpearl, part of Sage, is a retail operating system for multichannel retailers and wholesalers, with quote-based pricing and an implementation that its site says takes 90-120 days on average. OpesFlux is aimed at smaller businesses: published prices from £19 a month, with tills, stock, purchasing, accounts and payroll in one system. Choose Brightpearl for high-volume multichannel ecommerce. Choose OpesFlux if you want a simpler system you can start on quickly at a known price.",
    rows: [
      // brightpearl.com/pricing (24/10/2026): "Pricing tailored to your unique needs", quote-only
      { label: "Price", opesflux: "Published: £19, £49 or £99 a month", them: "Quote only" },
      // brightpearl.com/pricing (24/10/2026): "go live in 90-120 days, on average"
      { label: "Typical set-up time", opesflux: "Set up with our team after a demo", them: "90-120 days on average, per their pricing page" },
      // brightpearl.com/pricing (24/10/2026): "Unlimited users are always part of the deal"
      { label: "Users", opesflux: "3, 15 or unlimited", them: "Unlimited" },
      // brightpearl.com (24/10/2026): "multi-location inventory management", "Warehouse Management"
      { label: "Inventory and warehouses", opesflux: "Stock per location and transfers", them: "Multi-location inventory and warehouse management" },
      // brightpearl.com (24/10/2026): "Retail Accounting"; connects to Sage, Xero and QuickBooks
      { label: "Accounting", opesflux: "Built in (double-entry on Enterprise)", them: "Retail accounting module; connects to Sage, Xero, QuickBooks" },
      // brightpearl.com and /pricing (24/10/2026): POS not mentioned
      { label: "Point of sale (tills)", opesflux: "Included, keeps selling offline", them: "Not mentioned on their home or pricing page" },
      // brightpearl.com and /pricing (24/10/2026): payroll not mentioned
      { label: "Payroll and rotas", opesflux: "Included on Growth and Enterprise", them: "Not mentioned on their home or pricing page" },
      // brightpearl.com (24/10/2026): "Part of Sage Group Plc"
      { label: "Company", opesflux: "A product of Devs and Visuals, England", them: "Part of Sage Group plc" },
    ],
    themBetter: [
      "You sell at high volume across many online channels and marketplaces.",
      "You need warehouse management and inventory forecasting from an established vendor.",
      "You have the budget and time for a scoped implementation project.",
    ],
    usBetter: [
      "You want to know the price before you talk to sales: ours is published.",
      "You run shops or a trade counter and need tills.",
      "You want payroll, rotas and leave in the same system.",
      "You're a smaller business that doesn't want a months-long implementation.",
    ],
    pricing: {
      opesflux: "Starter £19, Growth £49, Enterprise £99 a month in GBP.",
      them: "Brightpearl doesn't publish prices; pricing is tailored per customer (brightpearl.com/pricing, checked 24/10/2026).",
    },
    switching:
      "Export products, customers and suppliers as CSV and import them into OpesFlux. If you sell on Shopify or WooCommerce, connect your shop so orders come in and stock is pushed back.",
    faqs: [
      {
        q: "Is OpesFlux suitable for high-volume ecommerce?",
        a: "OpesFlux connects to Shopify and WooCommerce, but it's built for smaller businesses with shops, trade counters and warehouses. Very high-volume multichannel sellers may be better served by Brightpearl.",
      },
      {
        q: "How quickly can I start with OpesFlux?",
        a: "After a demo you get a 7-day free trial, and our team helps you set up. How long it takes depends on how much data you bring across.",
      },
    ],
  },
];

export const COMPARISONS_BY_SLUG: Record<string, Comparison> = Object.fromEntries(
  COMPARISONS.map((c) => [c.slug, c])
);
