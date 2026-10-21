import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#070b14",
          card: "rgba(15, 23, 42, 0.75)",
          border: "rgba(56, 189, 248, 0.15)",
          primary: "#2563eb",
          cyan: "#38bdf8",
          whatsapp: "#25D366",
        },
      },
    },
  },
  plugins: [],
};

export default config;