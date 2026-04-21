import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF8C00",
          orangeSoft: "#FFB84D",
          ink: "#1A1A1A",
          graphite: "#333333",
          muted: "#666666",
          paper: "#F5F5F5",
          blue: "#1E3A5F",
          success: "#10B981",
          danger: "#EF4444"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        lift: "0 18px 45px rgba(26,26,26,0.14)"
      },
      backgroundImage: {
        "hero-texture":
          "linear-gradient(120deg, rgba(255,255,255,0.96), rgba(245,245,245,0.9)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80')"
      }
    }
  },
  plugins: []
};

export default config;
