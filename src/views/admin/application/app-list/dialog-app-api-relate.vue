<!-- 应用所关联的api列表 -->
<template>
  <dialog-base
    v-model:visible="visibleDialog"
    :title="dialogTitle"
    width="90%"
    custom-class="dialog-app-api-relate"
  >
    <div class="dialog-content">
      <div class="left-content">
        <el-card shadow="never" class="search-bar">
          <DynamicForm
            ref="searchFormRef1"
            isSearchBar
            :formItems="apiSearchItems"
            v-model="searchFormData1"
            @notify="handleDynamicFormNotify1"
          />
        </el-card>
        <div class="left-table-wrap">
          <DynamicTable
            border
            ref="tableRef1"
            class="table-container"
            :id="'main-table'"
            :loading="tableLoading1"
            :columns="apiTableColumns"
            v-model="tableData1"
            v-model:page="tablePage1"
            height="450px"
            @notify="handleDynamicTableNotify1"
          >
          </DynamicTable>
        </div>
      </div>
      <div class="middle-content">
        <el-button type="primary" plain @click="addRowToTable2">==></el-button>
      </div>
      <div class="right-content">
        <el-card shadow="never" class="search-bar">
          <DynamicForm
            ref="searchFormRef2"
            isSearchBar
            :formItems="selectedApiSearchItems"
            v-model="searchFormData2"
            @notify="handleDynamicFormNotify2"
          />
        </el-card>
        <div class="right-table-wrap">
          <DynamicTable
            border
            ref="tableRef2"
            class="table-container"
            :loading="tableLoading2"
            :columns="apiTableColumns2"
            v-model="tableData2"
            height="503px"
            @notify="handleDynamicTableNotify2"
          >
          </DynamicTable>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="tip-msg">
        <span>当前选中</span>
        <span class="red">{{ tableData2.length }}</span>
        <span>条数据</span>
      </div>
      <div>
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </template>
  </dialog-base>
