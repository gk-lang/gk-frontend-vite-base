<template>
  <div :class="['widgets-link', widgetRootClass]">
    <el-link
      v-bind="widgetAttrs"
      v-model="widgetValue"
      @click="click"
      @mousedown="e => e.stopPropagation()"
    >
      {{ widgetValue || widgetAttrs.title }}
    </el-link>
  </div>
</template>
<script setup>
import { ElLink } from "element-plus";
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('link')
})
const { formDataKey, widgetValue, widgetAttrs, widgetRootClass } =
  useWidgetBase(props, emits)

function eventNotify(eventType, event) {
  emits('notify', {
    event,
    eventType,
    formDataKey: formDataKey.value,
    clickedBtn: props.widgetInfo,
    widgetInfo: props.widgetInfo
  })
}

function click(event) {
  event.stopPropagation()
  event.preventDefault()
  eventNotify('click', event)
}
</script>
<style lang="scss">
.widgets-link {
  width: 100%;
}
</style>
