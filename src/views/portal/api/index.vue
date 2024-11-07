<template>
  <div class="service-container" >
    <div class="search-wrap">
      <el-input
        v-model="searchText"
        clearable
        style="max-width: 600px"
        placeholder="请输入关键字"
        class="input-with-select"
      >
        <template #append>
          <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
        </template>
      </el-input>
    </div>
    <div class="service-wrap">
      <div class="service-tree">
        <ApiMenu v-model:selectedTreeItem="selectedTreeItem"/>
      </div>
      <div class="service-content">
        <ApiContent :selectedTreeItem="selectedTreeItem" :searchText="searchText" :doSearchTriggerKey="doSearchTriggerKey"/>
      </div>
    </div>
  </div>
</template>
<script  setup>
import { ElButton, ElInput } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { onMounted, onUnmounted, ref } from "vue";
import ApiMenu from "./api-menu.vue";
import ApiContent from "./api-content.vue";
import { useAppStore } from "@/store/modules/app";
const selectedTreeItem = ref({})
const searchText = ref('')
const doSearchTriggerKey = ref('')


const appStore = useAppStore();
onMounted(() => {
  appStore.setIsShowPortalFooter(false)
});
onUnmounted(() => {
  appStore.setIsShowPortalFooter(true)
});
function handleSearch(){
  doSearchTriggerKey.value = Date.now() + '';
}
</script>
<style lang="scss" scoped>
.service-container {
  //   min-height: var(--layout-content-height);
  //   display: flex;
  //   justify-content: space-around;
  //   padding: 0 calc(50% - 650px);
  //   position: relative;
  //   margin-top: 1rem;
  //   margin-bottom: 75px;

  padding: 70px 70px 0px 70px;
  width: 100%;
  height: calc(100vh - 20px);
  box-sizing: border-box;
  .search-wrap{
    margin: 10px auto 30px;
    text-align: center;
  }
  .service-wrap{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: calc(100% - 90px);
    .service-tree {
      width: 240px;
      max-width: 240px;
      background: #fff;
      margin-right: 20px;
      height: 100%;
    }
    .service-content {
      background-color: #fff;
      //   background: #fff;
      padding: 20px;
      flex-grow: 1;
    }
  }
}
</style>
