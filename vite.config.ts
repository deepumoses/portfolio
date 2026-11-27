import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, '.', '');
  const apiKey =
    env.GEMINI_API_KEY && env.GEMINI_API_KEY !== 'PLACEHOLDER_API_KEY'
      ? env.GEMINI_API_KEY
      : env.API_KEY || '';

  return {
    base: command === 'build' ? './' : '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      outDir: 'build',
      emptyOutDir: true,
      copyPublicDir: false,
      assetsDir: 'assets',
    },
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.API_KEY': JSON.stringify(apiKey),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
