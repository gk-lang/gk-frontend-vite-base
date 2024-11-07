<template>
  <div
    :class="['widgets-color', widgetRootClass]"
    :style="`width:${widgetAttrs.width};`"
  >
    <el-color-picker
      v-bind="widgetAttrs"
      v-model="widgetValue"
      @change="change"
      @active-change="activeChange"
      @focus="focus"
      @blur="blur"
    >
    </el-color-picker>
  </div>
</template>
<script setup>
import { ElColorPicker } from "element-plus";

import { useWidgetBase, baseProps } from "../../../hooks/useWidgetBase.js";
const emits = defineEmits(["notify", "update:modelValue"]);
const props = defineProps({
  ...baseProps("color"),
});
const { formDataKey, widgetValue, widgetAttrs, widgetRootClass } =
  useWidgetBase(props, emits);

function eventNotify(eventType, event) {
  emits("notify", {
    event,
    eventType,
    formDataKey: formDataKey.value,
    widgetValue,
    widgetInfo: props.widgetInfo,
  });
}
function change(event) {
  eventNotify("change", event);
}
function activeChange(event) {
  eventNotify("active-change", event);
}
function focus(event) {
  eventNotify("focus", event);
}
function blur(event) {
  eventNotify("blur", event);
}
</script>
<style lang="scss">
.widgets-color {
  .el-color-picker {
    width: 100%;
    .el-color-picker__trigger {
      width: 100%;
    }
  }
}
</style>
