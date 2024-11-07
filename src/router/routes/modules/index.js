import archiveRoutes from "./archive";
import applicationRoutes from "./application";
import testRoutes from "./test";
import sandboxToolRoutes from "./sandbox-tool";
import monitorRoutes from "./monitor-manage";

// 系统看板
const dashboardRoute = {
  path: "/dashboard",
  name: "dashboard",
  component: "/system/dashboard/index",
  meta: {
    title: "首页",
    isNoCloseTag: true, //是否不允许关闭标签
    isHiddenMenu: false, //是否在菜单列表中隐藏
    permissions: ["admin", "editor"],
  },
};
const dynamicRoutes = [
  ...testRoutes,
  ...archiveRoutes,
  ...applicationRoutes,
  ...sandboxToolRoutes,
  ...monitorRoutes
];
export default dynamicRoutes;

// const modules = import.meta.globEager("./modules/**/*.ts");
// const routeModuleList: AppRouteModule[] = [];

// Object.keys(modules).forEach((key) => {
//   const mod = modules[key].default || {};
//   const modList = Array.isArray(mod) ? [...mod] : [mod];
//   routeModuleList.push(...modList);
// });
