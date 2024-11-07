<template>
  <div :class="['widgets-button', widgetRootClass]">
    <el-button
      v-bind="widgetAttrs"
      v-model="widgetValue"
      :loading="widgetAttrs?.loading || widgetAttrs?.autoLoading"
      @click="handleMethodClick($event)"
      @mousedown="e => e.stopPropagation()"
    >
      {{ widgetValue || widgetAttrs.name }}
    </el-button>
  </div>
</template>
<script setup>
import { ElMessage,ElButton } from 'element-plus'
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('button')
})
const { formDataKey, widgetValue, widgetAttrs, widgetRootClass } =
  useWidgetBase(props, emits)

function eventNotify(eventType, event, resolve) {
  emits('notify', {
    event,
    eventType,
    formDataKey: formDataKey.value,
    clickedBtn: props.widgetInfo,
    widgetInfo: props.widgetInfo,
    resolve
  })
}

function handleMethodClick(event) {
  event.preventDefault()
  try {
    if (typeof widgetAttrs?.autoLoading === 'boolean') {
      widgetAttrs.autoLoading = true
    }
    setTimeout(() => {
      const resolve = (type, message) => {
        if (widgetAttrs?.autoLoading) {
          widgetAttrs.autoLoading = false
        }
        if (type === 'success' && message) {
          ElMessage({
            message: message,
            dangerouslyUseHTMLString: true,
            duration: 1000,
            type: 'success'
          })
        } else if (type === 'error' && message) {
          ElMessage({
            message: message,
            dangerouslyUseHTMLString: true,
            duration: 1000,
            type: 'error'
          })
        }
      }
      eventNotify('click', event, props.widgetInfo, resolve)
    })
  } catch (error) {
    setTimeout(() => {
      if (widgetAttrs?.autoLoading) {
        widgetAttrs.autoLoading = false
      }
    })
  }
}
</script>
<style lang="scss">
.widgets-button {
  width: 100%;
}
</style>
