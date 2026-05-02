"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to install anything?",
    a: "No. OpesFlux is a fully web-based platform. You access it through your browser on any device — desktop, tablet, or smartphone. For POS use, we also have a dedicated app for iPad and Android tablets.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle. No penalties, no contracts.",
  },
  {
    q: "What happens during the free trial?",
    a: "You get full access to the plan you've chosen for 7 days. No credit card required to start. At the end of the trial, you can subscribe or let it expire — we won't charge you automatically.",
  },
  {
    q: "Is my data safe and backed up?",
    a: "Yes. OpesFlux is GDPR-compliant and all data is encrypted in transit and at rest. We perform automated daily backups and can restore your data to any point in the last 30 days. We never sell your data to third parties.",
  },
  {
    q: "Do you charge per location or per user?",
    a: "Both, depending on the plan. Starter includes 1 location and 3 users. Growth includes up to 5 locations and 15 users. Enterprise includes unlimited locations and users. Talk to us if your needs fall between tiers.",
  },
  {
    q: "Can I pay in my local currency?",
    a: "Yes. While prices are displayed in USD, we support billing in your local currency on all plans. Contact us after signing up or during demo booking to arrange local currency billing.",
  },
  {
    q: "What tax and payroll systems does OpesFlux support?",
    a: "OpesFlux supports tax and payroll for any jurisdiction. Tax rates, statutory deduction rules, and reporting formats are stored in the database and configurable per company — so whether you operate in the UK, UAE, Pakistan, India, USA, or elsewhere, OpesFlux adapts to your local rules.",
  },
  {
    q: "How does the compliance module work for my country?",
    a: "During onboarding, you select your jurisdiction(s). OpesFlux loads the relevant tax rates, deduction categories, and filing schedules automatically. Our team pre-configures the 10+ most common jurisdictions; custom configurations are available for any market on Enterprise plans.",
  },
  {
    q: "Can I import data from another system?",
    a: "Yes. We support imports from Xero, QuickBooks, Sage, and most major POS systems via CSV or direct API. Our onboarding team will help migrate your data as part of your setup at no extra cost.",
  },
  {
    q: "What's your cancellation policy?",
    a: "You can cancel at any time. Monthly plans end at the close of your current billing period. Annual plans can be cancelled with a pro-rated refund within 30 days of purchase. After 30 days, no refunds are issued for annual plans.",
  },
];

export function FAQAccordion() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-(--color-cream)">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-(--color-deep-blue) tracking-tight">
            Frequently asked questions
          </h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
