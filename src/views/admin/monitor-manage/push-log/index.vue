<!-- 推送类日志查询 -->
<template>
  <div class="push-log auto-container">
    <el-card shadow="never" class="search-bar">
      <DynamicForm
        ref="searchFormRef"
        isSearchBar
        :formItems="searchFormItems"
        v-model="formData"
        @notify="handleDynamicFormNotify"
      />
    </el-card>
    <DynamicTable
      border
      class="table-container"
      :id="'main-table1'"
      :loading="tableLoading1"
      :columns="tableColumns1"
      v-model="tableData1"
      v-model:page="tablePage1"
      @notify="handleDynamicTableNotify1"
    >
    </DynamicTable>
    <LogDetailDialog v-model:isShow="isShowLogDetailDialog" :editData="editTableRowData1" @save="searchTableData"/>
  </div>
</template>

<script setup>
import {
  ElCard,
  ElTabs,
  ElTabPane,
  ElButton
} from "element-plus";
import { ref,computed, onBeforeMount } from 'vue'
import DynamicForm from '@/components/dynamic-widget/dynamic-form.vue'
import DynamicTable from '@/components/dynamic-widget/dynamic-table.vue'
// import ButtonsBar from '@/components/buttons-bar/buttons-bar.vue'
// import { getButtonsData } from '@/components/buttons-bar/common.js'
import { searchFormItems, tableColumns1,tableColumns2 } from './jsonConfig.js'
import useBtnEventHandle from './useBtnEventHandle.js'

import { useUserStoreWithOut } from "@/store/modules/user";

import LogDetailDialog from "../components/log-detail-dialog.vue";
const userStore = useUserStoreWithOut();
const user = computed(() => userStore.getUserInfo || {});

const searchButtons = ref([])
const tableButtons = ref([])
const tableOperationButtons = ref([])

const handleObj = useBtnEventHandle(searchFormItems,user)

const {
  searchFormRef,
  tableLoading1,
  tablePage1,
  tableData1,
  tableLoading2,
  tablePage2,
  tableData2,
  formData,
  tabActiveKey,
  isShowLogDetailDialog,
  editTableRowData1,
  searchTableData
} = handleObj

function handleClick(tab, event) {}

function handleDynamicFormNotify(params) {
  if (params.clickedBtn) {
    handleObj[params.clickedBtn.eventKey](params.clickedBtn, params.resolve)
  }
  if (params.remoteSearchMethodKey === 'searchWarehouse') {
    handleObj.searchWarehouse(params)
  }
}

function handleDynamicTableNotify1(params) {
  if (
    ['size-change', 'current-change'].includes(params.eventType) &&
    params.page
  ) {
    handleObj.handlePageChange1(params.page)
  }
  if (params.clickedBtn) {
    handleObj[params.clickedBtn.eventKey](params)
  }
  if (['selection-change'].includes(params.eventType)) {
    handleObj.selectionChange1(params)
  }
}
function handleDynamicTableNotify2(params) {
  if (
    ['size-change', 'current-change'].includes(params.eventType) &&
    params.page
  ) {
    handleObj.handlePageChange2(params.page)
  }
  if (params.clickedBtn) {
    handleObj[params.clickedBtn.eventKey](params)
  }
  if (['selection-change'].includes(params.eventType)) {
    handleObj.selectionChange2(params)
  }
}
function handleButtonsClick(event, btnItem, resolve) {
  handleObj[btnItem.eventKey](btnItem, resolve)
}

function handleDialogAddOrEditSave(saveFlag) {
  if (saveFlag) {
    handleObj.searchTableData()
  }
}

onBeforeMount(async () => {
  // const btnMap = await getButtonsData()
  // tableOperationButtons.value = btnMap.value.tableOperationButtons || []
  // searchButtons.value = btnMap.value.searchButtons || []
  // tableButtons.value = btnMap.value.tableButtons || []
  // if (!tableOperationButtons.value || !tableOperationButtons.value.length) {
  //   tableColumns.value = tableColumns.value.filter(x => x.slot !== 'operation')
  // }
})
</script>

<style lang="scss" scoped>
.push-log {
  height: var(--el-container-height);
  display: flex;
  flex-direction: column;
  .table-container {
    flex: 1;
    height: 0;
  }
}
.read-the-docs {
  color: #888;
}
:deep(.search-bar.el-card) {
  margin-bottom: 10px;
  .el-card__body {
    padding: 10px 10px 10px 0px;
  }
}
:deep(.tabs-bar.el-card) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: 0px;
  display: flex;
  .el-card__body {
    padding: 10px;
    display: flex;

    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 0px;
    padding-bottom: 5px;
    .el-tabs {
      flex: 1;
      .el-tabs__header {
        margin-bottom: 5px;
        .el-tabs__nav {
          width: 100%;
          .el-tabs__item {
            padding: 20px 0px;
            width: 50%;
            font-weight: bold;
            color: #999;
            font-size: 14px;
            &.is-active {
              color: var(--el-color-primary);
            }
          }
        }
      }
      .el-tabs__content {
        display: none;
      }
    }
  }
}
</style>
