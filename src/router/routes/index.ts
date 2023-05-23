import type { RouteRecordRaw } from 'vue-router';
import { LAYOUT } from '../constant';
export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: LAYOUT,
} as RouteRecordRaw;

export const basicRoutes = [RootRoute];
