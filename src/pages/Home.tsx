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

      {/* Hero — full-screen video, nothing on top */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          src="/videos/overview.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
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
