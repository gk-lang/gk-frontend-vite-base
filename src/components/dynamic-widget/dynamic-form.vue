<template>
  <el-form
    v-loading="loading"
    ref="elFormRef"
    v-bind="$attrs"
    :model="formData"
    :class="['dynamic-form']"
  >
    <template v-if="isAutoConvertToRowCol">
      <AutoLayoutRowColWidget
        :formItems="dyFormItems"
        @notify="handleFormWidgetNotify"
      >
        <template #[name]="scope" v-for="name in slotNames">
          <slot
            :name="name"
            :formData="scope.formData"
            :widgetInfo="scope.widgetInfo"
          ></slot>
        </template>
      </AutoLayoutRowColWidget>
    </template>
    <template v-else>
      <DynamicWidget
        v-for="item in dyFormItems"
        :key="item._id"
        :widgetInfo="item"
        @notify="handleFormWidgetNotify"
      >
        <template #[name]="scope" v-for="name in slotNames">
          <slot
            :name="name"
            :formData="scope.data.formData"
            :widgetInfo="scope.data.widgetInfo"
          ></slot>
        </template>
      </DynamicWidget>
    </template>
  </el-form>
</template>

<script setup>
import { ElForm } from "element-plus";
import { cloneDeep } from "lodash-es";
import {
  ref,
  computed,
  useSlots,
  provide,
  watch,
  nextTick,
  onMounted,
} from "vue";
import { generateHash, assignDeep } from "./utils";
import { resolveWidgets } from "./widgets/index.js";
import { injectDataKey } from "./common/constants.js";
import AutoLayoutRowColWidget from "./widgets/container-widget/auto-layout-row-col";
import DynamicWidget from "./widgets/dynamic-widget.vue";

const emits = defineEmits(["notify", "update:modelValue"]);

const props = defineProps({
  /* 表单配置 */
  formItems: {
    type: Array,
    default: () => {
      return [];
    },
  },
  /* 表单模型对象 */
  modelValue: {
    type: Object,
    default: () => {
      return {};
    },
  },
  // 表单联动动作
  linkageAction: {
    type: Array,
    default: () => {
      return [];
    },
  },
  /* 当前表单是否作为搜索栏 */
  isSearchBar: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  /* 是否自动转换成RowCol */
  isAutoConvertToRowCol: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
  /* 给表单设置loading效果 */
  loading: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
});
// 表单items
const dyFormItems = ref([]);
// 表单ref
const elFormRef = ref(null);
// 重置表单域
const resetFieldFormDataKey = ref("");
// 字典数据
// const dictData = ref({})
// 所有插槽，这里是个对象，所以用计算属性把插槽名称取出来
const allSlot = useSlots();
// 所有动态组件
// const widgets = ref(null);
const widgets = resolveWidgets();
// 生成转化处理后的FormItems
function generateDyFormItems(formItems) {
  let itemList = formItems.filter((x) => !x.hidden);
  itemList = cloneDeep(itemList);
  // 格式化form-item的配置
  setFormItemsFormatAttr(itemList);
  // 转化成自动RowCol布局JSON
  if (props.isAutoConvertToRowCol) {
    setFormItemsAutoRowCol(itemList);
  }
  // 给每个组件设置额外属性
  setFormItemExtraProp(itemList);
  return itemList;
}

// 表单的数据
const formData = computed({
  get() {
    return new Proxy(props.modelValue, {
      set(target, key, newValue) {
        target[key] = newValue;
        // mapWidgetFormData(target, key, 'setFormDataMap')
        handleLinkageAction(target, key);
        emits("update:modelValue", target);
        return true;
      },
      get(target, key) {
        // mapWidgetFormData(target, key, 'setCompValueMap')
        return target[key];
      },
    });
  },
  set(val) {
    emits("update:modelValue", val);
  },
});

// 字典key
const dictKeys = computed(() => {
  const keys = [];
  props.formItems.forEach((item) => {
    if (item.dictKey && !keys.includes(item.dictKey)) {
      keys.push(item.dictKey);
    }
  });
  return keys;
});

// 插槽名称
const slotNames = computed(() => {
  // 过滤出属于 form 组件的插槽
  const solts = Object.keys(allSlot);
  return solts;
});

