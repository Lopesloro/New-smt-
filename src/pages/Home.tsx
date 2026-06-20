import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Cpu, ScanLine, Layers, Boxes } from "lucide-react";
import { smtsStats, representedBrands } from "@/data/company";
import { getFeaturedMachines } from "@/data/machines";

const pillars = [
  { icon: Cpu, title: "Montagem eletrônica", text: "Equipamentos SMT para impressão, montagem e refusão — das marcas líderes mundiais." },
  { icon: ScanLine, title: "Inspeção & testes", text: "Inspeção óptica, raio-X e sistemas de teste para garantia de qualidade." },
  { icon: Layers, title: "Automação", text: "Linhas de produção, handling de PCB, marcação a laser e rastreabilidade." },
  { icon: Boxes, title: "Suporte completo", text: "Especificação, instalação, treinamento e assistência técnica no Brasil e na América do Sul." },
];

export default function Home() {
  const featured = getFeaturedMachines();
  const slides = featured.slice(0, 6);
  const [slide, setSlide] = useState(0);

  // Carrossel automático — as imagens passam sozinhas
  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => setSlide((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div>
      <Helmet>
        <title>SMT Solutions (SMTS) — Equipamentos para montagem eletrônica</title>
        <meta
          name="description"
          content="A SMTS fornece equipamentos e serviços para montagem eletrônica, automação e testes, representando fabricantes líderes mundiais no Brasil e na América do Sul."
        />
      </Helmet>

      {/* Hero — tela cheia, vídeo limpo */}
      <section className="relative isolate flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            src="/intro/mstech-intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          {/* leve gradiente só na base, para leitura do texto (sem tingir o vídeo) */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--brand-green-dark)] via-[var(--brand-green-dark)]/70 to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-[1280px] px-6 pb-20 pt-32 lg:px-12 lg:pb-28">
          <p className="font-display text-xs uppercase tracking-[0.18em] text-[var(--brand-lime)]">
            SMT Solutions · Brasil &amp; América do Sul
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl uppercase leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Soluções completas para montagem eletrônica.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Equipamentos, automação e testes das marcas líderes mundiais — com mais de 20 anos
            de experiência em alta tecnologia e eletrônica automotiva.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-lime)] px-6 py-3 font-display text-sm uppercase tracking-wider text-[var(--brand-green-dark)] hover:bg-[var(--brand-lime-bright)] transition"
            >
              Ver catálogo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/showroom"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-display text-sm uppercase tracking-wider text-white hover:bg-white/10 transition"
            >
              Entrar no showroom
            </Link>
          </div>
        </div>
      </section>

      {/* Carrossel automático de destaques — as imagens passam sozinhas */}
      {slides.length > 0 && (
        <section className="bg-[var(--surface-2)] py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-lime-dim)]">
                  Showroom em destaque
                </p>
                <h2 className="mt-2 font-display text-2xl uppercase tracking-tight md:text-3xl">
                  Equipamentos em destaque
                </h2>
              </div>
              <Link
                to="/showroom"
                className="hidden items-center gap-2 font-display text-xs uppercase tracking-widest text-[var(--brand-green)] hover:text-[var(--brand-green-light)] md:inline-flex"
              >
                Ver tudo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-xl border border-[var(--border-c)] bg-black">
              {slides.map((m, i) => (
                <img
                  key={m.slug}
                  src={m.media.poster}
                  alt={m.fullName}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    i === slide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 lg:p-8">
                <p className="font-display text-xl uppercase tracking-tight text-white md:text-2xl">
                  {slides[slide]?.name}
                </p>
                <p className="mt-1 text-sm text-white/80">{slides[slide]?.tagline}</p>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {slides.map((m, i) => (
                <button
                  key={m.slug}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Ir para ${m.name}`}
                  className={`h-2 rounded-full transition-all ${
                    i === slide ? "w-8 bg-[var(--brand-lime)]" : "w-2 bg-[var(--border-strong)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pilares */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
            O que a SMTS oferece
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--text-1)]">
            Soluções de ponta a ponta para a indústria eletrônica, com representação oficial dos
            principais fabricantes mundiais.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-8 transition-colors hover:border-[var(--brand-lime)]"
              >
                <p.icon className="h-7 w-7 text-[var(--brand-green)] group-hover:text-[var(--brand-lime-dim)] transition-colors" />
                <h3 className="mt-5 font-display text-lg uppercase tracking-wide">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-1)]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaque em 3D — vídeo animado pick-and-place */}
      <section className="bg-[var(--surface-2)] py-24 lg:py-32 [perspective:1500px]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-lime-dim)]">
                Tecnologia em movimento
              </p>
              <h2 className="mt-2 font-display text-2xl uppercase tracking-tight md:text-4xl">
                Veja a montagem em ação
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-[var(--text-1)]">
                Animação do processo de pick &amp; place — precisão e velocidade que definem
                as linhas de montagem eletrônica modernas.
              </p>
              <Link
                to="/showroom"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--brand-green)] px-6 py-3 font-display text-sm uppercase tracking-wider text-white hover:bg-[var(--brand-green-light)] transition"
              >
                Explorar showroom <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="group [transform-style:preserve-3d] [transform:rotateY(-14deg)_rotateX(6deg)] transition-transform duration-500 hover:[transform:rotateY(0deg)_rotateX(0deg)]">
              <div className="overflow-hidden rounded-xl border border-[var(--border-c)] bg-black shadow-2xl shadow-[var(--brand-green)]/20">
                <video
                  src="/videos/pick-and-place.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-video h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números da SMTS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {smtsStats.map((item) => (
              <div key={item.l} className="text-center">
                <div className="font-display text-3xl text-[var(--brand-green)] md:text-5xl">
                  {item.n}
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-[var(--text-2)]">
                  {item.l}
                </div>
              </div>
            ))}
          </div>

          {/* Marcas representadas */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {representedBrands.map((b) => (
              <span
                key={b.name}
                className="font-display text-lg uppercase tracking-wide text-[var(--text-2)]"
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="rounded-xl bg-[var(--brand-green)] px-8 py-12 text-white md:px-16 md:py-16">
            <h3 className="font-display text-2xl uppercase tracking-tight md:text-4xl">
              Vamos montar sua linha de produção?
            </h3>
            <p className="mt-3 max-w-2xl text-white/80">
              Fale com nossa equipe para especificar o equipamento certo para o seu volume e processo.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--brand-lime)] px-6 py-3 font-display text-sm uppercase tracking-wider text-[var(--brand-green-dark)] hover:bg-[var(--brand-lime-bright)] transition"
            >
              Falar com a SMTS <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
