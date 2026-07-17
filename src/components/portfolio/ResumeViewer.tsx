import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Download, Printer, ZoomIn, ZoomOut, FileText } from "lucide-react";
import { tracks, type Track } from "@/lib/portfolio-data";
import resumeUrl from "@/assets/resume.pdf";
import { Reveal } from "./Reveal";

export function ResumeViewer() {
  const [track, setTrack] = useState<Track>("swe");
  const [zoom, setZoom] = useState(1);
  const t = tracks[track];

  const openPdf = () => window.open(resumeUrl, "_blank");
  const printPdf = () => window.open(resumeUrl, "_blank")?.print();

  return (
    <section id="resume" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            resume
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-5xl">
            Pick the track that matches the role you're{" "}
            <span style={{ color: "var(--slate-ink)" }}>hiring for</span>.
          </h2>
        </Reveal>

        {/* Track toggle */}
        <Reveal delay={0.1}>
          <div className="mt-8 inline-flex rounded-full border border-border bg-card p-1">
            {(Object.keys(tracks) as Track[]).map((key) => (
              <button
                key={key}
                onClick={() => setTrack(key)}
                className="relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
                style={{
                  color: track === key ? "var(--cream)" : "var(--foreground)",
                }}
              >
                {track === key && (
                  <motion.span
                    layoutId="track-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: key === "cyber" ? "var(--olive)" : "var(--slate-ink)",
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative">
                  {tracks[key].icon} {tracks[key].label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* PDF preview */}
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  Amulya_Rayabhagi_Resume.pdf
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setZoom((z) => Math.max(0.6, +(z - 0.1).toFixed(2)))}
                    className="rounded-md p-1.5 hover:bg-secondary"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center text-xs font-mono text-muted-foreground">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={() => setZoom((z) => Math.min(1.4, +(z + 0.1).toFixed(2)))}
                    className="rounded-md p-1.5 hover:bg-secondary"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <button
                    onClick={printPdf}
                    className="ml-2 rounded-md p-1.5 hover:bg-secondary"
                    aria-label="Print"
                  >
                    <Printer className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div
                className="max-h-[720px] overflow-auto p-6"
                style={{ backgroundColor: "var(--muted)" }}
              >
                <motion.div
                  animate={{ scale: zoom }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  style={{ transformOrigin: "top center" }}
                  className="mx-auto max-w-[680px] rounded-lg bg-white p-10 shadow-xl"
                >
                  <ResumeDocument track={track} />
                </motion.div>
              </div>
              <div className="flex items-center justify-between border-t border-border p-4">
                <div className="text-xs text-muted-foreground">
                  Rendered preview · {t.label} track
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={openPdf}
                    className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium hover:bg-secondary"
                  >
                    Open PDF
                  </button>
                  <a
                    href={resumeUrl}
                    download="Amulya_Rayabhagi_Resume.pdf"
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium"
                    style={{ backgroundColor: "var(--slate-ink)", color: "var(--cream)" }}
                  >
                    <Download className="h-3.5 w-3.5" /> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.2}>
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={track}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="rounded-3xl border border-border bg-card p-6">
                    <div className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                      Quick info
                    </div>
                    <h3 className="mt-2 font-display text-2xl">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.summary}</p>

                    <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                      <div>
                        <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">
                          Education
                        </dt>
                        <dd className="mt-1">M.S. CS · UT Dallas</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">
                          GPA
                        </dt>
                        <dd className="mt-1" style={{ color: "var(--slate-ink)" }}>
                          4.00 / 4.00
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">
                          Location
                        </dt>
                        <dd className="mt-1">Dallas, TX</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">
                          Status
                        </dt>
                        <dd className="mt-1">Open to relocation</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="rounded-3xl border border-border bg-card p-6">
                    <div className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                      Highlights
                    </div>
                    <ul className="mt-4 space-y-4">
                      {t.highlights.map((h) => (
                        <li key={h.title} className="relative pl-5">
                          <span
                            className="absolute left-0 top-1.5 h-2 w-2 rounded-full"
                            style={{ backgroundColor: "var(--tan)" }}
                          />
                          <div className="text-sm font-medium">{h.title}</div>
                          <div className="mt-0.5 text-xs text-muted-foreground">{h.body}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-border bg-card p-6">
                    <div className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                      Core skills
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {t.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border px-2.5 py-1 text-[11px]"
                          style={{ backgroundColor: "var(--muted)" }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Certifications
                    </div>
                    <ul className="mt-2 space-y-1 text-sm">
                      {t.certs.map((c) => (
                        <li key={c} className="text-foreground/80">
                          · {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ResumeDocument({ track }: { track: Track }) {
  const t = tracks[track];
  return (
    <div className="text-[11px] leading-relaxed text-neutral-800">
      <div className="border-b border-neutral-300 pb-3">
        <div className="font-display text-2xl text-neutral-900">Amulya Rayabhagi</div>
        <div className="mt-1 text-[10px] text-neutral-600">
          Dallas, TX · amulyarayabhagi@gmail.com · linkedin.com/in/amulya-rayabhagi ·
          github.com/AmulyaRayabhagi05
        </div>
        <div className="mt-1 text-[10px] font-medium" style={{ color: "#3E5974" }}>
          {t.title}
        </div>
      </div>
      <Section title="Education">
        <p><strong>The University of Texas at Dallas</strong> — Richardson, TX</p>
        <p>M.S. in Computer Science (Data Science Track) · GPA 4.00 · Expected May 2028</p>
        <p className="mt-1">B.S. in Computer Science · GPA 3.75 · Aug 2023 – May 2026</p>
        <p className="text-neutral-600">Honors: Dean's List · Collegium V Honors · Cum Laude</p>
      </Section>
      <Section title="Selected Highlights">
        <ul className="list-disc pl-4">
          {t.highlights.map((h) => (
            <li key={h.title}>
              <strong>{h.title}.</strong> {h.body}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Skills">
        <p>{t.skills.join(" · ")}</p>
      </Section>
      <Section title="Certifications">
        <p>{t.certs.join(" · ")}</p>
      </Section>
      <div className="mt-4 text-[9px] text-neutral-500">
        Full résumé available via Download Resume →
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#A07D54" }}>
        {title}
      </div>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
