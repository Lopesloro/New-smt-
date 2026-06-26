import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Check, Sliders, Factory } from "lucide-react";
import { getMachine, getRelatedMachines } from "@/data/machines";
import { getCategory } from "@/data/categories";
import { MediaStage } from "@/components/machine/MediaStage";
import { Gallery } from "@/components/machine/Gallery";
import { SpecsTable } from "@/components/machine/SpecsTable";
import { Reveal } from "@/components/site/Reveal";
import { Play } from "lucide-react";
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
        <meta property="og:title" content={`${machine.fullName} · SMTS`} />
        <meta property="og:description" content={machine.tagline} />
        <meta property="og:image" content={machine.media.poster} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: machine.fullName,
            sku: machine.name,
            category: cat.name,
            brand: { "@type": "Brand", name: machine.brand },
            description: machine.description,
            image: machine.media.poster,
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <nav className="border-b border-[var(--border-c)] bg-[var(--surface-1)]">
        <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-6 py-4 font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)] lg:px-12">
          <Link to="/catalog" className="hover:text-[var(--brand-green)]">Catalog</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={`/catalog/${cat.slug}`} className="hover:text-[var(--brand-green)]">{cat.name}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[var(--text-0)]">{machine.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-[var(--border-c)]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:gap-14">
            <div>
              <MediaStage media={machine.media} hotspots={machine.hotspots} alt={machine.fullName} allowVideo={machine.category !== "software"} />
            </div>

            <div>
              <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--brand-lime-dim)]">
                {cat.name} · {machine.subcategory}
              </p>
              <h1 className="mt-4 font-display text-3xl uppercase tracking-tight md:text-5xl">
                {machine.name}
              </h1>
              <p className="mt-2 text-lg text-[var(--text-2)]">{machine.fullName}</p>
              <p className="mt-6 text-base leading-relaxed text-[var(--text-0)]">{machine.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-1)]">{machine.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={`/contact?machine=${encodeURIComponent(machine.name)}`}
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-green)] px-5 py-2.5 font-display text-xs uppercase tracking-widest text-white hover:bg-[var(--brand-green-light)] transition"
                >
                  Request quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/showroom"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--border-c)] px-5 py-2.5 font-display text-xs uppercase tracking-widest text-[var(--text-1)] hover:border-[var(--brand-lime)] hover:text-[var(--brand-green)] transition"
                >
                  Open in showroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Options */}
      <section className="border-b border-[var(--border-c)]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-[var(--brand-lime-dim)]" />
                <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Features</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {machine.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-[var(--text-1)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-lime)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {machine.options.length > 0 && (
              <div>
                <div className="flex items-center gap-3">
                  <Sliders className="h-5 w-5 text-[var(--brand-lime-dim)]" />
                  <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Options</h2>
                </div>
                <ul className="mt-6 space-y-3">
                  {machine.options.map((o) => (
                    <li key={o} className="flex gap-3 text-sm text-[var(--text-1)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--border-strong)]" />
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
        <section className="border-b border-[var(--border-c)]">
          <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-12">
            <div className="flex flex-wrap items-center gap-4">
              <Factory className="h-5 w-5 text-[var(--brand-lime-dim)]" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]">
                Applications
              </span>
              {machine.applications.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-[var(--border-c)] px-3 py-1 font-mono-tech text-xs uppercase tracking-widest text-[var(--text-1)]"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specs */}
      <section className="border-b border-[var(--border-c)]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-20">
          <SpecsTable specs={machine.specs} sections={machine.specSections} machineName={machine.name} />
        </div>
      </section>

      {/* Gallery */}
      {machine.media.gallery.length > 0 && (
        <section className="border-b border-[var(--border-c)]">
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
              {related.map((m, i) => (
                <Reveal key={m.slug} index={i} className="h-full">
                  <Link
                    to={`/catalog/${cat.slug}/${m.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-lime)] hover:shadow-[0_12px_30px_-12px_rgba(0,71,48,0.25)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-3)]">
                      <img
                        src={m.media.poster}
                        alt={m.fullName}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {m.media.video && (
                        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-[var(--brand-green)]/90 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-widest text-white backdrop-blur">
                          <Play className="h-2.5 w-2.5 fill-current" /> Video
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg uppercase tracking-tight text-[var(--brand-green)]">{m.name}</h3>
                      <p className="mt-1 text-sm text-[var(--text-1)]">{m.tagline}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
