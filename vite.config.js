import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/MinecraftAPI/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mcdata.nalo.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
