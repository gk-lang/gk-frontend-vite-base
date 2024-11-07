<template>
  <div class="archive-manage-add-or-edit auto-container">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      @edit="handleTabsEdit"
      :before-leave="tabBeforeLeave"
    >
      <el-tab-pane
        class="doc-content-pane"
        name="doc-content"
        label="文档内容"
        :closable="false"
      >
        <el-card>
          <el-form
            ref="formRef"
            v-if="mainType === 'api-doc'"
            :model="formData"
            :rules="formRules"
            class="doc-content"
            label-position="left"
            label-width="80px"
          >
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="文档名称" prop="name" class="name">
                  <el-input
                    v-model="formData.name"
                    placeholder="请输入文档名称"
                    :prefix-icon="Document"
                    clearable
                  />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="文档类型" prop="docType" class="docType">
                  <el-select v-model="formData.docType">
                    <template #prefix>
                      <app-svg icon-name="doc-type" size="16"></app-svg>
                    </template>
                    <el-option label="Markdown编辑器" value="1" />
                    <el-option label="富文本编辑器" value="2" />
                    <!-- <el-option
                      label="附件(doc,docx,xls,xlsx,xlsm,ppt,pptx,txt,csv,pdf,xmind,drawio等等)"
                      value="Attachment"
                    /> -->
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item
                  label="文档说明"
                  prop="shareDesc"
                  class="shareDesc"
                >
                  <el-input
                    v-model="formData.shareDesc"
                    placeholder="请输入文档说明"
                    clearable
                  >
                    <template #prefix>
                      <app-svg icon-name="description" size="13"></app-svg>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
              
              
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6"
                ><el-form-item
                  label="接口服务编码"
                  prop="serviceCode"
                  class="serviceCode"
                >
                  <el-select
                    filterable
                    v-model="formData.serviceCode"
                    placeholder="请选择接口服务编码"
                    @change="handleServiceCodeChange"
                  >
                    <template #prefix>
                      <app-svg icon-name="api-code" size="13"></app-svg>
                    </template>
                    <el-option
                      v-for="item in openApiList"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select> </el-form-item
              ></el-col>
              <el-col :span="6">
                <el-form-item label="接口类型" prop="apiType" class="apiType">
                  <el-select v-model="formData.apiType" @change="handleServiceCodeChange">
                    <template #prefix>
                      <app-svg icon-name="api-type" size="18"></app-svg>
                    </template>
                    <el-option label="普通类接口" value="1" />
                    <el-option label="推送类接口" value="2" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6" v-if="formData.apiType === '2'">
                <el-form-item label="推送接口编码" prop="pushApiCode" class="pushApiCode">
                  <el-input
                    v-model="formData.pushApiCode"
                    placeholder="请输入推送接口编码"
                    clearable
                  >
                    <template #prefix>
                      <app-svg icon-name="description" size="13"></app-svg>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item
                  label="存储目录"
                  prop="apiDocTypeId"
                  class="apiDocTypeId"
                >
                  <el-tree-select
                    v-model="formData.apiDocTypeId"
                    :data="apiDocTypeTreeData"
                    check-strictly
                  >
                    <template #prefix>
                      <app-svg icon-name="folder" size="16"></app-svg>
                    </template>
                  </el-tree-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="editor-wrap">
              <el-col :span="24">
                <el-form-item class="editor">
                  <MarkdownEditor
                    v-if="formData.docType === '1'"
                    v-model="formData.markdownEditorValue"
                  />
                  <RichTinymceEditor
                    v-if="formData.docType === '2'"
                    v-model="formData.richEditorValue"
                  />
                  <SimpleUploader
                    v-if="formData.docType === '3'"
                    v-model="formData.attachmentValue"
                  />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-form
            ref="formRef"
            v-else
            :model="formData"
            :rules="formRules"
            class="doc-content"
            label-position="left"
            label-width="80px"
          >
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="文档名称" prop="name" class="name">
                  <el-input
                    v-model="formData.name"
                    placeholder="请输入文档名称"
                    :prefix-icon="Document"
                    clearable
                  />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="文档类型" prop="docType" class="docType">
                  <el-select v-model="formData.docType">
                    <template #prefix>
                      <app-svg icon-name="doc-type" size="16"></app-svg>
                    </template>
                    <el-option label="Markdown编辑器" value="1" />
                    <el-option label="富文本编辑器" value="2" />
                    <!-- <el-option
                      label="附件(doc,docx,xls,xlsx,xlsm,ppt,pptx,txt,csv,pdf,xmind,drawio等等)"
                      value="Attachment"
                    /> -->
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item
                  label="文档说明"
                  prop="shareDesc"
                  class="shareDesc"
                >
                  <el-input
                    v-model="formData.shareDesc"
                    placeholder="请输入文档说明"
                    clearable
                  >
                    <template #prefix>
                      <app-svg icon-name="description" size="13"></app-svg>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item
                  label="存储目录"
                  prop="apiDocTypeId"
                  class="apiDocTypeId"
                >
                  <el-tree-select
                    v-model="formData.apiDocTypeId"
                    :data="apiDocTypeTreeData"
                    check-strictly
                  >
                    <template #prefix>
                      <app-svg icon-name="folder" size="16"></app-svg>
                    </template>
                  </el-tree-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="editor-wrap">
              <el-col :span="24">
                <el-form-item class="editor">
                  <MarkdownEditor
                    v-if="formData.docType === '1'"
                    v-model="formData.markdownEditorValue"
                  />
                  <RichTinymceEditor
                    v-if="formData.docType === '2'"
                    v-model="formData.richEditorValue"
                  />
                  <SimpleUploader
                    v-if="formData.docType === '3'"
                    v-model="formData.attachmentValue"
                  />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </el-tab-pane>
      <template v-if="mainType === 'api-doc'">
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
          class="api-debug-pane"
        >
          <el-card>
            <ApiDebuggerTool v-model="debuggerRequestConfig" />
          </el-card>
        </el-tab-pane>
      </template>
    </el-tabs>
    <el-button class="save-btn" type="primary" plain @click="saveData"
      >保存</el-button
    >
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onActivated, watch } from "vue";
import {
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElButton,
  ElCard,
  ElRow,
  ElCol,
  ElTreeSelect
} from "element-plus";
import { Document } from "@element-plus/icons-vue";
import ApiDebuggerTool from "@/components/api-test-tool/index.vue";
import {
  genFormDataByRequestConfig,
  genRequestConfigByFormData,
} from "@/components/api-test-tool/util.js";
import MarkdownEditor from "@/components/markdown-editor/markdown-editor.vue";
import RichTinymceEditor from "@/components/rich-tinymce/rich-tinymce-editor.vue";
import SimpleUploader from "@/components/simple-uploader/index.vue";
import AppSvg from "@/components/app-svg/index.vue";

