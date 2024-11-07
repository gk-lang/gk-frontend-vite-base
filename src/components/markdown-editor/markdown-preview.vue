<template>
  <div id="markdown-preview" @scroll="handleWraperScroll">
    <div :class="['markdown-preview-main', showType]">
      <div class="left">
        <ApiDebuggerTool
          v-show="showType !== 'doc'"
          v-model="debuggerToolConfig"
        />
        <MarkdownContent
          v-show="showType === 'doc'"
          :editorId="editorId"
          :modelValue="mdText"
          v-bind="$attrs"
        />
      </div>
      <div class="right">
        <div class="right-content" v-if="articleMeta.serviceCode">
          <div class="article-info">
            <h1 class="article-title" :title="articleMeta.title">
              {{ articleMeta.title }}
            </h1>
            <div class="author-info-box">
              <div class="common-item1">
                <div>服务Code：</div>
                <div class="content">
                  {{ articleMeta.serviceCode }}
                </div>
              </div>
              <div class="common-item2">
                <div>创建时间：</div>
                <div class="content">{{ articleMeta.updateTime }}</div>
              </div>
              <div class="common-item2">
                <div>服务描述：</div>
                <div class="content">{{ articleMeta.shareDesc }}</div>
              </div>
            </div>
          </div>
          <div class="tool-wrap" v-if="articleMeta.type === 1">
            <el-button color="#626aef" @click="changeDisplayContent" plain>{{
              showType === "doc" ? "展示调试工具" : "展示文档详情"
            }}</el-button>
            <el-button
              color="#cc7829"
              @click="handleSubscribe"
              plain
              :loading="dialogSelectAppLoading"
              >订阅</el-button
            >
          </div>
          <MarkdownCatalog :editorId="editorId" :scrollRoot="scrollRoot" />
        </div>
        <div class="right-content" v-else>
          <div class="article-info">
            <h1 class="article-title" :title="articleMeta.title">
              {{ articleMeta.title }}
            </h1>
            <div class="author-info-box">
              <div class="common-item1">
                <div>文档分类：</div>
                <div class="content">
                  {{ articleMeta.apiDocTypeName }}
                </div>
              </div>
              <div class="common-item2">
                <div>创建时间：</div>
                <div class="content">{{ articleMeta.updateTime }}</div>
              </div>
              <div class="common-item2">
                <div>文档说明：</div>
                <div class="content">{{ articleMeta.shareDesc }}</div>
              </div>
            </div>
          </div>
          <MarkdownCatalog :editorId="editorId" :scrollRoot="scrollRoot" />
        </div>
      </div>
    </div>
    <DialogSelectApp
      v-model:isShow="isShowDialogSelectApp"
      :editData="dialogSelectAppEditData"
      @save="handleDialogSelectAppSave"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed, onUnmounted } from "vue";
import MarkdownCatalog from "./markdown-catalog.vue";
import MarkdownContent from "./markdown-content.vue";
import DialogSelectApp from "./dialog-select-app.vue";
import { useRouter } from "vue-router";
import ApiDebuggerTool from "@/components/api-test-tool/index.vue";
import { ElButton } from "element-plus";
import { useUserStore } from "@/store/modules/user";
import { querySubscribeListByServiceCode } from "@/api/api-debugger";
const editorId = "markdown-main";
const emits = defineEmits(["update:modelValue", "update:showType", "scroll"]);
defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  modelValue: {
    type: String,
    default: () => "",
  },
  articleMeta: {
    type: Object,
    default: () => {
      return {};
    },
  },
  showType: {
    type: String,
    default: () => {
      return "doc";
    },
  },
  debuggerConfig: {
    type: Object,
    default: () => {
      return {};
    },
  },
  scrollRoot: {
    type: String,
    default: () => {
      return "";
    },
  },
});
const router = useRouter();
const userStore = useUserStore();
const articleMetaLeft = ref(-9999);
const isShowDialogSelectApp = ref(false);
const dialogSelectAppEditData = ref({});
const dialogSelectAppLoading = ref(false);
const mdText = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
  },
});
const debuggerToolConfig = computed({
  get() {
    return props.debuggerConfig;
  },
  set(val) {
    emits("update:debuggerConfig", val);
  },
});
const user = computed(() => userStore.getUserInfo);

