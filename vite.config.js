import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/profile/', // For GitHub Pages deployment
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'dist'
    }
});
