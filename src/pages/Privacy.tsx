import { Helmet } from "react-helmet-async";
import { PageHero } from "@/components/site/PageHero";
import { smts } from "@/data/company";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy · SMTS</title>
        <meta name="description" content="How SMTS collects and uses personal data submitted through this website." />
      </Helmet>

      <PageHero
        eyebrow="Privacy"
        title="Privacy policy."
        subtitle="How we handle the information you share with us."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[760px] px-6 lg:px-12">
          <div className="space-y-8 text-[var(--text-1)] leading-relaxed">
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-[var(--brand-green)]">Data we collect</h2>
              <p className="mt-3">
                When you use our contact form we collect the name, email, company, phone and message
                you provide. We use this information solely to respond to your request and to provide
                commercial and technical support.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-[var(--brand-green)]">How we use it</h2>
              <p className="mt-3">
                Your data is used only to contact you about your inquiry. We do not sell or share your
                personal data with third parties, except as required to fulfil your request (e.g.
                requesting a datasheet from a manufacturer).
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-[var(--brand-green)]">Your rights (LGPD)</h2>
              <p className="mt-3">
                Under the Brazilian General Data Protection Law (LGPD), you may request access,
                correction or deletion of your personal data at any time by writing to{" "}
                <a href={`mailto:${smts.email}`} className="underline hover:text-[var(--brand-green)]">{smts.email}</a>.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-[var(--brand-green)]">Contact</h2>
              <p className="mt-3">
                {smts.name} — {smts.address.city}-{smts.address.state}, {smts.country}.<br />
                {smts.email} · {smts.phone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
