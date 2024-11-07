<template>
  <el-form-item
    :class="[
      { 'no-show-required': widgetAttrs.isNoShowRequired },
      {
        'label-width-0': isHiddenFormItemLabel,
      },
      'dy-form-item',
      formDataKey,
    ]"
    :ref="'form-item-' + formDataKey"
    :prop="formDataKey"
    :rules="formItemRules"
    v-bind="widgetAttrs"
  >
    <!-- labelName字段名称 -->
    <template #label>
      <div
        v-if="widgetAttrs.labelName"
        :class="['tip-wrap', { hidden: isHiddenFormItemLabel }]"
      >
        <span class="title" v-html="widgetAttrs.labelName"></span>
        <!-- 提示文字 -->
        <el-tooltip v-if="widgetAttrs.tipContent" effect="dark" placement="top">
          <template #content>
            <div
              class="tip-content-order-update"
              v-html="widgetAttrs.tipContent"
            ></div>
            <span class="iconfont-eln MD-help"></span>
          </template>
        </el-tooltip>
      </div>
    </template>

    <template v-if="childWidgetList.length">
      <DynamicWidget
        v-for="childWidget in childWidgetList"
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
      v-else-if="widgetInfo.childWidget"
      :widgetInfo="widgetInfo.childWidget"
      @notify="handleFormWidgetNotify"
    >
      <template #[name]="scope" v-for="name in slotNames">
        <slot :name="name" :data="scope.data"></slot>
      </template>
    </DynamicWidget>

    <div v-else>
      {{ formData[formDataKey] }}
    </div>
    <!-- 删除按钮 -->
    <div
      v-if="widgetAttrs.isShowDeleteBtn"
      class="svg-del"
      @click="handleDeleteItemClick(item)"
    >
      <span class="iconfont-eln MD-del"></span>
    </div>
  </el-form-item>
</template>
<script setup>
import { ElFormItem, ElTooltip } from "element-plus";
import { computed, useSlots, inject } from "vue";
import DynamicWidget from "../../dynamic-widget.vue";
import { injectDataKey } from "../../../common/constants.js";
const emits = defineEmits(["notify"]);

const props = defineProps({
  widgetInfo: {
    type: Object,
    default: () => {},
  },
});

// 注入数据
const injectData = inject(injectDataKey);
// 表单数据
const { formData } = injectData;
// 所有插槽，这里是个对象，所以用计算属性把插槽名称取出来
const allSlot = useSlots();

const childWidgetList = computed(() => {
  if (Array.isArray(props.widgetInfo.childWidget)) {
    return props.widgetInfo.childWidget;
  }
  return [];
});
const widgetAttrs = computed(() => {
  return props.widgetInfo.widgetAttrs || {};
});
const formItemRules = computed(() => {
  return props.widgetInfo.widgetAttrs.rules || [];
});
const formDataKey = computed(() => {
  return props.widgetInfo.formDataKey;
});
const isHiddenFormItemLabel = computed(() => {
  const labelWidth = props.widgetInfo.labelWidth;
  if (labelWidth === 0 || labelWidth === "0" || labelWidth === "0px") {
    return true;
  } else {
    return false;
  }
});

const slotNames = computed(() => {
  // 过滤出属于 form 组件的插槽
  const solts = Object.keys(allSlot);
  return solts;
});

// 向外抛出组件内发出的事件
function handleFormWidgetNotify(params) {
  emits("notify", params);
}
function handleDeleteItemClick() {}
</script>
<style lang="scss">
.dy-form-item {
  margin-bottom: 0px;
  &.is-error {
    .time-select-group {
      .el-select__wrapper {
        box-shadow: 1px 0 0 0 var(--el-color-danger) inset,
          0 1px 0 0 var(--el-color-danger) inset,
          0 -1px 0 0 var(--el-color-danger) inset !important;
      }
    }
    .vue3-treeselect__control {
      border-color: transparent;
      box-shadow: 0 0 0 1px var(--el-color-danger) inset;
    }
  }
  &.label-width-0 {
    .el-form-item__label {
      display: none;
    }
  }
  .hidden {
    display: none !important;
  }
  .tip-wrap {
    display: inline-block;
    .MD-help {
      right: -5px;
      position: relative;
      cursor: pointer;
      color: rgba(50, 145, 248, 1);
    }
  }
  // .el-form-item__label {
  //   height: 36px;
  //   line-height: 36px;
  //   padding: 0px;
  //   &::before {
  //     float: left;
  //     margin-top: 2px;
  //     content: '';
  //     width: 4px;
  //     color: #f56c6c;
  //     margin-right: 4px;
  //   }
  // }
  .el-form-item__content {
    .common-select {
      width: 100%;
      margin: unset;
      .el-select {
        width: 100%;
        .el-input__inner {
          width: 100%;
        }
      }
    }
    .el-date-editor {
      width: 100%;
      float: left;
      // .el-input__icon {
      //   position: absolute;
      //   height: 100%;
      // }
      // &.el-input__inner {
      //   padding: 0px 10px;
      // }
      .el-range-separator {
        line-height: 36px;
        height: 36px;
      }
      .el-input__inner {
        width: 100%;
      }
    }
    .el-cascader {
      width: 100%;
      // float: left;
      // height: 36px;
      // line-height: 36px;
      // .el-input__inner {
      //   width: 100%;
      //   height: 36px;
      //   line-height: 36px;
      // }
      // .el-cascader__tags {
      //   flex-wrap: nowrap;
      //   .el-tag {
      //     overflow: hidden;
      //     max-width: 75%;
      //   }
      // }
    }
    .text-field {
      width: 100%;
      float: left;
    }
    .input-field {
      width: 100%;
      float: left;
      .el-input__inner {
        width: 100%;
      }
      .el-input-group__append,
      .el-input-group__prepend {
        .el-select {
          width: 120px;
        }
        .el-input__inner {
          border: 0px;
        }
      }
    }
  }
  &.is-required.no-show-required {
    .el-form-item__label {
      &::before {
        content: "";
      }
    }
  }
  &.is-required {
    .el-form-item__label {
      &::before {
        content: "*";
      }
    }
  }

  .svg-del {
    visibility: hidden;
    font-size: 20px;
    position: absolute;
    top: 50%;
    margin-top: -18px;
    cursor: pointer;
    right: 6px;
  }
  &:hover {
    .svg-del {
      visibility: visible;
    }
  }
}
</style>
