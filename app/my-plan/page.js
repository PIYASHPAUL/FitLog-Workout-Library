"use client";

import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import MetricsRow from "@/components/MetricsRow";
import Tabs from "@/components/Tabs";
import PlanCard from "@/components/PlanCard";
import EmptyState from "@/components/EmptyState";
import Loader from "@/components/Loader";

export default function MyPlanPage() {
  const { plan, saved, planCount, savedCount, metrics, hydrated } = usePlan();
  const [tab, setTab] = useState("plan");

  const list = tab === "plan" ? plan : saved;

  return (
    <section className="py-10 sm:py-14">
      <div className="container-page">
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          My Plan
        </h1>
        <p className="mt-2 text-sm text-muted">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="mt-8">
          <MetricsRow metrics={metrics} />
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Tabs active={tab} onChange={setTab} planCount={planCount} savedCount={savedCount} />
        </div>

        <div className="mt-6">
          {!hydrated && <Loader label="Loading workouts…" />}

          {hydrated && list.length === 0 && <EmptyState />}

          {hydrated && list.length > 0 && (
            <div className="flex flex-col gap-4">
              {list.map((workout) => (
                <PlanCard key={workout.id} workout={workout} variant={tab} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
