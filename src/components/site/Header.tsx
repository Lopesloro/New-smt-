import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#showroom", label: "Showroom" },
  { href: "#yamaha", label: "Yamaha SMT" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-xl font-bold tracking-tight">
          <span className="text-primary">SM</span>
          <span className="text-foreground">TECH</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#contato">Solicitar orçamento</a>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#contato" onClick={() => setOpen(false)}>
                Solicitar orçamento
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
