<!-- api审批 -->
<template>
  <div class="api-approve auto-container">
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
              :disabled="
                item.widgetAttrs.disabled ||
                row.openAppApproveStatus !== 1 ||
                row.approveStatus !== 0
              "
              :underline="false"
              @mousedown="(e) => e.stopPropagation()"
              @click="handleTableOperation({ row, btnItem: item })"
              >{{ item.name }}</el-link
            >
          </template>
        </template>
      </DynamicTable>
    </div>
    <DialogApprove
      v-model:isShow="dialogApproveIsShow"
      :approveDataList="approveDataList"
      @save="handleDialogSave"
    />
  </div>
</template>

<script lang="jsx" setup>
import { ref, watch, computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { ElCard, ElLink } from "element-plus";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DynamicTable from "@/components/dynamic-widget/dynamic-table.vue";
import ButtonsBar from "@/components/buttons-bar/buttons-bar.vue";
import { useUserStore } from "@/store/modules/user";
import DialogApprove from "./dialog-approve.vue";
import {
  searchFormItems,
  tableOperationButtons,
  tableColumns,
  searchButtons, 
  tableButtons
} from "./json-config.jsx";
import useBtnEventHandle from "./use-btn-event-handle.js";

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
  approveDataList,
  dialogApproveIsShow,
  handleTableOperation,
} = handleObj;

function handleButtonsClick(event, btnItem, resolve) {
  handleObj[btnItem.eventKey](btnItem, resolve);
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

function handleDialogSave(saveFlag) {
  if (saveFlag) {
    handleObj.searchTableData();
  }
}
onBeforeMount(async () => {
  if (!tableOperationButtons.value || !tableOperationButtons.value.length) {
    tableColumns.value = tableColumns.value.filter(
      (x) => x.slot !== "operation"
    );
  }
});
</script>

<style lang="scss" scoped>
.api-approve {
  height: var(--el-container-height);
  display: flex;
  justify-content: space-between;
  .main-content {
    // width: calc(100% - 10px);
    height: 100%;
    display: flex;
    flex-direction: column;
    .table-container {
      height: calc(100% - 106px);
      :deep(.el-table) {
        .openAppName {
          padding: 0px;
          position: relative;
          width: max-content;
          .cell {
            .open-app-approve-status {
              &::after {
                content: "";
                display: block;
                position: absolute;
                width: 50px;
                height: 15px;
                top: 5px;
                right: 0px;
                margin-top: -5px;
                font-size: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: aliceblue;
              }
              &.status-0 {
                &::after {
                  content: "待审批";
                  background-color: red;
                }
              }
              &.status-1 {
                &::after {
                  content: "审批通过";
                  background-color: green;
                }
              }
              &.status-2 {
                &::after {
                  content: "审批驳回";
                  background-color: gold;
                }
              }
            }
          }
        }

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
    height: 54px;
    box-sizing: border-box;
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
    height: 52px;
    box-sizing: border-box;
  }
}
</style>
