"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { useWorkouts } from "@/context/WorkoutsContext";
import { getWorkoutById } from "@/lib/api";
import Loader from "@/components/Loader";
import SpecsPanel from "@/components/SpecsPanel";
import Instructions from "@/components/Instructions";
import ActionButtons from "@/components/ActionButtons";

export default function WorkoutDetailPage() {
  const { id } = useParams();
  const { getById, loading: listLoading } = useWorkouts();
  const [workout, setWorkout] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | found | notfound

  useEffect(() => {
    let cancelled = false;

    async function resolve() {
      const cached = getById(id);
      if (cached) {
        setWorkout(cached);
        setStatus("found");
        return;
      }

      if (listLoading) return; // wait for the shared list; effect re-runs once it settles

      const single = await getWorkoutById(id);
      if (cancelled) return;

      if (single) {
        setWorkout(single);
        setStatus("found");
      } else {
        setStatus("notfound");
      }
    }

    resolve();
    return () => {
      cancelled = true;
    };
  }, [id, getById, listLoading]);

  if (status === "notfound") {
    notFound();
  }

  if (status === "loading" || !workout) {
    return <Loader label="Loading workout…" />;
  }

  return (
    <section className="py-10 sm:py-14">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-line bg-panel">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              {workout.name}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">{workout.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {(workout.muscleGroups || []).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <SpecsPanel workout={workout} />
          <Instructions steps={workout.instructions} />
          <ActionButtons workout={workout} />
        </div>
      </div>
    </section>
  );
}
