import { createPageGuard } from "./pageGuard";
import { createProgressGuard } from "./progressGuard";
import { createPermissionGuard } from "./permissionGuard";

/**
 *  汇总创建所有的路由守卫
 * @param router 路由实例
 */
export function createGuard(router) {
  /* 守卫-页面title和加载中效果 */
  createPageGuard(router);
  /* 守卫-页面加载中进度条 */
  createProgressGuard(router);
  /* 守卫-页面权限 */
  createPermissionGuard(router);
}
