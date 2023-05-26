export function getAppEnvConfig() {
  const envConfig = import.meta.env
  envConfig.VITE_USE_MOCK = envConfig.VITE_USE_MOCK === 'true'
  return envConfig as unknown as GlobalEnvConfig
}
