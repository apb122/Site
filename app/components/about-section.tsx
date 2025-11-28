export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-shell px-5 py-16" aria-labelledby="about-heading">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">About</p>
          <h2 id="about-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Why this page exists.
          </h2>
          <p className="max-w-prose text-base leading-relaxed text-muted">
            This is a private dock for the things I run on Google Cloud. It keeps my usual tabs close, travels well on mobile,
            and stays out of the way when I’m focused on the work itself.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-muted sm:grid-cols-2">
          <div className="space-y-2 rounded-2xl border border-border bg-surface-elevated px-4 py-5 shadow-subtle">
            <h3 className="text-sm font-semibold text-foreground">Simple on purpose</h3>
            <p className="leading-relaxed">
              Just enough structure to stay organized—clear labels, readable spacing, and no distractions or sales language.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-border bg-surface-elevated px-4 py-5 shadow-subtle">
            <h3 className="text-sm font-semibold text-foreground">Quick to reach</h3>
            <p className="leading-relaxed">
              Keyboard shortcuts, a command palette, and a lean layout mean I can open what I need in a few seconds.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-border bg-surface-elevated px-4 py-5 shadow-subtle">
            <h3 className="text-sm font-semibold text-foreground">Accessible by default</h3>
            <p className="leading-relaxed">
              Semantic HTML, strong contrast, and motion that respects system preferences keep it comfortable to use.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-border bg-surface-elevated px-4 py-5 shadow-subtle">
            <h3 className="text-sm font-semibold text-foreground">Timeless tone</h3>
            <p className="leading-relaxed">
              Neutral typography and a soft palette keep the page feeling personal and steady instead of commercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
