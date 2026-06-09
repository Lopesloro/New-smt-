import { useMemo, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { yamahaMachines, YT_ID, type YamahaMachine } from "@/data/yamaha";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function YamahaShowroom() {
  const [active, setActive] = useState<YamahaMachine>(yamahaMachines[0]);

  // Agrupa as máquinas por categoria para o menu da direita.
  const grouped = useMemo(() => {
    const map = new Map<string, YamahaMachine[]>();
    for (const m of yamahaMachines) {
      if (!map.has(m.category)) map.set(m.category, []);
      map.get(m.category)!.push(m);
    }
    return [...map.entries()];
  }, []);

  return (
    <section id="yamaha" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <Badge variant="outline" className="border-accent/40 text-accent">
            Linha Yamaha SMT
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Máquinas Yamaha disponíveis
          </h2>
          <p className="mt-4 text-muted-foreground">
            Selecione um equipamento no menu à direita para ver o trecho do vídeo
            e as informações de cada máquina.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Conteúdo principal */}
          <div>
            <VideoPlayer
              key={active.model}
              source={{ kind: "youtube", id: YT_ID, start: active.start, end: active.end }}
              poster="/machines/yamaha.svg"
              title={active.name}
            />

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                {active.category}
              </p>
              <div className="mt-1 flex flex-wrap items-baseline gap-3">
                <h3 className="text-2xl font-bold">{active.name}</h3>
                <Badge className="bg-primary/90">{active.model}</Badge>
              </div>
              <p className="mt-3 max-w-2xl text-muted-foreground">{active.blurb}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {active.specs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-border bg-secondary/40 p-3"
                  >
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="mt-0.5 font-semibold">{s.value}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Trecho do vídeo: {fmt(active.start)}–{fmt(active.end)}
              </p>

              <Button asChild size="lg" className="mt-5">
                <a href="#contato">Solicitar orçamento da {active.model}</a>
              </Button>
            </div>
          </div>

          {/* Menu à direita */}
          <aside className="lg:order-last">
            <div className="lg:sticky lg:top-20 rounded-xl border border-border bg-card p-4">
              <p className="px-2 pb-2 text-sm font-semibold text-foreground">
                Equipamentos
              </p>
              <nav className="space-y-4">
                {grouped.map(([category, items]) => (
                  <div key={category}>
                    <p className="px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {category}
                    </p>
                    <ul className="mt-1.5 space-y-1">
                      {items.map((m) => {
                        const selected = m.model === active.model;
                        return (
                          <li key={m.model}>
                            <button
                              onClick={() => setActive(m)}
                              className={cn(
                                "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition",
                                selected
                                  ? "bg-primary text-primary-foreground"
                                  : "text-foreground/80 hover:bg-secondary",
                              )}
                            >
                              <span>
                                <span className="font-semibold">{m.model}</span>
                              </span>
                              {selected && <Check className="h-4 w-4" />}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}
