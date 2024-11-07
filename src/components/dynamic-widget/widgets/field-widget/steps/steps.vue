<template>
  <el-scrollbar :class="['widgets-steps', widgetRootClass]">
    <div :class="`widgets-steps-container ${widgetAttrs.stepStyleType}`">
      <template v-if="widgetAttrs.stepStyleType === 'no-step-num'">
        <div
          :class="[
            'step-item',
            { active: item.value && activeValue === item.value }
          ]"
          v-for="(item, index) in widgetOptions"
          v-bind="item"
          :key="item.value"
          @click="handleStepItemClick(item)"
        >
          <div
            :class="[
              'step-item-title',
              { 'no-show-border': widgetAttrs.noShowNodeBorder }
            ]"
          >
            <div
              :style="
                !widgetAttrs.noShowNodeBorder
                  ? `width:${widgetAttrs.nodeTitleWidth || item.width}px;`
                  : ''
              "
              :class="['title', { 'is-red-font': item.isRedFont }]"
            >
              {{ item.label || item.title }}
            </div>
          </div>
          <template v-if="widgetAttrs.lineArrowStyle === 'common'">
            <div v-if="index < widgetOptions.length - 1">-></div>
          </template>
          <template v-else>
            <div
              :class="[
                'step-item-line',
                { 'no-show-line-arrow': widgetAttrs.isNoShowLineArrow }
              ]"
              :style="`width:${widgetAttrs.lineWidth || 150}px;`"
              v-if="index < widgetOptions.length - 1"
            ></div>
          </template>
        </div>
      </template>
      <template v-else>
        <el-steps
          :class="[
            {
              'is-no-show-process-color': true
            }
          ]"
          :active="widgetValue"
          v-bind="widgetAttrs"
        >
          <el-step
            v-for="item in widgetOptions"
            v-bind="item"
            :key="item.value"
          />
        </el-steps>
      </template>
    </div>
  </el-scrollbar>
</template>
<script setup>
import { ElScrollbar,ElSteps,ElStep } from "element-plus";
import { ref, computed } from 'vue'
import { useWidgetBase, baseProps } from '../../../hooks/useWidgetBase.js'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  ...baseProps('steps')
})
const activeValue = ref('')
const { formDataKey, dictKeyData, widgetValue, widgetAttrs, widgetRootClass } =
  useWidgetBase(props, emits)

const widgetOptions = computed({
  get() {
    if (widgetAttrs.value.optionsFrom === 'formDataKey') {
      return widgetValue.value || []
    }
    if (props.widgetInfo.dictKey) {
      return dictKeyData.value
    } else if (widgetAttrs.value.options && widgetAttrs.value.options.length) {
      return props.widgetInfo.widgetAttrs.options
    }
    return []
  }
})
function handleStepItemClick(item) {
  if (item.value && activeValue.value === item.value) {
    activeValue.value = ''
  } else {
    activeValue.value = item.value
  }
}
function eventNotify(eventType, event) {
  emits('notify', {
    event,
    eventType,
    formDataKey: formDataKey.value,
    widgetValue,
    widgetInfo: props.widgetInfo
  })
}
</script>
<style lang="scss">
.widgets-steps {
  height: unset;
  .el-scrollbar__view {
    // height: 60px;
    position: relative;
    align-items: center;
    display: flex;
  }
  .widgets-steps-container {
    // width: 100%;
    display: flex;
    position: absolute;
    .is-no-show-process-color {
      .el-step {
        .el-step__head {
          border-color: var(--el-text-color-primary);
          color: var(--el-text-color-primary);
          .el-step__icon {
            width: 20px;
            height: 20px;
            font-size: 12px;
            font-weight: 400;
          }
        }
        .el-step__main {
          .el-step__title {
            color: var(--el-text-color-primary);
            font-weight: 400;
            font-size: 12px;
          }
        }
      }
    }
    &.no-step-num {
      display: flex;
      .step-item {
        display: flex;
        // position: relative;
        align-items: center;
        &.active {
          // border-color: var(--el-color-primary);
          .title {
            // color: var(--el-color-primary);
          }
        }
        .step-item-title {
          width: max-content;
          // cursor: pointer;
          z-index: 1;
          border: 2px solid;
          border-color: inherit;
          padding: 2px;
          width: max-content;
          box-sizing: content-box;
          &.no-show-border {
            border: 0px solid;
            padding: 0px;
            .title {
              font-size: 14px;
              width: max-content;
            }
          }
          .title {
            width: max-content;
            font-size: 12px;
            font-weight: 600;
            text-align: center;
            padding: 0px 5px;
            &.is-red-font {
              color: red;
            }
          }
        }
        .step-item-line {
          position: relative;
          &::before {
            content: '';
            display: block;
            width: calc(100% - 10px);
            height: 2px;
            margin: 0px 5px;
            background-color: var(--el-text-color-placeholder);
          }
          &::after {
            content: '';
            display: block;
            position: absolute;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-left: 8px solid var(--el-text-color-placeholder);
            right: 4px;
            top: -5px;
          }
          &.no-show-line-arrow {
            &::before {
              width: calc(100% - 0px);
              margin: 0px;
            }
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
