import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { machines } from "@/data/machines";
import { categories } from "@/data/categories";
import { MediaStage } from "@/components/machine/MediaStage";

export default function Showroom() {
  const all = machines;
  const [idx, setIdx] = useState(0);
  const machine = all[idx];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % all.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + all.length) % all.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [all.length]);

  if (!machine) return null;

  const cat = categories.find((c) => c.id === machine.category);
  const next = () => setIdx((i) => (i + 1) % all.length);
  const prev = () => setIdx((i) => (i - 1 + all.length) % all.length);

  return (
    <>
      <Helmet>
        <title>Showroom · Equipment · SMTS</title>
        <meta
          name="description"
          content="Interactive showroom — explore the equipment with hotspots, videos and 360° rotation."
        />
      </Helmet>

      {/* Top bar */}
      <div className="border-b border-[var(--border-c)]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-4 lg:px-12">
          <div>
            <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--brand-lime-dim)]">
              Showroom
            </p>
            <h1 className="mt-1 font-display text-xl uppercase tracking-tight md:text-2xl">
              Explore the equipment
            </h1>
          </div>
          <div className="hidden gap-2 font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)] md:flex">
            <span>{String(idx + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(all.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      {/* Stage */}
      <section className="border-b border-[var(--border-c)]">
        <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.5fr,1fr] lg:gap-14">
            <div className="relative">
              <MediaStage media={machine.media} hotspots={machine.hotspots} alt={machine.fullName} />

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--border-c)] px-4 py-2 font-mono-tech text-xs uppercase tracking-widest text-[var(--text-1)] hover:border-[var(--brand-lime)] hover:text-[var(--brand-green)] transition"
                  aria-label="Previous equipment"
                >
                  <ChevronLeft className="h-4 w-4" /> Prev
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--border-c)] px-4 py-2 font-mono-tech text-xs uppercase tracking-widest text-[var(--text-1)] hover:border-[var(--brand-lime)] hover:text-[var(--brand-green)] transition"
                  aria-label="Next equipment"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              {cat && (
                <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--brand-lime-dim)]">
                  {cat.name} · {machine.subcategory}
                </p>
              )}
              <h2 className="mt-3 font-display text-3xl uppercase tracking-tight md:text-4xl">
                {machine.name}
              </h2>
              <p className="mt-2 text-base text-[var(--text-2)]">{machine.fullName}</p>
              <p className="mt-5 text-base leading-relaxed text-[var(--text-0)]">{machine.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-1)]">{machine.description}</p>

              <ul className="mt-6 space-y-2.5">
                {machine.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-[var(--text-1)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-lime)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {cat && (
                <Link
                  to={`/catalog/${cat.slug}/${machine.slug}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--brand-green)] px-5 py-2.5 font-display text-xs uppercase tracking-widest text-white hover:bg-[var(--brand-green-light)] transition"
                >
                  Full specs <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Thumbnails */}
      <section>
        <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-12 lg:py-14">
          <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]">
            All equipment
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {all.map((m, i) => {
              const active = i === idx;
              return (
                <button
                  key={m.slug}
                  type="button"
                  onClick={() => setIdx(i)}
                  className={`group relative overflow-hidden rounded-md border text-left transition ${
                    active
                      ? "border-[var(--brand-lime)] ring-2 ring-[var(--brand-lime)]/40"
                      : "border-[var(--border-c)] hover:border-[var(--brand-strong,var(--border-strong))]"
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[var(--surface-3)]">
                    <img
                      src={m.media.poster}
                      alt={m.fullName}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        active ? "" : "opacity-90 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                  <div className="p-2.5">
                    <p className="font-display text-xs uppercase tracking-wide text-[var(--text-0)]">
                      {m.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
