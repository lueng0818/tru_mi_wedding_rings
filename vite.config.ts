import path from "path" // 👈 新增：引入路徑處理模組
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      svgr(),
      tailwindcss(),
    ],
    // 👇 新增這個區塊：告訴 Vite "@" 代表什麼
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client/src"),
      },
    },
    server: {
      host: true,
    },
    build: {
      outDir: 'dist',
    },
    define: {
      'process.env': env
    }
  }
})