"use client";

import React from "react";

export function FlowLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M1200 100 Q900 200 700 350 Q500 500 200 600"
        stroke="url(#flow1)"
        strokeWidth="1.5"
        strokeDasharray="8 4"
        className="animate-flow opacity-[0.08]"
      />
      <path
        d="M1200 300 Q950 250 750 400 Q550 550 100 450"
        stroke="url(#flow2)"
        strokeWidth="1"
        strokeDasharray="6 6"
        className="animate-flow opacity-[0.06]"
        style={{ animationDelay: "0.75s" }}
      />
      <path
        d="M1100 0 Q950 150 800 250 Q600 400 300 350"
        stroke="url(#flow1)"
        strokeWidth="1"
        strokeDasharray="4 8"
        className="animate-flow opacity-[0.05]"
        style={{ animationDelay: "0.4s" }}
      />
      <defs>
        <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C2FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00C2FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#66D9FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="flow2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#66D9FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00C2FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
