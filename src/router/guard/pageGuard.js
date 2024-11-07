
import { useTitle } from "@/hooks/web/useTitle";
import { usePageLoading } from "@/hooks/web/usePageLoading";
const { loadStart, loadDone } = usePageLoading();
/**
 *  页面跳转路由守卫
 * @param router 路由实例
 */
export function createPageGuard(router) {
  router.beforeEach(async (to) => {
    loadStart();
    return true;
  });

  router.afterEach((to) => {
    useTitle(to?.meta?.title);
    loadDone();
  });
}
