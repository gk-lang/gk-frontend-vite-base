<template>
  <el-card class="api-test-tool">
    <el-collapse v-if="requestConfig.serviceInfo" v-model="activeCollapses">
      <el-collapse-item class="service-info" title="服务详情" name="1">
        <template #title>
          <div class="title">服务详情</div>
        </template>
        <div class="content">
          <DynamicForm
            :formItems="serviceInfoFormItems"
            v-model="requestConfig.serviceInfo"
            @notify="handleDynamicFormNotify"
          >
            <template #env>
              <div>
                <el-radio-group
                  @change="changeEvn"
                  v-model="requestConfig.serviceInfo.env"
                >
                  <el-radio
                    v-for="item in requestConfig.serviceInfo.envInfoList"
                    :label="item.env"
                    :value="item.env"
                    :key="item.env"
                  />
                </el-radio-group>
              </div>
            </template>
          </DynamicForm>
        </div>
      </el-collapse-item>
      <el-collapse-item class="request-config" title="请求参数" name="2">
        <template #title>
          <div class="title">请求参数</div>
        </template>
        <div class="request-url">
          <el-input
            v-model="requestConfig.main.fullUrl"
            style="width: 100%"
            placeholder="请输入请求地址"
            class="input-with-select"
            disabled
          >
            <template #prepend>
              <el-select
                v-model="requestConfig.main.method"
                style="width: 115px"
              >
                <el-option label="GET" value="GET" />
                <el-option label="POST" value="POST" />
                <el-option label="PUT" value="PUT" />
                <el-option label="PATCH" value="PATCH" />
                <el-option label="DELETE" value="DELETE" />
                <el-option label="HEAD" value="HEAD" />
                <el-option label="OPTIONS" value="OPTIONS" />
              </el-select>
            </template>
            <template #append>
              <el-dropdown
                split-button
                type="primary"
                @click="sendProxyRequest"
              >
                发送请求
                <!-- <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>生成Markdown</el-dropdown-item>
                  <el-dropdown-item>保存记录</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template> -->
              </el-dropdown>
            </template>
          </el-input>
        </div>
        <el-tabs
          v-model="requestConfig.paramCategory"
          class="demo-tabs"
          editable
        >
          <template #add-icon>
            <el-button
              :class="[
                'change-btn',
                {
                  isShowTable:isShowTable,
                },
              ]"
              :color="
                isShowTable ? '#626aef' : '#cc7829'
              "
              plain
              size="small"
              @click="changeDisplayType()"
            >
              {{
                isShowTable ? "切换至JSON编辑器" : "切换至JSON表格"
              }}
            </el-button>
          </template>
          <el-tab-pane label="Url参数" name="url">
            <CodemirrorEditor
              v-if="!requestConfig.url.paramsData.isShowTable"
              v-model="requestConfig.url.paramsData.jsonData"
            />
            <DynamicTable
              border
              v-else
              class="table-container"
              :loading="requestConfig.url.tableLoading"
              :columns="requestConfig.url.paramsData.tableColumns"
              v-model="requestConfig.url.paramsData.tableData"
              @notify="handleDynamicTableNotify"
            >
              <template #operation="{ row }">
                <app-svg
                  icon-name="add"
                  size="20"
                  @mousedown="(e) => e.stopPropagation()"
                  @click="addOrDeleteTableRow('url', row, 'add')"
                />
                <app-svg
                  icon-name="minus"
                  size="20"
                  @mousedown="(e) => e.stopPropagation()"
                  @click="addOrDeleteTableRow('url', row, 'minus')"
                />
              </template>
            </DynamicTable>
          </el-tab-pane>
          <el-tab-pane label="Body参数" name="body">
            <div :class="['body-params-type', requestConfig.body.paramsType]">
              <div>
                <el-tag
                  type="primary"
                  v-for="name in bodyParamsTypeList"
                  :effect="
                    requestConfig.body.paramsType === name ? 'dark' : 'plain'
                  "
                  @click="handleBodyParamsTypeChange(name)"
                  >{{ name }}</el-tag
                >
              </div>
              <div v-if="requestConfig.body.paramsType === 'raw'">
                <el-select
                  v-model="requestConfig.body.contentType"
                  class="content-type"
                  size="small"
                >
                  <el-option
                    v-for="item in contentTypeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <!-- <el-tag type="primary">form-data</el-tag>
            <el-tag type="primary" effect="plain">x-www-form-urlencoded</el-tag>
            <el-tag type="primary" effect="plain">raw</el-tag> -->
            </div>
            <div v-if="requestConfig.body.paramsType !== 'none'">
              <CodemirrorEditor
                v-if="!requestConfig.body[requestConfig.body.paramsType].isShowTable"
                v-model="
                  requestConfig.body[requestConfig.body.paramsType].jsonData
                "
              />
              <DynamicTable
                border
                v-else
                class="table-container"
                :loading="requestConfig.body.tableLoading"
                :columns="
                  requestConfig.body[requestConfig.body.paramsType].tableColumns
                "
                v-model="
                  requestConfig.body[requestConfig.body.paramsType].tableData
                "
                @notify="handleDynamicTableNotify"
              >
                <template #operation="{ row }">
                  <app-svg
                    icon-name="add"
                    size="20"
                    @mousedown="(e) => e.stopPropagation()"
                    @click="addOrDeleteTableRow('body', row, 'add')"
                  />
                  <app-svg
                    icon-name="minus"
                    size="20"
                    @mousedown="(e) => e.stopPropagation()"
                    @click="addOrDeleteTableRow('body', row, 'minus')"
                  />
                </template>
              </DynamicTable>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Header参数" name="header">
            <CodemirrorEditor
              v-if="!requestConfig.header.paramsData.isShowTable"
              v-model="requestConfig.header.paramsData.jsonData"
            />
            <DynamicTable
              border
              v-else
              class="table-container"
              :loading="requestConfig.header.tableLoading"
              :columns="requestConfig.header.paramsData.tableColumns"
              v-model="requestConfig.header.paramsData.tableData"
              @notify="handleDynamicTableNotify"
            >
              <template #operation="{ row }">
                <app-svg
                  icon-name="add"
                  size="20"
                  @mousedown="(e) => e.stopPropagation()"
                  @click="addOrDeleteTableRow('header', row, 'add')"
                />
                <app-svg
                  icon-name="minus"
                  size="20"
                  @mousedown="(e) => e.stopPropagation()"
                  @click="addOrDeleteTableRow('header', row, 'minus')"
                />
              </template>
            </DynamicTable>
          </el-tab-pane>
          <el-tab-pane label="Cookie参数" name="cookie">
            <CodemirrorEditor
              v-if="!requestConfig.cookie.paramsData.isShowTable"
              v-model="requestConfig.cookie.paramsData.jsonData"
            />
            <DynamicTable
              border
              v-else
              class="table-container"
              :loading="requestConfig.cookie.tableLoading"
              :columns="requestConfig.cookie.paramsData.tableColumns"
              v-model="requestConfig.cookie.paramsData.tableData"
              @notify="handleDynamicTableNotify"
            >
              <template #operation="{ row }">
                <app-svg
                  icon-name="add"
                  size="20"
                  @mousedown="(e) => e.stopPropagation()"
                  @click="addOrDeleteTableRow('cookie', row, 'add')"
                />
                <app-svg
                  icon-name="minus"
                  size="20"
                  @mousedown="(e) => e.stopPropagation()"
                  @click="addOrDeleteTableRow('cookie', row, 'minus')"
                />
              </template>
            </DynamicTable>
          </el-tab-pane>
        </el-tabs>
      </el-collapse-item>
      <el-collapse-item class="response-content" title="响应数据" name="3">
        <template #title>
          <div class="title">响应数据</div>
        </template>
        <div class="content">
          <CodemirrorEditor v-model="responseConfig.data" />
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>
<script lang="jsx" setup>
import { useRouter } from "vue-router";
import { ref, watch, computed, onBeforeMount, nextTick, onMounted } from "vue";
import {
  ElCard,
  ElTooltip,
  ElLink,
  ElButton,
  ElPopconfirm,
  ElTree,
  ElInput,
  ElSelect,
  ElOption,
  ElTabs,
  ElTabPane,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElRadioGroup,
  ElRadio,
  ElTag,
  ElCollapse,
  ElCollapseItem,
} from "element-plus";
import CodemirrorEditor from "@/components/codemirror-editor/index.vue";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DynamicTable from "@/components/dynamic-widget/dynamic-table.vue";
import AppSvg from "@/components/app-svg/index.vue";
import { cloneDeep } from "lodash-es";
import {
  formDataDefaultValue,
  genRequestConfigByFormData,
  genFormDataByRequestConfig,
  randomLenNum,
  validRequestConfigData,
  parseNonStrictJsonString
} from "./util";
import { proxyRequest,queryOpenAppListByServiceCode,getRequestApiToken } from "@/api/api-debugger";
import {
  queryOpenAppList,
  queryAppBindApiPageList
} from "@/api/application";
import { queryApiRequestParam } from "@/api/archive";


