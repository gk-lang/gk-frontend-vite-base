<!-- 可进行折叠的tabs -->
<template>
  <div :class="['widgets-tabs-collapse', widgetRootClass]">
    <el-tabs
      v-model="widgetValue"
      v-bind="widgetInfo.widgetAttrs"
      editable
      type="border-card"
      @edit="handleTabsCollapse"
      @click="handleTabsClick"
      :class="[
        { fold: collapseFlag },
        {
          expand: !collapseFlag
        }
      ]"
    >
      <template #add-icon>
        <template v-if="tabsBarRightWidget">
          <DynamicWidget
            :widgetInfo="tabsBarRightWidget"
            @notify="handleFormWidgetNotify"
          >
            <template #[name]="scope" v-for="name in slotNames">
              <slot :name="name" :data="scope.data"></slot>
            </template>
          </DynamicWidget>
        </template>
        <el-icon class="collapse-icon" v-else-if="isEnableCollapse"
          ><ArrowDownBold
        /></el-icon>
      </template>
      <el-tab-pane
        v-for="item in widgetOptions"
        v-bind="item"
        :key="item.label"
      >
        <template #label>
          <span class="custom-tabs-label">
            <span>{{ item.label }}</span>
          </span>
        </template>
        <template v-if="item.childWidget.length">
          <DynamicWidget
            v-for="child in item.childWidget"
            :key="child._id"
            :widgetInfo="child"
            @notify="handleTableWidgetNotify"
          >
            <template #[name]="scope" v-for="name in slotNames">
              <slot
                :name="name"
                :data="{
                  ...scope.data
                }"
              ></slot>
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { ElTabs,ElTabPane,ElIcon } from "element-plus";
import { ref, computed, useSlots } from 'vue'
import { generateHash } from '../../../utils'
import DynamicWidget from '../../dynamic-widget.vue'
import { ArrowDownBold } from '@element-plus/icons-vue'
import { cloneDeep } from 'lodash-es'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  widgetInfo: {
    type: Object,
    default: () => {}
  }
})
// 折叠状态
const collapseFlag = ref(false)
// 所有插槽，这里是个对象，所以用计算属性把插槽名称取出来
const allSlot = useSlots()
// 是否可折叠
const isEnableCollapse = computed(() => {
  if (
    props.widgetInfo.widgetAttrs.isEnableCollapse === undefined ||
    props.widgetInfo.widgetAttrs.isEnableCollapse === null
  ) {
    return true
  } else {
    return props.widgetInfo.widgetAttrs.isEnableCollapse
  }
})
const tabsBarRightWidget = computed(() => {
  if (props.widgetInfo.tabsBarRightWidget) {
    return props.widgetInfo.tabsBarRightWidget
  } else {
    return null
  }
})

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

function handleTabsClick(e) {
  if (isEnableCollapse.value) {
    e.preventDefault()
    if (e.target.className.indexOf('el-tabs__nav-scroll') !== -1) {
      collapseFlag.value = !collapseFlag.value
    }
  }
}
function handleTabsCollapse(targetName, action) {
  if (isEnableCollapse.value) {
    collapseFlag.value = !collapseFlag.value
  }
}
// 向外抛出组件内发出的事件
function handleFormWidgetNotify(params) {
  emits('notify', params)
}
</script>

<style lang="scss" scoped>
.widgets-tabs-collapse {
  :deep(.el-tabs) {
    --el-tabs-header-height: 36px;
    .el-tabs__header {
      border-color: rgb(220, 223, 230);
      .el-tabs__new-tab {
        margin: 0px;
        margin-top: 7px;
        margin-right: 10px;
        border-width: 0px;
        width: fit-content;
      }
      .el-tabs__nav-wrap {
        margin-bottom: 0px;
        .el-tabs__nav-scroll {
          cursor: pointer;
        }
      }
    }
    .el-tabs__item {
      font-size: 14px;
      user-select: none;
      .is-icon-close {
        display: none;
        padding: 0px;
      }
      &:last-child:not(.is-active).is-closable:hover {
        padding: unset !important;
        padding-left: 20px !important;
      }
      &.is-active {
        .custom-tabs-label {
          border-left: 5px solid;
          padding-left: 5px;
          margin-left: -10px;
        }
      }
    }
    .el-tabs__content {
      padding: 0px;
      transition: all 0.3s ease-in-out;
      .dynamic-form {
        padding: 10px;
        box-sizing: border-box;
      }
    }
    &.fold {
      .el-tabs__header {
        border-bottom: 0px;
        .el-tabs__new-tab {
          transform: rotate(-90deg);
          margin-top: 8px;
        }
      }
      .el-tabs__content {
        height: 0px;
      }
    }
    &.expand {
    }
  }
}
</style>