import {
  queryApiDocTypeTree,
  saveOrUpdateApiDoc,
  queryApiDocDetail,
  queryOpenApiList,
  queryApiRequestParam,
  saveOrUpdateApiRequestParam,
} from "@/api/archive";

import { useUserStore } from "@/store/modules/user";
import { useRouter } from "vue-router";
import { cloneDeep } from "lodash-es";


const userStore = useUserStore();
const router = useRouter();
const formRef = ref();
const apiDocTypeTreeData = ref([]);
const openApiList = ref();
const apiCode = ref("");
// MarkdownEditor RichEditor Attachment
const formData = ref({
  apiDocTypeId: undefined,
  name: "",
  shareDesc: "",
  serviceCode: "",
  docType: "1",
  apiType: "1",
  richEditorValue: "",
  markdownEditorValue: "",
  attachmentValue: "",
  pushApiCode:""
});
const formRules = ref({
  name: [{ validator: validateArchiveName, trigger: "blur", required:true }],
  apiDocTypeId: {
    required: true,
    message: '请选择存储目录',
    trigger: 'change',
  },
});

const editableTabsValue = ref("doc-content");
const editableTabs = ref([
  {
    title: "调试示例",
    name: "1",
    content: "Tab 1 content",
  },
]);
const debuggerRequestConfig = ref({});
const mainType = computed(() => {
  return router.currentRoute.value.query.mainType;
});
function handleServiceCodeChange(){
  const selectedItem = openApiList.value.find(x=>x.value === formData.value.serviceCode)
  if (selectedItem) {
    formData.value.pushApiCode  = selectedItem.apiCode || ''
  }
}
function handleTabsEdit(targetName, action) {
  if (action === "add") {
    const newTabName = `${++tabIndex}`;
    editableTabs.value.push({
      title: "New Tab",
      name: newTabName,
      content: "New Tab content",
    });
    editableTabsValue.value = newTabName;
  } else if (action === "remove") {
    const tabs = editableTabs.value;
    let activeName = editableTabsValue.value;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }
    editableTabsValue.value = activeName;
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
  }
}
function tabBeforeLeave() {
  if (formData.value.id) {
    return Promise.resolve();
  } else {
    window.$msg.error("请先完成文档新建，然后查看调试示例!");
    return Promise.reject();
  }
}
async function loadTreeData(menu) {
  const resp = await queryApiDocTypeTree({
    parentId: 0,
    queryAllSub: 1,
    level: 100,
  });
  if(menu==='api') {
    const root = resp.data.filter((x) => x.menu === 'api')
    apiDocTypeTreeData.value = root[0].children;
  }
  if(menu==='common') {
    const root = resp.data.filter((x) => x.menu !== 'api')
    apiDocTypeTreeData.value = root;
  }
}
async function loadOpenApiList() {
  const resp = await queryOpenApiList({ pageNo: 1, pageSize: 999999 });
  openApiList.value = resp.data?.dataList || [];
  openApiList.value.forEach((item) => {
    item.label = `${item.apiCode}(${item.apiName})`;
    item.value = item.apiCode;
  });
}
function validateArchiveName(rule, value, callback) {
  if (!value) {
    return callback(new Error("请输入文档名称"));
  }
  if (value.length < 2 || value.length > 50) {
    return callback(new Error("文档名称的字符长度应该在2-50字符之间"));
  }
  callback();
}
function saveData() {
  if (editableTabsValue.value === "doc-content") {
    saveDocContent();
  } else {
    saveDebuggerData();
  }
}
async function saveDocContent() {
  const params = cloneDeep(formData.value);
  if (params.docType === "1") {
    params.content = params.markdownEditorValue;
  } else if (params.docType === "2") {
    params.content = params.richEditorValue;
  }
  params.apiType += ''
  if (params.apiType === '1') {
    params.pushApiCode = ''
  }
  // 文档类型，1接口文档、2普通文档
  if (mainType.value === 'api-doc') {
    params.type = '1'
  }else{
    params.type = '2'
  }
  
  delete params.markdownEditorValue;
  delete params.richEditorValue;
  delete params.attachmentValue;

  const resp = await saveOrUpdateApiDoc(params);
  if (resp.code === "200") {
    formData.value.id = resp.data || params.id || "";
    apiCode.value = formData.value.serviceCode;
    window.$msg.success(resp.message || "保存成功!");
  } else {
    window.$msg.error(resp.message || "保存失败!");
  }
}
async function saveDebuggerData() {
  const debuggerFormData = genFormDataByRequestConfig(
    debuggerRequestConfig.value
  );
  debuggerFormData.apiUrl = debuggerFormData.url;
  debuggerFormData.docId = formData.value.id;
  debuggerFormData.apiCode = apiCode.value;
  const resp = await saveOrUpdateApiRequestParam(debuggerFormData);
  if (resp.code === "200") {
    if (!debuggerRequestConfig.value.id) {
      debuggerRequestConfig.value.id = resp.data;
    }
    window.$msg.success(resp.message || "保存成功!");
  } else {
    window.$msg.error(resp.message || "保存失败!");
  }
  console.log("debuggerFormData:", debuggerFormData);
}
async function loadApiRequestParam(code) {
  const resp = await queryApiRequestParam({ apiCode: code });
  if (resp.code === "200") {
    if(resp.data){
      resp.data.url = resp.data.apiUrl;
      resp.data.method = resp.data.method.toUpperCase();
      const requestConfig = genRequestConfigByFormData(resp.data);
      debuggerRequestConfig.value = requestConfig;
    }
  } else {
    window.$msg.error("请求参数加载失败!");
  }
}
async function loadPageDatails() {
  const id = router.currentRoute.value.query.id;
  apiCode.value = router.currentRoute.value.query.apiCode;
  if (id) {
    const resp = await queryApiDocDetail({ id });
    formData.value.id = resp.data.id;
    formData.value.docType = resp.data.docType + "";
    formData.value.apiDocTypeId = resp.data.apiDocTypeId;
    formData.value.name = resp.data.name;
    formData.value.shareDesc = resp.data.shareDesc;
    formData.value.serviceCode = resp.data.serviceCode;
    formData.value.apiType = resp.data.apiType + '';
    formData.value.pushApiCode = resp.data.pushApiCode;

    const docTypeMap = {
      1: "markdownEditorValue",
      2: "richEditorValue",
      3: "attachmentValue",
    };
    const key = docTypeMap[resp.data.docType];
    formData.value[key] = resp.data.content;
  }
}
watch(
  () => mainType.value,
  (nv) => {
    if (nv) {
      if(mainType.value === 'api-doc'){
        loadTreeData('api');
      }else{
        loadTreeData('common');
      }
    }
  },{
    immediate:true
  }
);
onActivated(() => {
  loadPageDatails();
});
onMounted(() => {
  loadPageDatails();
  loadOpenApiList();
});
</script>

