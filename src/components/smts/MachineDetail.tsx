import { VideoPlayer } from "@/components/site/VideoPlayer";
import { videoFor, type SmtsMachine, type SpecCell } from "@/data/smts";
import { cn } from "@/lib/utils";

const FALLBACK_IMG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect fill='%23E8F5E9' width='400' height='300'/><text x='200' y='150' text-anchor='middle' fill='%232E7D32' font-family='sans-serif' font-size='22'>Yamaha SMT</text></svg>";

function toneClass(tone: SpecCell["tone"]) {
  if (tone === "yes") return "cell-yes";
  if (tone === "no") return "cell-no";
  if (tone === "partial") return "cell-partial";
  return "";
}

export function MachineDetail({
  machine,
  familyName,
}: {
  machine: SmtsMachine;
  familyName: string;
}) {
  return (
    <article className="mx-auto max-w-4xl px-1 pb-16">
      {/* Cabeçalho */}
      <p className="text-sm text-muted-foreground">
        <span className="text-primary">{familyName}</span> / {machine.model}
      </p>
      <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{machine.model}</h1>
      {machine.tagline && (
        <p className="mt-1 text-lg font-medium text-primary">{machine.tagline}</p>
      )}
      {machine.description && (
        <p className="mt-4 text-muted-foreground">{machine.description}</p>
      )}

      {/* Quick specs */}
      {machine.quick.length > 0 && (
        <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {machine.quick.map((q) => (
            <div key={q.label} className="rounded-lg border border-border bg-accent/40 p-3">
              <dt className="text-xs text-muted-foreground">{q.label}</dt>
              <dd className="mt-0.5 font-semibold text-foreground">{q.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {/* Vídeo da máquina */}
      <section className="mt-8">
        <h2 className="mb-3 text-xl">Vídeo de funcionamento</h2>
        <VideoPlayer
          key={machine.slug}
          source={videoFor(machine.slug)}
          poster={machine.image}
          title={machine.model}
        />
      </section>

      {/* Imagem da máquina (rola para baixo até as specs) */}
      <section className="mt-8">
        <h2 className="mb-3 text-xl">Imagem</h2>
        <div className="overflow-hidden rounded-lg border border-border bg-white">
          <img
            src={machine.image || FALLBACK_IMG}
            alt={machine.model}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src !== FALLBACK_IMG) img.src = FALLBACK_IMG;
            }}
            className="mx-auto max-h-[460px] w-full object-contain"
          />
        </div>
      </section>

      {/* Especificações (tabelas reais extraídas do site) */}
      {machine.sections.map((sec, i) => (
        <section key={i} className="mt-8">
          <h2 className="mb-3 text-xl">{sec.title}</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">
              {sec.headers.length > 0 && (
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    {sec.headers.map((h, hi) => (
                      <th key={hi} className="px-4 py-2.5 text-left font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {sec.rows.map((row, ri) => (
                  <tr key={ri} className="border-t border-border odd:bg-secondary/40">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={cn(
                          "px-4 py-2.5",
                          ci === 0 && "font-medium text-foreground",
                          toneClass(cell.tone),
                        )}
                      >
                        {cell.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="mt-10 rounded-xl border border-border bg-accent/50 p-6 text-center">
        <h3 className="text-xl">Interessado no {machine.model}?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Fale com o time comercial da SMTS e receba uma proposta com instalação,
          treinamento e suporte técnico.
        </p>
        <a
          href="#contato"
          className="mt-4 inline-block rounded-md bg-primary px-6 py-2.5 font-semibold text-primary-foreground transition hover:bg-[hsl(var(--green-dark))]"
        >
          Solicitar orçamento
        </a>
      </div>
    </article>
  );
}
