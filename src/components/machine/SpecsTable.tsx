import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import type { Spec } from "@/data/types";

interface Props {
  specs: Spec[];
  machineName: string;
}

export function SpecsTable({ specs, machineName }: Props) {
  if (!specs.length) {
    return (
      <div className="rounded-lg border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
        <p className="font-mono-tech text-xs uppercase tracking-widest text-white/50">
          Detailed datasheet
        </p>
        <p className="mt-3 max-w-md mx-auto text-sm text-white/75">
          Full technical specifications for the {machineName} are available on request — we send the
          latest revision direct from MSTECH.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-[var(--brand-lime)] px-5 py-2.5 font-display text-xs uppercase tracking-widest text-[var(--brand-green-dark)] hover:bg-[var(--brand-lime-bright)] transition"
        >
          <Mail className="h-4 w-4" /> Request datasheet
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <table className="w-full">
        <tbody>
          {specs.map((s, i) => (
            <tr
              key={s.label}
              className={i % 2 ? "bg-white/[0.02]" : ""}
            >
              <th className="w-1/3 px-5 py-3 text-left font-mono-tech text-xs uppercase tracking-widest text-white/55">
                {s.label}
              </th>
              <td className="px-5 py-3 text-sm text-white/90">{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
