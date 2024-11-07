<!-- 文本输入框 -->
<template>
  <div :class="['widgets-text', widgetRootClass]">
    <div v-if="widgetAttrs.isHtml" v-html="widgetValue"></div>
    <el-text
      v-else-if="!widgetAttrs.isShowHoverTip"
      v-bind="widgetAttrs"
      :class="[
        widgetInfo.formDataKey ?? widgetInfo.formDataKey,
        { 'widgets-text-content': widgetAttrs.overflowHiddenText },
        { 'is-red-font': widgetAttrs.isRedFont },
      ]"
    >
      {{ widgetValue }}
    </el-text>
    <el-tooltip v-else v-bind="widgetAttrs" :content="widgetValue">
      <el-text
        :class="[
          'tooltip-content',
          widgetAttrs.overflowHiddenText ? 'widgets-text-content' : '',
        ]"
      >
        {{ widgetValue }}
      </el-text>
    </el-tooltip>
  </div>
</template>
<script setup>
import { ElTooltip, ElText } from "element-plus";
import { useWidgetBase, baseProps } from "../../../hooks/useWidgetBase.js";
const emits = defineEmits(["notify", "update:modelValue"]);
const props = defineProps({
  ...baseProps("text"),
});
const { widgetValue, widgetAttrs, widgetRootClass } = useWidgetBase(
  props,
  emits
);
</script>
<style scoped>
.widgets-text {
  width: 100%;
  .widgets-text-content {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    display: inline-block;
  }
  .is-red-font {
    color: red;
    font-weight: bold;
  }
}
</style>
