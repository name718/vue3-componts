import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts', 'with-install.ts', 'create.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  external: ['vue']
})
