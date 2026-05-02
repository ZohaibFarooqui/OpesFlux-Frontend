"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahrain","Bangladesh","Belarus","Belgium","Benin","Bolivia","Bosnia and Herzegovina","Botswana","Brazil",
  "Bulgaria","Burkina Faso","Cambodia","Cameroon","Canada","Chile","China","Colombia","Congo","Costa Rica",
  "Croatia","Cuba","Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia",
  "Ethiopia","Finland","France","Georgia","Germany","Ghana","Greece","Guatemala","Honduras","Hungary",
  "India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan",
  "Kenya","Kuwait","Latvia","Lebanon","Libya","Lithuania","Luxembourg","Malaysia","Mali","Malta","Mexico",
  "Moldova","Morocco","Mozambique","Myanmar","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria",
  "North Korea","Norway","Oman","Pakistan","Palestine","Panama","Paraguay","Peru","Philippines","Poland",
  "Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Singapore","Slovakia",
  "Slovenia","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Sweden",
  "Switzerland","Syria","Taiwan","Tanzania","Thailand","Tunisia","Turkey","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam",
  "Yemen","Zambia","Zimbabwe","Other",
];

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().min(1, "Please enter your company name"),
  phone: z.string().optional(),
  country: z.string().min(1, "Please select your country"),
  industry: z.string().min(1, "Please select your industry"),
  teamSize: z.string().min(1, "Please select your team size"),
  message: z.string().max(500).optional(),
  hearAbout: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, "You must consent to continue"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm({ plan }: { plan?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [charCount, setCharCount] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, plan }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="text-2xl font-semibold text-(--color-deep-blue) mb-2">You&apos;re booked in!</h3>
        <p className="text-(--color-muted) mb-6">We&apos;ll be in touch within one business day to confirm your demo time.</p>
        <div className="bg-(--color-cream) rounded-2xl p-4">
          <p className="text-sm text-(--color-muted)">Or book directly at a time that works for you:</p>
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/opesflux/demo"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-(--color-cyan) font-medium hover:underline"
          >
            Open Calendly →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-(--color-text-strong) mb-1.5">
            Full name <span className="text-(--color-error)">*</span>
          </label>
          <Input id="fullName" {...register("fullName")} placeholder="Jane Smith" autoComplete="name" />
          {errors.fullName && <p className="text-xs text-(--color-error) mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-(--color-text-strong) mb-1.5">
            Work email <span className="text-(--color-error)">*</span>
          </label>
          <Input id="email" type="email" {...register("email")} placeholder="jane@company.com" autoComplete="email" />
          {errors.email && <p className="text-xs text-(--color-error) mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-(--color-text-strong) mb-1.5">
            Company name <span className="text-(--color-error)">*</span>
          </label>
          <Input id="company" {...register("company")} placeholder="Acme Ltd" autoComplete="organization" />
          {errors.company && <p className="text-xs text-(--color-error) mt-1">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-(--color-text-strong) mb-1.5">
            Phone <span className="text-(--color-muted) font-normal">(optional)</span>
          </label>
          <Input id="phone" type="tel" {...register("phone")} placeholder="+1 555 000 0000" autoComplete="tel" />
        </div>
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-(--color-text-strong) mb-1.5">
          Country <span className="text-(--color-error)">*</span>
        </label>
        <Select onValueChange={(v) => setValue("country", v, { shouldValidate: true })}>
          <SelectTrigger id="country">
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent className="max-h-64">
            {COUNTRIES.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.country && <p className="text-xs text-(--color-error) mt-1">{errors.country.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-(--color-text-strong) mb-1.5">
            Industry <span className="text-(--color-error)">*</span>
          </label>
          <Select onValueChange={(v) => setValue("industry", v, { shouldValidate: true })}>
            <SelectTrigger id="industry">
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="restaurants">Restaurants & Hospitality</SelectItem>
              <SelectItem value="wholesale">Wholesale & Distribution</SelectItem>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="professional-services">Professional Services</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.industry && <p className="text-xs text-(--color-error) mt-1">{errors.industry.message}</p>}
        </div>

        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-(--color-text-strong) mb-1.5">
            Team size <span className="text-(--color-error)">*</span>
          </label>
          <Select onValueChange={(v) => setValue("teamSize", v, { shouldValidate: true })}>
            <SelectTrigger id="teamSize">
              <SelectValue placeholder="Select team size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-3">1–3</SelectItem>
              <SelectItem value="4-10">4–10</SelectItem>
              <SelectItem value="11-50">11–50</SelectItem>
              <SelectItem value="51-200">51–200</SelectItem>
              <SelectItem value="200+">200+</SelectItem>
            </SelectContent>
          </Select>
          {errors.teamSize && <p className="text-xs text-(--color-error) mt-1">{errors.teamSize.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-(--color-text-strong) mb-1.5">
          What are you hoping to solve? <span className="text-(--color-muted) font-normal">(optional)</span>
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your biggest operational challenge..."
          className="min-h-25"
          maxLength={500}
          onChange={(e) => setCharCount(e.target.value.length)}
        />
        <p className="text-xs text-(--color-muted) mt-1 text-right">{charCount}/500</p>
      </div>

      <div>
        <label htmlFor="hearAbout" className="block text-sm font-medium text-(--color-text-strong) mb-1.5">
          How did you hear about us? <span className="text-(--color-muted) font-normal">(optional)</span>
        </label>
        <Select onValueChange={(v) => setValue("hearAbout", v)}>
          <SelectTrigger id="hearAbout">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="google">Google search</SelectItem>
            <SelectItem value="social">Social media</SelectItem>
            <SelectItem value="referral">Referred by someone</SelectItem>
            <SelectItem value="blog">Blog / article</SelectItem>
            <SelectItem value="event">Event or conference</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start gap-3 p-4 rounded-xl bg-(--color-cream) border border-(--color-border)">
        <Checkbox
          id="consent"
          onCheckedChange={(checked) => setValue("consent", checked === true, { shouldValidate: true })}
          className="mt-0.5"
        />
        <label htmlFor="consent" className="text-sm text-(--color-text) leading-relaxed cursor-pointer">
          I consent to OpesFlux contacting me about my enquiry and storing my details in accordance with the{" "}
          <Link href="/privacy" className="text-(--color-cyan) hover:underline">Privacy Policy</Link>.{" "}
          <span className="text-(--color-error)">*</span>
        </label>
      </div>
      {errors.consent && <p className="text-xs text-(--color-error)">{errors.consent.message}</p>}

      {status === "error" && (
        <div className="p-4 rounded-xl bg-error/10 border border-error/20 text-sm text-(--color-error)">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Booking your demo..." : "Book my demo"}
      </Button>

      <p className="text-xs text-center text-(--color-muted)">
        Free 7-day trial after demo · No credit card required · Any currency
      </p>
    </form>
  );
}
