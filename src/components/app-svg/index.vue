<template>
  <div class="app-svg" @click="handleIconClick">
    <el-tooltip
      :effect="titleEffect"
      :content="title"
      :placement="titlePlacement"
      :visible="!!title"
    >
      <el-icon :color="color" :size="size" >
        <slot />
        <template v-if="iconName">
          <svg :class="svgClass" aria-hidden="true">
            <use :xlink:href="svgName" />
          </svg>
        </template>
      </el-icon>
    </el-tooltip>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { ElTooltip, ElButton, ElIcon } from "element-plus";
const emits = defineEmits(["click"]);
const props = defineProps({
  title: {
    type: String,
    default: () => "",
  },
  titlePlacement: {
    type: String,
    default: () => "top",
  },
  titleEffect: {
    type: String,
    default: () => "light",
  },
  color: {
    type: String,
    default: () => "",
  },
  size: {
    type: String,
    default: () => "",
  },
  // 图标名称，已icon-开头，例如icon-baocun
  iconClass: {
    type: String,
    default: "icon",
  },
  // 类名
  iconName: {
    type: String,
    default: "",
  },
});
function handleIconClick() {
  emits("click");
}
const svgClass = computed(() => {
  return props.iconClass ? `#${props.iconClass}` : "#icon";
});
const svgName = computed(() => {
  return `${svgClass.value}-${props.iconName}`;
});
</script>
