<script setup lang="ts">
import { type Component, ref } from "vue";
import { IconHome, IconUser, IconSettings } from "@arco-design/web-vue/es/icon";
import { collapsed } from "@/components/admin/menu.ts";
import { useRoute } from "vue-router";
import router from "@/router/index.ts";

const route = useRoute();
interface MenuType {
  title: string;
  name: string;
  icon?: string | Component;
  children?: MenuType[];
}

const menuList: MenuType[] = [
  {
    title: "首页",
    name: "home",
    icon: IconHome,
  },
  {
    title: "个人中心",
    name: "userCenter",
    icon: IconUser,
    children: [
      {
        title: "个人信息",
        name: "userInfo",
        icon: "iconfont icon-gerenxinxi",
      },
    ],
  },
  {
    title: "用户管理",
    name: "userManage",
    icon: "iconfont icon-yonghuguanli",
    children: [
      {
        title: "用户列表",
        name: "userList",
        icon: "iconfont icon-list",
      },
    ],
  },
  {
    title: "系统设置",
    name: "settingManage",
    icon: IconSettings,
    children: [
      {
        title: "系统信息",
        name: "settingInfo",
        icon: "iconfont icon-xitongxinxi",
      },
    ],
  },
];
function menuItemClick(key: string) {
  router.push({
    name: key,
  });
}
const openKeys = ref<string[]>(["home"]);

function initRout() {
  if (route.matched.length === 3) {
    openKeys.value = route.matched[1].name
      ? [route.matched[1].name as string]
      : [];
  }
}
initRout();
</script>

<template>
  <div id="menu" class="scrollbar" :class="{ collapsed: collapsed }">
    <div class="menu_inner">
      <a-menu
        @menu-item-click="menuItemClick"
        show-collapse-button
        v-model:collapsed="collapsed"
        v-model:open-keys="openKeys"
        :default-selected-keys="route.name"
      >
        <template v-for="menu in menuList">
          <a-menu-item v-if="!menu.children" :key="menu.name">
            <template #icon>
              <component
                v-if="typeof menu.icon !== 'string'"
                :is="menu.icon"
              ></component>
              <i :class="menu.icon" v-else></i>
            </template>
            {{ menu.title }}
          </a-menu-item>
          <a-sub-menu v-else :key="'sub' + menu.name" :title="menu.title">
            <template #icon>
              <component
                v-if="typeof menu.icon !== 'string'"
                :is="menu.icon"
              ></component>
              <i :class="menu.icon" v-else></i>
            </template>
            <a-menu-item :key="sub.name" v-for="sub in menu.children">
              <template #icon>
                <component
                  v-if="typeof sub.icon !== 'string'"
                  :is="sub.icon"
                ></component>
                <i :class="sub.icon" v-else></i>
              </template>
              {{ sub.title }}
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </div>
  </div>
</template>

<style lang="less">
#menu {
  height: calc(100vh - 90px);
  position: relative;
  &.collapsed {
    .arco-menu-collapse-button {
      left: 48px !important;
    }
  }
  &:hover {
    .arco-menu-collapse-button {
      opacity: 1 !important;
    }
  }
  .menu_inner {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .arco-menu {
    position: inherit;
    .arco-menu-collapse-button {
      top: 50%;
      left: 240px;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.3s;
      width: 40px;
      height: 40px;
      background: gainsboro;
      border-radius: 20px;
    }
  }
}
</style>
