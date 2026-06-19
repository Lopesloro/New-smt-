import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Machine } from "@/data/types";

interface Props {
  machine: Machine;
  categorySlug: string;
}

export function MachineCard({ machine, categorySlug }: Props) {
  return (
    <Link
      to={`/catalog/${categorySlug}/${machine.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] transition-colors hover:border-[var(--brand-lime)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[var(--surface-2)]">
        <img
          src={machine.media.poster}
          alt={machine.fullName}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-lime-dim)]">
            {machine.subcategory}
          </span>
          <ArrowUpRight className="h-4 w-4 text-[var(--text-2)] transition-colors group-hover:text-[var(--brand-green)]" />
        </div>
        <h3 className="mt-3 font-display text-xl uppercase tracking-tight text-[var(--brand-green)]">
          {machine.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-1)]">
          {machine.tagline}
        </p>
      </div>
    </Link>
  );
}
