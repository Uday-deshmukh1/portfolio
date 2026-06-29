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
        ink: "#050816",
        panel: "#111820",
        line: "rgba(148, 163, 184, 0.18)",
        mint: "#00d1b2",
        cyan: "#00E5FF",
        purple: "#7C3AED",
        blue: "#4f8cff",
        amber: "#f59e0b",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 0, 0, 0.38)",
        "glow-cyan": "0 0 40px rgba(0, 229, 255, 0.15)",
        "glow-purple": "0 0 40px rgba(124, 58, 237, 0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 229, 255, 0.3)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
