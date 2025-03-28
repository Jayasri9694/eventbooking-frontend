import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',  // Use 'localhost' instead of an empty string or IP
    port: 5173,         // Ensure this port is not blocked
  }
});
