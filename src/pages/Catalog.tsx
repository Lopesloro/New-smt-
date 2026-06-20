import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { categories } from "@/data/categories";
import { getMachinesByCategory } from "@/data/machines";
import { representedBrands } from "@/data/company";

export default function Catalog() {
  return (
    <>
      <Helmet>
        <title>Catalog · Equipment · SMTS</title>
        <meta
          name="description"
          content="Browse the equipment distributed by SMTS in Brazil & South America — Yamaha SMT and more."
        />
      </Helmet>

      <PageHero
        eyebrow="Catalog"
        title="The full equipment lineup."
        subtitle="SMT placement, printing, dispensing and inspection — engineered for high-mix, high-precision electronics manufacturing."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          {representedBrands
            .map((brand) => ({
              brand,
              cats: categories.filter((c) => c.brand === brand.id),
            }))
            .filter((g) => g.cats.length > 0)
            .map(({ brand, cats }) => (
              <div key={brand.id} className="mb-16 last:mb-0">
                <div className="flex items-baseline justify-between border-b border-[var(--border-c)] pb-4">
                  <h2 className="font-display text-2xl uppercase tracking-tight text-[var(--brand-green)] md:text-3xl">
                    {brand.name}
                  </h2>
                  <span className="font-mono-tech text-[11px] uppercase tracking-widest text-[var(--text-2)]">
                    {brand.country}
                  </span>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {cats.map((cat) => {
                    const count = getMachinesByCategory(cat.id).length;
                    return (
                      <Link
                        key={cat.id}
                        to={`/catalog/${cat.slug}`}
                        className="group relative overflow-hidden rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-7 transition-colors hover:border-[var(--brand-lime)]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-lime-dim)]">
                            {count} {count === 1 ? "model" : "models"}
                          </span>
                          <ArrowRight className="h-5 w-5 text-[var(--text-2)] transition-all group-hover:translate-x-1 group-hover:text-[var(--brand-green)]" />
                        </div>
                        <h3 className="mt-4 font-display text-xl uppercase tracking-tight text-[var(--brand-green)]">
                          {cat.name}
                        </h3>
                        <p className="mt-2 text-sm text-[var(--brand-lime-dim)]">{cat.tagline}</p>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--text-1)]">
                          {cat.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="border-t border-[var(--border-c)] bg-[var(--surface-2)] py-16">
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
