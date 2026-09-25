"use client";

import { useMemo, useState } from "react";
import { useWorkouts } from "@/context/WorkoutsContext";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";
import Loader from "./Loader";

// Rating reads best sorted high-to-low; duration/calories read best
// sorted low-to-high (shortest / lightest lift first).
const DESCENDING_KEYS = new Set(["rating"]);

export default function Library() {
  const { workouts, loading, error, reload } = useWorkouts();
  const [sortKey, setSortKey] = useState("duration");

  const sorted = useMemo(() => {
    const list = [...workouts];
    const descending = DESCENDING_KEYS.has(sortKey);
    list.sort((a, b) => {
      const diff = (Number(a[sortKey]) || 0) - (Number(b[sortKey]) || 0);
      return descending ? -diff : diff;
    });
    return list;
  }, [workouts, sortKey]);

  return (
    <section id="library" className="scroll-mt-20 border-b border-line bg-ink py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              The Library
            </h2>
            <p className="mt-2 text-sm text-muted">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {!loading && !error && workouts.length > 0 && (
            <SortDropdown value={sortKey} onChange={setSortKey} />
          )}
        </div>

        <div className="mt-10">
          {loading && <Loader label="Loading workouts…" />}

          {!loading && error && (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-panel py-16 text-center">
              <p className="text-sm text-muted">{error}</p>
              <button
                onClick={reload}
                className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink"
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
