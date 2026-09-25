import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-display text-7xl font-bold text-accent sm:text-8xl">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-sm text-muted">
        This lift isn&apos;t in the library, or the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
      >
        <ArrowLeft size={16} strokeWidth={2.5} />
        Back to workouts
      </Link>
    </section>
  );
}
