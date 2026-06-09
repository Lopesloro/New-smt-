export function Footer() {
  return (
    <footer id="sobre" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xl font-bold">
              <span className="text-primary">SM</span>TECH
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Máquinas industriais para montagem e solda de placas eletrônicas.
              Tecnologia, suporte e atendimento inteligente.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Navegação</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#showroom" className="hover:text-foreground">Showroom</a></li>
              <li><a href="#solucoes" className="hover:text-foreground">Soluções</a></li>
              <li><a href="#contato" className="hover:text-foreground">Contato</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Soluções</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Montagem SMD</li>
              <li>Soldagem</li>
              <li>Inspeção / Qualidade</li>
              <li>Treinamento</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Contato</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Atibaia/SP</li>
              <li>(11) 98128-8757</li>
              <li>contato@smtech.com.br</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SM Tech. Todos os direitos reservados.</p>
          <p>Atendimento com IA disponível 24 horas.</p>
        </div>
      </div>
    </footer>
  );
}
