import type { Machine } from "./types";

// Generic catalog items (brand not shown in UI).
export const mstechMachines: Omit<Machine, "brand">[] = [
  // ===== BIT ROUTER — IN-LINE ==============================================
  {
    slug: "idpl-d",
    name: "iDPL-D",
    fullName: "iDPL-D Dual Station Depanelist",
    category: "bit-router",
    subcategory: "in-line",
    tagline: "Dual-station, dual-lane in-line router for maximum throughput.",
    description:
      "The iDPL-D is built for high-volume production lines that cannot stop. Two independent stations process panels in parallel, with four spindles, dual transfers and dual scrap conveyors — all in a compact in-line footprint.",
    features: [
      "Dual station, dual lane processing",
      "4 spindles with Automatic Width Adjustment (AWA) x2",
      "Dual transfers x2 with dual scrap conveyors",
      "Compact in-line footprint",
      "Vision system for fiducial recognition",
      "Tooling ID recognition",
    ],
    options: ["ATC (Auto Tool Change)", "MES Interface", "Auto Scrap Picker", "Fixture ID Recognition", "Cutting Inspection"],
    applications: ["Mobile", "Automotive", "EMS", "Appliance"],
    specs: [{"label": "Category", "value": "Bit Router System"}, {"label": "Configuration", "value": "In-line"}, {"label": "Applications", "value": "Mobile, Automotive, EMS, Appliance"}],
    specSections: [{"title": "Technical data", "headers": ["Specification", "Value"], "rows": [["Line type", "In-line"], ["Configuration", "Dual station · dual lane · 4 spindles (2× AWA dual head)"], ["Max panel size", "Up to 350 × 400 mm"], ["Router type", "Bit (mechanical) router"], ["Spindle motor", "Sycotec 250 W (standard) · 500 W (option)"], ["Vision system", "KEYENCE SR-X100W (fiducial recognition)"], ["Cutting inspection", "Cutting-surface inspection (option)"], ["Tool change", "ATC — Auto Tool Change (option)"]]}],
    media: {
      poster: "/machines/idpl-d/poster.jpg",
      gallery: ["/machines/idpl-d/gallery/01.jpg", "/machines/idpl-d/gallery/02.jpg", "/machines/idpl-d/gallery/03.jpg"],
    
      video: { kind: "file", src: "/machines/idpl-d/video.mp4" },
    },
    hotspots: [
      { x: 0.28, y: 0.42, title: "Dual lane", text: "Two independent transfer lanes work in parallel." },
      { x: 0.62, y: 0.38, title: "AWA spindles", text: "Spindle width auto-adjusts per panel model." },
      { x: 0.78, y: 0.74, title: "Scrap conveyor", text: "Two dedicated scrap conveyors keep lines clear." },
    ],
    featured: true,
  },
  {
    slug: "idpl-st",
    name: "iDPL-ST",
    fullName: "iDPL-ST Single Tray Depanelist",
    category: "bit-router",
    subcategory: "in-line",
    tagline: "Single-tray in-line router for standardized PCB flow.",
    description:
      "A single-table in-line variant tuned for single-tray operation. The iDPL-ST keeps the routing core simple and operator-friendly while integrating cleanly with conveyor-based production lines.",
    features: [
      "Single table, single tray operation",
      "User-friendly operator interface",
      "Auto conveyor width",
      "Compact in-line footprint",
    ],
    options: ["MES Interface", "Vision System", "Fixture ID Recognition"],
    applications: ["Electronic parts", "EMS"],
    specs: [{"label": "Category", "value": "Bit Router System"}, {"label": "Configuration", "value": "In-line"}, {"label": "Applications", "value": "Electronic parts, EMS"}],
    specSections: [{"title": "Technical data", "headers": ["Specification", "Value"], "rows": [["Line type", "In-line"], ["Configuration", "Single-tray feeding"], ["Max panel size", "Up to 350 × 400 mm"], ["Router type", "Bit (mechanical) router"], ["Spindle motor", "Sycotec 250 W (standard) · 500 W (option)"], ["Vision system", "KEYENCE SR-X100W (fiducial recognition)"], ["Cutting inspection", "Cutting-surface inspection (option)"], ["Tool change", "ATC — Auto Tool Change (option)"]]}],
    media: {
      poster: "/machines/idpl-st/poster.jpg",
      gallery: ["/machines/idpl-st/gallery/01.jpg", "/machines/idpl-st/gallery/02.jpg", "/machines/idpl-st/gallery/03.jpg"],
    
      video: { kind: "file", src: "/machines/idpl-st/video.mp4" },
    },
    hotspots: [
      { x: 0.5, y: 0.45, title: "Single tray", text: "One tray cycle per pass — simple and reliable." },
    ],
  },
  {
    slug: "idpl-s",
    name: "iDPL-S",
    fullName: "iDPL-S Single Table Depanelist",
    category: "bit-router",
    subcategory: "in-line",
    tagline: "Compact single-table in-line router, flexible and dust-free.",
    description:
      "Versatile single-table in-line router with optional dual spindle, vision, and tooling ID. Standard maximum panel size 350 × 400 mm (option 300 × 350 mm). Cobot integration, cutting inspection and tool verification are available as options.",
    features: [
      "Single table with optional dual spindle",
      "Vision system",
      "Auto conveyor width",
      "Tooling ID recognition",
      "Built-in dust-free operation",
      "Compact footprint",
    ],
    options: ["Cobot Integration", "Cutting Inspection", "Tool Verify", "ATC", "MES Interface"],
    applications: ["Mobile", "Electronic parts", "EMS"],
    specs: [{ label: "Standard max panel size", value: "350 × 400 mm" }, { label: "Optional size", value: "300 × 350 mm" }],
    media: {
      poster: "/machines/idpl-s/poster.jpg",
      gallery: ["/machines/idpl-s/gallery/01.jpg", "/machines/idpl-s/gallery/02.jpg"],
    
      video: { kind: "file", src: "/machines/idpl-s/video.mp4" },
    },
    hotspots: [
      { x: 0.42, y: 0.4, title: "Vision", text: "On-board camera recognizes fiducials and tool IDs." },
    ],
  },
  {
    slug: "idpl-t",
    name: "iDPL-T",
    fullName: "iDPL-T In-Line Depanelist",
    category: "bit-router",
    subcategory: "in-line",
    tagline: "Single-table in-line workhorse for standardized routing.",
    description:
      "The iDPL-T delivers reliable single-table in-line depaneling with integrated dust collection and a streamlined operator interface. A proven configuration for steady-state production environments.",
    features: [
      "Single table, in-line conveyor flow",
      "Integrated dust collection",
      "Touch-LCD operator interface",
      "Multi-bit lifetime management",
    ],
    options: ["Vision System", "Bit Broken Detection", "MES Interface", "Fixture ID Recognition"],
    applications: ["Appliance", "Electronic parts"],
    specs: [{"label": "Category", "value": "Bit Router System"}, {"label": "Configuration", "value": "In-line"}, {"label": "Applications", "value": "Appliance, Electronic parts"}],
    specSections: [{"title": "Technical data", "headers": ["Specification", "Value"], "rows": [["Line type", "In-line"], ["Configuration", "Twin table"], ["Max panel size", "Up to 350 × 400 mm"], ["Router type", "Bit (mechanical) router"], ["Spindle motor", "Sycotec 250 W (standard) · 500 W (option)"], ["Vision system", "KEYENCE SR-X100W (fiducial recognition)"], ["Cutting inspection", "Cutting-surface inspection (option)"], ["Tool change", "ATC — Auto Tool Change (option)"]]}],
    media: {
      poster: "/machines/idpl-t/poster.jpg",
      gallery: ["/machines/idpl-t/gallery/01.jpg", "/machines/idpl-t/gallery/02.jpg", "/machines/idpl-t/gallery/03.png"],
      video: { kind: "file", src: "/machines/idpl-t/video.mp4" },
    },
    hotspots: [
      { x: 0.5, y: 0.5, title: "Single table", text: "One table, one fixture — straightforward routing." },
    ],
    featured: true,
  },
  {
    slug: "idpl-u",
    name: "iDPL-U",
    fullName: "iDPL-U Undercut Depanelist",
    category: "bit-router",
    subcategory: "in-line",
    tagline: "Undercut routing with edge-belt outlet to downstream machines.",
    description:
      "Specialized in-line router for PCBs that require undercut routing geometries. Cut PCBs are automatically transferred via an edge-belt conveyor to the next machine in the line, supporting fully automated downstream flow.",
    features: [
      "Undercut routing capability",
      "Edge-belt conveyor outlet",
      "Automatic PCB width adjustment",
      "Pallet transport integration",
      "Dust-free operation",
    ],
    options: ["MES Interface", "Vision System"],
    applications: ["Mobile", "Automotive"],
    specs: [{"label": "Category", "value": "Bit Router System"}, {"label": "Configuration", "value": "In-line"}, {"label": "Applications", "value": "Mobile, Automotive"}],
    specSections: [{"title": "Technical data", "headers": ["Specification", "Value"], "rows": [["Line type", "In-line"], ["Configuration", "Undercut routing"], ["Max panel size", "Up to 350 × 400 mm"], ["Router type", "Bit (mechanical) router"], ["Spindle motor", "Sycotec 250 W (standard) · 500 W (option)"], ["Vision system", "KEYENCE SR-X100W (fiducial recognition)"], ["Cutting inspection", "Cutting-surface inspection (option)"], ["Tool change", "ATC — Auto Tool Change (option)"]]}],
    media: {
      poster: "/machines/idpl-u/poster.jpg",
      gallery: ["/machines/idpl-u/gallery/01.jpg", "/machines/idpl-u/gallery/02.jpg"],
    
      video: { kind: "file", src: "/machines/idpl-u/video.mp4" },
    },
    hotspots: [
      { x: 0.55, y: 0.6, title: "Edge-belt outlet", text: "Cut PCBs auto-feed the next station." },
    ],
  },

  // ===== BIT ROUTER — OFF-LINE =============================================
  {
    slug: "ndpl-t",
    name: "nDPL-T",
    fullName: "nDPL-T Twin Table Depanelist",
    category: "bit-router",
    subcategory: "off-line",
    tagline: "Minimize idle time. Twin tables, dual spindles, mixed production.",
    description:
      "The off-line flagship. While one table is being loaded, the other is routing — eliminating idle time. Standard dual Sycotec 250 W spindle heads (500 W and 3–4 spindle configurations available), Automatic Width Adjustment, and an industrial camera for teaching make this the most flexible bit router in the line.",
    features: [
      "Twin table for mixed production",
      "Dual spindle head with AWA (250 W standard, 500 W optional)",
      "Camera-aided teaching",
      "Built-in area-ionizing system",
      "2 pairs of safety sensors",
      "Multi-bit lifetime management",
      "Touch-LCD HMI",
    ],
    options: [
      "ATC (Auto Tool Change) — requires 500 W spindle",
      "MES Interface",
      "Auto Scrap Picker",
      "Vision System",
      "Bit Broken Detection",
      "Fixture ID Recognition",
      "Cutting Inspection",
      "Tool Verify",
    ],
    applications: ["Mobile", "Automotive", "EMS", "Appliance"],
    specs: [
      { label: "Standard max panel size", value: "350 × 400 mm" },
      { label: "Optional size", value: "300 × 350 mm" },
      { label: "Optional XL size", value: "500 × 500 mm (nDPL-T-500)" },
      { label: "Standard spindle", value: "2× Sycotec 250 W" },
      { label: "Optional spindle", value: "500 W · 3–4 spindle configurations" },
    ],
    media: {
      poster: "/machines/ndpl-t/poster.jpg",
      gallery: ["/machines/ndpl-t/gallery/01.jpg", "/machines/ndpl-t/gallery/02.jpg", "/machines/ndpl-t/gallery/03.jpg"],
    
      video: { kind: "file", src: "/machines/ndpl-t/video.mp4" },
    },
    hotspots: [
      { x: 0.3, y: 0.5, title: "Twin tables", text: "Load one while the other routes — zero idle time." },
      { x: 0.55, y: 0.42, title: "Dual spindle + AWA", text: "Spindle width auto-adjusts to each PCB model." },
      { x: 0.72, y: 0.7, title: "Camera teaching", text: "Industrial camera for fast, precise teaching." },
    ],
    featured: true,
  },
  {
    slug: "ndpl-s",
    name: "nDPL-S",
    fullName: "nDPL-S Single Table Depanelist",
    category: "bit-router",
    subcategory: "off-line",
    tagline: "Compact single-table off-line router for everyday production.",
    description:
      "Single-table off-line bit router. Optional dual spindle and vision system. Ideal for secondary depaneling stations, low-to-medium volume, or as a backup unit in a multi-line cell.",
    features: ["Single-table off-line operation", "Optional dual spindle", "Compact form factor", "Vision-system ready"],
    options: ["Dual Spindle", "Vision System", "MES Interface"],
    applications: ["Electronic parts", "EMS"],
    specs: [{"label": "Category", "value": "Bit Router System"}, {"label": "Configuration", "value": "Off-line"}, {"label": "Applications", "value": "Electronic parts, EMS"}],
    specSections: [{"title": "Technical data", "headers": ["Specification", "Value"], "rows": [["Line type", "Off-line"], ["Configuration", "Single table"], ["Max panel size", "350 × 400 mm standard · 500 × 500 mm option"], ["Router type", "Bit (mechanical) router"], ["Spindle motor", "Sycotec 250 W (standard) · 500 W (option)"], ["Vision system", "KEYENCE SR-X100W (fiducial recognition)"], ["Cutting inspection", "Cutting-surface inspection (option)"], ["Tool change", "ATC — Auto Tool Change (option)"]]}],
    media: {
      poster: "/machines/ndpl-s/poster.jpg",
      gallery: ["/machines/ndpl-s/gallery/01.jpg", "/machines/ndpl-s/gallery/02.jpg", "/machines/ndpl-s/gallery/03.jpg"],
    
      video: { kind: "file", src: "/machines/ndpl-s/video.mp4" },
    },
    hotspots: [],
  },

  // ===== SAWING — IN-LINE ==================================================

  // ===== SAWING — OFF-LINE =================================================
  {
    slug: "ndpl-sw",
    name: "nDPL-SW",
    fullName: "nDPL-SW Single Off-Line Sawing",
    category: "sawing",
    subcategory: "off-line",
    tagline: "Single-table off-line sawing depanelist.",
    description:
      "Single-table off-line PCB sawing system with diamond-coated blade, suitable for long-line cutting designs. Vision-system optional.",
    features: ["Single-table off-line", "Diamond-coated saw blade", "Vision-system capable"],
    options: ["Vision System", "Dust Collector upgrade"],
    applications: ["Automotive", "Electronic parts"],
    specs: [{"label": "Category", "value": "Sawing System"}, {"label": "Configuration", "value": "Off-line"}, {"label": "Applications", "value": "Automotive, Electronic parts"}],
    specSections: [{"title": "Technical data", "headers": ["Specification", "Value"], "rows": [["Line type", "Off-line"], ["Configuration", "Single table (wide)"], ["Max panel size", "Up to 500 × 500 mm"], ["Router type", "Bit (mechanical) router"], ["Spindle motor", "Sycotec 250 W (standard) · 500 W (option)"], ["Vision system", "KEYENCE SR-X100W (fiducial recognition)"], ["Cutting inspection", "Cutting-surface inspection (option)"], ["Tool change", "ATC — Auto Tool Change (option)"]]}],
    media: {
      poster: "/machines/ndpl-sw/poster.jpg",
      gallery: ["/machines/ndpl-sw/gallery/01.jpg", "/machines/ndpl-sw/gallery/02.jpg", "/machines/ndpl-sw/gallery/03.jpg"],
    
      video: { kind: "file", src: "/machines/ndpl-sw/video.mp4" },
    },
    hotspots: [],
  },
  {
    slug: "ndpl-tw",
    name: "nDPL-TW",
    fullName: "nDPL-TW Twin Off-Line Sawing",
    category: "sawing",
    subcategory: "off-line",
    tagline: "Twin-table off-line sawing with dual-side dust extraction.",
    description:
      "Off-line sawing flagship. Twin tables minimize idle time; the rotary head pivots 90° for bidirectional cuts; dust is extracted simultaneously from above and below the cut for superior cleanliness. Auto scrap pickup with optional cobot integration completes the cell.",
    features: [
      "Twin or single table (configurable)",
      "Diamond-coated saw blade",
      "Dual simultaneous dust removal (upper + lower)",
      "Sawing head 90° rotation — horizontal & vertical cuts",
      "Vision system for fiducial check",
      "Auto scrap pickup (cobot integration available)",
      "Fixture ID recognition prevents jig mis-installation",
    ],
    options: ["3 HP dust collector (standard)", "5 HP dust collector (optional)", "Cobot Integration", "MES Interface"],
    applications: ["Automotive", "Appliance", "Electronic parts"],
    specs: [
      { label: "Dust collector", value: "3 HP standard · 5 HP optional" },
      { label: "Head rotation", value: "90°" },
    ],
    media: {
      poster: "/machines/ndpl-tw/poster.jpg",
      gallery: ["/machines/ndpl-tw/gallery/01.jpg", "/machines/ndpl-tw/gallery/02.jpg", "/machines/ndpl-tw/gallery/03.jpg"],
    
      video: { kind: "file", src: "/machines/ndpl-tw/video.mp4" },
    },
    hotspots: [
      { x: 0.4, y: 0.45, title: "Dual-side dust", text: "Simultaneous upper + lower extraction." },
      { x: 0.65, y: 0.5, title: "Head rotation 90°", text: "Horizontal and vertical cuts without re-fixturing." },
    ],
    featured: true,
  },

  // ===== LASER — OFF-LINE ==================================================

  // ===== OTHERS / SUPPORT ==================================================
  {
    slug: "bga-grinding",
    name: "eDPL-SG",
    fullName: "BGA Grinding System · eDPL-SG",
    category: "others",
    subcategory: "support",
    tagline: "BGA grinding for advanced packaging.",
    description:
      "Released in 2008. Specialized grinding system for BGA (Ball Grid Array) component processing — removes solder balls and surface irregularities for post-depaneling finishing.",
    features: ["BGA-specific tool path", "Surface grinding capability", "Removes solder balls / irregular surfaces"],
    options: [],
    applications: ["Semiconductor", "Mobile"],
    specs: [{ label: "Released", value: "2008" }],
    media: {
      poster: "/machines/bga-grinding/poster.jpg",
      gallery: ["/machines/bga-grinding/gallery/01.jpg", "/machines/bga-grinding/gallery/02.jpg", "/machines/bga-grinding/gallery/03.jpg"],
    },
    hotspots: [],
  },
  {
    slug: "lms",
    name: "LMS",
    fullName: "Line Monitoring System",
    category: "others",
    subcategory: "support",
    tagline: "Factory monitoring and MES integration.",
    description:
      "Real-time production tracking and quality monitoring with MES interfacing. Brings depaneling cells into Industry 4.0 ecosystems.",
    features: ["Real-time production tracking", "Quality monitoring dashboards", "MES interface"],
    options: ["Custom integrations on request"],
    applications: ["All depaneling lines"],
    specs: [{"label": "Category", "value": "Others & Support"}, {"label": "Configuration", "value": "Support"}, {"label": "Applications", "value": "All depaneling lines"}],
    media: {
      poster: "/machines/lms/poster.jpg",
      gallery: ["/machines/lms/gallery/01.jpg"],
    
      video: { kind: "file", src: "/machines/lms/video.mp4" },
    },
    hotspots: [],
  },
];
