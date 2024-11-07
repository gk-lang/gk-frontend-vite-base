
/* 应用管理 */
const applicationRoutes = [
  {
    path: "/app-list",
    name: "app-list",
    component: () => import("@/views/admin/application/app-list/index.vue"),
    meta: { title: "应用列表"  },
  },
  {
    path: "/app-approve",
    name: "app-approve",
    component: () => import("@/views/admin/application/app-approve/index.vue"),
    meta: { title: "应用审批" },
  },
  {
    path: "/api-list",
    name: "api-list",
    component: () => import("@/views/admin/application/api-list/index.vue"),
    meta: { title: "API列表" },
  },
  {
    path: "/api-approve",
    name: "api-approve",
    component: () => import("@/views/admin/application/api-approve/index.vue"),
    meta: { title: "API审批" },
  },
  {
    path: "/alter-service",
    name: "alter-service",
    component: () => import("@/views/admin/application/alter-service/index.vue"),
    meta: { title: "配额管理" },
  },
  {
    path: "/service-statistics",
    name: "service-statistics",
    component: () => import("@/views/admin/application/service-statistics/index.vue"),
    meta: { title: "服务统计" },
  },
];
export default applicationRoutes;
