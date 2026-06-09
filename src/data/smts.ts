import raw from "./smts-machines.json";
import type { VideoSource } from "./machines";

export interface SpecCell {
  text: string;
  tone: "" | "yes" | "no" | "partial";
}
export interface SpecSection {
  title: string;
  headers: string[];
  rows: SpecCell[][];
}
export interface SmtsMachine {
  family: string;
  slug: string;
  model: string;
  tagline: string;
  description: string;
  image: string;
  quick: { label: string; value: string }[];
  sections: SpecSection[];
}
export interface SmtsFamily {
  id: string;
  name: string;
  machines: SmtsMachine[];
}
export interface SmtsData {
  brand: string;
  short: string;
  families: SmtsFamily[];
}

export const smts = raw as SmtsData;

/**
 * Vídeo de cada máquina.
 * Usa o vídeo enviado (YouTube id ttkhyhas4Mw) recortado em partes por máquina,
 * e o mp4 gerado (Remotion) na montadora YRM20. Troque por { kind: "file", src }
 * quando enviar as filmagens individuais.
 */
const YT = "ttkhyhas4Mw";
const yt = (start: number, end: number): VideoSource => ({ kind: "youtube", id: YT, start, end });

export const machineVideos: Record<string, VideoSource> = {
  // Surface Mounters
  yrm20dl: yt(685, 691),
  yrm20: { kind: "file", src: "/videos/pick-and-place.mp4" },
  yrm10: yt(691, 696),
  // Solder-Paste Printers
  yrp10e: yt(696, 700),
  yrp10: yt(700, 703),
  ycp10: yt(703, 706),
  // Dispensers
  "yrm-d": yt(706, 709),
  // Inspection
  "yri-v": yt(709, 712),
  "ysi-sp": yt(712, 714),
  "ysi-v": yt(714, 717),
  // Hybrid Placer
  yrh10: yt(685, 690),
  // Acessórios
  alf: yt(690, 695),
  // Software
  software: yt(685, 717),
};

export function videoFor(slug: string): VideoSource {
  return machineVideos[slug] ?? yt(685, 717);
}
