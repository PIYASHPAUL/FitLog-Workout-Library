"use client";

import { ChevronDown } from "lucide-react";

export const SORT_OPTIONS = [
  { value: "duration", label: "Duration" },
  { value: "caloriesBurned", label: "Calories" },
  { value: "rating", label: "Rating" },
];

export default function SortDropdown({ value, onChange }) {
  return (
    <label className="relative inline-flex items-center gap-2 text-sm text-muted">
      Sort by
      <span className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none rounded-full border border-line bg-panel py-2 pl-4 pr-9 text-sm font-medium text-white outline-none transition-colors hover:border-accent/60 focus-visible:border-accent"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-panel text-white">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-accent"
        />
      </span>
    </label>
  );
}
