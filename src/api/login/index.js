import request from "@/http";
const mockUserList = [
  {
    username: "admin",
    password: "admin",
    role: "admin",
    roleId: "1",
    permissions: ["*.*.*"],
  },
  {
    username: "test",
    password: "test",
    role: "test",
    roleId: "2",
    permissions: ["example:dialog:create", "example:dialog:delete"],
  },
];
export const loginApi = (data) => {
  // return request.post({ url: "/mock/user/login", data });
  return {
    code: 200,
    message: "",
    data: mockUserList[0],
  };
};
export const loginOutApi = (data) => {
  return request.post({ url: "/mock/user/login", data });
};
export const getAdminRoleApi = (params) => {
  const adminList = [
    {
      path: '/dashboard',
      component: '#',
      redirect: '/dashboard/analysis',
      name: 'Dashboard',
      meta: {
        title: 'router.dashboard',
        icon: 'vi-ant-design:dashboard-filled',
        alwaysShow: true
      },
      children: [
        {
          path: 'analysis',
          component: 'views/Dashboard/Analysis',
          name: 'Analysis',
          meta: {
            title: 'router.analysis',
            noCache: true,
            affix: true
          }
        },
        {
          path: 'workplace',
          component: 'views/Dashboard/Workplace',
          name: 'Workplace',
          meta: {
            title: 'router.workplace',
            noCache: true,
            affix: true
          }
        }
      ]
    },
    {
      path: '/HSBall',
      component: '#',
      name: 'HSBall',
      meta: {},
      children: [
        {
          path: 'index',
          component: 'views/HSBall/HSBall',
          name: 'HSBall',
          meta: {
            title: '小球运动',
            icon: 'vi-cib:telegram-plane'
          }
        }
      ]
    }
  ]
  return {
    code: SUCCESS_CODE,
    data: adminList
  }
  // return request.get({ url: "/mock/role/list", params });
};

export const getTestRoleApi = (params) => {
  const testList = [
    '/dashboard',
    '/dashboard/analysis',
    '/authorization',
    '/authorization/department',
    '/authorization/user',
    '/authorization/role',
    '/authorization/menu',
    '/error',
    '/error/404-demo',
    '/error/403-demo',
    '/error/500-demo'
  ]
  return {
    code: SUCCESS_CODE,
    data: testList
  }
  // return request.get({ url: "/mock/role/list2", params });
};
