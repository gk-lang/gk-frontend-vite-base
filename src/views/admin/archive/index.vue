<!-- xxx -->
<template>
  <div class="archive-manage auto-container">
    <div class="left-container">
      <el-card shadow="never" class="tree-container">
        <!-- <app-svg size="24" icon-name="example" color="red">
          <Edit />
        </app-svg> -->
        <el-button type="primary" @click="openDialogSaveArchiveType()"
          >新增文档分类</el-button
        >
        <el-input v-model="treeFilterText" placeholder="请输入分类名称" />
        <el-scrollbar style="height: 100%">
          <el-tree
            ref="treeRef"
            :data="treeData"
            default-expand-all
            :expand-on-click-node="false"
            :filter-node-method="filterNode"
            @node-click="handleTreeNodeClick"
          >
            <template #default="{ node, data }">
              <span class="custom-tree-node">
                <span class="title">
                  <!-- <el-tooltip :content="node.label" effect="light">
                    <p>{{ node.label }}</p>
                  </el-tooltip> -->
                  <p>{{ node.label }}</p>
                </span>
                <span class="tool" v-if="node.id !== 1">
                  <el-link
                    type="primary"
                    :underline="false"
                    @click.stop="openDialogSaveArchiveType(data)"
                    >编辑
                  </el-link>
                  <el-popconfirm
                    width="220"
                    confirm-button-text="是的"
                    cancel-button-text="不用，谢谢!"
                    icon-color="#626AEF"
                    title="是否确定删除该数据?"
                    @confirm="removeTreeNode(node, data)"
                  >
                    <template #reference>
                      <el-link
                        type="danger"
                        :underline="false"
                        style="margin-left: 8px"
                        @click.stop="()=>{}"
                      >
                        删除
                      </el-link>
                    </template>
                  </el-popconfirm>
                </span>
              </span>
            </template>
          </el-tree>
        </el-scrollbar>
      </el-card>
    </div>
    <div class="right-container">
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
        <div class="btn-bar-right">
            <el-dropdown
              split-button
              type="primary"
              @command="openArchiveDocPage"
              @click="openArchiveDocPage('api-doc')"
            >
              新增接口文档
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="common-doc">新增普通文档</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-button class="delete-btn" @click="handleBatchDelete">批量删除</el-button>
        </div>
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
    <DialogSaveArchiveType
      v-model:isShow="dialogSaveArchiveTypeIsShow"
      :editFormData="editArchiveTypeData"
      @save="handleDialogSaveArchiveTypeSave"
    />
  </div>
</template>

<script setup>
import { ref, watch, computed, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { queryOpenEnvList } from "@/api/api-debugger";
import {
  ElCard,
  ElTooltip,
  ElLink,
  ElButton,
  ElPopconfirm,
  ElTree,
  ElInput,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem
} from "element-plus";
import AppSvg from "@/components/app-svg/index.vue";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DynamicTable from "@/components/dynamic-widget/dynamic-table.vue";
import ButtonsBar from "@/components/buttons-bar/buttons-bar.vue";
import { useUserStore } from "@/store/modules/user";

import DialogSaveArchiveType from "./dialog-save-archive-type.vue";

import {
  searchFormItems,
  searchButtons,
  tableButtons,
  tableOperationButtons,
  tableColumns,
} from "./json-config.js";

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
  editArchiveTypeData,
  dialogSaveArchiveTypeIsShow,
  openDialogSaveArchiveType,
  removeTreeNode,
  handleDialogSaveArchiveTypeSave,
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
// 打开文档新增或编辑
function openArchiveDocPage(command){
  if(command){
    router.push(`/archive-edit?mainType=${command}`);
  }
}
function handleBatchDelete(){
  handleObj.handleTableDataDelete();
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
onMounted(()=>{
  queryOpenEnvList()
})
</script>

<style lang="scss" scoped>
.archive-manage {
  height: var(--el-container-height);
  display: flex;
  justify-content: space-between;
  --left-container-width: 300px;
  .left-container {
    height: 100%;
    width: var(--left-container-width);
    .tree-container {
      height: calc(100% - 0px);
      :deep(.el-card__body) {
        padding: var(--el-card-padding) 0px;
        height: calc(100% - var(--el-card-padding) - var(--el-card-padding));
        display: flex;
        flex-direction: column;
        .el-input {
          width: calc(100% - 40px);
          margin: 20px auto;
        }
        .el-button {
          width: calc(100% - 40px);
          margin: auto;
        }
        .el-scrollbar {
          height: calc(100% - 110px);
          width: calc(100% - 20px);
          margin-left: 10px;
          .el-tree {
            // --el-tree-node-hover-bg-color:var(--el-color-primary);
            .el-tree-node {
              // &.is-current{
              //   color: var(--el-color-white);
              //   background-color: var(--el-color-primary);
              // }
            }
            /* 鼠标浮动过的背景颜色 */
            .el-tree-node__content:hover {
              background: rgb(0, 129, 204,0.2);
            }
            /* 鼠标点击时节点的背景颜色 */
            .el-tree-node:focus > .el-tree-node__content {
              // background-color: var(--el-color-primary);
              background-color: rgb(178, 153, 110)!important;
              color: rgb(255, 255, 255);
            }
            /* 鼠标失去焦点时节点背景的颜色 */
            .el-tree--highlight-current
              .el-tree-node.is-current
              > .el-tree-node__content {
                background: rgb(178, 153, 110);
              // background-color: var(--el-color-primary);
            }
          }
        }
        .custom-tree-node {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          padding-right: 8px;
          .title {
            flex: 1;
            overflow: hidden;
            width: 0;
            display: block;
            p {
              // 省略号
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            // width: calc(100% - 70px);
          }
          .tool {
            width: 70px;
          }
        }
      }
    }
  }
  .right-container {
    width: calc(100% - var(--left-container-width) - 20px);
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
    .btn-bar-right{
      .delete-btn{
        margin-left: 10px;
      }
    }
  }
}
</style>
