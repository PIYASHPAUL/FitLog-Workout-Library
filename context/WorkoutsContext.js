"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getAllWorkouts } from "@/lib/api";

const WorkoutsContext = createContext(null);

export function WorkoutsProvider({ children }) {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllWorkouts();
      setWorkouts(data);
    } catch (err) {
      setError(err.message || "Something went wrong while loading workouts.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const getById = useCallback(
    (id) => workouts.find((w) => String(w.id) === String(id)) || null,
    [workouts]
  );

  return (
    <WorkoutsContext.Provider value={{ workouts, loading, error, reload: load, getById }}>
      {children}
    </WorkoutsContext.Provider>
  );
}

export function useWorkouts() {
  const ctx = useContext(WorkoutsContext);
  if (!ctx) throw new Error("useWorkouts must be used within a WorkoutsProvider");
  return ctx;
}
