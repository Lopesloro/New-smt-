import { useState } from "react";
import { Play } from "lucide-react";
import type { VideoSource } from "@/data/machines";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  source: VideoSource;
  poster?: string;
  title?: string;
  className?: string;
  /** Quando true, já inicia com o vídeo carregado (sem clique). */
  autoEmbed?: boolean;
}

function embedUrl(source: VideoSource): string {
  switch (source.kind) {
    case "youtube": {
      const params = new URLSearchParams({
        autoplay: "1",
        rel: "0",
        modestbranding: "1",
      });
      if (source.start != null) params.set("start", String(source.start));
      if (source.end != null) params.set("end", String(source.end));
      return `https://www.youtube-nocookie.com/embed/${source.id}?${params.toString()}`;
    }
    case "vimeo":
      return `https://player.vimeo.com/video/${source.id}?autoplay=1`;
    case "file":
      return source.src;
  }
}

/**
 * Player universal: clique-para-tocar (lazy) para YouTube/Vimeo e
 * <video> nativo para arquivos mp4 enviados/gerados (Remotion).
 */
export function VideoPlayer({
  source,
  poster,
  title,
  className,
  autoEmbed = false,
}: VideoPlayerProps) {
  const [active, setActive] = useState(autoEmbed);

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-black",
        className,
      )}
    >
      {source.kind === "file" ? (
        <video
          className="h-full w-full"
          src={source.src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
        />
      ) : active ? (
        <iframe
          className="h-full w-full"
          src={embedUrl(source)}
          title={title ?? "Vídeo da máquina"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={`Reproduzir vídeo${title ? `: ${title}` : ""}`}
        >
          {poster && (
            <img
              src={poster}
              alt={title ?? ""}
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition group-hover:opacity-100"
            />
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground ring-glow transition group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
          <span className="absolute bottom-3 left-4 text-xs font-medium text-white/80">
            Ver como funciona
          </span>
        </button>
      )}
    </div>
  );
}
