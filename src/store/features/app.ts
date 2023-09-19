import projectSetting from '@/settings/projectSetting'
import { getAppEnvConfig } from '@/utils/env'
import { defineStore } from 'pinia'
import store from '..'
import { getTheme, toggleTheme } from '@/utils/theme'
import type { GlobalEnvConfig, MenuSetting } from '@/types/config'
import type { ProjectSetting } from '@/types/setting'
import type { ThemeType } from '@/types/system'

interface AppState {
  projectSetting: ProjectSetting
  appEnvConfig: GlobalEnvConfig
  menuSetting: MenuSetting
  theme: ThemeType
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    projectSetting,
    appEnvConfig: getAppEnvConfig(),
    menuSetting: { isCollapse: false },
    theme: getTheme()
  }),

  getters: {
    getMenuSetting(state): MenuSetting {
      return state.menuSetting
    }
  },
  actions: {
    setMenuSetting(menuSetting: MenuSetting) {
      this.menuSetting = menuSetting
    },
    setTheme(value: boolean) {
      this.theme = value ? 'light' : 'dark'
      toggleTheme(this.theme)
    }
  }
})

export const useAppStoreOut = () => useAppStore(store)
