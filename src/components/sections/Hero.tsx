"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlowLines } from "@/components/visual/FlowLines";
import { DashboardMockup } from "@/components/visual/DashboardMockup";

const trustPoints = [
  "Any currency, any jurisdiction",
  "Free 7-day trial after demo",
  "No credit card required",
];

const replaces = ["Xero", "QuickBooks", "Sage", "Lightspeed", "Deputy"];

export function Hero() {
  return (
    <section className="relative min-h-175 lg:min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background radial gradients */}
      <div
        className="absolute top-0 right-0 w-175 h-175 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(0,194,255,0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-125 h-125 pointer-events-none"
        style={{
          background: "radial-gradient(circle at bottom left, rgba(37,99,235,0.05) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <FlowLines />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          {/* Left col */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/8 px-4 py-1.5 mb-6"
            >
              <span
                className="w-2 h-2 rounded-full animate-cyan-pulse shrink-0"
                style={{ background: "linear-gradient(135deg, #1E6AB5, #00C2FF)" }}
              />
              <span className="text-xs font-semibold text-(--color-cyan) uppercase tracking-wide">
                Built for businesses worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-(--color-deep-blue) leading-[1.08] tracking-tight mb-6"
            >
              Run your business<br />
              <span className="gradient-text">in flow.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="text-base sm:text-lg text-(--color-muted) leading-[1.7] max-w-xl mb-8"
            >
              OpesFlux is the all-in-one ERP and POS platform for businesses worldwide.
              POS, inventory, accounting, payroll, and tax compliance — one platform, zero juggling.
            </motion.p>

            {/* Trust checkpoints */}
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-8"
            >
              {trustPoints.map((pt) => (
                <li key={pt} className="flex items-center gap-1.5 text-sm text-(--color-text)">
                  <CheckCircle className="h-4 w-4 text-(--color-cyan) shrink-0" />
                  {pt}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="flex flex-wrap gap-3"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Book a free demo</Link>
              </Button>
              <Button size="lg" variant="ghost" className="gap-2" asChild>
                <a href="#features">
                  See how it works
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Replaces strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-(--color-border)"
            >
              <p className="text-xs text-(--color-muted) uppercase tracking-wider font-medium mb-3">
                Trusted by businesses across retail, hospitality, wholesale, and construction
              </p>
            </motion.div>
          </div>

          {/* Right col — dashboard mockup */}
          <motion.div
            className="lg:col-span-2 w-full"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
