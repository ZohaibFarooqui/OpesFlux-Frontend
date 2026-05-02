"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart, Package, Calculator, Users, BookOpen, BarChart3,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    name: "Point of Sale",
    desc: "Lightning-fast POS that works on any device. Barcode scanning, split payments, and offline mode built in. Your tills keep running even when the internet doesn't.",
    href: "/features#pos",
  },
  {
    icon: Package,
    name: "Inventory Management",
    desc: "Real-time stock levels across every location. Auto-reorder triggers, batch tracking, and instant transfers between branches.",
    href: "/features#inventory",
  },
  {
    icon: Calculator,
    name: "Accounting & VAT",
    desc: "Full double-entry accounting with MTD VAT filing direct to HMRC. Bank reconciliation, journal entries, and audit trails — all built-in.",
    href: "/features#accounting",
  },
  {
    icon: Users,
    name: "Payroll & HR",
    desc: "Run payroll in minutes with PAYE, NI, and RTI submissions automated. Holiday tracking, payslips, and pension contributions handled.",
    href: "/features#payroll",
  },
  {
    icon: BookOpen,
    name: "CRM & Customers",
    desc: "Customer profiles with full order history, credit limits, loyalty points, and aged receivables — visible to every team member.",
    href: "/features#sales",
  },
  {
    icon: BarChart3,
    name: "Reports & Insights",
    desc: "P&L, balance sheet, stock valuation, and sales reports updated live. No exports, no spreadsheets — just answers.",
    href: "/features#accounting",
  },
];

export function SolutionSection() {
  return (
    <section id="features" className="py-20 md:py-28 lg:py-32 bg-(--color-cream)">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3"
          >
            The solution
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4"
          >
            Everything your business runs on, finally in one place.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, name, desc, href }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-(--color-border) bg-white p-6 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(0,194,255,0.16)] hover:border-(--color-cyan)/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-(--color-cyan)/10 flex items-center justify-center mb-4 group-hover:bg-(--color-cyan)/20 transition-colors">
                <Icon className="h-6 w-6 text-(--color-cyan)" />
              </div>
              <h3 className="text-xl font-semibold text-(--color-deep-blue) mb-2">{name}</h3>
              <p className="text-sm text-(--color-muted) leading-relaxed mb-4">{desc}</p>
              <Link
                href={href}
                className="text-sm font-medium text-(--color-cyan) hover:underline underline-offset-4 inline-flex items-center gap-1"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
