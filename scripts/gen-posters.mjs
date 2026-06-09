// Gera capas SVG tech para cada máquina em /public/machines.
// (Posters leves e nítidos; o canvas-design pode substituir por PNGs ricos depois.)
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "machines");
mkdirSync(outDir, { recursive: true });

const items = [
  { slug: "pick-and-place", label: "PICK & PLACE", sub: "Montagem SMD", icon: "place" },
  { slug: "forno-refluxo", label: "FORNO DE REFLUXO", sub: "Soldagem", icon: "oven" },
  { slug: "impressora-stencil", label: "IMPRESSORA STENCIL", sub: "Aplicação de pasta", icon: "print" },
  { slug: "aoi-inspecao", label: "INSPEÇÃO AOI", sub: "Qualidade", icon: "scan" },
  { slug: "solda-onda", label: "SOLDA ONDA", sub: "Soldagem THT", icon: "wave" },
  { slug: "limpadora-placas", label: "LIMPADORA", sub: "Pós-processo", icon: "clean" },
];

const icons = {
  place: '<rect x="520" y="150" width="120" height="120" rx="10"/><path d="M580 90 v60 M580 270 v60 M520 210 h-60 M640 210 h60" stroke-width="10"/>',
  oven: '<rect x="470" y="150" width="220" height="150" rx="14"/><path d="M470 200 h220 M510 180 v-40 M580 180 v-40 M650 180 v-40" stroke-width="10"/>',
  print: '<rect x="480" y="170" width="200" height="120" rx="10"/><path d="M480 230 h200 M540 290 v40 M620 290 v40" stroke-width="10"/>',
  scan: '<circle cx="580" cy="210" r="70"/><path d="M580 150 v120 M520 210 h120" stroke-width="8"/><path d="M470 210 l40 -40 M650 250 l40 40" stroke-width="10"/>',
  wave: '<path d="M460 240 q40 -60 80 0 t80 0 t80 0" stroke-width="12" fill="none"/><rect x="500" y="150" width="160" height="40" rx="6"/>',
  clean: '<path d="M540 150 l80 0 l-10 150 l-60 0 z"/><path d="M560 320 v40 M580 320 v50 M600 320 v40" stroke-width="9"/>',
};

for (const it of items) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#161616"/>
      <stop offset="1" stop-color="#0b0b0b"/>
    </linearGradient>
    <linearGradient id="ac" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0066ff"/>
      <stop offset="1" stop-color="#00ffff"/>
    </linearGradient>
    <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M36 0 H0 V36" fill="none" stroke="#2a2a2a" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="450" fill="url(#bg)"/>
  <rect width="800" height="450" fill="url(#grid)" opacity="0.5"/>
  <rect x="1" y="1" width="798" height="448" fill="none" stroke="#262626"/>
  <g stroke="url(#ac)" fill="url(#ac)" opacity="0.95">${icons[it.icon]}</g>
  <circle cx="580" cy="210" r="150" fill="none" stroke="#0066ff" stroke-width="1.5" opacity="0.25"/>
  <text x="56" y="300" font-family="'Space Grotesk',sans-serif" font-size="40" font-weight="700" fill="#ffffff">${it.label}</text>
  <text x="58" y="338" font-family="Manrope,sans-serif" font-size="20" fill="#00ffff">${it.sub}</text>
  <text x="56" y="64" font-family="'Space Grotesk',sans-serif" font-size="22" font-weight="700" fill="#0066ff">SM<tspan fill="#ffffff">TECH</tspan></text>
  <rect x="56" y="356" width="64" height="4" rx="2" fill="url(#ac)"/>
</svg>`;
  writeFileSync(join(outDir, `${it.slug}.svg`), svg, "utf8");
  console.log("ok", it.slug);
}
console.log("Posters gerados em public/machines");
