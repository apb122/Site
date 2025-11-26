import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ScrollProgress } from "./components/scroll-progress";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const themeScript = `(() => { try { const stored = localStorage.getItem('minimal-portfolio-theme'); const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const theme = stored === 'dark' || stored === 'light' ? stored : prefersDark ? 'dark' : 'light'; document.documentElement.classList.toggle('dark', theme === 'dark'); document.documentElement.style.colorScheme = theme; } catch (_) {} })();`;

export const metadata: Metadata = {
  title: "Minimal Stack Portfolio",
  description: "A quiet, typographic gallery for applications and tools."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
