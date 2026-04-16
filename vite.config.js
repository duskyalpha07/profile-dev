import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirige cualquier petición que empiece con /api
      '/api': {
        target: 'http://localhost:3000', // La URL de tu servidor local de Node/Vercel dev
        changeOrigin: true,
        secure: false,
      },
    },
  },
})