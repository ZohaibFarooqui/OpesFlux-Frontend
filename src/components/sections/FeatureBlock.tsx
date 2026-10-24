import React from "react";
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
  const text = (
    <div className={visual && reverse ? "lg:order-2" : ""}>
      <p className="text-xs font-semibold uppercase tracking-widest text-(--color-deep-blue) mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">{title}</h2>
      <p className="text-(--color-text) leading-[1.7] mb-6">{description}</p>
      <ul className={visual ? "space-y-3" : "grid sm:grid-cols-2 gap-3"}>
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-(--color-text)">
            <Check className="h-5 w-5 text-(--color-cyan-ink) shrink-0 mt-0.5" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id={id} className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {visual ? (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {text}
            <div className={`${reverse ? "lg:order-1" : ""} rounded-2xl bg-(--color-cream) border border-(--color-border) p-8 flex items-center justify-center`}>
              {visual}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl">{text}</div>
        )}
      </div>
    </section>
  );
}
