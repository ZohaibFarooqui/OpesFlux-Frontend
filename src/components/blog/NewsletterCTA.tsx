"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="bg-(--color-deep-blue) rounded-2xl p-8 md:p-12 text-center">
      <h3 className="text-2xl font-semibold text-white mb-2">Get UK SME insights in your inbox</h3>
      <p className="text-(--color-cream)/70 mb-6">Practical guides on compliance, payroll, inventory, and growing your business.</p>
      {submitted ? (
        <p className="text-(--color-cyan) font-medium">Thanks! You&apos;re on the list.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-white"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      )}
      <p className="text-xs text-(--color-cream)/40 mt-4">Unsubscribe anytime · No spam · GDPR compliant</p>
    </div>
  );
}
