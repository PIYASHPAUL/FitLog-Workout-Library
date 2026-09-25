import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  const { id, name, image, muscleGroups = [], equipment, duration, caloriesBurned, rating } = workout;

  return (
    <Link
      href={`/workout/${id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-accent/60"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-panel2">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {muscleGroups.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-lg font-semibold uppercase leading-snug tracking-tight">
          {name}
        </h3>

        <p className="text-sm text-muted">{equipment}</p>

        <div className="mt-auto flex items-center gap-4 border-t border-line pt-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-accent" /> {duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} className="text-accent" /> {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-accent" /> {rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
