import { findPath, treeToList, eachTree } from "@/utils/tree";
import { cloneDeep } from "lodash-es";
import { Layout } from "@/router/constant";
import { useUserStoreWithOut } from "@/store/modules/user";
import { createRouter, createWebHashHistory } from "vue-router";
import { dynamicRoutes } from "@/router/routes";

/**
 * 添加动态路由到路由实例
 * @param router 路由实例
 * @param menuList 动态路由（这里的特指菜单数据集合，不是纯粹意义上的动态路由数据结构，因为里面会做一层转换）
 */
export function addDynamicRoutesToRouter(router, userStore) {
  const routeList = treeToList(dynamicRoutes);
  const roleMenuList = treeToList(userStore.getRoleMenuList);
  const adminRoot = {
    path: "/admin",
    name: "admin",
    component: Layout,
    meta: {},
    redirect: "/admin-home",
    children: [
      {
        path: "/admin-home",
        component: () => import("@/views/app/home/index.vue"),
        name: "admin-home",
        meta: {
          title: "首页",
          affix: true, 
          noClosable: true,
          icon: "menu-home",
        },
      }
    ],
  };
  routeList.forEach((item) => {
    const menuInfo = roleMenuList.find((menu) => menu.path === item.path);
    const routeInfo = cloneDeep(menuInfo);
    if (routeInfo) {
      routeInfo.component = item.component;
      adminRoot.children.push(routeInfo);
    } else if (!menuInfo && item.meta?.hidden) {
      // 非菜单类型的路由
      adminRoot.children.push({ ...item });
    }
  }); 
  /* 动态添加路由信息到路由实例对象 */
  router.addRoute(adminRoot);
  router.addRoute({
    path: "/:path(.*)*",
    redirect: "/404",
    name: "404Page",
    meta: {
      hidden: true,
      breadcrumb: false,
    },
  });

  /* 把是否已经添加动态路由的标志置为true */
  userStore.setIsDynamicAddedRoute(true);
}

/**
 * 把菜单数据转换成动态路由数据结构
 * @param menus 菜单数据
 */
export function transformMenusToRoutes(menus) {
  let dynamicRoutes = [];
  /* 解析路由数据中的layout,component信息 */
  generateDynamicRoutes(dynamicRoutes, menus, menus);
  /* 提升多级路由 */
  dynamicRoutes = flatMultiLevelRoutes(dynamicRoutes);
  return cloneDeep(dynamicRoutes);
}

/**
 * 把后台查询的原始菜单数据拼装成路由格式的数据
 * @param routes 新的路由
 */
export function generateDynamicRoutes(routes, data, sourceData) {
  data.forEach((node) => {
    const routeItem = cloneDeep(node);
    routeItem.children = [];
    // 通过路径计算层级，通过层级计算layout
    const pathArr = findPath(sourceData, (item) => item.name == node.name);
    // 菜单层级
    const menuLevel = pathArr?.length || 1;
    if (menuLevel == 1) {
      // 组件没有意义说明是layout框架组件
      if (!routeItem.component || routeItem.component == "Layout") {
        routeItem.component = Layout;
      } else {
        // 顶级路由无框架页时，添加一个layout页面
        const routeItemComponent = routeItem.component;
        routeItem.component = Layout;
        routeItem.children = [
          {
            ...routeItem,
            component: routeItemComponent,
          },
        ];
      }
    } else if (routeItem.component && routeItem.component !== "ParentLayout") {
      routeItem.component = node.component;
    }
    //递归生成
    if (node.children) {
      generateDynamicRoutes(routeItem.children, node.children, sourceData);
    }
    routes.push(routeItem);
  });
}

/**
 * 加载动态页面
 * @param view 要加载的页面路径
 * @returns
 */
// export const loadView = (view) => {
//   return () => new Promise((resolve) => require(["@/views" + view], resolve));
// };

/**
 * 转化多级路由到二级路由
 */
export function flatMultiLevelRoutes(routeModules) {
  const modules = cloneDeep(routeModules);
  for (let index = 0; index < modules.length; index++) {
    const routeModule = modules[index];
    if (!isMultipleRoute(routeModule)) {
      continue;
    }
    promoteRouteLevel(routeModule);
  }
  return modules;
}

/**
 * 把大于2级的路由提升到第二级
 * @param routeModule
 */
function promoteRouteLevel(routeModule) {
  let router = createRouter({
    routes: [routeModule],
    history: createWebHashHistory(),
  });

  const routes = router.getRoutes();
  addToChildren(routes, routeModule.children || [], routeModule);
  router = null;

  routeModule.children = routeModule.children?.filter(
    (item) => !item.children?.length
  );
}

/**
 * 添加多级子路由到二级路由
 * @param routes
 * @param children
 * @param routeModule
 */
function addToChildren(routes, children, routeModule) {
  for (let index = 0; index < children.length; index++) {
    const child = children[index];
    const route = routes.find((item) => item.name === child.name);
    if (!route) {
      continue;
    }
    routeModule.children = routeModule.children || [];
    if (!routeModule.children.find((item) => item.name === route.name)) {
      routeModule.children?.push(route);
    }
    if (child.children?.length) {
      addToChildren(routes, child.children, routeModule);
    }
  }
}

/**
 * 确定路由层级是否大于2级
 * @param routeModule 路由模块
 * @returns 是否
 */
function isMultipleRoute(routeModule) {
  /* 第一层级没有 children或者children长度为0时返回false*/
  if (
    !routeModule ||
    !Reflect.has(routeModule, "children") ||
    !routeModule.children?.length
  ) {
    return false;
  }

  const children = routeModule.children;
  /* 子数组中的子项是否又存在children,如果存在说明路由层级大于2 */
  let flag = false;
  for (let index = 0; index < children.length; index++) {
    const child = children[index];
    if (child.children?.length) {
      flag = true;
      break;
    }
  }
  return flag;
}
