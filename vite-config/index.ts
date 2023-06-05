import vue from '@vitejs/plugin-vue'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { ConfigEnv, PluginOption } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import colorVariables from './plugins/colorVariables'

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
    colorVariables()
  ]

  return plugins
}
