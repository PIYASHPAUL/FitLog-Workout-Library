export default function SpecsPanel({ workout }) {
  const rows = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <dl className="divide-y divide-line rounded-2xl border border-line bg-panel">
      {rows.map(([label, value]) => (
        <div key={label} className="flex items-center justify-between gap-4 px-5 py-3.5">
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</dt>
          <dd className="text-sm font-medium text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
