import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// GitHub Pages 배포를 위한 설정
// repository 이름으로 변경하세요: https://username.github.io/repository-name/
// 커스텀 도메인을 사용하면 base를 '/'로 설정하세요
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  // GitHub Pages 배포 시: base를 '/repository-name/'으로 설정
  // 커스텀 도메인 사용 시: base를 '/'로 설정
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
