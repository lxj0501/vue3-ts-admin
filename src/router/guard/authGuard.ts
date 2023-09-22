import { PageEnum } from '@/enums/pageEnum'
import { useUserStore } from '@/store/features/user'
import { Router } from 'vue-router'

export const createAuthGuard = (router: Router) => {
  const userStore = useUserStore()
  router.beforeEach(async (to, _, next) => {
    const token = userStore.token

    if (!token) {
      if (to.path === PageEnum.LOGIN) {
        next()
        return
      }

      next({
        path: PageEnum.LOGIN,
        query: { redirect: to.path },
        replace: true
      })
      return
    }

    await userStore.getUserInfoAction()
    const hasRoute = router.hasRoute(to.name ?? '')
    if (!hasRoute) {
      next({ ...to, replace: true })
    } else {
      next()
    }
  })
}
