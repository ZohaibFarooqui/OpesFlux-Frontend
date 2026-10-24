import { Truck, Apple, Wine, Warehouse, Sparkles, Store, Coffee, ShoppingBag, Factory } from "lucide-react";
import type { Industry } from "@/config/industries";

const ICONS = { Truck, Apple, Wine, Warehouse, Sparkles, Store, Coffee, ShoppingBag, Factory };

export function IndustryIcon({ name, className = "h-5 w-5" }: { name: Industry["icon"]; className?: string }) {
  const Icon = ICONS[name];
  return <Icon className={className} aria-hidden="true" />;
}
