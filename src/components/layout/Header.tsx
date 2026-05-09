"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu, X, ChevronDown,
  Store, Utensils, Truck, HardHat, Factory, Briefcase,
  ShoppingBag, Package, Receipt, Users, BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const industryIcons: Record<string, React.ReactNode> = {
  Store: <Store className="h-5 w-5" />,
  Utensils: <Utensils className="h-5 w-5" />,
  Truck: <Truck className="h-5 w-5" />,
  HardHat: <HardHat className="h-5 w-5" />,
  Factory: <Factory className="h-5 w-5" />,
  Briefcase: <Briefcase className="h-5 w-5" />,
};

const industries = [
  { label: "Retail", href: "/industries/retail", desc: "POS, stock, and loyalty for shops of any size", icon: "Store" },
  { label: "Restaurants", href: "/industries/restaurants", desc: "Table management, kitchen flow, and shift payroll", icon: "Utensils" },
  { label: "Wholesale", href: "/industries/wholesale", desc: "Purchase orders, pricing tiers, and logistics", icon: "Truck" },
  { label: "Construction", href: "/industries/construction", desc: "Job costing, subcontractors, and compliance", icon: "HardHat" },
  { label: "Manufacturing", href: "/industries/manufacturing", desc: "Production runs, BOMs, and supply chain control", icon: "Factory" },
  { label: "Professional Services", href: "/industries/professional-services", desc: "Time tracking, retainers, and project billing", icon: "Briefcase" },
];

type FeatureItem = { name: string; href: string };
type FeatureCategory = {
  id: string;
  name: string;
  Icon: React.ElementType;
  color: string;
  features: FeatureItem[];
};

