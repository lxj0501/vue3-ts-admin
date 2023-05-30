import { createErrorResult, createSuccessResult } from '../_util'
import { MockMethod } from 'vite-plugin-mock'

const fakeUserList = [
  {
    username: 'admin',
    avatar: '',
    password: 'admin',
    token: 'token1'
  },
  {
    username: 'user1',
    avatar: '',
    password: '123456',
    token: 'token2'
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
      const { username: _username, avatar, token } = user
      return createSuccessResult({
        userInfo: { username: _username, avatar },
        token
      })
    }
  }
] as MockMethod[]
