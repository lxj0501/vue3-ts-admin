import type { RouteRecordRaw } from 'vue-router'
import { LAYOUT } from '../constant'
import { LoginRoute } from './static/loginRoute'
import { EmptyStateRoute } from './static/emptyStateRoute'

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: LAYOUT
}

export const basicRoutes = [LoginRoute, EmptyStateRoute]
