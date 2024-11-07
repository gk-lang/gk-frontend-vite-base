
/* 监控管理 */
const monitorRoutes = [
  {
    path: "/general-monitor",
    name: "general-monitor",
    component: () => import("@/views/admin/monitor-manage/general-monitor.vue"),
    meta: { title: "普通类监控" },
  },
  {
    path: "/general-log",
    name: "general-log",
    component: () => import("@/views/admin/monitor-manage/general-log/index.vue"),
    meta: { title: "普通类日志" },
  },
  {
    path: "/push-monitor",
    name: "push-monitor",
    component: () => import("@/views/admin/monitor-manage/push-monitor.vue"),
    meta: { title: "推送类监控" },
  },
  {
    path: "/push-log",
    name: "push-log",
    component: () => import("@/views/admin/monitor-manage/push-log/index.vue"),
    meta: { title: "推送类日志" },
  },
];
export default monitorRoutes;
