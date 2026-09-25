import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="container-page flex flex-col items-center gap-3 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2 font-display text-base font-semibold tracking-wide">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-ink">
            <Dumbbell size={16} strokeWidth={2.5} />
          </span>
          FITLOG
        </div>
        <p className="text-sm text-muted">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
