import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { Hotspot } from "@/data/types";

interface Props {
  hotspots: Hotspot[];
}

export function HotspotOverlay({ hotspots }: Props) {
  const [active, setActive] = useState<number | null>(null);

  if (!hotspots.length) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      {hotspots.map((h, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setActive(active === i ? null : i)}
          style={{ left: `${h.x * 100}%`, top: `${h.y * 100}%` }}
          className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
          aria-label={`Hotspot: ${h.title}`}
        >
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-[var(--brand-lime)]/40" />
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-lime)] text-[var(--brand-green-dark)] shadow-lg ring-2 ring-white/40">
              <Plus className="h-4 w-4" />
            </span>
          </span>
        </button>
      ))}

      {active !== null && (
        <div
          style={{
            left: `${hotspots[active].x * 100}%`,
            top: `${hotspots[active].y * 100}%`,
          }}
          className="pointer-events-auto absolute z-10 w-64 -translate-x-1/2 translate-y-6 rounded-lg border border-[var(--brand-lime)]/30 bg-black/85 p-4 text-white shadow-2xl backdrop-blur"
        >
          <div className="flex items-start justify-between gap-3">
            <h4 className="font-display text-sm uppercase tracking-wide text-[var(--brand-lime)]">
              {hotspots[active].title}
            </h4>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="text-white/60 hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-white/85">{hotspots[active].text}</p>
        </div>
      )}
    </div>
  );
}
