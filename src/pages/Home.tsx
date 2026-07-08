import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ChevronDown, Cpu, ScanLine, Layers, Boxes } from "lucide-react";
import { motion } from "framer-motion";
import { smtsStats } from "@/data/company";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";

const capabilities = ["Placement", "Printing", "Inspection", "Depaneling", "Reflow", "Marking", "Handling"];

const pillars = [
  { icon: Cpu, title: "Electronic assembly", text: "SMT equipment for printing, placement and reflow — from the world's leading manufacturers.", to: "/catalog/surface-mounters" },
  { icon: ScanLine, title: "Inspection & testing", text: "Optical, X-ray and test systems for full quality assurance.", to: "/catalog/inspection" },
  { icon: Layers, title: "Automation", text: "Production lines, PCB handling, laser marking and traceability.", to: "/catalog/conveyors" },
  { icon: Boxes, title: "Full support", text: "Specification, installation, training and technical service across Brazil and South America.", to: "/contact" },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Logo grows in sync with the hero video: small at the start, then it scales
  // up to full size as the camera rises near the end. Repeats every loop.
  useEffect(() => {
    const v = videoRef.current;
    const logo = logoRef.current;
    if (!v || !logo) return;

    const SMALL = 0.2; // starting size as a fraction of full
    let raf = 0;

    const tick = () => {
      const d = v.duration || 25;
      const t = v.currentTime;
      const start = d * 0.65; // begin growing here (camera starts rising)
      const end = d * 0.97; // full size just before the loop restarts
      let p = (t - start) / (end - start);
      p = Math.max(0, Math.min(1, p));
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const scale = SMALL + (1 - SMALL) * eased;
      logo.style.transform = `scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

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
            email: "comercial@smts.com.br",
            telephone: "+55-19-99477-6662",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Cândido Bueno, 1299, Pav. 1, Sala 8, Cond. Jaguar Center Plaza",
              addressLocality: "Jaguariúna",
              addressRegion: "SP",
              postalCode: "13910-033",
              addressCountry: "BR",
            },
            areaServed: "South America",
            description: "Equipment and services for electronic assembly, automation and testing.",
          })}
        </script>
      </Helmet>

      {/* Hero — full-screen video filling the whole viewport */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src="/videos/overview.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Logo + anchor brand (Yamaha) — top, centered; grows with the video */}
        <Link
          to="/"
          aria-label="SMT Solutions — Home"
          className="absolute left-1/2 top-6 -translate-x-1/2"
        >
          <div
            ref={logoRef}
            style={{ transformOrigin: "center top", transform: "scale(0.2)" }}
            className="flex items-center gap-[2.5vw] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
          >
            <img
              src="/brand/smt-solutions.png"
              alt="SMT Solutions"
              className="h-auto w-[42vw] max-w-[440px] shrink-0"
            />
            {/* "barra" separadora */}
            <span className="h-[clamp(40px,7vw,90px)] w-px shrink-0 bg-white/60" />
            {/* Marca âncora — logo oficial Yamaha Motor + Revs Your Heart */}
            <span className="flex shrink-0 flex-col items-center gap-1">
              <img
                src="/brand/yamaha-motor.svg"
                alt="Yamaha Motor"
                className="h-auto w-[28vw] max-w-[300px] shrink-0"
              />
              {/* slogan preto invertido para branco (fica legível sobre o vídeo) */}
              <img
                src="/brand/revs-your-heart.png"
                alt="Revs Your Heart"
                className="h-auto w-[22vw] max-w-[230px] shrink-0 invert"
              />
            </span>
          </div>
        </Link>

        {/* Scroll cue */}
        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 drop-shadow" />
        </motion.div>
      </section>

      {/* Everything below the hero clears the left sidebar that slides in on scroll */}
      <div className="lg:pl-[280px]">

      {/* Pillars */}
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal>
            <h2 className="font-display text-3xl uppercase tracking-tight md:text-4xl lg:text-5xl">
              What does SMTS offer?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[var(--text-1)]">
              The complete solution to build your electronic assembly (SMT) line — placement,
              solder-paste printing, inspection, reflow, depaneling and X-ray — from the world's
              leading manufacturers.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} index={i}>
                <Link
                  to={p.to}
                  className="group block h-full rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--brand-lime)] hover:shadow-[0_16px_40px_-16px_rgba(0,71,48,0.3)]"
                >
                  <p.icon className="h-8 w-8 text-[var(--brand-green)] transition-colors group-hover:text-[var(--brand-lime-dim)]" />
                  <h3 className="mt-6 font-display text-lg uppercase tracking-wide">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-1)]">{p.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SMTS numbers */}
      <section className="border-y border-[var(--border-c)] bg-[var(--surface-1)] py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {smtsStats.map((item, i) => (
              <Reveal key={item.l} index={i} className="text-center">
                <div className="font-display text-4xl text-[var(--brand-green)] md:text-6xl">
                  <CountUp value={String(item.n)} />
                </div>
                <div className="mt-3 text-xs uppercase tracking-widest text-[var(--text-2)]">
                  {item.l}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Capabilities */}
          <Reveal>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {capabilities.map((c) => (
                <span
                  key={c}
                  className="font-display text-lg uppercase tracking-wide text-[var(--text-2)] transition-colors hover:text-[var(--brand-green)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <Reveal className="rounded-xl bg-[var(--brand-green)] px-8 py-12 text-white md:px-16 md:py-16">
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
          </Reveal>
        </div>
      </section>
      </div>
    </div>
  );
}
