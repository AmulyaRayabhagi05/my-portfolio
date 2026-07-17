import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Clock, X } from "lucide-react";
import { articles } from "@/lib/portfolio-data";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { ArticleVisual } from "./ArticleVisuals";

export function Writing() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = articles.find((a) => a.id === openId) ?? null;

  return (
    <section id="writing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            writing & research
          </div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-5xl">
            Notes from the math beneath the models —{" "}
            <span style={{ color: "var(--tan)" }}>plain English, real equations</span>.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <StaggerItem key={a.id}>
              <button
                onClick={() => setOpenId(a.id)}
                className="group h-full w-full text-left"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all group-hover:-translate-y-1 group-hover:glow-slate">
                  <div className="aspect-[16/9] overflow-hidden border-b border-border" style={{ backgroundColor: "var(--muted)" }}>
                    <ArticleVisual kind={a.visual} />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span className="font-medium" style={{ color: "var(--slate-ink)" }}>
                        Amulya Rayabhagi
                      </span>
                      <span>·</span>
                      <span>{a.date}</span>
                      <span
                        className="ml-auto inline-flex items-center gap-1 rounded-full px-2 py-0.5"
                        style={{ backgroundColor: "var(--muted)", color: "var(--tan)" }}
                      >
                        <Clock className="h-3 w-3" /> {a.read}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl leading-snug">{a.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{a.abstract}</p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <span
                        className="inline-flex items-center gap-1 text-xs font-medium"
                        style={{ color: "var(--slate-ink)" }}
                      >
                        Read article →
                      </span>
                    </div>
                  </div>
                </article>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 md:p-8"
            style={{ backgroundColor: "color-mix(in oklab, var(--olive) 55%, transparent)" }}
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
            >
              <button
                onClick={() => setOpenId(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-border bg-background p-2 hover:bg-secondary"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-[16/7] border-b border-border" style={{ backgroundColor: "var(--muted)" }}>
                <ArticleVisual kind={open.visual} />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium" style={{ color: "var(--slate-ink)" }}>
                    Amulya Rayabhagi
                  </span>
                  <span>·</span>
                  <span>{open.date}</span>
                  <span>·</span>
                  <span>{open.read}</span>
                </div>
                <div className="article-prose mt-4">
                  <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                  >
                    {open.body}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
