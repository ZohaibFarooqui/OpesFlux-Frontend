import React from "react";
import Link from "next/link";
import { INDUSTRIES_LIST } from "@/config/industries";
import { IndustryIcon } from "@/components/sections/IndustryIcon";

export function TrustBar() {
  return (
    <section className="py-10 bg-(--color-cream) border-y border-(--color-border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-(--color-muted) mb-6">
          Built for
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-5 items-center">
          {INDUSTRIES_LIST.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="flex items-center gap-2 text-sm text-(--color-text) hover:text-(--color-cyan) transition-colors"
            >
              <IndustryIcon name={i.icon} className="h-4 w-4" />
              {i.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
