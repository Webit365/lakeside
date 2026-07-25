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
        // Brand — matched to the Lakeside logo: grass green #52B74A + azure blue #1281C4
        pine: {
          50: "#f1faef",
          100: "#ddf2d9",
          200: "#bde7b5",
          300: "#8fd685",
          400: "#63c257",
          500: "#52b74a", // brand green
          600: "#3f9a3a",
          700: "#347a31",
          800: "#2c602b",
          900: "#264f26",
          950: "#0f2a12",
        },
        frost: {
          50: "#eef8ff",
          100: "#d9efff",
          200: "#bae3ff",
          300: "#88d0ff",
          400: "#4fb4fb",
          500: "#2698ec",
          600: "#1281c4", // brand blue
          700: "#12669d",
          800: "#155681",
          900: "#17486b",
          950: "#0f2c46",
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
