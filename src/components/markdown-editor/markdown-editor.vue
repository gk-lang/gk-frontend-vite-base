<template>
  <div class="markdown-editor">
    <MdEditor
      ref="editorRef"
      v-model="text"
      :toolbars-exclude="['github', 'save']"
      :theme="state.theme"
      :previewTheme="state.previewTheme"
      :codeTheme="state.codeTheme"
      :toolbars="state.toolbars"
      :footers="['markdownTotal', '=', 0, 'scrollSwitch']"
      :inputBoxWitdh="state.inputBoxWitdh"
      showCodeRowNumber
      autoDetectCode
      @onUploadImg="uploadImg"
    >
      <template #defToolbars>
        <Mark />
        <Emoji />
        <ReadExtension :mdText="text" />
        <ExportPDF :modelValue="text" height="700px" />
      </template>
      <template #defFooters>
        <TimeNow />
      </template>
    </MdEditor>
  </div>
</template>

<script setup>
import "md-editor-v3/lib/style.css";
import "@vavt/v3-extension/lib/asset/style.css";
import { ref, reactive, computed } from "vue";
import { MdEditor } from "md-editor-v3";
import { Emoji, Mark, ExportPDF } from "@vavt/v3-extension";
import ReadExtension from "./readExtension.vue";
import TimeNow from "@/components/time-now/index.vue";
import { toolbars } from "./toolbars.config";
import { fileUpload } from "@/api/open-api";
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: () => "",
  },
  editorId: {
    type: String,
    default: () => "",
  },
});
const text = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
  },
});
const state = reactive({
  theme: "light",
  lang: "en-US",
  previewTheme: "default",
  codeTheme: "atom",
  modalVisible: false,
  modalFullscreen: false,
  toolbars,
  inputBoxWitdh: "50%",
});

const uploadImg = async (files, callback) => {
  const urlList = await Promise.all(
    files.map((file) => {
      return new Promise(async (rev, rej) => {
        const form  = new FormData()
        form.append('file',file)
        const resp = await fileUpload(form);
        if (resp.code == "200") {
          window.$msg.success(resp.message || "上传成功!")
          rev(resp.data);
        } else {
          window.$msg.error(resp.message || "上传失败!")
          rej(resp.message || "");
        }
      });
    })
  );

  callback(urlList);
};
</script>
<style lang="scss" scoped>
.markdown-editor {
  width: 100%;
  :deep(.md-editor-toolbar-item) {
    height: 24px;
    width: 24px;
    line-height: 24px;
  }
}
</style>
