<template>
  <ModalToolbar
    showAdjust
    title="帮助"
    modalTitle="编辑预览"
    width="870px"
    height="600px"
    :visible="state.visible"
    :isFullscreen="state.modalFullscreen"
    @onClick="() => (state.visible = true)"
    @onClose="() => (state.visible = false)"
    @onAdjust="() => (state.modalFullscreen = !state.modalFullscreen)"
  >
    <div
      style="
        height: 100%;
        padding: 20px;
        overflow: auto;
        box-sizing: border-box;
      "
    >
      <MdPreview
        :theme="state.theme"
        :language="state.lang"
        :previewTheme="state.previewTheme"
        :codeTheme="state.codeTheme"
        :modelValue="props.mdText"
        :mdHeadingId="readingHeadingId"
        editorId="edit2preview"
      />
    </div>
    <template #trigger>
      <app-svg style="margin-top: 2px;" icon-name="doc-preview" size="14"></app-svg>
    </template>
  </ModalToolbar>
</template>

<script setup>
import { reactive } from "vue";
import { MdPreview, ModalToolbar } from "md-editor-v3";
import AppSvg from "@/components/app-svg/index.vue";

const props = defineProps({
  mdText: {
    type: String,
    default: "",
  },
});

const state = reactive({
  theme: "light",
  lang: "en-US",
  previewTheme: "default",
  codeTheme: "atom",
  visible: false,
  modalFullscreen: false,
});

const readingHeadingId = (_text, _level, index) => `read-ex-heading-${index}`;
</script>
