// The sums behind the free tools. Pure functions, so they can be tested alone.
// Money is rounded to pence only at the end of each calculation.

export function roundPence(value: number): number {
  const sign = value < 0 ? -1 : 1;
  return (sign * Math.round((Math.abs(value) + Number.EPSILON) * 100)) / 100;
}

export function formatGBP(value: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
}

export type VatResult = { net: number; vat: number; gross: number };

export function addVat(net: number, ratePct: number): VatResult {
  const vat = roundPence((net * ratePct) / 100);
  return { net: roundPence(net), vat, gross: roundPence(net + vat) };
}

export function removeVat(gross: number, ratePct: number): VatResult {
  const net = roundPence(gross / (1 + ratePct / 100));
  return { net, vat: roundPence(gross - net), gross: roundPence(gross) };
}

export type MarginResult = { profit: number; marginPct: number; markupPct: number };

export function marginFromPrice(cost: number, price: number): MarginResult | null {
  if (price <= 0 || cost <= 0) return null;
  const profit = price - cost;
  return {
    profit: roundPence(profit),
    marginPct: (profit / price) * 100,
    markupPct: (profit / cost) * 100,
  };
}

// The price needed to make a target margin. A margin of 100% or more is impossible.
export function priceForMargin(cost: number, targetMarginPct: number): number | null {
  if (cost <= 0 || targetMarginPct < 0 || targetMarginPct >= 100) return null;
  return roundPence(cost / (1 - targetMarginPct / 100));
}

export type ReorderResult = { leadTimeDemand: number; safetyStock: number; reorderPoint: number };

export function reorderPoint(
  avgDaily: number,
  avgLeadDays: number,
  maxDaily: number,
  maxLeadDays: number
): ReorderResult | null {
  if (avgDaily <= 0 || avgLeadDays <= 0) return null;
  const leadTimeDemand = avgDaily * avgLeadDays;
  // Busiest day and slowest delivery are optional; a figure below the average counts as the average.
  const worstCase = Math.max(maxDaily, avgDaily) * Math.max(maxLeadDays, avgLeadDays);
  const safetyStock = worstCase - leadTimeDemand;
  return {
    leadTimeDemand: Math.ceil(leadTimeDemand),
    safetyStock: Math.ceil(safetyStock),
    reorderPoint: Math.ceil(leadTimeDemand + safetyStock),
  };
}

export type InvoiceLine = { qty: number; unitPrice: number; vatPct: number };

export type InvoiceTotals = {
  net: number;
  vat: number;
  gross: number;
  vatByRate: { ratePct: number; net: number; vat: number }[];
};

// VAT is worked out per rate on the total for that rate, then summed.
export function invoiceTotals(lines: InvoiceLine[]): InvoiceTotals {
  const byRate = new Map<number, number>();
  for (const l of lines) {
    const lineNet = roundPence(l.qty * l.unitPrice);
    byRate.set(l.vatPct, (byRate.get(l.vatPct) ?? 0) + lineNet);
  }
  const vatByRate = [...byRate.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([ratePct, net]) => ({ ratePct, net: roundPence(net), vat: roundPence((net * ratePct) / 100) }));
  const net = roundPence(vatByRate.reduce((s, r) => s + r.net, 0));
  const vat = roundPence(vatByRate.reduce((s, r) => s + r.vat, 0));
  return { net, vat, gross: roundPence(net + vat), vatByRate };
}
