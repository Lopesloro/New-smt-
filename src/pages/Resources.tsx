import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mail, FileText } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { smts } from "@/data/company";
import { categories } from "@/data/categories";

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources · SMTS — Catalogs & Documentation</title>
        <meta
          name="description"
          content="Request catalogs and datasheets for the equipment represented by SMTS."
        />
      </Helmet>

      <PageHero
        eyebrow="Resources"
        title="Catalogs & datasheets."
        subtitle="Per-model datasheets and catalogs are sent on request — tell us which equipment you're evaluating."
      />

      {/* Request CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[var(--border-c)] bg-[var(--surface-1)] p-8 md:flex-row md:items-center md:p-10">
            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[var(--brand-green)] text-white">
                <FileText className="h-6 w-6" />
              </span>
              <div className="max-w-xl">
                <h3 className="font-display text-xl uppercase tracking-tight text-[var(--brand-green)]">
                  Need a datasheet or catalog?
                </h3>
                <p className="mt-2 text-sm text-[var(--text-1)]">
                  Tell us the machine or product line and we'll reply with the latest documentation
                  and a quote.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${smts.email}?subject=Datasheet%20request`}
                className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-lime)] px-5 py-2.5 font-display text-xs uppercase tracking-widest text-[var(--brand-green-dark)] hover:bg-[var(--brand-lime-bright)] transition"
              >
                <Mail className="h-4 w-4" /> Email us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border-c)] px-5 py-2.5 font-display text-xs uppercase tracking-widest text-[var(--text-1)] hover:border-[var(--brand-green)] transition"
              >
                Open form
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[var(--surface-2)] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">
            Documentation by line
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.id}
                to={`/catalog/${c.slug}`}
                className="rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-6 transition-colors hover:border-[var(--brand-lime)]"
              >
                <h3 className="font-display text-lg uppercase tracking-wide text-[var(--brand-green)]">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-1)]">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
