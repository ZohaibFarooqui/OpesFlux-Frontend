"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  dark?: boolean;
};

export function CTASection({
  title = "Ready to run your business in flow?",
  subtitle = "Book a 20-minute walkthrough this week. We'll show you exactly what OpesFlux looks like for a business like yours — no pressure, no commitment.",
  dark = false,
}: CTASectionProps) {
  return (
    <section className={`py-20 md:py-28 lg:py-32 ${dark ? "bg-(--color-deep-blue)" : "bg-white"}`}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-6 ${dark ? "text-white" : "text-(--color-deep-blue)"}`}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className={`text-lg leading-[1.7] mb-10 ${dark ? "text-(--color-cream)/80" : "text-(--color-muted)"}`}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          <Button size="lg" asChild>
            <Link href="/contact">Book a free demo</Link>
          </Button>
          <Button size="lg" variant={dark ? "ghost-white" : "outline"} asChild>
            <Link href="/contact?type=sales">Talk to sales</Link>
          </Button>
        </motion.div>
        <p className={`text-xs ${dark ? "text-(--color-cream)/50" : "text-(--color-muted)"}`}>
          Free 7-day trial after demo · No credit card required
        </p>
      </div>
    </section>
  );
}
