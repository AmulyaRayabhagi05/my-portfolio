import { skills, certifications } from "@/lib/portfolio-data";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { Award, BadgeCheck, GraduationCap } from "lucide-react";

const certIcons = [Award, BadgeCheck, GraduationCap];

export function Skills() {
  return (
    <section id="skills" className="py-24" style={{ backgroundColor: "var(--sand)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            skills & certifications
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-5xl">
            The stack behind the work.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-8">
          {skills.map((group) => (
            <Reveal key={group.group}>
              <div className="rounded-3xl border border-border bg-card p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl">{group.group}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {group.items.length} tools
                  </span>
                </div>
                <Stagger className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <StaggerItem key={item}>
                      <span
                        className="inline-flex items-center rounded-full border px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5"
                        style={{
                          backgroundColor: "var(--muted)",
                          borderColor: "var(--border)",
                        }}
                      >
                        <span
                          className="mr-2 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: "var(--tan)" }}
                        />
                        {item}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10">
            <h3 className="font-display text-2xl">Certifications & Honors</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {certifications.map((c, i) => {
                const Icon = certIcons[i] ?? Award;
                return (
                  <div
                    key={c.name}
                    className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:glow-tan"
                  >
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-50"
                      style={{ backgroundColor: "var(--tan)" }}
                    />
                    <div
                      className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "var(--tan)", color: "var(--cream)" }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="relative mt-4 font-display text-lg leading-snug">{c.name}</div>
                    <div className="relative mt-1 text-xs text-muted-foreground">
                      {c.issuer} · {c.year}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
