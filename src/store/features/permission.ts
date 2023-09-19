import type { MenuItem } from '@/types/permission'
import { defineStore } from 'pinia'

interface PermissionState {
  menuList: MenuItem[]
}

export const usePermissionStore = defineStore('permission', {
  state: (): PermissionState => ({
    menuList: []
  }),
  actions: {}
})
