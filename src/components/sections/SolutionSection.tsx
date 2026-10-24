import React from "react";
import Link from "next/link";
import { ShoppingCart, Package, Truck, Calculator, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    name: "Point of sale",
    desc: "Browser tills with barcode scanning and receipts that keep selling when the internet drops, then sync when it's back.",
    href: "/features#pos",
  },
  {
    icon: Package,
    name: "Stock control",
    desc: "Stock per shop or warehouse, transfers between them, low-stock alerts, and a movement history that can't be edited.",
    href: "/features#inventory",
  },
  {
    icon: Truck,
    name: "Purchasing",
    desc: "Purchase orders with approval, goods received notes and supplier payments, all against the same stock.",
    href: "/features#purchasing",
  },
  {
    icon: Calculator,
    name: "Invoicing and accounts",
    desc: "Quotes, orders, invoices and credit control, with double-entry accounts, bank feeds and VAT return figures.",
    href: "/features#accounting",
  },
  {
    icon: Users,
    name: "Staff and payroll",
    desc: "Rotas, attendance, leave and payroll with UK PAYE, National Insurance and auto-enrolment pensions.",
    href: "/features#payroll",
  },
  {
    icon: BarChart3,
    name: "Reports",
    desc: "Live dashboards and sales, stock, P&L and balance sheet reports, with every change kept in an audit log.",
    href: "/features#accounting",
  },
];

export function SolutionSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-(--color-cream)">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan-ink) mb-3">One system</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight">
            Everything from the till to the payslip, sharing the same numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, name, desc, href }) => (
            <div
              key={name}
              className="group rounded-2xl border border-(--color-border) bg-white p-6 hover:-translate-y-1 hover:border-(--color-cyan)/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-(--color-cyan)/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-(--color-deep-blue)" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-(--color-deep-blue) mb-2">{name}</h3>
              <p className="text-sm text-(--color-text) leading-relaxed mb-4">{desc}</p>
              <Link href={href} className="text-sm font-medium text-(--color-deep-blue) underline underline-offset-4 hover:text-(--color-cyan)">
                More about {name.toLowerCase()}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
