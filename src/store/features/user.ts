import { API_LOGIN } from '@/api/system/user'
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
    },
    async login(loginParams: LoginParams) {
      // console.log(loginParams);
      const res = await API_LOGIN(loginParams)

      console.log(res)
    }
  }
})
