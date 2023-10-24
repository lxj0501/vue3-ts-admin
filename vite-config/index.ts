import vue from '@vitejs/plugin-vue'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { ConfigEnv, PluginOption, loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import colorVariables from './plugins/colorVariables'
import { createHtmlPlugin } from 'vite-plugin-html'

const getViteEnv = (mode: string, target: string) => {
  return loadEnv(mode, process.cwd())[target]
}

export const setupPlugins = (config: ConfigEnv): PluginOption[] => {
  const isBuild = config.command === 'build'
  const plugins: PluginOption[] = [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()]
    }),
    viteMockServe({
      ignore: /^_/,
      mockPath: 'mock',
      localEnabled: !isBuild,
      prodEnabled: isBuild,
      injectCode: `
          import { setupProdMockServer } from '../mock/_createProductionServer';
          setupProdMockServer();
        `
    }),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_APP_TITLE: getViteEnv(config.mode, 'VITE_APP_TITLE')
        }
      }
    }),
    colorVariables()
  ]

  return plugins
}
