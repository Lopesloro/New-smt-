import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useSearchParams, Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { smts } from "@/data/company";
import { categories } from "@/data/categories";

// Web3Forms access key (free, no backend). This is a PUBLIC key — safe in
// client-side code — and delivers submissions to comercial@smts.com.br.
// Can be overridden per-environment via VITE_WEB3FORMS_KEY.
const WEB3FORMS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || "065d72ff-34a7-42f2-99d8-04adc420e5e9";

const schema = z.object({
  name: z.string().min(2, "Tell us your name."),
  email: z.string().email("A valid email is required."),
  company: z.string().optional(),
  phone: z.string().min(8, "A phone number is required for contact."),
  interest: z.string().min(1, "Select an interest."),
  message: z.string().min(10, "A short message helps us prepare."),
  // honeypot — must stay empty
  botcheck: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;
type Status = "idle" | "ok" | "error";

export default function Contact() {
  const [params] = useSearchParams();
  const presetInterest = params.get("machine") || "";
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interest: presetInterest },
  });

  const onSubmit = async (data: FormValues) => {
    if (data.botcheck) return; // bot
    setStatus("idle");

    // No key configured (e.g. local dev) → fall back to mailto so nothing is lost.
    if (!WEB3FORMS_KEY) {
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Company: ${data.company ?? "-"}`,
        `Phone: ${data.phone ?? "-"}`,
        `Interest: ${data.interest}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:${smts.email}?subject=${encodeURIComponent(
        `SMTS · Website inquiry — ${data.interest}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("ok");
      reset();
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `SMTS · Website inquiry — ${data.interest}`,
          from_name: "SMTS Website",
          name: data.name,
          email: data.email,
          company: data.company || "-",
          phone: data.phone || "-",
          interest: data.interest,
          message: data.message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact · SMT Solutions (SMTS) — Jaguariúna-SP</title>
        <meta
          name="description"
          content="Talk to our team. SMTS is based in Jaguariúna-SP and serves Brazil & South America for electronic assembly, automation and testing."
        />
      </Helmet>

      <PageHero
        eyebrow="Contact"
        title="Let's spec your line."
        subtitle="Reach out for sales, technical support or partnership. We respond within one business day."
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Send us a message</h2>

              {status === "ok" && (
                <div className="mt-6 flex items-start gap-3 rounded-md border border-[var(--brand-lime)]/50 bg-[var(--brand-lime)]/10 p-4 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-lime-dim)]" />
                  <p className="text-[var(--brand-green-dark)]">
                    Thank you! Your message was sent — we'll get back to you within one business day.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="mt-6 flex items-start gap-3 rounded-md border border-[#B53319]/40 bg-[#B53319]/10 p-4 text-sm">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#B53319]" />
                  <p className="text-[var(--text-1)]">
                    Something went wrong. Please email us directly at{" "}
                    <a href={`mailto:${smts.email}`} className="underline">{smts.email}</a>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                {/* honeypot */}
                <input
                  type="checkbox"
                  {...register("botcheck")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name *" error={errors.name?.message}>
                    <input type="text" {...register("name")} className="input" autoComplete="name" />
                  </Field>
                  <Field label="Email *" error={errors.email?.message}>
                    <input type="email" {...register("email")} className="input" autoComplete="email" />
                  </Field>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Company" error={errors.company?.message}>
                    <input type="text" {...register("company")} className="input" autoComplete="organization" />
                  </Field>
                  <Field label="Phone *" error={errors.phone?.message}>
                    <input type="tel" {...register("phone")} className="input" autoComplete="tel" />
                  </Field>
                </div>
                <Field label="Interest *" error={errors.interest?.message}>
                  <select {...register("interest")} className="input" defaultValue={presetInterest}>
                    <option value="" disabled>Select…</option>
                    {presetInterest && !categories.some((c) => c.name === presetInterest) && (
                      <option value={presetInterest}>{presetInterest}</option>
                    )}
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                    <option value="Service & Spare Parts">Service & Spare Parts</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="Message *" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="input resize-y"
                    placeholder="Board design, target volume, timing…"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-green)] px-6 py-3 font-display text-sm uppercase tracking-widest text-white hover:bg-[var(--brand-green-light)] transition disabled:opacity-50"
                >
                  <Mail className="h-4 w-4" />
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>
                <p className="text-xs text-[var(--text-2)]">
                  By submitting, you agree to be contacted about your request. See our{" "}
                  <Link to="/privacy" className="underline hover:text-[var(--brand-green)]">privacy policy</Link>.
                </p>
              </form>
            </div>

            {/* Side info */}
            <aside>
              <h2 className="font-display text-xl uppercase tracking-tight md:text-2xl">Office</h2>
              <div className="mt-8 space-y-6">
                <Info icon={MapPin} title="Address">
                  {smts.address.street}<br />
                  {smts.address.complement}<br />
                  {smts.address.district} · {smts.address.city} — {smts.address.state}<br />
                  CEP {smts.address.zip} · {smts.address.country}
                </Info>
                <Info icon={Phone} title="Phone">
                  <a href={`tel:${smts.phone.replace(/[^+\d]/g, "")}`} className="hover:text-[var(--brand-green)]">
                    {smts.phone}
                  </a>
                </Info>
                <Info icon={Mail} title="Email">
                  <a href={`mailto:${smts.email}`} className="hover:text-[var(--brand-green)]">{smts.email}</a>
                </Info>
                <Info icon={MessageSquare} title="Contact">
                  {smts.contact.name}, {smts.contact.role}
                </Info>
              </div>

              <div className="mt-12 rounded-lg border border-[var(--border-c)] bg-[var(--surface-2)] p-6">
                <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--brand-lime-dim)]">
                  Region served
                </p>
                <p className="mt-2 font-display text-lg uppercase tracking-wide text-[var(--brand-green)]">
                  Brazil &amp; South America
                </p>
                <p className="mt-2 text-sm text-[var(--text-1)]">
                  Sales, installation, training and after-sales service for the represented equipment.
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-lg border border-[var(--border-c)]">
                <iframe
                  title="SMTS location — Jaguariúna-SP"
                  src="https://www.google.com/maps?q=Rua%20C%C3%A2ndido%20Bueno%2C%201299%20-%20Centro%2C%20Jaguari%C3%BAna%20-%20SP%2C%2013910-033&output=embed"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
