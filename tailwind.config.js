const path = require("path");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    path.join(__dirname, "index.html"),
    path.join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      colors: {
        // shadcn-compat (HSL tokens em :root)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Brand SMTS — referência direta às CSS vars
        brand: {
          green: "var(--brand-green)",
          "green-dark": "var(--brand-green-dark)",
          "green-mid": "var(--brand-green-mid)",
          "green-light": "var(--brand-green-light)",
          lime: "var(--brand-lime)",
          "lime-bright": "var(--brand-lime-bright)",
          "lime-dim": "var(--brand-lime-dim)",
          gray: "var(--brand-gray)",
        },
        surface: {
          0: "var(--surface-0)",
          1: "var(--surface-1)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
        },
        ink: {
          0: "var(--text-0)",
          1: "var(--text-1)",
          2: "var(--text-2)",
          "on-brand": "var(--text-on-brand)",
          "on-accent": "var(--text-on-accent)",
        },
      },
      fontFamily: {
        display: ['"Jost"', '"Futura PT"', '"Futura Heavy"', '"Inter"', "system-ui", "sans-serif"],
        sans: ['"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.15)", opacity: "0.85" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "smt-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smt-in": "cubic-bezier(0.7, 0, 0.84, 0)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
