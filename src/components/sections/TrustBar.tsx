"use client";

import React from "react";
import { motion } from "framer-motion";
import { Store, Utensils, Truck, HardHat, Factory, Briefcase } from "lucide-react";

const trustItems = [
  { Icon: Store, label: "Retail" },
  { Icon: Utensils, label: "Restaurants" },
  { Icon: Truck, label: "Wholesale" },
  { Icon: HardHat, label: "Construction" },
  { Icon: Factory, label: "Manufacturing" },
  { Icon: Briefcase, label: "Professional Services" },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-(--color-cream) border-y border-(--color-border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-(--color-muted) mb-8">
          Trusted by businesses across every industry and every continent
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {trustItems.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-(--color-border) flex items-center justify-center text-(--color-muted) group-hover:text-(--color-cyan) group-hover:border-(--color-cyan) transition-all shadow-sm grayscale group-hover:grayscale-0">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-xs text-(--color-muted) group-hover:text-(--color-cyan) transition-colors">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
