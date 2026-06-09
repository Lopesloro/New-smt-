import { Bot, MonitorPlay, Upload, ShieldCheck, Gauge, Headphones } from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "Vídeo em cada máquina",
    desc: "Todo equipamento do catálogo tem um vídeo mostrando o funcionamento real na linha.",
  },
  {
    icon: Upload,
    title: "Upload de vídeos",
    desc: "Painel pronto para receber suas filmagens (mp4) ou links do YouTube/Vimeo.",
  },
  {
    icon: Bot,
    title: "Atendimento com IA 24h",
    desc: "Assistente inteligente que tira dúvidas técnicas e qualifica orçamentos a qualquer hora.",
  },
  {
    icon: Gauge,
    title: "Showroom em carrossel",
    desc: "Navegação fluida e interativa por todas as máquinas, no desktop e no celular.",
  },
  {
    icon: ShieldCheck,
    title: "Suporte e garantia",
    desc: "Assistência técnica especializada e peças de reposição para todo o Brasil.",
  },
  {
    icon: Headphones,
    title: "Treinamento",
    desc: "Capacitação da sua equipe para operar cada máquina com máxima eficiência.",
  },
];

export function Features() {
  return (
    <section id="solucoes" className="border-y border-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Uma plataforma totalmente tecnológica
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tudo que o seu showroom de máquinas precisa para vender mais e
            atender melhor.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-background p-6 transition hover:border-primary/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
