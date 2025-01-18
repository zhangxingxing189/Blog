import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "web",
      path: "/",
      // component: () => import('@/views/web/index.vue'),
      redirect: "/admin",
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/login/index.vue"),
    },
    {
      name: "admin",
      path: "/admin",
      meta: {
        title: "首页",
      },
      component: () => import("@/views/admin/index.vue"),
      children: [
        {
          name: "home",
          path: "",
          component: () => import("@/views/admin/home/index.vue"),
        },
        {
          name: "userCenter",
          path: "user-center",
          meta: {
            title: "个人中心",
          },
          children: [
            {
              name: "userInfo",
              path: "user-info",
              meta: {
                title: "个人信息",
              },
              component: () => import("@/views/admin/user_center/index.vue"),
            },
          ],
        },
        {
          name: "userManage",
          path: "user-manage",
          meta: {
            title: "用户管理",
          },
          children: [
            {
              name: "userList",
              path: "user-list",
              meta: {
                title: "用户列表",
              },
              component: () => import("@/views/admin/user_manage/index.vue"),
            },
          ],
        },
        {
          name: "settingManage",
          path: "setting-manage",
          meta: {
            title: "系统设置",
          },
          children: [
            {
              name: "settingInfo",
              path: "setting-info",
              meta: {
                title: "系统信息",
              },
              component: () =>
                import("@/views/admin/settings_manage/index.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
