<template>
  <div :class="['widgets-input-popover-table', widgetRootClass]">
    <InputPopoverTable
      v-model="widgetValue"
      v-bind="widgetAttrs"
      :options="widgetOptions"
      @search="search"
      @change="change"
    />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import InputPopoverTable from '@/components/input-popover-table/input-popover-table.vue'
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('input-popover-table')
})
const { formDataKey, widgetValue, widgetAttrs, dictKeyData, widgetRootClass } =
  useWidgetBase(props, emits)
const widgetOptions = computed({
  get() {
    if (props.widgetInfo.dictKey) {
      return dictKeyData.value
    } else if (widgetAttrs.value.options && widgetAttrs.value.options.length) {
      return props.widgetInfo.widgetAttrs.options
    }
    return []
  }
})
function eventNotify(eventType, event, params) {
  emits('notify', {
    event,
    eventType,
    formDataKey: formDataKey.value,
    widgetValue,
    widgetInfo: props.widgetInfo,
    ...params
  })
}

function search(params) {
  eventNotify('search', null, params)
}
function change(params) {
  eventNotify('change', null, params)
}
function removeTag(event) {
  eventNotify('remove-tag', event)
}
function clear(event) {
  eventNotify('clear', event)
}
function blur(event) {
  eventNotify('blur', event)
}
function focus(event) {
  eventNotify('focus', event)
}
</script>
<style lang="scss" scoped>
.widgets-input-popover-table {
  width: 100%;
}
</style>
