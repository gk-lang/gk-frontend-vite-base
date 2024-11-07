<template>
  <div
    :class="inputDisplayType === 0 ? 'mask-input finished' : 'mask-input'"
    @mouseover="handleMouseover"
    @mouseout="handleMouseout"
  >
    <el-input
      ref="inputRef"
      v-bind="inputAttrs"
      v-show="inputDisplayType === 1"
      v-model="newModelValue"
      class="can-input"
      :placeholder="canInputplaceholder"
      @blur="handleInputBlur"
      @keyup.enter="handleInputEnter"
    ></el-input>
    <div
      v-show="inputDisplayType === 0 && isHoverShowMask"
      class="mask"
      @click="handleMaskClick"
    >
      点击编辑,Enter键生效
    </div>
    <div class="disabled-content">
      <el-input
        class="fill-block"
        v-show="inputDisplayType === 0 && isHoverShowMask"
        disabled
      ></el-input>
      <el-input
        class="disabled-input"
        v-show="inputDisplayType === 0 && !isHoverShowMask"
        disabled
        v-model="oldModelValue"
        :placeholder="inputAttrs.placeholder"
      ></el-input>
    </div>
  </div>
</template>

<script setup>
import { ElInput } from "element-plus";
import { ref, watch, onMounted, computed } from 'vue'
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  inputAttrs: {
    type: Object,
    default: () => {
      return {}
    }
  },
  timeStamp: {
    type: String,
    required: false
  }
})
const canInputplaceholder = ref(
  props.inputAttrs?.inputplaceholder || '请输入自定义内容'
)
const isHoverShowMask = ref(false)
const inputRef = ref(null)
const oldModelValue = ref(props.modelValue)
const newModelValue = ref(props.modelValue)
const inputDisplayType = ref(0)

onMounted(() => {
  initInputDisplayTypeValue()
})
function handleMouseout() {
  isHoverShowMask.value = false
}
function handleMouseover() {
  if (inputDisplayType.value === 0) {
    isHoverShowMask.value = true
  }
}
watch(
  () => props.modelValue,
  (nv, ov) => {
    oldModelValue.value = nv
    newModelValue.value = ''
  },
  {
    immediate: true
  }
)
watch(
  () => isHoverShowMask.value,
  val => {
    if (val) {
      canInputplaceholder.value = ''
    } else {
      canInputplaceholder.value =
        props.inputAttrs?.inputplaceholder || '请输入自定义内容'
    }
    console.log('isHoverShowMask.value:', isHoverShowMask.value)
  },
  {
    immediate: true
  }
)
function setInputDisplayType(value) {
  inputDisplayType.value = value
}

function handleMaskClick() {
  setInputDisplayType(1)
  inputRef.value.focus()
}

function handleInputBlur() {
  setInputDisplayType(0)
  initInputDisplayTypeValue()
}
function handleInputEnter() {
  setInputDisplayType(0)
  emits('save', newModelValue.value, oldModelValue.value)
  emits('update:modelValue', newModelValue.value)
}
function initInputDisplayTypeValue() {
  oldModelValue.value = props.modelValue
  newModelValue.value = props.modelValue
  //   if (props.modelValue) {
  //     inputDisplayType.value = 0
  //   } else {
  //     inputDisplayType.value = 1
  //   }
}
watch(
  () => props.timeStamp,
  val => {
    initInputDisplayTypeValue()
  }
)
defineExpose({
  focus: () => {
    if (inputRef.value) {
      inputRef.value.focus()
    }
  }
})
</script>

<style lang="scss" scoped>
.mask-input {
  width: 100%;
  height: 100%;
  position: relative;
  .mask {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--el-color-primary);
    font-size: medium;
    // border-radius: $jzt-border-radius;
  }
  :deep(.el-input) {
    display: block;
    width: 100%;
    height: 100%;
    .el-input__wrapper {
      width: 100%;
      box-sizing: border-box;
    }
  }
  .disabled-content {
    .fill-block {
      width: 100%;
      height: 100%;
      display: block;
      background-color: bisque;
    }
  }
  &.finished {
    z-index: 10;
    &:hover {
      .mask {
        z-index: 9;
        opacity: 1;
        background-color: var(--el-overlay-color-lighter);
        position: absolute;
      }
      .disabled-input {
        display: none;
      }
    }
  }
}
</style>
