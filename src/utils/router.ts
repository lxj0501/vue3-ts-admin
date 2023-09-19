import { router } from '@/router'

export const generateDynamicRoutes = () => {
  const modules = import.meta.glob('@/views/async/**/index.vue')
  // Object.keys(modules).forEach(async (item) => {
  //   const path = extractAsyncRoutes(item)
  //   if (!path) return
  // })
  router.addRoute({
    name: 'permission',
    path: '/permission',
    component: modules['/src/views/async/permission/department/index.vue']
  })
}

export const extractAsyncRoutes = (input: string) => {
  const startMarker = '/async'
  const endMarker = '/index.vue'

  const pattern = `${startMarker}(.*?)${endMarker}`
  const reg = new RegExp(pattern)
  const match = input.match(reg)

  return match ? match[1] : void 0
}
