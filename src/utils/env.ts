export function getAppEnvConfig() {
  const envConfig = import.meta.env
  return {
    ...envConfig,
    VITE_USE_MOCK: envConfig.VITE_USE_MOCK === 'true'
  } as GlobalEnvConfig
}

export const isDev = () => import.meta.env.DEV

export const idProd = () => import.meta.env.PROD
