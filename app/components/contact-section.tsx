export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-shell px-5 py-16" aria-labelledby="contact-heading">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Links</p>
          <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Quiet ways to reach me.
          </h2>
          <p className="max-w-prose text-sm leading-relaxed text-muted">
            I keep this space personal. If you need to get in touch about the tools here, use the note below—otherwise this page
            stays focused on launching what I already maintain.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-border bg-surface-elevated px-5 py-6 shadow-subtle">
          <p className="text-sm leading-relaxed text-muted">
            Email works best. Keep it short, mention which app you’re asking about, and include any context that helps me respond
            without a long thread.
          </p>
          <a
            href="mailto:me@example.com"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-8 transition hover:decoration-foreground"
          >
            Send a note
          </a>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Swap in the channel you actually use</p>
        </div>
      </div>
    </section>
  );
}
