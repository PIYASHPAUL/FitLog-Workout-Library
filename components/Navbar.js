"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

const NAV_LINKS = [
  { href: "/", label: "Workout" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { planCount, savedCount } = usePlan();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-wide">
          <Image src="/logo.png" alt="" width={28} height={28} className="h-7 w-7" />
          FITLOG
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-panel2 text-accent" : "text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-ink transition-transform hover:scale-105"
            aria-label={`Today's plan, ${planCount} items`}
          >
            Plan {planCount}
          </Link>
          <Link
            href="/my-plan"
            className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            aria-label={`Saved workouts, ${savedCount} items`}
          >
            Saved {savedCount}
          </Link>
        </div>
      </div>

      <nav className="flex items-center gap-1 border-t border-line px-4 py-2 sm:hidden">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                active ? "bg-panel2 text-accent" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
