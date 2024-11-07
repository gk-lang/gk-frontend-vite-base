<template>
  <el-scrollbar ref="appScrollbarRef" >
    <div class="app-layout-container">
      <component
        :is="resolvedComponent"
        :collapse="theme.collapse"
        :device="theme.device"
        :fixed-header="theme.fixedHeader"
        :show-tabs="theme.showTabs"
      />
    </div>
  </el-scrollbar>
</template>
<script setup>
import { onMounted, computed, provide, ref } from "vue";
import { useAppStore } from "@/store/modules/app";

import LayoutColumn from "./LayoutColumn/index.vue";
import LayoutCommon from "./LayoutCommon/index.vue";
import LayoutComprehensive from "./LayoutComprehensive/index.vue";
import LayoutEmpty from "./LayoutEmpty/index.vue";
import LayoutHorizontal from "./LayoutHorizontal/index.vue";
import LayoutVertical from "./LayoutVertical/index.vue";

const appStore = useAppStore();
const theme = computed(() => appStore.getTheme);
const appScrollbarRef = ref();
// 组件映射
const componentMap = {
  column: LayoutColumn,
  common: LayoutCommon,
  comprehensive: LayoutComprehensive,
  empty: LayoutEmpty,
  horizontal: LayoutHorizontal,
  vertical: LayoutVertical,
};

// 动态解析组件
const resolvedComponent = computed(() => {
  const layout = theme.value.layout;
  // 直接使用映射表进行解析
  return componentMap[layout] || null;
});
onMounted(() => {});
</script>

<style lang="scss" scoped>
.app-layout-container {
  position: relative;
  width: 100%;
  height: 100%;
  :deep(.main-content) {
    width: 100%;
    padding: var(--el-padding);
    overflow: hidden;
    box-sizing: border-box;
    section {
      & > [class*="-container"] {
        min-height: var(--el-container-height);
        padding: var(--el-padding);
        background: var(--el-color-white);
        border: 1px solid var(--el-border-color);
        border-radius: var(--el-border-radius-base);
        box-sizing: border-box;
        &.auto-height-container {
          display: flex;
          flex-direction: column;
          height: var(--el-container-height);
        }
      }
    }
  }
}
</style>