const router = useRouter();
const emits = defineEmits(["update:modelValue", "update:serviceInfo"]);
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return cloneDeep(genRequestConfigByFormData(formDataDefaultValue));
    },
  },
});
const apiCode = ref("")
const activeCollapses = ref(["1", "2", "3"]);
const serviceInfoFormItems = ref([
  {
    widget: "descriptions",
    span: 24,
    widgetAttrs: {
      border: true,
      // direction: "vertical",
      column: 3,
      options: [
        {
          label: "所属应用",
          "label-class-name": "appId-label",
          "class-name": "appId-content",
          childWidget: {
            widget: "select",
            formDataKey: "appId",
            widgetAttrs:{
              options: []
            }
          },
        },
        {
          label: "接口Code",
          "label-class-name": "apiCode-label",
          "class-name": "apiCode-content",
          childWidget: {
            widget: "select",
            formDataKey: "apiCode",
            widgetAttrs:{
              options: []
            }
          },
        },
        {
          label: "接口版本",
          "label-class-name": "apiVersion-label",
          "class-name": "apiVersion-content",
          childWidget: {
            widget: "text",
            formDataKey: "apiVersion",
          },
        },
        {
          label: "接口描述",
          "label-class-name": "apiDesc-label",
          "class-name": "apiDesc-content",
          childWidget: {
            widget: "text",
            formDataKey: "apiDesc",
          },
        },
        {
          label: "接口名称",
          "label-class-name": "apiName-label",
          "class-name": "apiName-content",
          childWidget: {
            widget: "text",
            formDataKey: "apiName",
          },
        },
        {
          label: "所属环境",
          "label-class-name": "env-label",
          "class-name": "env-content",
          childWidget: {
            widget: "slot",
            slot: "env",
          },
        },

        {
          label: "鉴权token",
          "label-class-name": "token-label",
          "class-name": "token-content",
          childWidget: {
            formDataKey: "token",
            render: (h, scope) => {
              return (
                <div className="token-wrap">
                  <ElInput disabled v-model={scope.formData.token}></ElInput>
                  <ElButton onclick={getRequestToken}>获取token</ElButton>
                </div>
              );
            },
          },
        },
      ],
    },
  },
]);
const responseConfig = ref({ data: `{}` });
const bodyParamsTypeList = ref([
  "none",
  "form-data",
  "x-www-form-urlencoded",
  "raw",
]);
const contentTypeList = ref([
  { label: "JSON", value: "application/json" },
  { label: "HTML", value: "application/html" },
  { label: "XML", value: "application/xml" },
  { label: "Javascript", value: "application/javascript" },
  { label: "TEXT", value: "application/text" },
]);
const defaultCOnfigData = genRequestConfigByFormData(formDataDefaultValue)
const requestConfig = ref(cloneDeep(defaultCOnfigData)) 
// const requestConfig = computed({
//   get() {
//     if (!props.modelValue || !Object.keys(props.modelValue).length) {
//       const defaultConfig = cloneDeep(
//         genRequestConfigByFormData(formDataDefaultValue)
//       );
//       emits("update:modelValue", defaultConfig);
//       return defaultConfig;
//     } else {
//       return props.modelValue;
//     }
//   },
//   set(val) {
//     emits("update:modelValue", val);
//   },
// });
const isShowTable = computed(()=>{
  const paramCategory = requestConfig.value.paramCategory
  if(paramCategory === 'body'){
    const paramsType = requestConfig.value.body.paramsType
    const paramsData=requestConfig.value.body[paramsType]
    return paramsData.isShowTable
  }else{
    return requestConfig.value[paramCategory].paramsData.isShowTable
  }
})
function isCanJsonConvertTableData(jsonData) {
  if (!jsonData) {
    return false;
  }
  let isCanShowTable = true;
  if (Object.prototype.toString.call(jsonData) === "[object Object]") {
    Object.keys(jsonData).forEach((key) => {
      if (typeof jsonData[key] === "object") {
        isCanShowTable = false;
      }
    });
  } else {
    isCanShowTable = false;
  }
  return isCanShowTable;
}

