import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 배포를 위한 설정
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포 시: base를 '/repository-name/'으로 설정
  base: process.env.VITE_BASE_URL || '/Yeongyeol3/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});