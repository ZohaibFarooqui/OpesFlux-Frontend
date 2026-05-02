"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

type FeatureBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  visual?: React.ReactNode;
  reverse?: boolean;
  id?: string;
};

export function FeatureBlock({ eyebrow, title, description, bullets, visual, reverse, id }: FeatureBlockProps) {
  return (
    <section id={id} className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={reverse ? "lg:order-2" : ""}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3">{eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">{title}</h2>
            <p className="text-(--color-muted) leading-[1.7] mb-6">{description}</p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-(--color-text)">
                  <Check className="h-5 w-5 text-(--color-cyan) shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${reverse ? "lg:order-1" : ""} rounded-2xl bg-(--color-cream) border border-(--color-border) p-8 flex items-center justify-center min-h-[280px]`}
          >
            {visual || (
              <div className="text-center text-(--color-muted)">
                <div className="w-16 h-16 rounded-2xl bg-(--color-cyan)/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-sm">Feature screenshot coming soon</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
