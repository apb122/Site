import Link from "next/link";
import { apps } from "./data/apps";

const sections = [
  { id: "home", label: "Home" },
  { id: "apps", label: "Apps" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-gray-200 bg-white/95 px-6 py-4 backdrop-blur lg:sticky lg:top-0 lg:z-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">
            My Apps Hub {/* TODO: Replace with your site title */}
          </div>
          <nav aria-label="Primary" className="hidden gap-6 text-sm font-medium sm:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-gray-700 transition hover:text-black focus-visible:underline"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center gap-4 px-6 py-16 text-center"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-gray-600">Welcome</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          A home for my tools and applications {/* TODO: Customize hero heading */}
        </h1>
        <p className="text-lg text-gray-700 sm:text-xl">
          Curated links to the web apps I build, maintain, and share. {/* TODO: Customize hero subtitle */}
        </p>
        <a
          href="#apps"
          className="mt-4 text-base font-medium text-gray-900 underline decoration-accent decoration-2 underline-offset-4 transition hover:text-black"
        >
          View applications
        </a>
      </section>

      <section id="apps" className="border-y border-gray-200 bg-white px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Applications</h2>
            <span className="text-sm text-gray-600">Text-only directory</span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {apps.map((app) => (
              <article
                key={app.name}
                className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-background px-4 py-5 transition hover:border-gray-300"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-tight text-gray-900">{app.name}</h3>
                    <span className="text-xs uppercase tracking-wide text-gray-600">{app.status}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">{app.description}</p>
                </div>
                <div className="mt-6">
                  <Link
                    href={app.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-gray-900 underline decoration-accent decoration-2 underline-offset-4 transition hover:text-black"
                  >
                    Open app
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
          <p className="leading-relaxed text-gray-700">
            // TODO: Replace this with my own About text. Use this space to describe your mission and the
            purpose of your applications.
          </p>
          <p className="leading-relaxed text-gray-700">
            // TODO: Add more details about your background, the problems your apps solve, or your philosophy
            for building tools.
          </p>
        </div>
      </section>

      <section id="contact" className="border-t border-gray-200 bg-white px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
          <p className="leading-relaxed text-gray-700">
            // TODO: Replace this with your preferred contact details.
          </p>
          <a
            href="mailto:myaddress@example.com" // TODO: Update to your email
            className="w-fit text-base font-medium text-gray-900 underline decoration-accent decoration-2 underline-offset-4 transition hover:text-black"
          >
            Email me at myaddress@example.com
          </a>
        </div>
      </section>

      <footer className="px-6 py-10">
        <div className="mx-auto max-w-5xl text-center text-sm text-gray-600">
          © {currentYear} My Name. All rights reserved. {/* TODO: Replace with your name */}
        </div>
      </footer>
    </main>
  );
}
