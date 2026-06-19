import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Check, Sliders, Factory } from "lucide-react";
import { getMachine, getRelatedMachines } from "@/data/machines";
import { getCategory } from "@/data/categories";
import { MediaStage } from "@/components/machine/MediaStage";
import { Gallery } from "@/components/machine/Gallery";
import { SpecsTable } from "@/components/machine/SpecsTable";
import NotFound from "@/pages/NotFound";

export default function MachineDetail() {
  const { category, slug } = useParams();
  const machine = slug ? getMachine(slug) : undefined;
  const cat = category ? getCategory(category) : undefined;

  if (!machine || !cat || machine.category !== cat.id) return <NotFound />;

  const related = getRelatedMachines(machine, 3);

  return (
    <>
      <Helmet>
        <title>{machine.name} · {cat.name} · SMTS</title>
        <meta name="description" content={machine.tagline} />
      </Helmet>

      {/* Breadcrumb */}
      <nav className="border-b border-white/10 bg-[var(--surface-1)]">
        <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-6 py-4 font-mono-tech text-xs uppercase tracking-widest text-white/55 lg:px-12">
          <Link to="/catalog" className="hover:text-[var(--brand-lime)]">Catalog</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={`/catalog/${cat.slug}`} className="hover:text-[var(--brand-lime)]">{cat.name}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">{machine.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:gap-14">
            <div>
              <MediaStage media={machine.media} hotspots={machine.hotspots} alt={machine.fullName} />
            </div>

            <div>
              <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--brand-lime)]">
                {cat.name} · {machine.subcategory}
              </p>
              <h1 className="mt-4 font-display text-3xl uppercase tracking-tight md:text-5xl">
                {machine.name}
              </h1>
              <p className="mt-2 text-lg text-white/70">{machine.fullName}</p>
              <p className="mt-6 text-base leading-relaxed text-white/85">{machine.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/65">{machine.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-lime)] px-5 py-2.5 font-display text-xs uppercase tracking-widest text-[var(--brand-green-dark)] hover:bg-[var(--brand-lime-bright)] transition"
                >
                  Request quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/showroom"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 font-display text-xs uppercase tracking-widest text-white hover:bg-white/10 transition"
                >
                  Open in showroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Options */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-[var(--brand-lime)]" />
                <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Features</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {machine.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-white/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-lime)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {machine.options.length > 0 && (
              <div>
                <div className="flex items-center gap-3">
                  <Sliders className="h-5 w-5 text-[var(--brand-lime)]" />
                  <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Options</h2>
                </div>
                <ul className="mt-6 space-y-3">
                  {machine.options.map((o) => (
                    <li key={o} className="flex gap-3 text-sm text-white/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Applications */}
      {machine.applications.length > 0 && (
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-12">
            <div className="flex flex-wrap items-center gap-4">
              <Factory className="h-5 w-5 text-[var(--brand-lime)]" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-white/55">
                Applications
              </span>
              {machine.applications.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-white/15 px-3 py-1 font-mono-tech text-xs uppercase tracking-widest text-white/85"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specs */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-20">
          <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Specifications</h2>
          <div className="mt-6">
            <SpecsTable specs={machine.specs} machineName={machine.name} />
          </div>
        </div>
      </section>

      {/* Gallery */}
      {machine.media.gallery.length > 0 && (
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-20">
            <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Gallery</h2>
            <div className="mt-6">
              <Gallery images={machine.media.gallery} alt={machine.fullName} />
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section>
          <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-20">
            <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">
              Related machines
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((m) => (
                <Link
                  key={m.slug}
                  to={`/catalog/${cat.slug}/${m.slug}`}
                  className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] transition-colors hover:border-[var(--brand-lime)]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={m.media.poster}
                      alt={m.fullName}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg uppercase tracking-tight text-white">{m.name}</h3>
                    <p className="mt-1 text-sm text-white/65">{m.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
