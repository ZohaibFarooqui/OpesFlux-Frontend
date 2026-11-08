"use client";

import { useState } from "react";
import { reorderPoint } from "@/lib/tools-calc";
import { NumberField, ResultRow, Results, toNumber } from "./fields";

const units = (n: number) => `${n.toLocaleString("en-GB")} ${n === 1 ? "unit" : "units"}`;

export function ReorderCalculator() {
  const [avgDaily, setAvgDaily] = useState("10");
  const [avgLead, setAvgLead] = useState("5");
  const [maxDaily, setMaxDaily] = useState("15");
  const [maxLead, setMaxLead] = useState("8");

  const r = reorderPoint(toNumber(avgDaily), toNumber(avgLead), toNumber(maxDaily), toNumber(maxLead));

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="grid grid-cols-2 gap-5 content-start items-end">
        <NumberField id="ro-avg-daily" label="Average sold per day" value={avgDaily} onChange={setAvgDaily} />
        <NumberField id="ro-avg-lead" label="Average lead time (days)" value={avgLead} onChange={setAvgLead} />
        <NumberField id="ro-max-daily" label="Most sold in a day" value={maxDaily} onChange={setMaxDaily} />
        <NumberField id="ro-max-lead" label="Longest lead time (days)" value={maxLead} onChange={setMaxLead} />
      </div>
      <Results>
        {r ? (
          <>
            <ResultRow label="Sold while waiting for delivery" value={units(r.leadTimeDemand)} />
            <ResultRow label="Safety stock" value={units(r.safetyStock)} />
            <ResultRow label="Reorder when stock reaches" value={units(r.reorderPoint)} strong />
          </>
        ) : (
          <p className="text-sm text-(--color-muted)">Enter your average daily sales and lead time to see your reorder point.</p>
        )}
      </Results>
    </div>
  );
}
