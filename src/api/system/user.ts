import { http } from '@/utils/http'

export const API_LOGIN = (loginParams: LoginParams) => {
  return http.post<LoginResult>({
    url: '/login',
    data: loginParams
  })
}
