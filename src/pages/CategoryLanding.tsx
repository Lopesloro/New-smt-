import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { MachineCard } from "@/components/site/MachineCard";
import { getCategory, categories } from "@/data/categories";
import { getMachinesByCategory } from "@/data/machines";
import NotFound from "@/pages/NotFound";

const subcategoryLabel: Record<string, string> = {
  "in-line": "In-Line",
  "off-line": "Off-Line",
  support: "Support & Automation",
  standard: "Standard",
};

export default function CategoryLanding() {
  const { category } = useParams();
  const cat = category ? getCategory(category) : undefined;
  const [filter, setFilter] = useState<string>("all");

  const machines = useMemo(() => (cat ? getMachinesByCategory(cat.id) : []), [cat]);

  const availableSubs = useMemo(() => {
    const set = new Set(machines.map((m) => m.subcategory));
    return Array.from(set);
  }, [machines]);

  if (!cat) return <NotFound />;

  const filtered = filter === "all" ? machines : machines.filter((m) => m.subcategory === filter);

  return (
    <>
      <Helmet>
        <title>{cat.name} · Catalog · SMTS</title>
        <meta name="description" content={cat.description} />
      </Helmet>

      <nav className="border-b border-[var(--border-c)] bg-[var(--surface-1)]">
        <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-6 py-4 font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)] lg:px-12">
          <Link to="/catalog" className="hover:text-[var(--brand-green)]">Catalog</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[var(--text-0)]">{cat.name}</span>
        </div>
      </nav>

      <PageHero eyebrow={cat.name} title={cat.tagline} subtitle={cat.description} />

      {availableSubs.length > 1 && (
        <div className="border-b border-[var(--border-c)] bg-[var(--surface-1)]">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-2 px-6 py-4 lg:px-12">
            <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]">Filter</span>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-full px-4 py-1.5 font-mono-tech text-xs uppercase tracking-widest transition ${
                filter === "all"
                  ? "bg-[var(--brand-green)] text-white"
                  : "border border-[var(--border-c)] text-[var(--text-1)] hover:border-[var(--brand-lime)]"
              }`}
            >
              All
            </button>
            {availableSubs.map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => setFilter(sub)}
                className={`rounded-full px-4 py-1.5 font-mono-tech text-xs uppercase tracking-widest transition ${
                  filter === sub
                    ? "bg-[var(--brand-green)] text-white"
                    : "border border-[var(--border-c)] text-[var(--text-1)] hover:border-[var(--brand-lime)]"
                }`}
              >
                {subcategoryLabel[sub] ?? sub}
              </button>
            ))}
          </div>
        </div>
      )}

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {filtered.length === 0 ? (
            <p className="text-center text-[var(--text-1)]">No machines match this filter.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m) => (
                <MachineCard key={m.slug} machine={m} categorySlug={cat.slug} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-[var(--border-c)] bg-[var(--surface-2)] py-12">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]">
            Other categories
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {categories
              .filter((c) => c.id !== cat.id)
              .map((c) => (
                <Link
                  key={c.id}
                  to={`/catalog/${c.slug}`}
                  className="rounded-full border border-[var(--border-c)] bg-[var(--surface-1)] px-4 py-2 font-mono-tech text-xs uppercase tracking-widest text-[var(--text-1)] hover:border-[var(--brand-lime)] hover:text-[var(--brand-green)]"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
