export type CategoryId = "bit-router" | "sawing" | "laser" | "others";
export type Subcategory = "in-line" | "off-line" | "support";

export interface Spec {
  label: string;
  value: string;
}

export interface Hotspot {
  x: number; // 0..1
  y: number; // 0..1
  title: string;
  text: string;
}

export interface MachineMedia {
  poster: string;
  gallery: string[];
  video?: { kind: "file"; src: string };
  rotation360?: { frames: string[] };
}

export interface Machine {
  slug: string;
  name: string;
  fullName: string;
  category: CategoryId;
  subcategory: Subcategory;
  tagline: string;
  description: string;
  features: string[];
  options: string[];
  applications: string[];
  specs: Spec[];
  media: MachineMedia;
  hotspots: Hotspot[];
  featured?: boolean;
}

export interface Category {
  id: CategoryId;
  slug: string; // url segment
  name: string;
  tagline: string;
  description: string;
  hasSubcategories: boolean;
}
