/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
        },
        paper: {
          DEFAULT: "rgb(var(--paper) / <alpha-value>)",
          warm: "rgb(var(--paper-warm) / <alpha-value>)",
          deep: "rgb(var(--paper-deep) / <alpha-value>)",
        },
        surface: "rgb(var(--surface) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
          faint: "rgb(var(--accent-faint) / <alpha-value>)",
        },
        charcoal: "rgb(var(--charcoal) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(ellipse 80% 60% at 70% 20%, rgb(var(--accent) / 0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgb(var(--charcoal) / 0.06), transparent 50%), linear-gradient(165deg, rgb(var(--paper)) 0%, rgb(var(--paper-warm)) 45%, rgb(var(--paper-deep)) 100%)",
        "section-fade":
          "linear-gradient(180deg, rgb(var(--paper)) 0%, rgb(var(--paper-warm)) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "reveal-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "reveal-line": "reveal-line 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
