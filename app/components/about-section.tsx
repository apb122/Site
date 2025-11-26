export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-shell px-5 py-16" aria-labelledby="about-heading">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">About</p>
          <h2 id="about-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Purpose, posture, and principles.
          </h2>
          <p className="max-w-prose text-base leading-relaxed text-muted">
            This space is designed to hold concise descriptions of each application, their intent, and the rituals behind them.
            Replace the copy with your own perspective—what you build, why it matters, and how you keep the work calm.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-muted sm:grid-cols-2">
          <div className="space-y-2 rounded-2xl border border-border bg-surface-elevated px-4 py-5 shadow-subtle">
            <h3 className="text-sm font-semibold text-foreground">Design discipline</h3>
            <p className="leading-relaxed">
              Minimal, typographic, and purposeful. Every block of text earns its place and spacing is treated like a design tool.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-border bg-surface-elevated px-4 py-5 shadow-subtle">
            <h3 className="text-sm font-semibold text-foreground">Technical clarity</h3>
            <p className="leading-relaxed">
              Modern frameworks, predictable state, and light dependencies keep everything performant and maintenance-friendly.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-border bg-surface-elevated px-4 py-5 shadow-subtle">
            <h3 className="text-sm font-semibold text-foreground">Inclusive defaults</h3>
            <p className="leading-relaxed">
              Semantic structure, keyboard-first navigation, and contrast-aware palettes respect accessibility from the start.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-border bg-surface-elevated px-4 py-5 shadow-subtle">
            <h3 className="text-sm font-semibold text-foreground">Calm interactions</h3>
            <p className="leading-relaxed">
              Micro-interactions are subtle—gentle lifts, muted color shifts, and motion that steps back when users prefer less.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
