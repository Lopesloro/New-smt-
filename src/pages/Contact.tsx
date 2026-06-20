import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { smts } from "@/data/company";
import { categories } from "@/data/categories";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  email: z.string().email("Informe um e-mail válido."),
  company: z.string().optional(),
  phone: z.string().optional(),
  interest: z.string().min(1, "Selecione um interesse."),
  message: z.string().min(10, "Uma mensagem curta nos ajuda a preparar o atendimento."),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company ?? "-"}`,
      `Phone: ${data.phone ?? "-"}`,
      `Interest: ${data.interest}`,
      "",
      data.message,
    ].join("\n");
    const mailto = `mailto:${smts.email}?subject=${encodeURIComponent(
      `SMTS · Contato pelo site — ${data.interest}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contato · SMT Solutions (SMTS) — Campinas-SP</title>
        <meta
          name="description"
          content="Fale com a nossa equipe. A SMTS fica em Campinas-SP e atende clientes no Brasil e na América do Sul em montagem eletrônica, automação e testes."
        />
      </Helmet>

      <PageHero
        eyebrow="Contato"
        title="Vamos especificar a sua linha."
        subtitle="Fale conosco para vendas, suporte técnico ou parcerias. Respondemos em até um dia útil."
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Envie uma mensagem</h2>
              {sent && (
                <div className="mt-6 flex items-start gap-3 rounded-md border border-[var(--brand-lime)]/50 bg-[var(--brand-lime)]/10 p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-lime-dim)]" />
                  <div>
                    <p className="font-medium text-[var(--brand-green-dark)]">
                      Seu programa de e-mail deve estar abrindo agora.
                    </p>
                    <p className="mt-1 text-[var(--text-1)]">
                      Se nada acontecer, escreva direto para <a href={`mailto:${smts.email}`} className="underline">{smts.email}</a>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Nome *" error={errors.name?.message}>
                    <input
                      type="text"
                      {...register("name")}
                      className="input"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="E-mail *" error={errors.email?.message}>
                    <input
                      type="email"
                      {...register("email")}
                      className="input"
                      autoComplete="email"
                    />
                  </Field>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Empresa" error={errors.company?.message}>
                    <input
                      type="text"
                      {...register("company")}
                      className="input"
                      autoComplete="organization"
                    />
                  </Field>
                  <Field label="Telefone" error={errors.phone?.message}>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="input"
                      autoComplete="tel"
                    />
                  </Field>
                </div>
                <Field label="Interesse *" error={errors.interest?.message}>
                  <select {...register("interest")} className="input" defaultValue="">
                    <option value="" disabled>Selecione…</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                    <option value="Assistência & Peças">Assistência & Peças</option>
                    <option value="Parceria">Parceria</option>
                    <option value="Outro">Outro</option>
                  </select>
                </Field>
                <Field label="Mensagem *" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="input resize-y"
                    placeholder="Projeto da PCB, volume desejado, prazo…"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-green)] px-6 py-3 font-display text-sm uppercase tracking-widest text-white hover:bg-[var(--brand-green-light)] transition disabled:opacity-50"
                >
                  <Mail className="h-4 w-4" />
                  {isSubmitting ? "Enviando…" : "Enviar por e-mail"}
                </button>
                <p className="text-xs text-[var(--text-2)]">
                  Ao enviar, abre o seu programa de e-mail com a mensagem preenchida. Podemos
                  integrar um formulário com envio automático quando quiser.
                </p>
              </form>
            </div>

            {/* Side info */}
            <aside>
              <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Escritório</h2>
              <div className="mt-8 space-y-6">
                <Info icon={MapPin} title="Endereço">
                  {smts.address.street}<br />
                  {smts.address.district}<br />
                  {smts.address.city} — {smts.address.state}, {smts.address.zip}<br />
                  {smts.address.country}
                </Info>
                <Info icon={Phone} title="Telefone">
                  <a href={`tel:${smts.phone.replace(/[^+\d]/g, "")}`} className="hover:text-[var(--brand-green)]">
                    {smts.phone}
                  </a>
                  <br />
                  <a href={`tel:${smts.mobile.replace(/[^+\d]/g, "")}`} className="hover:text-[var(--brand-green)]">
                    {smts.mobile} (celular)
                  </a>
                </Info>
                <Info icon={Mail} title="E-mail">
                  <a href={`mailto:${smts.email}`} className="hover:text-[var(--brand-green)]">{smts.email}</a>
                </Info>
                <Info icon={MessageSquare} title="Contato">
                  {smts.contact.name}, {smts.contact.role}
                </Info>
              </div>

              <div className="mt-12 rounded-lg border border-[var(--border-c)] bg-[var(--surface-2)] p-6">
                <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-lime-dim)]">
                  Região atendida
                </p>
                <p className="mt-2 font-display text-lg uppercase tracking-wide text-[var(--brand-green)]">
                  Brasil &amp; América do Sul
                </p>
                <p className="mt-2 text-sm text-[var(--text-1)]">
                  Venda, instalação, treinamento e assistência técnica dos equipamentos representados.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block font-mono-tech text-xs uppercase tracking-widest text-[var(--text-1)]">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 block text-xs text-[#B53319]">{error}</span>}
    </label>
  );
}

function Info({ icon: Icon, title, children }: { icon: typeof Mail; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-[var(--brand-lime-dim)]" />
      <div>
        <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--text-2)]">{title}</p>
        <div className="mt-1 text-sm leading-relaxed text-[var(--text-1)]">{children}</div>
      </div>
    </div>
  );
}
