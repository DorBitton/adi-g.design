import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // Base path for GitHub Pages
  // If your repo is "username.github.io", use base: '/'
  // Otherwise, use base: '/repo-name/' (replace repo-name with your actual repo name)
  base: process.env.NODE_ENV === 'production' ? '/Adi-Site/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
