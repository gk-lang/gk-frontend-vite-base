<template>
  <div :class="['widgets-descriptions', widgetRootClass]">
    <el-descriptions v-bind="widgetInfo.widgetAttrs" >
      <el-descriptions-item
        v-for="item in widgetOptions"
        v-bind="item"
        :key="item.label"
      >
        <template v-if="item.childWidget.length">
          <DynamicWidget
            v-for="childWidget in item.childWidget"
            :key="childWidget._id"
            :widgetInfo="childWidget"
            @notify="handleFormWidgetNotify"
          >
            <template #[name]="scope" v-for="name in slotNames">
              <slot :name="name" :data="scope.data"></slot>
            </template>
          </DynamicWidget>
        </template>
        <DynamicWidget
          v-else-if="item.childWidget"
          :widgetInfo="item.childWidget"
          @notify="handleFormWidgetNotify"
        >
          <template #[name]="scope" v-for="name in slotNames">
            <slot :name="name" :data="scope.data"></slot>
          </template>
        </DynamicWidget>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script setup>
import { ElDescriptions,ElDescriptionsItem } from "element-plus";
import { ref, watch, computed, useSlots } from 'vue'
import DynamicWidget from '../../dynamic-widget.vue'
import { generateHash } from '../../../utils'
import { cloneDeep } from 'lodash-es'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  widgetInfo: {
    type: Object,
    default: () => {}
  }
})

// 所有插槽，这里是个对象，所以用计算属性把插槽名称取出来
const allSlot = useSlots()
const widgetOptions = computed(() => {
  const options = cloneDeep(props.widgetInfo.widgetAttrs.options)
  options.forEach(item => {
    if (!item._id) {
      item._id = generateHash(item, 6)
    }
    if (Array.isArray(item.children)) {
      item.children.forEach(x => {
        x._id = generateHash(x, 6)
      })
    }
    if (Array.isArray(item.childWidget)) {
      item.childWidget.forEach(x => {
        x._id = generateHash(x, 6)
      })
    }
  })
  return props.widgetInfo.widgetAttrs.options
})

const slotNames = computed(() => {
  // 过滤出属于 form 组件的插槽
  const solts = Object.keys(allSlot)
  return solts
})
const widgetRootClass = computed(() => {
  return props.widgetInfo.widgetAttrs.widgetRootClass || ''
})
// 向外抛出组件内发出的事件
function handleFormWidgetNotify(params) {
  emits('notify', params)
}
</script>
<style lang="scss">
.widgets-descriptions {
  width: 100%;
  .el-descriptions {
    .el-descriptions__body {
      .el-descriptions__table {
        .el-descriptions__label {
          font-size: 13px;
        }
        .el-descriptions__content {
          height: 32px;
          .widgets-text {
            min-height: 24px;
          }
        }
      }
    }
  }
}
</style>
