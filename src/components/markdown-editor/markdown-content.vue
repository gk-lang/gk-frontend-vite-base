<template>
  <div class="content">
    <MdPreview
      :editorId="props.editorId"
      :modelValue="props.modelValue"
      :showCodeRowNumber="props.showCodeRowNumber"
      theme="light"
      previewTheme="default"
      codeTheme="atom"
      language="en-US"
      :autoFoldThreshold="16"
      @onHtmlChanged="onHtmlChanged"
    />
  </div>
</template>

<script setup>
import { MdPreview } from "md-editor-v3";
import { debounce, getRootOffset } from "@vavt/util";

const props = defineProps({
  editorId: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  showCodeRowNumber: {
    type: Boolean,
    default: true,
  },
});

const { hash } = location;

const onHtmlChanged = debounce(() => {
  if (/^#/.test(hash)) {
    const headingId = decodeURIComponent(hash.replace("#", ""));

    if (headingId) {
      const targetHeadDom = document.getElementById(headingId);

      if (targetHeadDom) {
        const scrollLength = getRootOffset(targetHeadDom).offsetTop - 10;

        window.scrollTo({
          top: scrollLength,
          behavior: "smooth",
        });
      }
    }
  }
});
</script>
<style lang="scss" scoped>
:deep(.md-editor-previewOnly) {
}
</style>
