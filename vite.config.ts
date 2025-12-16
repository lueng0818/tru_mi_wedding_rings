import path from "path"
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    root: './client',
    plugins: [
      react(),
      svgr(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client/src"),
      },
    },
    server: {
      host: true,
    },
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
    define: {
      'process.env': env
    }
  }
})
