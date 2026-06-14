/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        ink: "#07090d",
        panel: "#111820",
        line: "rgba(148, 163, 184, 0.18)",
        mint: "#00d1b2",
        blue: "#4f8cff",
        amber: "#f59e0b",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
    },
  },
  plugins: [],
};
