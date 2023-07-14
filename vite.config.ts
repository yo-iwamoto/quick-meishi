/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import KumaUI from '@kuma-ui/vite';

export default defineConfig({
  plugins: [react(), KumaUI()],
  server: {
    open: true,
  },
  test: {
    exclude: ['node_modules', './src/__tests__'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
  },
});
