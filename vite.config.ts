import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), babel(), eslint()],
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      assets: '/src/assets',
      constants: '/src/constants',
      pages: '/src/pages',
      styles: '/src/styles',
      utils: '/src/utils',
      redux: '/src/redux',
    },
  },
});
