import { API_GET_USER_INFO, API_LOGIN, API_LOGOUT } from '@/api/system/user'
import { PageEnum } from '@/enums/pageEnum'
import { router } from '@/router'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { isString } from '@/utils/is'
import { defineStore } from 'pinia'

interface UserState {
  userInfo: Nullable<UserInfo>
  token: Nullable<string>
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: null,
    token: getToken()
  }),
  actions: {
    resetState() {
      this.userInfo = null
      this.token = null
    },
    setToken(token: string) {
      this.token = token
      setToken(token)
    },
    async login(loginParams: LoginParams) {
      try {
        const { token, userInfo } = await API_LOGIN(loginParams)
        this.setToken(token)
        this.userInfo = userInfo
        const redirect = router.currentRoute.value.query.redirect as any
        await router.replace(isString(redirect) ? redirect : PageEnum.HOME)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getUserInfoAction() {
      try {
        const userInfo = await API_GET_USER_INFO()
        this.userInfo = userInfo
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout() {
      try {
        await API_LOGOUT()
        removeToken()
        this.resetState()
        await router.replace(PageEnum.LOGIN)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})
