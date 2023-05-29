export function getAppEnvConfig() {
  const envConfig = import.meta.env
  return {
    ...envConfig,
    VITE_USE_MOCK: envConfig.VITE_USE_MOCK === 'true'
  } as GlobalEnvConfig
}

export function getStoragePrefix() {
  const { VITE_APP_TITLE, MODE } = getAppEnvConfig()
  return `${VITE_APP_TITLE.replace(/\s/, '_')}__${MODE}__`
}

export const isDev = () => import.meta.env.DEV

export const idProd = () => import.meta.env.PROD
