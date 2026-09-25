"use client";

export default function Tabs({ active, onChange, planCount, savedCount }) {
  const tabs = [
    { key: "plan", label: "Today's Plan", count: planCount },
    { key: "saved", label: "Saved", count: savedCount },
  ];

  return (
    <div className="inline-flex gap-1 rounded-full border border-line bg-panel p-1">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === tab.key ? "bg-accent text-ink" : "text-muted hover:text-white"
          }`}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}
