"use client";

import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, Package, ShoppingCart, Users } from "lucide-react";

export function DashboardMockup() {
  const [salesCount, setSalesCount] = useState(1240);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setSalesCount((n) => n + Math.floor(Math.random() * 3 + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setTilt({ x: x * 8, y: y * -8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        className="rounded-2xl border border-(--color-border) bg-white shadow-[0_32px_80px_-16px_rgba(10,37,64,0.16)] overflow-hidden"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-(--color-deep-blue) border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-(--color-error)" />
          <div className="w-3 h-3 rounded-full bg-(--color-warning)" />
          <div className="w-3 h-3 rounded-full bg-(--color-success)" />
          <div className="mx-auto text-xs text-white/60">OpesFlux Dashboard</div>
        </div>

        <div className="flex min-h-[360px]">
          {/* Sidebar */}
          <div className="w-14 bg-(--color-deep-blue) flex flex-col items-center py-4 gap-4">
            {[TrendingUp, Package, ShoppingCart, Users].map((Icon, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${i === 0 ? "bg-(--color-cyan) text-(--color-deep-blue)" : "text-white/40 hover:text-white/80"}`}
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 bg-(--color-cream) p-4 space-y-3">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white rounded-xl p-3 border border-(--color-border)">
                <div className="text-xs text-(--color-muted) mb-1">Today's Sales</div>
                <div className="text-xl font-bold text-(--color-deep-blue)">
                  £{salesCount.toLocaleString()}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--color-cyan) animate-cyan-pulse" />
                  <span className="text-xs text-(--color-success)">+12%</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-(--color-border)">
                <div className="text-xs text-(--color-muted) mb-1">Stock Items</div>
                <div className="text-xl font-bold text-(--color-deep-blue)">847</div>
                <div className="text-xs text-(--color-muted) mt-1">3 low stock</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-(--color-border)">
                <div className="text-xs text-(--color-muted) mb-1">Orders</div>
                <div className="text-xl font-bold text-(--color-deep-blue)">34</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--color-cyan) animate-cyan-pulse" style={{ animationDelay: "0.5s" }} />
                  <span className="text-xs text-(--color-muted)">live</span>
                </div>
              </div>
            </div>

            {/* Mini chart */}
            <div className="bg-white rounded-xl p-3 border border-(--color-border)">
              <div className="text-xs font-medium text-(--color-text) mb-2">Weekly Revenue</div>
              <div className="flex items-end gap-1 h-16">
                {[40, 65, 45, 80, 70, 90, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      background: i === 5
                        ? "var(--color-cyan)"
                        : "var(--color-mist)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Recent orders mini table */}
            <div className="bg-white rounded-xl p-3 border border-(--color-border)">
              <div className="text-xs font-medium text-(--color-text) mb-2">Recent Orders</div>
              <div className="space-y-1.5">
                {[
                  { id: "#4521", customer: "Sarah M.", amount: "£48.50", status: "Paid" },
                  { id: "#4520", customer: "James K.", amount: "£122.00", status: "Paid" },
                  { id: "#4519", customer: "Priya S.", amount: "£89.99", status: "Pending" },
                ].map((order) => (
                  <div key={order.id} className="flex items-center justify-between text-xs">
                    <span className="text-(--color-muted) font-mono">{order.id}</span>
                    <span className="text-(--color-text) flex-1 ml-2 truncate">{order.customer}</span>
                    <span className="font-medium text-(--color-deep-blue) mr-2">{order.amount}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${order.status === "Paid" ? "bg-(--color-success)/10 text-(--color-success)" : "bg-(--color-warning)/10 text-(--color-warning)"}`}>
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-4 -right-4 bg-(--color-cyan) text-(--color-deep-blue) rounded-xl px-3 py-2 text-xs font-bold shadow-lg">
        VAT Ready ✓
      </div>
    </div>
  );
}
