<template>
  <ElScrollbar class="service-content-container">
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="serviceCode" label="服务代码">
        <template #default="scope">
          <el-link @click="goDocDetailPage(scope.row)" type="danger" :underline="false">{{ scope.row.serviceCode }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="接口名称" />
      <el-table-column prop="shareDesc" label="描述" />
    </el-table>
  </ElScrollbar>
</template>
<script setup>
import { ref,onMounted, watch } from "vue";
import { useRouter } from "vue-router";

import {
  ElTable,
  ElTableColumn,
  ElLink,
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
const router = useRouter();

const props = defineProps({
  selectedTreeItem: {
    type: String,
    default: () => "",
  },
  doSearchTriggerKey: {
    type: String,
    default: () => "",
  },
  searchText: {
    type: String,
    default: () => "",
  }
});
const loading = ref('')
const tableData = ref([]);
import { queryApiDocList } from "@/api/archive";
function goDocDetailPage(row){
  router.push(`/portal/api-detail?id=${row.id}&apiCode=${row.serviceCode}`);
}
async function doSearch(){
  try {
    loading.value = true
    const resp = await queryApiDocList({
      keyword:props.searchText || ''
    });
    if (resp.code === "200") {
      tableData.value = resp.data?.dataList||[]
    }
  } catch (error) {
    console.log(error)
  } finally{
    loading.value = false
  }
}
async function loadApiDocList(item) {
  const params = {
    pageNo: 1,
    pageSize: 999999,
  };
  if (item?.id) {
    params.apiDocTypeId = item.id;
    const resp = await queryApiDocList(params);
    if (resp.code === "200") {
      tableData.value = resp.data?.dataList||[]
    }
  }
}
watch(()=>props.selectedTreeItem?.id,(nv)=>{
  if(props.selectedTreeItem?.id){
    loadApiDocList(props.selectedTreeItem)
  }
})
watch(()=>props.doSearchTriggerKey,(nv)=>{
  if(props.searchText){
    doSearch()
  }else{
    loadApiDocList(props.selectedTreeItem)
  }
})
onMounted(() => {
  loadApiDocList();
});
</script>
<style lang="scss" scoped>
.service-content-container {
  :deep(.el-table) {
    height: 100%;
  }
}
</style>
