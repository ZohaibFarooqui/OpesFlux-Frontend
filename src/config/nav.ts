export type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Features", href: "/features" },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Retail",
        href: "/industries/retail",
        description: "POS, stock, and loyalty for shops of any size",
        icon: "Store",
      },
      {
        label: "Restaurants",
        href: "/industries/restaurants",
        description: "Table management, kitchen flow, and shift payroll",
        icon: "Utensils",
      },
      {
        label: "Wholesale",
        href: "/industries/wholesale",
        description: "Purchase orders, pricing tiers, and logistics",
        icon: "Truck",
      },
      {
        label: "Construction",
        href: "/industries/construction",
        description: "Job costing, subcontractors, and compliance",
        icon: "HardHat",
      },
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
        description: "Production runs, BOMs, and supply chain control",
        icon: "Factory",
      },
      {
        label: "Professional Services",
        href: "/industries/professional-services",
        description: "Time tracking, retainers, and project billing",
        icon: "Briefcase",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Industries", href: "/industries" },
    { label: "Integrations", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "/contact" },
    { label: "Partners", href: "#" },
  ],
  resources: [
    { label: "Help Centre", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Status", href: "#" },
    { label: "Security", href: "#" },
    { label: "Privacy", href: "/privacy" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies", href: "#" },
    { label: "Acceptable Use", href: "#" },
  ],
};
