import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 追加

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), // 追加
  tailwindcss(), cloudflare()],
})