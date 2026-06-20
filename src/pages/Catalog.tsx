import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { categories } from "@/data/categories";
import { getMachinesByCategory } from "@/data/machines";

export default function Catalog() {
  return (
    <>
      <Helmet>
        <title>Catálogo · Equipamentos · SMTS</title>
        <meta
          name="description"
          content="Conheça a linha completa de equipamentos distribuída pela SMTS no Brasil e na América do Sul — sistemas de Bit Router, Sawing, Laser e suporte."
        />
      </Helmet>

      <PageHero
        eyebrow="Catálogo"
        title="Linha completa de equipamentos."
        subtitle="Depaneling por router, serra e laser, além de suporte e automação fabril — para produção de PCB de alto mix e alta precisão."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {categories.map((cat) => {
              const count = getMachinesByCategory(cat.id).length;
              return (
                <Link
                  key={cat.id}
                  to={`/catalog/${cat.slug}`}
                  className="group relative overflow-hidden rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-8 transition-colors hover:border-[var(--brand-lime)] lg:p-10"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-[var(--brand-lime)]/10 blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-lime-dim)]">
                        {count} {count === 1 ? "equipamento" : "equipamentos"}
                      </span>
                      <ArrowRight className="h-5 w-5 text-[var(--text-2)] transition-all group-hover:translate-x-1 group-hover:text-[var(--brand-green)]" />
                    </div>

                    <h2 className="mt-4 font-display text-2xl uppercase tracking-tight text-[var(--brand-green)] md:text-3xl">
                      {cat.name}
                    </h2>
                    <p className="mt-3 text-[var(--brand-lime-dim)]">{cat.tagline}</p>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-1)]">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border-c)] bg-[var(--surface-2)] py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-xl uppercase tracking-tight">Não sabe qual linha escolher?</h3>
              <p className="mt-2 text-sm text-[var(--text-1)]">
                Conte o seu projeto de PCB e o volume desejado — indicamos o equipamento certo.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-green)] px-6 py-3 font-display text-sm uppercase tracking-wider text-white hover:bg-[var(--brand-green-light)] transition"
            >
              Falar com a equipe <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
