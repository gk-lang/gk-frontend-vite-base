import { useUserStoreWithOut } from "@/store/modules/user";
import { usePermissionStoreWithOut } from "@/store/modules/permission";
import { addDynamicRoutesToRouter } from "../helper/routeHelper";
import { isRouteWhitelisted } from "@/utils/validate";
const whitelistedRoute = [
  "/login",
  "/register",
  "/forgot-password",
  /^\/portal(\/.*)?$/,
];
/**
 *  页面跳转路由守卫
 * @param router 路由实例
 */
export function createPermissionGuard(router) {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    const toPath = to.path.toLocaleLowerCase();
    const isWhitelistedRoute = isRouteWhitelisted(whitelistedRoute, toPath);
    /* 白名单页面直接跳转 */
    if (isWhitelistedRoute) {
      return next();
    }
    /* 判断有无Token */
    if(!userStore.getToken){
      const tipErrMsg = '未检测到该账户的token信息，请重新登录！'
      return next(`/login?redirect=${toPath}&tipErrMsg=${ tipErrMsg }`);
    }
    /* 判断是否含有用户信息 */
    if(!userStore.getUserInfo){
      const tipErrMsg = '未检测到该账户的用户信息，请重新登录！'
      return next(`/login?redirect=${toPath}&tipErrMsg=${ tipErrMsg }`);
    }
    /* 浏览器刷新时，因为路由实例会重新挂载到vue的原因，原来动态添加的路由将消失，所以重新添加 */
    if (!userStore.getIsDynamicAddedRoute) {
      addDynamicRoutesToRouter(router, userStore);
      // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
      next({...to, replace: true})
    } else {
      next();
    }
  });
}
