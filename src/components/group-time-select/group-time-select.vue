<!-- 时间-下拉选择框-组合组件 -->
<template>
  <div class="time-select-group">
    <div class="left" :style="{ width: leftWidthPx }">
      <el-select
        v-model="selectValue"
        v-bind="selectAttrs"
        @change="change($event)"
        @visible-change="visibleChange"
        @remove-tag="removeTag"
        @clear="clear"
        @blur="blur"
        @focus="focus"
      >
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div class="right">
      <template v-if="timeType === 'time-select'">
        <el-time-select
          v-model="timeValue"
          v-bind="timeAttrs"
          @change="timeChange($event)"
        />
      </template>
      <template v-if="timeType === 'time-picker'">
        <el-time-picker
          v-model="timeValue"
          v-bind="timeAttrs"
          @change="timeChange($event)"
        />
      </template>
    </div>
  </div>
</template>
<script setup>
import { nextTick, computed } from "vue";
import { ElTimePicker, ElTimeSelect, ElSelect } from "element-plus";
const emits = defineEmits(["notify", "update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {
        selectValue: "",
      };
    },
  },
  /* 下拉框可选数据 */
  options: {
    type: Array,
    default: () => {
      return [];
    },
  },
  /* 时间类型 */
  timeType: {
    type: String,
    default: () => {
      return "time-picker";
    },
  },
  /* 时间配置 */
  timeAttrs: {
    type: Object,
    default: () => {
      return {};
    },
  },
  /* 下拉选择框配置 */
  selectAttrs: {
    type: Object,
    default: () => {
      return {};
    },
  },
  /* 左侧宽度 */
  leftWidth: {
    type: String || Number,
    default: () => {
      return 100;
    },
  },
});
const selectValue = computed({
  get() {
    return props.modelValue.selectValue;
  },
  set(value) {
    emits("update:modelValue", {
      ...props.modelValue,
      selectValue: value,
    });
  },
});
const timeValue = computed({
  get() {
    return props.modelValue.timeValue;
  },
  set(value) {
    emits("update:modelValue", {
      ...props.modelValue,
      timeValue: value,
    });
  },
});
const selectOptions = computed({
  get() {
    return props.options || props.selectAttrs.options || [];
  },
});
const leftWidthPx = computed({
  get() {
    const n = Number(props.leftWidth);
    if (!isNaN(n)) {
      return props.leftWidth + "px";
    } else {
      return props.leftWidth;
    }
  },
});

function eventNotify(eventType, event, value) {
  // nextTick(() => {

  // })
  emits("notify", {
    event,
    eventType,
    selectValue,
    timeValue,
    selectOptions,
    value,
  });
}
function timeChange(value) {
  eventNotify("change", null, value);
}
function change(value) {
  eventNotify("change", null, value);
}
function visibleChange(event) {
  eventNotify("visible-change", event);
}
function removeTag(event) {
  eventNotify("remove-tag", event);
}
function clear(event) {
  eventNotify("clear", event);
}
function blur(event) {
  eventNotify("blur", event);
}
function focus(event) {
  eventNotify("focus", event);
}
</script>
<style lang="scss" scoped>
.time-select-group {
  display: flex;
  display: flex;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    :deep(.el-select) {
      --el-input-border-color: #ccc;
      background-color: var(--el-fill-color-light);
      color: var(--el-color-info);
      .el-select__wrapper {
        border-color: transparent;
        // background-color: transparent;
        color: inherit;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        box-shadow: 1px 0 0 0 var(--el-input-border-color) inset,
          0 1px 0 0 var(--el-input-border-color) inset,
          0 -1px 0 0 var(--el-input-border-color) inset;
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    :deep(.el-input) {
      border-left: 0px;
      .el-input__wrapper {
        border-left: 0px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }
  }
}
</style>
