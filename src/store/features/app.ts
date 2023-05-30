import projectSetting from '@/settings/projectSetting'
import { getAppEnvConfig } from '@/utils/env'
import { defineStore } from 'pinia'
import store from '..'

interface AppState {
  projectSetting: ProjectSetting
  appEnvConfig: GlobalEnvConfig
  menuSetting: MenuSetting
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    projectSetting,
    appEnvConfig: getAppEnvConfig(),
    menuSetting: { isCollapse: false }
  }),

  getters: {
    getMenuSetting(state): MenuSetting {
      return state.menuSetting
    }
  },
  actions: {
    setMenuSetting(menuSetting: MenuSetting) {
      this.menuSetting = menuSetting
    }
  }
})

export const useAppStoreOut = () => useAppStore(store)
