import type { Machine } from "./types";

/**
 * Yamaha Robotics SMT line represented by SMTS.
 * Media uses the shared placeholder until official assets are added.
 * Drop posters in /public/machines/<slug>/ and update media.poster / gallery.
 */

const PLACEHOLDER = "/machines/_placeholder.svg";

const base = (m: Omit<Machine, "brand" | "media" | "hotspots" | "specs" | "features" | "options" | "applications"> &
  Partial<Pick<Machine, "media" | "hotspots" | "specs" | "features" | "options" | "applications">>): Machine => ({
  brand: "yamaha",
  features: [],
  options: [],
  applications: [],
  specs: [],
  hotspots: [],
  media: { poster: PLACEHOLDER, gallery: [] },
  ...m,
});

export const yamahaMachines: Machine[] = [
  // ===== PRINTERS =====
  base({
    slug: "ycp10",
    name: "YCP10",
    fullName: "YCP10 Solder Paste Printer",
    category: "printers",
    subcategory: "standard",
    tagline: "High-end fully automatic stencil printer.",
    description:
      "Yamaha's flagship solder-paste printer, engineered for fine-pitch, high-density boards with closed-loop print quality control and fast changeover.",
    applications: ["Mobile", "Automotive", "EMS"],
    featured: true,
  }),
  base({
    slug: "yrp10",
    name: "YRP10",
    fullName: "YRP10 Solder Paste Printer",
    category: "printers",
    subcategory: "standard",
    tagline: "Versatile printer for high-mix production.",
    description:
      "A flexible, high-throughput stencil printer that balances accuracy and changeover speed for diverse production lines.",
    applications: ["EMS", "Electronic parts"],
    media: { poster: PLACEHOLDER, gallery: [], video: { kind: "file", src: "/videos/yrp10.mp4" } },
  }),

  // ===== SURFACE MOUNTERS =====
  base({
    slug: "yrm20",
    name: "YRM20",
    fullName: "YRM20 Premium High-Speed Modular Mounter",
    category: "surface-mounters",
    subcategory: "standard",
    tagline: "Premium modular mounter — speed meets flexibility.",
    description:
      "The YRM20 combines high placement speed with the flexibility to handle a wide component range, anchoring Yamaha's 1 STOP SMART SOLUTION line.",
    applications: ["Mobile", "Automotive", "EMS", "Appliance"],
    media: { poster: PLACEHOLDER, gallery: [], video: { kind: "file", src: "/videos/yrm20.mp4" } },
    featured: true,
  }),
  base({
    slug: "ysm10",
    name: "YSM10",
    fullName: "YSM10 Compact Modular Mounter",
    category: "surface-mounters",
    subcategory: "standard",
    tagline: "Compact high-speed modular mounter.",
    description:
      "A space-saving modular mounter delivering high speed and accuracy for compact, high-mix SMT lines.",
    applications: ["EMS", "Electronic parts"],
  }),
  base({
    slug: "ysm20r",
    name: "YSM20R",
    fullName: "YSM20R High-Speed Modular Mounter",
    category: "surface-mounters",
    subcategory: "standard",
    tagline: "High-speed flexible modular mounter.",
    description:
      "Balanced high-speed placement with broad component coverage for general-purpose, high-mix production.",
    applications: ["Mobile", "Automotive", "EMS"],
    featured: true,
  }),
  base({
    slug: "ysm40r",
    name: "YSM40R",
    fullName: "YSM40R Ultra High-Speed Mounter",
    category: "surface-mounters",
    subcategory: "standard",
    tagline: "Maximum throughput placement.",
    description:
      "Yamaha's ultra-high-speed mounter for maximum throughput on mass-production lines.",
    applications: ["Mobile", "EMS"],
  }),

  // ===== DISPENSERS =====
  base({
    slug: "ysd",
    name: "YSD",
    fullName: "YSD Dispenser",
    category: "dispensers",
    subcategory: "standard",
    tagline: "Accurate adhesive and fluid dispensing.",
    description:
      "Dispensing system for adhesive, underfill and other fluids, integrated into the Yamaha SMT line.",
    applications: ["Automotive", "EMS"],
    media: { poster: PLACEHOLDER, gallery: [], video: { kind: "file", src: "/videos/yrm-d.mp4" } },
  }),

  // ===== INSPECTION =====
  base({
    slug: "ysi-sp",
    name: "YSi-SP",
    fullName: "YSi-SP Solder Paste Inspection (SPI)",
    category: "inspection",
    subcategory: "standard",
    tagline: "3D solder-paste inspection.",
    description:
      "High-resolution 3D SPI that catches paste defects right after printing, feeding data back to the printer.",
    applications: ["Automotive", "EMS"],
    featured: true,
  }),
  base({
    slug: "ysi-v",
    name: "YSi-V",
    fullName: "YSi-V Automated Optical Inspection (AOI)",
    category: "inspection",
    subcategory: "standard",
    tagline: "High-speed 3D AOI.",
    description:
      "Automated optical inspection delivering reliable defect detection across the assembled board.",
    applications: ["Automotive", "EMS", "Electronic parts"],
    media: { poster: PLACEHOLDER, gallery: [], video: { kind: "file", src: "/videos/yri-v.mp4" } },
  }),
  base({
    slug: "ysi-x",
    name: "YSi-X",
    fullName: "YSi-X X-ray Inspection",
    category: "inspection",
    subcategory: "standard",
    tagline: "X-ray inspection for hidden joints.",
    description:
      "X-ray inspection for BGA, QFN and hidden solder joints where optical inspection cannot reach.",
    applications: ["Automotive", "Semiconductor"],
  }),

  // ===== HYBRID PLACER & FLIP CHIP =====
  base({
    slug: "ysb55w",
    name: "YSB55w",
    fullName: "YSB55w Hybrid Placer",
    category: "hybrid-placer",
    subcategory: "standard",
    tagline: "Hybrid placement for advanced packaging.",
    description:
      "Hybrid placer combining standard SMT placement with advanced packaging capability.",
    applications: ["Semiconductor", "Mobile"],
  }),
  base({
    slug: "i-cube-ii",
    name: "I-CubeII",
    fullName: "I-CubeII Flip Chip Bonder",
    category: "hybrid-placer",
    subcategory: "standard",
    tagline: "High-accuracy flip-chip bonding.",
    description:
      "Flip-chip bonder for high-precision advanced packaging applications.",
    applications: ["Semiconductor"],
  }),

  // ===== SOFTWARE =====
  base({
    slug: "y-fact",
    name: "Y.FACT",
    fullName: "Y.FACT Factory Software",
    category: "software",
    subcategory: "support",
    tagline: "Line management and Industry 4.0.",
    description:
      "Yamaha factory software suite — dashboard, QA, IT and optimization tools that connect the entire SMT line.",
    applications: ["All SMT lines"],
  }),

  // ===== ACCESSORIES =====
  base({
    slug: "alf",
    name: "ALF",
    fullName: "ALF Auto Loading Feeder",
    category: "accessories",
    subcategory: "support",
    tagline: "Intelligent auto-loading feeder.",
    description:
      "Auto-loading feeder that reduces setup time and keeps the line fed continuously.",
    applications: ["All SMT lines"],
  }),
  base({
    slug: "yst15",
    name: "YST15",
    fullName: "YST15 Storage System",
    category: "accessories",
    subcategory: "support",
    tagline: "Intelligent component storage.",
    description:
      "Smart storage system for reels and components, with humidity control and inventory tracking.",
    applications: ["All SMT lines"],
  }),
];
