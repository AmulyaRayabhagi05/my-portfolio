import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { ResumeViewer } from "@/components/portfolio/ResumeViewer";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Writing } from "@/components/portfolio/Writing";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amulya Rayabhagi — Data Science & Software Engineering" },
      {
        name: "description",
        content:
          "Portfolio of Amulya Rayabhagi — M.S. Computer Science (Data Science) at UT Dallas. Builder of intelligent systems, multi-agent AI, and scalable web platforms.",
      },
      { property: "og:title", content: "Amulya Rayabhagi — Portfolio" },
      {
        property: "og:description",
        content:
          "M.S. Computer Science @ UT Dallas · GenAI, RAG, multi-agent AI, and secure full-stack platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <ResumeViewer />
      <Writing />
      <Contact />
      <Footer />

    </main>
  );
}
