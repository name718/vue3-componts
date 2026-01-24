import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import dts from 'vite-plugin-dts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  resolve: {
    alias: {
      '@nova-ui/components': resolve(__dirname, '../packages/components'),
      '@nova-ui/utils': resolve(__dirname, '../packages/utils')
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(),
    dts({
      tsconfigPath: resolve(__dirname, '../tsconfig.build.json'),
      outDir: resolve(__dirname, '../packages/components/dist/types'),
      entryRoot: resolve(__dirname, '../packages/components'),
      cleanVueFileName: true,
      staticImport: true,
      rollupTypes: false
    })
  ],
  build: {
    outDir: resolve(__dirname, '../packages/components/dist'),
    lib: {
      entry: resolve(__dirname, '../packages/components/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: ['vue', /^@nova-ui\/utils/, 'async-validator', 'dayjs'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'index.css'
          }
          return assetInfo.name as string
        }
      }
    },
    sourcemap: true,
    minify: false
  }
})
