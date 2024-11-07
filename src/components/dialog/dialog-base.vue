<template>
  <el-dialog
    class="dialog-base"
    v-model="visibleDialog"
    :title="title"
    :fullscreen="fullscreening"
    :show-close="false"
    :append-to-body="true"
    :draggable="true"
    align-center
  >
    <slot />
    <template #header="{ close, titleId, titleClass }">
      <div :id="titleId" :class="titleClass">
        <app-svg icon-name="dialog-logo" size="16"></app-svg>
        <span class="title">{{ title }}</span>
      </div>
      <div class="dialog-toolbar">
        <el-button v-if="!fullscreening" link @click="toggleFullscreen">
          <app-svg icon-name="daohang-quanpingxianshi" size="14"></app-svg>
        </el-button>
        <el-button v-else link @click="toggleFullscreen">
          <app-svg icon-name="daohang-tuichuquanping" size="14"></app-svg>
        </el-button>
        <el-button v-if="isShowCloseIcon" link @click="closeDialog()">
          <app-svg icon-name="yeqian-guanbi" size="12"></app-svg>
        </el-button>
      </div>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <slot name="footer">
          <el-button size="default" @click="closeDialog()">取消</el-button>
          <el-button size="default" type="primary" @click="submitDialog()">
            确定
          </el-button>
        </slot>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import { ElDialog, ElButton } from "element-plus";
import AppSvg from "@/components/app-svg/index.vue";
const emits = defineEmits(["update:visible", "confirm", "cancel"]);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  isShowCloseIcon: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: () => "弹框",
  },
});
const fullscreening = ref(false);
const visibleDialog = computed({
  get() {
    return props.visible;
  },
  set(val) {
    emits("update:visible", val);
  },
});
function closeDialog() {
  visibleDialog.value = false;
  emits("cancel");
}
function submitDialog() {
  emits("confirm");
}
function toggleFullscreen() {
  fullscreening.value = !fullscreening.value;
}
</script>
<style lang="scss">
.dialog-base {
  padding: 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .el-dialog__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    background-color: #f5f5f5;
    padding: 7px 16px;
    border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid var(--el-border-color-light);
    .app-svg {
      cursor: pointer;
    }
    .el-dialog__title {
      .app-svg {
        margin-top: 2px;
        float: left;
      }
      .title {
        float: left;
        margin-left: 5px;
      }
    }
  }
  .el-dialog__body {
    padding: 20px;
    .dialog-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .el-dialog__footer {
    padding-top: 0px;
    .dialog-footer {
      padding: 20px 20px;
    }
  }
}
</style>
