import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        dir: 'dist',
        entryFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]',
        chunkFileNames: '[name].[hash].js',
        format: 'es',
        exports: 'named',
      },
      plugins: [],
      external: [],
    },
  },
});