watch(
  () => props.formItems,
  async (list) => {
    // if (!widgets.value) {
    //   const widgetData = await resolveWidgets();
    //   widgets.value = widgetData.value;
    // }
    dyFormItems.value = generateDyFormItems(list);
  },
  {
    immediate: true,
    deep: true,
  }
);

// 添加自动RowCol布局json
function setFormItemsAutoRowCol(itemList) {
  for (let i = 0; i < itemList.length; i++) {
    const item = itemList[i];
    // 新增auto-layout-row-col节点,先判断 是否已经自动布局的标识
    if (!item._auto_convert_row_col_finished) {
      item.childWidget = {
        ...item,
      };
      item.widgetAttrs = {};
      if (item.isRowRight !== undefined) {
        item.widgetAttrs.isRowRight = item.isRowRight;
      }
      if (item.isSingleRow !== undefined) {
        item.widgetAttrs.isSingleRow = item.isSingleRow;
      }
      if (item.width !== undefined) {
        item.widgetAttrs.width = item.width;
      }
      if (item.span !== undefined) {
        item.widgetAttrs.span = item.span;
      }
      item.widget = "auto-layout-row-col";
      item._auto_convert_row_col_finished = true;
      const needToExist = [
        "_id",
        "_widget_type",
        "_auto_convert_row_col_finished",
        "widgetAttrs",
        "childWidget",
        "widget",
      ];
      // 删除auto-layout-row-col的属性中的无效字段
      Object.keys(item).forEach((key) => {
        if (!needToExist.includes(key)) {
          delete item[key];
        }
      });

      // 删除form-item中的无效字段
      const needToDeletes2 = ["isRowRight", "isSingleRow", "width", "span"];
      needToDeletes2.forEach((key) => {
        delete item.childWidget[key];
      });
    }
  }
}
// 格式化用户端的formItem的属性
function setFormItemsFormatAttr(itemList) {
  for (let i = 0; i < itemList.length; i++) {
    const item = itemList[i];
    if (!item.widget) {
      item.widget = "form-item";
      item.widgetAttrs = {
        ...itemList[i],
        prop: item.formDataKey,
      };
      item.childWidget.formDataKey = item.formDataKey;
      // 删除form-item中的无效字段
      let needToExist = [
        "widget",
        "childWidget",
        "children",
        "widgetAttrs",
        "formDataKey",
        "_id",
        "_widget_type",
      ];
      if (props.isAutoConvertToRowCol) {
        needToExist = needToExist.concat([
          "isRowRight",
          "isSingleRow",
          "width",
          "span",
        ]);
      }
      Object.keys(item).forEach((key) => {
        if (!needToExist.includes(key)) {
          delete item[key];
        }
      });

      // 删除form-item的widgetAttrs中的无效字段
      const needToDeletes2 = [
        "isSingleRow",
        "isRowRight",
        "width",
        "span",
        "formDataKey",
        "childWidget",
        "widget",
      ];
      needToDeletes2.forEach((key) => {
        delete item.widgetAttrs[key];
      });
    }
    if (item.children?.length) {
      setFormItemsFormatAttr(item.children);
    }
  }
}
// 设置form-item的默认属性值，如rules,placeholder
function setWidgetDefaultAttr(widgetInfo) {
  if (widgetInfo.childWidget.widget === "slot") {
    widgetInfo.widgetAttrs.rules = [
      {
        required: true,
        message:
          widgetInfo.widgetAttrs?.requiredErrorMsg ||
          widgetInfo.childWidget?.widgetAttrs?.placeholder || '',
        trigger: "change",
      },
    ];
  } else {
    const childWidgetName = widgetInfo.childWidget.widget;
    const childWidget = widgets.value[childWidgetName];
    if (childWidget) {
      const defaultWidgetInfo = childWidget.formItemDefaultOption(widgetInfo);
      const newWidgetInfo = assignDeep(defaultWidgetInfo, widgetInfo);
      Object.assign(widgetInfo, newWidgetInfo);
    }
  }
}
// 给每个item设置附加属性
function setFormItemExtraProp(widgetInfo) {
  if (typeof widgetInfo === "object") {
    if (!widgetInfo._id) {
      widgetInfo._id = generateHash(widgetInfo, 6);
    }
    if (!widgetInfo._widget_type) {
      widgetInfo._widget_type = getWidgeType(widgetInfo.widget);
    }
    // 设置form-item的默认属性值，如rules,placeholder
    if (["form-item"].includes(widgetInfo.widget)) {
      setWidgetDefaultAttr(widgetInfo);
    }
    if (widgetInfo.childWidget) {
      setFormItemExtraProp(widgetInfo.childWidget);
    }
  }
  if (Array.isArray(widgetInfo)) {
    widgetInfo.forEach((item) => {
      setFormItemExtraProp(item);
    });
  }
}

