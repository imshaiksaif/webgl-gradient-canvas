import glsl from "vite-plugin-glsl";

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [glsl()],
  server: {
    cors: {
      origin: ['https://webgl-project.webflow.io', 'http://localhost:3000', 'http://127.0.0.1:3000'],
      credentials: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/gradient.js'),
      name: 'gradient',
      // the proper extensions will be added
      fileName: 'gradient-lib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})