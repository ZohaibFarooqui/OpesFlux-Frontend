import React from "react";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";

// Plain statement of what OpesFlux does and doesn't do for tax and payroll.
// Buyers (and AI answers) ask exactly this, so say it straight.
const does = [
  "Works out VAT on every sale and purchase, with a rate per product",
  "Prepares your VAT return figures and VAT reports",
  "UK payroll: PAYE, National Insurance and auto-enrolment pensions, with payslips",
  "Payroll rules for Japan, Pakistan and the United States too",
  "Currency, tax rates, time zone and date format set per company",
];

const doesNot = [
  "Submit VAT returns to HMRC: your accountant or MTD bridging software does that",
  "Send RTI submissions to HMRC",
  "CIS or IR35", // claims-ok: stated as what OpesFlux does not do
];

export function ComplianceCallout() {
  return (
    <section className="py-20 md:py-28 bg-(--color-deep-blue)">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-4">VAT and payroll, honestly</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-4">
            What OpesFlux does for tax and payroll, and what it leaves to your accountant
          </h2>
          <p className="text-(--color-cream)/80 leading-[1.7]">
            Accountants can have a read-only login to see the figures. <Link href="/partners" className="underline underline-offset-4 text-white">Accountant partner programme</Link>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">OpesFlux does</h3>
            <ul className="space-y-3">
              {does.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-(--color-cream)/90">
                  <CheckCircle className="h-5 w-5 text-(--color-cyan) shrink-0" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">OpesFlux doesn&apos;t</h3>
            <ul className="space-y-3">
              {doesNot.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-(--color-cream)/90">
                  <XCircle className="h-5 w-5 text-(--color-cream)/50 shrink-0" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
