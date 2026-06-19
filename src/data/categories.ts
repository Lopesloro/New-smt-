import type { Category } from "./types";

export const categories: Category[] = [
  {
    id: "bit-router",
    slug: "bit-router",
    name: "Bit Router System",
    tagline: "The world's most technically advanced depaneling routers.",
    description:
      "Bit-based depaneling solutions for high-precision PCB separation. In-line and off-line variants cover every production scenario, from single-table prototyping to dual-station mass manufacturing.",
    hasSubcategories: true,
  },
  {
    id: "sawing",
    slug: "sawing",
    name: "Sawing System",
    tagline: "Diamond-blade cutting for clean, straight-line depaneling.",
    description:
      "Sawing depanelers tailored for PCBs with long, linear cut paths. Bidirectional head rotation, diamond-coated blades and dual-side dust extraction deliver superior edge quality.",
    hasSubcategories: true,
  },
  {
    id: "laser",
    slug: "laser",
    name: "Laser System",
    tagline: "Contact-free depaneling for sensitive substrates.",
    description:
      "Laser depaneling for flexible circuits, ceramics and any material where mechanical cutting is not viable. Multiple laser source options and advanced vision-guided precision.",
    hasSubcategories: false,
  },
  {
    id: "others",
    slug: "others",
    name: "Others & Support",
    tagline: "Auxiliary systems and factory automation.",
    description:
      "Auto Tray handling, dust collection, vision inspection, line monitoring and the patented Particle Inspection System — everything to round out a fully automated depaneling line.",
    hasSubcategories: false,
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
