import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#1b1c1c",
          olive: "#6a5f00",
          yellow: "#ffe500",
          "yellow-deep": "#dec800",
          surface: "#fbf9f9",
          "surface-low": "#f5f3f3",
          "surface-high": "#e9e8e7",
          border: "#d8d2c3",
          "border-variant": "#cec7aa",
          footer: "#4b4b4a",
        },
        // Reference-system aliases for a more faithful build
        ink: "#1b1c1c",
        olive: "#6a5f00",
        yellow: "#ffe500",
        "yellow-deep": "#dec800",
        "surface-bright": "#fbf9f9",
        "surface-container-low": "#f5f3f3",
        "surface-container-high": "#e9e8e7",
        "surface-container": "#efeded",
        "surface-container-lowest": "#ffffff",
        "primary-container": "#ffe500",
        "primary-fixed": "#fee400",
        "primary-fixed-dim": "#dec800",
        "on-primary-container": "#726600",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#5f5e5e",
        "surface-variant": "#e3e2e2",
        secondary: "#5f5e5e",
        outline: "#7d775f",
        "outline-variant": "#cec7aa",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Lato", "Arial", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
      },
      boxShadow: {
        card: "0 10px 30px rgba(27, 28, 28, 0.04)",
        "card-hover": "0 22px 45px rgba(27, 28, 28, 0.08)",
        elevated: "0 18px 42px rgba(27, 28, 28, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