// 通过组件名称获取组件类型
function getWidgeType(widgetName) {
  let result = "";
  // 组件类型映射
  const widgetsTypeMap = widgets.value.widgetsTypeMap;
  Object.keys(widgetsTypeMap).forEach((key) => {
    if (!result && widgetsTypeMap[key].includes(widgetName)) {
      result = key;
    }
  });
  return result;
}

// 向外抛出组件内发出的事件
function handleFormWidgetNotify(params) {
  emits("notify", params);
}

// 缓存字典数据
// function sessionStorageDictData() {
//   const dictKeyList = Object.keys(dictData.value)
//   if (dictKeyList.length) {
//     for (let i = 0; i < dictKeyList.length; i++) {
//       const key = dictKeyList[i]
//       const data = dictData.value[key]
//       sessionStorage.setItem(key, JSON.stringify(data))
//     }
//   }
// }
// 处理表单联动动作
function handleLinkageAction(formData, formDataKey) {}

// 映射组件的formData数据值
function mapWidgetFormData(formData, formDataKey, type) {
  const formItem = props.formItems.find((x) => x.formDataKey === formDataKey);
  if (!formItem || !formItem.childWidget || !formItem.childWidget.widget)
    return;
  const widgetInfo = formItem.childWidget;
  const widgetName = widgetInfo.widget;
  const info = widgets.value[widgetName];

  const setCompValueMap = () => {
    if (!formData[formDataKey]) {
      if (info) {
        const defaultV = info.widgetDefaultValue(widgetInfo, formData);
        formData[formDataKey] = defaultV.value;
      } else {
        formData[formDataKey] = "";
      }
    }
  };
  if (type === "setCompValueMap") setCompValueMap();
  if (!widgetInfo.formDataMap) return;
  if (widgetName) {
    if (info && typeof info.widgetFormDataMap === "function") {
      info.widgetFormDataMap(widgetInfo, formData, formDataKey, type);
    } else if (type === "setCompValueMap") {
      setCompValueMap();
    }
  }
}

// 设置动态表单的初始化值
function setWidgetCompFormDataValue(widgetInfo) {
  const formDataKey = widgetInfo.formDataKey;
  if (
    formData.value[formDataKey] === null ||
    formData.value[formDataKey] === undefined
  ) {
    const widget = widgetInfo.widget;
    const info = widgets.value[widget];
    const defaultV = info.widgetDefaultValue(widgetInfo, formData.value);
    formData.value[formDataKey] = defaultV.value;
  }
}

provide(injectDataKey, {
  formData: formData,
  widgets: widgets,
  resetFieldFormDataKey: resetFieldFormDataKey,
});

async function initBaseData() {
  // 加载字典数据
  // dictData.value = await getDictOptionData(dictKeys.value)
  // sessionStorageDictData()
}

function resetFields(key) {
  if (key) {
    resetFieldFormDataKey.value = `${key}_` + Date.now();
    nextTick(() => {
      elFormRef.value.resetFields(key);
    });
  } else {
    resetFieldFormDataKey.value = "all_" + Date.now();
    nextTick(() => {
      elFormRef.value.resetFields();
    });
  }
}
// 初始化表单基础数据
// initBaseData()

defineExpose({
  resetFields,
  elFormRef,
});
</script>
<style lang="scss">
.width100 {
  width: 100%;
}
.dynamic-form {
  height: 100%;
  width: 100%;
  .el-col-0 {
    display: unset;
  }
  .el-col-right {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  }
  .el-row {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  :deep(.el-form .el-form-item .el-form-item__content .el-input) {
    width: 100%;
  }
}
</style>
