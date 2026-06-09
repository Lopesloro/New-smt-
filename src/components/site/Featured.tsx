import { VideoPlayer } from "./VideoPlayer";
import { Badge } from "@/components/ui/badge";

/**
 * Vídeo em destaque na home.
 * Trecho recortado do YouTube: 10:54 (654s) até 11:19 (679s).
 */
export function Featured() {
  return (
    <section className="relative border-y border-border bg-card/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="border-accent/40 text-accent">
            Veja em ação
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            As máquinas funcionando na prática
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Um trecho real do processo de produção de placas eletrônicas.
          </p>
        </div>

        <div className="mx-auto max-w-4xl ring-glow rounded-xl">
          <VideoPlayer
            source={{ kind: "youtube", id: "ttkhyhas4Mw", start: 654, end: 679 }}
            poster="/machines/yamaha.svg"
            title="As máquinas funcionando na prática"
          />
        </div>
      </div>
    </section>
  );
}
