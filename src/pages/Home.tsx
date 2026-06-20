import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Cpu, ScanLine, Layers, Boxes } from "lucide-react";
import { smtsStats, representedBrands } from "@/data/company";

const pillars = [
  { icon: Cpu, title: "Electronic assembly", text: "SMT equipment for printing, placement and reflow — from the world's leading manufacturers." },
  { icon: ScanLine, title: "Inspection & testing", text: "Optical, X-ray and test systems for full quality assurance." },
  { icon: Layers, title: "Automation", text: "Production lines, PCB handling, laser marking and traceability." },
  { icon: Boxes, title: "Full support", text: "Specification, installation, training and technical service across Brazil and South America." },
];

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>SMT Solutions (SMTS) — Electronic assembly equipment</title>
        <meta
          name="description"
          content="SMTS provides equipment and services for electronic assembly, automation and testing, representing world-leading manufacturers in Brazil and South America."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SMT Solutions (SMTS)",
            url: "https://www.smts.com.br",
            logo: "https://www.smts.com.br/brand/smt-solutions.png",
            foundingDate: "2005",
            email: "ricardo@smts.com.br",
            telephone: "+55-19-3294-8902",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Campinas",
              addressRegion: "SP",
              addressCountry: "BR",
            },
            areaServed: "South America",
            description: "Equipment and services for electronic assembly, automation and testing.",
          })}
        </script>
      </Helmet>

      {/* Hero — full screen, SMT Solutions brand */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[var(--brand-green-dark)] text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(152,215,20,0.22),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(0,107,71,0.6),transparent_60%)]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(var(--brand-lime) 1px, transparent 1px), linear-gradient(90deg, var(--brand-lime) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="mx-auto w-full max-w-[1280px] px-6 py-32 lg:px-12">
          <p className="font-display text-xs uppercase tracking-[0.18em] text-[var(--brand-lime)]">
            SMT Solutions · Brazil &amp; South America
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl uppercase leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Complete solutions for electronic assembly.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Equipment, automation and testing from the world's leading manufacturers — backed by
            20+ years of experience in high technology and automotive electronics.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-lime)] px-6 py-3 font-display text-sm uppercase tracking-wider text-[var(--brand-green-dark)] hover:bg-[var(--brand-lime-bright)] transition"
            >
              Explore catalog <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-display text-sm uppercase tracking-wider text-white hover:bg-white/10 transition"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
            What SMTS offers
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--text-1)]">
            End-to-end solutions for the electronics industry, with official representation of the
            world's leading manufacturers.
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

      {/* 3D highlight — pick-and-place animation */}
      <section className="bg-[var(--surface-2)] py-24 lg:py-32 [perspective:1500px]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-lime-dim)]">
                Technology in motion
              </p>
              <h2 className="mt-2 font-display text-2xl uppercase tracking-tight md:text-4xl">
                See assembly in action
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-[var(--text-1)]">
                A pick &amp; place animation — the precision and speed that define modern
                electronic assembly lines.
              </p>
              <Link
                to="/catalog"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--brand-green)] px-6 py-3 font-display text-sm uppercase tracking-wider text-white hover:bg-[var(--brand-green-light)] transition"
              >
                Explore catalog <ArrowRight className="h-4 w-4" />
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

      {/* SMTS numbers */}
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

          {/* Represented brands */}
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
              Building a production line?
            </h3>
            <p className="mt-3 max-w-2xl text-white/80">
              Talk to our team to spec the right equipment for your volume and process.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--brand-lime)] px-6 py-3 font-display text-sm uppercase tracking-wider text-[var(--brand-green-dark)] hover:bg-[var(--brand-lime-bright)] transition"
            >
              Talk to SMTS <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
