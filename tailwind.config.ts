import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        paper: "#f5f1ea",
        blood: "#e10600"
      },
      fontFamily: {
        shout: ["var(--font-anton)", "Impact", "Haettenschweiler", "sans-serif"],
        type: ["var(--font-special-elite)", "Courier New", "monospace"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        "serif-clip": ["var(--font-dm-serif)", "Georgia", "Times New Roman", "serif"]
      },
      letterSpacing: {
        razor: "-0.04em"
      }
    }
  },
  plugins: []
};

export default config;
