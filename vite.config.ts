import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// 🔴 設定 GitHub Pages 的 Repo 名稱
const REPO_NAME = "/tru_mi_wedding_rings/";

export default defineConfig({
  base: "/tru_mi_wedding_rings/", // 👈 請新增這一行，必須前後都有斜線
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      // 👇 修改這一行！指向新的位置 client/src/assets
      "@assets": path.resolve(import.meta.dirname, "client", "src", "assets"),
    },
  },
  
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});