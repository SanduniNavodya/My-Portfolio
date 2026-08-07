/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(26 35 50 / <alpha-value>)",
          soft: "rgb(58 70 88 / <alpha-value>)",
          muted: "rgb(107 119 137 / <alpha-value>)",
        },
        paper: {
          DEFAULT: "rgb(244 246 249 / <alpha-value>)",
          warm: "rgb(238 242 246 / <alpha-value>)",
          deep: "rgb(226 232 240 / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(47 111 143 / <alpha-value>)",
          soft: "rgb(74 138 171 / <alpha-value>)",
          faint: "rgb(214 232 240 / <alpha-value>)",
        },
        charcoal: "rgb(37 43 51 / <alpha-value>)",
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Source Serif 4",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "Source Sans 3",
          "Segoe UI",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(47,111,143,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(37,43,51,0.06), transparent 50%), linear-gradient(165deg, #F7F9FC 0%, #E8EEF4 45%, #DDE6EF 100%)",
        "section-fade":
          "linear-gradient(180deg, #F4F6F9 0%, #EBF0F5 100%)",
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
