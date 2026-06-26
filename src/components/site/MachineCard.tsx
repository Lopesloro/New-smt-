import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import type { Machine } from "@/data/types";

interface Props {
  machine: Machine;
  categorySlug: string;
}

export function MachineCard({ machine, categorySlug }: Props) {
  const hasVideo = Boolean(machine.media.video);

  return (
    <Link
      to={`/catalog/${categorySlug}/${machine.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-lime)] hover:shadow-[0_12px_30px_-12px_rgba(0,71,48,0.25)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-2)]">
        <img
          src={machine.media.poster}
          alt={machine.fullName}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-[var(--surface-1)]/90 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-widest text-[var(--brand-green)] shadow-sm backdrop-blur">
          {machine.subcategory}
        </span>
        {/* video indicator */}
        {hasVideo && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-[var(--brand-green)]/90 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-widest text-white backdrop-blur">
            <Play className="h-2.5 w-2.5 fill-current" /> Video
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl uppercase tracking-tight text-[var(--brand-green)]">
            {machine.name}
          </h3>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[var(--text-2)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--brand-green)]" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-1)]">
          {machine.tagline}
        </p>
      </div>
    </Link>
  );
}
