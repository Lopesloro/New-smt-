// Hidden keyword block for organic discovery. Brazilian buyers mostly search
// in Portuguese, so PT terms lead, followed by the English equivalents.
// NOTE: kept visually hidden (sr-only) but present in the DOM for crawlers.
const KEYWORDS = [
  // Categorias / equipamentos (PT)
  "máquina SMT", "montagem de placas eletrônicas", "linha de montagem SMT",
  "pick and place", "insersora de componentes", "montadora de componentes SMD",
  "impressora de pasta de solda", "impressora de estêncil", "SPI inspeção de pasta de solda",
  "forno de refusão", "forno reflow", "inspeção óptica automática", "AOI",
  "inspeção por raio-x", "raio-x industrial", "inspeção 3D de solda",
  "dispensador de cola", "aplicação de adesivo SMD", "flip chip", "hybrid placer",
  "depaneling", "corte de placa de circuito impresso", "roteadora de PCB",
  "serra de PCB", "corte a laser de PCB", "marcação a laser em placa",
  "rastreabilidade de PCB", "esteira transportadora de PCB", "buffer de placas",
  "magazine loader", "carregador de magazine", "feeder", "nozzle", "bico de sucção",
  "estêncil metálico", "limpeza de estêncil", "limpeza de nozzle",
  "gerador de nitrogênio", "gerador de oxigênio", "robô de solda", "solda seletiva",
  "conformal coating", "revestimento conformal", "sistema de visão",
  // Marcas / intenção comercial (PT)
  "Yamaha SMT Brasil", "representante Yamaha SMT", "distribuidor SMT Brasil",
  "equipamento SMT usado e novo", "assistência técnica SMT", "peças e reposição SMT",
  "instalação de linha SMT", "treinamento SMT", "fábrica de eletrônicos",
  "linha de produção eletrônica", "indústria eletrônica Brasil", "EMS Brasil",
  "montagem eletrônica automotiva", "eletrônica de consumo", "semicondutor",
  "Campinas SMT", "Jaguariúna eletrônica", "SMT São Paulo",
  // English
  "SMT equipment", "electronic assembly line", "pick and place machine",
  "solder paste printer", "stencil printer", "reflow oven", "automated optical inspection",
  "x-ray inspection", "PCB depaneling router", "laser marking PCB", "conveyor PCB handling",
  "magazine loader", "nitrogen generator", "selective soldering robot", "flip chip bonder",
  "conformal coating", "PCB traceability", "SMT line integration", "Yamaha SMT distributor",
];

export function SeoKeywords() {
  return (
    <p className="sr-only" aria-hidden="true">
      {KEYWORDS.join(" · ")}
    </p>
  );
}
