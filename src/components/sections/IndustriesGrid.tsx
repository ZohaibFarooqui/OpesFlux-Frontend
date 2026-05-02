"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Store, Utensils, Truck, HardHat, Briefcase } from "lucide-react";

const industries = [
  {
    icon: Store,
    name: "Retail",
    href: "/industries/retail",
    desc: "POS, stock, and loyalty for UK shops of all sizes.",
    bullets: ["Multi-location POS", "Real-time inventory", "Loyalty programmes"],
  },
  {
    icon: Utensils,
    name: "Restaurants",
    href: "/industries/restaurants",
    desc: "Table management, kitchen display, and tronc handling.",
    bullets: ["Table & kitchen management", "Shift-based payroll", "MTD VAT filing"],
  },
  {
    icon: Truck,
    name: "Wholesale",
    href: "/industries/wholesale",
    desc: "Purchase orders, pricing tiers, and aged debtors control.",
    bullets: ["Purchase orders & GRNs", "Customer price lists", "Credit control"],
  },
  {
    icon: HardHat,
    name: "Construction",
    href: "/industries/construction",
    desc: "CIS deductions, job costing, and subcontractor payments.",
    bullets: ["CIS returns", "Job costing & P&L", "Site purchase orders"],
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    href: "/industries/professional-services",
    desc: "Time tracking, milestone billing, and IR35 compliance.",
    bullets: ["Time tracking & billing", "IR35 assessment tool", "WIP reports"],
  },
];

export function IndustriesGrid() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3"
          >
            Built for your industry
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4"
          >
            However your business runs, OpesFlux fits.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-lg text-(--color-muted)"
          >
            Industry-specific features and compliance built into every plan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map(({ icon: Icon, name, href, desc, bullets }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={href}
                className="group flex flex-col h-full rounded-2xl border border-(--color-border) p-5 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(0,194,255,0.16)] hover:border-(--color-cyan)/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-(--color-deep-blue) flex items-center justify-center mb-4 group-hover:bg-(--color-cyan) group-hover:text-(--color-deep-blue) transition-colors">
                  <Icon className="h-5 w-5 text-white group-hover:text-(--color-deep-blue) transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-(--color-deep-blue) mb-2 group-hover:text-(--color-cyan) transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-(--color-muted) mb-4 leading-relaxed flex-1">{desc}</p>
                <ul className="space-y-1.5">
                  {bullets.map((b) => (
                    <li key={b} className="text-xs text-(--color-text) flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-(--color-cyan) shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-xs font-medium text-(--color-cyan) group-hover:gap-2 transition-all">
                  Explore →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
