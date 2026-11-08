export type ToolFaq = { q: string; a: string };
export type ToolSection = { heading: string; body: string[] };

export type Tool = {
  slug: string;
  name: string;
  summary: string;
  seo: { title: string; description: string };
  h1: string;
  intro: string;
  sections: ToolSection[];
  faqs: ToolFaq[];
  opesflux: string;
  updated: string;
};

export const TOOLS: Tool[] = [
  {
    slug: "vat-calculator",
    name: "VAT calculator",
    summary: "Add VAT to a price or take it off, at 20%, 5%, 0% or a rate you enter.",
    seo: {
      title: "UK VAT Calculator: Add or Remove VAT",
      description:
        "Free UK VAT calculator. Add VAT to a net price or remove it from a gross price at 20%, 5% or any rate, and see the formula. No sign-up needed.",
    },
    h1: "UK VAT calculator",
    intro: "Add VAT to a price, or work out how much VAT is inside a price that already includes it.",
    sections: [
      {
        heading: "How to work out VAT",
        body: [
          "To add VAT, multiply the net price by 1 plus the rate. At 20%, a £100 net price becomes £100 × 1.2 = £120.",
          "To remove VAT, divide the gross price by 1 plus the rate. At 20%, a £120 gross price is £120 ÷ 1.2 = £100 net, so the VAT is £20.",
        ],
      },
      {
        heading: "The most common VAT mistake",
        body: [
          "Taking 20% off a gross price does not remove the VAT. 20% of £120 is £24, which would leave £96, but the correct net price is £100.",
          "The VAT inside a gross price at 20% is one sixth of it, because £20 is one sixth of £120.",
        ],
      },
      {
        heading: "UK VAT rates",
        body: [
          "The UK has a standard rate of 20%, a reduced rate of 5% and a zero rate. Which one applies depends on what you sell, and some goods and services are exempt.",
          "HMRC publishes the current rates and the goods and services each one covers on GOV.UK. Check there, or ask your accountant, if you are unsure about a product.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I calculate 20% VAT on a price?",
        a: "Multiply the net price by 0.2 to get the VAT, or by 1.2 to get the price including VAT. For example, £50 net has £10 VAT and comes to £60.",
      },
      {
        q: "How do I take VAT off a price?",
        a: "Divide the gross price by 1.2 at the 20% rate, or by 1.05 at the 5% rate. The answer is the net price, and the difference is the VAT.",
      },
      {
        q: "What is the difference between zero-rated and exempt?",
        a: "Both charge no VAT to the customer. Zero-rated sales are still taxable sales at 0%, while exempt sales are outside the VAT system, which can affect how much VAT a business can reclaim.",
      },
    ],
    opesflux: "OpesFlux works out VAT on every sale and invoice, and prepares your VAT return figures for your accountant.",
    updated: "2026-11-08",
  },
  {
    slug: "profit-margin-calculator",
    name: "Profit margin calculator",
    summary: "See margin and markup from cost and selling price, or find the price for a target margin.",
    seo: {
      title: "Profit Margin and Markup Calculator",
      description:
        "Free profit margin calculator for UK retailers and wholesalers. Get margin and markup from cost and price, or the price needed to hit a target margin.",
    },
    h1: "Profit margin and markup calculator",
    intro: "Enter what an item costs and what you sell it for, or set the margin you want and get the price to charge.",
    sections: [
      {
        heading: "Margin and markup are not the same",
        body: [
          "Margin is profit as a percentage of the selling price. Markup is profit as a percentage of the cost.",
          "An item that costs £60 and sells for £100 makes £40 profit. That is a 40% margin but a 66.7% markup.",
        ],
      },
      {
        heading: "The formulas",
        body: [
          "Margin % = (price − cost) ÷ price × 100.",
          "Markup % = (price − cost) ÷ cost × 100.",
          "Price for a target margin = cost ÷ (1 − margin ÷ 100). For a 40% margin on a £60 cost, that is £60 ÷ 0.6 = £100.",
        ],
      },
      {
        heading: "Leave VAT out of it",
        body: [
          "If you are VAT registered, use cost and selling price excluding VAT. The VAT you charge is not yours to keep, so including it makes your margin look better than it is.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does adding 40% to my cost not give a 40% margin?",
        a: "Adding 40% is a markup, worked out on the cost. A £60 item marked up by 40% sells for £84, and £24 profit on £84 is a margin of about 28.6%.",
      },
      {
        q: "Can a margin be more than 100%?",
        a: "No. Margin is a share of the selling price, so it can never reach 100% unless the item cost nothing. Markup has no upper limit.",
      },
      {
        q: "Should margin include delivery and other costs?",
        a: "This calculator gives the margin on whatever cost you enter. Add carriage or packaging per unit to the cost if you want them included.",
      },
    ],
    opesflux: "OpesFlux keeps your products, purchases and sales in one system, so costs and selling prices sit side by side.",
    updated: "2026-11-08",
  },
  {
    slug: "reorder-point-calculator",
    name: "Reorder point calculator",
    summary: "Work out the stock level at which to reorder, including a safety stock buffer.",
    seo: {
      title: "Reorder Point and Safety Stock Calculator",
      description:
        "Free reorder point calculator. Enter daily sales and supplier lead time to see when to reorder and how much safety stock to hold. No sign-up needed.",
    },
    h1: "Reorder point and safety stock calculator",
    intro: "Find the stock level that should trigger your next order, so a line doesn't run out before the delivery arrives.",
    sections: [
      {
        heading: "How the reorder point works",
        body: [
          "The reorder point is the stock you will sell while waiting for a delivery, plus a buffer for when things go wrong.",
          "Reorder point = (average daily sales × average lead time) + safety stock.",
        ],
      },
      {
        heading: "How safety stock is worked out here",
        body: [
          "This tool uses a common rule of thumb: safety stock = (highest daily sales × longest lead time) − (average daily sales × average lead time).",
          "It covers your busiest days and slowest deliveries happening together, which makes it cautious. If stock is expensive to hold or goes out of date, you may choose to hold less.",
        ],
      },
      {
        heading: "An example",
        body: [
          "You sell an average of 10 units a day and delivery takes 5 days, so you sell 50 units while waiting. On your busiest days you sell 15, and your slowest delivery took 8 days, so the worst case is 120 units.",
          "Safety stock is 120 − 50 = 70 units, and the reorder point is 120 units.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a reorder point?",
        a: "It is the stock level at which you should place a new order, so the delivery arrives before you run out.",
      },
      {
        q: "How do I find my lead time?",
        a: "Count the days from placing an order to having the goods ready to sell, across your last few orders from that supplier. Use the average and the longest.",
      },
      {
        q: "How often should I recalculate it?",
        a: "Whenever sales or a supplier's delivery times change noticeably, and before seasonal peaks. A figure based on a quiet month will be too low for a busy one.",
      },
    ],
    opesflux: "OpesFlux tracks stock per location and sends low-stock alerts, so you can see which lines need reordering.",
    updated: "2026-11-08",
  },
  {
    slug: "invoice-generator",
    name: "Invoice generator",
    summary: "Fill in a UK invoice with VAT and save it as a PDF, right in your browser.",
    seo: {
      title: "Free UK Invoice Generator with VAT",
      description:
        "Create a UK invoice with VAT in your browser and save it as a PDF. Free, with no sign-up, and what you type stays on your device.",
    },
    h1: "Free UK invoice generator",
    intro: "Fill in the details, check the preview, then print it or save it as a PDF. What you type stays in your browser and isn't sent to us.",
    sections: [
      {
        heading: "What a UK invoice must include",
        body: [
          "A basic invoice needs a unique invoice number, your business name, address and contact details, your customer's name and address, the date, a description of what you sold, the amount charged, and the total due.",
          "If you are VAT registered, a VAT invoice also needs your VAT registration number, the time of supply if it differs from the invoice date, the rate of VAT on each item, and the total VAT. GOV.UK lists the full requirements.",
        ],
      },
      {
        heading: "How to save your invoice as a PDF",
        body: [
          "Press Print or save as PDF, then choose Save as PDF as the destination in your browser's print window.",
          "Nothing is stored, so save your PDF before you close the page.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this invoice generator really free?",
        a: "Yes. There is no sign-up and no limit on how many invoices you make.",
      },
      {
        q: "Do I need to show VAT if I am not VAT registered?",
        a: "No, and you must not charge VAT unless you are registered. Set the VAT rate on each line to 0% / No VAT and leave the VAT number blank.",
      },
      {
        q: "Do you keep the details I enter?",
        a: "No. The invoice is built in your browser and what you type isn't sent to our servers, so it is gone when you close the page.",
      },
    ],
    opesflux: "OpesFlux raises invoices from your sales orders, sends overdue reminders and shows who owes you what.",
    updated: "2026-11-08",
  },
];

export const TOOLS_BY_SLUG: Record<string, Tool> = Object.fromEntries(TOOLS.map((t) => [t.slug, t]));
