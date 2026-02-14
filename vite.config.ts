import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ViteImageOptimizer({
      png: {
        quality: 75,
        compressionLevel: 9,
      },
      jpeg: {
        quality: 75,
      },
      webp: {
        lossless: false,
        quality: 75,
        effort: 6,
      },
      cache: true,
      cacheLocation: 'node_modules/.cache/vite-plugin-image-optimizer',
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: false,
    cssMinify: true,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        // Chunk splitting for better caching
        manualChunks: (id) => {
          if (id.includes('react-dom')) {
            return 'react-dom';
          }
          if (id.includes('node_modules/react/')) {
            return 'react';
          }
          if (id.includes('react-router')) {
            return 'router';
          }
          if (id.includes('framer-motion')) {
            return 'motion';
          }
          if (id.includes('@radix-ui')) {
            return 'radix';
          }
          if (id.includes('recharts') || id.includes('d3-')) {
            return 'charts';
          }
          if (id.includes('@tanstack')) {
            return 'query';
          }
          if (id.includes('@supabase')) {
            return 'supabase';
          }
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  css: {
    devSourcemap: true,
  },
  // Enable better compression
  esbuild: {
    legalComments: 'none',
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
}));
