<template>
  <div class="rich-tinymce-editor">
    <div class="preview-wrap" v-if="isPreview" v-html="editorContent"></div>
    <Editor v-else v-model="editorContent" :init="initConfig" />
  </div>
</template>
<script setup>
import { onMounted, ref, computed, watch } from "vue";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/icons/default/icons";
import "tinymce/themes/silver";
import { fileUpload } from "@/api/open-api";
import RequestScheduler from "@/utils/requestScheduler";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  isPreview: {
    type: Boolean,
    required: false,
  },
});
const uploadTimer = ref(null);
const uploadList = ref([]);
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
  let file = blobInfo.blob(); // 转化为易于理解的file对象
  if (file.constructor === Blob) {
    file = new File([file], blobInfo.filename(), {
      type: file.type,
    });
  }
  const formData = new FormData();
  formData.append("file", file, file.name);

  // 控制并发的上传数量，太多了接口会报错
  uploadList.value.push({
    formData,
    success,
  });
  if (uploadTimer.value) {
    clearTimeout(uploadTimer.value);
  }
  uploadTimer.value = setTimeout(() => {
    sendBatchUploadRequest();
  }, 1000);
  // fileUpload(formData).then((resp) => {
  //   if (resp.code == "200") {
  //     window.$msg.success(resp.message || "上传成功!");
  //     success(resp.data);
  //   } else {
  //     window.$msg.error(resp.message || "上传失败!");
  //   }
  // });
}
async function sendBatchUploadRequest() {
  const list = uploadList.value || [];
  uploadList.value = [];
  if (list.length === 1) {
    const resp = await fileUpload(list[0].formData);
    if (resp.code == "200") {
      window.$msg.success(resp.message || "上传成功!");
      list[0].success(resp.data);
    } else {
      window.$msg.error(resp.message || "上传失败!");
    }
  } else {
    // 控制并发的数量为2
    const rs = new RequestScheduler(2);
    for (let i = 0; i < list.length; i++) {
      const action = () => fileUpload(list[i].formData);
      rs.add(action);
    }
    const result = await rs.waitForAll(); // 确保所有请求完成
    result.forEach((resp, i) => {
      if (resp.success && resp.data) {
        list[i].success(resp.data);
      }
    });
  }
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
    let file = this.files[0]; // 转化为易于理解的file对象
    if (file.constructor === Blob) {
      file = new File([file], file.name, {
        type: file.type,
      });
    }
    const formData = new FormData();
    formData.append("file", file, file.name);
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

    fileUpload(formData).then((resp) => {
      if (resp.code == "200") {
        window.$msg.success(resp.message || "上传成功!");
        cb(resp.data);
      } else {
        window.$msg.error(resp.message || "上传失败!");
      }
    });
  };
  // 触发点击
  input.click();
}
const initConfig = computed(() => {
  return {
    // 配置文件
    base_url: "libs/tinymce",
    menubar: true,
    toolbar_mode: "wrap",
    external_plugins: external_plugins.value,
    language: "zh_CN",
    language_url: "libs/tinymce/langs/zh_CN.js", // 语言文件
    skin_url: "libs/tinymce/skins/ui/oxide",
    font_formats: font_formats.value,
    toolbar: toolbar.value,
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
    relative_urls: false,
    remove_script_host: true,
    convert_urls: true,
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
onMounted(() => {
  tinymce.init({});
});
</script>
<style lang="scss">
.rich-tinymce-editor {
  width: 100%;
  height: 100%;
  .preview-wrap {
    white-space: pre-wrap;
  }
}
.tox.tox-silver-sink.tox-tinymce-aux {
  // position: unset !important;
  z-index: 9900;
  .tox-dialog-wrap {
    z-index: 9900;
  }
}
.tox-tinymce {
  .icon {
    width: 24px;
    height: 24px;
  }
}
.tox .tox-dialog-wrap__backdrop {
  // background-color: rgb(189 104 104 / 75%);
  background-color: rgba(0, 0, 0, 0.55) !important;
}
</style>
