export function Footer() {
  return (
    <footer id="contato" className="mt-12 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div id="sobre">
          <img
            src="/assets/img/smts-logo.png"
            alt="SMT Solutions"
            className="h-10 w-auto rounded bg-white p-1.5"
          />
          <p className="mt-3 text-sm text-muted-foreground">
            Representante oficial Yamaha Robotics no Brasil. Soluções completas em
            montagem eletrônica desde 2005.
          </p>
        </div>

        <div>
          <h5 className="text-sm font-semibold">Produtos</h5>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>Surface Mounters</li>
            <li>Solder Printers</li>
            <li>Dispensers</li>
            <li>Inspection Systems</li>
            <li>Hybrid Placer</li>
            <li>Acessórios</li>
            <li>Software</li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold">Empresa</h5>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>Sobre nós</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold">Contato</h5>
          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <p>
              Rua José Ademar Etter, 193
              <br />
              Vila Marieta — Campinas/SP
              <br />
              CEP 13042-110
            </p>
            <p>
              <a href="tel:+551932948902" className="hover:text-primary">
                +55 (19) 3294-8902
              </a>
              <br />
              <a href="tel:+551932943328" className="hover:text-primary">
                +55 (19) 3294-3328
              </a>
            </p>
            <p>
              <a href="mailto:comercial@smts.com.br" className="hover:text-primary">
                comercial@smts.com.br
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-4">
        <p className="mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground sm:px-6">
          © 2025 SMT Solutions — Todos os direitos reservados | Representante Yamaha Robotics
        </p>
      </div>
    </footer>
  );
}
