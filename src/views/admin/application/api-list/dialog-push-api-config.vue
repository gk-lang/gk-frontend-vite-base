<!-- 推送接口弹框 -->
<template>
  <dialog-base
    v-model:visible="visibleDialog"
    :title="dialogTitle"
    width="60%"
    custom-class="dialog-push-api-config"
    @cancel="cancel()"
    @confirm="confirm()"
  >
    <el-card shadow="never" v-loading="saveLoading">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="token接口配置" name="1">
          <DynamicForm
            ref="tokenDynamicFormRef"
            :loading="tokenSaveLoading"
            :formItems="formItems1"
            v-model="tokenFormData"
            @notify="handleDynamicFormNotify"
          >
            <template #headJson>
              <DynamicTable
                border
                ref="tokenHeadJsonTableRef"
                class="table-container"
                :columns="tokenHeadJsonTableColumns"
                v-model="tokenHeadJsonTableData"
                @notify="tokenHeadJsonTableNotify"
              />
            </template>
            <template #paramJson>
              <DynamicTable
                border
                ref="tokenParamJsonTableRef"
                class="table-container"
                :columns="tokenParamJsonTableColumns"
                v-model="tokenParamJsonTableData"
                @notify="tokenParamJsonTableNotify"
              />
            </template>
          </DynamicForm>
        </el-collapse-item>
        <el-collapse-item title="推送接口配置" name="2">
          <DynamicForm
            ref="pushDynamicFormRef"
            :loading="pushSaveLoading"
            :formItems="formItems2"
            v-model="pushFormData"
            @notify="handleDynamicFormNotify"
          >
            <template #headJson>
              <DynamicTable
                border
                ref="pushHeadJsonTableRef"
                class="table-container"
                :columns="pushHeadJsonTableColumns"
                v-model="pushHeadJsonTableData"
                @notify="pushHeadJsonTableNotify"
              />
            </template>
            <template #paramJson>
              <DynamicTable
                border
                ref="pushParamJsonTableRef"
                class="table-container"
                :columns="pushParamJsonTableColumns"
                v-model="pushParamJsonTableData"
                @notify="pushParamJsonTableNotify"
              />
            </template>
          </DynamicForm>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </dialog-base>
