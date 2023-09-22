import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routes'
import { setupRouterGuard } from './guard'

// 创建路由实例
export const router = createRouter({
  history: createWebHashHistory('/'),
  routes: basicRoutes
})

export function setupRouter(app: App<Element>) {
  setupRouterGuard(router)
  app.use(router)
}
