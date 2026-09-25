"use client";

import { CalendarPlus, Check, Bookmark, BookmarkCheck } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";

export default function ActionButtons({ workout }) {
  const { addToPlan, addToSaved, isInPlan, isSaved, isFull } = usePlan();
  const { showToast } = useToast();

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);

  function handleAddToPlan() {
    const result = addToPlan(workout);
    if (result.ok) {
      showToast("Added to today's plan");
    } else if (result.reason === "cap") {
      showToast("Today's plan is full — 5 lifts max. Finish one first.");
    } else {
      showToast("Already in today's plan");
    }
  }

  function handleSave() {
    const result = addToSaved(workout);
    if (result.ok) {
      showToast("Saved for later");
    } else {
      showToast("Already saved");
    }
  }

  const planDisabled = inPlan || (isFull && !inPlan);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        disabled={planDisabled}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
      >
        {inPlan ? <Check size={18} /> : <CalendarPlus size={18} />}
        {inPlan ? "In today's plan" : isFull ? "Plan full (5/5)" : "Add to today's plan"}
      </button>

      <button
        onClick={handleSave}
        disabled={saved}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-line disabled:hover:text-white"
      >
        {saved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
        {saved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
