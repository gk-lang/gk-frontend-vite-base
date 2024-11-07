
/* 测试 */
const testRoutes = [
  {
    path: "/menu-test",
    name: "menu-test",
    component: () => import("@/views/admin/application/app-list/index.vue"),
    meta: { title: "多级菜单测试" },
  },
];
export default testRoutes;
