import { Link } from "react-router-dom";
import { ArrowRight, Cpu, ScanLine, Zap, Layers } from "lucide-react";

const pillars = [
  { icon: Cpu, title: "Bit Router", text: "In-line and off-line depaneling routers with dual spindle, AWA and ATC." },
  { icon: Layers, title: "Sawing", text: "Diamond-blade sawing for long-line cut designs, with bidirectional head rotation." },
  { icon: Zap, title: "Laser", text: "Laser depaneling for sensitive substrates, advanced vision and traceability." },
  { icon: ScanLine, title: "Inspection & FA", text: "Particle, vision and line monitoring systems for Industry 4.0." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--brand-green)] text-white">
        <div className="absolute inset-0 -z-10">
          <video
            src="/intro/mstech-intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(152,215,20,0.18),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,107,71,0.65),transparent_70%)]" />
          <div className="absolute inset-0 bg-[var(--brand-green-dark)]/55" />
        </div>
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-36">
          <p className="font-display text-xs uppercase tracking-[0.18em] text-[var(--brand-lime)]">
            Official MSTECH partner · Brazil &amp; Argentina
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl uppercase leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Precision depaneling, perfected since 1994.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Bit, sawing and laser depaneling systems engineered for high-mix, high-precision PCB manufacturing.
            Backed by 20+ patents and a global service footprint.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-lime)] px-6 py-3 font-display text-sm uppercase tracking-wider text-[var(--text-on-accent)] hover:bg-[var(--brand-lime-bright)] transition"
            >
              Explore catalog <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/showroom"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-display text-sm uppercase tracking-wider text-white hover:bg-white/10 transition"
            >
              Enter showroom
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
            Four production-ready lines
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--text-1)]">
            From single-table off-line workstations to dual in-line stations — MSTECH covers every depaneling scenario.
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

      {/* MSTECH at a glance */}
      <section className="bg-[var(--surface-2)] py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl text-center">
            MSTECH at a glance
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {[
              { n: "1994", l: "Founded" },
              { n: "94", l: "Employees" },
              { n: "20+", l: "Patents" },
              { n: "30+", l: "Countries served" },
            ].map((item) => (
              <div key={item.l} className="text-center">
                <div className="font-display text-5xl text-[var(--brand-green)] md:text-6xl">{item.n}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-[var(--text-2)]">{item.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="rounded-xl bg-[var(--brand-green)] px-8 py-12 md:px-16 md:py-16 text-white">
            <h3 className="font-display text-2xl uppercase tracking-tight md:text-4xl">
              Building a depaneling line?
            </h3>
            <p className="mt-3 max-w-2xl text-white/75">
              Talk to our engineering team to spec the right machine for your production volume and PCB design.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--brand-lime)] px-6 py-3 font-display text-sm uppercase tracking-wider text-[var(--text-on-accent)] hover:bg-[var(--brand-lime-bright)] transition"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
