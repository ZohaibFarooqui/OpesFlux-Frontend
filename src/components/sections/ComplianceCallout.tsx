"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const badges = ["Multi-Currency", "Multi-Jurisdiction", "GDPR-Ready", "Audit Trail"];

const statCards = [
  { value: "100+", label: "countries supported", desc: "OpesFlux adapts to any market worldwide" },
  { value: "10+", label: "jurisdictions pre-configured", desc: "UK, UAE, Pakistan, India, USA, Australia & more" },
  { value: "Zero", label: "tax rules hardcoded", desc: "All rates stored in the database — always up to date" },
];

export function ComplianceCallout() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-(--color-deep-blue)">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-4"
            >
              Works wherever you operate
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-6"
            >
              Built-in tax and payroll compliance for any jurisdiction.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="text-(--color-cream)/80 leading-[1.7] mb-8"
            >
              OpesFlux adapts to each company's local tax rules, statutory deductions, and reporting
              requirements — whether you operate in the UK, Pakistan, UAE, India, USA, or anywhere else.
              No add-ons. No workarounds. Compliance is built in from day one.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 bg-(--color-cyan)/10 border border-(--color-cyan)/30 text-(--color-cyan) rounded-full px-3 py-1 text-xs font-medium"
                >
                  <CheckCircle className="h-3 w-3" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — 3 stat cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {statCards.map(({ value, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6"
                >
                  <div className="text-4xl font-bold text-(--color-cyan) mb-2">{value}</div>
                  <div className="text-sm font-semibold text-white mb-2">{label}</div>
                  <p className="text-cream/60 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
