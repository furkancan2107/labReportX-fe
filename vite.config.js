import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5173,
    strictPort : true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5173",
    proxy: {
      '/api' : 'https://labreport-furkancan2107-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com'
    }
  }
})
