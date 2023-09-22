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
      // system: { space: 0, code: 0b0101 }
      menuList: [
        {
          id: 1,
          parentId: null,
          path: 'system',
          name: '系统'
        },
        {
          id: 2,
          parentId: 1,
          path: 'permission',
          name: '权限管理'
        }
      ]
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
        userInfo: { username: _username, avatar },
        token,
        permission
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
      const { username, avatar } = user
      return createSuccessResult({
        username,
        avatar
      })
    }
  },
  {
    url: '/mock-api/permission',
    method: 'get',
    response: ({ headers }) => {
      const user = fakeUserList.find(
        (item) => item.token === headers.authorization
      )
      if (!user) {
        return createErrorResult('无效 token！')
      }
      const { permission } = user
      return createSuccessResult({
        ...permission
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
