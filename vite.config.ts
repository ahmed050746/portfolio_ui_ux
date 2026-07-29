import { defineConfig } from 'vite';

// Plain HTML/CSS/JS — no React, no frameworks.
// Vite is only used as a dev server / static file server.
export default defineConfig({
  plugins: [],
  server: {
    fs: {
      allow: ['.'],
    },
  },
});
