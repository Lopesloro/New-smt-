/**
 * Linha de máquinas SMT da Yamaha (dados do site oficial:
 * https://global.yamaha-motor.com/business/smt/).
 *
 * Cada máquina usa uma PARTE do trecho do vídeo do YouTube
 * (id ttkhyhas4Mw) entre 11:25 (685s) e 11:57 (717s),
 * fatiado sequencialmente entre as máquinas.
 */
export interface YamahaMachine {
  model: string;
  name: string;
  category: string;
  blurb: string;
  specs: { label: string; value: string }[];
  /** recorte do vídeo (segundos) dentro de 685–717 */
  start: number;
  end: number;
}

export const YT_ID = "ttkhyhas4Mw";

export const yamahaMachines: YamahaMachine[] = [
  {
    model: "YRM20",
    name: "Surface Mounter YRM20",
    category: "Mounter (Pick & Place)",
    blurb:
      "Montadora modular all-around da nova geração YR, equilibrando produtividade e flexibilidade na colocação de componentes.",
    specs: [
      { label: "Tipo", value: "Modular high-efficiency" },
      { label: "Cabeçote", value: "rotativo RM" },
      { label: "Produtividade", value: "até 120.000 cph" },
    ],
    start: 685,
    end: 689,
  },
  {
    model: "YRM10",
    name: "Surface Mounter YRM10",
    category: "Mounter (Pick & Place)",
    blurb:
      "Mounter compacto e econômico para linhas de produção que precisam de flexibilidade em espaço reduzido.",
    specs: [
      { label: "Tipo", value: "Compacto / econômico" },
      { label: "Footprint", value: "reduzido" },
      { label: "Aplicação", value: "lotes médios" },
    ],
    start: 689,
    end: 693,
  },
  {
    model: "YSM20R",
    name: "YSM20R · Z:LEX",
    category: "Mounter (Pick & Place)",
    blurb:
      "Montadora de superfície de alta velocidade da série YSM, para máxima produtividade em linha.",
    specs: [
      { label: "Linha", value: "YSM Z:LEX" },
      { label: "Velocidade", value: "até 200.000 cph" },
      { label: "Foco", value: "alta densidade" },
    ],
    start: 693,
    end: 696,
  },
  {
    model: "YRP10e",
    name: "Solder-Paste Printer YRP10e",
    category: "Printer (Pasta de solda)",
    blurb:
      "Impressora de pasta de solda de nível de entrada da nova geração YR, com alinhamento e inspeção integrados.",
    specs: [
      { label: "Função", value: "impressão de pasta" },
      { label: "Geração", value: "série YR" },
      { label: "Nível", value: "entry-level" },
    ],
    start: 696,
    end: 700,
  },
  {
    model: "YCP10",
    name: "Solder-Paste Printer YCP10",
    category: "Printer (Pasta de solda)",
    blurb:
      "Impressora de pasta de solda compacta para deposição precisa sobre as PCBs.",
    specs: [
      { label: "Função", value: "impressão compacta" },
      { label: "Alinhamento", value: "por visão" },
      { label: "Aplicação", value: "linhas SMT" },
    ],
    start: 700,
    end: 703,
  },
  {
    model: "YRM-D",
    name: "Dispenser YRM-D",
    category: "Dispenser",
    blurb:
      "Dispensador de adesivos e materiais com troca automática de pinos push-up (Automatic Push-Up Pin Replacement).",
    specs: [
      { label: "Função", value: "dispensação" },
      { label: "Recurso", value: "troca auto de pinos" },
      { label: "Série", value: "YRM" },
    ],
    start: 703,
    end: 707,
  },
  {
    model: "YRi-V",
    name: "AOI YRi-V",
    category: "Inspeção (AOI)",
    blurb:
      "Sistema de inspeção óptica automatizada 3D que valida a montagem comparando cada placa com o padrão.",
    specs: [
      { label: "Função", value: "inspeção óptica 3D" },
      { label: "Geração", value: "série YR" },
      { label: "Saída", value: "relatórios automáticos" },
    ],
    start: 707,
    end: 710,
  },
  {
    model: "YSi-SP",
    name: "SPI YSi-SP",
    category: "Inspeção (AOI)",
    blurb:
      "Inspetor de pasta de solda (SPI) que mede volume e posicionamento da pasta antes da montagem.",
    specs: [
      { label: "Função", value: "inspeção de pasta (SPI)" },
      { label: "Medição", value: "volume / altura 3D" },
      { label: "Posição", value: "pré-montagem" },
    ],
    start: 710,
    end: 714,
  },
  {
    model: "YRH10",
    name: "Hybrid Placer YRH10",
    category: "Flip Chip / Hybrid",
    blurb:
      "Equipamento híbrido para posicionamento e montagem de chips (flip chip bonder) de alta precisão.",
    specs: [
      { label: "Função", value: "flip chip / híbrido" },
      { label: "Precisão", value: "alta" },
      { label: "Variantes", value: "YRH10 / YRH10W" },
    ],
    start: 714,
    end: 717,
  },
];
