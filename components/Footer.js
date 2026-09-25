import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="container-page flex flex-col items-center gap-3 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2 font-display text-base font-semibold tracking-wide">
          <Image src="/logo.png" alt="" width={24} height={24} className="h-6 w-6" />
          FITLOG
        </div>
        <p className="text-sm text-muted">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
