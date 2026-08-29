import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: resolve(__dirname, 'pages'),
  base: '/lunaphotoswedding/',
  publicDir: resolve(__dirname, 'public'),
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, 'docs'),
    emptyOutDir: true,
  },
});
