import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About OpesFlux — Built for Businesses Everywhere",
  description:
    "OpesFlux is a product of Devs and Visuals, a software studio building tools that work the way real businesses do — anywhere in the world. Learn our story.",
  alternates: { canonical: "https://opesflux.devsandvisuals.com/about" },
};

const values = [
  {
    title: "Global-First",
    desc: "Built for businesses worldwide, not adapted from single-market software. Tax, payroll, and compliance are jurisdiction-configurable from day one.",
  },
  {
    title: "Modular by Design",
    desc: "Pay only for what you need. Start with POS and inventory. Add payroll and accounting when you're ready. No forced bundles.",
  },
  {
    title: "Truly Unified",
    desc: "One database, one login, one source of truth. No integrations to break. No data discrepancies between systems.",
  },
  {
    title: "Customer-Led",
    desc: "Every feature on our roadmap comes from real business feedback across every market we serve. We build what you need, not what looks good on a demo.",
  },
];

const team = [
  { name: "James Okafor", role: "CEO & Co-founder", initial: "J" },
  { name: "Sarah Chen", role: "Head of Compliance", initial: "S" },
  { name: "Marcus Webb", role: "CTO", initial: "M" },
  { name: "Priya Patel", role: "Head of Product", initial: "P" },
  { name: "Tom Harrison", role: "Head of Engineering", initial: "T" },
  { name: "Amelia Grant", role: "Head of Customer Success", initial: "A" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3">Our story</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-6">
            We built OpesFlux because businesses everywhere deserved better.
          </h1>
        </div>
      </div>

      {/* Story */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-lg text-(--color-text) leading-[1.8]">
          <p>
            OpesFlux was founded by a team who spent years watching businesses across the world struggle with software designed for one market, one currency, and one tax system. The adaptations were always clunky. The compliance gaps were always expensive.
          </p>
          <p>
            We started with a simple question: what would an ERP system look like if it was built from scratch for global businesses — with jurisdiction-configurable tax, multi-currency payroll, and GDPR-ready data tools baked in from day one, not bolted on?
          </p>
          <p>
            OpesFlux is our answer. A platform where a retailer in Dubai, a restaurant group in Manchester, and a consultancy in Karachi can all run their business without switching between tools — because the POS, the accounting, and the payroll are genuinely unified, not just integrated.
          </p>
          <p>
            We&apos;re a product of Devs and Visuals, a software studio building tools that work the way real businesses do — wherever they operate.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-(--color-cream)">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-(--color-deep-blue) tracking-tight text-center mb-12">What we stand for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-(--color-border) p-6">
                <h3 className="text-lg font-semibold text-(--color-deep-blue) mb-2">{v.title}</h3>
                <p className="text-sm text-(--color-muted) leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      {/* <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-(--color-deep-blue) tracking-tight text-center mb-12">Meet the team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-(--color-deep-blue) flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  {member.initial}
                </div>
                <div className="text-sm font-semibold text-(--color-deep-blue)">{member.name}</div>
                <div className="text-xs text-(--color-muted) mt-0.5">{member.role}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-(--color-muted) mt-8">Team photos and full bios coming soon.</p>
        </div>
      </div> */}

      {/* Parent company */}
      <div className="py-16 bg-(--color-cream)">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-(--color-muted) leading-[1.8]">
            OpesFlux is a product of{" "}
            <a href="https://devsandvisuals.com" target="_blank" rel="noopener noreferrer" className="text-(--color-cyan) hover:underline font-medium">
              Devs and Visuals
            </a>{" "}
            — a software studio building tools that work the way real businesses do.
          </p>
        </div>
      </div>

      <CTASection title="Join our journey" subtitle="We're building the platform businesses worldwide have always needed. Book a demo and tell us what you'd want from it." />
    </>
  );
}
