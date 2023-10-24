import type { LoginParams } from '@/api/system/dto/user'
import {
  API_GET_USER_INFO,
  API_GET_USER_PERM,
  API_LOGIN,
  API_LOGOUT
} from '@/api/system/user'
import { PageEnum } from '@/enums/pageEnum'
import { router } from '@/router'
import type { Nullable } from '@/types/global'
import type { UserInfo } from '@/types/system'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { isString } from '@/utils/is'
import { defineStore } from 'pinia'
import { MenuPerm } from '@/types/permission'
import { generateDynamicRoutes } from '@/utils/router'
import { RouteRecordRaw } from 'vue-router'
import { ErrorMsgType } from '@/types/http'
import { md5 } from '@/utils/crypto'

interface UserState {
  userInfo: Nullable<UserInfo>
  token: Nullable<string>
  menuList: RouteRecordRaw[]
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: null,
    menuList: [],
    token: getToken()
  }),
  actions: {
    resetState() {
      this.userInfo = null
      this.token = null
    },
    setToken(token: string | undefined) {
      this.token = token
      token ? setToken(token) : removeToken()
    },
    async login(loginParams: LoginParams, errorMsgType: ErrorMsgType) {
      try {
        loginParams.password = md5(loginParams.password, '12345')
        const { token, userInfo, permission } = await API_LOGIN(
          loginParams,
          errorMsgType
        )
        this.setToken(token)
        this.userInfo = userInfo
        this.setMenuList(permission.menuList)

        const redirect = router.currentRoute.value.query.redirect as any
        await router.replace(isString(redirect) ? redirect : PageEnum.HOME)
      } catch (error) {
        console.log(error)
        return Promise.reject(error)
      }
    },
    setMenuList(menuList: MenuPerm[]) {
      this.menuList = generateDynamicRoutes(menuList)
    },
    async getUserInfoAction() {
      if (!this.userInfo) {
        try {
          const [userInfo, permInfo] = await Promise.all([
            API_GET_USER_INFO(),
            API_GET_USER_PERM()
          ])
          this.userInfo = userInfo
          this.setMenuList(permInfo.menuList)
        } catch (error) {
          return void 0
        }
      }
    },
    async logout() {
      try {
        await API_LOGOUT()
        this.setToken(undefined)
        this.resetState()
        await router.replace(PageEnum.LOGIN)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})
