<template>
  <div :class="['widgets-datetime', widgetRootClass]">
    <el-date-picker
      v-model="widgetValue"
      v-bind="widgetAttrs"
      @change="change"
      @blur="blur"
      @focus="focus"
      @calendar-change="calendarChange"
      @panel-change="panelChange"
      @visible-change="visibleChange"
    />
  </div>
</template>
<script setup>
import { ElDatePicker } from "element-plus";
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('datetime')
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
function change(event) {
  eventNotify('change', event)
}
function blur(event) {
  eventNotify('blur', event)
}
function focus(event) {
  eventNotify('focus', event)
}
function calendarChange(event) {
  eventNotify('calendar-change', event)
}
function panelChange(event) {
  eventNotify('panel-change', event)
}
function visibleChange(event) {
  eventNotify('visible-change', event)
}
</script>
<style lang="scss">
.widgets-datetime {
  width: 100%;
  .el-date-editor {
    box-sizing: border-box;
  }
}
</style>
