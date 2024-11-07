<template>
  <div :class="['widgets-switch', widgetRootClass]">
    <el-switch v-bind="widgetAttrs" v-model="widgetValue" @change="change">
    </el-switch>
  </div>
</template>
<script setup>
import { ElSwitch } from "element-plus";
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('switch')
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
</script>
<style lang="scss">
.widgets-switch {
  width: 100%;
}
</style>
