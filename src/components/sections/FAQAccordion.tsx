"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PRICING_FAQS, type Faq } from "@/config/faq";

export function FAQAccordion({
  faqs = PRICING_FAQS,
  title = "Frequently asked questions",
}: {
  faqs?: Faq[];
  title?: string;
}) {
  return (
    <section className="py-20 md:py-28 bg-(--color-cream)">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-(--color-deep-blue) tracking-tight mb-10">{title}</h2>
        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              {/* forceMount keeps answers in the server HTML for crawlers; Radix hides closed items */}
              <AccordionContent forceMount>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
