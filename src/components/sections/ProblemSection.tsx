import React from "react";
import { Boxes, Keyboard, Receipt, CalendarClock } from "lucide-react";

const problems = [
  {
    Icon: Boxes,
    title: "The till and the stock count never match",
    desc: "Sales go through one system and stock lives in another, so you over-order some lines and run out of others.",
  },
  {
    Icon: Keyboard,
    title: "Someone re-keys everything each week",
    desc: "Sales, invoices and supplier bills get typed again into the accounts, and the mistakes come out at VAT time.",
  },
  {
    Icon: Receipt,
    title: "Several subscriptions that don't connect",
    desc: "A till, an accounting package, a payroll service and a rota app, each paid for separately and none sharing data.",
  },
  {
    Icon: CalendarClock,
    title: "Staff hours on paper or in a spreadsheet",
    desc: "Rotas, attendance and holidays sit apart from payroll, so every pay run starts with collecting numbers.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan-ink) mb-3">Sound familiar?</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-4">
            Running a business across four tools that don&apos;t talk to each other
          </h2>
          <p className="text-lg text-(--color-muted) leading-[1.7]">
            The gap between them gets filled with manual work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-(--color-border) bg-(--color-cream) p-6">
              <div className="w-10 h-10 rounded-xl bg-(--color-error)/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-(--color-error)" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-(--color-deep-blue) mb-2">{title}</h3>
              <p className="text-sm text-(--color-text) leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
