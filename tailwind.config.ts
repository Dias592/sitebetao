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
        ink: "#16241F",
        "ink-soft": "#2C3B34",
        paper: "#EDEFE7",
        "paper-2": "#F7F8F3",
        brass: "#B98A2E",
        "brass-dark": "#8A6620",
        rust: "#8B3A2B",
        line: "rgba(22,36,31,0.14)",
        "line-soft": "rgba(22,36,31,0.08)",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
      },
      maxWidth: {
        wrap: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
