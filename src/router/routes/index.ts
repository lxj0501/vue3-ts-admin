import type { RouteRecordRaw } from 'vue-router'
import { LAYOUT } from '../constant'

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: LAYOUT
}

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/system/login/index.vue')
}

export const basicRoutes = [LoginRoute, RootRoute]
