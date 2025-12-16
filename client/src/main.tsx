import { createRoot } from "react-dom/client";
import { Router } from "wouter"; // 1. 引入 Router
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // 2. 設定 Base Path，告訴網站它住在子資料夾裡
  <Router base="/tru_mi_wedding_rings">
    <App />
  </Router>
);