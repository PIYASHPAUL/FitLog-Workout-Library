import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="container-page grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-accent">
            WORKOUT LIBRARY
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Train with intent.
            <br />
            Log every set.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Browse workouts
            <ArrowDown size={16} strokeWidth={2.5} />
          </a>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-3xl bg-accent/10 blur-2xl" />
          <Image
            src="/hero-banner.png"
            alt="Illustration of a person using a gym machine"
            fill
            priority
            className="relative object-contain"
            sizes="(max-width: 1024px) 80vw, 480px"
          />
        </div>
      </div>
    </section>
  );
}
