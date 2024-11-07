<template>
  <div class="preview-wraper" id="archive-preview">
    <!-- <div class="debugger-tool" v-show="!isDisplayDocContent">
      <ApiDebuggerTool v-model="debuggerRequestConfig" />
    </div> -->
    <div class="main">
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
        :scrollRoot="scrollRoot"
      />
      <div v-else>该类型还在开发中，尚不能预览</div>
    </div>
    <div class="tool-bar">
      <!-- <div class="btn" @click="changeDisplayContent">
        <app-svg
          v-if="isDisplayDocContent"
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
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted, onActivated, inject } from "vue";
import { useRouter } from "vue-router";
import MarkdownPreview from "@/components/markdown-editor/markdown-preview.vue";
import RichTinymcePreview from "@/components/rich-tinymce/rich-tinymce-preview.vue";
import ApiDebuggerTool from "@/components/api-test-tool/index.vue";
import AppSvg from "@/components/app-svg/index.vue";
import {
  ElCard,
  ElTooltip,
  ElLink,
  ElButton,
  ElPopconfirm,
  ElTree,
  ElInput,
} from "element-plus";
import { queryApiRequestParam, queryApiDocDetail } from "@/api/archive";
import {
  genFormDataByRequestConfig,
  genRequestConfigByFormData,
} from "@/components/api-test-tool/util.js";
import { throttle } from "lodash-es";
const router = useRouter();
const apiCode = ref("");
const debuggerRequestConfig = ref({});
const isShowGoTopBtn = ref(false);
const editorShowType = ref("doc");

const scrollRoot = ref("#archive-preview");

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

function scrollToTop() {
  const scrollWrapEle = document.querySelector(scrollRoot.value);
  scrollWrapEle.scrollTo(0, 0);
}
async function loadPageDatails() {
  apiCode.value = router.currentRoute.value.query.apiCode;
  const id = router.currentRoute.value.query.id;
  if (apiCode.value || id) {
    const resp = await queryApiDocDetail({ id, serviceCode:apiCode.value });
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
  }
}
async function loadApiRequestParam(code) {
  const resp = await queryApiRequestParam({ apiCode: code });
  if (resp.code === "200") {
    resp.data.url = resp.data.apiUrl;
    resp.data.method = resp.data.method.toUpperCase();
    const requestConfig = genRequestConfigByFormData(resp.data);
    debuggerRequestConfig.value = requestConfig;
  } else {
    window.$msg.error("请求参数加载失败!");
  }
}
// watch(
//   () => apiCode.value,
//   (nv) => {
//     if (nv) {
//       loadApiRequestParam(nv);
//     }
//   }
// );

onActivated(() => {
  loadPageDatails();
});
onMounted(() => {
  loadPageDatails();
  const scrollRootEl = document.querySelector(scrollRoot.value);
  scrollRootEl.addEventListener("scroll", handlePageScroll);
});
onUnmounted(() => {
  const scrollRootEl = document.querySelector(scrollRoot.value);
  if (scrollRootEl) {
    scrollRootEl.removeEventListener("scroll", handlePageScroll);
  }
});
</script>
<style lang="scss" scoped>
.preview-wraper {
  height: var(--el-container-height);
  overflow: auto;
  width: 100%;
  scroll-behavior: smooth;
  .main {
    background-color: unset !important;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: max-content;
    margin: auto;
  }
  .tool-bar {
    // position: absolute;
    // bottom: 150px;
    // right: 10px;
    // background-color: beige;
    // width: 50px;
    // border-radius: 10px;

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
</style>
