"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileWarning, TrendingDown } from "lucide-react";

const problems = [
  {
    Icon: Clock,
    stat: "12hrs",
    label: "lost weekly to reconciliation",
    desc: "Teams spend over half a working day manually matching data between systems that should talk to each other.",
  },
  {
    Icon: TrendingDown,
    stat: "$2,400",
    label: "average annual cost of stock errors",
    desc: "Overselling, under-ordering, and write-offs that happen when your till doesn't sync with your warehouse.",
  },
  {
    Icon: FileWarning,
    stat: "1 in 5",
    label: "VAT returns submitted late or wrong",
    desc: "UK businesses using multiple tools for accounting and sales regularly miss MTD deadlines or file incorrect figures.",
  },
  {
    Icon: AlertTriangle,
    stat: "67%",
    label: "of SMEs juggle 3+ separate tools",
    desc: "The average UK small business pays for separate POS, accounting, and payroll software — none of which are designed to work together.",
  },
];

export function ProblemSection() {
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
            The problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4"
          >
            Most Global businesses are quietly losing time and money.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-lg text-(--color-muted) leading-[1.7]"
          >
            When your POS doesn&apos;t talk to your accounting, and your stock doesn&apos;t sync with your
            sales, the gap is filled with manual work — and it&apos;s costing more than you think.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map(({ Icon, stat, label, desc }, i) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-(--color-border) bg-(--color-cream) p-6 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(0,194,255,0.16)] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-(--color-error)/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-(--color-error)" />
              </div>
              <div className="text-4xl font-bold text-(--color-deep-blue) mb-1">{stat}</div>
              <div className="text-sm font-medium text-(--color-text) mb-3">{label}</div>
              <p className="text-sm text-(--color-muted) leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
