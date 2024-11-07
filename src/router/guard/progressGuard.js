
import { useNProgress } from "@/hooks/web/useNProgress";
const { start, done } = useNProgress();

/**
 * 创建进度条守卫
 * @param router 路由实例
 */
export function createProgressGuard(router) {
  router.beforeEach(async (to) => {
    start();
    return true;
  });
  router.afterEach(async (to) => {
    done(); // 结束Progress
    return true;
  });
}
