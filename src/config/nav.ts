import { INDUSTRIES_LIST } from "@/config/industries";
import { COMPARISONS } from "@/config/compare";

export type NavItem = {
  label: string;
  href: string;
};

// Only real pages. No "#" placeholders: dead links waste crawl budget and trust.
export const footerNav: Record<"product" | "industries" | "compare" | "company", NavItem[]> = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a demo", href: "/contact" },
    { label: "Sign in", href: "https://app.devsandvisuals.com/login" },
  ],
  industries: INDUSTRIES_LIST.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
  compare: [
    ...COMPARISONS.map((c) => ({ label: `vs ${c.name}`, href: `/compare/${c.slug}` })),
    { label: "All comparisons", href: "/compare" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Guides", href: "/blog" },
    { label: "Accountant partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
