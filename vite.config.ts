import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

// https://vite.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: 'ws',
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ['**/src-tauri/**'],
    },
  },
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      headless: true,
      instances: [{ browser: 'chromium' }],
      exclude: ['coverage/**', 'dist/**', '**/node_modules/**', './src-tauri/**'],
      include: ['**/src/panels/**/*.spec.tsx'],
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'json-summary'],
      reportsDirectory: './coverage',
      reportOnFailure: true,
      all: true,
      include: ['src/panels/**/*.tsx', 'src/panels/**/*.ts'],
      exclude: [
        'src/panels/**/*.spec.tsx',
        'src/panels/**/*.test.tsx',
        'src/panels/**/*.stories.tsx',
        'src/panels/**/*.stories.ts',
        '*.js',
        '*.cjs',
      ],
    },
  },
}));
