import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "full" | "mark";
  className?: string;
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="SMT Solutions — Home"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src="/brand/smt-solutions.png"
        alt="SMT Solutions"
        className={variant === "full" ? "h-11 w-auto" : "h-8 w-auto"}
      />
    </Link>
  );
}
