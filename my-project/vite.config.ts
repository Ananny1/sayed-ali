import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite'; // Tailwind plugin for Vite

export default defineConfig({
  plugins: [
    react(),
    tailwind(), // ✅ Add Tailwind plugin
  ],
  base: '/',           // ensures all assets use root-relative paths
  build: {
    outDir: 'dist',    // Vercel serves files from 'dist'
  },
});
