import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //Configuración del proxy para desarrollo y evitar problemas de CORS al llamar al backend
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  // URL de tu backend Python
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
