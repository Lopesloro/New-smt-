import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
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
              Solutions for electronic assembly, automation and testing.
              Representative of leading manufacturers in Brazil and South America.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-[var(--brand-lime)] mb-4">Catalog</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/catalog/surface-mounters" className="hover:text-white">Surface Mounters</Link></li>
              <li><Link to="/catalog/printers" className="hover:text-white">Printers</Link></li>
              <li><Link to="/catalog/inspection" className="hover:text-white">Inspection</Link></li>
              <li><Link to="/catalog/software" className="hover:text-white">Software</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-[var(--brand-lime)] mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white">About SMTS</Link></li>
              <li><Link to="/showroom" className="hover:text-white">Showroom</Link></li>
              <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-[var(--brand-lime)] mb-4">Get in touch</h4>
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
          <span>© {new Date().getFullYear()} SMT Solutions (SMTS) · All rights reserved.</span>
          <span>Campinas-SP · Brazil</span>
        </div>
      </div>
    </footer>
  );
}
