"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Clock, ShieldCheck, Globe } from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: 100,
    suffix: "+",
    label: "countries supported",
    sub: "run OpesFlux for their businesses worldwide",
    color: "from-blue-500 to-(--color-cyan)",
  },
  {
    icon: TrendingUp,
    value: 2,
    prefix: "$",
    suffix: "M+",
    label: "processed monthly",
    sub: "through OpesFlux tills and invoices",
    color: "from-(--color-blue) to-(--color-cyan)",
  },
  {
    icon: Clock,
    value: 12,
    suffix: " hrs",
    label: "saved per week",
    sub: "per business by eliminating manual work",
    color: "from-(--color-blue) to-(--color-cyan)",
  },
  {
    icon: ShieldCheck,
    value: 99.9,
    suffix: "%",
    label: "uptime SLA",
    sub: "guaranteed on all paid plans",
    color: "from-(--color-blue) to-(--color-cyan)",
  },
];

function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const isDecimal = target % 1 !== 0;
    const duration = 1400;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const isDecimal = target % 1 !== 0;
  const display = isDecimal ? count.toFixed(1) : count;

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-10"
        >
          OpesFlux by the numbers
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, prefix, suffix, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-(--color-border) bg-(--color-cream) p-6 overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(0,194,255,0.18)] transition-all duration-300"
            >
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle, rgba(0,194,255,0.15) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, #1E6AB5, #00C2FF)" }}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-(--color-deep-blue) mb-1 tabular-nums">
                <Counter target={value} prefix={prefix} suffix={suffix} />
              </div>
              <div className="text-sm font-semibold text-(--color-deep-blue) mb-1">{label}</div>
              <div className="text-xs text-(--color-muted) leading-relaxed">{sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
