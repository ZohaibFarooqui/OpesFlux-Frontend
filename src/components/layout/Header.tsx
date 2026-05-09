"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu, X, ChevronDown,
  Store, Utensils, Truck, HardHat, Factory, Briefcase,
  ShoppingBag, Package, Receipt, Shield, Users, BarChart3,
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

type FeatureItem = { name: string; href: string; desc: string };
type FeatureCategory = {
  id: string;
  name: string;
  Icon: React.ElementType;
  color: string;
  bg: string;
  dot: string;
  features: FeatureItem[];
};

const featureCategories: FeatureCategory[] = [
  {
    id: "sales",
    name: "Sales & Marketing",
    Icon: ShoppingBag,
    color: "text-sky-600",
    bg: "bg-sky-50",
    dot: "bg-sky-400",
    features: [
      { name: "Point of Sale", href: "/features#pos", desc: "Fast checkout with barcode scanning, split payments, and offline mode" },
      { name: "Sales Orders", href: "/features#sales-orders", desc: "Full pipeline visibility from quote to confirmed delivery" },
      { name: "Quotes & Estimates", href: "/features#quotes", desc: "Professional quotes with expiry dates and one-click conversion" },
      { name: "Sales Returns", href: "/features#sales-returns", desc: "Full and partial returns with stock restoration and credit notes" },
      { name: "Customer CRM", href: "/features#crm", desc: "Records with order history, credit limits, and payment terms" },
      { name: "Aged Receivables", href: "/features#aged-receivables", desc: "Track overdue invoices by age bucket with automated reminders" },
      { name: "Loyalty Programme", href: "/features#loyalty", desc: "Earn and redeem customer points at POS to drive repeat business" },
      { name: "GDPR Tools", href: "/features#gdpr", desc: "Data export, erasure requests, and consent management" },
    ],
  },
  {
    id: "supply-chain",
    name: "Supply Chain",
    Icon: Package,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    dot: "bg-emerald-400",
    features: [
      { name: "Inventory Management", href: "/features#inventory", desc: "Real-time stock tracking with low stock alerts and auto-reorders" },
      { name: "Multi-Location Stock", href: "/features#multi-location", desc: "Centralized inventory visibility across all branches and warehouses" },
      { name: "Stock Transfers", href: "/features#stock-transfers", desc: "Move stock between locations with a full audit trail" },
      { name: "Batch & Serial Tracking", href: "/features#batch-serial", desc: "Track items by batch or serial number for full traceability" },
      { name: "Purchase Orders", href: "/features#purchase-orders", desc: "Create and track POs with approval workflows and delivery tracking" },
      { name: "Supplier Management", href: "/features#suppliers", desc: "Supplier profiles, payment terms, credit limits, and purchase history" },
    ],
  },
  {
    id: "finance",
    name: "Finance & Accounting",
    Icon: Receipt,
    color: "text-violet-600",
    bg: "bg-violet-50",
    dot: "bg-violet-400",
    features: [
      { name: "Invoicing", href: "/features#invoicing", desc: "VAT-compliant invoices auto-generated from confirmed orders" },
      { name: "Payments", href: "/features#payments", desc: "Record payments across cash, card, bank transfer, and credit accounts" },
      { name: "VAT Management & MTD", href: "/features#vat", desc: "Calculate VAT correctly and file returns digitally to HMRC" },
      { name: "Chart of Accounts", href: "/features#accounts", desc: "Double-entry bookkeeping with hierarchical structure and trial balance" },
      { name: "Bank Reconciliation", href: "/features#bank-reconciliation", desc: "Match bank statement transactions to journal entries" },
      { name: "Open Banking", href: "/features#open-banking", desc: "Auto-import daily bank transactions via Open Banking API" },
      { name: "Reports & Analytics", href: "/features#reports", desc: "P&L, Balance Sheet, Cash Flow, and 10+ business reports" },
    ],
  },
  {
    id: "compliance",
    name: "UK Compliance",
    Icon: Shield,
    color: "text-red-600",
    bg: "bg-red-50",
    dot: "bg-red-400",
    features: [
      { name: "CIS Module", href: "/features#cis", desc: "Auto-calculate subcontractor deductions at 20% or 30% for HMRC" },
      { name: "IR35 Tool", href: "/features#ir35", desc: "Assess and record contractor IR35 status for due diligence" },
      { name: "MTD VAT Filing", href: "/features#mtd", desc: "Submit VAT returns directly to HMRC via Making Tax Digital API" },
    ],
  },
  {
    id: "hr",
    name: "HR & Payroll",
    Icon: Users,
    color: "text-amber-600",
    bg: "bg-amber-50",
    dot: "bg-amber-400",
    features: [
      { name: "Payroll", href: "/features#payroll", desc: "PAYE, NI, and pension contributions calculated automatically" },
      { name: "Timesheets", href: "/features#timesheets", desc: "Track employee hours for payroll and labour cost analysis" },
      { name: "Leave Management", href: "/features#leave", desc: "Manage leave entitlements, requests, and approval workflows" },
      { name: "Payslips", href: "/features#payslips", desc: "Professional payslips with all statutory deductions visible" },
    ],
  },
  {
    id: "system",
    name: "Reports & System",
    Icon: BarChart3,
    color: "text-slate-600",
    bg: "bg-slate-100",
    dot: "bg-slate-400",
    features: [
      { name: "Reports Hub", href: "/features#reports-hub", desc: "All business reports with flexible date and location filters" },
      { name: "Activity Logs", href: "/features#activity-logs", desc: "Immutable audit trail of every user action for compliance" },
      { name: "System Settings", href: "/features#settings", desc: "Configure currencies, tax rules, and all business settings" },
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
                    className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-2xl shadow-[0_12px_40px_-12px_rgba(10,37,64,0.20)] border border-(--color-border) p-4"
                    onMouseEnter={openFeatures}
                    onMouseLeave={closeFeatures}
                  >
                    <div className="grid grid-cols-3 gap-1">
                      {featureCategories.map((cat) => (
                        <div key={cat.id}>
                          <div className={cn("flex items-center gap-1.5 px-2 py-1.5 mb-0.5 rounded-lg", cat.bg)}>
                            <cat.Icon className={cn("h-3.5 w-3.5 shrink-0", cat.color)} />
                            <span className={cn("text-[10px] font-bold uppercase tracking-wider leading-none", cat.color)}>
                              {cat.name}
                            </span>
                          </div>
                          {cat.features.map((f) => (
                            <Link
                              key={f.href}
                              href={f.href}
                              className="block px-2 py-1.5 rounded-lg hover:bg-(--color-mist) transition-colors group"
                              onClick={() => setFeaturesOpen(false)}
                            >
                              <div className="flex items-center gap-1.5">
                                <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", cat.dot)} />
                                <span className="text-[12.5px] font-medium text-(--color-deep-blue) group-hover:text-(--color-cyan) leading-tight">
                                  {f.name}
                                </span>
                              </div>
                              <p className="text-[11px] text-(--color-muted) leading-snug mt-0.5 ml-3 line-clamp-2">
                                {f.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-(--color-border) flex items-center justify-between">
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
