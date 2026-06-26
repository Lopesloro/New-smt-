import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { MachineCard } from "@/components/site/MachineCard";
import { Reveal } from "@/components/site/Reveal";
import { categories } from "@/data/categories";
import { machines, getMachinesByCategory } from "@/data/machines";

export default function Catalog() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const groups = useMemo(() => {
    return categories
      .map((cat) => {
        let list = getMachinesByCategory(cat.id);
        if (query) {
          list = list.filter(
            (m) =>
              m.name.toLowerCase().includes(query) ||
              m.fullName.toLowerCase().includes(query) ||
              cat.name.toLowerCase().includes(query),
          );
        }
        return { cat, list };
      })
      .filter((g) => g.list.length > 0);
  }, [query]);

  const totalShown = groups.reduce((n, g) => n + g.list.length, 0);

  return (
    <>
      <Helmet>
        <title>Catalog · Equipment · SMTS</title>
        <meta
          name="description"
          content="Browse all equipment distributed by SMTS — placement, printing, inspection, depaneling, cleaning, X-ray and more."
        />
      </Helmet>

      <PageHero
        eyebrow="Catalog"
        title="The full equipment lineup."
        subtitle={`${machines.length} machines across ${categories.length} categories — placement, printing, inspection, depaneling, cleaning and more.`}
      />

      {/* Search */}
      <div className="sticky top-0 z-20 border-b border-[var(--border-c)] bg-[var(--surface-0)]/95 backdrop-blur">
        <div className="mx-auto max-w-[1280px] px-6 py-4 lg:px-12">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-2)]" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by model or category…"
              className="input w-full pl-11"
              aria-label="Search machines"
            />
          </div>
          {query && (
            <p className="mt-2 font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]">
              {totalShown} result{totalShown === 1 ? "" : "s"}
            </p>
          )}
        </div>
      </div>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {groups.length === 0 ? (
            <p className="py-16 text-center text-[var(--text-1)]">No machines match "{q}".</p>
          ) : (
            groups.map(({ cat, list }) => (
              <div key={cat.id} className="mb-14 last:mb-0">
                <div className="flex items-baseline justify-between border-b border-[var(--border-c)] pb-3">
                  <h2 className="font-display text-xl uppercase tracking-tight text-[var(--brand-green)] md:text-2xl">
                    {cat.name}
                  </h2>
                  <Link
                    to={`/catalog/${cat.slug}`}
                    className="font-mono-tech text-[11px] uppercase tracking-widest text-[var(--text-2)] hover:text-[var(--brand-green)]"
                  >
                    {list.length} {list.length === 1 ? "model" : "models"}
                  </Link>
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((m, i) => (
                    <Reveal key={m.slug} index={Math.min(i, 5)} className="h-full">
                      <MachineCard machine={m} categorySlug={cat.slug} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="border-t border-[var(--border-c)] bg-[var(--surface-2)] py-14">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-xl uppercase tracking-tight">Not sure which line fits?</h3>
              <p className="mt-2 text-sm text-[var(--text-1)]">
                Tell us your board design and target volume — we'll spec the right machine.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-green)] px-6 py-3 font-display text-sm uppercase tracking-wider text-white hover:bg-[var(--brand-green-light)] transition"
            >
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
