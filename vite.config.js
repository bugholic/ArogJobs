import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      '/api':{
        target: "./jobs.json",
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/,'')
      }
    }
  },
   build: {
    rollupOptions: {
      external: [
        "react", // ignore react stuff
        "react-dom",
      ],
    },
  },
})
