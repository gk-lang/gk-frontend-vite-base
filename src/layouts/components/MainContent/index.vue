<template>
  <div :class="['main-content', pageName]">
    <section>
      <router-view>
        <template #default="{ Component, route }">
          <transition mode="out-in" name="fade-transform">
            <keep-alive :include="cachedViews" :max="keepAliveMaxNum">
              <component :is="Component" :key="route.fullPath"/>
            </keep-alive>
          </transition>
        </template>
      </router-view>
    </section>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import config from "@/config/index.js";
import { useRouter } from "vue-router";
import { useTagsViewStore } from "@/store/modules/tagsView";
const tagsViewStore = useTagsViewStore();
const router = useRouter();
const currentRoute = router.currentRoute;
const keepAliveMaxNum = ref(config.keepAliveMaxNum);
const cachedViews = computed(() => tagsViewStore.getCachedViews);
const pageName = computed(() => {
  return currentRoute.value.name;
});
</script>
<style lang="scss" scoped>
.main-content {
  &.archive-preview {
    padding: 0px !important;
  }
}
</style>
