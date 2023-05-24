import { defineStore } from 'pinia';
import axios from 'axios';

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
    async login(_: LoginParams) {
      // console.log(loginParams);
      const res = await axios.request({ url: '/api/get' });

      console.log(res);
    },
  },
});
