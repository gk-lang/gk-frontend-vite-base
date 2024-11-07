<template>
  <div
    class="logo-container"
    :class="{
      ['logo-container-' + theme.layout]: true,
    }"
  >
    <router-link to="/"  >
      <span class="logo">
        <el-image src="/logo.png" />
      </span>
      <span class="title">
        {{ title }}
      </span>
    </router-link>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "@/store/modules/app";
import { ElImage } from "element-plus";
const appStore = useAppStore();
const theme = computed(() => appStore.getTheme);
const title = computed(() => appStore.getTitle);
</script>
<style lang="scss" scoped>
@mixin container {
  //   position: relative;
  //   height: $base-top-bar-height;
  //   overflow: hidden;
  //   line-height: $base-top-bar-height;
  //   background: transparent;

  // text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: $base-z-index;
  width: 100%;
  background: var(--el-menu-background-color);
  // transition: all .2s;
  padding-left: 25px;
  overflow: hidden;
}

@mixin logo {
  display: inline-block;
  width: 32px;
  height: 32px;
  color: $base-title-color;
  vertical-align: middle;
}

@mixin title {
  display: inline-block;
  margin-left: 5px;
  overflow: hidden;
  font-size: 20px;
  line-height: 55px;
  color: $base-title-color;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  
}

.logo-container {
  &-horizontal,
  &-common {
    @include container;

    .logo {
      .el-image {
        svg,
        img {
          @include logo;
        }
      }
    }

    .title {
      @include title;
    }
  }

  &-vertical,
  &-column,
  &-comprehensive {
    @include container;

    height: $base-logo-height;
    line-height: $base-logo-height;
    // text-align: center;

    .logo {
      :deep(.el-image){
        @include logo;
      }
    }

    .title {
      @include title;
      max-width: $base-left-menu-width - 60;
    }
  }

  &-column {
    background: $base-column-second-menu-background !important;

    .logo {
      position: fixed;
      top: 0;
      display: block;
      width: $base-left-menu-width-min;
      height: $base-logo-height;
      margin: 0;
      background: $base-column-first-menu-background;
    }

    .title {
      padding-right: 15px;
      padding-left: 15px;
      margin-left: $base-left-menu-width-min !important;
      color: $base-color-black !important;
      background: $base-column-second-menu-background !important;
      @include title;
    }
  }
}
</style>
