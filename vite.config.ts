import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Keep your existing entry configuration
    server: { entry: "server" },
  },
  // Add these overrides safely down to Vite and Nitro:
  vite: {
    base: "/my-portfolio/", // Matches your repository name exactly
  },
  nitro: {
    preset: "static", // Forces Nitro to build pure static assets
    prerender: {
      routes: ["/"],
    }
  }
});