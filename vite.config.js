import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {config} from "dotenv";

config();

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    proxy: {
      '/registration-api/': {
        target: 'http://registration-service.default:8080/',
        changeOrigin: true,
        secure: false
      },
      '/production-api/': {
        target: 'http://production-service.default:8081/',
        changeOrigin: true,
        secure: false
      },
    }
  }
})
