import { LAYOUT } from '@/router/constant'
import { RouteRecordRaw } from 'vue-router'

export const EmptyStateRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'EmptyState',
  component: LAYOUT,
  children: [
    {
      path: '/:path(.*)*',
      component: () => import('@/views/static/empty-states/index.vue')
    }
  ]
}
