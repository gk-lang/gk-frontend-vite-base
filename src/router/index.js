import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";
import appBaseRoutes from "./routes";
import { createGuard } from "./guard";

export const WHITE_NAME_LIST = appBaseRoutes.map((x) => x.name);

const router = createRouter({
  history: createWebHistory(),
  routes: [...appBaseRoutes],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 *  重置路由
 */
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

/**
 *  注册路由信息
 * @param app: vue实例
 */
export function setupRouter(app) {
  app.use(router);
  createGuard(router);
}
export default router;
