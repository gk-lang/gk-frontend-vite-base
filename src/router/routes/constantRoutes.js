import { Layout, LayoutPortal } from "@/router/constant";

/* 404 无页面时的noFound页面 */
// const PAGE_NOT_FOUND_ROUTE = {
//   path: "/:path(.*)*",
//   name: PAGE_NOT_FOUND_NAME,
//   component: Layout,
//   meta: {
//     title: "ErrorPage",
//     hideBreadcrumb: true,
//     hideMenu: true,
//   },
//   children: [
//     {
//       path: "/:path(.*)*",
//       name: PAGE_NOT_FOUND_NAME,
//       component: EXCEPTION_COMPONENT,
//       meta: {
//         title: "ErrorPage",
//         hideBreadcrumb: true,
//         hideMenu: true,
//       },
//     },
//   ],
// };
/* 报错时的错误页面 */
const ERROR_LOG_ROUTE = {
  path: "/error-log",
  name: "ErrorLog",
  component: Layout,
  redirect: "/error-log/list",
  meta: {
    title: "ErrorLog",
    hideBreadcrumb: true,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: "list",
      name: "ErrorLogList",
      component: () => import("@/views/app/error/404.vue"),
      meta: {
        // title: t("routes.basic.errorLogList"),
        title: "错误日志",
        hideBreadcrumb: true,
        currentActiveMenu: "/error-log",
      },
    },
  ],
};
/* 门户页面 */
export const PORTAL_ROUTE = {
  path: "/portal",
  name: "portal",
  component: LayoutPortal,
  redirect: "/portal/Home",
  meta: {},
  children: [
    {
      path: "home",
      name: "home",
      component: () => import("@/views/portal/home/index.vue"),
      meta: {
        title: "首页",
        icon: "vi-cib:telegram-plane",
      },
    },
    {
      path: "api",
      name: "api",
      component: () => import("@/views/portal/api/index.vue"),
      meta: {
        title: "接口文档",
        icon: "vi-cib:telegram-plane",
      },
    },
    {
      path: "api-detail",
      name: "api-detail",
      component: () => import("@/views/portal/api/api-detail.vue"),
      meta: { title: "接口详情", hidden: true },
    },
  ],
};
/* 静态路由 */
const constantRoutes = [
  {
    path: "/",
    name: "Root",
    redirect: "/portal/Home",
    meta: {
      title: "Root",
    },
  },
  PORTAL_ROUTE,
  {
    path: "/login",
    component: () => import("@/views/app/login/index.vue"),
    name: "login",
    meta: {
      hidden: true,
      title: "登录",
      noTagsView: true,
    },
  },
  {
    path: "/register",
    component: () => import("@/views/app/register/index.vue"),
    name: "register",
    meta: {
      hidden: true,
      title: "注册",
      noTagsView: true,
    },
  },
  {
    path: "/forgot-password",
    component: () => import("@/views/app/forgot-password/index.vue"),
    name: "forgot-password",
    meta: {
      hidden: true,
      title: "忘记密码",
      noTagsView: true,
    },
  },
  {
    path: "/redirect",
    name: "Redirect",
    component: Layout,
    meta: {
      title: "Redirect",
      hideBreadcrumb: true,
      hideMenu: true,
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("@/views/app/redirect/index.vue"),
        meta: {
          title: "Redirect",
          hideBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/app/error/404.vue"),
    name: "NoFind",
    meta: {
      hidden: true,
      title: "404",
      noTagsView: true,
    },
  },
  // {
  //   path: "/:path(.*)*",
  //   name: "404",
  //   component: () => import("@/views/app/error/404.vue"),
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/404',
  //   name: '404Page',
  //   meta: {
  //     hidden: true,
  //     breadcrumb: false
  //   }
  // }
];
export default constantRoutes;
