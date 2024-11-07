<template>
  <div class="api-detail" id="api-detail-preview">
    <div class="main">
      
      <div>
        <!-- <div class="debugger-tool" v-show="!editorShowType">
        <ApiDebuggerTool v-model="debuggerRequestConfig" />
      </div> -->
        <!-- <div class="nav-path">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
        </div> -->
        <MarkdownPreview
          v-if="formData.docType === '1'"
          v-model="formData.markdownEditorValue"
          :articleMeta="formData"
          :debuggerConfig="debuggerRequestConfig"
          v-model:showType="editorShowType"
          :scrollRoot="scrollRoot"
        />
        <RichTinymcePreview
          v-else-if="formData.docType === '2'"
          v-model="formData.richEditorValue"
          :articleMeta="formData"
          :debuggerConfig="debuggerRequestConfig"
          v-model:showType="editorShowType"
        />
        <div v-else>该类型还在开发中，尚不能预览</div>
      </div>
      <div class="tool-bar">
        <!-- <div class="btn" @click="changeDisplayContent">
          <app-svg
            v-if="editorShowType === 'doc'"
            icon-name="debugger-tool"
            size="18"
          ></app-svg>
          <app-svg v-else icon-name="article" size="20"></app-svg>
        </div> -->
        <div class="btn" v-show="isShowGoTopBtn" @click="scrollToTop">
          <app-svg icon-name="go-top" size="20"></app-svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onActivated, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import MarkdownPreview from "@/components/markdown-editor/markdown-preview.vue";
import RichTinymcePreview from "@/components/rich-tinymce/rich-tinymce-preview.vue";
// import ApiDebuggerTool from "@/components/api-test-tool/index.vue";
import AppSvg from "@/components/app-svg/index.vue";
// import { ElBreadcrumb,ElBreadcrumbItem } from "element-plus";
import { queryApiRequestParam, queryApiDocDetail } from "@/api/archive";
import {
  genFormDataByRequestConfig,
  genRequestConfigByFormData,
} from "@/components/api-test-tool/util.js";
import { useAppStore } from "@/store/modules/app";
import { throttle } from "lodash-es";


const scrollRoot = ref("#api-detail-preview");

const appStore = useAppStore();
const router = useRouter();
const apiCode = ref("");
const debuggerRequestConfig = ref({});
const isShowGoTopBtn = ref(false);
const editorShowType = ref("doc");
const formData = ref({
  apiDocTypeId: undefined,
  name: "",
  shareDesc: "",
  serviceCode: "",
  docType: "1",
  richEditorValue: "",
  markdownEditorValue: "",
  attachmentValue: "",
});
function changeDisplayContent() {
  if (editorShowType.value === "doc") {
    editorShowType.value = "tool";
  } else {
    editorShowType.value = "doc";
  }
}
const handlePageScroll = throttle((e) => {
  const scrollTop = e.target.scrollTop;
  if (scrollTop > 360) {
    isShowGoTopBtn.value = true;
  } else {
    isShowGoTopBtn.value = false;
  }
}, 100);
async function loadPageDatails() {
  const id = router.currentRoute.value.query.id;
  apiCode.value = router.currentRoute.value.query.apiCode;
  if (id) {
    const resp = await queryApiDocDetail({ id });
    formData.value = { ...resp.data };
    formData.value.docType += "";
    const docTypeMap = {
      1: "markdownEditorValue",
      2: "richEditorValue",
      3: "attachmentValue",
    };
    const key = docTypeMap[resp.data.docType];
    formData.value.title = formData.value.name;
    formData.value[key] = resp.data.content;
    formData.value.createTime = window
      .$dayjs(formData.value.createTime)
      .format("YYYY-MM-DD HH:mm:ss");
    formData.value.updateTime = window
      .$dayjs(formData.value.updateTime)
      .format("YYYY-MM-DD HH:mm:ss");
    editorShowType.value = "doc";
  }
}
function scrollToTop() {
  const scrollWrapEle = document.querySelector(scrollRoot.value);
  scrollWrapEle.scrollTo(0, 0);
}
watch(
  () => router.currentRoute.value.query.id,
  (nv) => {
    if (nv) {
      loadPageDatails(nv);
    }
  }
);
onActivated(() => {
  loadPageDatails();
});
onMounted(() => {
  loadPageDatails();
  appStore.setIsShowPortalFooter(false)
  const scrollRootEl = document.querySelector(scrollRoot.value);
  scrollRootEl.addEventListener("scroll", handlePageScroll);
});
onUnmounted(() => {
  appStore.setIsShowPortalFooter(true)
  const scrollRootEl = document.querySelector(scrollRoot.value);
  if (scrollRootEl) {
    scrollRootEl.removeEventListener("scroll", handlePageScroll);
  }
});
</script>
<style lang="scss" scoped>
#api-detail-preview {
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
    margin-top: 60px;
    overflow: auto;
    scroll-behavior: smooth;
  .main {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
    width: max-content;
    margin: auto;
    // padding-top: 60px;
    .nav-path {
      display: flex;
      align-items: center;
      background-color: #fff;
      height: 35px;
    }
    .tool-bar {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      position: fixed;
      right: 40px;
      bottom: 40px;
      z-index: 1000;
      .btn {
        padding: 0;
        width: 40px;
        height: 40px;
        line-height: 1;
        color: #909090;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(50, 50, 50, 0.04);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 10px;
        &:hover {
          box-shadow: var(--el-box-shadow-light);
          // color: aquamarine;
          background-color: floralwhite;
        }
      }
    }
  }
}
</style>
