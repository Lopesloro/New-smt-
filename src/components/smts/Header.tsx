export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Topbar de contato (conteúdo real do site SMTS) */}
      <div className="brand-gradient text-white/90">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs sm:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+551932948902" className="hover:text-white">
              📞 +55 (19) 3294-8902
            </a>
            <a href="mailto:comercial@smts.com.br" className="hover:text-white">
              ✉ comercial@smts.com.br
            </a>
          </div>
          <a
            href="https://www.linkedin.com/company/smts/"
            target="_blank"
            rel="noopener"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Barra principal */}
      <div className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3" aria-label="SMT Solutions">
            <img src="/assets/img/smts-logo.png" alt="SMT Solutions" className="h-9 w-auto" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-foreground md:flex">
            <a href="#catalogo" className="hover:text-primary">Produtos</a>
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <a
            href="#contato"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-[hsl(var(--green-dark))]"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
