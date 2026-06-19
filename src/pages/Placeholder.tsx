interface PlaceholderProps {
  title: string;
  subtitle?: string;
  note?: string;
}

export function Placeholder({ title, subtitle, note }: PlaceholderProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <p className="font-display text-xs uppercase tracking-[0.18em] text-[var(--brand-lime-dim)]">
          Under construction
        </p>
        <h1 className="mt-3 font-display text-3xl uppercase tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-[var(--text-1)]">{subtitle}</p>
        )}
        {note && (
          <div className="mt-12 max-w-2xl rounded-lg border border-[var(--border-c)] bg-[var(--surface-1)] p-6 text-sm text-[var(--text-1)]">
            <strong className="font-display uppercase tracking-wider text-[var(--brand-green)]">
              Roadmap
            </strong>
            <p className="mt-2">{note}</p>
          </div>
        )}
      </div>
    </section>
  );
}
