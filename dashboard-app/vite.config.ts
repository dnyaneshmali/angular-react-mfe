import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: './src/remote-entry.ts',
      name: 'dashboard',
      formats: ['es'],
      fileName: () => `remoteEntry.js`,
    },
    // We bundle react to avoid external dependency issues in this demo
  },
  server: {
    port: 4202,
    cors: true,
  },
  preview: {
    port: 4202,
    cors: true,
  },
});
