import { defineStore } from 'pinia';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token: Nullable<string>;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: null,
    token: null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    async login(loginParams: LoginParams) {
      console.log(loginParams);
    },
  },
});
