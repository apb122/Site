import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        border: "var(--color-border)"
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "SF Pro Text", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 8px 28px -18px rgba(0, 0, 0, 0.35)",
        outline: "0 0 0 1px var(--color-border)"
      },
      maxWidth: {
        prose: "60ch",
        shell: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
