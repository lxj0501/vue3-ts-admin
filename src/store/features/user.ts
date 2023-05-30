import { API_LOGIN } from '@/api/system/user'
import { PageEnum } from '@/enums/pageEnum'
import { router } from '@/router'
import { getToken, setToken } from '@/utils/auth'
import { isString } from '@/utils/is'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

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
    setToken(token: string) {
      this.token = token
      setToken(token)
    },
    async login(loginParams: LoginParams) {
      try {
        const { token, userInfo } = await API_LOGIN(loginParams)
        this.setToken(token)
        this.userInfo = userInfo
        const route = useRoute()
        console.log(route)
        const redirect = router.currentRoute.value.query.redirect as any
        await router.replace(isString(redirect) ? redirect : PageEnum.HOME)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})
