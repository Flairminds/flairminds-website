import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React and related packages
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Split icon libraries (often large)
          'vendor-icons': ['react-icons'],
          // Split UI libraries
          'vendor-ui': ['swiper', 'framer-motion'],
        }
      }
    },
    // Increase warning limit if needed (optional)
    chunkSizeWarningLimit: 600
  }
})
