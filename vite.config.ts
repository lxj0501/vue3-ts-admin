import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { setupPlugins } from './vite-config'

const root = process.cwd()
const pathResolve = (pathname: string) => resolve(root, '.', pathname)

// https://vitejs.dev/config/
export default defineConfig((config) => {
  return {
    plugins: setupPlugins(config),
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/'
        }
      ]
    },
    server: {
      watch: {
        ignored: ['**/*.g.ts']
      }
    }
  }
})
