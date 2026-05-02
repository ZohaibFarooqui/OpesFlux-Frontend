import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "OpesFlux terms of service — the agreement governing use of the OpesFlux platform.",
  alternates: { canonical: "https://opesflux.devsandvisuals.com/terms" },
};

const sections = [
  { id: "acceptance", title: "Acceptance of terms", content: "By accessing or using OpesFlux, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service." },
  { id: "service", title: "Description of service", content: "OpesFlux provides a cloud-based ERP and POS platform for UK businesses. The service is provided on a subscription basis. Features available to you depend on your subscription tier as described on our pricing page." },
  { id: "accounts", title: "Accounts and registration", content: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorised use of your account." },
  { id: "payment", title: "Payment and billing", content: "Subscription fees are billed in advance on a monthly or annual basis. All prices are in GBP and include VAT where applicable. We reserve the right to change pricing with 30 days' notice. Failure to pay may result in suspension or termination of your account." },
  { id: "data", title: "Your data", content: "You retain ownership of all data you input into OpesFlux. We process your data as a data processor on your behalf in accordance with our Data Processing Agreement and Privacy Policy. We will not access your data except to provide the service or as required by law." },
  { id: "availability", title: "Service availability", content: "We aim to maintain 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance. We are not liable for any downtime caused by circumstances beyond our reasonable control." },
  { id: "termination", title: "Termination", content: "You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period. We reserve the right to terminate accounts that violate these terms or engage in fraudulent activity." },
  { id: "liability", title: "Limitation of liability", content: "To the maximum extent permitted by law, Devs and Visuals Ltd shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability to you shall not exceed the subscription fees paid by you in the three months prior to the claim." },
  { id: "governing", title: "Governing law", content: "These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales." },
  { id: "contact", title: "Contact", content: "For any questions about these Terms, please contact hello@opesflux.devsandvisuals.com." },
];

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3">Legal</p>
        <h1 className="text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-(--color-muted) mb-10">Last updated: 30 April 2026 · Placeholder — full terms to be reviewed by legal counsel.</p>

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
