import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Force a single React instance so motion/lenis hooks resolve correctly
  // (prevents "Invalid hook call" from duplicate pre-bundled React).
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-dom/client', 'motion/react', 'lenis/react'],
  },
})
