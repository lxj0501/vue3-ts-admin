import logo from '@/assets/images/logo.svg'
import avatar from '@/assets/images/default-avatar.png'

const projectSetting: ProjectSetting = {
  appSetting: {
    title: 'Vue3 Admin',
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
