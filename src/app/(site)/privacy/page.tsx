import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "OpesFlux privacy policy — how we collect, use, and protect your data under UK GDPR.",
  alternates: { canonical: "https://opesflux.devsandvisuals.com/privacy" },
};

const sections = [
  { id: "who", title: "Who we are", content: "OpesFlux is a product of Devs and Visuals Ltd, a company registered in England and Wales. Our registered address is: [Address placeholder — to be completed by legal team]. When we refer to 'OpesFlux', 'we', 'us', or 'our' in this policy, we mean Devs and Visuals Ltd." },
  { id: "what", title: "What data we collect", content: "We collect information you provide directly when you complete our contact form, register for a demo, or subscribe to our newsletter. This includes your name, email address, company name, phone number, and any information you provide in free-text fields. We also collect usage data through analytics tools when you browse our website." },
  { id: "how", title: "How we use it", content: "We use your personal data to: respond to your enquiries and provide the OpesFlux service; send you product updates, guides, and compliance information (with your consent); improve our website and services; comply with legal and regulatory obligations." },
  { id: "retention", title: "Data retention", content: "We retain contact form submissions for up to 3 years. We retain account data for the duration of your subscription plus 2 years after closure. You can request deletion of your data at any time by emailing hello@opesflux.devsandvisuals.com." },
  { id: "rights", title: "Your rights (UK GDPR)", content: "Under UK GDPR, you have the right to: access the personal data we hold about you; correct inaccurate data; request deletion of your data; restrict or object to processing; data portability; withdraw consent at any time. To exercise any of these rights, contact us at hello@opesflux.devsandvisuals.com." },
  { id: "cookies", title: "Cookies", content: "We use essential cookies to make our site function, and analytics cookies (via Plausible) to understand how visitors use our site. Plausible is GDPR-compliant and does not use personal data or cross-site tracking. You can opt out of analytics cookies via our cookie banner." },
  { id: "third-party", title: "Third-party services", content: "We use Vercel for hosting, Resend for email delivery, and Plausible for analytics. Each of these providers is subject to appropriate data processing agreements. We do not sell your data to any third party." },
  { id: "changes", title: "Changes to this policy", content: "We may update this privacy policy from time to time. When we make significant changes, we will notify you by email if you are a subscriber or display a notice on our website. The date at the top of this page shows when the policy was last updated." },
  { id: "contact", title: "Contact us", content: "If you have any questions about this privacy policy or how we handle your data, please contact our Data Protection contact at hello@opesflux.devsandvisuals.com or write to us at our registered address. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk." },
];

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3">Legal</p>
        <h1 className="text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-(--color-muted) mb-10">Last updated: 30 April 2026</p>

        {/* Table of contents */}
        <div className="bg-(--color-cream) rounded-2xl border border-(--color-border) p-6 mb-12">
          <p className="text-sm font-semibold text-(--color-deep-blue) mb-3">On this page</p>
          <ol className="space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-(--color-cyan) hover:underline underline-offset-4">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-(--color-deep-blue) mb-4">{s.title}</h2>
              <p className="text-(--color-text) leading-[1.8]">{s.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
