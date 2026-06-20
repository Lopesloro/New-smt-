import { useRef, useState } from "react";
import { Image as ImageIcon, Play, RotateCw } from "lucide-react";
import type { MachineMedia, Hotspot } from "@/data/types";
import { HotspotOverlay } from "./HotspotOverlay";
import { Carousel360 } from "./Carousel360";

interface Props {
  media: MachineMedia;
  hotspots: Hotspot[];
  alt: string;
}

type Tab = "photo" | "video" | "360";

export function MediaStage({ media, hotspots, alt }: Props) {
  const hasVideo = Boolean(media.video);
  const has360 = Boolean(media.rotation360?.frames?.length);
  const [tab, setTab] = useState<Tab>("photo");
  const videoRef = useRef<HTMLVideoElement>(null);

  const tabs: { id: Tab; label: string; icon: typeof ImageIcon; enabled: boolean }[] = [
    { id: "photo", label: "Foto", icon: ImageIcon, enabled: true },
    { id: "video", label: "Vídeo", icon: Play, enabled: hasVideo },
    { id: "360", label: "360°", icon: RotateCw, enabled: has360 },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[var(--border-c)] bg-black">
        {tab === "photo" && (
          <>
            <img src={media.poster} alt={alt} className="h-full w-full object-cover" />
            <HotspotOverlay hotspots={hotspots} />
          </>
        )}
        {tab === "video" && hasVideo && (
          <video
            ref={videoRef}
            src={media.video!.src}
            poster={media.poster}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full bg-black"
          />
        )}
        {tab === "360" && has360 && <Carousel360 frames={media.rotation360!.frames} />}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {tabs.map((t) => {
          const isActive = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => t.enabled && setTab(t.id)}
              disabled={!t.enabled}
              className={`inline-flex items-center gap-2 rounded-md px-4 py-2 font-mono-tech text-xs uppercase tracking-widest transition ${
                isActive
                  ? "bg-[var(--brand-lime)] text-[var(--brand-green-dark)]"
                  : t.enabled
                    ? "border border-[var(--border-c)] text-[var(--text-1)] hover:border-[var(--brand-lime)] hover:text-[var(--brand-green)]"
                    : "border border-[var(--border-c)] text-[var(--text-2)]/50 cursor-not-allowed"
              }`}
              title={!t.enabled ? `${t.label} indisponível` : undefined}
            >
              <t.icon className="h-3.5 w-3.5" /> {t.label}
              {!t.enabled && <span className="ml-1 text-[10px]">em breve</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
