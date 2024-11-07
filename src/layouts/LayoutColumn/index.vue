<template>
  <!--分栏布局 -->
  <div class="app-layout-column">
    <column-bar />
    <div class="app-main">
      <div class="app-layout-header">
        <app-nav />
        <app-tabs v-show="showTabs" />
      </div>
      <main-content />
    </div>
  </div>
</template>
<script setup>
import ColumnBar from "./components/ColumnBar.vue";
import MainContent from "@/layouts/components/MainContent/index.vue";
import AppNav from "@/layouts/components/AppNav/index.vue";
import AppTabs from "@/layouts/components/AppTabs/index.vue";
</script>
<style lang="scss" scoped></style>
