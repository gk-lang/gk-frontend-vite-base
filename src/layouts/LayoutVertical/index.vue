<template>
  <!--纵向布局 -->
  <div class="app-layout-vertical">
    <side-bar />
    <div class="app-main">
      <div class="main-header">
        <app-nav />
        <app-tabs v-show="showTabs" />
      </div>
      <main-content />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import SideBar from "./components/SideBar.vue";
import MainContent from "@/layouts/components/MainContent/index.vue";
import AppNav from "@/layouts/components/AppNav/index.vue";
import AppTabs from "@/layouts/components/AppTabs/index.vue";
const showTabs = ref(true);
</script>
<style lang="scss" scoped>
.app-layout-vertical {
  text-shadow: none;
  transition: var(--el-transition);
  -webkit-font-smoothing: antialiased;
  padding-top: calc(var(--el-nav-height) + var(--el-tabs-height));
  .app-main {
    position: relative;
    width: auto;
    min-height: 100%;
    margin-left: var(--el-left-menu-width);
    transition: var(--el-transition);
    .main-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 10;
      width: calc(100% - var(--el-left-menu-width));
      border-bottom: 1px solid var(--el-border-color);
      z-index: 100;
      transition: var(--el-transition);
    }
  }
}
</style>
