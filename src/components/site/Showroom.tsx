import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoPlayer } from "./VideoPlayer";
import { machines, type Machine } from "@/data/machines";
import { Check, PlayCircle } from "lucide-react";

function MachineCard({ machine, onPlay }: { machine: Machine; onPlay: () => void }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/60 hover:ring-glow">
      <button
        onClick={onPlay}
        className="relative aspect-video w-full overflow-hidden"
        aria-label={`Ver vídeo de ${machine.name}`}
      >
        <img
          src={machine.poster}
          alt={machine.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
          <PlayCircle className="h-14 w-14 text-white drop-shadow" />
        </span>
        <Badge className="absolute left-3 top-3 bg-primary/90">{machine.category}</Badge>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">
          {machine.brand}
        </p>
        <h3 className="mt-1 text-lg font-semibold leading-snug">{machine.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{machine.tagline}</p>

        <ul className="mt-4 space-y-1.5">
          {machine.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-foreground/90">
              <Check className="h-4 w-4 shrink-0 text-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-2 pt-1">
          <Button onClick={onPlay} className="flex-1">
            <PlayCircle className="h-4 w-4" />
            Como funciona
          </Button>
          <Button asChild variant="outline">
            <a href="#contato">Orçamento</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Showroom() {
  const [selected, setSelected] = useState<Machine | null>(null);

  return (
    <section id="showroom" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <Badge variant="outline" className="border-accent/40 text-accent">
            Showroom interativo
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Cada máquina com seu vídeo de funcionamento
          </h2>
          <p className="mt-4 text-muted-foreground">
            Navegue pelo carrossel e clique em qualquer equipamento para ver,
            na prática, como ele opera na linha de produção.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {machines.map((m) => (
              <CarouselItem
                key={m.slug}
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <MachineCard machine={m} onPlay={() => setSelected(m)} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-end gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selected.name}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>

              <VideoPlayer
                source={selected.video}
                poster={selected.poster}
                title={selected.name}
                autoEmbed
              />

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {selected.specs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-border bg-secondary/40 p-3"
                  >
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="mt-0.5 font-semibold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-2">
                <a href="#contato">Solicitar orçamento desta máquina</a>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
