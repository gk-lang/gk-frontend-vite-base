<!-- 树形下拉选择框 -->
<template>
  <div :class="['widgets-treeselect', widgetRootClass]">
    <ElTreeSelect
      v-model="widgetValue"
      v-bind="widgetAttrs"
      :data="widgetOptions"
    />
  </div>
</template>
<script setup>
import { computed,ref } from "vue";
import { ElTooltip, ElTreeSelect } from "element-plus";
import { useWidgetBase, baseProps } from "../../../hooks/useWidgetBase.js";
const emits = defineEmits(["notify", "update:modelValue"]);
const props = defineProps({
  ...baseProps("treeselect"),
});
const { widgetValue, specialData, widgetAttrs, widgetRootClass } =
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
</script>
<style lang="scss" scoped>
.widgets-treeselect {
  width: 100%;
  :deep(.vue3-treeselect__control) {
    line-height: 28px;
    height: 28px;
    .vue3-treeselect__placeholder {
      line-height: 30px;
      height: 30px;
      color: var(--el-text-color-placeholder);
    }
    .vue3-treeselect__single-value {
      line-height: 30px;
      height: 30px;
    }
    .vue3-treeselect__input-container {
      .vue3-treeselect__input {
        line-height: 30px;
        height: 30px;
      }
    }
  }
}

</style>
