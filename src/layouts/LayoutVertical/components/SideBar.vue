<template>
  <el-scrollbar :class="['side-bar', `${collapse?'menu-collapse':''}`]">
    <AppLogo />
    <div class="side-menu">
      <AppMenu/>
    </div>
  </el-scrollbar>
</template>
<script setup>
import { computed } from "vue";
import { ElMenu, ElSubMenu, ElMenuItem, ElMenuItemGroup } from "element-plus";

import AppLogo from "@/layouts/components/AppLogo/index.vue";
import AppMenu from "@/layouts/components/AppMenu/index.vue";

import { useAppStore } from '@/store/modules/app'
import { usePermissionStore } from '@/store/modules/permission'

const appStore = useAppStore()
const permissionStore = usePermissionStore()
// permissionStore.getRouters
const routers = computed(() => permissionStore.getMenuTabRouters);
const collapse = computed(() => appStore.getCollapse);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
.side-bar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: var(--el-left-menu-width);
  overflow: hidden;
  background: var(--el-menu-background-color);
  margin-left: -1px !important;
  border-right: 1px solid var(--el-menu-background-color) !important;
  height: 100%;
  text-shadow: none;
  transition: var(--el-transition);
  -webkit-font-smoothing: antialiased;
  .side-menu {
    margin-top: $base-logo-height;
    :deep(.el-menu) {
      border-right: 0;
      .el-menu-item,
      .el-sub-menu__title {
        transition: var(--el-transition);
        height: var(--el-menu-item-height);
        margin: 0 10px 5px;
        overflow: hidden;
        line-height: var(--el-menu-item-height);
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: var(--el-border-radius-base);
        &:hover,
        &.is-active {
          color: var(--el-color-white);
          background-color: var(--el-color-primary);
        }
        .menu-icon{
          display: flex;
          justify-items: center;
          .el-icon{
            margin-right: 0px;
          }
        }
      }
      
    }
  }
  &.menu-collapse{
    :deep(.logo-container){
      padding-left: 16px;
      .title{
        display: none;
      }
    }
    :deep(.side-menu){
      .el-menu-item,.el-sub-menu__title{
        padding: 10px;
      }
      .el-sub-menu {
        &.is-active{
          .el-sub-menu__title{
            color: var(--el-color-white);
            background-color: var(--el-color-primary);
          }
        }
      }
    }
  }
}
</style>
