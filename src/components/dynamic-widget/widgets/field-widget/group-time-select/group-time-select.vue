<template>
  <div :class="['widgets-select', widgetRootClass]">
    <GroupTimeSelect
      v-model="widgetValue"
      v-bind="widgetAttrs"
      :options="widgetOptions"
      @notify="handleFormWidgetNotify"
    />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import GroupTimeSelect from '@/components/group-time-select/group-time-select.vue'
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('group-time-select')
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
.widgets-select {
  width: 100%;
}
</style>
