import React from "react";
import Link from "next/link";
import { INDUSTRIES_LIST } from "@/config/industries";
import { IndustryIcon } from "@/components/sections/IndustryIcon";

export function IndustriesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {heading && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan-ink) mb-3">Who it&apos;s for</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
              Built for wholesalers, distributors and multi-site shops
            </h2>
            <p className="text-lg text-(--color-muted)">
              Each page covers the day-to-day problems in that trade, what OpesFlux does about them, and when it isn&apos;t the right fit.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES_LIST.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex gap-4 rounded-2xl border border-(--color-border) p-5 hover:-translate-y-0.5 hover:border-(--color-cyan)/40 hover:shadow-[0_12px_40px_-12px_rgba(0,194,255,0.16)] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-(--color-deep-blue) text-white flex items-center justify-center shrink-0 group-hover:bg-(--color-cyan) transition-colors">
                <IndustryIcon name={industry.icon} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-(--color-deep-blue) mb-1 group-hover:text-(--color-cyan) transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-(--color-muted) leading-relaxed">{industry.navDesc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
