<template>
  <div id="rich-tinymce-preview" @scroll="handleWraperScroll">
    <div :class="['left', 'rich-tinymce-preview-main', showType]">
      <ApiDebuggerTool
        v-show="showType !== 'doc'"
        v-model="debuggerToolConfig"
      />
      <Editor
        v-show="showType === 'doc'"
        v-model="editorContent"
        :init="initConfig"
      />
    </div>
    <div class="right">
      <div class="article-info" v-if="articleMeta.serviceCode">
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
        <div class="tool-wrap" v-if="articleMeta.type===1">
          <el-button color="#626aef"  @click="changeDisplayContent" plain>{{showType === 'doc'?'展示调试工具':'展示文档详情'}}</el-button>
          <el-button color="#cc7829"  @click="handleSubscribe" :loading="dialogSelectAppLoading" plain >订阅</el-button>
        </div>
      </div>
      <div class="article-info" v-else>
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
    </div>
    <DialogSelectApp
      v-model:isShow="isShowDialogSelectApp"
      :editData="dialogSelectAppEditData"
      @save="handleDialogSelectAppSave"
    />
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref, computed, watch } from "vue";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/icons/default/icons";
import "tinymce/themes/silver";
import { ElButton } from "element-plus";
import ApiDebuggerTool from "@/components/api-test-tool/index.vue";
import { useUserStore } from "@/store/modules/user";
import DialogSelectApp from "../markdown-editor/dialog-select-app.vue";
import { querySubscribeListByServiceCode } from "@/api/api-debugger";
const emits = defineEmits(["update:modelValue", "update:showType", "scroll"]);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
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
});
const router = useRouter();
const userStore = useUserStore();
const isShowDialogSelectApp = ref(false);
const dialogSelectAppEditData = ref({});
const dialogSelectAppLoading = ref(false);
const font_formats = ref(
  "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;知乎配置=BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;小米配置=Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif"
);
const toolbar = ref([
  "preview undo redo  forecolor backcolor bold italic underline strikethrough    alignleft aligncenter alignright alignjustify outdent indent  bullist numlist  \
                     table  hr  importword  ",
]);
const external_plugins = ref({
  // 'kityformula-editor': 'plugins/kityformula-editor/plugin.min.js',
  anchor: "plugins/anchor/plugin.min.js",
  code: "plugins/code/plugin.min.js",
  preview: "plugins/preview/plugin.min.js",
  searchreplace: "plugins/searchreplace/plugin.min.js",
  autolink: "plugins/autolink/plugin.min.js",
  directionality: "plugins/directionality/plugin.min.js",

  visualblocks: "plugins/visualblocks/plugin.min.js",
  visualchars: "plugins/visualchars/plugin.min.js",
  fullscreen: "plugins/fullscreen/plugin.min.js",
  image: "plugins/image/plugin.min.js",
  link: "plugins/link/plugin.min.js",
  media: "plugins/media/plugin.min.js",

  template: "plugins/template/plugin.min.js",

  codesample: "plugins/codesample/plugin.min.js",
  table: "plugins/table/plugin.min.js",
  charmap: "plugins/charmap/plugin.min.js",
  pagebreak: "plugins/pagebreak/plugin.min.js",
  nonbreaking: "plugins/nonbreaking/plugin.min.js",

  insertdatetime: "plugins/insertdatetime/plugin.min.js",
  advlist: "plugins/advlist/plugin.min.js",
  lists: "plugins/lists/plugin.min.js",
  wordcount: "plugins/wordcount/plugin.min.js",
  imagetools: "plugins/imagetools/plugin.min.js",
  help: "plugins/help/plugin.min.js",
  emoticons: "plugins/emoticons/plugin.min.js",
  autosave: "plugins/autosave/plugin.min.js",
  importword: "plugins/importword/plugin.min.js",

  // textpattern: 'plugins/textpattern/plugin.min.js',
  // iframe: 'plugins/iframe/plugin.min.js'
  // hr: "plugins/hr/plugin.min.js",
  // formatpainter: "/tinymce/plugins/formatpainter/plugin.min.js",
});
const editorContent = computed({
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
function handleDialogSelectAppSave() {}

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
      if(x.apiApproveStatusName){
        x.label = `${x.appName}【${x.apiApproveStatusName}】`;
      }
    });
  }
  return resp?.data || [];
}
function changeDisplayContent(){
  if (props.showType === "doc") {
    emits("update:showType", 'tool');
  } else {
    emits("update:showType", 'doc');
  }
}
function importword_filter(result, insert, message) {
  // 自定义操作部分
  insert(result); // 回插函数
}
function importword_handler(editor, files, next) {
  var file_name = files[0].name;
  if (file_name.substr(file_name.lastIndexOf(".") + 1) == "docx") {
    editor.notificationManager.open({
      text: "正在转换中...",
      type: "info",
      closeButton: false,
      timeout: 1000,
    });
    next(files);
  } else {
    editor.notificationManager.open({
      text: "目前仅支持docx文件格式，若为doc，请将扩展名改为docx",
      type: "warning",
      timeout: 1000,
    });
  }
}
function images_upload_handler(blobInfo, success) {
  // const file = blobInfo.blob() // 转化为易于理解的file对象
  // const formData = new FormData()
  // formData.append('file', file, file.name)
  // formData.append('module', 'post')
  // formData.append('file_source', '1')
  // request.fileUpload(formData).then(res => {
  // 	if (res && res.data) {
  // 		let urlPath =''
  // 		if (urlPath.endsWith('/')) {
  // 			urlPath += `base/file/image/preview?imgPath=${res.data.path}`
  // 		} else {
  // 			urlPath += `/base/file/image/preview?imgPath=${res.data.path}`
  // 		}
  // 		success(urlPath)
  // 		console.log('module-editor-imgurl:', urlPath)
  // 	} else {
  // 		console.log(res.msg)
  // 	}
  // })
}
function media_url_resolver(data, resolve) {
  try {
    let videoUri = encodeURI(data.url);
    let embedHtml = `<p>
                            <span
                                class="mce-object mce-object-video"
                                data-mce-selected="1"
                                data-mce-object="video"
                                data-mce-p-width="100%"
                                data-mce-p-height="auto"
                                data-mce-p-controls="controls"
                                data-mce-p-controlslist="nodownload"
                                data-mce-p-allowfullscreen="true"
                                data-mce-p-src=${videoUri} >
                                <video src=${data.url} width="100%" height="auto" controls="controls" controlslist="nodownload">
                                </video>
                            </span>
                            </p>
                            <p style="text-align: left;"></p>`;
    resolve({ html: embedHtml });
  } catch (e) {
    resolve({ html: "" });
  }
}
function file_picker_callback(cb, value, meta) {
  // 当点击meidia图标上传时,判断meta.filetype == 'media'有必要，因为file_picker_callback是media(媒体)、image(图片)、file(文件)的共同入口
  console.log("meta", meta);
  // 创建一个隐藏的type=file的文件选择input
  let input = document.createElement("input");
  input.setAttribute("type", "file");
  input.onchange = function () {
    // const file = this.files[0] // 转化为易于理解的file对象
    // const formData = new FormData()
    // formData.append('file', file, file.name)
    // formData.append('module', 'post')
    // formData.append('file_source', '1')
    // request.fileUpload(formData).then(res => {
    // 	if (res && res.data) {
    // 		let urlPath = ''
    // 		if (urlPath.endsWith('/')) {
    // 			urlPath += `base/file/image/preview?imgPath=${res.data.path}`
    // 		} else {
    // 			urlPath += `/base/file/image/preview?imgPath=${res.data.path}`
    // 		}
    // 		cb(urlPath)
    // 		console.log('module-editor-imgurl:', urlPath)
    // 	} else {
    // 		console.log(res.msg)
    // 	}
    // })
  };
  // 触发点击
  input.click();
}
const initConfig = computed(() => {
  return {
    // 配置文件
    base_url: "libs/tinymce",
    // menubar: true,
    // toolbar_mode: "wrap",
    external_plugins: external_plugins.value,
    language: "zh_CN",
    language_url: "libs/tinymce/langs/zh_CN.js", // 语言文件
    skin_url: "libs/tinymce/skins/ui/oxide",
    font_formats: font_formats.value,
    // toolbar: toolbar.value,
    content_style: "p {margin: 5px 0;}",
    templates: [],
    content_css: [],
    height: "100%", // 编辑器高度
    branding: false,
    paste_data_images: true, // 允许粘贴图像
    fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
    file_picker_types: "file image media",
    paste_retain_style_properties: "all",
    paste_word_valid_elements: "*[*]", // word需要它
    paste_data_images: true, // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
    paste_convert_word_fake_lists: false, // 插入word文档需要该属性
    paste_webkit_styles: "all",
    paste_merge_formats: true,
    nonbreaking_force_tab: false,
    paste_auto_cleanup_on_paste: false,
    images_upload_handler: images_upload_handler,
    media_url_resolver: media_url_resolver,
    file_picker_callback: file_picker_callback,
    importword_handler: importword_handler,
    importword_filter: importword_filter,
    // 为内容模板插件提供预置模板
    templates: [
      { title: "模板1", description: "介绍文字1", content: "模板内容" },
      {
        title: "模板2",
        description: "介绍文字2",
        content:
          '<div class="mceTmpl"><span class="cdate">CDATE</span>，<span class="mdate">MDATE</span>，我的内容</div>',
      },
    ],
    inline: true,
    readonly: true,
    toolbar: false,
    menubar: false,
  };
});
// watch(
//   () => props.modelValue,
//   (nv, ov) => {
//     editorContent.value = nv;
//   },
//   {
//     immediate: true,
//   }
// );
function handleWraperScroll(e) {
  console.log("rich-tinymce:", e.target.scrollTop);
  emits("scroll", e);
}
onMounted(() => {
  tinymce.init({ readonly: true });
  tinymce.editors[0].setMode("readonly");
});
</script>
<style lang="scss" scoped>
.tox-tinymce-inline {
  display: none !important;
}
#rich-tinymce-preview {
  // height: var(--el-container-height);
  // overflow: auto;
  width: 1300px;
  // margin: auto;
  // scroll-behavior: smooth;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 10px;
  .rich-tinymce-preview-main {
    white-space: pre-wrap;
    width: 1000px;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    min-height: calc(var(--el-container-height) - 80px);
    box-sizing: border-box;
    .article-title {
      color: #252933;
      font-weight: 600;
      font-size: 32px;
      margin: 10px 0px;
    }
    .author-info-box {
      padding-left: 1px;
      margin: 0px 0px 15px 0px;
      .common-item1 {
        font-size: 14px;
        font-weight: 400;
        color: #515767;
        line-height: 22px;
      }
      .common-item2 {
        margin-left: 20px;
        color: #8a919f;
      }
    }
    &.tool {
      padding: 0px;
    }
  }
  .right {
    position: absolute;
    top: 0px;
    left: 1000px;
    
    .article-info {
      width: 300px;
      position: fixed;
      background-color: #fff;
      margin-left: 15px;
      min-height: 200px;
      height: max-content;
      .article-title {
        color: #252933;
        font-weight: 600;
        font-size: 32px;
        margin: 10px 0px;
        margin-left: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .author-info-box {
        padding-left: 1px;
        margin: 0px 0px 15px 0px;
        .common-item1 {
          font-size: 14px;
          font-weight: 400;
          color: #515767;
          line-height: 32px;
          margin-left: 20px;
        }
        .common-item2 {
          margin-left: 20px;
          line-height: 32px;
          color: #515767;
          // color: #8a919f;
        }
        .content {
          text-indent: 2em;
        }
      }
      .tool-wrap {
        margin-top: 10px;
        width: 300px;
        position: absolute;
        .el-button {
          width: 100%;
          border-radius: 0px;
          margin-left: 0px;
          &:nth-child(2){
            margin-top: 10px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  #rich-tinymce-preview {
    width: 1100px;
    .rich-tinymce-preview-main {
      width: 800px;
    }
    .right {
      left: 800px;
    }
  }
}
</style>
