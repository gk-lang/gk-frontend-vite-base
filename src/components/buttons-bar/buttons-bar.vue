<template>
  <div :class="['buttons-bar', align]">
    <template v-for="(item, index) in buttonItems" :key="index">
      <div
        class="jzt-global-toolbar-item"
        v-if="!isFold || index <= showButtonNum - 1"
      >
        <el-button
          :ref="(el) => (item.$ref = el)"
          v-bind="item.widgetAttrs"
          :loading="item.widgetAttrs?.loading || item.widgetAttrs?.autoLoading"
          @click="handleMethodClick($event, item)"
          >{{ `${item[config.shortcutKey]}${item[config.name]}` }}</el-button
        >
      </div>
    </template>
    <div class="tool-box" v-if="isShowFoldBtn">
      <el-button
        type="primary"
        plain
        class="jzt-plain-button"
        @click="isFold = !isFold"
      >
        <span>{{ isFold ? "更多" : "收起" }}</span>
        <el-icon class="el-icon--right">
          <!-- <i-ep-arrow-up v-if="!isFold" />
          <i-ep-arrow-down v-else /> -->
        </el-icon>
      </el-button>
    </div>
  </div>
</template>
<script setup>
import { ElButton, ElIcon, ElRow, ElCol } from "element-plus";
// import { successMessage, errorMessage } from "#/utils";
import {
  watch,
  ref,
  computed,
  onActivated,
  onDeactivated,
  onMounted,
  onUnmounted,
} from "vue";
const emits = defineEmits(["click", "update:buttons", "update:modelValue"]);
const props = defineProps({
  /* 按钮配置 */
  buttons: {
    type: Array,
    default: () => {
      return [];
    },
  },
  /* 按钮属性映射配置 */
  config: {
    type: Object,
    default: () => {
      return {
        name: "name",
        eventKey: "eventKey",
        shortcutKey: "shortcutKey",
      };
    },
  },
  /* 显示的按钮数量 */
  showButtonNum: {
    type: Number,
    default: () => {
      return 6;
    },
  },
  /* 是否显示折叠隐藏按钮 */
  isShowFoldBtn: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  /* 位置 */
  align: {
    type: String,
    default: () => {
      return "left";
    },
  },
});
const isFold = ref(false);
// 表格的数据
const buttonItems = computed({
  get() {
    return props.buttons;
  },
  set(val) {
    emits("update:buttons", val);
  },
});

function handleMethodClick(event, item) {
  try {
    if (typeof item?.widgetAttrs?.autoLoading === "boolean") {
      item.widgetAttrs.autoLoading = true;
    }
    setTimeout(() => {
      const resolve = (type, message) => {
        if (item?.widgetAttrs?.autoLoading) {
          item.widgetAttrs.autoLoading = false;
        }
        if (type === "success" && message) {
          // successMessage(message);
        } else if (type === "error" && message) {
          // errorMessage(message);
        }
      };
      emits("click", event, item, resolve);
    });
  } catch (error) {
    setTimeout(() => {
      if (item?.widgetAttrs?.autoLoading) {
        item.widgetAttrs.autoLoading = false;
      }
    });
  }
}

function setBtnShortcutKeys() {
  document.onkeydown = (event) => {
    const baseListenKey = {};
    buttonItems.value.forEach((item) => {
      if (item.eventKey) {
        baseListenKey[props.config.eventKey] = item;
      }
    });
    if (baseListenKey[event.key]) {
      event.preventDefault();
      //   handleMethodClick(baseListenKey[event.key], null)
    }
  };
}

onActivated(() => {
  setBtnShortcutKeys();
});

onDeactivated(() => {
  if (document.onkeydown) {
    document.onkeydown = null;
  }
});

onMounted(() => {
  setBtnShortcutKeys();
});

onUnmounted(() => {
  if (document.onkeydown) {
    document.onkeydown = null;
  }
});
</script>
<style lang="scss" scoped>
.buttons-bar {
  display: flex;
  flex-wrap: wrap;
  margin-left: -4px;
  // margin-top: -10px;
  padding-left: 2px;
  // padding: 10px 0px;
  // width: max-content;
  &.left {
    justify-content: flex-start;
  }
  &.center {
    justify-content: center;
  }
  &.right {
    justify-content: flex-end;
  }
  .jzt-global-toolbar-item {
    margin-left: 4px;
  }
  .tool-box {
    margin-left: 4px;
    margin-top: 10px;
  }
}
</style>
