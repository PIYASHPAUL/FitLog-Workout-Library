import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line py-20 text-center">
      <h3 className="font-display text-xl font-bold uppercase tracking-tight">
        Nothing here yet
      </h3>
      <p className="max-w-xs text-sm text-muted">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-3 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
      >
        Go to workouts
      </Link>
    </div>
  );
}
