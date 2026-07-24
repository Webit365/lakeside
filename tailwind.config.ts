import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand — evergreen for landscaping, ice-blue for winter services
        pine: {
          50: "#f0f7f2",
          100: "#dcecdf",
          200: "#bbd9c3",
          300: "#8fbd9d",
          400: "#5c9a72",
          500: "#3a7d54",
          600: "#276241",
          700: "#1e4e35",
          800: "#193f2c",
          900: "#153426",
          950: "#0a1d15",
        },
        frost: {
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bfe1fe",
          300: "#93cdfd",
          400: "#60affa",
          500: "#3b8ef6",
          600: "#256feb",
          700: "#1d59d8",
          800: "#1e49af",
          900: "#1e408a",
          950: "#172a54",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde58a",
          300: "#fbd24e",
          400: "#f9bd24",
          500: "#f39c0b",
          600: "#d77706",
          700: "#b25309",
          800: "#90400e",
          900: "#77350f",
          950: "#451a03",
        },
        ink: {
          DEFAULT: "#0c1a13",
          soft: "#26332c",
          muted: "#556259",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(12,26,19,0.04), 0 8px 24px -12px rgba(12,26,19,0.18)",
        lift: "0 12px 40px -12px rgba(12,26,19,0.28)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
