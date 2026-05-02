"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Book a 20-min demo",
    desc: "Tell us about your business — industry, team size, current tools. We'll tailor the walkthrough to what matters most to you.",
    detail: "No sales pressure. Just a clear look at how OpesFlux fits your workflow.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Set up in a day",
    desc: "Our onboarding team migrates your data, configures your tax settings, and trains your staff. Most businesses are live within 24 hours.",
    detail: "We handle HMRC registration, chart of accounts, and till setup for you.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Run everything in one place",
    desc: "Sales, stock, payroll, VAT — all flowing together in real time. Every report is live. Every compliance deadline is handled.",
    detail: "No more spreadsheets. No more month-end panic. Just clean data and clear numbers.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight"
          >
            From first demo to fully running — in three steps.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px"
            style={{ background: "linear-gradient(90deg, #1E6AB5, #20B5A2)" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map(({ number, icon: Icon, title, desc, detail }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-start lg:items-center lg:text-center"
              >
                {/* Step number circle */}
                <div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mb-6 shrink-0"
                  style={{ background: "linear-gradient(135deg, #1E6AB5, #20B5A2)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="inline-block text-xs font-semibold text-(--color-cyan) bg-(--color-cyan)/10 px-2.5 py-0.5 rounded-full mb-3">
                  Step {number}
                </div>
                <h3 className="text-xl font-semibold text-(--color-deep-blue) mb-3 leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-(--color-text) leading-relaxed mb-3">
                  {desc}
                </p>
                <p className="text-xs text-(--color-muted) leading-relaxed italic">
                  {detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/contact">Book your free demo</Link>
          </Button>
          <p className="text-sm text-(--color-muted)">Free 7-day trial · No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
}
