import { PermInfo } from '@/types/permission'
import type { UserInfo } from '@/types/system'

export interface LoginParams {
  username: string
  password: string
}

export interface LoginResult {
  userInfo: UserInfo
  token: string
  permission: PermInfo
}
