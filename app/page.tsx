import { AboutSection } from "./components/about-section";
import { AppShowcase } from "./components/app-showcase";
import { CommandPalette } from "./components/command-palette";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Intro } from "./components/intro";
import { apps } from "./data/apps";

const paletteItems = [
  { label: "Home", href: "#intro", group: "Section" as const },
  { label: "Notes", href: "#about", group: "Section" as const },
  { label: "Launchers", href: "#apps", group: "Section" as const },
  { label: "Links", href: "#contact", group: "Section" as const },
  ...apps.map((app) => ({ label: app.name, href: app.url, group: "App" as const }))
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <Header />
      <Intro />
      <AboutSection />
      <AppShowcase />
      <ContactSection />
      <Footer />
      <CommandPalette items={paletteItems} />
    </main>
  );
}
