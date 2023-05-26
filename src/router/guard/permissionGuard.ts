import { Router } from 'vue-router'

export const createPermissionGuard = (_: Router) => {
  // const userStore = useUserStore();
  // router.beforeEach((to, _, next) => {
  //   const token = userStore.token;
  //   console.log(token);
  //   if (!token) {
  //     if (to.path === '/login') {
  //       next();
  //       return;
  //     }
  //     const redirectData: {
  //       path: string;
  //       replace: boolean;
  //       query?: any;
  //     } = {
  //       path: '/login',
  //       replace: true,
  //     };
  //     if (to.path) {
  //       redirectData.query = {
  //         ...redirectData.query,
  //         redirect: to.path,
  //       };
  //     }
  //     next(redirectData);
  //     return;
  //   }
  //   next();
  // });
}
