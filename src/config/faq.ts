export type Faq = { q: string; a: string };

// One source for the visible FAQ and the FAQPage structured data, so the two
// always match (Google requires it). Every answer is checked against the
// product's own code and the verified product knowledge file.
export const PRICING_FAQS: Faq[] = [
  {
    q: "Do I need to install anything?",
    a: "No. OpesFlux runs in the web browser on a desktop, laptop, tablet or phone. You sign in at app.devsandvisuals.com.",
  },
  {
    q: "Does the till keep working if the internet drops?",
    a: "Yes. The point of sale keeps taking sales offline and syncs them automatically when the connection comes back.",
  },
  {
    q: "What happens during the free trial?",
    a: "After a demo you get 7 days of free access. No credit card is needed to start.",
  },
  {
    q: "Do you charge per user or per location?",
    a: "Each plan includes a number of both. Starter: 1 location and 3 users. Growth: up to 5 locations and 15 users. Enterprise: unlimited locations and users.",
  },
  {
    q: "Does OpesFlux file my VAT return with HMRC?",
    a: "No. OpesFlux works out VAT on every sale and purchase and prepares your VAT return figures and VAT reports. Submitting the return under Making Tax Digital is done by your accountant or through MTD bridging software.",
  },
  {
    q: "Does OpesFlux run UK payroll?",
    a: "Yes. It calculates PAYE income tax, National Insurance and auto-enrolment pension contributions and produces payslips. It does not send RTI submissions to HMRC, so those are sent by you or your payroll bureau. Payroll rules are also available for Japan, Pakistan and the United States.",
  },
  {
    q: "Can I bring my existing data across?",
    a: "Yes. Products, customers and suppliers can be imported from CSV spreadsheets, which most tills and accounting packages can export.",
  },
  {
    q: "Does it connect to Shopify or WooCommerce?",
    a: "Yes. Online orders come into OpesFlux and stock levels are pushed back to your Shopify or WooCommerce shop, so you work from one stock figure.",
  },
  {
    q: "Can my accountant see my books?",
    a: "Yes. You can give your accountant a read-only login covering your accounts, bank, invoices, customers, suppliers, stock and reports.",
  },
  {
    q: "Can I use OpesFlux outside the UK?",
    a: "Yes. Each company has its own currency, tax rates, tax name (VAT, GST or sales tax), time zone and date format. Prices on this page are in GBP.",
  },
  {
    q: "How is my data kept separate and safe?",
    a: "Every company's data is isolated at database level, so one business can never see another's. Every change to a record is written to an audit log you can review.",
  },
];
