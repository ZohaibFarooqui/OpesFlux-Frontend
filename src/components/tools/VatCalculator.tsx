"use client";

import { useState } from "react";
import { addVat, formatGBP, removeVat } from "@/lib/tools-calc";
import { Choice, NumberField, ResultRow, Results, toNumber } from "./fields";

type Mode = "add" | "remove";
type Rate = "20" | "5" | "0" | "custom";

export function VatCalculator() {
  const [mode, setMode] = useState<Mode>("add");
  const [amount, setAmount] = useState("100");
  const [rate, setRate] = useState<Rate>("20");
  const [custom, setCustom] = useState("");

  const ratePct = rate === "custom" ? toNumber(custom) : Number(rate);
  const value = toNumber(amount);
  const r = mode === "add" ? addVat(value, ratePct) : removeVat(value, ratePct);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-5">
        <Choice
          legend="What do you want to do?"
          value={mode}
          onChange={setMode}
          options={[
            { value: "add", label: "Add VAT" },
            { value: "remove", label: "Remove VAT" },
          ]}
        />
        <NumberField
          id="vat-amount"
          label={mode === "add" ? "Price excluding VAT" : "Price including VAT"}
          value={amount}
          onChange={setAmount}
          prefix="£"
        />
        <Choice
          legend="VAT rate"
          value={rate}
          onChange={setRate}
          options={[
            { value: "20", label: "20%" },
            { value: "5", label: "5%" },
            { value: "0", label: "0%" },
            { value: "custom", label: "Other" },
          ]}
        />
        {rate === "custom" && <NumberField id="vat-custom" label="Your VAT rate" value={custom} onChange={setCustom} suffix="%" />}
      </div>
      <Results>
        <ResultRow label="Net (excluding VAT)" value={formatGBP(r.net)} />
        <ResultRow label={`VAT at ${ratePct}%`} value={formatGBP(r.vat)} />
        <ResultRow label="Gross (including VAT)" value={formatGBP(r.gross)} strong />
      </Results>
    </div>
  );
}
