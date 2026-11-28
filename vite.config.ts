import path from 'path';
import type { IncomingMessage, ServerResponse } from 'http';
import { defineConfig, type Connect, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const ASSET_EXT_RE =
  /\.(?:js|mjs|cjs|ts|tsx|jsx|css|json|map|wasm|ico|png|jpe?g|webp|gif|svg|woff2?|ttf|eot)$/i;

function missingAsset404Plugin(): Plugin {
  const createGuard = (): Connect.NextHandleFunction => (req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
    const pathname = (req.url || '').split('?')[0];
    if (ASSET_EXT_RE.test(pathname)) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Not Found');
      return;
    }
    next();
  };

  const attachBeforeFallback = (stack: Connect.Server['stack']) => {
    const idx = stack.findIndex(
      (layer) => typeof layer.handle === 'function' && layer.handle.name === 'viteHtmlFallbackMiddleware'
    );
    if (idx >= 0) {
      stack.splice(idx, 0, { route: '', handle: createGuard() });
    }
  };

  return {
    name: 'missing-asset-404',
    configureServer(server) {
      return () => {
        attachBeforeFallback(server.middlewares.stack);
      };
    },
    configurePreviewServer(server) {
      return () => {
        attachBeforeFallback(server.middlewares.stack);
      };
    },
  };
}

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? './' : '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      outDir: 'release',
      emptyOutDir: true,
      copyPublicDir: false,
      assetsDir: 'assets',
    },
    plugins: [react(), tailwindcss(), missingAsset404Plugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