</template>
<script lang="jsx" setup>
import { cloneDeep } from "lodash-es";
import { ref, computed, watch } from "vue";
import { dialogPushApiFormItems } from "./json-config";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DynamicTable from "@/components/dynamic-widget/dynamic-table.vue";
import DialogBase from "@/components/dialog/dialog-base.vue";
import { useUserStore } from "@/store/modules/user";
import AppSvg from "@/components/app-svg/index.vue";
import {
  queryApiClientConfigDetail,
  saveOrUpdateApiClientConfig,
} from "@/api/open-api";
import { ElCard, ElCollapse, ElCollapseItem, ElInput } from "element-plus";
import RequestScheduler from "@/utils/requestScheduler";
const emits = defineEmits(["update:isShow", "save"]);
const props = defineProps({
  isShow: {
    type: Boolean,
    default: "",
  },
  editData: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
const userStore = useUserStore();
const saveLoading = ref(false);
const activeNames = ref(["1", "2"]);
const dialogTitle = ref("推送配置");
const tokenDynamicFormRef = ref(null);
const pushDynamicFormRef = ref(null);

const tokenSaveLoading = ref(false);
const pushSaveLoading = ref(false);

const tokenFormData = ref(defaultFormData());
const pushFormData = ref(defaultFormData());

const formItems1 = ref([]);
const formItems2 = ref([]);

const tokenHeadJsonTableRef = ref();
const tokenHeadJsonTableColumns = ref(defaultJsonTableColumn("tokenHeadJson"));
const tokenHeadJsonTableData = ref(defaultJsonTableData());

const tokenParamJsonTableRef = ref();
const tokenParamJsonTableColumns = ref(
  defaultJsonTableColumn("tokenParamJson")
);
const tokenParamJsonTableData = ref(defaultJsonTableData());

const pushHeadJsonTableRef = ref();
const pushHeadJsonTableColumns = ref(defaultJsonTableColumn("pushHeadJson"));
const pushHeadJsonTableData = ref(defaultJsonTableData());

const pushParamJsonTableRef = ref();
const pushParamJsonTableColumns = ref(defaultJsonTableColumn("pushParamJson"));
const pushParamJsonTableData = ref(defaultJsonTableData());

const visibleDialog = computed({
  get() {
    return props.isShow;
  },
  set(val) {
    emits("update:isShow", val);
  },
});

const user = computed(() => userStore.getUserInfo);

watch(
  () => props.isShow,
  (val) => {
    if (val) {
      initFormData(() => {
        setTimeout(() => {
          if (
            tokenDynamicFormRef.value &&
            tokenDynamicFormRef.value.elFormRef
          ) {
            tokenDynamicFormRef.value.elFormRef.clearValidate();
          }
          if (pushDynamicFormRef.value && pushDynamicFormRef.value.elFormRef) {
            pushDynamicFormRef.value.elFormRef.clearValidate();
          }
        });
      });
    }
  }
);

async function initFormData(callback) {
  dialogTitle.value = "推送配置";
  tokenFormData.value = defaultFormData();
  pushFormData.value = defaultFormData();
  formItems1.value = cloneDeep(dialogPushApiFormItems.value);
  formItems1.value[0].required = false;
  formItems2.value = cloneDeep(dialogPushApiFormItems.value);
  if (props.editData?.id) {
    const { baseApiClientVos } = props.editData;
    // 控制并发的数量为2
    const rs = new RequestScheduler(2);
    for (let i = 0; i < baseApiClientVos.length; i++) {
      const action = () =>
        queryApiClientConfigDetail({
          recId: baseApiClientVos[i].recId,
        });
      rs.add(action);
    }
    const result = await rs.waitForAll(); // 确保所有请求完成
    result.forEach((resp, i) => {
      if (resp.success && resp.data) {
        resp.data.headerJsonList.forEach((x) => (x.valueType += ""));
        resp.data.paramJsonList.forEach((x) => (x.valueType += ""));
        if (resp.data.apiType === 2) {
          tokenFormData.value = resp.data;
          tokenHeadJsonTableData.value =
            tokenFormData.value.headerJsonList || [];
          tokenParamJsonTableData.value =
            tokenFormData.value.paramJsonList || [];
        }
        if (resp.data.apiType === 1) {
          pushFormData.value = resp.data;
          pushHeadJsonTableData.value = pushFormData.value.headerJsonList;
          pushParamJsonTableData.value = pushFormData.value.paramJsonList;
        }
      }
    });
    if (!tokenHeadJsonTableData.value?.length) {
      tokenHeadJsonTableData.value = defaultJsonTableData();
    }
    if (!tokenParamJsonTableData.value?.length) {
      tokenParamJsonTableData.value = defaultJsonTableData();
    }
    if (!pushHeadJsonTableData.value?.length) {
      pushHeadJsonTableData.value = defaultJsonTableData();
    }
    if (!pushParamJsonTableData.value?.length) {
      pushParamJsonTableData.value = defaultJsonTableData();
    }
  }
  callback();
}
function defaultFormData() {
  return {
    apiUrl: "",
    apiMethod: "",
    apiVersion: "",
    requestType: "post",
    headJson: "",
    paramJson: "",
    contentType: "application/json",
  };
}
function defaultJsonTableColumn(type) {
  return cloneDeep([
    {
      prop: "key",
      label: "参数名称",
      childWidget: {
        widget: "input",
        widgetAttrs: {
          clearable: true,
        },
      },
    },
    {
      prop: "valueType",
      label: "输入类型",
      childWidget: {
        widget: "select",
        widgetAttrs: {
          clearable: true,
          options: [
            {
              label: "自定义输入",
              value: "1",
            },
            {
              label: "@占位符@",
              value: "2",
            },
            {
              label: "@占位符Body@",
              value: "3",
            },
          ],
        },
      },
    },
    {
      prop: "value",
      label: "参数值",
      render: (h, scope) => {
        const row = scope.row;
        const keyName = row.key || "";
        row.valuePlace = `@${keyName.toUpperCase()}@`;
        row.valuePlaceBody = `@${keyName}_bodyparams@`;

        if (row.valueType === "3") {
          return (
            <ElInput
              v-model={row.valuePlaceBody}
              type="text"
              disabled
            ></ElInput>
          );
        } else if (row.valueType === "2") {
          return (
            <ElInput v-model={row.valuePlace} type="text" disabled></ElInput>
          );
        } else {
          return <ElInput v-model={row.value} type="text"></ElInput>;
        }
      },
    },
    {
      prop: "operation",
      label: "操作",
      width: "100px",
      render: (h, scope) => {
        const row = scope.row;
        return (
          <div>
            <AppSvg
              icon-name="add"
              size="20"
              onClick={() => addOrDeleteTableRow(type, row, "add")}
            />
            <AppSvg
              icon-name="minus"
              size="20"
              onClick={() => addOrDeleteTableRow(type, row, "minus")}
            />
          </div>
        );
      },
    },
  ]);
}
function defaultJsonTableData() {
  return [
    {
      key: "",
      valueType: "1",
      value: "",
    },
  ];
}
function addOrDeleteTableRow(tableType, row, type) {
  let tableData = [];
  if (tableType === "tokenHeadJson") {
    tableData = tokenHeadJsonTableData.value;
  }
  if (tableType === "tokenParamJson") {
    tableData = tokenParamJsonTableData.value;
  }
  if (tableType === "pushHeadJson") {
    tableData = pushHeadJsonTableData.value;
  }
  if (tableType === "pushParamJson") {
    tableData = pushParamJsonTableData.value;
  }
  const i = tableData.findIndex((x) => x.id === row.id);
  if (type === "add") {
    const newRow = {
      id: randomLenNum(6),
      key: "",
      valueType: "1",
      value: "",
      valuePlace: "",
      valuePlaceBody: "",
    };
    tableData.splice(i + 1, 0, newRow);
  }
  if (type === "minus") {
    if (tableData.length === 1) {
      tableData[0].key = "";
      tableData[0].value = "";
      window.$msg.error("已是最后一行，不能继续删除，请至少保留一行！");
    } else {
      tableData.splice(i, 1);
    }
  }
}
function randomLenNum(len, date) {
  let random = "";
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substring(0, typeof len === "number" ? len : 4);
  if (date) random = random + Date.now();
  return random;
}

function tokenHeadJsonTableNotify(params) {}
function tokenParamJsonTableNotify(params) {}
function pushHeadJsonTableNotify(params) {}
function pushParamJsonTableNotify(params) {}
function handleDynamicFormNotify(params) {
  const { formDataKey, eventType } = params;
  if (eventType === "change" && formDataKey === "appType") {
    if (formData.value["appType"] === "app") {
      const item = formItems.value.find((x) => x.formDataKey === "appOs");
      item.hidden = false;
      formData.value["appOs"] = "";
    } else {
      const item = formItems.value.find((x) => x.formDataKey === "appOs");
      item.hidden = true;
      formData.value["appOs"] = "";
    }
  }
}
function generateJsonObjByTableData(list) {
  const result = {};
  if (list?.length) {
    list.forEach((item) => {
      if (item.key) {
        if (item.valueType === "3") {
          result[item.key] = item.valuePlaceBody;
        } else if (item.valueType === "2") {
          result[item.key] = item.valuePlace;
        } else {
          result[item.key] = item.value;
        }
      }
    });
  }
  return JSON.stringify(result);
}
function generateSaveParams() {
  const tokenParams = cloneDeep(tokenFormData.value);
  const pushParams = cloneDeep(pushFormData.value);
  tokenParams.appName = props.editData?.openAppName || "";
  tokenParams.appId = props.editData?.appId || "";
  tokenParams.apiId = props.editData?.apiId || "";
  tokenParams.apiCode = props.editData?.pushApiCode || "";
  tokenParams.apiName = props.editData?.apiName || "";
  tokenParams.apiType = "2";

  pushParams.appName = props.editData?.openAppName || "";
  pushParams.appId = props.editData?.appId || "";
  pushParams.apiId = props.editData?.apiId || "";
  pushParams.apiCode = props.editData?.pushApiCode || "";
  pushParams.apiName = props.editData?.apiName || "";
  pushParams.apiType = "1";

  tokenParams.headJson = generateJsonObjByTableData(
    tokenHeadJsonTableData.value
  );
  tokenParams.paramJson = generateJsonObjByTableData(
    tokenParamJsonTableData.value
  );
  pushParams.headJson = generateJsonObjByTableData(pushHeadJsonTableData.value);
  pushParams.paramJson = generateJsonObjByTableData(
    pushParamJsonTableData.value
  );
  return {
    tokenParams,
    pushParams,
  };
}
async function handleSave() {
  const params = generateSaveParams();
  const doSave = async () => {
    let resp = null;
    saveLoading.value = true;
    try {
      let baseApiClientDto = [params.tokenParams, params.pushParams];
      // if (!params.tokenParams.apiUrl) {
      //   baseApiClientDto = [params.pushParams];
      // }
      resp = await saveOrUpdateApiClientConfig({
        baseApiClientDto,
      });
    } catch (error) {
      saveLoading.value = false;
      console.error(error);
    }
    saveLoading.value = false;
    if (resp.code == 200) {
      visibleDialog.value = false;
      window.$msg.success(resp.message || "保存成功!");
      emits("save", true);
    } else {
      window.$msg.error(resp.message || "保存失败!");
    }
  };
  if (!params.tokenParams.apiUrl) {
    window.$msgbox
      .confirm(
        "token接口配置中的调用地址为空表示推送接口无需token!",
        "是否确认保存",
        {
          confirmButtonText: "是的",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
      .then(() => {
        doSave();
      });
  } else {
    doSave();
  }
}
function cancel() {
  visibleDialog.value = false;
}
function confirm() {
  tokenDynamicFormRef.value.elFormRef.validate((valid1, fields) => {
    pushDynamicFormRef.value.elFormRef.validate((valid2, fields) => {
      if (valid1 && valid2) {
        handleSave();
      } else if (!valid1 && !valid2) {
        window.$msg.error("token与推送接口配置的调用地址不能为空！");
      } else if (!valid1) {
        window.$msg.error("token接口配置的调用地址不能为空！");
      } else if (!valid2) {
        window.$msg.error("推送接口配置的调用地址不能为空！");
      }
    });
  });
}
</script>
<style lang="scss">
.el-overlay {
  .el-overlay-dialog {
    div[custom-class*="dialog-push-api-config"] {
      height: 700px;
      &.is-fullscreen {
        height: 100%;
      }
      .el-dialog__body {
        overflow: auto;
        padding: 10px;
        height: 100%;
        .el-card {
          .el-card__body {
            padding: 0px;
            .el-collapse {
              border: 0px;
              --el-collapse-border-color: var(--el-border-color);
              --el-collapse-header-bg-color: #f5f7fa;
              --el-collapse-header-height: 40px;
              .el-collapse-item__header {
                font-size: 14px;
                font-weight: 600;
                padding-left: 10px;
              }
              .el-collapse-item__content {
                padding: 10px;
              }
              .el-form {
                .table-container {
                  width: 100%;
                  .operation {
                    .cell {
                      & > div {
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        .app-svg {
                          cursor: pointer;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
