import { Helmet } from "react-helmet-async";
import { Award, Globe, Wrench, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import {
  smts,
  smtsStats,
  smtsValues,
  smtsServices,
  customerSegments,
} from "@/data/company";
import { categories } from "@/data/categories";

const statIcons = [Users, Award, Globe, Wrench];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About · SMT Solutions (SMTS)</title>
        <meta
          name="description"
          content="SMTS is a Campinas-based company, founded in 2005, providing equipment and services for electronic assembly, automation and testing, representing world-leading manufacturers across South America."
        />
      </Helmet>

      <PageHero
        eyebrow="About SMTS"
        title="Solutions for the electronics industry since 2005."
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

      {/* Who we are / Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
                Who we are
              </h2>
              <p className="mt-6 leading-relaxed text-[var(--text-1)]">
                SMTS — SMT Solutions — is a Brazilian company based in {smts.city}-{smts.state},
                specialized in equipment and services for the electronic assembly industry. We
                represent world-leading manufacturers and provide full support, from specification
                to after-sales, to customers across Brazil and South America.
              </p>
              <h3 className="mt-10 font-display text-lg uppercase tracking-tight">
                Industries served
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

      {/* What we do */}
      <section className="bg-[var(--surface-2)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
            What we do
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

      {/* Product lines */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
            Product lines
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--text-1)]">
            A complete range for electronic assembly, inspection, depaneling and automation.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div
                key={c.id}
                className="rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-6"
              >
                <h3 className="font-display text-lg uppercase tracking-wide text-[var(--brand-green)]">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-1)]">{c.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
