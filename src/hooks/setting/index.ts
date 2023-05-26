import { getAppEnvConfig } from '@/utils/env'

export const useGlobalSetting = () => {
  const { VITE_APP_TITLE } = getAppEnvConfig()
  return {
    title: VITE_APP_TITLE
  }
}
