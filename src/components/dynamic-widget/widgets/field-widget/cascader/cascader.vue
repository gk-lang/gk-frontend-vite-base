<template>
  <div :class="['widgets-cascader', widgetRootClass]">
    <el-cascader
      v-model="widgetValue"
      v-bind="widgetAttrs"
      :options="widgetOptions"
      @change="change"
      @expand-change="expandChange"
      @visible-change="visibleChange"
      @remove-tag="removeTag"
      @blur="blur"
      @focus="focus"
    >
    </el-cascader>
  </div>
</template>
<script setup>
import { ElCascader } from "element-plus";
import { useWidgetBase, baseProps } from "../../../hooks/useWidgetBase.js";
import { computed } from "vue";
const emits = defineEmits(["notify", "update:modelValue"]);
const props = defineProps({
  ...baseProps("cascader"),
});
const { formDataKey, specialData, widgetValue, widgetAttrs, widgetRootClass } =
  useWidgetBase(props, emits);
const widgetOptions = computed({
  get() {
    if (props.widgetInfo.specialKey) {
      return specialData.value;
    } else if (widgetAttrs.value.options && widgetAttrs.value.options.length) {
      return props.widgetInfo.widgetAttrs.options;
    }
    return [];
  },
});

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
function expandChange(event) {
  eventNotify("expand-change", event);
}
function visibleChange(event) {
  eventNotify("visible-change", event);
}
function removeTag(event) {
  eventNotify("remove-tag", event);
}
// function clear(event) {
//   eventNotify('clear', event)
// }
function blur(event) {
  eventNotify("blur", event);
}
function focus(event) {
  eventNotify("focus", event);
}
</script>
<style lang="scss">
.widgets-cascader {
  width: 100%;
}
</style>