function changeEvn() {
  nextTick(() => {
    const serviceInfo = requestConfig.value.serviceInfo
    const selectedEnvItem = serviceInfo.envInfoList.find((x) => x.env === serviceInfo.env);
    if (selectedEnvItem) {
      requestConfig.value.main.fullUrl = `${selectedEnvItem.urlPrefix}${requestConfig.value.main.url}`
    }
    getRequestToken()
  })
}
function changeDisplayType() {
  let jsonDataObj = null;
  let tableData = [];
  let isCanShowTable = true;
  let requestConfigObj = null;
  const key = requestConfig.value.paramCategory;
  if (key === "body") {
    const paramsType = requestConfig.value.body.paramsType;
    requestConfigObj = requestConfig.value.body[paramsType];
  } else {
    requestConfigObj = requestConfig.value[key].paramsData;
  }
  jsonDataObj = parseNonStrictJsonString(requestConfigObj.jsonData);


  if (!requestConfigObj.isShowTable) {
    isCanShowTable = isCanJsonConvertTableData(jsonDataObj);
    if (isCanShowTable) {
      Object.keys(jsonDataObj).forEach((code) => {
        tableData.push({
          id: randomLenNum(6),
          code: code,
          value: jsonDataObj[code],
        });
      });
      requestConfigObj.tableData = tableData;
      requestConfigObj.isShowTable = true;
    } else {
      window.$msg.error("当前Json格式不支持转成表格显示!");
    }
  } else {
    let jsonData = {};
    requestConfigObj.tableData.forEach((x) => {
      jsonData[x.code] = x.value;
    });
    requestConfigObj.isShowTable = false;
    requestConfigObj.jsonData = JSON.stringify(jsonData, null, 2);
  }
}
function handleBodyParamsTypeChange(name) {
  requestConfig.value.body.paramsType = name;
}
function addOrDeleteTableRow(key, row, type) {
  const paramsType = requestConfig.value[key].paramsType;
  const tableData = requestConfig.value[key][paramsType].tableData;
  const i = tableData.findIndex((x) => x.id === row.id);
  if (type === "add") {
    const newRow = {
      id: randomLenNum(6),
      code: "",
      value: "",
    };
    tableData.splice(i + 1, 0, newRow);
  }
  if (type === "minus") {
    if (tableData.length === 1) {
      tableData[0].code = "";
      tableData[0].value = "";
    } else {
      tableData.splice(i, 1);
    }
  }
}
async function sendProxyRequest() {
  const appId = requestConfig.value.serviceInfo.appId
  const apiCode = requestConfig.value.serviceInfo.apiCode
  const token = requestConfig.value.serviceInfo.token
  const env = requestConfig.value.serviceInfo.env
  if(!appId){
    return window.$msg.error("请先选择所属应用!");
  }
  if(!env){
    return window.$msg.error("请先选择所属环境!");
  }
  if(!token){
    return window.$msg.error("请获取鉴权token!");
  }
  if(!apiCode){
    return window.$msg.error("请选择Api");
  }
  const validObj = validRequestConfigData(requestConfig.value);
  if(!validObj.result){
    return window.$msg.error(validObj.message || '');
  }
  const debuggerFormData = genFormDataByRequestConfig(requestConfig.value);
  const resp = await proxyRequest(debuggerFormData,token);
  if (resp.code === "200") {
    const respData = parseNonStrictJsonString(resp.data.data)
    responseConfig.value.data = JSON.stringify(respData || '', null, 2);
    window.$msg.success(resp.message || "请求成功!");
  } else {
    window.$msg.error(resp.message || "请求失败!");
  }
}
async function getRequestToken(){
  const appId = requestConfig.value.serviceInfo.appId
  const env = requestConfig.value.serviceInfo.env
  if(!appId){
    return window.$msg.error("请先选择所属应用!");
  }
  if(!env){
    return window.$msg.error("请先选择所属环境!");
  }
  // 计算所需参数
  const appWidget = serviceInfoFormItems.value[0].widgetAttrs.options.find(x=>x.label==='所属应用')
  const appList=appWidget.childWidget.widgetAttrs.options
  const selectedAppItem = appList.find(x=>x.value===appId)
  const client_id = selectedAppItem.apiKey
  const client_secret = selectedAppItem.secretKey
  // 计算选中的环境url
  const envList= requestConfig.value.serviceInfo.envInfoList
  const selectedEnvItem = envList.find(x=>x.env===env)
  const urlPrefix = selectedEnvItem.urlPrefix
  const requestUrl = `${urlPrefix}/admin/client/token?client_id=${client_id}&client_secret=${client_secret}`
  const resp = await getRequestApiToken(requestUrl)
  requestConfig.value.serviceInfo.token = resp.data?.access_token || ''

  // 同步请求头中的token
  setRequestHeaderToken(resp.data?.access_token || '')
}
function setRequestHeaderToken (token) {
  const header = requestConfig.value.header
  if(header.paramsData.isShowTable){
    const paramsType = header.paramsType;
    const tableData = header[paramsType].tableData;
    const i = tableData.findIndex(x=>x.code === 'Authorization');
    if (i === -1) {
      const newRow = {
        id: randomLenNum(6),
        code: "Authorization",
        value: `Bearer ${token || ''}`,
      };
      tableData.splice(0, 0, newRow);
    } else {
      tableData[i].value = `Bearer ${token || ''}`
    }
  } else {
    if (header.paramsData.jsonData) {
      const objData = parseNonStrictJsonString(header.paramsData.jsonData) || [];
      objData["Authorization"] = `Bearer ${token || ''}`;
      result.headerData = JSON.stringify(objData, null, 2);
    } else {
      const objData = {
        "Authorization" : `Bearer ${token || ''}`
      }
      result.headerData = JSON.stringify(objData, null, 2);
    }
  }
}
async function queryAppListByServiceCode(serviceCode){
  const appSelectWidget = serviceInfoFormItems.value[0].widgetAttrs.options[0].childWidget
  const resp = await queryOpenAppListByServiceCode({serviceCode});
  if(resp?.data){
    resp.data.forEach(x=>{
      x.label = x.appName
      x.value = x.appId
    })
  }
  appSelectWidget.widgetAttrs.options = resp.data||[]
}
async function queryAppList(){
  const appSelectWidget = serviceInfoFormItems.value[0].widgetAttrs.options[0].childWidget
  const resp = await queryOpenAppList({
    pageNo:1,
    pageSize:9999,
    approveStatus:1,//"审批通过
    admin:false
  });
  if(resp?.data?.dataList){
    resp.data.dataList.forEach(x=>{
      x.label = x.appName
      x.value = x.id
    })
  }
  appSelectWidget.widgetAttrs.options = resp?.data?.dataList || []
}
async function queryAppCodeList(appId){
  const apiWidget = serviceInfoFormItems.value[0].widgetAttrs.options.find(x=>x.label === '接口Code')
  const resp = await queryAppBindApiPageList({
    pageNo:1,
    pageSize:9999,
    openAppId:appId
  });
  
  if(resp?.data?.dataList){
    resp.data.dataList.forEach(x => {
      x.label = `${x.apiCode}(${x.apiName})`
      x.value = x.apiCode
    })
  }
  apiWidget.childWidget.widgetAttrs.options = resp?.data?.dataList || []
}

