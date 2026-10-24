import type { Faq } from "@/config/faq";

// Industry landing pages. Every feature named here is verified in the
// OpesFlux application code or the verified product knowledge file.
// Do not add features that are planned but not built.

export type IndustryProblem = { problem: string; answer: string };

export type Industry = {
  slug: string;
  name: string; // short label for menus and cards
  navDesc: string;
  icon: "Truck" | "Apple" | "Wine" | "Warehouse" | "Sparkles" | "Store" | "Coffee" | "ShoppingBag" | "Factory";
  group: "wholesale" | "retail" | "production";
  seo: { title: string; description: string };
  hero: { eyebrow: string; h1: string; intro: string };
  problemsTitle: string;
  problems: IndustryProblem[];
  features: string[];
  notFor: string;
  plan: string; // which plan usually fits, and why
  faqs: Faq[];
  related: { label: string; href: string }[];
  updated: string; // ISO date of the last real content change (used for the sitemap)
};

export const INDUSTRIES_LIST: Industry[] = [
  {
    slug: "wholesale",
    name: "Wholesale & distribution",
    navDesc: "Stock, purchase orders, invoicing and credit control",
    icon: "Truck",
    group: "wholesale",
    seo: {
      title: "Stock Control Software for UK Wholesalers",
      description:
        "Stock control, purchase orders, sales orders, invoicing and credit control in one system for UK wholesalers and distributors. From £49 a month.",
    },
    hero: {
      eyebrow: "For wholesalers and distributors",
      h1: "Stock control and order software for UK wholesalers",
      intro:
        "OpesFlux is cloud software for wholesalers and distributors that keeps stock, purchase orders, sales orders, invoices and customer accounts in one system. Every delivery in and every order out updates the same stock figure, so what the screen says is what is on the shelf.",
    },
    problemsTitle: "The problems wholesalers bring to us",
    problems: [
      {
        problem: "Stock on the system never matches the warehouse",
        answer:
          "Goods received against a purchase order go straight into stock, and every sale, return and adjustment is recorded as a stock movement that can't be edited or deleted. Stock can never go below zero, so a count that doesn't match tells you something real.",
      },
      {
        problem: "Orders and invoices are typed twice",
        answer:
          "Turn a quote into a sales order and the sales order into an invoice without re-keying. Delivery notes come from the same order, and the invoice posts to the accounts on its own.",
      },
      {
        problem: "Customers pay late and nobody chases",
        answer:
          "Set a credit limit and payment terms per customer, see who owes what in aged receivables, and let OpesFlux send overdue reminder emails every morning. Customers can log in to a portal to see their invoices and statement.",
      },
      {
        problem: "Buying is done on WhatsApp and in spreadsheets",
        answer:
          "Raise purchase orders, send them for approval, record what actually arrived on a goods received note, and pay suppliers from the same record. Low-stock alerts tell you what to reorder.",
      },
    ],
    features: [
      "Products with variants, barcodes and per-product VAT rates",
      "Stock per warehouse or branch, with transfers between them",
      "Purchase requests, purchase orders with approval, goods received notes",
      "Quotes, sales orders, invoices, returns and credit notes",
      "Delivery notes and shipping labels",
      "Customer credit limits, payment terms and aged receivables",
      "Daily overdue invoice reminder emails",
      "Customer portal for invoices and statements",
      "Card payments through Stripe",
      "VAT return figures and double-entry accounts (Enterprise)",
      "CSV import of products, customers and suppliers",
    ],
    notFor:
      "OpesFlux doesn't track batch or serial numbers, bin locations or best-before dates, and it has no van-sales app. If you need any of those today, it isn't the right fit yet.",
    plan: "Most wholesalers start on Growth (£49/month): it adds purchase orders, suppliers, several locations and returns. Choose Enterprise (£99/month) if you want the full double-entry accounts and bank feeds in the same system.",
    faqs: [
      {
        q: "Can OpesFlux replace Sage or Xero for a wholesaler?",
        a: "On the Enterprise plan OpesFlux includes double-entry accounts, bank reconciliation, open banking feeds and VAT return figures, so many wholesalers can run stock and accounts in one place. VAT returns are submitted through your accountant or MTD bridging software.",
      },
      {
        q: "Can I run more than one warehouse?",
        a: "Yes. Stock is held per location and you can transfer it between locations. Growth covers up to 5 locations; Enterprise is unlimited.",
      },
      {
        q: "Do my customers get a login?",
        a: "Yes. The customer portal lets trade customers see their invoices and account statement.",
      },
      {
        q: "How do I move my product list across?",
        a: "Export it from your current system as a spreadsheet and import it as CSV. Customers and suppliers import the same way.",
      },
    ],
    related: [
      { label: "Food wholesale", href: "/industries/food-wholesale" },
      { label: "Drinks wholesale", href: "/industries/drinks-wholesale" },
      { label: "Cash and carry", href: "/industries/cash-and-carry" },
      { label: "OpesFlux vs Unleashed", href: "/compare/unleashed" },
    ],
    updated: "2026-10-24",
  },
  {
    slug: "food-wholesale",
    name: "Food wholesale",
    navDesc: "Fast-moving stock, standing orders and trade accounts",
    icon: "Apple",
    group: "wholesale",
    seo: {
      title: "Food Wholesale Software for UK Distributors",
      description:
        "Software for UK food wholesalers and distributors: stock control, purchase orders, sales orders, delivery notes, invoicing and credit control.",
    },
    hero: {
      eyebrow: "For food wholesalers and distributors",
      h1: "Software for food wholesalers that keeps stock and invoices straight",
      intro:
        "Food distribution runs on thin margins and fast-moving stock. OpesFlux puts purchasing, stock, orders, delivery notes and invoices in one system, so you know what you have, what is on order and who owes you, without three spreadsheets.",
    },
    problemsTitle: "Day-to-day problems in food distribution",
    problems: [
      {
        problem: "Running out of fast sellers, over-ordering slow ones",
        answer:
          "Live stock per location and low-stock alerts show what needs reordering before the shelf is empty. Purchase orders record what you ordered and goods received notes record what turned up.",
      },
      {
        problem: "The same customers order the same things every week",
        answer:
          "Set up recurring invoices for regular customers, or copy a quote into a new sales order rather than starting from blank.",
      },
      {
        problem: "Mixed VAT rates on one invoice",
        answer:
          "Each product carries its own VAT rate, so zero-rated food and standard-rated items sit on one invoice with the VAT worked out correctly per line. Your VAT return figures build up from those invoices.",
      },
      {
        problem: "Restaurants and shops paying 60 days late",
        answer:
          "Credit limits, payment terms, aged receivables and automatic overdue reminder emails help you chase without it eating your morning.",
      },
    ],
    features: [
      "Per-product VAT rates, including zero-rated food",
      "Stock per depot, with transfers between depots",
      "Purchase orders and goods received notes",
      "Sales orders, delivery notes and invoices",
      "Recurring invoices for standing orders",
      "Credit limits, payment terms and overdue reminders",
      "Returns and credit notes for damaged or short deliveries",
      "Customer portal with invoices and statements",
    ],
    notFor:
      "OpesFlux doesn't track batches, lot numbers or best-before dates. If you need full lot traceability for food safety audits, you'll need a system that does that.",
    plan: "Growth (£49/month) covers purchasing, several depots and returns. Enterprise (£99/month) adds the full accounts and bank feeds.",
    faqs: [
      {
        q: "Does OpesFlux handle zero-rated and standard-rated food on the same invoice?",
        a: "Yes. VAT is set per product, so each invoice line uses the right rate and the totals and VAT return figures follow from that.",
      },
      {
        q: "Can I see stock across more than one depot?",
        a: "Yes. Stock is held per location, with transfers between them and one view across all of them.",
      },
      {
        q: "Does it track best-before dates?",
        a: "No. OpesFlux doesn't track batches, lots or expiry dates today.",
      },
    ],
    related: [
      { label: "Wholesale & distribution", href: "/industries/wholesale" },
      { label: "Cash and carry", href: "/industries/cash-and-carry" },
      { label: "Drinks wholesale", href: "/industries/drinks-wholesale" },
      { label: "OpesFlux vs Xero and spreadsheets", href: "/compare/xero-and-spreadsheets" },
    ],
    updated: "2026-10-24",
  },
  {
    slug: "drinks-wholesale",
    name: "Drinks wholesale",
    navDesc: "Cases, singles, purchase orders and trade customers",
    icon: "Wine",
    group: "wholesale",
    seo: {
      title: "Drinks Wholesale Software for UK Distributors",
      description:
        "Stock control, purchase orders, sales orders and invoicing for UK drinks wholesalers and distributors supplying pubs, bars, shops and off-licences.",
    },
    hero: {
      eyebrow: "For drinks wholesalers and distributors",
      h1: "Stock and order software for drinks wholesalers",
      intro:
        "Whether you supply pubs, restaurants, off-licences or shops, OpesFlux keeps your stock, supplier orders, customer orders and invoices in one place, and shows you which accounts are overdue.",
    },
    problemsTitle: "What slows drinks distributors down",
    problems: [
      {
        problem: "Selling by the case and by the bottle",
        answer:
          "Product variants let you keep pack sizes of the same line under one product, each with its own barcode and price.",
      },
      {
        problem: "Stock spread across a warehouse and vans or branches",
        answer:
          "Hold stock per location and move it with stock transfers, so each location's figure stays accurate.",
      },
      {
        problem: "Trade accounts that drift past terms",
        answer:
          "Credit limits and payment terms per customer, aged receivables, and daily overdue reminder emails keep cash coming in.",
      },
      {
        problem: "Online and trade orders in separate systems",
        answer:
          "If you also sell through Shopify or WooCommerce, online orders come into OpesFlux and stock levels are pushed back, so you sell from one stock figure.",
      },
    ],
    features: [
      "Products with variants for pack sizes",
      "Barcode scanning",
      "Stock per location and transfers",
      "Purchase orders with approval and goods received",
      "Sales orders, delivery notes and invoices",
      "Credit control: limits, terms, aged receivables, reminders",
      "Shopify and WooCommerce order and stock sync",
      "Point of sale for a trade counter",
    ],
    notFor:
      "OpesFlux doesn't calculate alcohol duty or handle bonded warehouse stock, and it doesn't track batch numbers. Duty-suspended operations need a specialist system.",
    plan: "Growth (£49/month) is the usual fit. Enterprise (£99/month) if you want accounts and bank feeds in the same system.",
    faqs: [
      {
        q: "Does OpesFlux calculate alcohol duty?",
        a: "No. It handles VAT per product but not alcohol duty or bonded stock.",
      },
      {
        q: "Can I sell cases and singles of the same product?",
        a: "Yes. Use product variants for each pack size, each with its own barcode and price.",
      },
      {
        q: "Can I also run a trade counter?",
        a: "Yes. The point of sale runs in the browser, scans barcodes and keeps selling if the internet drops.",
      },
    ],
    related: [
      { label: "Off-licences", href: "/industries/off-licences" },
      { label: "Cash and carry", href: "/industries/cash-and-carry" },
      { label: "Wholesale & distribution", href: "/industries/wholesale" },
      { label: "OpesFlux vs Brightpearl", href: "/compare/brightpearl" },
    ],
    updated: "2026-10-24",
  },
  {
    slug: "cash-and-carry",
    name: "Cash and carry",
    navDesc: "Trade counter tills, stock and customer accounts",
    icon: "Warehouse",
    group: "wholesale",
    seo: {
      title: "Cash and Carry EPOS and Stock Software (UK)",
      description:
        "Cash and carry EPOS with stock control, purchase orders, trade customer accounts and invoicing in one system. Tills keep selling offline. From £19 a month.",
    },
    hero: {
      eyebrow: "For cash and carry businesses",
      h1: "Cash and carry EPOS with stock control built in",
      intro:
        "A cash and carry is a shop and a wholesaler at the same time. OpesFlux gives you tills at the counter and a full back office behind them: stock, supplier orders, trade customer accounts and invoices, all working from the same numbers.",
    },
    problemsTitle: "What cash and carry owners tell us",
    problems: [
      {
        problem: "The till and the stock system disagree",
        answer:
          "Every sale at the till takes stock off straight away, so there's nothing to export or reconcile at night.",
      },
      {
        problem: "Queues build when the internet goes down",
        answer:
          "The point of sale keeps taking sales offline and syncs them when the connection returns.",
      },
      {
        problem: "Trade customers want an invoice, not a receipt",
        answer:
          "Attach a customer to a sale, or raise a full VAT invoice from a sales order. Customer accounts carry credit limits and payment terms.",
      },
      {
        problem: "Reordering is guesswork",
        answer:
          "Low-stock alerts flag lines to reorder, and purchase orders with goods received notes show exactly what came in.",
      },
    ],
    features: [
      "Browser-based tills with barcode scanning and receipts",
      "Offline selling with automatic sync",
      "Cash, card and bank transfer payments",
      "Discounts at the till",
      "Stock per site with low-stock alerts",
      "Purchase orders and goods received notes",
      "Trade customer accounts, invoices and credit control",
      "Sales and stock reports per site",
    ],
    notFor:
      "OpesFlux doesn't run loyalty schemes or gift cards at the till, and it doesn't track batches. If those are essential, it isn't the right fit yet.",
    plan: "One site can start on Starter (£19/month). Most cash and carries choose Growth (£49/month) for purchase orders, suppliers and returns.",
    faqs: [
      {
        q: "Will the tills work if the broadband fails?",
        a: "Yes. Sales are stored on the device and sync automatically when the connection is back.",
      },
      {
        q: "Do I need special till hardware?",
        a: "OpesFlux runs in a web browser, so it works on a standard PC, laptop or tablet with a barcode scanner.",
      },
      {
        q: "Can trade customers buy on account?",
        a: "You can attach a customer to a sale and invoice them, with credit limits and payment terms on their account.",
      },
    ],
    related: [
      { label: "Food wholesale", href: "/industries/food-wholesale" },
      { label: "Off-licences", href: "/industries/off-licences" },
      { label: "Wholesale & distribution", href: "/industries/wholesale" },
      { label: "OpesFlux vs Sage 50", href: "/compare/sage-50" },
    ],
    updated: "2026-10-24",
  },
  {
    slug: "cosmetics-household-wholesale",
    name: "Cosmetics & household",
    navDesc: "Variants, barcodes, online channels and trade orders",
    icon: "Sparkles",
    group: "wholesale",
    seo: {
      title: "Cosmetics and Household Goods Wholesale Software",
      description:
        "Inventory and order software for UK cosmetics and household wholesalers: variants, barcodes, Shopify and WooCommerce sync, purchase orders, invoicing.",
    },
    hero: {
      eyebrow: "For cosmetics and household goods wholesalers",
      h1: "Inventory software for cosmetics and household wholesalers",
      intro:
        "Shades, sizes and scents turn one product into dozens of lines. OpesFlux handles variants and barcodes, keeps trade and online stock in step, and runs your purchase orders and invoices from the same system.",
    },
    problemsTitle: "Common problems in cosmetics and household wholesale",
    problems: [
      {
        problem: "Hundreds of variants to keep track of",
        answer:
          "Product variants keep every shade, size or scent under one product, each with its own barcode and stock level.",
      },
      {
        problem: "Selling online and to trade from the same stock",
        answer:
          "Shopify and WooCommerce orders come into OpesFlux and stock levels are pushed back to your shop, so you don't oversell.",
      },
      {
        problem: "Returns and damaged goods",
        answer:
          "Record returns against the original sale and issue credit notes. The stock and the accounts both update.",
      },
      {
        problem: "Importing from overseas suppliers",
        answer:
          "Purchase orders, goods received notes and supplier payments in one record, with multi-currency transactions on the Enterprise plan.",
      },
    ],
    features: [
      "Product variants with their own barcodes and stock",
      "Shopify and WooCommerce order and stock sync",
      "Purchase orders and goods received notes",
      "Multi-currency transactions (Enterprise)",
      "Sales orders, invoices, returns and credit notes",
      "Stock per location and transfers",
      "Credit control for trade customers",
      "CSV import for large product catalogues",
    ],
    notFor:
      "OpesFlux doesn't track batch numbers or expiry dates, which some cosmetics businesses need for product recalls.",
    plan: "Growth (£49/month) for purchasing and several locations. Enterprise (£99/month) if you import in other currencies.",
    faqs: [
      {
        q: "Can I import a large catalogue with variants?",
        a: "Yes. Products import from CSV, so you can bring your catalogue across from a spreadsheet.",
      },
      {
        q: "Does it work with Shopify?",
        a: "Yes. Orders come in from Shopify and stock levels are pushed back. WooCommerce works the same way.",
      },
      {
        q: "Can I buy from suppliers in euros or dollars?",
        a: "Yes, on the Enterprise plan, which includes multi-currency transactions.",
      },
    ],
    related: [
      { label: "Wholesale & distribution", href: "/industries/wholesale" },
      { label: "Multi-site retail", href: "/industries/retail" },
      { label: "OpesFlux vs Brightpearl", href: "/compare/brightpearl" },
      { label: "OpesFlux vs Unleashed", href: "/compare/unleashed" },
    ],
    updated: "2026-10-24",
  },
  {
    slug: "off-licences",
    name: "Off-licences",
    navDesc: "EPOS, stock per shop and supplier orders",
    icon: "ShoppingBag",
    group: "retail",
    seo: {
      title: "EPOS System for Off-Licences with Stock Control",
      description:
        "EPOS for UK off-licences and convenience stores: offline barcode tills, stock per shop, low-stock alerts, supplier orders and rotas. From £19 a month.",
    },
    hero: {
      eyebrow: "For off-licences and convenience stores",
      h1: "EPOS for off-licences, with stock control that matches the till",
      intro:
        "OpesFlux gives an off-licence a barcode till that keeps selling offline, live stock for every shop, supplier orders and staff rotas, in one system you open in a web browser.",
    },
    problemsTitle: "Problems off-licence owners know too well",
    problems: [
      {
        problem: "The stock count never matches what was sold",
        answer:
          "Each sale takes stock off immediately, and every adjustment is kept in a movement history that can't be changed, so you can see where the difference came from.",
      },
      {
        problem: "Running out of best sellers on a Friday",
        answer:
          "Low-stock alerts show what to reorder, and purchase orders record what you've ordered from each supplier.",
      },
      {
        problem: "Two or three shops, no single view",
        answer:
          "Stock is held per shop, you can move it between shops, and sales reports show each shop side by side.",
      },
      {
        problem: "Staff hours on paper",
        answer:
          "Build rotas, record attendance and leave, and run payroll with PAYE, National Insurance and pensions in the same system.",
      },
    ],
    features: [
      "Barcode tills in the browser, with receipts",
      "Offline selling with automatic sync",
      "Per-product VAT rates",
      "Stock per shop, transfers and low-stock alerts",
      "Purchase orders and supplier records",
      "Sales and stock reports per shop",
      "Rotas, attendance, leave and payroll",
      "Roles so staff only see what they need",
    ],
    notFor:
      "OpesFlux doesn't have loyalty schemes, gift cards or age-verification prompts at the till.",
    plan: "One shop: Starter (£19/month). Two to five shops, or if you want payroll and rotas: Growth (£49/month).",
    faqs: [
      {
        q: "What hardware do I need?",
        a: "Any PC, laptop or tablet with a web browser, plus a barcode scanner and receipt printer if you use them.",
      },
      {
        q: "Can I see all my shops in one place?",
        a: "Yes. Stock and sales are kept per shop, with reports across all of them.",
      },
      {
        q: "Does it do staff rotas?",
        a: "Yes, on Growth: rotas, shifts, attendance, leave and payroll.",
      },
    ],
    related: [
      { label: "Multi-site retail", href: "/industries/retail" },
      { label: "Drinks wholesale", href: "/industries/drinks-wholesale" },
      { label: "Cash and carry", href: "/industries/cash-and-carry" },
      { label: "Pricing", href: "/pricing" },
    ],
    updated: "2026-10-24",
  },
  {
    slug: "multi-site-cafes",
    name: "Multi-site cafés",
    navDesc: "Tills, rotas, attendance and payroll across sites",
    icon: "Coffee",
    group: "retail",
    seo: {
      title: "EPOS, Rotas and Payroll for Multi-Site Cafés",
      description:
        "For café groups with two or more sites: browser tills that work offline, stock per site, staff rotas, attendance, leave and UK payroll in one system.",
    },
    hero: {
      eyebrow: "For café and coffee shop groups",
      h1: "Tills, rotas and payroll for café groups, in one system",
      intro:
        "Once you have more than one café, the hard part is the staff: rotas, hours, holidays and payroll across every site. OpesFlux puts those next to your tills and stock, so sales, hours and wages sit in one place.",
    },
    problemsTitle: "What café groups struggle with",
    problems: [
      {
        problem: "Rotas in a spreadsheet, hours on paper",
        answer:
          "Build shifts and rotas per site. Staff clock in on the employee app, with a face check and an optional location fence around the café.",
      },
      {
        problem: "Payroll that takes a day every month",
        answer:
          "Payroll runs from the hours and leave already in the system, calculating PAYE, National Insurance and auto-enrolment pensions, and produces payslips.",
      },
      {
        problem: "No idea which site is actually profitable",
        answer:
          "Sales and stock are kept per site, so you can compare sites side by side.",
      },
      {
        problem: "Stock and supplies ordered ad hoc",
        answer:
          "Purchase orders and stock per site, with low-stock alerts, keep each café supplied.",
      },
    ],
    features: [
      "Browser tills that work offline",
      "Stock per site and transfers",
      "Shifts and rotas per site",
      "Attendance via the employee app, with face check and geofence",
      "Leave requests and accruals",
      "UK payroll: PAYE, NI, auto-enrolment pensions, payslips",
      "Purchase orders and suppliers",
      "Sales reports per site",
    ],
    notFor:
      "OpesFlux has no table plans, kitchen screens or tip distribution. If you need full table service at a single restaurant, a hospitality EPOS will suit you better.",
    plan: "Growth (£49/month) covers up to 5 sites with rotas and payroll. Enterprise (£99/month) for more sites or several companies.",
    faqs: [
      {
        q: "Does OpesFlux have table service or kitchen screens?",
        a: "No. It suits counter-service cafés and groups whose main need is staff, stock and payroll across sites.",
      },
      {
        q: "Does it send RTI to HMRC?",
        a: "No. It calculates pay, PAYE, NI and pensions and produces payslips. RTI submissions are sent by you or your payroll bureau.",
      },
      {
        q: "How do staff clock in?",
        a: "Through the employee app, which can check their face and whether they are at the café.",
      },
    ],
    related: [
      { label: "Multi-site retail", href: "/industries/retail" },
      { label: "Off-licences", href: "/industries/off-licences" },
      { label: "Pricing", href: "/pricing" },
      { label: "Features", href: "/features" },
    ],
    updated: "2026-10-24",
  },
  {
    slug: "retail",
    name: "Multi-site retail",
    navDesc: "Tills, stock per shop and transfers between shops",
    icon: "Store",
    group: "retail",
    seo: {
      title: "EPOS and Stock Control for Multi-Site Shops (UK)",
      description:
        "For UK retailers with 2-10 shops: browser EPOS that works offline, stock per shop, transfers, purchase orders, Shopify sync and payroll in one system.",
    },
    hero: {
      eyebrow: "For independent retailers with more than one shop",
      h1: "EPOS and stock control for shops with more than one site",
      intro:
        "Opening a second or third shop is when a basic till stops coping. OpesFlux keeps stock per shop, moves it between shops, and puts purchasing, staff and the accounts in the same system as your tills.",
    },
    problemsTitle: "What changes when you open a second shop",
    problems: [
      {
        problem: "One shop has it, the other has sold out",
        answer:
          "Stock is held per shop, so you can see where it is and move it with a stock transfer.",
      },
      {
        problem: "Online sales and shop sales fight over the same stock",
        answer:
          "Shopify and WooCommerce orders come into OpesFlux and stock levels are pushed back, so the website sells from the same figure as the till.",
      },
      {
        problem: "You can't compare your shops",
        answer:
          "Sales and stock reports per shop, and live dashboards across all of them.",
      },
      {
        problem: "More staff, more payroll",
        answer:
          "Rotas, attendance, leave and UK payroll sit in the same system as sales.",
      },
    ],
    features: [
      "Browser EPOS with barcode scanning and receipts",
      "Offline selling with automatic sync",
      "Products, variants and per-product VAT",
      "Stock per shop, transfers and low-stock alerts",
      "Purchase orders and goods received notes",
      "Returns and credit notes",
      "Shopify and WooCommerce sync",
      "Rotas, attendance, leave and payroll",
    ],
    notFor:
      "OpesFlux doesn't have loyalty points or gift cards, and the till takes one payment method per sale.",
    plan: "Growth (£49/month) covers up to 5 shops. Enterprise (£99/month) for unlimited shops, several companies or full accounts.",
    faqs: [
      {
        q: "How many shops can I run?",
        a: "Starter covers 1 location, Growth up to 5 and Enterprise unlimited.",
      },
      {
        q: "Can I move stock between shops?",
        a: "Yes, with stock transfers. Both shops' stock updates when the transfer is made.",
      },
      {
        q: "Does it work with my online shop?",
        a: "Yes, with Shopify and WooCommerce.",
      },
    ],
    related: [
      { label: "Off-licences", href: "/industries/off-licences" },
      { label: "Multi-site cafés", href: "/industries/multi-site-cafes" },
      { label: "Cosmetics & household", href: "/industries/cosmetics-household-wholesale" },
      { label: "OpesFlux vs Xero and spreadsheets", href: "/compare/xero-and-spreadsheets" },
    ],
    updated: "2026-10-24",
  },
  {
    slug: "manufacturing",
    name: "Small manufacturers",
    navDesc: "Bills of materials, production planning and work orders",
    icon: "Factory",
    group: "production",
    seo: {
      title: "Manufacturing Software for Small UK Producers",
      description:
        "Bills of materials, production planning (MPS/MRP), work orders and stock in one system for small manufacturers that also sell and invoice.",
    },
    hero: {
      eyebrow: "For small manufacturers and producers",
      h1: "Production planning and stock for small manufacturers",
      intro:
        "If you make what you sell, OpesFlux connects bills of materials, production planning and work orders to your stock, purchasing and invoicing, so materials, finished goods and sales all live in one system.",
    },
    problemsTitle: "Where small producers lose time",
    problems: [
      {
        problem: "Recipes and bills of materials in spreadsheets",
        answer:
          "Build multi-level bills of materials, so sub-assemblies and their components roll up into the finished product.",
      },
      {
        problem: "Running short of materials mid-run",
        answer:
          "The master production schedule and material requirements planning (MRP) work out what materials a plan needs against what you have.",
      },
      {
        problem: "Not knowing what a batch really cost",
        answer:
          "Work orders record materials and labour, so you can compare actual cost with standard cost.",
      },
      {
        problem: "Production separate from sales and invoicing",
        answer:
          "Finished goods go into the same stock that your sales orders and invoices draw from.",
      },
    ],
    features: [
      "Multi-level bills of materials",
      "Master production schedule (MPS)",
      "Material requirements planning (MRP)",
      "Work orders with materials and labour",
      "Actual vs standard cost",
      "Purchase orders for materials",
      "Sales orders, invoices and stock",
      "Accounts and payroll in the same system",
    ],
    notFor:
      "OpesFlux doesn't track batch or lot numbers through production, and isn't built for shop-floor machine scheduling.",
    plan: "Talk to us: manufacturing is set up per company, and most producers also need purchasing and accounts.",
    faqs: [
      {
        q: "Does OpesFlux support multi-level bills of materials?",
        a: "Yes. Bills of materials can contain sub-assemblies with their own components.",
      },
      {
        q: "Can it plan what materials I need?",
        a: "Yes. The master production schedule and MRP work out material requirements from your production plan.",
      },
    ],
    related: [
      { label: "Wholesale & distribution", href: "/industries/wholesale" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
    updated: "2026-10-24",
  },
];

export const INDUSTRIES: Record<string, Industry> = Object.fromEntries(
  INDUSTRIES_LIST.map((i) => [i.slug, i])
);
