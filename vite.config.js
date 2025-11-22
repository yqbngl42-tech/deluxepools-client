import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Fast Refresh optimization
      fastRefresh: true,
      // Babel optimization - ללא minified כדי לשמור על עברית!
      babel: {
        compact: false,
        minified: false
      }
    })
  ],
  server: {
    port: 5173,
    open: true,
    host: true,
    // Faster HMR
    hmr: {
      overlay: false
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Faster minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2
      },
      format: {
        comments: false,
        // חשוב! שומר על Unicode characters
        ascii_only: false,
        ecma: 2020
      }
    },
    rollupOptions: {
      output: {
        // Optimal code splitting
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'helmet': ['react-helmet-async']
        },
        // Optimize chunk names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimize bundle size
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
    // Inline small assets
    assetsInlineLimit: 4096,
    // Enable CSS minification
    cssMinify: true,
    // Faster builds
    reportCompressedSize: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
    // Faster cold start
    force: true
  },
  // Preview server optimization
  preview: {
    port: 4173,
    host: true
  }
});