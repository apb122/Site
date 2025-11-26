import Link from "next/link";
import type { AppMeta } from "../data/apps";

export function AppCard({ app }: { app: AppMeta }) {
  return (
    <article
      className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-surface-elevated px-5 py-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-subtle focus-within:-translate-y-1 focus-within:border-accent/70 focus-within:shadow-subtle"
      aria-labelledby={`${app.name}-title`}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h3 id={`${app.name}-title`} className="text-lg font-semibold leading-tight tracking-tight text-foreground">
            {app.name}
          </h3>
          <span className="rounded-full border border-border px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            {app.status}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{app.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm">
        <Link
          href={app.url}
          target="_blank"
          rel="noreferrer noopener"
          className="relative font-medium text-foreground transition before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:scale-x-0 before:bg-accent before:transition before:duration-300 before:ease-out group-hover:before:scale-x-100 focus-visible:before:scale-x-100"
        >
          Launch
        </Link>
        {app.stack ? <span className="text-xs uppercase tracking-[0.2em] text-muted">{app.stack}</span> : null}
      </div>
    </article>
  );
}
