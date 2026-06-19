import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="border-b border-[var(--border-c)] bg-[var(--surface-1)]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-20">
        {eyebrow && (
          <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[var(--brand-lime-dim)]">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 font-display text-3xl uppercase tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-3xl text-lg text-[var(--text-1)]">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
