<template>
  <div :class="['widgets-input', widgetRootClass]">
    <el-input
      v-bind="widgetAttrs"
      v-model="widgetValue"
      @blur="blur"
      @focus="focus"
      @change="change"
      @input="input"
      @clear="clear"
    >
    </el-input>
  </div>
</template>
<script setup>
import { ElInput } from "element-plus";
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('input')
})
const { formDataKey, widgetValue, widgetAttrs, widgetRootClass } =
  useWidgetBase(props, emits)

function eventNotify(eventType, event) {
  emits('notify', {
    event,
    eventType,
    formDataKey: formDataKey.value,
    widgetValue,
    widgetInfo: props.widgetInfo
  })
}

function blur(event) {
  eventNotify('blur', event)
}
function focus(event) {
  eventNotify('focus', event)
}
function change(event) {
  eventNotify('change', event)
}
function input(event) {
  eventNotify('input', event)
}
function clear(event) {
  eventNotify('clear', event)
}
</script>
<style lang="scss">
.widgets-input {
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
