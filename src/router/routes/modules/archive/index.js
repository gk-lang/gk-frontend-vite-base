/* 文档管理 */
const archiveRoutes = [
  {
    path: "/archive-list",
    name: "archive-list",
    component: () => import("@/views/admin/archive/index.vue"),
    meta: { title: "文档列表" },
  },
  {
    path: "/archive-add",
    name: "archive-add",
    component: () => import("@/views/admin/archive/archive-add.vue"),
    meta: { title: "新增文档", hidden: true,icon: "menu-edit-article" },
  },
  {
    path: "/archive-edit",
    name: "archive-edit",
    component: () => import("@/views/admin/archive/archive-edit.vue"),
    meta: { title: "编辑文档", hidden: true,icon: "menu-edit-article" },
  },
  {
    path: "/archive-preview",
    name: "archive-preview",
    component: () => import("@/views/admin/archive/preview.vue"),
    meta: { title: "文档预览", hidden: true,icon: "menu-article-preview" },
  },
];
export default archiveRoutes;
