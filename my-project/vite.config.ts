import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',           // ✅ ensures all assets use root-relative paths
  build: {
    outDir: 'dist',    // ✅ Vercel serves files from 'dist'
  },
});
