<template>
  <div :class="['widgets-segmented', widgetRootClass]">
    <el-segmented
      v-bind="widgetAttrs"
      :options="widgetOptions"
      v-model="widgetValue"
      @change="change"
    />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { ElSegmented } from "element-plus";
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('segmented')
})
const { formDataKey, dictKeyData, widgetValue, widgetAttrs } = useWidgetBase(
  props,
  emits
)

const widgetOptions = computed({
  get() {
    if (props.widgetInfo.dictKey) {
      return dictKeyData.value.map(x => {
        if (typeof x === 'object') {
          return x.label
        } else {
          return x
        }
      })
    } else if (widgetAttrs.value.options && widgetAttrs.value.options.length) {
      return props.widgetInfo.widgetAttrs.options.map(x => {
        if (typeof x === 'object') {
          return x.label
        } else {
          return x
        }
      })
    }
    return []
  }
})

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
</script>
<style lang="scss">
.widgets-segmented {
  width: 100%;
}
</style>
