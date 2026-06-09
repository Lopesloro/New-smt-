import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const BLUE = "#0066ff";
const CYAN = "#00ffff";
const BG = "#0b0b0b";

const FONT = "'Segoe UI', system-ui, sans-serif";

const GridBg: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: BG,
      backgroundImage:
        "linear-gradient(#1d1d1d 1px, transparent 1px), linear-gradient(90deg, #1d1d1d 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />
);

const Caption: React.FC<{ step: string; title: string; sub: string }> = ({
  step,
  title,
  sub,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 16 } });
  const y = interpolate(enter, [0, 1], [40, 0]);
  return (
    <div
      style={{
        position: "absolute",
        left: 120,
        bottom: 140,
        opacity: enter,
        transform: `translateY(${y}px)`,
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          color: CYAN,
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: 4,
        }}
      >
        {step}
      </div>
      <div
        style={{
          fontFamily: FONT,
          color: "#fff",
          fontSize: 84,
          fontWeight: 800,
          marginTop: 8,
        }}
      >
        {title}
      </div>
      <div
        style={{ fontFamily: FONT, color: "#b5b5b5", fontSize: 38, marginTop: 10 }}
      >
        {sub}
      </div>
    </div>
  );
};

// PCB com um bocal (nozzle) que pega e posiciona um componente.
const PickPlaceScene: React.FC = () => {
  const frame = useCurrentFrame();
  // bocal desce, pega, sobe, move e solta — ciclo simples
  const nozzleX = interpolate(frame, [0, 40, 80, 120], [300, 300, 980, 980], {
    extrapolateRight: "clamp",
  });
  const nozzleY = interpolate(
    frame,
    [0, 25, 45, 80, 100, 120],
    [120, 360, 120, 120, 360, 360],
    { extrapolateRight: "clamp" },
  );
  const holding = frame > 25 && frame < 105;

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      {/* PCB */}
      <div
        style={{
          position: "relative",
          width: 1100,
          height: 560,
          borderRadius: 18,
          background: "linear-gradient(135deg,#0a2a16,#0d3a1f)",
          border: `2px solid ${CYAN}`,
          boxShadow: `0 0 80px -10px ${BLUE}`,
        }}
      >
        {/* trilhas */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 60 + i * 80,
              left: 40,
              right: 40,
              height: 3,
              background: "#1f7a44",
            }}
          />
        ))}
        {/* ilhas onde o componente será colocado */}
        <div
          style={{
            position: "absolute",
            left: 940 - 40,
            top: 360 - 40,
            width: 70,
            height: 40,
            border: `2px dashed ${CYAN}`,
            borderRadius: 4,
          }}
        />
        {/* bocal */}
        <div
          style={{
            position: "absolute",
            left: nozzleX,
            top: nozzleY - 120,
            width: 8,
            height: 120,
            background: "#888",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: nozzleX - 22,
            top: nozzleY - 16,
            width: 52,
            height: 24,
            background: "#bbb",
            borderRadius: 4,
          }}
        />
        {/* componente */}
        <div
          style={{
            position: "absolute",
            left: (holding ? nozzleX : 940) - 30,
            top: (holding ? nozzleY + 8 : 360) - 18,
            width: 64,
            height: 36,
            background: "#111",
            border: `2px solid ${BLUE}`,
            borderRadius: 4,
            boxShadow: `0 0 16px ${BLUE}`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export const MachineExplainer: React.FC<{
  machineName: string;
  brand: string;
}> = ({ machineName, brand }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoIn = spring({ frame, fps, config: { damping: 14 } });
  const titleOpacity = interpolate(frame, [10, 30], [0, 1]);

  return (
    <AbsoluteFill>
      <GridBg />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(0,102,255,0.18), transparent)",
        }}
      />

      {/* Marca topo */}
      <div
        style={{
          position: "absolute",
          top: 70,
          left: 120,
          fontFamily: FONT,
          fontSize: 44,
          fontWeight: 800,
          opacity: interpolate(frame, [0, 20], [0, 1]),
        }}
      >
        <span style={{ color: BLUE }}>SM</span>
        <span style={{ color: "#fff" }}>TECH</span>
      </div>

      {/* Intro */}
      <Sequence durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ textAlign: "center", transform: `scale(${0.8 + logoIn * 0.2})` }}>
            <div
              style={{
                fontFamily: FONT,
                color: CYAN,
                fontSize: 36,
                letterSpacing: 8,
                fontWeight: 700,
              }}
            >
              {brand} · COMO FUNCIONA
            </div>
            <div
              style={{
                fontFamily: FONT,
                color: "#fff",
                fontSize: 96,
                fontWeight: 800,
                marginTop: 16,
                opacity: titleOpacity,
                maxWidth: 1400,
              }}
            >
              {machineName}
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Etapa 1 */}
      <Sequence from={90} durationInFrames={120}>
        <PickPlaceScene />
        <Caption
          step="ETAPA 01"
          title="Alimentação e captura"
          sub="O bocal recolhe o componente SMD do feeder por vácuo."
        />
      </Sequence>

      {/* Etapa 2 */}
      <Sequence from={210} durationInFrames={120}>
        <PickPlaceScene />
        <Caption
          step="ETAPA 02"
          title="Visão e alinhamento"
          sub="A câmera verifica a posição com precisão de ± 0,025 mm."
        />
      </Sequence>

      {/* Etapa 3 */}
      <Sequence from={330} durationInFrames={120}>
        <PickPlaceScene />
        <Caption
          step="ETAPA 03"
          title="Posicionamento na placa"
          sub="O componente é depositado exatamente na ilha de solda."
        />
      </Sequence>

      {/* Outro */}
      <Sequence from={450}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: FONT,
                color: "#fff",
                fontSize: 76,
                fontWeight: 800,
              }}
            >
              Precisão automatizada para sua produção
            </div>
            <div
              style={{
                marginTop: 28,
                display: "inline-block",
                padding: "18px 40px",
                borderRadius: 999,
                background: BLUE,
                color: "#fff",
                fontFamily: FONT,
                fontSize: 40,
                fontWeight: 700,
                boxShadow: `0 0 50px -6px ${BLUE}`,
              }}
            >
              smtech.com.br · Solicite seu orçamento
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
