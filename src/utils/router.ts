import { router } from '@/router'
import { RootRoute } from '@/router/routes'
import { MenuPerm } from '@/types/permission'
import { RouteRecordRaw } from 'vue-router'

export const generateDynamicRoutes = (menuList: MenuPerm[]) => {
  const modules = import.meta.glob('@/views/async/**/index.vue')

  const generateAsyncRoutes = (
    prePath = '',
    parentId?: number | string
  ): RouteRecordRaw[] => {
    const subMenus = menuList.filter((item) => item.parentId == parentId)
    const routes: RouteRecordRaw[] = []
    subMenus.forEach(({ path, id, name }) => {
      const route = {
        name: path,
        path,
        meta: { name } as any
      } as RouteRecordRaw
      const compPath = `/src/views/async/${prePath + path}/index.vue`
      if (modules[compPath]) {
        route.component = modules[compPath]
      }
      if (menuList.findIndex((item) => item.parentId === id) !== -1) {
        route.children = generateAsyncRoutes(prePath + path + '/', id)
      }
      routes.push(route)
    })
    return routes
  }

  const asyncRoutes = generateAsyncRoutes()
  router.addRoute({
    ...RootRoute,
    children: asyncRoutes
  })

  return asyncRoutes
}
