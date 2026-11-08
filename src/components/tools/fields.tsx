import type { ReactNode } from "react";
import { Input } from "@/components/ui/input";

export function toNumber(value: string): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : 0;
}

export function NumberField({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-(--color-deep-blue) mb-1.5">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-(--color-muted)">
            {prefix}
          </span>
        )}
        <Input
          id={id}
          type="number"
          inputMode="decimal"
          min="0"
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${prefix ? "pl-7" : ""} ${suffix ? "pr-8" : ""}`}
        />
        {suffix && (
          <span aria-hidden="true" className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-(--color-muted)">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="text-xs text-(--color-muted) mt-1.5">{hint}</p>}
    </div>
  );
}

export function Choice<T extends string>({
  legend,
  value,
  options,
  onChange,
}: {
  legend: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-medium text-(--color-deep-blue) mb-1.5">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={`min-h-10 px-4 rounded-lg border text-sm font-medium transition-colors ${
              value === o.value
                ? "bg-(--color-deep-blue) border-(--color-deep-blue) text-white"
                : "bg-white border-(--color-border) text-(--color-deep-blue) hover:border-(--color-cyan)"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function Results({ children }: { children: ReactNode }) {
  return (
    <dl aria-live="polite" className="rounded-xl bg-(--color-mist) p-5 space-y-3 self-start">
      {children}
    </dl>
  );
}

export function ResultRow({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className={strong ? "font-semibold text-(--color-deep-blue)" : "text-sm text-(--color-text)"}>{label}</dt>
      <dd className={strong ? "text-2xl font-semibold text-(--color-deep-blue)" : "text-base font-medium text-(--color-deep-blue)"}>
        {value}
      </dd>
    </div>
  );
}
