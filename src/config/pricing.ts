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
    price: { monthly: 49, annual: 470 },
    currency: "USD",
    currencySymbol: "$",
    note: "Local currency billing available",
    highlighted: false,
    users: "Up to 3 users",
    locations: "1 location",
    description: "Perfect for sole traders and small shops just getting started.",
    cta: "Start free trial",
    ctaHref: "/contact?plan=starter",
    features: [
      "Point of Sale",
      "Inventory management",
      "Invoicing & payments",
      "Customer profiles",
      "Basic reports",
      "PDF exports",
      "Tax management (jurisdiction configurable)",
      "GDPR-ready tools",
      "Email support",
    ],
    bestFor: "Corner shops, cafes, freelancers, market stalls",
  },
  {
    name: "Growth",
    price: { monthly: 129, annual: 1238 },
    currency: "USD",
    currencySymbol: "$",
    note: "Local currency billing available",
    badge: "Most Popular",
    highlighted: true,
    users: "Up to 15 users",
    locations: "Up to 5 locations",
    description: "Everything growing teams need to scale across locations.",
    cta: "Start free trial",
    ctaHref: "/contact?plan=growth",
    features: [
      "Everything in Starter",
      "Purchase orders & supplier management",
      "Multi-location stock & transfers",
      "Payroll & statutory deductions",
      "Sales returns & credit notes",
      "Timesheets & leave management",
      "CSV / Excel exports",
      "Priority support",
    ],
    bestFor: "Restaurant groups, regional retailers, distributors",
  },
  {
    name: "Enterprise",
    price: { monthly: 299, annual: 2870 },
    currency: "USD",
    currencySymbol: "$",
    note: "Local currency billing available",
    highlighted: false,
    users: "Unlimited users",
    locations: "Unlimited locations",
    description: "Full platform with group reporting and dedicated support.",
    cta: "Talk to sales",
    ctaHref: "/contact?plan=enterprise",
    features: [
      "Everything in Growth",
      "Double-entry accounting",
      "Bank reconciliation & open banking",
      "Multi-company group P&L",
      "Multi-currency transactions",
      "Industry-specific compliance modules",
      "Customer self-service portal",
      "Dedicated account manager",
      "Phone support",
    ],
    bestFor: "Retail chains, holding groups, importers, large firms",
  },
];

export const COMPARISON_FEATURES = [
  { label: "Point of Sale", starter: true, growth: true, enterprise: true },
  { label: "Inventory management", starter: true, growth: true, enterprise: true },
  { label: "Invoicing & payments", starter: true, growth: true, enterprise: true },
  { label: "Customer profiles & CRM", starter: true, growth: true, enterprise: true },
  { label: "Tax management (configurable)", starter: true, growth: true, enterprise: true },
  { label: "Basic reports & PDF exports", starter: true, growth: true, enterprise: true },
  { label: "Purchase orders & suppliers", starter: false, growth: true, enterprise: true },
  { label: "Multi-location stock & transfers", starter: false, growth: true, enterprise: true },
  { label: "Payroll & statutory deductions", starter: false, growth: true, enterprise: true },
  { label: "Timesheets & leave management", starter: false, growth: true, enterprise: true },
  { label: "Sales returns & credit notes", starter: false, growth: true, enterprise: true },
  { label: "CSV / Excel exports", starter: false, growth: true, enterprise: true },
  { label: "Double-entry accounting", starter: false, growth: false, enterprise: true },
  { label: "Bank reconciliation", starter: false, growth: false, enterprise: true },
  { label: "Multi-company group P&L", starter: false, growth: false, enterprise: true },
  { label: "Multi-currency transactions", starter: false, growth: false, enterprise: true },
  { label: "Industry compliance modules", starter: false, growth: false, enterprise: true },
  { label: "Dedicated account manager", starter: false, growth: false, enterprise: true },
];
