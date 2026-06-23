import { useRef, useState } from "react";
import { Image as ImageIcon, Play } from "lucide-react";
import type { MachineMedia, Hotspot } from "@/data/types";
import { HotspotOverlay } from "./HotspotOverlay";

interface Props {
  media: MachineMedia;
  hotspots: Hotspot[];
  alt: string;
}

type Tab = "photo" | "video";

export function MediaStage({ media, hotspots, alt }: Props) {
  const video = media.video;
  const hasVideo = Boolean(video);
  const [tab, setTab] = useState<Tab>("photo");
  const videoRef = useRef<HTMLVideoElement>(null);

  const tabs: { id: Tab; label: string; icon: typeof ImageIcon; enabled: boolean }[] = [
    { id: "photo", label: "Photo", icon: ImageIcon, enabled: true },
    { id: "video", label: "Video", icon: Play, enabled: hasVideo },
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
        {tab === "video" && video?.kind === "file" && (
          <video
            ref={videoRef}
            src={video.src}
            poster={media.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full bg-black object-cover"
          />
        )}
        {tab === "video" && video?.kind === "youtube" && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1`}
            title={alt}
            className="pointer-events-none h-full w-full bg-black"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
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
              title={!t.enabled ? `${t.label} not available yet` : undefined}
            >
              <t.icon className="h-3.5 w-3.5" /> {t.label}
              {!t.enabled && <span className="ml-1 text-[10px]">soon</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
