"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatGBP, invoiceTotals, roundPence } from "@/lib/tools-calc";
import { toNumber } from "./fields";

type Line = { id: number; description: string; qty: string; unitPrice: string; vatPct: string };

const iso = (d: Date) => {
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
};
const ukDate = (value: string) => (value ? value.split("-").reverse().join("/") : "");

const labelClass = "block text-sm font-medium text-(--color-deep-blue) mb-1.5";

function Text({ id, label, value, onChange, type = "text" }: { id: string; label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>{label}</label>
      <Input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function Multi({ id, label, value, onChange }: { id: string; label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>{label}</label>
      <Textarea id={id} rows={4} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export function InvoiceGenerator() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [number, setNumber] = useState("INV-001");
  const [date, setDate] = useState("");
  const [due, setDue] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [nextId, setNextId] = useState(2);
  const [lines, setLines] = useState<Line[]>([{ id: 1, description: "", qty: "1", unitPrice: "", vatPct: "20" }]);

  // Set after load, so the server-built page and the browser agree on first render.
  useEffect(() => {
    const today = new Date();
    setDate(iso(today));
    setDue(iso(new Date(today.getTime() + 30 * 86400000)));
  }, []);

  const update = (id: number, patch: Partial<Line>) => setLines((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  const addLine = () => {
    setLines((ls) => [...ls, { id: nextId, description: "", qty: "1", unitPrice: "", vatPct: "20" }]);
    setNextId((n) => n + 1);
  };

  const numeric = lines.map((l) => ({ qty: toNumber(l.qty), unitPrice: toNumber(l.unitPrice), vatPct: toNumber(l.vatPct) }));
  const totals = invoiceTotals(numeric);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Only the preview prints. Everything else is removed from the layout, not just hidden, or the PDF gains blank pages. */}
      <style>{`@media print {
        @page { margin: 15mm; }
        body *:not(:has(#invoice-preview)):not(#invoice-preview):not(#invoice-preview *) { display: none !important; }
        body *:has(#invoice-preview) { display: block !important; margin: 0 !important; padding: 0 !important; border: 0 !important; max-width: none !important; }
        #invoice-preview { border: 0; padding: 0; }
      }`}</style>

      <form className="space-y-5 min-w-0" onSubmit={(e) => e.preventDefault()}>
        <Multi id="inv-from" label="Your business name, address and contact details" value={from} onChange={setFrom} />
        <Multi id="inv-to" label="Customer name and address" value={to} onChange={setTo} />
        <div className="grid sm:grid-cols-2 gap-5">
          <Text id="inv-number" label="Invoice number" value={number} onChange={setNumber} />
          <Text id="inv-vat" label="VAT number (if registered)" value={vatNumber} onChange={setVatNumber} />
          <Text id="inv-date" label="Invoice date" type="date" value={date} onChange={setDate} />
          <Text id="inv-due" label="Payment due" type="date" value={due} onChange={setDue} />
        </div>

        <div className="space-y-4">
          {lines.map((l, i) => (
            <div key={l.id} className="rounded-xl border border-(--color-border) p-4 space-y-3">
              <Text id={`line-desc-${l.id}`} label={`Item ${i + 1} description`} value={l.description} onChange={(v) => update(l.id, { description: v })} />
              <div className="grid grid-cols-3 gap-3 items-end">
                <Text id={`line-qty-${l.id}`} label="Qty" type="number" value={l.qty} onChange={(v) => update(l.id, { qty: v })} />
                <Text id={`line-price-${l.id}`} label="Unit price (£)" type="number" value={l.unitPrice} onChange={(v) => update(l.id, { unitPrice: v })} />
                <div>
                  <label htmlFor={`line-vat-${l.id}`} className={labelClass}>VAT</label>
                  <select
                    id={`line-vat-${l.id}`}
                    value={l.vatPct}
                    onChange={(e) => update(l.id, { vatPct: e.target.value })}
                    className="h-10 w-full rounded-lg border border-(--color-border) bg-white px-2 text-sm text-(--color-text-strong)"
                  >
                    <option value="20">20%</option>
                    <option value="5">5%</option>
                    <option value="0">0% / No VAT</option>
                  </select>
                </div>
              </div>
              {lines.length > 1 && (
                <button
                  type="button"
                  onClick={() => setLines((ls) => ls.filter((x) => x.id !== l.id))}
                  className="inline-flex items-center gap-1.5 min-h-10 text-sm text-(--color-muted) hover:text-(--color-error)"
                >
                  <Trash2 className="w-4 h-4" aria-hidden="true" /> Remove item {i + 1}
                </button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" onClick={addLine}>
            <Plus className="w-4 h-4 mr-1.5" aria-hidden="true" /> Add another item
          </Button>
        </div>

        <Multi id="inv-notes" label="Payment details or notes" value={notes} onChange={setNotes} />
        <Button type="button" onClick={() => window.print()}>Print or save as PDF</Button>
      </form>

      <div className="min-w-0">
        <h2 className="text-sm font-medium text-(--color-muted) mb-3">Preview</h2>
        <div id="invoice-preview" className="rounded-xl border border-(--color-border) bg-white p-6 text-sm text-(--color-text-strong)">
          <div className="flex justify-between gap-6 mb-8">
            <p className="whitespace-pre-line break-words min-w-0">{from || "Your business details"}</p>
            <p className="text-2xl font-semibold shrink-0">Invoice</p>
          </div>
          <div className="flex justify-between gap-6 mb-8">
            <div className="min-w-0">
              <p className="text-xs text-(--color-muted) mb-1">Bill to</p>
              <p className="whitespace-pre-line break-words">{to || "Customer details"}</p>
            </div>
            <dl className="shrink-0 space-y-1 text-right">
              <div><dt className="inline text-(--color-muted)">Number: </dt><dd className="inline">{number}</dd></div>
              <div><dt className="inline text-(--color-muted)">Date: </dt><dd className="inline">{ukDate(date)}</dd></div>
              <div><dt className="inline text-(--color-muted)">Due: </dt><dd className="inline">{ukDate(due)}</dd></div>
              {vatNumber && <div><dt className="inline text-(--color-muted)">VAT no: </dt><dd className="inline">{vatNumber}</dd></div>}
            </dl>
          </div>
          <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-(--color-border) text-left text-xs text-(--color-muted)">
                <th scope="col" className="py-2 pr-2 font-medium">Description</th>
                <th scope="col" className="py-2 px-2 font-medium text-right">Qty</th>
                <th scope="col" className="py-2 px-2 font-medium text-right">Price</th>
                <th scope="col" className="py-2 px-2 font-medium text-right">VAT</th>
                <th scope="col" className="py-2 pl-2 font-medium text-right">Net</th>
              </tr>
            </thead>
            <tbody>
              {lines.map((l, i) => (
                <tr key={l.id} className="border-b border-(--color-border)">
                  <td className="py-2 pr-2 break-words">{l.description || "—"}</td>
                  <td className="py-2 px-2 text-right">{numeric[i].qty}</td>
                  <td className="py-2 px-2 text-right">{formatGBP(numeric[i].unitPrice)}</td>
                  <td className="py-2 px-2 text-right">{numeric[i].vatPct}%</td>
                  <td className="py-2 pl-2 text-right">{formatGBP(roundPence(numeric[i].qty * numeric[i].unitPrice))}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <dl className="ml-auto max-w-60 space-y-1.5">
            <div className="flex justify-between gap-4"><dt>Subtotal</dt><dd>{formatGBP(totals.net)}</dd></div>
            {totals.vatByRate.filter((r) => r.ratePct > 0).map((r) => (
              <div key={r.ratePct} className="flex justify-between gap-4"><dt>VAT at {r.ratePct}%</dt><dd>{formatGBP(r.vat)}</dd></div>
            ))}
            <div className="flex justify-between gap-4 pt-2 border-t border-(--color-border) text-base font-semibold"><dt>Total due</dt><dd>{formatGBP(totals.gross)}</dd></div>
          </dl>
          {notes && <p className="whitespace-pre-line break-words mt-8">{notes}</p>}
        </div>
      </div>
    </div>
  );
}
