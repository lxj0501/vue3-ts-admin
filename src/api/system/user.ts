import { http } from '@/utils/http'

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
