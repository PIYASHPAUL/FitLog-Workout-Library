"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { storage } from "@/lib/storage";

const PlanContext = createContext(null);

export const PLAN_CAP = 5;

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  // Becomes true once we've read localStorage on the client, so pages can
  // show a brief "Loading workouts…" state instead of an empty flash.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setPlan(storage.getPlan());
    setSaved(storage.getSaved());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) storage.setPlan(plan);
  }, [plan, hydrated]);

  useEffect(() => {
    if (hydrated) storage.setSaved(saved);
  }, [saved, hydrated]);

  const isInPlan = useCallback((id) => plan.some((w) => String(w.id) === String(id)), [plan]);
  const isSaved = useCallback((id) => saved.some((w) => String(w.id) === String(id)), [saved]);

  const addToPlan = useCallback(
    (workout) => {
      if (isInPlan(workout.id)) return { ok: false, reason: "duplicate" };
      if (plan.length >= PLAN_CAP) return { ok: false, reason: "cap" };
      setPlan((prev) => [...prev, { ...workout, done: false }]);
      return { ok: true };
    },
    [plan, isInPlan]
  );

  const addToSaved = useCallback(
    (workout) => {
      if (isSaved(workout.id)) return { ok: false, reason: "duplicate" };
      setSaved((prev) => [...prev, workout]);
      return { ok: true };
    },
    [isSaved]
  );

  const removeFromPlan = useCallback((id) => {
    setPlan((prev) => prev.filter((w) => String(w.id) !== String(id)));
  }, []);

  const removeFromSaved = useCallback((id) => {
    setSaved((prev) => prev.filter((w) => String(w.id) !== String(id)));
  }, []);

  const toggleDone = useCallback((id) => {
    setPlan((prev) =>
      prev.map((w) => (String(w.id) === String(id) ? { ...w, done: !w.done } : w))
    );
  }, []);

  const metrics = useMemo(() => {
    return plan.reduce(
      (acc, w) => ({
        exercises: acc.exercises + 1,
        minutes: acc.minutes + (Number(w.duration) || 0),
        calories: acc.calories + (Number(w.caloriesBurned) || 0),
      }),
      { exercises: 0, minutes: 0, calories: 0 }
    );
  }, [plan]);

  const value = {
    plan,
    saved,
    hydrated,
    planCount: plan.length,
    savedCount: saved.length,
    isFull: plan.length >= PLAN_CAP,
    metrics,
    isInPlan,
    isSaved,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
    toggleDone,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within a PlanProvider");
  return ctx;
}
