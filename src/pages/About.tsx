import { Helmet } from "react-helmet-async";
import { Award, Globe, Wrench, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import {
  smts,
  smtsStats,
  smtsValues,
  smtsServices,
  representedBrands,
  customerSegments,
} from "@/data/company";

const statIcons = [Users, Award, Globe, Wrench];

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre · SMT Solutions (SMTS)</title>
        <meta
          name="description"
          content="A SMTS é uma empresa de Campinas-SP, fundada em 2005, que fornece equipamentos e serviços para montagem eletrônica, automação e testes, representando fabricantes líderes mundiais na América do Sul."
        />
      </Helmet>

      <PageHero
        eyebrow="Sobre a SMTS"
        title="Soluções para a indústria eletrônica desde 2005."
        subtitle={smts.description}
      />

      {/* Stats */}
      <section className="bg-[var(--surface-2)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {smtsStats.map((s, i) => {
              const Icon = statIcons[i % statIcons.length];
              return (
                <div key={s.l} className="text-center">
                  <Icon className="mx-auto h-7 w-7 text-[var(--brand-green)]" />
                  <div className="mt-3 font-display text-3xl text-[var(--brand-green)] md:text-4xl">
                    {s.n}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-[var(--text-2)]">
                    {s.l}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quem somos / Valores */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
                Quem somos
              </h2>
              <p className="mt-6 leading-relaxed text-[var(--text-1)]">
                A SMTS — SMT Solutions — é uma empresa brasileira sediada em {smts.city}-{smts.state},
                especializada em equipamentos e serviços para a indústria de montagem eletrônica.
                Representamos fabricantes líderes mundiais e oferecemos suporte completo, da
                especificação ao pós-venda, para clientes em todo o Brasil e na América do Sul.
              </p>
              <h3 className="mt-10 font-display text-lg uppercase tracking-tight">
                Setores atendidos
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {customerSegments.map((seg) => (
                  <span
                    key={seg}
                    className="rounded-full border border-[var(--border-c)] bg-[var(--surface-1)] px-4 py-2 font-mono-tech text-xs uppercase tracking-widest text-[var(--text-1)]"
                  >
                    {seg}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {smtsValues.map((v) => (
                <div
                  key={v.title}
                  className="rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-6"
                >
                  <h3 className="font-display text-base uppercase tracking-wide text-[var(--brand-green)]">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-1)]">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="bg-[var(--surface-2)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
            O que fazemos
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {smtsServices.map((srv) => (
              <div
                key={srv}
                className="flex items-start gap-3 rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-5"
              >
                <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-lime-dim)]" />
                <span className="text-sm leading-snug text-[var(--text-1)]">{srv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas representadas */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
            Marcas representadas
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--text-1)]">
            Parcerias com fabricantes líderes mundiais em montagem eletrônica, inspeção e automação.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {representedBrands.map((b) => (
              <div
                key={b.name}
                className="rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg uppercase tracking-wide text-[var(--brand-green)]">
                    {b.name}
                  </h3>
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-[var(--text-2)]">
                    {b.country}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-1)]">{b.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
