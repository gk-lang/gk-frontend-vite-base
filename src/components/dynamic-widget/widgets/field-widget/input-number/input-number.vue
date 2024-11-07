<template>
  <div :class="['widgets-input-number', widgetRootClass]">
    <el-input-number
      v-bind="widgetAttrs"
      v-model="widgetValue"
      @blur="blur"
      @focus="focus"
      @change="change"
      @input="input"
      @clear="clear"
    >
    </el-input-number>
  </div>
</template>
<script setup>
import { ElInputNumber } from "element-plus";
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('input-number')
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
.widgets-input-number {
  width: 100%;
  .el-input-number.is-controls-right {
    .el-input {
      .el-input__wrapper {
        padding-left: 7px;
      }
      .el-input__inner {
        color: inherit;
      }
    }
  }

  .el-textarea {
    .el-textarea__inner {
      color: inherit;
    }
  }
}
</style>
