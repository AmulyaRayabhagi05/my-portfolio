import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Send, CalendarClock } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") ?? "";
    const email = form.get("email") ?? "";
    const message = form.get("message") ?? "";
    const body = encodeURIComponent(`Hi Amulya,\n\n${message}\n\n— ${name}\n(${email})`);
    window.location.href = `mailto:amulyarayabhagi@gmail.com?subject=Portfolio%20inquiry&body=${body}`;
    setSent(true);
  };

  const socials = [
    { icon: Mail, label: "amulyarayabhagi@gmail.com", href: "mailto:amulyarayabhagi@gmail.com" },
    { icon: Github, label: "github.com/AmulyaRayabhagi05", href: "https://github.com/AmulyaRayabhagi05" },
    { icon: Linkedin, label: "linkedin.com/in/amulya-rayabhagi", href: "https://www.linkedin.com/in/amulya-rayabhagi/" },
  ];

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "var(--olive)" }}>
      <div className="mx-auto max-w-7xl px-6" style={{ color: "var(--cream)" }}>
        <Reveal>
          <div className="max-w-2xl">
            <div
              className="text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}
            >
              contact
            </div>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
              Say hello — or book a chat.
            </h2>
            <p
              className="mt-4 max-w-md"
              style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}
            >
              Grab a slot on my calendar, drop a message, or reach me directly. Whether it's a
              role, a research idea, or "how would you build X" — I read every message.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-3 rounded-2xl border p-4"
                style={{
                  borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)",
                  backgroundColor: "color-mix(in oklab, var(--cream) 6%, transparent)",
                }}
              >
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--tan)", color: "var(--cream)" }}
                >
                  <CalendarClock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">15-minute chat</div>
                  <div
                    className="text-xs"
                    style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}
                  >
                    Powered by Calendly · timezone auto-detected
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border p-4 transition-all hover:-translate-y-0.5"
                    style={{
                      borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)",
                      backgroundColor: "color-mix(in oklab, var(--cream) 6%, transparent)",
                    }}
                  >
                    <span
                      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: "var(--tan)" }}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full opacity-0 blur-lg transition-opacity group-hover:opacity-80"
                        style={{ backgroundColor: "var(--slate-ink)" }}
                      />
                      <Icon className="relative h-4 w-4" style={{ color: "var(--cream)" }} />
                    </span>
                    <span className="font-mono text-sm">{label}</span>
                  </a>
                ))}
              </div>

              <form
                onSubmit={onSubmit}
                className="rounded-3xl border p-6"
                style={{
                  borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)",
                  backgroundColor: "color-mix(in oklab, var(--cream) 8%, transparent)",
                }}
              >
                <div className="grid gap-3">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                  <div>
                    <label
                      className="mb-1.5 block text-[11px] font-medium uppercase tracking-widest"
                      style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="What are you working on?"
                      className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none placeholder:opacity-50 focus:ring-2"
                      style={{
                        borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)",
                        color: "var(--cream)",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: "var(--tan)", color: "var(--cream)" }}
                  >
                    {sent ? "Opening your email…" : <>Send message <Send className="h-4 w-4" /></>}
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="overflow-hidden rounded-3xl border bg-card"
              style={{ borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)" }}
            >
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/amulyarayabhagi/new-meeting?hide_gdpr_banner=1&background_color=eeeae2&text_color=3a3a39&primary_color=3e5974"
                style={{ minWidth: "320px", height: "820px" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        className="mb-1.5 block text-[11px] font-medium uppercase tracking-widest"
        style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}
      >
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none placeholder:opacity-50"
        style={{
          borderColor: "color-mix(in oklab, var(--cream) 20%, transparent)",
          color: "var(--cream)",
        }}
      />
    </div>
  );
}
