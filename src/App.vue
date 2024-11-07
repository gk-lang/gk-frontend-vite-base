<template>
  <ConfigGlobal :size="currentSize">
    <RouterView :class="greyMode ? `${prefixCls}-grey-mode` : ''" />
  </ConfigGlobal>
</template>
<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/modules/app";
import ConfigGlobal from "@/components/config-global/index.vue";
import { useDesign } from "@/hooks/web/useDesign";
// import { ElNotification } from 'element-plus'

const { getPrefixCls } = useDesign();

const prefixCls = getPrefixCls("app");

const appStore = useAppStore();

const currentSize = computed(() => appStore.getCurrentSize);

const greyMode = computed(() => appStore.getGreyMode);

appStore.resetTheme()
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
