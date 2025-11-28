import { AppCard } from "./app-card";
import { apps } from "../data/apps";

export function AppShowcase() {
  return (
    <section id="apps" className="border-y border-border/60 bg-surface px-5 py-16" aria-labelledby="apps-heading">
      <div className="mx-auto flex w-full max-w-shell flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Applications</p>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 id="apps-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Pinned launchers
            </h2>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">Plain labels, instant routes</span>
          </div>
          <p className="max-w-prose text-sm leading-relaxed text-muted">
            These are the destinations I open most: admin panels, dashboards, and small utilities. The list is simple JSON so I
            can update it quickly without reshaping the page.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
