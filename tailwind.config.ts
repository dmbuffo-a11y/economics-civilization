import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#fbfaf6",
          100: "#f4f1ea",
          200: "#e9e3d6",
        },
        ink: {
          900: "#0f1d2e",
          800: "#16293f",
          700: "#1f3a56",
          600: "#2c4c6a",
          500: "#51708c",
          400: "#7993ad",
        },
        sky: {
          DEFAULT: "#4d9bd4",
          deep: "#2f6fa6",
          soft: "#bfd9ee",
          mist: "#e6f0f8",
        },
        grove: {
          DEFAULT: "#5b8a64",
          soft: "#c7d9c1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        readable: "70ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,29,46,0.04), 0 8px 24px -12px rgba(15,29,46,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
