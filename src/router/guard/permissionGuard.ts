import { PageEnum } from '@/enums/pageEnum'
import { useUserStore } from '@/store/features/user'
import { Router } from 'vue-router'

export const createPermissionGuard = (router: Router) => {
  const userStore = useUserStore()
  router.beforeEach((to, _, next) => {
    const token = userStore.token
    console.log(token)

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

    userStore.getUserInfoAction()
    next()
  })
}
