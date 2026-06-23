export type BrandId =
  | "yamaha"
  | "tamura"
  | "sawa"
  | "xavis"
  | "eunil";

export type CategoryId =
  // Yamaha
  | "surface-mounters"
  | "printers"
  | "dispensers"
  | "inspection"
  | "hybrid-placer"
  | "software"
  | "accessories";

export type Subcategory = "in-line" | "off-line" | "support" | "standard";

export interface Spec {
  label: string;
  value: string;
}

export interface SpecSection {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface Hotspot {
  x: number; // 0..1
  y: number; // 0..1
  title: string;
  text: string;
}

export type VideoSource =
  | { kind: "file"; src: string }
  | { kind: "youtube"; id: string };

export interface MachineMedia {
  poster: string;
  gallery: string[];
  video?: VideoSource;
  rotation360?: { frames: string[] };
}

export interface Machine {
  slug: string;
  name: string;
  fullName: string;
  brand: BrandId;
  category: CategoryId;
  subcategory: Subcategory;
  tagline: string;
  description: string;
  features: string[];
  options: string[];
  applications: string[];
  specs: Spec[];
  specSections?: SpecSection[];
  media: MachineMedia;
  hotspots: Hotspot[];
  featured?: boolean;
}

export interface Category {
  id: CategoryId;
  slug: string; // url segment
  brand: BrandId;
  name: string;
  tagline: string;
  description: string;
  hasSubcategories: boolean;
}
