// vite.config.ts (最終修正：使用 ESM 語法，解決 Dynamic require 錯誤)

import { defineConfig, loadEnv } from 'vite'
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  // 使用 path.resolve(__dirname, ...) 來確保絕對路徑
  const rootDir = path.resolve(__dirname);
  const clientDir = path.resolve(rootDir, "client");

  // loadEnv 只需要知道在哪個目錄下尋找 .env 檔案
  const env = loadEnv(mode, clientDir, "");

  return {
    // 專案根目錄為 client
    root: clientDir,

    // 設定 base URL 供 gh-pages 使用
    base: process.env.NODE_ENV === "production" ? "/tru_mi_wedding_rings/" : "/", 

    plugins: [
      react(),
      svgr(),
      tailwindcss(),
    ],
    server: {
      host: true, // 讓 Zeabur 或 Docker 環境可以正確監聽
    }

    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },

    envDir: clientDir,

    resolve: {
      alias: {
        // 確保 @ 別名指向 client/src
        "@": path.resolve(clientDir, "src"),
        "@shared": path.resolve(rootDir, "shared"),
        "@assets": path.resolve(rootDir, "attached_assets"),
      },
    },

    build: {
      /outDir: 'dist',
    },

    server: {
      open: true,
      port: 5000,
    },
  };
});