import { Loader2 } from "lucide-react";

export default function Loader({ label = "Loading…" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-muted">
      <Loader2 className="animate-spin text-accent" size={32} strokeWidth={2} />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
