<!-- xxx -->
<template>
  <div class="archive-manage auto-container">
    <div class="main-content">
      <div class="top">
        <el-card
          shadow="never"
          class="btn-bar"
          v-if="appSearchFormItems.length || appSearchFormItems.length"
        >
          <div class="title">应用列表</div>
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
          ref="topDyTableRef"
          class="table-container"
          :id="'main-table'"
          :loading="appTableLoading"
          :columns="appTableColumns"
          v-model="appTableData"
          highlight-current-row
          @notify="handleDynamicTableNotify1"
        >
          <template #operation="{ row }">
            <template v-for="item in appTableOperationButtons" :key="item._id">
              <el-link
                v-if="item.widgetAttrs.show"
                :type="item.widgetAttrs.type"
                :disabled="item.widgetAttrs.disabled"
                :underline="false"
                @mousedown="(e) => e.stopPropagation()"
                @click.stop="handleTableOperation({ row, btnItem: item })"
                >{{ item.name }}</el-link
              >
            </template>
          </template>
        </DynamicTable>
      </div>
      <div class="buttom">
        <el-card
          shadow="never"
          class="btn-bar"
          v-if="apiSearchFormItems.length || apiSearchFormItems.length"
        >
          <div class="title">API列表</div>
          <DynamicForm
            ref="apiSearchFormRef"
            isSearchBar
            :formItems="apiSearchFormItems"
            v-model="apiSearchFormData"
            @notify="handleDynamicFormNotify"
          />
        </el-card>
        <DynamicTable
          border
          class="table-container"
          :id="'main-table'"
          :loading="apiTableLoading"
          :columns="apiTableColumns"
          v-model="apiTableData"
          v-model:page="apiTablePage"
          @notify="handleDynamicTableNotify"
        >
          <template #operation="{ row }">
            <template v-for="item in apiTableOperationButtons" :key="item._id">
              <el-link
                v-if="item.widgetAttrs.show"
                :type="item.widgetAttrs.type"
                :disabled="item.widgetAttrs.disabled"
                :underline="false"
                @mousedown="(e) => e.stopPropagation()"
                @click.stop="handleTableOperation({ row, btnItem: item })"
                >{{ item.name }}</el-link
              >
            </template>
          </template>
        </DynamicTable>
      </div>
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

<script lang="jsx" setup>
import { ref, watch, computed, onBeforeMount, onMounted, nextTick } from "vue";
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
import DialogAppInfo from "./dialog-app-info.vue";
import DialogAppApiRelate from "./dialog-app-api-relate.vue";

import {
  appSearchFormItems,
  apiSearchFormItems,
  appTableOperationButtons,
  apiTableOperationButtons,
  appTableColumns,
  apiTableColumns,
} from "./json-config.jsx";
import useBtnEventHandle from "./use-btn-event-handle.js";
// import DialogAddOrEdit from './dialog/DialogAddOrEdit'

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
  apiSearchFormRef,
  topDyTableRef,
  appTableLoading,
  apiTableLoading,
  apiTablePage,
  appSearchFormData,
  apiSearchFormData,
  appTableData,
  apiTableData,
  editTableRowData,
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
function handleDynamicTableNotify1(params) {
  if (["selection-change"].includes(params.eventType)) {
    handleObj.selectionChange(params);
  }
  if (
    ["size-change", "current-change"].includes(params.eventType) &&
    params.page
  ) {
    handleObj.handlePageChange(params.page);
  }
  if ("row-click" === params.eventType) {
    handleObj.handleAppTableRowClick(params.value);
  }
  if (params.clickedBtn) {
    handleObj[params.clickedBtn.eventKey](params);
  }
}
function handleDialogAddOrEditSave(saveFlag) {
  if (saveFlag) {
    handleObj.searchAppTableData();
  }
}

onBeforeMount(async () => {
  // const btnMap = await getButtonsData()
  if (
    !appTableOperationButtons.value ||
    !appTableOperationButtons.value.length
  ) {
    appTableColumns.value = appTableColumns.value.filter(
      (x) => x.slot !== "operation"
    );
  }
  if (
    !apiTableOperationButtons.value ||
    !apiTableOperationButtons.value.length
  ) {
    appTableColumns.value = appTableColumns.value.filter(
      (x) => x.slot !== "operation"
    );
  }
});
onMounted(() => {
  // nextTick(()=>{
  //   topDyTableRef.value.elTableRef.setCurrentRow(tableData.value[0])
  // })
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
    .top {
      height: 350px;
      :deep(.btn-bar.el-card) {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom: 0px;
        .el-card__body {
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & > .title {
            border-left: 5px solid;
            color: var(--el-color-primary);
            padding-left: 5px;
            font-weight: 600;
            font-size: medium;
          }
          .dynamic-form {
            width: 680px;
            .search-btn-bar,
            .op-btn-bar {
              .el-form-item__label {
                padding: 0px;
              }
            }
          }
        }
      }
      .table-container {
        // height: calc(100% - 114px);
        height: calc(100% - 50px);
        :deep(.el-table) {
          .operation {
            .cell {
              display: flex;
              justify-content: space-around;
            }
          }
          /* 选中某行时的背景色*/
          .el-table__body tr.current-row > td {
            color: #fff;
            background-color: #626aef !important;
            // background: rgb(98, 106, 239,.9) !important;
          }
        }
      }
    }
    .buttom {
      height: calc(100% - 370px);
      margin-top: 20px;
      :deep(.btn-bar.el-card) {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom: 0px;
        .el-card__body {
          padding: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & > .title {
            border-left: 5px solid;
            color: var(--el-color-primary);
            padding-left: 5px;
            font-weight: 600;
            font-size: medium;
          }
          .dynamic-form {
            width: 480px;
            .search-btn-bar,
            .op-btn-bar {
              .el-form-item__label {
                padding: 0px;
              }
            }
          }
        }
      }
      .table-container {
        height: calc(100% - 50px);
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
</style>
