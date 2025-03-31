import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    host: 'localhost',  // Use 'localhost' instead of an empty string or IP
    port: 5173,  
    strictPort: true,       // Ensure this port is not blocked
  }
});
