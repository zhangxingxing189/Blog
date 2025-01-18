<script setup lang="ts">
import { RouterView } from "vue-router";
import ThemeVue from "@/components/comment/themeVue.vue";
import ScreenFill from "@/components/comment/screenFill.vue";
import MenuVue from "@/components/admin/menuVue.vue";
import { collapsed } from "@/components/admin/menu.ts";
import breadcrumb from "@/components/admin/breadcrumb.vue";
</script>

<template>
  <div class="admin">
    <div class="aside" :class="{ collapsed: collapsed }">
      <div class="logo"></div>
      <menu-vue />
    </div>
    <div class="main">
      <div class="head">
        <breadcrumb />
        <div class="action">
          <IconHome />
          <theme-vue />
          <screen-fill />
          <div class="user_info_actions"></div>
        </div>
      </div>
      <div class="tabs"></div>
      <div class="container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="less">
.admin {
  display: flex;
  background-color: var(--color-bg-1);
  color: @color-text-1;
  .aside {
    width: 240px;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    border-right: @border_solid;
    transition: width 0.3s;
    .logo {
      height: 90px;
      width: 100%;
      border-bottom: @border_solid;
    }
    &.collapsed {
      width: 48px;
      & ~ .main {
        width: calc(100% - 48px);
      }
    }
  }
  .main {
    width: calc(100% - 240px);
    transition: width 0.3s;
    .head {
      width: 100%;
      height: 60px;
      border-bottom: @border_solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }
    .tabs {
      width: 100%;
      height: 30px;
      border-bottom: @border_solid;
    }
    .container {
      height: calc(100vh - 90px);
      overflow-y: auto;
      overflow-x: hidden;
      background-color: @color-fill-2;
    }
  }
}
</style>
