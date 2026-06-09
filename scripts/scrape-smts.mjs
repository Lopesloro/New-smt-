// Extrai os dados das máquinas das páginas baixadas da SMTS (somente conteúdo).
// Gera src/data/smts-machines.json consumido pela nova interface.
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const TMP = process.env.SMTS_TMP || "C:/Users/betem/AppData/Local/Temp/smts";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Famílias na ordem do menu original + máquinas (slug = arquivo sem .html).
const FAMILIES = [
  { id: "surface-mounters", name: "Surface Mounters", machines: ["yrm20dl", "yrm20", "yrm10"] },
  { id: "solder-printers", name: "Solder-Paste Printers", machines: ["yrp10e", "yrp10", "ycp10"] },
  { id: "dispensers", name: "Dispensers", machines: ["yrm-d"] },
  { id: "inspection", name: "Inspection Systems", machines: ["yri-v", "ysi-sp", "ysi-v"] },
  { id: "hybrid-placer", name: "Hybrid Placer", machines: ["yrh10"] },
  { id: "acessorios", name: "Acessórios e Consumíveis", machines: ["alf"] },
  { id: "software", name: "Management Software", machines: ["software"] },
];

function parsePage(slug) {
  const file = join(TMP, `produtos__${slug}.html`);
  const html = readFileSync(file, "utf8");
  const $ = cheerio.load(html);

  const model =
    $(".product-header__info h1").first().text().trim() ||
    $("main h1").first().text().trim() ||
    slug.toUpperCase();
  const tagline =
    $(".product-header__info .tagline").first().text().trim() ||
    $("main .tagline, main .product-intro__tagline").first().text().trim();
  const description =
    $(".product-header__info .description").first().text().trim() ||
    $("main .description, main .product-intro p").first().text().trim() ||
    $("main p").not(".family-breadcrumbs *").first().text().trim();
  const image =
    $(".product-header__img img").first().attr("src") ||
    $('main img[src*="yamaha-motor.com"]').first().attr("src") ||
    "";

  const quick = [];
  $(".product-header__quick dl").children().each((_, el) => {
    const tag = el.tagName?.toLowerCase();
    if (tag === "dt") quick.push({ label: $(el).text().trim(), value: "" });
    else if (tag === "dd" && quick.length) quick[quick.length - 1].value = $(el).text().trim();
  });

  const sections = [];
  $(".spec-section").each((_, sec) => {
    const title = $(sec).find("h2").first().text().trim();
    const table = $(sec).find("table.spec-table").first();
    if (!table.length) return;
    const headers = [];
    table.find("thead th").each((_, th) => headers.push($(th).text().trim()));
    const rows = [];
    table.find("tbody tr").each((_, tr) => {
      const cells = [];
      $(tr).find("td").each((_, td) => {
        const cls = $(td).attr("class") || "";
        let tone = "";
        if (cls.includes("cell-yes")) tone = "yes";
        else if (cls.includes("cell-no")) tone = "no";
        else if (cls.includes("cell-partial")) tone = "partial";
        cells.push({ text: $(td).text().trim(), tone });
      });
      if (cells.length) rows.push(cells);
    });
    sections.push({ title, headers, rows });
  });

  return { slug, model, tagline, description, image, quick, sections };
}

const families = FAMILIES.map((f) => ({
  id: f.id,
  name: f.name,
  machines: f.machines.map((slug) => ({ family: f.id, ...parsePage(slug) })),
}));

const out = { brand: "SMT Solutions", short: "SMTS", families };
writeFileSync(join(root, "src/data/smts-machines.json"), JSON.stringify(out, null, 2), "utf8");

const total = families.reduce((n, f) => n + f.machines.length, 0);
console.log(`OK — ${families.length} famílias, ${total} máquinas`);
for (const f of families)
  console.log(`  ${f.name}: ${f.machines.map((m) => `${m.model}(${m.sections.length} tabelas)`).join(", ")}`);
