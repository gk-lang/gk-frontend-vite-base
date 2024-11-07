<template>
  <div :class="['widgets-button-group', widgetRootClass]">
    <ButtonsBar v-bind="widgetAttrs" @click="click" />
  </div>
</template>
<script setup>
import ButtonsBar from '@/components/buttons-bar/buttons-bar.vue'
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify'])
const props = defineProps({
  ...baseProps('button-group')
})
const { formDataKey, widgetAttrs, widgetRootClass } = useWidgetBase(
  props,
  emits
)

function eventNotify(eventType, event, clickedBtn, resolve) {
  emits('notify', {
    event,
    eventType,
    formDataKey: formDataKey.value,
    clickedBtn,
    widgetInfo: props.widgetInfo,
    resolve
  })
}

function click(event, btnItem, resolve) {
  event.preventDefault()
  eventNotify('click', event, btnItem, resolve)
}
</script>
<style lang="scss">
.widgets-button-group {
  width: 100%;
}
</style>
