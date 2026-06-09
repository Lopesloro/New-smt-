import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Fundo tech */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
      <div className="absolute left-1/2 top-[-10%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-accent">
            <Cpu className="h-3.5 w-3.5" />
            Tecnologia para montagem de placas eletrônicas
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Máquinas industriais com{" "}
            <span className="text-primary text-glow">vídeo de funcionamento</span>{" "}
            de cada equipamento
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Conheça nosso showroom interativo: veja na prática como cada máquina
            SMT trabalha, do pick-and-place ao forno de refluxo. Suporte técnico
            e atendimento inteligente 24 horas.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#showroom">
                <PlayCircle className="h-5 w-5" />
                Ver showroom de máquinas
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contato">
                Falar com especialista
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6">
            {[
              { k: "+20", v: "anos de mercado" },
              { k: "100%", v: "máquinas com vídeo" },
              { k: "24h", v: "atendimento com IA" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-3xl font-bold text-foreground sm:text-4xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
