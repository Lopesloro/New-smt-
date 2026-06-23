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

  // ===== Depaneling & support =====
  {
    id: "bit-router",
    slug: "bit-router",
    brand: "mstech",
    name: "Bit Router System",
    tagline: "High-precision depaneling routers.",
    description:
      "Bit-based depaneling for high-precision PCB separation. In-line and off-line variants for every production scenario.",
    hasSubcategories: true,
  },
  {
    id: "sawing",
    slug: "sawing",
    brand: "mstech",
    name: "Sawing System",
    tagline: "Diamond-blade cutting for straight-line depaneling.",
    description:
      "Sawing depanelers for PCBs with long, linear cut paths, with dual-side dust extraction for clean edges.",
    hasSubcategories: true,
  },
  {
    id: "laser",
    slug: "laser",
    brand: "mstech",
    name: "Laser System",
    tagline: "Contact-free depaneling for sensitive substrates.",
    description:
      "Laser depaneling for flexible circuits, ceramics and materials where mechanical cutting is not viable.",
    hasSubcategories: false,
  },
  {
    id: "others",
    slug: "others",
    brand: "mstech",
    name: "Others & Support",
    tagline: "Auxiliary systems and factory automation.",
    description:
      "Auto tray handling, dust collection, vision inspection, line monitoring and particle inspection.",
    hasSubcategories: false,
  },

  // ===== Reflow =====
  {
    id: "reflow",
    slug: "reflow",
    brand: "tamura",
    name: "Reflow Ovens",
    tagline: "Precise thermal profiling for soldering.",
    description:
      "Reflow soldering ovens with multi-zone thermal control for stable, repeatable solder joints.",
    hasSubcategories: false,
  },

  // ===== Marking & handling =====
  {
    id: "traceability",
    slug: "traceability",
    brand: "eunil",
    name: "Marking & Traceability",
    tagline: "Laser marking, inkjet and labeling.",
    description:
      "Laser markers, inkjet markers and labeling systems for end-to-end PCB traceability.",
    hasSubcategories: false,
  },
  {
    id: "conveyors",
    slug: "conveyors",
    brand: "eunil",
    name: "Conveyors & Handling",
    tagline: "Loaders, buffers, conveyors and coating.",
    description:
      "PCB handling across the line — loaders, unloaders, buffers, conveyors, conformal coating and wafer handling.",
    hasSubcategories: false,
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getCategoriesByBrand = (brand: string) =>
  categories.filter((c) => c.brand === brand);
