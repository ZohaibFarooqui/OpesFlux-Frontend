import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "OpesFlux — Your Work Flow Companion | Global ERP & POS",
    template: "%s | OpesFlux",
  },
  description:
    "OpesFlux is the all-in-one ERP and POS platform for businesses worldwide. POS, inventory, accounting, payroll, and compliance in one system.",
  openGraph: {
    siteName: "OpesFlux",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <head>
        <OrganizationJsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col text-(--color-text)">
        {children}
      </body>
    </html>
  );
}
