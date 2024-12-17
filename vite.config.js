import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './src/main.jsx',  // Ton fichier principal
      output: {
        dir: 'dist',  // Répertoire de sortie
        entryFileNames: 'bundle.js',  // Nom du fichier JS généré
        format: 'es',  // Format du fichier JS (ES Module)
      },
    },
  },
});
