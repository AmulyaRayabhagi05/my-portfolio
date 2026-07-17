export function Footer() {
  return (
    <footer
      className="border-t border-border py-8"
      style={{ backgroundColor: "var(--olive)", color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs sm:flex-row">
        <div>© {new Date().getFullYear()} Amulya Rayabhagi. Built with care.</div>
        <div className="font-mono">Dallas, TX · always learning</div>
      </div>
    </footer>
  );
}
