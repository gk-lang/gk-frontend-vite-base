<template>
  <div :class="['widgets-slider', widgetRootClass]">
    <el-slider
      v-bind="widgetAttrs"
      v-model="widgetValue"
      @change="change"
      @input="input"
    >
    </el-slider>
  </div>
</template>
<script setup>
import { ElSlider } from "element-plus";
import { useWidgetBase, baseProps } from "../../../hooks/useWidgetBase.js";
const emits = defineEmits(["notify", "update:modelValue"]);
const props = defineProps({
  ...baseProps("slider"),
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
function input(event) {
  eventNotify("input", event);
}
</script>
<style lang="scss">
.widgets-slider {
  width: 100%;
}
</style>
