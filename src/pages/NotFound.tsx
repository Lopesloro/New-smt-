import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 · SMTS</title>
      </Helmet>
      <section className="flex min-h-[70vh] items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center">
          <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[var(--brand-lime-dim)]">
            Error 404
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-tight md:text-6xl">
            Page not found
          </h1>
          <p className="mt-5 text-[var(--text-1)]">
            The page you're looking for couldn't be found. It may have been moved, or never existed.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-green)] px-6 py-3 font-display text-sm uppercase tracking-wider text-white hover:bg-[var(--brand-green-light)] transition"
            >
              Home <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-c)] px-6 py-3 font-display text-sm uppercase tracking-wider text-[var(--text-1)] hover:border-[var(--brand-lime)] transition"
            >
              Browse catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
