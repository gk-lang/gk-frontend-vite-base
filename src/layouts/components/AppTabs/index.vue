<template>
  <div class="app-tabs">
    <!-- <vab-fold v-if="layout === 'common'" /> -->
    <el-tabs
      v-model="tabActive"
      :class="{
        ['app-tabs-content-' + theme.tabsBarStyle]: true,
      }"
      class="app-tabs-content"
      type="card"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
    >
      <el-tab-pane
        v-for="item in visitedViews"
        :key="item.path"
        :closable="!isNoClosable(item)"
        :name="item.path"
      >
        <template #label>
          <span
            class="tab-item-content"
            @contextmenu.prevent="openMenu($event, item)"
          >
            <span v-if="theme.showTabsBarIcon && item.meta.icon">
              <AppSvg class="menu-icon" :icon-name="item.meta.icon" size="16" />
            </span>
            <span>{{ item.meta.title }}</span>
          </span>
        </template>
      </el-tab-pane>
    </el-tabs>

    <el-dropdown @command="handleCommand" @visible-change="handleVisibleChange">
      <span :class="{ 'app-tabs-more-active': active }" class="app-tabs-more">
        <span class="app-tabs-more-icon">
          <i class="box box-t"></i>
          <i class="box box-b"></i>
        </span>
      </span>
      <template #dropdown>
        <el-dropdown-menu class="tabs-more">
          <el-dropdown-item command="closeOthersTabs">
            <!-- <vab-icon icon="close-line" /> -->
            <span>
              {{ "关闭其他" }}
            </span>
          </el-dropdown-item>
          <el-dropdown-item command="closeLeftTabs">
            <!-- <vab-icon icon="arrow-left-line" /> -->
            <span>
              {{ "关闭左侧" }}
            </span>
          </el-dropdown-item>
          <el-dropdown-item command="closeRightTabs">
            <!-- <vab-icon icon="arrow-right-line" /> -->
            <span>
              {{ "关闭右侧" }}
            </span>
          </el-dropdown-item>
          <el-dropdown-item command="closeAllTabs">
            <!-- <vab-icon icon="close-line" /> -->
            <span>
              {{ "关闭全部" }}
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <ul
      v-if="visible"
      :style="{ left: left + 'px', top: top + 'px' }"
      class="contextmenu el-dropdown-menu el-dropdown-menu--small"
    >
      <li
        :class="{ 'is-disabled': visitedViews.length === 1 }"
        class="el-dropdown-menu__item"
        @click="closeOthersTabs"
      >
        <!-- <vab-icon icon="close-line" /> -->
        <span>{{ "关闭其他" }}</span>
      </li>
      <li
        :class="{ 'is-disabled': !visitedViews.indexOf(hoverRoute) }"
        class="el-dropdown-menu__item"
        @click="closeLeftTabs"
      >
        <!-- <vab-icon icon="arrow-left-line" /> -->
        <span>{{ "关闭左侧" }}</span>
      </li>
      <li
        :class="{
          'is-disabled':
            visitedViews.indexOf(hoverRoute) === visitedViews.length - 1,
        }"
        class="el-dropdown-menu__item"
        @click="closeRightTabs"
      >
        <!-- <vab-icon icon="arrow-right-line" /> -->
        <span>{{ "关闭右侧" }}</span>
      </li>
      <li class="el-dropdown-menu__item" @click="closeAllTabs">
        <!-- <vab-icon icon="close-line" /> -->
        <span>{{ "关闭全部" }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { onMounted, computed, watch, ref } from "vue";
import { useAppStore } from "@/store/modules/app";
import { usePermissionStore } from "@/store/modules/permission";
import { useTagsViewStore } from "@/store/modules/tagsView";
import AppSvg from "@/components/app-svg/index.vue";
import {
  ElTabs,
  ElTabPane,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from "element-plus";

const tabActive = ref("");
const active = ref("");
const visible = ref(false);
const left = ref(0);
const top = ref(0);
const hoverRoute = ref(null);
// const visitedViews = ref([]);
const router = useRouter();
const { currentRoute } = router;
const appStore = useAppStore();
const permissionStore = usePermissionStore();
const tagsViewStore = useTagsViewStore();

const theme = computed(() => appStore.getTheme);
const visitedViews = computed(() => {
  const list = tagsViewStore.getVisitedViews;
  // 根据是否固定标签排序 固定标签在非固定标签前面
  return list.sort((a, b) => (a.meta && a.meta.affix ? -1 : 1));
});

function handleTabClick(item) {
  const i = visitedViews.value.findIndex((v) => v.path === item.props.name);
  const tag = visitedViews.value[i];
  router.push(tag.fullPath);
}
function handleTabRemove(key) {
  const i = visitedViews.value.findIndex((v) => v.path === key);
  const tag = visitedViews.value[i];
  const selectedTag = tagsViewStore.getSelectedTag;
  if (selectedTag.fullPath === key) {
    if (i === 0 && visitedViews.value.length > 1) {
      const newTag = visitedViews.value[1];
      router.push(newTag.path);
    } else if (i - 1 > -1 && i - 1 < visitedViews.value.length) {
      const newTag = visitedViews.value[i - 1];
      router.push(newTag.path);
    }
  }
  tagsViewStore.delView(tag);
}
function isNoClosable(tag) {
  return tag.meta && tag.meta.noClosable;
}
function openMenu() {}
function handleCommand(command) {
  switch (command) {
    case "closeOthersTabs":
      tagsViewStore.delOthersVisitedViews(currentRoute.value);
      break;
    case "closeLeftTabs":
      tagsViewStore.delLeftViews(currentRoute.value);
      break;
    case "closeRightTabs":
      tagsViewStore.delRightViews(currentRoute.value);
      break;
    case "closeAllTabs":
      tagsViewStore.delAllVisitedViews();
      router.push("/admin-home");
      break;
  }
}
function handleVisibleChange() {}

// 新增tag
function addTags() {
  const { name } = currentRoute.value;
  if (name) {
    tagsViewStore.setSelectedTag(currentRoute.value);
    tagsViewStore.addView(currentRoute.value);
  }
}
watch(
  () => currentRoute.value,
  () => {
    tabActive.value = currentRoute.value.path;
    addTags();
    // moveToCurrentTag()
  },
  {
    immediate: true,
  }
);
</script>
<style lang="scss" scoped>
.app-tabs {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  min-height: var(--el-tabs-height);
  padding-right: var(--el-padding);
  padding-left: var(--el-padding);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background: var(--el-color-white);
  position: relative;

  // box-sizing: border-box;
  // display: flex;
  // align-content: center;
  // align-items: center;
  // justify-content: space-between;
  // min-height: $base-tabs-height;
  // padding-right: $base-padding;
  // padding-left: $base-padding;
  // user-select: none;
  // background: $base-color-white;
  // border-top: 1px solid #f6f6f6;

  .fold-unfold {
    margin-right: $base-margin;
  }

  [class*="ri"] {
    margin-right: 3px;
  }
    &-content {
      width: calc(100% - 40px);
      &-card {
        height: $base-tag-item-height;
        :deep(.el-tabs__header) {
          border-bottom: 0;
          margin-bottom: 0px;
          .el-tabs__nav-wrap{
            .el-tabs__nav-next, .el-tabs__nav-prev{
              display: flex;
              justify-content: center;
              align-items: center;
              height: 34px;
              // background-color: silver;
            }
          }
          .el-tabs__nav {
            border: 0;
          }

          .el-tabs__item {
            box-sizing: border-box;
            height: var(--el-tab-item-height);
            margin-right: 5px;
            border: 1px solid var(--el-border-color) !important;
            border-radius: var(--el-border-radius-base) !important;
            .tab-item-content {
              display: flex;
              align-items: center;
              .app-svg {
                margin-top: 5px;
                margin-right: 3px;
              }
            }
            &.is-active {
              color: $base-color-blue;
              background: mix($base-color-white, $base-color-blue, 90%);
              border: 1px solid $base-color-blue !important;
              outline: none;
            }

            &:hover {
              border: 1px solid $base-color-blue !important;
            }
          }
        }
      }
    }

    &-smart {
      height: $base-tag-item-height;
      :deep(.el-tabs__nav-next, .el-tabs__nav-prev) {
        height: $base-tag-item-height;
        line-height: $base-tag-item-height;
      }
      .el-tabs__header {
        border-bottom: 0;

        .el-tabs__nav {
          border: 0;
        }

        .el-tabs__item {
          height: $base-tag-item-height;
          margin-right: 5px;
          line-height: $base-tag-item-height;
          border: 0;
          outline: none;
          transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;

          &.is-active {
            background: mix($base-color-white, $base-color-blue, 90%);
            outline: none;

            &:after {
              width: 100%;
              transition: $base-transition;
            }
          }

          &:after {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            content: "";
            background-color: $base-color-blue;
            transition: $base-transition;
          }

          &:hover {
            background: mix($base-color-white, $base-color-blue, 90%);

            &:after {
              width: 100%;
              transition: $base-transition;
            }
          }
        }
      }
    }

    &-smooth {
      height: $base-tag-item-height + 4;

      :deep(.el-tabs__nav-next, .el-tabs__nav-prev) {
        height: $base-tag-item-height;
        line-height: $base-tag-item-height;
      }

      .el-tabs__header {
        border-bottom: 0;

        .el-tabs__nav {
          border: 0;
        }

        .el-tabs__item {
          height: $base-tag-item-height + 4;
          padding: 0 30px 0 30px;
          // margin-top: ($base-tabs-height - $base-tag-item-height - 4)/2;
          margin-right: -18px;
          line-height: $base-tag-item-height + 4;
          text-align: center;
          border: 0;
          outline: none;
          transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;

          &.is-active {
            padding: 0 30px 0 30px;
            color: $base-color-blue;
            background: mix($base-color-white, $base-color-blue, 90%);
            outline: none;
            mask: url("src/assets/app-tabs/vab-tab.png");
            mask-size: 100% 100%;

            &:hover {
              padding: 0 30px 0 30px;
              color: $base-color-blue;
              background: mix($base-color-white, $base-color-blue, 90%);
              mask: url("src/assets/app-tabs/vab-tab.png");
              mask-size: 100% 100%;
            }
          }

          &:hover {
            padding: 0 30px 0 30px;
            color: $base-color-black;
            background: #dee1e6;
            mask: url("src/assets/app-tabs/vab-tab.png");
            mask-size: 100% 100%;
          }
        }
      }
    }

    .contextmenu {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
    }

    &-more {
      position: relative;
      top: 2px;
      &-active,
      &:hover {
        &:after {
          position: absolute;
          bottom: -1px;
          left: 0;
          height: 0;
          content: "";
        }

        .app-tabs-more-icon {
          transform: rotate(90deg);

          .box-t {
            &:before {
              transform: rotate(45deg);
            }
          }

          .box:before,
          .box:after {
            background: $base-color-blue;
          }
        }
      }

      &-icon {
        display: inline-block;
        color: #9a9a9a;
        cursor: pointer;
        transition: transform 0.3s ease-out;

        .box {
          position: relative;
          display: block;
          width: 14px;
          height: 8px;

          &:before {
            position: absolute;
            top: 0;
            left: 0px;
            width: 6px;
            height: 6px;
            content: "";
            background: #9a9a9a;
          }

          &:after {
            position: absolute;
            top: 0;
            left: 8px;
            width: 6px;
            height: 6px;
            content: "";
            background: #9a9a9a;
          }
        }

        .box-t {
          &:before {
            transition: transform 0.3s ease-out 0.3s;
          }
        }
      }
    }
}
</style>
