import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Upload } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Vamos automatizar sua produção?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fale com nossos especialistas e receba uma proposta sob medida.
            Atendemos todo o Brasil.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-accent" />
              <p className="text-sm text-foreground/90">
                R. Belém do Pará, 298 — Recreio Estoril, Atibaia/SP
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent" />
              <p className="text-sm text-foreground/90">(11) 98128-8757</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" />
              <p className="text-sm text-foreground/90">contato@smtech.com.br</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-dashed border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-sm font-medium text-accent">
              <Upload className="h-4 w-4" /> Envio de vídeos
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Tem o vídeo da sua máquina funcionando? O painel administrativo
              aceita upload de <strong>mp4</strong> ou links do YouTube/Vimeo —
              e o vídeo entra automaticamente no showroom.
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          {sent ? (
            <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold text-accent">
                Mensagem enviada!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Nossa equipe entrará em contato em breve.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {[
                { id: "nome", label: "Nome", type: "text" },
                { id: "empresa", label: "Empresa", type: "text" },
                { id: "email", label: "E-mail", type: "email" },
                { id: "telefone", label: "Telefone / WhatsApp", type: "tel" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="mb-1.5 block text-sm font-medium">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="msg" className="mb-1.5 block text-sm font-medium">
                  Qual máquina te interessa?
                </label>
                <textarea
                  id="msg"
                  rows={3}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Solicitar orçamento
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
