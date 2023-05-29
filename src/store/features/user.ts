import { API_LOGIN } from '@/api/system/user'
import { setToken } from '@/utils/auth'
import { defineStore } from 'pinia'

interface UserState {
  userInfo: Nullable<UserInfo>
  token: Nullable<string>
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: null,
    token: null
  }),
  actions: {
    setToken(token: string) {
      this.token = token
      setToken(token)
    },
    async login(loginParams: LoginParams) {
      try {
        const { token } = await API_LOGIN(loginParams)
        this.setToken(token)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})