async function handleSubscribe() {
  if (!user.value) {
    return window.$msg.error("请先进行登录");
  } else {
    try {
      dialogSelectAppLoading.value = true;
      const list = await querySubscribeAppList();
      if (!list.length) {
        return window.$msg.error("请先到后台管理添加应用!");
      }
      dialogSelectAppEditData.value.appList = list;
      dialogSelectAppEditData.value.articleMeta = props.articleMeta;
      isShowDialogSelectApp.value = true;
    } finally {
      dialogSelectAppLoading.value = false;
    }
  }
}
async function querySubscribeAppList() {
  const resp = await querySubscribeListByServiceCode({
    serviceCode: props.articleMeta.serviceCode,
  });
  if (resp?.data) {
    resp.data.forEach((x) => {
      x.label = x.appName;
      x.value = x.id;
      if(x.apiApproveStatusName) {
        x.label = `${x.appName}【${x.apiApproveStatusName}】`;
      }
    });
  }
  return resp?.data || [];
}
function handleDialogSelectAppSave() {}
function handleWraperScroll(e) {
  console.log("markdown-preview:", e.target.scrollTop);
  emits("scroll", e);
}
function setRightBarPosition() {
  setTimeout(() => {
    const wraperEl = document.querySelector("#markdown-preview");
    if (wraperEl) {
      const bound = wraperEl.getBoundingClientRect();
      articleMetaLeft.value = bound.right + 10 + "px";
    }
  });
}
function changeDisplayContent() {
  if (props.showType === "doc") {
    emits("update:showType", "tool");
  } else {
    emits("update:showType", "doc");
  }
}
function debounce(fn, delay) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
const resizeSetRightBarPosition = debounce(setRightBarPosition, 100);
onMounted(() => {
  setRightBarPosition();
  window.addEventListener("resize", resizeSetRightBarPosition);
});
onUnmounted(() => {
  window.removeEventListener("resize", resizeSetRightBarPosition);
});
</script>
<style lang="scss" scoped>
#markdown-preview {
  // height: var(--el-container-height);
  // overflow: auto;
  width: 100%;
  // scroll-behavior: smooth;
  .markdown-preview-main {
    display: flex;
    margin: auto;
    width: 1320px;
    min-height: calc(var(--el-container-height) - 80px);
    margin-top: 10px;
    position: relative;
    .left {
      width: 1000px;
      .content {
        width: 100%;
        background-color: #fff;
        :deep(.md-editor) {
          min-height: calc(var(--el-container-height) - 80px);
          .md-editor-preview-wrapper {
            padding-top: 0px;
          }
        }
      }
    }
    .right {
      position: absolute;
      top: 0px;
      left: 1000px;
      .right-content {
        position: fixed;
        width: 300px;
        padding-left: 10px;
        .tool-wrap {
          margin-bottom: 10px;
          .el-button {
            width: 100%;
            border-radius: 0px;
            margin-left: 0px;
            &:nth-child(2) {
              margin-top: 10px;
            }
          }
        }
        .article-info {
          width: inherit;
          background-color: #fff;
          min-height: 200px;
          height: max-content;
          margin-bottom: 10px;
          padding: 5px 20px 10px 20px;
          box-sizing: border-box;
          .article-title {
            color: #252933;
            font-weight: 600;
            font-size: 32px;
            margin: 10px 0px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .author-info-box {
            padding-left: 1px;
            .common-item1 {
              font-size: 14px;
              font-weight: 400;
              color: #515767;
              line-height: 32px;
            }
            .common-item2 {
              line-height: 32px;
              color: #515767;
              // color: #8a919f;
            }
            .content {
              text-indent: 2em;
            }
          }
        }
        .catalog {
          background-color: #fff;
          width: 300px;
          padding: 20px 20px 10px 10px;
          box-sizing: border-box;
        }
      }
    }
  }
  @media screen and (max-width: 1720px) {
    .markdown-preview-main {
      width: 1220px;
      .left {
        width: 900px;
      }
      .right {
        left: 900px;
      }
    }
  }
  @media screen and (max-width: 1500px) {
    .markdown-preview-main {
      width: 1020px;
      .left {
        width: 700px;
      }
      .right {
        left: 700px;
      }
    }
  }
}
</style>
