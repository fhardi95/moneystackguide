import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F3F5EF",
        ink: "#122019",
        primary: {
          DEFAULT: "#1B4332",
          light: "#2D6A4F",
          dark: "#0E2A1F",
        },
        gold: {
          DEFAULT: "#B8862F",
          light: "#D6A94F",
        },
        slate: {
          soft: "#5B6B62",
        },
        line: "#DCE3DA",
      },
      fontFamily: {
        display: [
          "Georgia",
          "Iowan Old Style",
          "Palatino Linotype",
          "URW Palladio L",
          "P052",
          "serif",
        ],
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        stack: "6px 6px 0 0 #DCE3DA, 12px 12px 0 0 #F3F5EF, 12px 12px 0 1px #DCE3DA",
      },
    },
  },
  plugins: [],
};
export default config;
