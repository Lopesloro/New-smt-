import { useMemo, useState } from "react";
import { smts, type SmtsMachine } from "@/data/smts";
import { MachineDetail } from "./MachineDetail";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function Catalog() {
  const families = smts.families;
  const [selected, setSelected] = useState<SmtsMachine>(families[0].machines[0]);
  // Famílias abertas: começa com a primeira aberta.
  const [open, setOpen] = useState<Record<string, boolean>>({
    [families[0].id]: true,
  });

  const familyName = useMemo(
    () => families.find((f) => f.id === selected.family)?.name ?? "",
    [families, selected],
  );

  function toggle(id: string) {
    setOpen((o) => ({ ...o, [id]: !o[id] }));
  }

  function pick(machine: SmtsMachine) {
    setSelected(machine);
    // garante a família aberta ao escolher uma máquina
    setOpen((o) => ({ ...o, [machine.family]: true }));
  }

  return (
    <section id="catalogo" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* MENU EM ÁRVORE — ESQUERDA */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-card">
              <div className="brand-gradient rounded-t-xl px-4 py-3">
                <p className="text-sm font-semibold text-white">Famílias de produtos</p>
                <p className="text-xs text-white/80">Yamaha Robotics SMT</p>
              </div>
              <nav className="max-h-[70vh] overflow-y-auto p-2">
                {families.map((fam) => {
                  const isOpen = !!open[fam.id];
                  return (
                    <div key={fam.id} className="mb-0.5">
                      <button
                        onClick={() => toggle(fam.id)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold text-foreground transition hover:bg-accent/60"
                      >
                        <span>{fam.name}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>

                      {isOpen && (
                        <ul className="ml-2 border-l border-border pl-2">
                          {fam.machines.map((m) => {
                            const active = m.slug === selected.slug;
                            return (
                              <li key={m.slug}>
                                <button
                                  onClick={() => pick(m)}
                                  className={cn(
                                    "flex w-full flex-col rounded-md px-3 py-1.5 text-left text-sm transition",
                                    active
                                      ? "bg-primary text-primary-foreground"
                                      : "text-foreground/80 hover:bg-accent/60",
                                  )}
                                >
                                  <span className="font-medium">{m.model}</span>
                                  {m.tagline && (
                                    <span
                                      className={cn(
                                        "text-xs",
                                        active ? "text-primary-foreground/80" : "text-muted-foreground",
                                      )}
                                    >
                                      {m.tagline}
                                    </span>
                                  )}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* DETALHE — PRINCIPAL */}
          <div className="min-w-0">
            <MachineDetail machine={selected} familyName={familyName} />
          </div>
        </div>
      </div>
    </section>
  );
}
