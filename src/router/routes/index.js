import dynamicRoutes from "./modules";
import constantRoutes from "./constantRoutes";
import { flatMultiLevelRoutes } from "../helper/routeHelper";

/* 汇总路由信息 */
const allRoutes = [...constantRoutes];

/* 把多级路由，提取到loyout下 */
const appBaseRoutes = flatMultiLevelRoutes(allRoutes);

export { dynamicRoutes };
export default appBaseRoutes;
