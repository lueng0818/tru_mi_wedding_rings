import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 載入環境變數
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      svgr(),
      tailwindcss(),
    ],
    server: {
      host: true, // 讓 Zeabur 可以監聽
    },
    build: {
      outDir: 'dist',
    },
    // ✅ 修正點：確保 define 是在 return { ... } 的大括號裡面，且前面有逗號
    define: {
      'process.env': env
    }
  }
})