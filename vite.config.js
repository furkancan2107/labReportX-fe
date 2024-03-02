import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://labreport-furkancan2107-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com',
     
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