<style lang="scss">
.archive-manage-add-or-edit {
  position: relative;
  .save-btn {
    position: absolute;
    top: 8px;
    right: 7px;
  }
  & > .el-tabs {
    .el-tabs__header {
      margin: 0px;
      border-bottom: 1px;
      .el-tabs__item {
        // font-size: larger;
        &:nth-child(2).is-active{
          background-color: #f5f7fa;
        }
      }
    }
  }

  .doc-content-pane {
    // height: calc(100% - 10px);
    .el-card {
      // height: 100%;
      .el-card__body {
        // height: calc(100% - 0px);
        .el-form {
          height: 100%;
          display: flex;
          flex-direction: column;
          // .el-form-item__label {
          //   text-align: center;
          //   padding: 0px;
          // }

          .name {
          }
          .apiType{
            .app-svg {
              display: flex;
              height: 18px;
              line-height: 18px;
            }
          }
          .docType {
            .app-svg {
              display: flex;
              height: 18px;
              line-height: 18px;
            }
          }
          .shareDesc {
            .app-svg {
              display: flex;
            }
          }
          .apiDocTypeId {
            .app-svg {
              height: 18px;
              line-height: 18px;
            }
            .el-form-item__content {
              display: flex;
              justify-content: space-between;
            }
            .vue3-treeselect {
              width: 100%;
            }
            .vue3-treeselect__control {
              line-height: 28px;
              height: 28px;
              .vue3-treeselect__placeholder {
                line-height: 30px;
                height: 30px;
                color: var(--el-text-color-placeholder);
                display: flex;
                &::before {
                  content: "";
                  background-image: url("@/assets/archive/fold.png");
                  background-repeat: no-repeat;
                  background-size: 14px 14px;
                  background-position: center center;
                  display: block;
                  width: 15px;
                  height: 15px;
                  margin-top: 7px;
                  margin-right: 7px;
                }
                &.vue3-treeselect-helper-hide {
                  display: none;
                }
              }
              .vue3-treeselect__single-value {
                line-height: 30px;
                height: 30px;
                display: flex;
                &::before {
                  content: "";
                  background-image: url("@/assets/archive/fold.png");
                  background-repeat: no-repeat;
                  background-size: 14px 14px;
                  background-position: center center;
                  display: block;
                  width: 15px;
                  height: 15px;
                  margin-top: 7px;
                  margin-right: 7px;
                }
              }
              .vue3-treeselect__input-container {
                .vue3-treeselect__input {
                  line-height: 30px;
                  height: 30px;
                }
              }
            }
          }
          .serviceCode,.pushApiCode  {
            .app-svg {
              height: 13px;
              line-height: 13px;
            }
            .el-form-item__label {
              height: 18px;
              line-height: 18px;
            }
          }
          .editor-wrap {
            flex: 1;
            height: calc(100% - 200px);
            .el-col {
              height: 100%;
            }
          }
          .editor {
            flex: 1;
            height: 770px;
            .el-form-item__content {
              // height: calc(100% - 32px);
              flex-direction: column;
              align-items: start;
              .markdown-editor {
                height: 100%;
                .md-editor {
                  height: 100%;
                }
              }
              .md-editor-footer {
                line-height: 24px;
              }
              .example-uploader {
                height: calc(100% - 250px);
                width: 90%;
              }
            }
          }
        }
      }
    }
  }
  .api-debug-pane {
    // height: calc(100% - 10px);
    & > .el-card {
      // height: 100%;
      .el-card__body {
        // height: calc(100% - 0px);
        padding: 0px;
        .save-debugger-btn {
          position: absolute;
          right: 10px;
          top: 7px;
        }
        .api-test-tool {
          border: 0px;
        }
      }
    }
  }
}
</style>
