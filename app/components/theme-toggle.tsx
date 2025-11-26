"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted transition hover:border-accent hover:text-foreground focus-visible:border-accent"
    >
      <span className="sr-only">Switch between light and dark themes</span>
      <span className="text-[0.65rem] leading-none">{theme === "dark" ? "Dark" : "Light"}</span>
      <span className="relative inline-flex h-4 w-7 items-center rounded-full bg-border">
        <span
          className={`absolute h-3 w-3 rounded-full bg-foreground transition duration-300 ease-out ${theme === "dark" ? "translate-x-3.5" : "translate-x-1"}`}
          aria-hidden
        />
      </span>
    </button>
  );
}
