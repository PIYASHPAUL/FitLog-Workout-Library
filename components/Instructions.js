export default function Instructions({ steps = [] }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold uppercase tracking-tight">Instructions</h2>
      <ol className="mt-4 space-y-4">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink">
              {i + 1}
            </span>
            <p className="pt-0.5 text-sm leading-relaxed text-muted">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
