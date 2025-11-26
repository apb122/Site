import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

type NavSection = {
  id: string;
  label: string;
};

const sections: NavSection[] = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "apps", label: "Apps" },
  { id: "contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-shell items-center justify-between px-5 py-4">
        <Link href="#intro" className="text-sm font-semibold tracking-tight text-foreground">
          Minimal Stack
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-xs uppercase tracking-[0.18em] text-muted sm:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="transition hover:text-foreground focus-visible:text-foreground"
            >
              {section.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