async function loadApiRequestParam(code) {
  if (!code) return;
  const appId = requestConfig.value.serviceInfo.appId
  const resp = await queryApiRequestParam({ apiCode: code });
  if (resp.code === "200" && resp.data) {
    resp.data.url = resp.data.apiUrl;
    resp.data.method = resp.data.method.toUpperCase();
    resp.data.appId = appId || ''
    const data = genRequestConfigByFormData(resp.data);
    requestConfig.value = data || {};
  }
}

function handleDynamicFormNotify(params){
  if (['change'].includes(params.eventType) && params.formDataKey === "appId") {
    queryAppCodeList(params.widgetValue.value)
    if (!apiCode.value) {
      const data =  cloneDeep(defaultCOnfigData)
      data.serviceInfo.appId = params.widgetValue.value
      requestConfig.value = data
    }
  }
  if (['change'].includes(params.eventType) && params.formDataKey === "apiCode") {
    loadApiRequestParam(params.widgetValue.value)
  }
}

function handleDynamicTableNotify(params) {
  
}

onMounted(()=>{
  apiCode.value = router.currentRoute.value.query.apiCode;
  if(router.currentRoute.value.path === '/api-test-tool'){
    if(apiCode.value){
      const appCodeWidget = serviceInfoFormItems.value[0].widgetAttrs.options.find(x=>x.label === '接口Code')
      appCodeWidget.childWidget.widget = 'text'
      queryAppListByServiceCode(apiCode.value)
      loadApiRequestParam(apiCode.value)
    } else {
      queryAppList()
    }
  } else if(['/portal/api-detail','/archive-preview'].includes(router.currentRoute.value.path)) {
    if(apiCode.value) {
      const appCodeWidget = serviceInfoFormItems.value[0].widgetAttrs.options.find(x=>x.label === '接口Code')
      appCodeWidget.childWidget.widget = 'text'
      queryAppListByServiceCode(apiCode.value)
      loadApiRequestParam(apiCode.value)
    }
  }
})
</script>
<style lang="scss" scoped>
.api-test-tool {
  :deep(.el-card__body) {
    padding: 0px;
    .el-collapse {
      border: 0px;
      --el-collapse-border-color: var(--el-border-color);
      --el-collapse-header-bg-color: #f5f7fa;
      --el-collapse-header-height: 40px;
      .service-info {
        .el-collapse-item__header {
          &.is-active {
            border-bottom-color: var(--el-border-color);
          }
          .title {
            font-weight: 600;
            padding: 0px 10px;
            font-size: larger;
            // border-bottom: 1px solid var(--el-border-color);
          }
        }
        .el-collapse-item__wrap {
          .el-collapse-item__content {
            padding-bottom: 0px;
            // border-top: 1px solid var(--el-border-color);
            .content {
              padding: 5px;
              // border-bottom: 1px solid var(--el-border-color);
              .dynamic-form {
                .el-form-item {
                  .el-form-item__content {
                    .widgets-text {
                      height: 32px;
                    }
                  }
                }
                .widgets-descriptions {
                  .el-descriptions__body {
                    .appId-label,.apiCode-label,.apiVersion-label,.token-label {
                      width: 120px;
                    }
                    .appId-content,.apiCode-content,.apiVersion-content {
                      min-width: 100px;
                    }
                    
                    .token-content {
                      .token-wrap {
                        display: flex;
                        .el-input{
                          margin-right: 10px;
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
      .request-config {
        // border-bottom: 1px solid var(--el-border-color);
        .el-collapse-item__header {
          &.is-active {
            border-bottom-color: var(--el-border-color);
          }
          .title {
            font-weight: 600;
            padding: 0px 10px;
            font-size: larger;
            // border-bottom: 1px solid var(--el-border-color);
          }
        }
        .el-collapse-item__wrap {
          .el-collapse-item__content {
            padding-bottom: 0px;
            // border-top: 1px solid var(--el-border-color);
            .request-url {
              padding: 5px 5px;
              // box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
              border-bottom: 1px solid var(--el-border-color);
            }
            .el-tabs {
              padding: 0px;
              // width: calc(100% - 20px);
              position: relative;
              .change-btn {
                top: 8px;
                right: 10px;
                z-index: 12;
                position: absolute;
                z-index: 12;
                // background-color: #cc7829;
                // width: 150px;
                // height: 30px;
                // border-radius: 5px;
                // text-align: center;
                // display: flex;
                // align-items: center;
                // justify-content: center;
                // cursor: pointer;
                // color: #fff;
                // transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
                &.isShowTable {
                  // background-color: #1e80ff;
                }
              }
              .el-tabs__header {
                margin-bottom: 0px;
                background-color: #fafafa;
                .el-tabs__new-tab {
                  width: 0px;
                  padding: 0px;
                  border: 0px;
                  margin: 0px;
                }
                .el-tabs__nav-wrap {
                  &::after {
                    height: 1px;
                  }
                  .el-tabs__nav {
                    margin-left: 10px;
                  }
                  .el-tabs__item {
                    width: 100px;
                    padding: 0px;
                    .is-icon-close {
                      display: none;
                    }
                  }
                }
              }

              .el-tabs__content {
                width: calc(100% - 10px);
                padding: 5px 5px;
                position: relative;
                .body-params-type {
                  background-color: #fff;
                  // width: calc(100% - 2px);
                  // margin-left: 1px;
                  width: 100%;
                  box-sizing: border-box;
                  border: 1px solid var(--el-border-color);
                  // border-bottom: 0px;
                  border-top-left-radius: 5px;
                  border-top-right-radius: 5px;
                  display: flex;
                  align-items: center;
                  border-bottom: 0px;
                  background-color: #fafcff;
                  .content-type {
                    margin-left: 8px;
                    width: 100px;
                  }
                  .el-tag {
                    margin: 5px 10px;
                    cursor: pointer;
                  }
                  &.none {
                    border-bottom: 1px solid var(--el-border-color);
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                  }
                }
                .dynamic-table {
                  width: calc(100% - 0px);
                  height: 350px;
                  .operation {
                    .cell {
                      display: flex;
                      justify-content: center;
                      .app-svg {
                        cursor: pointer;
                        width: 30px;
                        height: 30px;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &:hover {
                          color: blueviolet;
                        }
                        &:nth-child(2) {
                          margin-left: 30px;
                        }
                      }
                    }
                  }
                }
                .codemirror-editor {
                  width: calc(100% + 0px);
                  height: 350px;
                }

                #pane-url {
                  // display: flex;
                  // justify-content: space-between;
                }
                #pane-body {
                  .dynamic-table {
                    height: calc(350px - 35px);
                  }
                  .codemirror-editor {
                    width: calc(100% + 0px);
                    height: calc(350px - 35px);
                  }
                }
              }
            }
          }
        }
      }
      .response-content {
        // height: calc(100% - 530px);
        // display: flex;
        // flex-direction: column;
        .el-collapse-item__header {
          &.is-active {
            border-bottom-color: var(--el-border-color);
          }
          .title {
            font-weight: 600;
            padding: 0px 10px;
            font-size: larger;
            // border-bottom: 1px solid var(--el-border-color);
          }
        }
        .el-collapse-item__wrap {
          .el-collapse-item__content {
            padding-bottom: 0px;
            // border-top: 1px solid var(--el-border-color);
            & > .content {
              padding: 5px 5px 5px 5px;
              .codemirror-editor {
                width: 100%;
                height: 400px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
