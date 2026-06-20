import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="bg-[var(--brand-green)] text-[var(--text-on-brand)]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="bg-white/95 inline-block rounded-md p-2">
              <Logo variant="full" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Soluções em montagem eletrônica, automação e testes.
              Representante de fabricantes líderes no Brasil e na América do Sul.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-[var(--brand-lime)] mb-4">Catálogo</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/catalog/bit-router" className="hover:text-white">Bit Router System</a></li>
              <li><a href="/catalog/sawing" className="hover:text-white">Sawing System</a></li>
              <li><a href="/catalog/laser" className="hover:text-white">Laser System</a></li>
              <li><a href="/catalog/others" className="hover:text-white">Outros & Suporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-[var(--brand-lime)] mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/about" className="hover:text-white">Sobre a SMTS</a></li>
              <li><a href="/showroom" className="hover:text-white">Showroom</a></li>
              <li><a href="/resources" className="hover:text-white">Recursos</a></li>
              <li><a href="/contact" className="hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-[var(--brand-lime)] mb-4">Fale conosco</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-lime)]" />
                <span>
                  Av. Dr. Jesuino Marcondes Machado, 2071<br />
                  Chácara da Barra · Campinas-SP<br />
                  CEP 13090-723
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-[var(--brand-lime)]" />
                <a href="tel:+551932948902" className="hover:text-white">+55 (19) 3294-8902</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-[var(--brand-lime)]" />
                <a href="mailto:ricardo@smts.com.br" className="hover:text-white">ricardo@smts.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} SMT Solutions (SMTS) · Todos os direitos reservados.</span>
          <span>Campinas-SP · Brasil</span>
        </div>
      </div>
    </footer>
  );
}
