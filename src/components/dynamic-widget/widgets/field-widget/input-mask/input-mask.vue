<template>
  <div :class="['widgets-input-mask', widgetRootClass]">
    <MaskInput
      v-model="widgetValue"
      v-bind="widgetAttrs"
      @notify="handleFormWidgetNotify"
    >
    </MaskInput>
  </div>
</template>
<script setup>
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
import MaskInput from '@/components/mask-input/mask-input.vue'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('input-mask')
})
const { formDataKey, widgetValue, widgetAttrs, widgetRootClass } =
  useWidgetBase(props, emits)

// 向外抛出组件内发出的事件
function handleFormWidgetNotify(params) {
  emits('notify', {
    ...params,
    formDataKey: formDataKey.value,
    widgetValue
  })
}
</script>
<style lang="scss">
.widgets-input-mask {
  width: 100%;
  .el-input {
    .el-input__inner {
      color: inherit;
    }
  }
  .el-textarea {
    .el-textarea__inner {
      color: inherit;
    }
  }
}
</style>
