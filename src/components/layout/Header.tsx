"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Store, Utensils, Truck, HardHat, Factory, Briefcase } from "lucide-react";
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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const industriesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = () => {
    if (industriesTimeout.current) clearTimeout(industriesTimeout.current);
    setIndustriesOpen(true);
  };
  const closeDropdown = () => {
    industriesTimeout.current = setTimeout(() => setIndustriesOpen(false), 100);
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
              <Link
                href="/features"
                className="px-4 py-2 text-sm font-medium text-(--color-text) hover:text-(--color-cyan) transition-colors rounded-lg hover:bg-(--color-mist)"
              >
                Features
              </Link>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
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
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
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
            {[
              { label: "Features", href: "/features" },
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
