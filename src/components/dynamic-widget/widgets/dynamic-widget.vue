<template>
  <!-- render渲染 -->
  <component
    v-if="isFuncRender"
    :key="'widget-render-' + widgetId"
    :data="{
      widgetInfo: widgetInfo,
      formData: formData,
      tableRowIndex: tableRowIndex,
    }"
    :is="handleRender(widgetInfo.render)"
  />

  <!-- 动态表单组件 -->
  <component
    v-else-if="widgetName !== 'slot' && widgetName !== 'render'"
    :key="'widget-comp-' + widgetId"
    :is="widgets[widgetName].component"
    :widgetInfo="widgetInfo"
    :tableRowIndex="tableRowIndex"
    @notify="handleFormWidgetNotify"
  >
    <template #[name]="scope" v-for = "name in slotNames">
      <slot :name="name" :data="scope.data"></slot>
    </template>
  </component>
  <!-- 插槽 -->
  <slot
    v-else-if="widgetName === 'slot'"
    :name="widgetInfo.slot || formDataKey"
    :data="{
      formData: formData,
      widgetInfo: widgetInfo,
      tableRowIndex: tableRowIndex,
    }"
  ></slot>
</template>
<script setup>
import { ref, inject, computed, onMounted, useSlots } from "vue";
import useDynamicWidget from "../hooks/useDynamicWidget.js";
import { injectDataKey } from "../common/constants.js";
const emits = defineEmits(["notify"]);
const props = defineProps({
  widgetInfo: {
    type: Object,
    default: () => {},
  },
  tableRowIndex: {
    type: Number,
    default: () => -1,
  },
});
const injectData = inject(injectDataKey);
const { widgets } = injectData;
// 所有插槽，这里是个对象，所以用计算属性把插槽名称取出来
const allSlot = useSlots();
// 插槽名称
const slotNames = computed(() => {
  // 过滤出属于 form 组件的插槽
  const solts = Object.keys(allSlot);
  return solts;
});

const {
  widgetId,
  widgetName,
  formData,
  formDataKey,
  isFuncRender,
  handleRender,
} = useDynamicWidget(props, emits);

// 向外抛出组件内发出的事件
function handleFormWidgetNotify(params) {
  emits("notify", params);
}
</script>
