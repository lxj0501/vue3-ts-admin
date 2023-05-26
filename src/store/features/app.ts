import { defineStore } from "pinia";

interface AppState {
  menuSetting: MenuSetting;
}

export const useAppStore = defineStore("app", {
  state: (): AppState => ({
    menuSetting: { isCollapse: false },
  }),

  getters: {
    getMenuSetting(state): MenuSetting {
      return state.menuSetting;
    },
  },
  actions: {
    setMenuSetting(menuSetting: MenuSetting) {
      this.menuSetting = menuSetting;
    },
  },
});
