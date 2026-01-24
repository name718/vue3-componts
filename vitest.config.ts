import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData',
        'play/',
        'docs/'
      ]
    },
    include: ['packages/**/__tests__/**/*.{test,spec}.{js,ts,jsx,tsx}']
  },
  resolve: {
    alias: {
      '@nova-ui/components': resolve(__dirname, 'packages/components'),
      '@nova-ui/utils': resolve(__dirname, 'packages/utils'),
      '@nova-ui/theme-chalk': resolve(__dirname, 'packages/theme-chalk')
    }
  }
})
