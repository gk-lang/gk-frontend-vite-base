<!-- xxx -->
<template>
  <div class="archive-manage auto-container">
    <div class="main-content">
      <el-card shadow="never" class="search-bar">
        <DynamicForm
          ref="appSearchFormRef"
          isSearchBar
          :formItems="appSearchFormItems"
          v-model="appSearchFormData"
          @notify="handleDynamicFormNotify"
        />
      </el-card>
      <DynamicTable
        border
        ref="dataTableRef"
        class="table-container"
        :id="'main-table'"
        :loading="tableLoading"
        :columns="tableColumns"
        v-model="appTableData"
        v-model:page="appTablePage"
        @notify="handleDynamicTableNotify"
      >
      </DynamicTable>
    </div>
    <DialogAddOrEdit
      v-model:isShow="dialogAddOrEditIsShow"
      :editFormData="editOpenAppData"
      @save="handleDialogAddOrEditSave"
    />
    <DialogAppInfo
      v-model:isShow="dialogAppInfoIsShow"
      :editFormData="editOpenAppData"
    />
    <DialogAppApiRelate
      v-model:isShow="dialogAppApiRelateIsShow"
      :editFormData="editOpenAppData"
      @save="handleDialogAddOrEditSave"
    />
  </div>
</template>

<script name="app-list" lang="jsx" setup >
import { ref, watch, computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { ElCard, ElLink } from "element-plus";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DynamicTable from "@/components/dynamic-widget/dynamic-table.vue";
import { useUserStore } from "@/store/modules/user";
import DialogAddOrEdit from "./dialog-add-or-edit.vue";
import DialogAppInfo from "./dialog-app-info.vue";
import DialogAppApiRelate from "./dialog-app-api-relate.vue";
import useBtnEventHandle from "./use-btn-event-handle.js";

import {
  appSearchFormItems,
  appTableOperationButtons,
  appTableColumns,
} from "./json-config.jsx";

const tableColumns = ref(
  appTableColumns.value.concat({
    label: "操作",
    align: "center",
    fixed: "right",
    width: 210,
    sortable: false,
    prop: "operation",
    render: (h, scope) => {
      const row = scope.row;
      let btnList = appTableOperationButtons.value;
      if (row.approveStatus === 1) {
        btnList = appTableOperationButtons.value.filter((x) =>
          [
            "openDialogDetailAppInfo",
            "openDialogAppApiRelateIsShow",
            "openApiListPage",
          ].includes(x.eventKey)
        );
      } else {
        btnList = appTableOperationButtons.value.filter((x) =>
          [
            "openDialogAddOrEdit",
            "openDialogAppApiRelateIsShow",
            "openApiListPage",
          ].includes(x.eventKey)
        );
      }
      return (
        <div class="operation">
          {btnList.map((item) => {
            return (
              <ElLink
                type={item.widgetAttrs.type}
                disabled={item.widgetAttrs.disabled}
                underline={false}
                onMousedown={(e) => e.stopPropagation()}
                onClick={() => handleTableOperation({ row, btnItem: item })}
              >
                {item.name}
              </ElLink>
            );
          })}
        </div>
      );
    },
  })
);

const router = useRouter();
const userStore = useUserStore();

const user = computed(() => userStore.getUserInfo);

const handleObj = useBtnEventHandle({
  router,
  user,
  appSearchFormItems,
  appTableColumns,
});
const {
  appSearchFormRef,
  dataTableRef,
  tableLoading,
  appTablePage,
  appSearchFormData,
  appTableData,
  editOpenAppData,
  dialogAddOrEditIsShow,
  dialogAppInfoIsShow,
  dialogAppApiRelateIsShow,
  handleTableOperation,
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

function handleDialogAddOrEditSave(saveFlag) {
  if (saveFlag) {
    handleObj.searchAppTableData();
  }
}

onBeforeMount(async () => {
  // const btnMap = await getButtonsData()
  // tableOperationButtons.value = btnMap.value.tableOperationButtons || []
  // searchButtons.value = btnMap.value.searchButtons || []
  // tableButtons.value = btnMap.value.tableButtons || []
  if (
    !appTableOperationButtons.value ||
    !appTableOperationButtons.value.length
  ) {
    appTableColumns.value = appTableColumns.value.filter(
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
      height: calc(100% - 64px);
      :deep(.el-table) {
        .operation {
          width: 100%;
          display: flex;
            justify-content: space-around;
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
