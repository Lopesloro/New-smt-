export type VideoSource =
  /** start/end em segundos para recortar um trecho do vídeo do YouTube */
  | { kind: "youtube"; id: string; start?: number; end?: number }
  | { kind: "vimeo"; id: string }
  | { kind: "file"; src: string };

export interface Machine {
  slug: string;
  name: string;
  brand: string;
  category: string;
  tagline: string;
  description: string;
  /** Vídeo de funcionamento da máquina. Troque por { kind: "file", src: "/videos/xxx.mp4" } ao enviar o seu. */
  video: VideoSource;
  /** Capa/thumbnail (gerada em /public/machines). */
  poster: string;
  specs: { label: string; value: string }[];
  highlights: string[];
}

/**
 * Cadastro de máquinas do showroom.
 * Cada máquina tem um vídeo de "como funciona".
 * Hoje os vídeos usam placeholders do YouTube — basta trocar `video`
 * por { kind: "file", src: "/videos/sua-maquina.mp4" } quando você enviar a filmagem,
 * ou por um vídeo gerado com Remotion.
 */
export const machines: Machine[] = [
  {
    slug: "pick-and-place",
    name: "Pick & Place FRITSCH ALL420",
    brand: "FRITSCH",
    category: "Montagem SMD",
    tagline: "Posicionamento automático de componentes de alta precisão",
    description:
      "Sistema pick-and-place para posicionamento automático de componentes SMD sobre a placa, com reconhecimento por visão e troca rápida de feeders. Ideal para protótipos e produção de pequenos e médios lotes.",
    // Vídeo de funcionamento gerado com Remotion (substitua pela sua filmagem quando enviar).
    video: { kind: "file", src: "/videos/pick-and-place.mp4" },
    poster: "/machines/pick-and-place.svg",
    specs: [
      { label: "Precisão", value: "± 0,025 mm" },
      { label: "Velocidade", value: "até 4.500 cph" },
      { label: "Componentes", value: "0201 a 50 mm" },
      { label: "Feeders", value: "até 120 fitas" },
    ],
    highlights: ["Visão por câmera", "Troca rápida de feeders", "Operação assistida"],
  },
  {
    slug: "forno-refluxo",
    name: "Forno de Refluxo SMT",
    brand: "SM Tech",
    category: "Soldagem",
    tagline: "Curva térmica controlada por zonas para solda perfeita",
    description:
      "Forno de refluxo de convecção com múltiplas zonas de aquecimento independentes. Garante perfil térmico preciso para fusão da pasta de solda sem danificar os componentes.",
    video: { kind: "youtube", id: "aqz-KE-bpKQ" },
    poster: "/machines/forno-refluxo.svg",
    specs: [
      { label: "Zonas", value: "8 + resfriamento" },
      { label: "Esteira", value: "300 mm" },
      { label: "Temp. máx.", value: "350 °C" },
      { label: "Perfis", value: "ilimitados" },
    ],
    highlights: ["Perfil térmico por zona", "Esteira contínua", "Baixo consumo"],
  },
  {
    slug: "impressora-stencil",
    name: "Impressora de Stencil",
    brand: "SM Tech",
    category: "Aplicação de pasta",
    tagline: "Deposição uniforme de pasta de solda",
    description:
      "Impressora semiautomática de pasta de solda com alinhamento por visão e controle de pressão do rodo. Deposita a quantidade exata de pasta em cada ilha da placa.",
    video: { kind: "youtube", id: "dQw4w9WgXcQ" },
    poster: "/machines/impressora-stencil.svg",
    specs: [
      { label: "Alinhamento", value: "visão CCD" },
      { label: "Área máx.", value: "400 × 300 mm" },
      { label: "Rodo", value: "pressão ajustável" },
      { label: "Repetibilidade", value: "± 0,01 mm" },
    ],
    highlights: ["Alinhamento por visão", "Pressão controlada", "Setup rápido"],
  },
  {
    slug: "aoi-inspecao",
    name: "Inspeção Óptica AOI",
    brand: "SM Tech",
    category: "Inspeção / Qualidade",
    tagline: "Detecção automática de defeitos por imagem",
    description:
      "Inspeção óptica automática (AOI) que compara cada placa com o padrão de referência, identificando componentes ausentes, mal posicionados ou com solda defeituosa em segundos.",
    video: { kind: "youtube", id: "M7lc1UVf-VE" },
    poster: "/machines/aoi-inspecao.svg",
    specs: [
      { label: "Câmera", value: "alta resolução" },
      { label: "Iluminação", value: "RGB multiângulo" },
      { label: "Ciclo", value: "< 10 s/placa" },
      { label: "Relatórios", value: "automáticos" },
    ],
    highlights: ["Comparação com padrão", "Iluminação RGB", "Relatório de defeitos"],
  },
  {
    slug: "solda-onda",
    name: "Máquina de Solda Onda",
    brand: "SM Tech",
    category: "Soldagem THT",
    tagline: "Solda de componentes através de furo em alta produção",
    description:
      "Máquina de solda por onda para componentes through-hole. A placa passa sobre uma onda de solda líquida que preenche todas as conexões simultaneamente.",
    video: { kind: "youtube", id: "ScMzIvxBSi4" },
    poster: "/machines/solda-onda.svg",
    specs: [
      { label: "Onda", value: "dupla (chip + lambda)" },
      { label: "Largura", value: "até 350 mm" },
      { label: "Fluxo", value: "spray controlado" },
      { label: "Pré-aquec.", value: "3 zonas" },
    ],
    highlights: ["Onda dupla", "Fluxo por spray", "Alta produção"],
  },
  {
    slug: "limpadora-placas",
    name: "Limpadora de Placas",
    brand: "SM Tech",
    category: "Pós-processo",
    tagline: "Remoção de resíduos de fluxo e contaminantes",
    description:
      "Sistema de limpeza por aspersão para remover resíduos de fluxo e contaminantes após a soldagem, garantindo confiabilidade e acabamento profissional das placas.",
    video: { kind: "youtube", id: "aqz-KE-bpKQ" },
    poster: "/machines/limpadora-placas.svg",
    specs: [
      { label: "Processo", value: "aspersão + secagem" },
      { label: "Capacidade", value: "lotes contínuos" },
      { label: "Filtragem", value: "circuito fechado" },
      { label: "Secagem", value: "ar quente" },
    ],
    highlights: ["Aspersão + secagem", "Circuito fechado", "Acabamento limpo"],
  },
];
