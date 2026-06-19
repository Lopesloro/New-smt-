import { Helmet } from "react-helmet-async";
import { Award, Globe, Cpu, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { mstech, milestones, certifications, globalNetwork, customerSegments } from "@/data/company";

const stats = [
  { icon: Cpu, n: mstech.founded.toString(), l: "Founded" },
  { icon: Users, n: `${mstech.employees}`, l: "Employees" },
  { icon: Award, n: `${mstech.patents}+`, l: "Patents" },
  { icon: Globe, n: `${mstech.countries}+`, l: "Countries served" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About · SMTS — Official MSTECH Partner</title>
        <meta
          name="description"
          content="MSTECH is a Korean precision-engineering company founded in 1994, specialized in PCB depaneling systems. SMTS is the official partner in Brazil & Argentina."
        />
      </Helmet>

      <PageHero
        eyebrow="About"
        title="Korean precision, since 1994."
        subtitle={mstech.description}
      />

      {/* Stats */}
      <section className="bg-[var(--surface-2)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <s.icon className="mx-auto h-7 w-7 text-[var(--brand-green)]" />
                <div className="mt-3 font-display text-4xl text-[var(--brand-green)] md:text-5xl">{s.n}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-[var(--text-2)]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">Leadership</h2>
              <dl className="mt-8 space-y-5 text-[var(--text-1)]">
                <div className="flex justify-between border-b border-[var(--border-c)] pb-4">
                  <dt className="font-medium text-[var(--text-0)]">CEO</dt>
                  <dd>{mstech.ceo}</dd>
                </div>
                <div className="flex justify-between border-b border-[var(--border-c)] pb-4">
                  <dt className="font-medium text-[var(--text-0)]">Headquarters</dt>
                  <dd className="text-right">{mstech.hq}</dd>
                </div>
                <div className="flex justify-between border-b border-[var(--border-c)] pb-4">
                  <dt className="font-medium text-[var(--text-0)]">Capital</dt>
                  <dd>{mstech.capital}</dd>
                </div>
                <div className="flex justify-between border-b border-[var(--border-c)] pb-4">
                  <dt className="font-medium text-[var(--text-0)]">Slogan</dt>
                  <dd className="italic">"{mstech.slogan}"</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">Industries served</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {customerSegments.map((seg) => (
                  <span
                    key={seg}
                    className="rounded-full border border-[var(--border-c)] bg-[var(--surface-1)] px-4 py-2 font-mono-tech text-xs uppercase tracking-widest text-[var(--text-1)]"
                  >
                    {seg}
                  </span>
                ))}
              </div>
              <h3 className="mt-12 font-display text-lg uppercase tracking-tight">Reference customers</h3>
              <p className="mt-3 text-sm text-[var(--text-1)]">
                Samsung Electronics · LG Electronics · Nokia · Continental · Flextronics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[var(--surface-2)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">Milestones</h2>
          <p className="mt-3 max-w-2xl text-[var(--text-1)]">Three decades of patented innovation in PCB depaneling.</p>
          <ol className="relative mt-12 space-y-8 border-l-2 border-[var(--brand-lime)] pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[42px] flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-green)] ring-4 ring-[var(--surface-2)]" />
                <div className="font-display text-2xl text-[var(--brand-green)]">{m.year}</div>
                <p className="mt-1 text-[var(--text-1)]">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">Certifications & awards</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-5"
              >
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-lime-dim)]" />
                <span className="text-sm leading-snug text-[var(--text-1)]">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global network */}
      <section className="bg-[var(--surface-2)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">Global network</h2>
          <p className="mt-3 max-w-2xl text-[var(--text-1)]">
            Local presence in 30+ countries through authorised partners.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {(["asia", "europe", "americas"] as const).map((region) => (
              <div key={region} className="rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-6">
                <h3 className="font-display text-lg uppercase tracking-wide text-[var(--brand-green)]">{region}</h3>
                <ul className="mt-5 space-y-3">
                  {globalNetwork[region].map((row) => (
                    <li key={row.country} className="border-b border-[var(--border-c)] pb-3 text-sm last:border-0">
                      <div className="font-medium text-[var(--text-0)]">{row.country}</div>
                      <div className="text-[var(--text-2)]">{row.partner}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
