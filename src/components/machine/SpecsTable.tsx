import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import type { Spec, SpecSection } from "@/data/types";

interface Props {
  specs: Spec[];
  sections?: SpecSection[];
  machineName: string;
}

export function SpecsTable({ specs, sections, machineName }: Props) {
  const hasSections = !!sections && sections.length > 0;

  if (!specs.length && !hasSections) {
    return (
      <div className="rounded-lg border border-dashed border-[var(--border-strong)] bg-[var(--surface-2)] p-8 text-center">
        <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]">
          Detailed datasheet
        </p>
        <p className="mt-3 max-w-md mx-auto text-sm text-[var(--text-1)]">
          Full technical specifications for the {machineName} are available on request — we send the
          latest revision direct from the manufacturer.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-[var(--brand-green)] px-5 py-2.5 font-display text-xs uppercase tracking-widest text-white hover:bg-[var(--brand-green-light)] transition"
        >
          <Mail className="h-4 w-4" /> Request datasheet
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Quick specs */}
      {specs.length > 0 && (
        <div className="overflow-hidden rounded-lg border border-[var(--border-c)]">
          <div className="bg-[var(--brand-green)] px-5 py-3 font-display text-sm uppercase tracking-wide text-white">
            Key specifications
          </div>
          <table className="w-full">
            <tbody>
              {specs.map((s, i) => (
                <tr key={s.label} className={i % 2 ? "bg-[rgba(152,215,20,0.16)]" : "bg-[var(--surface-1)]"}>
                  <th className="w-2/5 px-5 py-3 text-left font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]">
                    {s.label}
                  </th>
                  <td className="px-5 py-3 text-sm text-[var(--text-0)]">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detailed grouped tables */}
      {hasSections &&
        sections!.map((sec) => (
          <div key={sec.title} className="overflow-hidden rounded-lg border border-[var(--border-c)]">
            <div className="bg-[var(--brand-green)] px-5 py-3 font-display text-sm uppercase tracking-wide text-white">
              {sec.title}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                {sec.headers.length > 0 && (
                  <thead>
                    <tr className="border-b border-[var(--border-c)] bg-[var(--surface-2)]">
                      {sec.headers.map((h, i) => (
                        <th
                          key={i}
                          className="px-5 py-2.5 text-left font-mono-tech text-[11px] uppercase tracking-widest text-[var(--brand-green)]"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {sec.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 ? "bg-[rgba(152,215,20,0.16)]" : "bg-[var(--surface-1)]"}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={
                            ci === 0
                              ? "px-5 py-2.5 text-left font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]"
                              : "px-5 py-2.5 text-sm text-[var(--text-0)]"
                          }
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
    </div>
  );
}
