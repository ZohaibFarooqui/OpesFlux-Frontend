"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We've been testing OpesFlux across our two shops and the difference in how our team works together is remarkable. Real testimonials from UK customers coming soon.",
    author: "Sarah T.",
    role: "Owner",
    company: "UK Retailer (Coming soon)",
  },
  {
    quote: "Managing CIS and job costs used to take us a full day every month. With OpesFlux it's just a few clicks. Placeholder — real stories from real businesses are on their way.",
    author: "Mark D.",
    role: "Director",
    company: "UK Construction (Coming soon)",
  },
  {
    quote: "Finally an ERP that was actually built for how UK restaurants work — including tronc, tipping, and shift payroll. We can't wait to share our full story.",
    author: "Priya K.",
    role: "General Manager",
    company: "UK Restaurant Group (Coming soon)",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-(--color-cream)">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight"
          >
            Stories from UK businesses
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-(--color-border) p-8 shadow-[0_4px_24px_-8px_rgba(10,37,64,0.08)]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-(--color-cyan) text-(--color-cyan)" />
                ))}
              </div>
              <blockquote className="text-base text-(--color-text) leading-[1.7] italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-(--color-deep-blue) flex items-center justify-center text-white font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-(--color-deep-blue)">{t.author}</div>
                  <div className="text-xs text-(--color-muted)">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-(--color-muted) mt-8">
          Coming soon — real stories from real UK businesses.
        </p>
      </div>
    </section>
  );
}
