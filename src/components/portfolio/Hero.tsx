import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import amulyaImg from "@/assets/amulya.png";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 grain">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-20 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--slate-ink), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-16 h-[440px] w-[440px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--tan), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--tan)" }} />
            MS Computer Science · Data Science Track · UT Dallas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span style={{ color: "var(--slate-ink)" }}>Amulya</span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-2 w-full rounded-full opacity-60"
                style={{ backgroundColor: "var(--tan)" }}
              />
            </span>{" "}
            <span style={{ color: "var(--olive)" }}>Rayabhagi.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Master's Student in Computer Science (Data Science Track) @ UT Dallas — builder of
            intelligent systems, multi-agent AI, and scalable web platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl space-y-4 text-[15px] leading-relaxed text-foreground/80"
          >
            <p>
              I'm pursuing my{" "}
              <strong className="text-foreground">M.S. in Computer Science</strong> on the Data
              Science track with a{" "}
              <strong style={{ color: "var(--slate-ink)" }}>4.00 GPA</strong>, after finishing my
              B.S. with Collegium V Honors and Cum Laude.
            </p>
            <p>
              I build <strong className="text-foreground">production-grade full-stack systems</strong>{" "}
              — FastAPI + React platforms that cut claim processing 25%, LangChain RAG pipelines
              streaming 500+ tokens/sec, and Nuxt.js PWAs that reduced DB overhead by 65%. What I
              care about most is the{" "}
              <em style={{ color: "var(--tan)" }}>architecture underneath</em> — multi-agent AI
              orchestration at 95% precision and IAM that protects 40,000+ users.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all hover:translate-y-[-1px]"
              style={{ backgroundColor: "var(--slate-ink)", color: "var(--cream)" }}
            >
              See selected work <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4"
          >
            {[
              { k: "4.00", v: "MS GPA" },
              { k: "500+", v: "tokens/sec RAG" },
              { k: "40k+", v: "users secured" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
                <div className="font-display text-2xl" style={{ color: "var(--slate-ink)" }}>
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl"
            style={{ background: "linear-gradient(140deg, var(--tan), var(--slate-ink))" }}
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
            <img
              src={amulyaImg}
              alt="Amulya Rayabhagi"
              className="aspect-[4/5] w-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in oklab, var(--olive) 90%, transparent), transparent)",
              }}
            >
              <div className="flex items-center justify-between text-[11px] font-medium tracking-widest uppercase" style={{ color: "var(--cream)" }}>
                <span>Dallas, TX</span>
                <span>· open to work ·</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
