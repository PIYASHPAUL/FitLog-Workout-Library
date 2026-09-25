"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";

export default function PlanCard({ workout, variant }) {
  const { removeFromPlan, removeFromSaved, toggleDone } = usePlan();
  const { showToast } = useToast();
  const isPlanVariant = variant === "plan";

  function handleRemove() {
    if (isPlanVariant) {
      removeFromPlan(workout.id);
      showToast("Removed from today's plan");
    } else {
      removeFromSaved(workout.id);
      showToast("Removed from saved");
    }
  }

  function handleMarkDone() {
    toggleDone(workout.id);
    showToast(workout.done ? "Marked as not done" : "Marked as done");
  }

  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border border-line bg-panel p-4 sm:flex-row sm:items-center ${
        workout.done ? "opacity-60" : ""
      }`}
    >
      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl bg-panel2 sm:h-20 sm:w-28">
        <Image src={workout.image} alt={workout.name} fill sizes="112px" className="object-cover" />
      </div>

      <div className="flex-1">
        <h3
          className={`font-display text-base font-semibold uppercase tracking-tight ${
            workout.done ? "line-through" : ""
          }`}
        >
          {workout.name}
        </h3>
        <p className="mt-0.5 text-xs text-muted">{workout.equipment}</p>
        <div className="mt-2 flex items-center gap-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Clock size={13} className="text-accent" /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={13} className="text-accent" /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={13} className="text-accent" /> {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-accent hover:text-accent"
        >
          View Details
        </Link>

        {isPlanVariant && (
          <button
            onClick={handleMarkDone}
            aria-label={workout.done ? "Mark as not done" : "Mark as done"}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
              workout.done
                ? "border-accent bg-accent text-ink"
                : "border-line text-white hover:border-accent hover:text-accent"
            }`}
          >
            <Check size={15} strokeWidth={2.5} />
          </button>
        )}

        <button
          onClick={handleRemove}
          aria-label="Remove"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-red-400 hover:text-red-400"
        >
          <X size={15} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
