import { createErrorResult, createSuccessResult } from '../_util'
import { MockMethod } from 'vite-plugin-mock'

const fakeUserList = [
  {
    username: 'admin',
    avatar: '',
    password: 'admin',
    token: 'token1',
    role: 'admin',
    permission: {
      system: { space: 0, code: 0b0101 }
    }
  }
]

export default [
  {
    url: '/mock-api/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const user = fakeUserList.find(
        (item) => item.username === username && item.password === password
      )
      if (!user) {
        return createErrorResult('账号或密码错误！')
      }
      const { username: _username, avatar, token, permission } = user
      return createSuccessResult({
        userInfo: { username: _username, avatar, permission },
        token
      })
    }
  },
  {
    url: '/mock-api/getUserInfo',
    method: 'get',
    response: ({ headers }) => {
      const user = fakeUserList.find(
        (item) => item.token === headers.authorization
      )
      if (!user) {
        return createErrorResult('无效 token！')
      }
      const { username, avatar, permission } = user
      return createSuccessResult({
        username,
        avatar,
        permission
      })
    }
  },
  {
    url: '/mock-api/logout',
    method: 'get',
    response: ({ headers }) => {
      const user = fakeUserList.find(
        (item) => item.token === headers.authorization
      )
      if (!user) {
        return createErrorResult('无效 token！')
      }

      return createSuccessResult(undefined)
    }
  }
] as MockMethod[]
