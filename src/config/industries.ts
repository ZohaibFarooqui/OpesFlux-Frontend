export type IndustryFeature = {
  icon: string;
  title: string;
  desc: string;
};

export type IndustryStat = {
  value: string;
  label: string;
};

export type Industry = {
  name: string;
  slug: string;
  icon: string;
  shortDesc: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  challenges: string[];
  features: IndustryFeature[];
  stats: IndustryStat[];
  testimonial: {
    quote: string;
    author: string;
  };
  bulletPoints: string[];
};

export const INDUSTRIES: Record<string, Industry> = {
  retail: {
    name: "Retail",
    slug: "retail",
    icon: "Store",
    shortDesc: "POS, stock, and loyalty for shops of any size",
    hero: {
      eyebrow: "For retailers worldwide",
      title: "Run your shop in flow — from till to reports.",
      description:
        "Whether you run one corner shop or a chain of boutiques, OpesFlux brings your POS, stock, and accounting into one platform built for retail businesses everywhere.",
    },
    challenges: [
      "Stock counts that never match the till",
      "Returns and refunds that break your margins",
      "Tax and reports buried in spreadsheets",
      "No visibility across multiple locations",
    ],
    features: [
      {
        icon: "ScanLine",
        title: "Lightning-fast POS",
        desc: "Barcode scanning, split payments, gift cards, and offline mode. Your tills never stop.",
      },
      {
        icon: "Package",
        title: "Real-time inventory",
        desc: "Live stock levels per shop. Auto-reorder when stock runs low. Inter-branch transfers in two clicks.",
      },
      {
        icon: "Tag",
        title: "Loyalty & promotions",
        desc: "Built-in customer loyalty programme. Run flash sales and discounts across all locations.",
      },
      {
        icon: "TrendingUp",
        title: "Multi-location reports",
        desc: "Compare branch performance, identify top sellers, and spot trends — all from one dashboard.",
      },
    ],
    stats: [
      { value: "47%", label: "of retailers globally cite inventory as their #1 operational pain" },
      { value: "$1.8T", label: "in retail inventory distortion costs worldwide each year" },
    ],
    testimonial: {
      quote: "Real testimonials coming soon from our retail customers worldwide.",
      author: "Owner, Retail Business (Coming soon)",
    },
    bulletPoints: [
      "Multi-location POS & stock sync",
      "Tax compliance (jurisdiction configurable)",
      "Loyalty & customer profiles",
    ],
  },
  restaurants: {
    name: "Restaurants",
    slug: "restaurants",
    icon: "Utensils",
    shortDesc: "Table management, kitchen flow, and shift payroll",
    hero: {
      eyebrow: "For restaurants & hospitality worldwide",
      title: "From first cover to last order — all in flow.",
      description:
        "OpesFlux keeps your front-of-house and back-of-house working together. Table management, kitchen display, payroll, and tax compliance — all under one roof.",
    },
    challenges: [
      "Orders lost between floor and kitchen",
      "Tips and split bills creating reconciliation headaches",
      "Staff scheduling and payroll across shifts",
      "No insight into table turn and peak times",
    ],
    features: [
      {
        icon: "ClipboardList",
        title: "Table & order management",
        desc: "Seat guests, take orders, and fire to kitchen — all from one screen. No double entry.",
      },
      {
        icon: "Clock",
        title: "Shift & staff management",
        desc: "Rotas, time-clocking, and payroll for all your front-of-house and kitchen staff.",
      },
      {
        icon: "BarChart3",
        title: "Revenue & covers report",
        desc: "See average spend, table turn time, and revenue per hour so you can optimise every service.",
      },
      {
        icon: "Receipt",
        title: "Tax & gratuity handling",
        desc: "Service charge distribution and tax filings handled automatically, per your jurisdiction.",
      },
    ],
    stats: [
      { value: "30%", label: "of restaurant revenue is lost to inefficient operations globally" },
      { value: "34%", label: "of hospitality businesses cite payroll errors as a top cost driver" },
    ],
    testimonial: {
      quote: "Real testimonials coming soon from our restaurant customers worldwide.",
      author: "Manager, Restaurant Group (Coming soon)",
    },
    bulletPoints: [
      "Table & kitchen management",
      "Gratuity & tax compliance",
      "Shift-based payroll",
    ],
  },
  wholesale: {
    name: "Wholesale",
    slug: "wholesale",
    icon: "Truck",
    shortDesc: "Purchase orders, pricing tiers, and logistics",
    hero: {
      eyebrow: "For wholesalers & distributors worldwide",
      title: "Move more stock with less admin.",
      description:
        "From purchase orders to delivery notes, OpesFlux keeps your warehouse, accounting, and customer pricing in sync — so your operation scales without the chaos.",
    },
    challenges: [
      "Customer-specific pricing that's a spreadsheet nightmare",
      "Stock that's committed but not yet invoiced",
      "Purchase orders that don't match what arrived",
      "Aged debtors that nobody is following up",
    ],
    features: [
      {
        icon: "FileText",
        title: "Purchase orders & GRNs",
        desc: "Raise POs, receive against them, and match to supplier invoices automatically.",
      },
      {
        icon: "Users",
        title: "Customer price lists",
        desc: "Set tiered pricing per customer or group. Trade portal for self-service ordering.",
      },
      {
        icon: "Warehouse",
        title: "Warehouse & bin locations",
        desc: "Pick lists, bin locations, and batch tracking for perishable or serial-numbered goods.",
      },
      {
        icon: "TrendingDown",
        title: "Aged debtors & credit control",
        desc: "Automated statements, credit limits, and overdue alerts keep your cash flow healthy.",
      },
    ],
    stats: [
      { value: "62%", label: "of wholesalers globally still use manual or spreadsheet-based ordering" },
      { value: "$950B", label: "in working capital tied up in wholesale supply chains worldwide" },
    ],
    testimonial: {
      quote: "Real testimonials coming soon from our wholesale customers worldwide.",
      author: "Director, Distribution Company (Coming soon)",
    },
    bulletPoints: [
      "Purchase orders & supplier management",
      "Customer price tiers",
      "Aged debtors & credit control",
    ],
  },
  construction: {
    name: "Construction",
    slug: "construction",
    icon: "HardHat",
    shortDesc: "Job costing, subcontractors, and compliance",
    hero: {
      eyebrow: "For construction businesses worldwide",
      title: "Build projects, not admin headaches.",
      description:
        "OpesFlux handles your subcontractor payments, job costing, and site purchases — so you can focus on the work, not the paperwork.",
    },
    challenges: [
      "Compliance deductions calculated incorrectly or missed",
      "Job costs that run over budget without anyone noticing",
      "Subcontractors chasing invoices you can't reconcile",
      "Materials purchases scattered across cards and accounts",
    ],
    features: [
      {
        icon: "HardHat",
        title: "Compliance & deductions",
        desc: "Calculate statutory deductions for subcontractors automatically, per your local rules.",
      },
      {
        icon: "Calculator",
        title: "Job costing",
        desc: "Assign every purchase, timesheet, and invoice to a job. See profit per project in real time.",
      },
      {
        icon: "Users",
        title: "Subcontractor management",
        desc: "Track all subs, their verification status, payment history, and outstanding amounts.",
      },
      {
        icon: "FileCheck",
        title: "Site purchase orders",
        desc: "Authorise and track material orders per site. Match deliveries and invoices automatically.",
      },
    ],
    stats: [
      { value: "58%", label: "of construction firms globally report job cost overruns every year" },
      { value: "92%", label: "of construction businesses still manage compliance manually" },
    ],
    testimonial: {
      quote: "Real testimonials coming soon from our construction customers worldwide.",
      author: "Owner, Construction Company (Coming soon)",
    },
    bulletPoints: [
      "Statutory compliance & deductions",
      "Job costing & project P&L",
      "Site purchase orders",
    ],
  },
  manufacturing: {
    name: "Manufacturing",
    slug: "manufacturing",
    icon: "Factory",
    shortDesc: "Production runs, BOMs, and supply chain control",
    hero: {
      eyebrow: "For manufacturers worldwide",
      title: "From raw material to finished goods — in flow.",
      description:
        "OpesFlux connects your production floor to your back office. Bills of materials, production runs, supplier management, and cost tracking in one unified platform.",
    },
    challenges: [
      "Production schedules disconnected from inventory",
      "Raw material shortages causing costly downtime",
      "No visibility of actual vs standard cost per product",
      "Quality holds and batch issues going untracked",
    ],
    features: [
      {
        icon: "Factory",
        title: "Bills of materials (BOM)",
        desc: "Define multi-level BOMs for every product. Manage variants, sub-assemblies, and by-products.",
      },
      {
        icon: "Layers",
        title: "Production run management",
        desc: "Schedule runs, issue materials, record labour, and complete works orders with full traceability.",
      },
      {
        icon: "Package",
        title: "Raw material inventory",
        desc: "Live stock of raw materials, WIP, and finished goods. Auto-trigger purchase orders on shortage.",
      },
      {
        icon: "TrendingUp",
        title: "Cost analysis",
        desc: "Compare actual vs standard cost per production run. Identify waste and margin leakage instantly.",
      },
    ],
    stats: [
      { value: "23%", label: "of manufacturing cost is wasted on unplanned downtime and rework globally" },
      { value: "68%", label: "of manufacturers cite poor inventory visibility as their biggest pain point" },
    ],
    testimonial: {
      quote: "Real testimonials coming soon from our manufacturing customers worldwide.",
      author: "Operations Manager, Manufacturing Company (Coming soon)",
    },
    bulletPoints: [
      "Bills of materials & production runs",
      "Raw material & WIP inventory",
      "Cost variance & waste analysis",
    ],
  },
  "professional-services": {
    name: "Professional Services",
    slug: "professional-services",
    icon: "Briefcase",
    shortDesc: "Time tracking, retainers, and project billing",
    hero: {
      eyebrow: "For professional services firms worldwide",
      title: "Bill every hour. Miss no deadline.",
      description:
        "From consultancies to law firms, OpesFlux tracks time, generates invoices, manages your team, and handles compliance — all in one platform.",
    },
    challenges: [
      "Time logged in spreadsheets that never becomes an invoice",
      "Contractor compliance creating uncertainty",
      "WIP that's hard to value at month end",
      "No visibility of utilisation and recovery rates",
    ],
    features: [
      {
        icon: "Clock",
        title: "Time tracking & billing",
        desc: "Log time against clients and projects. Auto-generate invoices at billing milestones.",
      },
      {
        icon: "FileText",
        title: "Contractor compliance",
        desc: "Manage contractor classifications and compliance documentation per your local regulations.",
      },
      {
        icon: "PieChart",
        title: "Utilisation & WIP reports",
        desc: "See team utilisation, WIP value, and recovery rates updated daily.",
      },
      {
        icon: "CreditCard",
        title: "Retainer management",
        desc: "Manage monthly retainer clients, track hours used, and roll over unused time.",
      },
    ],
    stats: [
      { value: "30%", label: "of billable time goes uncaptured in professional services firms globally" },
      { value: "71%", label: "of consultancies globally fail to track time accurately against projects" },
    ],
    testimonial: {
      quote: "Real testimonials coming soon from our professional services customers worldwide.",
      author: "Director, Consultancy (Coming soon)",
    },
    bulletPoints: [
      "Time tracking & milestone billing",
      "Contractor compliance tools",
      "WIP & utilisation reports",
    ],
  },
};

export const INDUSTRIES_LIST = Object.values(INDUSTRIES);
