/* 沙箱工具 */
const sandboxToolRoutes = [
  {
    path: "/api-test-tool",
    component: () => import("@/views/admin/sandbox-tool/api-test-tool/index.vue"),
    name: "api-test-tool",
    meta: {
      title: "API测试工具",
    },
  },
  {
    path: "/api-test-record",
    component: () => import("@/views/admin/sandbox-tool/api-test-record/index.vue"),
    name: "api-test-record",
    meta: {
      title: "API测试记录",
    },
  },
  {
    path: "/auth-test-tool",
    component: () => import("@/views/admin/sandbox-tool/auth-test-tool/index.vue"),
    name: "auth-test-tool",
    meta: {
      title: "鉴权测试工具",
    },
  },
  {
    path: "/sandbox-process",
    component: () => import("@/views/admin/sandbox-tool/sandbox-process/index.vue"),
    name: "sandbox-process",
    meta: {
      title: "沙箱全流程调测",
    },
  },
];
export default sandboxToolRoutes;
