import logo from '@/assets/images/logo.svg'
import avatar from '@/assets/images/default-avatar.png'
import { getAppEnvConfig } from '@/utils/env'

const projectSetting: ProjectSetting = {
  appSetting: {
    title: getAppEnvConfig().VITE_APP_TITLE,
    logo,
    github: 'https://github.com/Luff-JM/vue3-ts-admin'
  },
  userSetting: {
    defaultAvatar: avatar
  },
  storageSetting: {
    storage: sessionStorage,
    defaultCacheTime: 60 * 60 * 24 * 7
  }
}

export default projectSetting
