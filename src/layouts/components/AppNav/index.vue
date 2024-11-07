<template>
  <div class="app-nav">
    <div :class="['left-panel',collapse?'collapse':'']">
      <el-icon :size="16" @click="handleMenuCollapse">
        <Download />
      </el-icon>
      <AppBreadcrumb />
    </div>
    <div class="right-panel">
      <span class="tag" @click="goToPortalHome">
        <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link"> 门户首页 </span>
        </el-dropdown>
      </span>
      <el-dropdown :hide-on-click="false" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar
            :size="40"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="user-name">{{ user.user_name || "" }}</span>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="layout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { Download, ArrowDown } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import {
  ElIcon,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from "element-plus";
import AppBreadcrumb from "@/layouts/components/AppBreadcrumb/index.vue";
const router = useRouter();
import { useUserStoreWithOut } from "@/store/modules/user";
import { useAppStoreWithOut } from "@/store/modules/app";
const userStore = useUserStoreWithOut();
const appStore = useAppStoreWithOut();

const user = computed(() => userStore.getUserInfo || {});
const collapse = computed(() => appStore.getCollapse);
function handleCommand(type) {
  if (type === "layout") {
    userStore.logout();
  }
}
function goToPortalHome() {
  router.push("/portal/home");
}
function handleMenuCollapse(){
  appStore.toggleCollapse();
}
</script>
<style lang="scss" scoped>
.app-nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: var(--el-nav-height);
  padding-right: var(--el-padding);
  padding-left: var(--el-padding);
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background: var(--el-color-white);
  border-bottom: 1px solid var(--el-border-color);
  .left-panel {
    display: flex;
    align-items: center;
    .el-icon {
      transform: rotate(90deg);
      padding: 0px 20px 0px 20px;
      cursor: pointer;
      color: var(--el-color-grey);
      &:hover{
        color: var(--el-color-primary);
      }
    }
    &.collapse{
      .el-icon {
        transform: rotate(-90deg);
      }
    }
    :deep(.el-breadcrumb) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--el-nav-height);
      .el-breadcrumb__item{
        .el-breadcrumb__inner{
          display: flex;
          align-items: center;
          .app-svg{
            margin-top: 2px;
            margin-right: 3px;
          }
        }
      }
    }
  }
  .right-panel {
    display: flex;
    align-items: center;
    :deep(.el-dropdown) {
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-dropdown-link {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .el-avatar {
        }
        .user-name {
        }
      }
    }
  }
}
</style>
