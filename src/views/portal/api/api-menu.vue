<template>
  <ElScrollbar class="service-tree-container">
    <div class="search-input"></div>
    <div v-if="isShowLeftMenu">
      <el-menu
        :default-active="subMenuActiveId"
        class="el-menu-vertical"
        :default-openeds="defaultOpeneds"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="item in menuList">
          <template v-if="item.children && item.children.length">
            <el-sub-menu :index="item.id">
              <template #title>
                <span>{{ item.title }}</span>
              </template>
              <template v-for="childItem in item.children">
                <template v-if="childItem.children">
                  <el-sub-menu :index="childItem.id">
                    <template #title>{{ childItem.title }}</template>
                    <el-menu-item
                      v-for="cItem in childItem.children"
                      :index="cItem.id"
                      @click="handleMenuItemClick(cItem)"
                      >{{ cItem.title }}</el-menu-item
                    >
                  </el-sub-menu>
                </template>
                <template v-else>
                  <el-menu-item
                    :index="childItem.id"
                    @click="handleMenuItemClick(childItem)"
                    >{{ childItem.title }}</el-menu-item
                  >
                </template>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.id" @click="handleMenuItemClick(item)">
              <span>{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </ElScrollbar>
</template>
<script setup>
import { ref, watch, onMounted, computed } from "vue";
import {
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElInput,
  ElButton,
  ElScrollbar,
  ElCarousel,
  ElCarouselItem,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElIcon,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from "element-plus";
import {
  queryApiDocTypeTree,
  deleteApiDocType,
  queryApiDocList,
  deleteApiDoc,
} from "@/api/archive";
import { useRouter } from "vue-router";
import { eachTree, findNode } from "@/utils/tree.js";
const emits = defineEmits(["update:selectedTreeItem"]);

const props = defineProps({
  selectedTreeItem: {
    type: String,
    default: () => "",
  },
});

const router = useRouter();
const currentRoute = router.currentRoute;
const menuKey = ref("");
const menuActiveId = ref("");
const subMenuActiveId = ref("");
const isShowLeftMenu = ref(true);
const menuList = ref([]);
function handleOpen() {}
function handleClose() {}
function refreshMenu() {
  isShowLeftMenu.value = false;
  setTimeout(() => {
    isShowLeftMenu.value = true;
    const menuItem = findNode(
      menuList.value,
      (x) => x.id == subMenuActiveId.value
    );
    handleMenuItemClick(menuItem);
  });
}
async function loadMenuData() {
  const resp = await queryApiDocTypeTree({
    parentId: 0,
    queryAllSub: 1,
    level: 100,
  });
  eachTree(resp.data, (item) => {
    item.id = item.id + "";
    item.title = item.name;
  });
  const menu = currentRoute.value.query.menu;
  const root = resp.data.find((x) => x.menu === menu);
  menuList.value = root.children || []
  refreshMenu();
}
function handleMenuItemClick(item) {
  if(item){
    const menuPath = menuActiveId.value + "," + item.id;
    router.push(`/portal/api?menuPath=${menuPath}&menu=${menuKey.value}`);
    emits("update:selectedTreeItem", item);
  }
}
const defaultOpeneds = computed(() => {
  return menuList.value.map((x) => x.id);
});
watch(
  () => currentRoute.value.fullPath,
  (nv) => {
    if (currentRoute.value.query.menuPath) {
      menuKey.value = currentRoute.value.query.menu;
      menuActiveId.value = currentRoute.value.query.menuPath.split(",")[0];
      subMenuActiveId.value = currentRoute.value.query.menuPath.split(",")[1];
      if (menuList.value?.length) {
        const menuItem = findNode(
          menuList.value,
          (x) => x.id == subMenuActiveId.value
        );
        handleMenuItemClick(menuItem);
      }
    }
  },
  {
    immediate: true,
  }
);
onMounted(async () => {
  await loadMenuData();
});
</script>
<style lang="scss" scoped>
.service-tree-container {
  //   width: 14rem;
  //   max-height: calc(100vh - 88px);
  //   min-height: calc(100vh - 640px);
  //   background-color: #ebeef5;
  //   overflow: hidden;
  //   position: sticky;
  //   left: 0;
  //   top: 100px;

  height: 100%;
  @mixin menu-style {
    --el-menu-item-height: 46px;
    --el-menu-text-color: #303133;
    --el-menu-hover-text-color: #409eff;
    // --el-menu-bg-color: #ebeef5;
    --el-menu-bg-color: #fff;

    // --el-menu-hover-bg-color: #ebeef5;
    --el-menu-hover-bg-color: #fff;
    --el-menu-sub-item-height: calc(var(--el-menu-item-height) - 6px);
    background-color: var(--el-menu-bg-color);
    border: 0px;
  }
  :deep(.el-menu) {
    @include menu-style();
    .el-sub-menu__title {
      font-weight: 600;
    }
    .el-menu-item {
      &:hover {
        color: var(--el-menu-hover-text-color);
      }
    }
    .el-sub-menu {
      @include menu-style();
      .el-sub-menu__title {
        font-weight: 600;
      }
      .el-menu-item {
        &:hover {
          color: var(--el-menu-hover-text-color);
        }
      }
    }
  }
}
</style>
