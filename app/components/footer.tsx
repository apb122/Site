export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 py-12">
      <div className="mx-auto max-w-shell text-center text-xs uppercase tracking-[0.2em] text-muted">
        © {year} Personal Console — Built to stay useful, not promotional.
      </div>
    </footer>
  );
}
