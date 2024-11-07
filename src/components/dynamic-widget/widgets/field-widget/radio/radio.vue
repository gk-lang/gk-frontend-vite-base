<template>
  <div :class="['widgets-radio', widgetRootClass]">
    <el-radio-group @change="change" v-model="widgetValue" v-bind="widgetAttrs">
      <el-radio v-for="item in widgetOptions" v-bind="item" :key="item.value" />
    </el-radio-group>
  </div>
</template>
<script setup>
import { ElRadioGroup, ElRadio } from "element-plus";
import { computed } from "vue";
import { useWidgetBase, baseProps } from "../../../hooks/useWidgetBase.js";
const emits = defineEmits(["notify", "update:modelValue"]);
const props = defineProps({
  ...baseProps("radio"),
});
const { formDataKey, dictKeyData, widgetValue, widgetAttrs, widgetRootClass } =
  useWidgetBase(props, emits);

const widgetOptions = computed({
  get() {
    if (props.widgetInfo.dictKey) {
      return dictKeyData.value;
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
</script>
<style lang="scss">
.widgets-radio {
  width: 100%;
}
</style>
