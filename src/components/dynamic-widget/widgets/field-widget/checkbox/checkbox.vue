<template>
  <div :class="['widgets-checkbox', widgetRootClass]">
    <el-checkbox-group
      @change="change"
      v-model="widgetValue"
      v-bind="widgetAttrs"
    >
      <el-checkbox
        v-for="item in widgetOptions"
        v-bind="item"
        :key="item.value"
      />
    </el-checkbox-group>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { ElCheckboxGroup, ElCheckbox } from "element-plus";
import { useWidgetBase, baseProps } from "../../../hooks/useWidgetBase.js";
const emits = defineEmits(["notify", "update:modelValue"]);
const props = defineProps({
  ...baseProps("checkbox"),
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
.widgets-checkbox {
  width: 100%;
}
</style>