</template>
<script lang="jsx" setup>
import { cloneDeep, size } from "lodash-es";
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { ElCard, ElLink, ElButton } from "element-plus";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DynamicTable from "@/components/dynamic-widget/dynamic-table.vue";
import DialogBase from "@/components/dialog/dialog-base.vue";
import { saveAppBindApi, queryAppBindApiPageList } from "@/api/application";
import {
  apiSearchItems,
  apiTableColumns,
  selectedApiSearchItems,
} from "./json-config";
import { queryApiDocTypeTree, queryOpenApiList } from "@/api/archive";
const emits = defineEmits(["update:isShow"]);
const props = defineProps({
  isShow: {
    type: Boolean,
    default: "",
  },
  editFormData: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
const searchFormRef1 = ref();
const searchFormRef2 = ref();
const tableRef1 = ref();
const tableRef2 = ref();

const searchFormData1 = ref({
  apiDocTypeId: "",
  apiName: "",
});
const searchFormData2 = ref({
  apiName: "",
});

const tableData1 = ref([]);
const tableData2 = ref([]);
const oldRelateData = ref([]);
const tablePage1 = ref({});
const tableLoading1 = ref(false);
const tableLoading2 = ref(false);
const multipleSelection1 = ref([]);
const multipleSelection2 = ref([]);
const apiTableColumns2 = ref([]);

const dialogTitle = ref("API列表");
const saveLoading = ref(false);

const visibleDialog = computed({
  get() {
    return props.isShow;
  },
  set(val) {
    emits("update:isShow", val);
  },
});
function resetData() {
  tableData2.value = [];
  multipleSelection1.value = [];
  multipleSelection2.value = [];
  tablePage1.value = {};
  searchFormData1.value = {
    apiDocTypeId: "",
    apiName: "",
  };
  searchFormData2.value = {
    apiName: "",
  };
}
async function searchTableData1(btnItem, resolve) {
  tableLoading1.value = true;
  if (btnItem?.widgetAttrs) {
    btnItem.widgetAttrs.loading = true;
  }
  if (btnItem?.eventKey === "searchTableData1") {
    tablePage.value.page_num = 1;
  }
  let resp = {};
  try {
    const params = {
      ...searchFormData1.value,
    };
    // 是否过滤未关联文档的接口
    params.filterApiContainDocType = true;
    params.pageNo = tablePage1.value.page_num || 1;
    params.pageSize = tablePage1.value.page_size || 50;
    if (!searchFormData1.value.apiDocTypeId) delete params.apiDocTypeId;
    if (!searchFormData1.value.apiName) delete params.apiName;

    resp = await queryOpenApiList(params);
  } catch (error) {
    resp = {
      code: 200,
      data: [],
      total_num: 0,
    };
  } finally {
    tableLoading1.value = false;
    if (btnItem?.widgetAttrs) {
      btnItem.widgetAttrs.loading = false;
    }
  }
  if (resolve) {
    resolve();
  }
  if (resp.code === "200") {
    resp?.data?.dataList?.forEach((x, i) => {
      x.id = x.apiId;
      x.sortIndex = i + 1;
      x.createTime = window.$dayjs(x.createTime).format("YYYY-MM-DD HH:mm:ss");
      x.updateTime = window.$dayjs(x.updateTime).format("YYYY-MM-DD HH:mm:ss");
    });
    tableData1.value = resp?.data?.dataList || [];
    tablePage1.value.total_num = resp?.data?.totalRecords || 0;
    nextTick(() => {
      tableData2.value?.forEach((row) => {
        const item = tableData1.value.find((x) => x.id === row.id);
        if (item) {
          tableRef1.value.elTableRef.toggleRowSelection(item, true);
        }
      });
    });
  }
}
async function searchTableData2(btnItem, resolve) {
  tableLoading2.value = true;
  if (searchFormData2.value.apiName) {
    tableData2.value = tableData2.value.filter(
      (x) => x.apiName.indexOf(searchFormData2.value.apiName) !== -1
    );
  } else {
    tableData2.value = cloneDeep(multipleSelection1.value);
  }
  tableData2.value?.forEach((x, i) => {
    x.sortIndex = i + 1;
  });
  tableLoading2.value = false;
  if (resolve) {
    resolve();
  }
}
async function queryAppBindApi() {
  const openAppId = props.editFormData?.id;
  const resp = await queryAppBindApiPageList({
    pageNo: 1,
    pageSize: 999999,
    openAppId,
  });
  if (resp.code === "200") {
    resp?.data?.dataList?.forEach((x, i) => {
      x.id = x.apiId;
      x.sortIndex = i + 1;
      x.createTime = window.$dayjs(x.createTime).format("YYYY-MM-DD HH:mm:ss");
      x.updateTime = window.$dayjs(x.updateTime).format("YYYY-MM-DD HH:mm:ss");
    });
    tableData2.value = resp?.data?.dataList || [];
    oldRelateData.value = cloneDeep(tableData2.value);
  }
}
async function loadApiTypeTreeData() {
  const resp = await queryApiDocTypeTree({
    parentId: 0,
    queryAllSub: 1,
    level: 100,
  });
  const item = apiSearchItems.value.find(
    (x) => x.formDataKey === "apiDocTypeId"
  );
  resp.data.forEach((item) => {
    item.value = item.id;
    item.label = item.name;
  });
  const apiRoot = resp.data.find((x) => x.menu === 'api')
  item.childWidget.widgetAttrs.options = apiRoot?.children || [];
}

function handleTable2Remove({ row }) {
  // 删除表格1中的选中
  const k = multipleSelection1.value.findIndex((x) => x.id === row.id);
  if (k !== -1) {
    const item = tableData1.value.find((x) => x.id === row.id);
    if (item) {
      tableRef1.value.elTableRef.toggleRowSelection(item, false);
    } else {
      multipleSelection1.value.splice(k, 1);
    }
  }
  // 删除表格2中的选中
  const j = multipleSelection2.value.findIndex((x) => x.id === row.id);
  if (j !== -1) {
    const item = tableData2.value.find((x) => x.id === row.id);
    if (item) {
      tableRef2.value.elTableRef.toggleRowSelection(item, false);
    } else {
      multipleSelection2.value.splice(k, 1);
    }
  }
  const i = tableData2.value.findIndex((x) => x.id === row.id);
  tableData2.value.splice(i, 1);
}
function handlePageChange1(page) {
  searchTableData1();
}
function addRowToTable2() {
  if (!multipleSelection1.value.length) {
    window.$msg.error("请先勾选左侧表格中的数据后进行添加!");
  }
  multipleSelection1.value.forEach((item) => {
    const i = tableData2.value.findIndex((x) => x.id === item.id);
    if (i === -1) {
      const newItem = cloneDeep(item);
      newItem.approveStatus = 0;
      const isOldRow = oldRelateData.value.findIndex(
        (x) => x.id === newItem.id
      );
      newItem.isNewData = isOldRow === -1;
      tableData2.value.unshift(newItem);
    }
  });
  tableData2.value?.forEach((x, i) => {
    x.sortIndex = i + 1;
  });
}
function selectionChange1(params) {
  multipleSelection1.value = params.multipleSelection;
}
function selectionChange2(params) {
  multipleSelection2.value = params.multipleSelection;
}
function generateSaveParams() {
  const list = tableData2.value.filter((x) => x.approveStatus === 0);
  const openAuthorityAppList = list.map((x) => {
    return {
      authorityId: x.authorityId,
      apiCode: x.apiCode,
      apiId: x.apiId,
    };
  });
  const openAppId = props.editFormData?.id;
  return {
    openAppId,
    openAuthorityAppList,
  };
}
async function handleSave() {
  const params = generateSaveParams();
  let resp = null;
  saveLoading.value = true;
  try {
    resp = await saveAppBindApi(params);
  } catch (error) {
    saveLoading.value = false;
    console.error(error);
  }
  saveLoading.value = false;
  if (resp && resp.code == 200) {
    visibleDialog.value = false;
    window.$msg.success(resp.message || "保存成功!");
    emits("save", true);
  } else {
    window.$msg.error(resp.message || "保存失败!");
  }
}
function cancel() {
  visibleDialog.value = false;
  emits("close");
}
function confirm() {
  handleSave();
}
watch(
  () => props.isShow,
  async (val) => {
    if (val) {
      dialogTitle.value = `${props.editFormData.appName}-关联API`;
      resetData();
      loadApiTypeTreeData();
      await queryAppBindApi();
      await searchTableData1();
    }
  }
);
function handleDynamicFormNotify1(params) {
  if (params.clickedBtn) {
    if (params.clickedBtn.eventKey === "searchApiTableData") {
      searchTableData1(params.clickedBtn, params.resolve);
    }
    if (params.clickedBtn.eventKey === "resetApiSearchForm") {
      searchFormRef1.value.resetFields();
    }
  }
}
function handleDynamicFormNotify2(params) {
  if (params.clickedBtn) {
    if (params.clickedBtn.eventKey === "searchTableData") {
      searchTableData2(params.clickedBtn, params.resolve);
    }
    if (params.clickedBtn.eventKey === "resetSearchForm") {
      searchFormRef2.value.resetFields();
    }
  }
}
function handleDynamicTableNotify1(params) {
  if (params.eventType === "row-click") {
    tableRef1.value.elTableRef.toggleRowSelection(params.value);
  }
  if (["selection-change"].includes(params.eventType)) {
    selectionChange1(params);
  }
  if (
    ["size-change", "current-change"].includes(params.eventType) &&
    params.page
  ) {
    handlePageChange1(params.page);
  }
}
function handleDynamicTableNotify2(params) {
  // if (params.clickedBtn) {
  //   handleObj[params.clickedBtn.eventKey](params);
  // }
  if (["selection-change"].includes(params.eventType)) {
    selectionChange2(params);
  }
}

onMounted(() => {
  const list = apiTableColumns.value.concat({
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
              type="danger"
              underline={false}
              disabled={ scope.row?.approveStatus !== 0 }
              onMousedown={(e) => e.stopPropagation()}
              onClick={() => handleTable2Remove({ row: scope.row })}
            >
              移除
            </ElLink>
          </div>
        );
    },
  });
  apiTableColumns2.value = cloneDeep(list);
  const item = apiTableColumns2.value.find((x) => x.prop === "approveStatus");
  item.hidden = false;
  const item2 = apiTableColumns2.value.find((x) => x.prop === "apiStatus");
  item2.hidden = false;
});
</script>
<style lang="scss">
.el-overlay {
  .el-overlay-dialog {
    div[custom-class*="dialog-app-api-relate"] {
      .el-dialog__body {
        padding: 10px 10px 0px 10px;
        .dialog-content {
          display: flex;
          justify-content: space-between;
          .left-content {
            width: calc(60% - 110px);
            .search-bar.el-card {
              --el-card-padding: 10px;
            }
            .table-container {
              height: auto;
              margin-top: 10px;
              .el-form {
                margin-top: 0px;
              }
            }
          }
          .el-table {
            .approveStatus {
              .cell {
                .new-data {
                  position: relative;
                  width: max-content;
                  &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background-color: green;
                    border-radius: 50%;
                    top: 0px;
                    right: 0px;
                  }
                }
              }
            }
          }
          .middle-content {
            width: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .right-content {
            width: 40%;
            .search-bar.el-card {
              --el-card-padding: 10px;
            }
            .table-container {
              margin-top: 10px;
              .el-form {
                margin-top: 0px;
              }
            }
          }
        }
      }
      .el-dialog__footer {
        .dialog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .tip-msg {
            display: flex;
            align-items: center;
            color: var(--el-color-primary);
            /* color: var(--el-color-warning); */
            background: #ddefff;
            border-radius: 4px 4px 4px 4px;
            border: 1px solid #0083ff;
            padding: 5px 20px 5px 7px;
            .el-icon {
              margin-right: 5px;
            }
            .red {
              color: red;
              font-weight: 600;
              font-size: 16px;
              padding: 0px 5px;
            }
          }
        }
      }
    }
  }
}
// @media screen and (max-height: 700px) {
//   .el-overlay {
//     .el-overlay-dialog {
//       div[custom-class*="dialog-app-api-relate"] {
//         .el-dialog__body {
//           background-color: #0083ff;
//           .table-container {
//             height: 400px !important;
//           }
//         }
//       }
//     }
//   }
// }
</style>
