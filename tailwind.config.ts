import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "black",
        background: "white",
        foreground: "black",
        primary: {
          DEFAULT: "#faff00",
          foreground: "black",
        },
        secondary: {
          DEFAULT: "black",
          foreground: "white",
        },
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        brutal: "4px 4px 0 0 #000",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;