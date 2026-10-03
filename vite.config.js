import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Root absolute base: Vercel/Netlify serve from "/".
  // For GitHub Pages project pages, rebuild with --base=/bytespace-new/
  base: '/',
  plugins: [react()],
})
