export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-shell px-5 py-16" aria-labelledby="contact-heading">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Contact</p>
          <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Availability, collaboration, and support.
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-muted">
            Keep this section succinct: share how you prefer to be contacted, your availability window, and what types of requests
            you prioritize.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-border bg-surface-elevated px-5 py-6 shadow-subtle">
          <p className="text-sm leading-relaxed text-muted">
            Email is the quickest path. Include context, links to relevant repositories or demos, and the outcome you are aiming
            for. Responses typically arrive within two business days.
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-8 transition hover:decoration-foreground"
          >
            Contact via email
          </a>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Replace with your preferred channel</p>
        </div>
      </div>
    </section>
  );
}
