import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Download, FileText, Play, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { smts } from "@/data/company";

const downloads = [
  {
    title: "Catálogo MSTECH",
    description: "Visão geral corporativa, catálogo de equipamentos e rede global — edição oficial MSTECH.",
    href: "/catalog/mstech-profile.pdf",
    type: "PDF",
  },
];

const media = [
  {
    title: "Apresentação MSTECH",
    description: "Visão rápida do portfólio de depaneling e das fábricas da MSTECH.",
    src: "/intro/mstech-intro.mp4",
  },
];

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Recursos · SMTS — Catálogos & Documentação</title>
        <meta
          name="description"
          content="Baixe catálogos, assista a vídeos dos produtos e solicite a ficha técnica de qualquer equipamento."
        />
      </Helmet>

      <PageHero
        eyebrow="Recursos"
        title="Catálogos, vídeos e fichas técnicas."
        subtitle="Tudo o que você precisa para especificar seu equipamento. As fichas técnicas por modelo são enviadas sob solicitação."
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
          <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Vídeos</h2>
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
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]">Vídeo</span>
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
                Precisa da ficha técnica de um modelo?
              </h3>
              <p className="mt-3 text-sm text-[var(--text-1)]">
                Enviamos a revisão mais recente direto do fabricante. Mande o nome do equipamento
                e retornamos com a ficha técnica e um orçamento.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${smts.email}?subject=Datasheet%20request`}
                className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-lime)] px-5 py-2.5 font-display text-xs uppercase tracking-widest text-[var(--brand-green-dark)] hover:bg-[var(--brand-lime-bright)] transition"
              >
                <Mail className="h-4 w-4" /> Enviar e-mail
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border-c)] px-5 py-2.5 font-display text-xs uppercase tracking-widest text-[var(--text-1)] hover:border-[var(--brand-green)] transition"
              >
                Abrir formulário
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