// hrefs map to real section ids on /features page:
// pos, inventory, sales, purchasing, accounting, payroll
const featureCategories: FeatureCategory[] = [
  {
    id: "sales",
    name: "Sales & Marketing",
    Icon: ShoppingBag,
    color: "text-sky-600",
    features: [
      { name: "Point of Sale", href: "/features#pos" },
      { name: "Sales Orders & Quotes", href: "/features#sales" },
      { name: "Customer CRM", href: "/features#sales" },
      { name: "Aged Receivables", href: "/features#sales" },
      { name: "Loyalty Programme", href: "/features#sales" },
      { name: "GDPR Tools", href: "/features#sales" },
    ],
  },
  {
    id: "supply-chain",
    name: "Supply Chain",
    Icon: Package,
    color: "text-emerald-600",
    features: [
      { name: "Inventory Management", href: "/features#inventory" },
      { name: "Multi-Location Stock", href: "/features#inventory" },
      { name: "Stock Transfers", href: "/features#inventory" },
      { name: "Batch & Serial Tracking", href: "/features#inventory" },
      { name: "Purchase Orders", href: "/features#purchasing" },
      { name: "Supplier Management", href: "/features#purchasing" },
    ],
  },
  {
    id: "finance",
    name: "Finance & Accounting",
    Icon: Receipt,
    color: "text-violet-600",
    features: [
      { name: "Invoicing & Payments", href: "/features#accounting" },
      { name: "VAT Management & MTD", href: "/features#accounting" },
      { name: "Chart of Accounts", href: "/features#accounting" },
      { name: "Bank Reconciliation", href: "/features#accounting" },
      { name: "Open Banking", href: "/features#accounting" },
      { name: "Reports & Analytics", href: "/features#accounting" },
    ],
  },
  {
    id: "hr",
    name: "HR & Payroll",
    Icon: Users,
    color: "text-amber-600",
    features: [
      { name: "Payroll", href: "/features#payroll" },
      { name: "Timesheets", href: "/features#payroll" },
      { name: "Leave Management", href: "/features#payroll" },
      { name: "Payslips", href: "/features#payroll" },
    ],
  },
  {
    id: "system",
    name: "Reports & System",
    Icon: BarChart3,
    color: "text-slate-600",
    features: [
      { name: "Reports Hub", href: "/features" },
      { name: "Activity Logs", href: "/features" },
      { name: "System Settings", href: "/features" },
    ],
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const industriesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const featuresTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openIndustries = () => {
    if (industriesTimeout.current) clearTimeout(industriesTimeout.current);
    setIndustriesOpen(true);
  };
  const closeIndustries = () => {
    industriesTimeout.current = setTimeout(() => setIndustriesOpen(false), 100);
  };

  const openFeatures = () => {
    if (featuresTimeout.current) clearTimeout(featuresTimeout.current);
    setFeaturesOpen(true);
  };
  const closeFeatures = () => {
    featuresTimeout.current = setTimeout(() => setFeaturesOpen(false), 100);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-(--color-cyan) focus:text-(--color-deep-blue) focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-lg border-b border-(--color-border) shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image src="/logo.png" alt="OpesFlux" width={48} height={48} className="object-contain" priority />
              <span className="font-bold text-(--color-deep-blue) text-xl tracking-tight">OpesFlux</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">

              {/* Features Mega-menu */}
              <div
                className="relative"
                onMouseEnter={openFeatures}
                onMouseLeave={closeFeatures}
              >
                <button
                  onClick={() => setFeaturesOpen((v) => !v)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-(--color-text) hover:text-(--color-cyan) transition-colors rounded-lg hover:bg-(--color-mist)"
                  aria-expanded={featuresOpen}
                  aria-haspopup="true"
                >
                  Features
                  <ChevronDown className={cn("h-4 w-4 transition-transform", featuresOpen && "rotate-180")} />
                </button>

                {featuresOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-140 bg-white rounded-2xl shadow-[0_12px_40px_-12px_rgba(10,37,64,0.18)] border border-(--color-border) p-6"
                    onMouseEnter={openFeatures}
                    onMouseLeave={closeFeatures}
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {featureCategories.map((cat) => (
                        <div key={cat.id}>
                          <div className="flex items-center gap-2 mb-3">
                            <cat.Icon className={cn("h-4 w-4 shrink-0", cat.color)} />
                            <span className="text-xs font-semibold uppercase tracking-wider text-(--color-muted)">
                              {cat.name}
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {cat.features.map((f) => (
                              <li key={f.name}>
                                <Link
                                  href={f.href}
                                  className="block py-1 text-sm text-(--color-text) hover:text-(--color-cyan) transition-colors"
                                  onClick={() => setFeaturesOpen(false)}
                                >
                                  {f.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-(--color-border) flex items-center justify-between">
                      <span className="text-xs text-(--color-muted)">31 modules. One platform.</span>
                      <Link
                        href="/features"
                        className="text-xs font-semibold text-(--color-cyan) hover:underline"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        See full feature list →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={openIndustries}
                onMouseLeave={closeIndustries}
              >
                <button
                  onClick={() => setIndustriesOpen((v) => !v)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-(--color-text) hover:text-(--color-cyan) transition-colors rounded-lg hover:bg-(--color-mist)"
                  aria-expanded={industriesOpen}
                  aria-haspopup="true"
                >
                  Industries
                  <ChevronDown className={cn("h-4 w-4 transition-transform", industriesOpen && "rotate-180")} />
                </button>

                {industriesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-[0_12px_40px_-12px_rgba(10,37,64,0.16)] border border-(--color-border) p-3"
                    onMouseEnter={openIndustries}
                    onMouseLeave={closeIndustries}
                  >
                    {industries.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-(--color-mist) transition-colors group"
                        onClick={() => setIndustriesOpen(false)}
                      >
                        <div className="mt-0.5 w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center text-(--color-cyan) shrink-0">
                          {industryIcons[item.icon]}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-(--color-deep-blue) group-hover:text-(--color-cyan)">{item.label}</div>
                          <div className="text-xs text-(--color-muted) mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="px-4 py-2 text-sm font-medium text-(--color-text) hover:text-(--color-cyan) transition-colors rounded-lg hover:bg-(--color-mist)"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-medium text-(--color-text) hover:text-(--color-cyan) transition-colors rounded-lg hover:bg-(--color-mist)"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-(--color-text) hover:text-(--color-cyan) transition-colors rounded-lg hover:bg-(--color-mist)"
              >
                About
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <a href={`${siteConfig.appUrl}/login`} target="_blank" rel="noopener noreferrer">
                  Sign in
                </a>
              </Button>
              <Button size="sm" asChild>
                <Link href="/contact">Book a demo</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-(--color-deep-blue) hover:bg-(--color-mist)"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-100 bg-white flex flex-col lg:hidden">
          <div className="flex items-center justify-between px-6 h-20 border-b border-(--color-border)">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
              <Image src="/logo.png" alt="OpesFlux" width={48} height={48} className="object-contain" />
              <span className="font-bold text-(--color-deep-blue) text-xl">OpesFlux</span>
            </Link>
            <button
              className="p-2 rounded-lg hover:bg-(--color-mist)"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
            {/* Features expandable */}
            <button
              className="flex items-center justify-between px-4 py-3 text-lg font-medium text-(--color-deep-blue) hover:text-(--color-cyan) hover:bg-(--color-mist) rounded-xl transition-colors w-full text-left"
              onClick={() => setMobileFeaturesOpen((v) => !v)}
            >
              Features
              <ChevronDown className={cn("h-5 w-5 transition-transform", mobileFeaturesOpen && "rotate-180")} />
            </button>
            {mobileFeaturesOpen && (
              <div className="ml-4 flex flex-col gap-0.5 mb-2">
                {featureCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/features#${cat.id}`}
                    className="flex items-center gap-3 px-4 py-2 text-(--color-text) hover:text-(--color-cyan) hover:bg-(--color-mist) rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <cat.Icon className={cn("h-4 w-4 shrink-0", cat.color)} />
                    <span className="text-sm font-medium">{cat.name}</span>
                  </Link>
                ))}
                <Link
                  href="/features"
                  className="px-4 py-2 text-sm font-semibold text-(--color-cyan) hover:bg-(--color-mist) rounded-xl transition-colors mt-1"
                  onClick={() => setMobileOpen(false)}
                >
                  See all features →
                </Link>
              </div>
            )}

            {[
              { label: "Pricing", href: "/pricing" },
              { label: "Blog", href: "/blog" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-lg font-medium text-(--color-deep-blue) hover:text-(--color-cyan) hover:bg-(--color-mist) rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 border-t border-(--color-border) pt-4 text-sm text-(--color-muted) uppercase tracking-wider font-medium px-4">Industries</div>
            {industries.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 text-(--color-text) hover:text-(--color-cyan) hover:bg-(--color-mist) rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-(--color-cyan)">{industryIcons[item.icon]}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-8 flex flex-col gap-3">
            <Button variant="outline" size="lg" className="w-full" asChild>
              <a href={`${siteConfig.appUrl}/login`} target="_blank" rel="noopener noreferrer">
                Sign in
              </a>
            </Button>
            <Button size="lg" className="w-full" asChild>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Book a free demo
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
