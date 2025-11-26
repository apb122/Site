"use client";

import { useEffect, useMemo, useState } from "react";

type PaletteItem = {
  label: string;
  href: string;
  group: "Section" | "App";
};

type CommandPaletteProps = {
  items: PaletteItem[];
};

export function CommandPalette({ items }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return items;
    return items.filter((item) => item.label.toLowerCase().includes(q));
  }, [items, query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/30 px-4 pt-24 backdrop-blur-sm" role="dialog" aria-modal>
      <div className="w-full max-w-xl rounded-2xl border border-border/70 bg-surface-elevated shadow-subtle">
        <div className="border-b border-border/70 px-4 py-3">
          <label className="sr-only" htmlFor="palette-search">
            Search destinations
          </label>
          <input
            id="palette-search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to filter sections and apps…"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
        </div>
        <ul className="max-h-[50vh] divide-y divide-border overflow-y-auto">
          {filtered.length === 0 ? (
            <li className="px-4 py-3 text-sm text-muted">No matches.</li>
          ) : (
            filtered.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm text-foreground transition hover:bg-surface"
                >
                  <span>{item.label}</span>
                  <span className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">{item.group}</span>
                </a>
              </li>
            ))
          )}
        </ul>
        <div className="flex items-center justify-between px-4 py-2 text-[0.75rem] uppercase tracking-[0.18em] text-muted">
          <span>Command palette</span>
          <span>Press Esc to close</span>
        </div>
      </div>
    </div>
  );
}
