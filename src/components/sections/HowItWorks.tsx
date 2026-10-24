import React from "react";
import Link from "next/link";
import { ClipboardList, Upload, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Book a 20-minute demo",
    desc: "Tell us what you sell, how many sites you run and what you use today. We show you the parts that matter to you, not a generic tour.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Try it free for 7 days",
    desc: "Import your products, customers and suppliers from spreadsheets, set up your VAT rates and locations, and try it with your own data. No credit card needed.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Run it all in one place",
    desc: "Sales, stock, purchasing, invoices and staff work from the same numbers, and your accountant can have a read-only login.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan-ink) mb-3">How to start</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight">
            From first demo to running your business on it
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {steps.map(({ number, icon: Icon, title, desc }) => (
            <div key={number} className="flex flex-col items-start lg:items-center lg:text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-6"
                style={{ background: "linear-gradient(135deg, #1E6AB5, #20B5A2)" }}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="text-xs font-semibold text-(--color-deep-blue) bg-(--color-cyan)/10 px-2.5 py-0.5 rounded-full mb-3">
                Step {number}
              </div>
              <h3 className="text-xl font-semibold text-(--color-deep-blue) mb-3">{title}</h3>
              <p className="text-sm text-(--color-text) leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">Book your free demo</Link>
          </Button>
          <p className="text-sm text-(--color-text)">Free 7-day trial · No credit card required</p>
        </div>
      </div>
    </section>
  );
}
