export default function MetricsRow({ metrics }) {
  const cards = [
    { label: "Exercises", value: metrics.exercises },
    { label: "Minutes", value: metrics.minutes },
    { label: "Calories", value: metrics.calories },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border border-line bg-panel px-4 py-5 text-center sm:px-6 sm:py-6"
        >
          <p className="font-display text-3xl font-bold text-accent sm:text-4xl">{card.value}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
            {card.label}
          </p>
        </div>
      ))}
    </div>
  );
}
