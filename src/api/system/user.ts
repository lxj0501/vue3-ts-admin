import { http } from '@/utils/http'
import type { LoginParams, LoginResult } from './dto/user'
import type { UserInfo } from '@/types/system'

export const API_LOGIN = (loginParams: LoginParams) => {
  return http.post<LoginResult>({
    url: '/login',
    data: loginParams
  })
}

export const API_GET_USER_INFO = () => {
  return http.get<UserInfo>({
    url: '/getUserInfo'
  })
}

export const API_LOGOUT = () => {
  return http.get({
    url: '/logout'
  })
}
