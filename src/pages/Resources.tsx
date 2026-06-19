import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Download, FileText, Play, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { smts } from "@/data/company";

const downloads = [
  {
    title: "MSTECH Company Profile",
    description: "30-year corporate overview, machine catalog and global network — official MSTECH 2024 edition.",
    href: "/catalog/mstech-profile.pdf",
    type: "PDF",
  },
];

const media = [
  {
    title: "MSTECH Intro",
    description: "Quick walkthrough of MSTECH's depaneling portfolio and factories.",
    src: "/intro/mstech-intro.mp4",
  },
];

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources · SMTS — Catalog & Documentation</title>
        <meta
          name="description"
          content="Download the MSTECH company catalog, watch product videos and request datasheets for any machine."
        />
      </Helmet>

      <PageHero
        eyebrow="Resources"
        title="Catalogs, videos & datasheets."
        subtitle="Everything you need to spec a MSTECH depaneling system. Datasheets per machine are sent on request — direct from the source."
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Downloads</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {downloads.map((d) => (
              <a
                key={d.href}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-6 transition-colors hover:border-[var(--brand-lime)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[var(--brand-green)] text-white">
                  <FileText className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-lime-dim)]">
                      {d.type}
                    </span>
                    <Download className="h-4 w-4 text-[var(--text-2)] group-hover:text-[var(--brand-green)]" />
                  </div>
                  <h3 className="mt-2 font-display text-lg uppercase tracking-tight text-[var(--brand-green)]">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-1)]">{d.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-2)] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Videos</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {media.map((v) => (
              <div
                key={v.src}
                className="overflow-hidden rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)]"
              >
                <div className="aspect-video bg-black">
                  <video
                    src={v.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4 text-[var(--brand-lime-dim)]" />
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]">Video</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg uppercase tracking-tight text-[var(--brand-green)]">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-1)]">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[var(--border-c)] bg-[var(--surface-1)] p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h3 className="font-display text-xl uppercase tracking-tight text-[var(--brand-green)]">
                Need a datasheet for a specific model?
              </h3>
              <p className="mt-3 text-sm text-[var(--text-1)]">
                We send the latest revision direct from MSTECH. Drop us a line with the machine name and
                we'll forward the technical sheet plus a quote.
              </p>
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
    </>
  );
}
