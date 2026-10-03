import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset URLs so the build works at "/" and sub-paths (e.g. GitHub Pages).
  // Hosts that serve from root are unaffected. Override with --base=/repo-name/ if needed.
  base: './',
  plugins: [react()],
})
