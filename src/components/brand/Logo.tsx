import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "full" | "mark";
  className?: string;
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  const src = variant === "full" ? "/brand/smts-wordmark.svg" : "/brand/smts-mark.svg";
  return (
    <Link
      to="/"
      aria-label="SMTS — Home"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src={src}
        alt="SMTS — Official MSTECH Partner"
        className={variant === "full" ? "h-12 w-auto" : "h-9 w-auto"}
      />
    </Link>
  );
}
