import { http } from '@/utils/http'
import type { LoginParams, LoginResult } from './dto/user'
import type { UserInfo } from '@/types/system'
import { PermInfo } from '@/types/permission'
import { ErrorMsgType } from '@/types/http'

export const API_LOGIN = (
  loginParams: LoginParams,
  errorMsgType: ErrorMsgType
) => {
  return http.post<LoginResult>(
    {
      url: '/login',
      data: loginParams
    },
    {
      errorMsgType
    }
  )
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

export const API_GET_USER_PERM = () => {
  return http.get<PermInfo>({
    url: '/permission'
  })
}
