import { experiences } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24" style={{ backgroundColor: "var(--sand)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            tech experience
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-5xl">
            Two roles.{" "}
            <span style={{ color: "var(--slate-ink)" }}>One thesis</span>: build systems people
            can trust.
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-6 md:pl-10">
          {/* vertical line */}
          <div
            className="absolute left-2 top-2 h-full w-px md:left-4"
            style={{ backgroundColor: "var(--slate-ink)", opacity: 0.4 }}
          />

          <div className="space-y-14">
            {experiences.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.08}>
                <div className="relative">
                  {/* node */}
                  <div
                    className="absolute -left-6 top-1.5 flex h-5 w-5 items-center justify-center rounded-full md:-left-10"
                    style={{
                      backgroundColor: "var(--cream)",
                      border: "2px solid var(--tan)",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "var(--tan)" }}
                    />
                  </div>

                  <div className="rounded-3xl border border-border bg-card p-7 md:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <div
                          className="text-[11px] font-mono uppercase tracking-widest"
                          style={{ color: "var(--tan)" }}
                        >
                          {e.date}
                        </div>
                        <h3 className="mt-1 font-display text-2xl">{e.role}</h3>
                        <div className="text-sm text-muted-foreground">
                          {e.org} · {e.location}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {e.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full px-2.5 py-1 text-[11px]"
                            style={{
                              backgroundColor: "var(--muted)",
                              color: "var(--slate-ink)",
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="mt-5 space-y-2.5 text-[14.5px] leading-relaxed text-foreground/85">
                      {e.bullets.map((b) => (
                        <li key={b} className="relative pl-5">
                          <span
                            className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: "var(--slate-ink)" }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
