import type { Category } from "./types";

export const categories: Category[] = [
  // ===== YAMAHA =====
  {
    id: "surface-mounters",
    slug: "surface-mounters",
    brand: "yamaha",
    name: "Surface Mounters",
    tagline: "High-speed, high-accuracy pick & place.",
    description:
      "Yamaha's modular surface mounters cover the full range of placement needs, from flexible high-mix lines to maximum-throughput production.",
    hasSubcategories: false,
  },
  {
    id: "printers",
    slug: "printers",
    brand: "yamaha",
    name: "Solder-Paste Printers",
    tagline: "Precise, repeatable solder-paste deposition.",
    description:
      "Fully automatic stencil printers engineered for fine-pitch, high-density boards with closed-loop print quality control.",
    hasSubcategories: false,
  },
  {
    id: "dispensers",
    slug: "dispensers",
    brand: "yamaha",
    name: "Dispensers",
    tagline: "Accurate fluid and adhesive dispensing.",
    description:
      "Dispensing systems for adhesive, underfill and other fluids, integrated into the Yamaha 1 STOP SMART SOLUTION line.",
    hasSubcategories: false,
  },
  {
    id: "inspection",
    slug: "inspection",
    brand: "yamaha",
    name: "Inspection Systems",
    tagline: "SPI, AOI and X-ray quality assurance.",
    description:
      "Solder-paste inspection (SPI), automated optical inspection (AOI) and X-ray inspection that close the quality loop across the line.",
    hasSubcategories: false,
  },
  {
    id: "hybrid-placer",
    slug: "hybrid-placer",
    brand: "yamaha",
    name: "Hybrid Placer & Flip Chip",
    tagline: "Advanced placement and bonding.",
    description:
      "Flip-chip bonders and hybrid placers for advanced packaging and high-precision component placement.",
    hasSubcategories: false,
  },
  {
    id: "software",
    slug: "software",
    brand: "yamaha",
    name: "Software Solutions",
    tagline: "Line management and Industry 4.0.",
    description:
      "Yamaha factory software — dashboard, QA, IT and optimization tools that connect the whole SMT line.",
    hasSubcategories: false,
  },
  {
    id: "accessories",
    slug: "accessories",
    brand: "yamaha",
    name: "Feeders & Storage",
    tagline: "Feeders, storage and line accessories.",
    description:
      "Intelligent feeders, storage systems and accessories that keep the SMT line fed and organized.",
    hasSubcategories: false,
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getCategoriesByBrand = (brand: string) =>
  categories.filter((c) => c.brand === brand);
