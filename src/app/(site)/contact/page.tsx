import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Copy } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Demo — Contact OpesFlux",
  description:
    "Book a free 20-minute demo of OpesFlux. We'll show you exactly what it looks like for your industry — no pressure, no commitment.",
  alternates: { canonical: "https://opesflux.devsandvisuals.com/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; industry?: string }>;
}) {
  const sp = await searchParams;

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — form */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-(--color-cyan) mb-3">Let&apos;s talk</p>
            <h1 className="text-4xl font-semibold text-(--color-deep-blue) leading-tight tracking-tight mb-3">
              Book a free demo
            </h1>
            <p className="text-lg text-(--color-muted) leading-[1.7] mb-8">
              20 minutes, no pressure. We&apos;ll show you exactly what OpesFlux does for a business like yours.
            </p>
            <ContactForm plan={sp.plan} />
          </div>

          {/* Right — direct contact */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-(--color-cream) rounded-2xl border border-(--color-border) p-8">
              <h2 className="text-xl font-semibold text-(--color-deep-blue) mb-6">Or reach us directly</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-(--color-cyan)/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-(--color-cyan)" />
                  </div>
                  <div>
                    <div className="text-xs text-(--color-muted) mb-0.5">Email</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-(--color-deep-blue) hover:text-(--color-cyan) transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-(--color-cyan)/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-(--color-cyan)" />
                  </div>
                  <div>
                    <div className="text-xs text-(--color-muted) mb-0.5">Phone / WhatsApp</div>
                    <a href={`tel:${siteConfig.phone}`} className="text-sm font-medium text-(--color-deep-blue) hover:text-(--color-cyan) transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-(--color-cyan)/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-(--color-cyan)" />
                  </div>
                  <div>
                    <div className="text-xs text-(--color-muted) mb-0.5">Address</div>
                    <p className="text-sm text-(--color-text)">{siteConfig.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-(--color-border)">
                <p className="text-sm text-(--color-muted) mb-3">Book directly at a time that works:</p>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-(--color-cyan) hover:underline underline-offset-4"
                >
                  Open Calendly →
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-(--color-deep-blue) p-6 text-white">
              <div className="text-4xl font-bold text-(--color-cyan) mb-1">7 days</div>
              <div className="font-semibold mb-1">Free trial after your demo</div>
              <div className="text-sm text-white/70">Full platform access. No credit card required.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
