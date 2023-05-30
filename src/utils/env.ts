import { useGlobalSetting } from '@/hooks/setting'

export function getAppEnvConfig() {
  const envConfig = import.meta.env
  return {
    ...envConfig,
    VITE_USE_MOCK: envConfig.VITE_USE_MOCK === 'true'
  } as GlobalEnvConfig
}

export function getStoragePrefix() {
  const { title, MODE } = useGlobalSetting()
  return `${title.replace(/\s/, '_')}__${MODE}__`
}

export const isDev = () => import.meta.env.DEV

export const idProd = () => import.meta.env.PROD
