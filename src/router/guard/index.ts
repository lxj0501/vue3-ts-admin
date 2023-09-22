import { Router } from 'vue-router'
import { createAuthGuard } from './authGuard'

export const setupRouterGuard = (router: Router) => {
  createAuthGuard(router)
}
