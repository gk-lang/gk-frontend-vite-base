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
        ref="dataTableRef"
        class="table-container"
        :id="'main-table'"
        :loading="tableLoading"
        :columns="apiTableColumns"
        v-model="tableData"
        v-model:page="tablePage"
        @notify="handleDynamicTableNotify"
      >
      </DynamicTable>
    </div>
    <DialogPushApiConfig
      v-model:isShow="isShowPushApiConfigDialog"
      :editData="pushApiConfigData"
      @save="handleDialogPushApiConfigSave"
    />
  </div>
</template>
<script lang="jsx" setup name="api-list">
import { ref, watch, onMounted, computed, onBeforeMount, nextTick } from "vue";
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
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DynamicTable from "@/components/dynamic-widget/dynamic-table.vue";
import ButtonsBar from "@/components/buttons-bar/buttons-bar.vue";
import { useUserStore } from "@/store/modules/user";
import DialogPushApiConfig from "./dialog-push-api-config.vue";
import { searchFormItems, tableColumns, searchButtons, tableButtons } from "./json-config.jsx";
import useBtnEventHandle from "./use-btn-event-handle.js";
import { cloneDeep } from "lodash-es";
import { goOnlineBindOpenApi } from "@/api/open-api";

const router = useRouter();
const userStore = useUserStore();
const currentRoute = router.currentRoute;
const user = computed(() => userStore.getUserInfo);

const apiTableColumns = ref([]);

const handleObj = useBtnEventHandle({
  router,
  user,
  searchFormItems,
  tableColumns,
});

const {
  searchFormRef,
  dataTableRef,
  tableLoading,
  tablePage,
  formData,
  tableData,
  editTableRowData,
  pushApiConfigData,
  isShowPushApiConfigDialog,
  openPushApiConfigDialog
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

function handleDialogPushApiConfigSave(saveFlag) {
  if (saveFlag) {
    handleObj.searchTableData();
  }
}
function openApiPreview({ row }) {
  router.push(`/archive-preview?apiCode=${row.apiCode}`);
}
function handleApiPublish({ row }) {
  window.$msgbox
    .confirm("是否确定发布到线上?", "发布确认", {
      confirmButtonText: "是的",
      cancelButtonText: "取消",
      type: "warning",
    })
    .then(async () => {
      const resp = await goOnlineBindOpenApi({ id: row.id });
      if (resp.code === "200") {
        handleObj.searchTableData();
        window.$msg.success(resp.message || "发布成功");
      } else {
        window.$msg.error(resp.message || "发布失败");
      }
    });
}
function openApiDebugger({ row }) {
  router.push(`/api-test-tool?appId=${row.appId}&apiCode=${row.apiCode}`);
}
function initApiTableColumns() {
  const list = tableColumns.value.concat({
    label: "操作",
    align: "center",
    fixed: "right",
    width: 220,
    sortable: false,
    prop: "operation",
    render: (h, scope) => {
      let list = []
      if(scope.row.apiType === '2'){
        list.push({
          type:'primary',
          text:'推送配置',
          clickHandle: openPushApiConfigDialog
        })
      }
      // 审批通过
      if(scope.row.approveStatus === 1){
        // 待上线
        if(scope.row.apiStatus === 2){
          list = list.concat([
            {
              type:'warning',
              text:'上线',
              clickHandle: handleApiPublish
            },
            {
              type:'success',
              text:'预览',
              clickHandle: openApiPreview
            },
            {
              type:'danger',
              text:'调试',
              clickHandle: openApiDebugger
            }
          ])
        }else{
          list = list.concat([
            {
              type:'success',
              text:'预览',
              clickHandle: openApiPreview
            },
            {
              type:'danger',
              text:'调试',
              clickHandle: openApiDebugger
            }
          ])
        }
      }else{
        list = list.concat([
          {
            type:'success',
            text:'预览',
            clickHandle: openApiPreview
          }
        ]) 
      }
      return (<div class="operation-btns">
        {
            list.map((item) => {
              return <ElLink 
                  type={item.type} 
                  underline={false} 
                  onMousedown={(e) => e.stopPropagation()} 
                  onClick={() => item.clickHandle({ row: scope.row })}>{ item.text }</ElLink>
            })
        }  
      </div>)
    },
  });
  apiTableColumns.value = cloneDeep(list);
}
// onBeforeMount(async () => {
//   if (!tableOperationButtons.value || !tableOperationButtons.value.length) {
//     tableColumns.value = tableColumns.value.filter(
//       (x) => x.slot !== "operation"
//     );
//   }
// });
watch(
  () => currentRoute.value.fullPath,
  (nv) => {
    if (currentRoute.value.query.id) {
      formData.value.openAppId = currentRoute.value.query.id;
      handleObj.searchTableData();
    }
  },
  {
    immediate: true,
  }
);
onMounted(() => {
  initApiTableColumns();
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
            .operation-btns {
              display: flex;
              // justify-content: space-around;
              .el-link{
                margin-left: 10px;
              }
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
