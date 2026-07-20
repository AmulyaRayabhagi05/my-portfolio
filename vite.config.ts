import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Keep your existing entry configuration so the local dev server runs smoothly
    server: { entry: "server" },
  },
  // 1. FORCE NITRO INTO STATIC GENERATOR MODE:
  nitro: {
    preset: "static", // Completely replaces the SSR server runtime with a static export
    prerender: {
      routes: ["/"], // Starts at your home route and crawls your entire portfolio statically
    }
  },
  // 2. MAP THE ASSETS TO YOUR REPOSITORY SUBFOLDER:
  vite: {
    base: "/my-portfolio/", // Prevents broken links when hosted as a secondary GitHub project
  }
});