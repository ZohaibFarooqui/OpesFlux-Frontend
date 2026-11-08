"use client";

import { useState } from "react";
import { formatGBP, marginFromPrice, priceForMargin } from "@/lib/tools-calc";
import { Choice, NumberField, ResultRow, Results, toNumber } from "./fields";

type Mode = "margin" | "price";

const pct = (n: number) => `${n.toFixed(1)}%`;

export function MarginCalculator() {
  const [mode, setMode] = useState<Mode>("margin");
  const [cost, setCost] = useState("60");
  const [price, setPrice] = useState("100");
  const [target, setTarget] = useState("40");

  const costN = toNumber(cost);
  const targetPrice = priceForMargin(costN, toNumber(target));
  const usedPrice = mode === "margin" ? toNumber(price) : targetPrice ?? 0;
  const r = marginFromPrice(costN, usedPrice);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-5">
        <Choice
          legend="What do you want to find?"
          value={mode}
          onChange={setMode}
          options={[
            { value: "margin", label: "My margin" },
            { value: "price", label: "The price to charge" },
          ]}
        />
        <NumberField id="margin-cost" label="Cost per item (excluding VAT)" value={cost} onChange={setCost} prefix="£" />
        {mode === "margin" ? (
          <NumberField id="margin-price" label="Selling price (excluding VAT)" value={price} onChange={setPrice} prefix="£" />
        ) : (
          <NumberField id="margin-target" label="Target margin" value={target} onChange={setTarget} suffix="%" hint="Must be below 100%." />
        )}
      </div>
      <Results>
        {r ? (
          <>
            {mode === "price" && <ResultRow label="Price to charge" value={formatGBP(usedPrice)} strong />}
            <ResultRow label="Profit per item" value={formatGBP(r.profit)} />
            <ResultRow label="Markup" value={pct(r.markupPct)} />
            {mode === "margin" && <ResultRow label="Margin" value={pct(r.marginPct)} strong />}
          </>
        ) : (
          <p className="text-sm text-(--color-muted)">Enter a cost and a price above zero, and a target margin below 100%.</p>
        )}
      </Results>
    </div>
  );
}
