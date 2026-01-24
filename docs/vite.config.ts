import {defineConfig} from 'vite'
import path from 'path'
// import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [DefineOptions()],
    resolve: {
        alias: {
            '@mjt/components': path.resolve(__dirname, '../packages/components'),
            '@mjt/theme-chalk': path.resolve(__dirname, '../packages/theme-chalk'),
            '@mjt/utils': path.resolve(__dirname, '../packages/utils'),
        }
    }
})
