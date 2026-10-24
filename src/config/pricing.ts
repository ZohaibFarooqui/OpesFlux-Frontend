export type PricingTier = {
  name: string;
  price: { monthly: number; annual: number };
  currency: string;
  currencySymbol: string;
  note: string;
  badge?: string;
  highlighted: boolean;
  users: string;
  locations: string;
  description: string;
  cta: string;
  ctaHref: string;
  features: string[];
  bestFor: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: { monthly: 19, annual: 182 },
    currency: "GBP",
    currencySymbol: "£",
    note: "Prices in GBP",
    highlighted: false,
    users: "Up to 3 users",
    locations: "1 location",
    description: "For a single shop or trade counter getting the till and stock under control.",
    cta: "Start free trial",
    ctaHref: "/contact?plan=starter",
    features: [
      "Point of sale that keeps selling offline",
      "Products, variants and barcodes",
      "Stock control with low-stock alerts",
      "Quotes, invoices and payments",
      "Customer records",
      "Basic sales and stock reports",
      "PDF exports",
      "VAT / sales tax rates set per company",
      "Email support",
    ],
    bestFor: "Independent shops, off-licences, single trade counters",
  },
  {
    name: "Growth",
    price: { monthly: 49, annual: 470 },
    currency: "GBP",
    currencySymbol: "£",
    note: "Prices in GBP",
    badge: "Most Popular",
    highlighted: true,
    users: "Up to 15 users",
    locations: "Up to 5 locations",
    description: "For wholesalers and multi-site businesses that buy from suppliers and run staff.",
    cta: "Start free trial",
    ctaHref: "/contact?plan=growth",
    features: [
      "Everything in Starter",
      "Purchase orders, approvals and goods received",
      "Supplier management",
      "Multi-location stock and transfers",
      "Payroll with UK PAYE, NI and pensions",
      "Sales returns and credit notes",
      "Rotas, attendance and leave",
      "CSV / Excel exports",
    ],
    bestFor: "Wholesalers, distributors, cash and carry, 2-5 site retailers",
  },
  {
    name: "Enterprise",
    price: { monthly: 99, annual: 950 },
    currency: "GBP",
    currencySymbol: "£",
    note: "Prices in GBP",
    highlighted: false,
    users: "Unlimited users",
    locations: "Unlimited locations",
    description: "The full system: double-entry accounts, bank feeds and several companies.",
    cta: "Talk to us",
    ctaHref: "/contact?plan=enterprise",
    features: [
      "Everything in Growth",
      "Double-entry accounting",
      "Bank reconciliation and open banking feeds",
      "Multi-company group reporting",
      "Multi-currency transactions",
      "Customer self-service portal",
      "Fixed assets register",
    ],
    bestFor: "Groups with several sites or companies, importers",
  },
];

export const COMPARISON_FEATURES = [
  { label: "Point of sale (keeps selling offline)", starter: true, growth: true, enterprise: true },
  { label: "Stock control and low-stock alerts", starter: true, growth: true, enterprise: true },
  { label: "Quotes, invoices and payments", starter: true, growth: true, enterprise: true },
  { label: "Customer records", starter: true, growth: true, enterprise: true },
  { label: "VAT / sales tax rates per company", starter: true, growth: true, enterprise: true },
  { label: "Basic reports and PDF exports", starter: true, growth: true, enterprise: true },
  { label: "Purchase orders and suppliers", starter: false, growth: true, enterprise: true },
  { label: "Multi-location stock and transfers", starter: false, growth: true, enterprise: true },
  { label: "Payroll (UK PAYE, NI, pensions)", starter: false, growth: true, enterprise: true },
  { label: "Rotas, attendance and leave", starter: false, growth: true, enterprise: true },
  { label: "Sales returns and credit notes", starter: false, growth: true, enterprise: true },
  { label: "CSV / Excel exports", starter: false, growth: true, enterprise: true },
  { label: "Double-entry accounting", starter: false, growth: false, enterprise: true },
  { label: "Bank reconciliation and open banking", starter: false, growth: false, enterprise: true },
  { label: "Multi-company group reporting", starter: false, growth: false, enterprise: true },
  { label: "Multi-currency transactions", starter: false, growth: false, enterprise: true },
  { label: "Customer self-service portal", starter: false, growth: false, enterprise: true },
];
