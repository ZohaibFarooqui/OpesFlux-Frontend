export const siteConfig = {
  name: "OpesFlux",
  tagline: "Your Work Flow Companion",
  description:
    "OpesFlux is the all-in-one ERP and POS platform for businesses worldwide. POS, inventory, accounting, payroll, and tax compliance in one system. Book a free demo today.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://opesflux.devsandvisuals.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.devsandvisuals.com",
  ogImage: "/og-default.png",
  logo: "/logo.png",
  logoIcon: "/logo.png",
  email: "hello@opesflux.devsandvisuals.com",
  phone: "+44 7490 350688",
  address: "Devs and Visuals Ltd, Kington, England",
  social: {
    linkedin: "https://www.linkedin.com/company/devs-and-visuals/",
    facebook: "https://www.facebook.com/profile.php?id=61571742365103",
    instagram: "https://www.instagram.com/devsandvisuals/",
    twitter: "https://twitter.com/opesflux",
  },
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/opesflux/demo",
  parentCompany: {
    name: "Devs and Visuals",
    url: "https://devsandvisuals.com",
  },
};
