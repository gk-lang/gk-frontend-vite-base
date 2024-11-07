<!-- 应用审核 -->
<template>
  <div class="app-approve auto-container">
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
      <DynamicTable
        border
        class="table-container"
        :id="'main-table'"
        :loading="tableLoading"
        :columns="approveTableColumns"
        v-model="tableData"
        v-model:page="tablePage"
        @notify="handleDynamicTableNotify"
      >
      </DynamicTable>
    </div>
    <DialogApprove
      v-model:isShow="dialogApproveIsShow"
      :editFormData="editTableRowData"
      @save="handleDialogSave"
    />
  </div>
</template>

<script lang="jsx" setup>
import { ref, watch, computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { ElCard, ElLink } from "element-plus";
import DialogApprove from "./dialog-approve.vue";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DynamicTable from "@/components/dynamic-widget/dynamic-table.vue";
import { useUserStore } from "@/store/modules/user";
import useBtnEventHandle from "./use-btn-event-handle.js";
import {
  searchFormItems,
  searchButtons,
  tableButtons,
  tableOperationButtons,
  tableColumns,
} from "./json-config.jsx";

const router = useRouter();
const userStore = useUserStore();
const user = computed(() => userStore.getUserInfo);
const approveTableColumns = ref([]);
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
  editTableRowData,
  dialogApproveIsShow,
  openApproveDialog,
} = handleObj;

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

function handleDialogSave(saveFlag) {
  if (saveFlag) {
    handleObj.searchTableData();
  }
}

onBeforeMount(async () => {
  approveTableColumns.value = tableColumns.value.concat({
    label: "操作",
    align: "center",
    fixed: "right",
    width: 100,
    sortable: false,
    prop: "operation",
    render: (h, scope) => {
      return (
        <div class="operation">
          <ElLink
            type="primary"
            underline={false}
            disabled={scope.row?.approveStatus !== 0}
            onMousedown={(e) => e.stopPropagation()}
            onClick={() => openApproveDialog(scope.row)}
          >
            审批
          </ElLink>
        </div>
      );
    },
  });
});
</script>

<style lang="scss" scoped>
.app-approve {
  height: var(--el-container-height);
  display: flex;
  justify-content: space-between;
  .main-content {
    // width: calc(100% - 10px);
    height: 100%;
    display: flex;
    flex-direction: column;
    .table-container {
      height: calc(100% - 64px);
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
