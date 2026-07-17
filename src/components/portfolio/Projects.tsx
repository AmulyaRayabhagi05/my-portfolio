import { projects } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";


export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                projects
              </div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-5xl">
                Systems I've shipped, from{" "}
                <span style={{ color: "var(--tan)" }}>sensor fusion</span> to distributed{" "}
                <span style={{ color: "var(--slate-ink)" }}>RAG</span>.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
                <div className="md:pt-2">
                  <div
                    className="font-mono text-[11px] uppercase tracking-widest"
                    style={{ color: "var(--tan)" }}
                  >
                    {p.date}
                  </div>
                  <div className="mt-2 font-display text-3xl md:text-4xl">0{projects.length - i}</div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:glow-tan md:p-8">
                  <div
                    aria-hidden
                    className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
                    style={{ background: "radial-gradient(closest-side, var(--slate-ink), transparent 70%)" }}
                  />
                  <div className="relative flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl">{p.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground md:text-base">
                        {p.tagline}
                      </p>
                    </div>
                    <div
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:rotate-45"
                      style={{ backgroundColor: "var(--slate-ink)", color: "var(--cream)" }}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <ul className="relative mt-5 space-y-2.5 text-[14.5px] leading-relaxed text-foreground/85">
                    {p.bullets.map((b) => (
                      <li key={b} className="relative pl-5">
                        <span
                          className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: "var(--tan)" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-2.5 py-1 text-[11px]"
                          style={{ backgroundColor: "var(--muted)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.name} GitHub repository`}
                          className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3 text-xs font-medium transition-all hover:-translate-y-0.5 hover:bg-secondary"
                        >
                          <Github className="h-3.5 w-3.5" /> Code
                        </a>
                      )}
                      {p.external && (
                        <a
                          href={p.external}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.name} live link`}
                          className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-all hover:-translate-y-0.5"
                          style={{ backgroundColor: "var(--slate-ink)", color: "var(--cream)" }}
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Visit
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
