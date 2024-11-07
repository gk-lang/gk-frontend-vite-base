<!-- xxx -->
<template>
  <div class="archive-manage auto-container">
    <div class="main-content">
      <el-card shadow="never" class="search-bar">
        <DynamicForm
          ref="searchFormRef"
          isSearchBar
          :formItems="searchFormItems"
          v-model="formData"
          @notify="handleDynamicFormNotify"
        />
      </el-card>
      <el-card
        shadow="never"
        class="btn-bar"
        v-if="searchButtons.length || tableButtons.length"
      >
        <ButtonsBar :buttons="searchButtons" @click="handleButtonsClick" />
        <ButtonsBar :buttons="tableButtons" @click="handleButtonsClick" />
      </el-card>
      <DynamicTable
        border
        class="table-container"
        :id="'main-table'"
        :loading="tableLoading"
        :columns="tableColumns"
        v-model="tableData"
        v-model:page="tablePage"
        @notify="handleDynamicTableNotify"
      >
        <template #operation="{ row }">
          <template v-for="item in tableOperationButtons" :key="item._id">
            <el-link
              v-if="item.widgetAttrs.show"
              :type="item.widgetAttrs.type"
              :disabled="item.widgetAttrs.disabled"
              :underline="false"
              @mousedown="(e) => e.stopPropagation()"
              @click="handleTableOperation({ row, btnItem: item })"
              >{{ item.name }}</el-link
            >
          </template>
        </template>
      </DynamicTable>
    </div>
    <DialogAddOrEdit
      v-model:isShow="dialogAddOrEditIsShow"
      :editFormData="editOpenAppData"
      @save="handleDialogAddOrEditSave"
    />
  </div>
</template>

<script lang="jsx" setup>
import { ref, watch, computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

import {
  ElCard,
  ElTooltip,
  ElLink,
  ElButton,
  ElPopconfirm,
  ElTree,
  ElInput,
} from "element-plus";
import AppSvg from "@/components/app-svg/index.vue";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DynamicTable from "@/components/dynamic-widget/dynamic-table.vue";
import ButtonsBar from "@/components/buttons-bar/buttons-bar.vue";
import { useUserStore } from "@/store/modules/user";

import DialogAddOrEdit from "./dialog-add-or-edit.vue";

import {
  searchFormItems,
  searchButtons,
  tableButtons,
  tableOperationButtons,
  tableColumns,
} from "./json-config.jsx";

import useBtnEventHandle from "./use-btn-event-handle.js";
// import DialogAddOrEdit from './dialog/DialogAddOrEdit'
const treeRef = ref();
// const tableOperationButtons = ref([]);
const treeFilterText = ref("");

const router = useRouter();
const userStore = useUserStore();

const user = computed(() => userStore.getUserInfo);

const handleObj = useBtnEventHandle({
  router,
  user,
  searchFormItems,
  tableColumns,
});
const {
  searchFormRef,
  tableLoading,
  tablePage,
  formData,
  tableData,
  treeData,
  editTableRowData,
  editOpenAppData,
  dialogAddOrEditIsShow,
  openDialogAddOrEdit,
  removeTreeNode,
  handleTableOperation,
  handleTreeNodeClick,
} = handleObj;
watch(treeFilterText, (val) => {
  treeRef.value.filter(val);
});
function filterNode(value, data) {
  if (!value) return true;
  return data.label.includes(value);
}
function handleDynamicFormNotify(params) {
  if (params.clickedBtn) {
    handleObj[params.clickedBtn.eventKey](params.clickedBtn, params.resolve);
  }
}
function handleDynamicTableNotify(params) {
  if (
    ["size-change", "current-change"].includes(params.eventType) &&
    params.page
  ) {
    handleObj.handlePageChange(params.page);
  }
  if (params.clickedBtn) {
    handleObj[params.clickedBtn.eventKey](params);
  }
  if (["selection-change"].includes(params.eventType)) {
    handleObj.selectionChange(params);
  }
}

function handleButtonsClick(event, btnItem, resolve) {
  handleObj[btnItem.eventKey](btnItem, resolve);
}
function handleDialogAddOrEditSave(saveFlag) {
  if (saveFlag) {
    handleObj.searchTableData();
  }
}

onBeforeMount(async () => {
  // const btnMap = await getButtonsData()
  // tableOperationButtons.value = btnMap.value.tableOperationButtons || []
  // searchButtons.value = btnMap.value.searchButtons || []
  // tableButtons.value = btnMap.value.tableButtons || []
  if (!tableOperationButtons.value || !tableOperationButtons.value.length) {
    tableColumns.value = tableColumns.value.filter(
      (x) => x.slot !== "operation"
    );
  }
});
</script>

<style lang="scss" scoped>
.archive-manage {
  height: var(--el-container-height);
  display: flex;
  justify-content: space-between;
  .main-content {
    // width: calc(100% - 10px);
    height: 100%;
    display: flex;
    flex-direction: column;
    .table-container {
      height: calc(100% - 114px);
      :deep(.el-table) {
        .operation {
          .cell {
            display: flex;
            justify-content: space-around;
          }
        }
      }
    }
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
:deep(.btn-bar.el-card) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: 0px;
  .el-card__body {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
