<template>
  <div class="portal-header-menu">
    <div
      class="tag"
      v-for="tab in menuTabList"
      :style="{ width: tab.width }"
      @click="handleMainMenuItemClick(tab)"
    >
      <el-dropdown
        :hide-on-click="false"
        v-if="tab.children && tab.children.length"
      >
        <span class="el-dropdown-link">
          {{ tab.title }}
        </span>
        <template #dropdown>
          <ElScrollbar>
            <div class="ft-nav-develop-container">
              <div class="develop-type" v-for="menuItem in tab.children">
                <div class="name">{{ menuItem.title }}</div>
                <div class="develop-item-wrapper">
                  <div
                    @click="handleSubMenuItemClick(subMenuItem, menuItem, tab)"
                    :class="[
                      'develop-item',
                      {
                        actived: subMenuActiveId == subMenuItem.id
                      },
                    ]"
                    v-for="subMenuItem in menuItem.children"
                  >
                    {{ subMenuItem.title }}
                  </div>
                </div>
              </div>
            </div>
          </ElScrollbar>
        </template>
      </el-dropdown>
      <span v-else class="el-dropdown-link">{{ tab.title }}</span>
      <div v-show="tab.isSelected" class="nav-underline"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import {
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElScrollbar,
} from "element-plus";
import {
  queryApiDocTypeTree,
  deleteApiDocType,
  queryApiDocList,
  deleteApiDoc,
} from "@/api/archive";
import { findPathAll, findPath, eachTree } from "@/utils/tree.js";
const router = useRouter();
const currentRoute = router.currentRoute;
const menuActiveId = ref("");
const subMenuActiveId = ref("");
const menuTabList = ref([
  {
    title: "首页",
    width: "60px",
    menu: "home",
    isSelected: true,
  },
  {
    title: "开发文档",
    width: "70px",
    menu: "api",
    isSelected: false,
    children: [
      // {
      //   title: "地址服务1",
      //   name: "api_1",
      //   children: [
      //     {
      //       title: "地址级别判断1",
      //       path: "/portal/test1",
      //       name: "test1",
      //     },
      //     {
      //       title: "地址级别判断2",
      //       path: "/portal/test2",
      //       name: "test2",
      //     },
      //     {
      //       title: "地址级别判断3",
      //       path: "/portal/test3",
      //       name: "test3",
      //     },
      //     {
      //       title: "地址级别判断4",
      //       path: "/portal/test4",
      //       name: "test4",
      //     },
      //     {
      //       title: "地址级别判断5",
      //       path: "/portal/test5",
      //       name: "test5",
      //     },
      //     {
      //       title: "地址级别判断6",
      //       path: "/portal/test6",
      //       name: "test6",
      //     },
      //     {
      //       title: "地址级别判断7",
      //       path: "/portal/test7",
      //       name: "test7",
      //     },
      //     {
      //       title: "地址级别判断8",
      //       path: "/portal/test8",
      //       name: "test8",
      //     },
      //   ],
      // },
      // {
      //   title: "地址服务2",
      //   name: "api_2",
      //   children: [
      //     {
      //       title: "地址级别判断1",
      //       path: "/portal/test1",
      //       name: "test1",
      //     },
      //     {
      //       title: "地址级别判断2",
      //       path: "/portal/test2",
      //       name: "test2",
      //     },
      //     {
      //       title: "地址级别判断3",
      //       path: "/portal/test3",
      //       name: "test3",
      //     },
      //     {
      //       title: "地址级别判断4",
      //       path: "/portal/test4",
      //       name: "test4",
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "解决方案",
    width: "70px",
    menu: "solution",
    isSelected: false,
    children: [
      // {
      //   title: "地址服务1",
      //   name: "solution_1",
      //   children: [
      //     {
      //       title: "地址级别判断1",
      //       path: "/portal/test1",
      //       name: "test1",
      //     },
      //     {
      //       title: "地址级别判断2",
      //       path: "/portal/test2",
      //       name: "test2",
      //     },
      //     {
      //       title: "地址级别判断3",
      //       path: "/portal/test3",
      //       name: "test3",
      //     },
      //     {
      //       title: "地址级别判断4",
      //       path: "/portal/test4",
      //       name: "test4",
      //     },
      //   ],
      // },
      // {
      //   title: "地址服务2",
      //   name: "solution_2",
      //   children: [
      //     {
      //       title: "地址级别判断1",
      //       path: "/portal/test1",
      //       name: "test1",
      //     },
      //     {
      //       title: "地址级别判断2",
      //       path: "/portal/test2",
      //       name: "test2",
      //     },
      //     {
      //       title: "地址级别判断3",
      //       path: "/portal/test3",
      //       name: "test3",
      //     },
      //     {
      //       title: "地址级别判断4",
      //       path: "/portal/test4",
      //       name: "test4",
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "服务与支持",
    width: "85px",
    menu: "support",
    isSelected: false,
    children: [
      // {
      //   title: "地址服务1",
      //   name: "support_1",
      //   children: [
      //     {
      //       title: "地址级别判断1",
      //       path: "/portal/test1",
      //       name: "test1",
      //     },
      //     {
      //       title: "地址级别判断2",
      //       path: "/portal/test2",
      //       name: "test2",
      //     },
      //     {
      //       title: "地址级别判断3",
      //       path: "/portal/test3",
      //       name: "test3",
      //     },
      //     {
      //       title: "地址级别判断4",
      //       path: "/portal/test4",
      //       name: "test4",
      //     },
      //   ],
      // },
      // {
      //   title: "地址服务2",
      //   name: "support_2",
      //   children: [
      //     {
      //       title: "地址级别判断1",
      //       path: "/portal/test1",
      //       name: "test1",
      //     },
      //     {
      //       title: "地址级别判断2",
      //       path: "/portal/test2",
      //       name: "test2",
      //     },
      //     {
      //       title: "地址级别判断3",
      //       path: "/portal/test3",
      //       name: "test3",
      //     },
      //     {
      //       title: "地址级别判断4",
      //       path: "/portal/test4",
      //       name: "test4",
      //     },
      //   ],
      // },
    ],
  },
]);
function handleMainMenuItemClick(item) {
  if (!item.children?.length) {
    // menuTabList.value.forEach((x) => (x.isSelected = false));
    // item.isSelected = true;
    if (item.menu === "home") {
      router.push(`/portal/home?menu=${item.menu}`);
    }
  }
}
function handleSubMenuItemClick(subMenuItem, menuItem, tab) {
  // const list = findPath(menuTabList.value, (x) => x.key === subMenuItem.key);
  // menuTabList.value.forEach((x) => (x.isSelected = false));
  // tab.isSelected = true;
  const menuPath = menuItem.id + "," + subMenuItem.id;
  const menu = menuItem.menu;
  if(menu === 'api'){
    router.push(`/portal/api?menuPath=${menuPath}&menu=${menu}`);
  }else{
    router.push(`/portal/api-detail?menuPath=${menuPath}&menu=${menu}&id=${subMenuItem.id}`);
  }
}
function updateSelectedTab() {
  const menuPath=currentRoute.value.query.menuPath
  if (menuPath) {
    menuActiveId.value = menuPath.split(",")[0];
    subMenuActiveId.value = menuPath.split(",")[1];
  }
  const menu = currentRoute.value.query.menu;
  if(menu){
    menuTabList.value.forEach((x) => (x.isSelected = false));
    const item = menuTabList.value.find((x) => x.menu === menu);
    item.isSelected = true;
  }
}
async function loadMenuData() {
  const resp = await queryApiDocTypeTree({
    parentId: 0,
    queryAllSub: 1,
    level: 100,
  });
  eachTree(resp.data, (item) => {
    item.title = item.name;
    item.name = item.typeKey;
  });
  const apiRootNode = menuTabList.value.find((x) => x.menu === "api");
  const solutionRootNode = menuTabList.value.find((x) => x.menu === "solution");
  const supportRootNode = menuTabList.value.find((x) => x.menu === "support");
  const apiRoot = resp.data.find((x) => x.menu === 'api')
  apiRootNode.children = apiRoot?.children || [];
  // 开发文档以外的菜单直接放文档，点击后直接打开文档
  const solutionRoot = resp.data.find((x) => x.menu === 'solution')
  const supportRoot = resp.data.find((x) => x.menu === 'support')
  const solutionIds=solutionRoot?.children?.map(x=>x.id) || []
  const supportIds=supportRoot?.children?.map(x=>x.id)|| []
  let apiDocTypeIds = [...solutionIds,...supportIds]
  const resp2 = await queryApiDocList({
    apiDocTypeIds:apiDocTypeIds.join(),
    pageNo:1,
    pageSize:999999
  });
  const list = resp2?.data?.dataList || []
  list.forEach(x=>{
    x.title = x.name
  })
  if(solutionRoot){
    solutionRoot.children.forEach(item => {
      item.menu = solutionRoot.menu
      item.children = list.filter(x => x.apiDocTypeId === item.id)
    })
    solutionRootNode.children = solutionRoot.children;
  }
  if(supportRoot){
    supportRoot.children.forEach(item => {
      item.menu = supportRoot.menu
      item.children = list.filter(x => x.apiDocTypeId === item.id)
    })
    supportRootNode.children = supportRoot.children;
  }
}
watch(
  () => currentRoute.value.fullPath,
  (nv) => {
    
    updateSelectedTab();
  }
);
onMounted(() => {
  updateSelectedTab();
  loadMenuData();
});
</script>
<style lang="scss" scoped>
.portal-header-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 400px;
  .tag {
    position: relative;
    text-align: center;

    .nav-underline {
      width: 100%;
      position: absolute;
      bottom: 0;
      display: block;
      height: 3px;
      background-color: #ed0014;
      transition: all 0.2s ease-out;
    }
    .el-dropdown-link {
      font-size: 16px;
      cursor: pointer;
      outline: none !important;
      height: 56px;
      line-height: 56px;
      color: #222;
      &:hover {
        color: #2562ff;
        cursor: pointer;
      }
    }
    :deep(.el-dropdown) {
    }
  }
}
.ft-nav-develop-container {
  display: flex;
  margin: 16px 20px;
  .develop-type {
    margin: 0px 10px;
    .name {
      font-size: 14px;
      color: #222;
      line-height: 20px;
      border-bottom: 1px solid #d3d9e4;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: rgb(211, 217, 228);
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    .develop-item-wrapper {
      height: 200px;
      display: grid;
      grid-auto-flow: column;
      gap: 10px;
      grid-template-rows: repeat(auto-fill, 24px);
      margin-right: 20px;
      .develop-item {
        padding-right: 10px;
        font-size: 14px;
        color: #222;
        line-height: 17px;
        margin-bottom: 16px;
        cursor: pointer;
        &:hover {
          color: blue;
        }
        &.actived {
          color: blue;
        }
      }
    }
  }
}
</style>
