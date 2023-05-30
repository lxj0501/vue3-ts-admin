import { getAppEnvConfig } from '@/utils/env'
import projectSetting from '@/settings/projectSetting'

export const useGlobalSetting = () => {
  return {
    ...projectSetting,
    ...getAppEnvConfig()
  }
}
