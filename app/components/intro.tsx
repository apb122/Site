export function Intro() {
  return (
    <section
      id="intro"
      className="mx-auto flex min-h-[60vh] max-w-prose flex-col items-center justify-center gap-6 px-5 py-20 text-center"
      aria-labelledby="intro-heading"
    >
      <p className="text-xs uppercase tracking-[0.24em] text-muted">Personal desk</p>
      <h1
        id="intro-heading"
        className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]"
      >
        A calm launchpad for the tools I keep in Google Cloud.
      </h1>
      <p className="max-w-[48ch] text-base leading-relaxed text-muted sm:text-lg">
        No pitches, no marketing. Just a clean shelf of shortcuts so I can open the right app quickly from any device.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
        <span className="rounded-full border border-border px-3 py-1">Keyboard friendly</span>
        <span className="rounded-full border border-border px-3 py-1">Quiet palette</span>
        <span className="rounded-full border border-border px-3 py-1">Always responsive</span>
      </div>
    </section>
  );
}
