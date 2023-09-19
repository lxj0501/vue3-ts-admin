import { RouteRecordRaw } from 'vue-router'

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/static/login/index.vue')
}
