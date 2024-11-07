<template>
  <div class="dynamic-table">
    <el-form
      :model="{ tableData }"
      :class="[
        'table-container',
        { 'is-use-mouse-selection': isUseTableSelection },
      ]"
    >
      <el-table
        v-loading="loading"
        v-contextmenu:contextmenu
        :size="tableSize"
        v-bind="tableAttrs"
        ref="elTableRef"
        :data="tableData"
        :key="id"
        :style="setTableLineHeight()"
        row-key="id"
        :row-style="rowStyle"
        :cell-style="cellStyle"
        :row-class-name="tableRowClassName"
        :cell-class-name="tableCellClassName"
        :span-method="mergeTableSpanMethod"
        @select="select"
        @select-all="selectAll"
        @selection-change="selectionChange"
        @cell-mouse-enter="cellMouseEnter"
        @cell-mouse-leave="cellMouseLeave"
        @cell-click="cellClick"
        @cell-dblclick="cellDblclick"
        @cell-contextmenu="cellContextmenu"
        @row-click="rowClick"
        @row-contextmenu="rowContextmenu"
        @row-dblclick="rowDblclick"
        @header-click="headerClick"
        @header-contextmenu="headerContextmenu"
        @sort-change="sortChange"
        @filter-change="filterChange"
        @current-change="currentChange"
        @header-dragend="headerDragend"
        @expand-change="expandChange"
      >
        <el-table-column v-if="selectionColumn" v-bind="selectionColumn" />
        <el-table-column v-if="indexColumn" v-bind="indexColumn" />
        <DynamicWidget
          v-for="column in dyTableColumns"
          :key="column._id"
          :widgetInfo="column"
          @notify="handleTableWidgetNotify"
        >
          <template #[name]="scope" v-for="name in slotNames">
            <slot
              :name="name"
              :tableData="scope.data.formData"
              :widgetInfo="scope.data.widgetInfo"
              :row="scope.data.row"
              :index="scope.data.index"
            ></slot>
          </template>
        </DynamicWidget>
        <!-- <template #empty>
          <img src="@/assets/images/no_data.png" alt="暂无数据" />
        </template> -->
      </el-table>
    </el-form>
    <el-card
      v-if="isShowPage"
      shadow="never"
      :class="['page-container', pageAlign]"
    >
      <el-pagination
        background
        :size="pageSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentPage"
        :current-page="pageInfo.page_num"
        :page-sizes="[10, 20, 30, 40, 50, 100, 200]"
        :page-size="pageInfo.page_size"
        layout="total, prev, pager, next,sizes,jumper"
        :total="pageInfo.total_num || 0"
      >
      </el-pagination>
    </el-card>
    <el-card
      v-if="isShowTableBottomSlot"
      shadow="never"
      :class="['table-slot-container', TableBottomSlotAlign]"
    >
      <slot name="bottom-left"></slot>
      <slot name="bottom-center"></slot>
      <slot name="bottom-right"></slot>
    </el-card>
    <v-contextmenu v-if="isUseTableSelection" ref="contextmenu">
      <v-contextmenu-item @click="handleContextmenuClick('copy-cell')"
        >复制单元格</v-contextmenu-item
      >
      <v-contextmenu-item @click="handleContextmenuClick('copy-row')"
        >复制点击行</v-contextmenu-item
      >
      <v-contextmenu-item @click="handleContextmenuClick('copy-checked-row')"
        >复制勾选框</v-contextmenu-item
      >
    </v-contextmenu>
  </div>
</template>

<script setup>
// import store from "#/store";
import {
  ref,
  useSlots,
  unref,
  reactive,
  onMounted,
  onBeforeMount,
  watch,
  computed,
  useAttrs,
  provide,
  nextTick,
} from "vue";
import { cloneDeep } from "lodash-es";
import { generateHash, assignDeep } from "./utils";
import { resolveWidgets } from "./widgets/index.js";
import DynamicWidget from "./widgets/dynamic-widget.vue";
import { injectDataKey } from "./common/constants.js";
// import { useTableSelection } from "./hooks/useTableSelection";
import {
  ElForm,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElCard,
  ElMessage,
  ElMessageBox,
  ElLoading,
} from "element-plus";
const emits = defineEmits(["notify", "update:modelValue", "update:page"]);
const props = defineProps({
  id: {
    type: String,
    default: () => {
      return "";
    },
  },
  /* 表格配置 */
  columns: {
    type: Array,
    default: () => {
      return [];
    },
  },
  page: {
    type: Object,
    default: () => {
      return null;
    },
  },
  loading: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  pageAlign: {
    type: String,
    default: () => {
      return "right";
    },
  },
  pageSize: {
    type: String,
    default: () => {
      return "default";
    },
  },
  tableSize: {
    type: String,
    default: () => {
      return "default";
    },
  },
  rowLineHeight: {
    type: String,
    default: () => {
      return "24";
    },
  },
  /* 表格v-model模型对象 */
  modelValue: {
    type: Array,
    default: () => {
      return [];
    },
  },
  /* 表格合并数据 */
  tableSpan: {
    type: Array,
    default: () => {
      return [];
    },
  },
  /* 是否使用表格框选 */
  isUseTableSelection: {
    type: Boolean,
    default: () => {
      return true;
    },
  }
});
// 表格的ref
const elTableRef = ref(null);
// 所有动态组件
const widgets = resolveWidgets();
// const widgetMap = await resolveWidgets();
// const widgets = ref(null);
// 所有插槽，这里是个对象，所以用计算属性把插槽名称取出来
const allSlot = useSlots();
// 当前表格组件所以属性
const $attrs = useAttrs();
// 转换后的动态表格列配置
const dyTableColumns = ref([]);
// 表格默认行高
const tableLineHeight = ref(props.rowLineHeight);
// 存在复选框时选中的行
const multipleSelection = ref([]);
// 鼠标右键时的单元格数据
const cellContextmenuData = ref("");
// 鼠标右键时的行数据
const rowContextmenuData = ref(null);
// 表格的数据
const tableData = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
  },
});
// 处理鼠标拖动时的复选框勾选
// const { handleCheckboxSelectAll, allSelectedRows } = useTableSelection(
//   elTableRef,
//   props,
//   {
//     isShowSelectionBox: true, // 是否显示当前框选窗口
//     isMultiSelectMode: true, // 是否多选
//     isInvertSelectedRow: true, // 是否反选行模式
//     isSetCheckboxStatus: true, // 是否设置Checkbox状态（el-table存在多选框时）
//   }
// );

// 插槽名称
const slotNames = computed(() => {
  // 过滤出属于 table 组件的插槽
  const solts = Object.keys(allSlot);
  return solts;
});
// 是否显示分页
const isShowPage = computed(() => {
  return !!props.page;
});
// 分页数据
const pageInfo = computed({
  get() {
    if (props.page) {
      return new Proxy(props.page, {
        set(target, key, newValue) {
          target[key] = newValue;
          emits("update:page", target);
          return true;
        },
      });
    } else {
      return null;
    }
  },
  set(val) {
    emits("update:page", val);
  },
});
// 是否显示表格底部插槽
const isShowTableBottomSlot = computed(() => {
  return (
    allSlot["bottom-right"] ||
    allSlot["bottom-left"] ||
    allSlot["bottom-center"]
  );
});
// 表格底部插槽位置
const TableBottomSlotAlign = computed(() => {
  if (allSlot["bottom-left"] && allSlot["bottom-right"]) {
    return "auto";
  } else if (allSlot["bottom-left"]) {
    return "left";
  } else if (allSlot["bottom-right"]) {
    return "right";
  } else if (allSlot["bottom-center"]) {
    return "center";
  } else {
    return "auto";
  }
});
// 挂载在表格上的属性
const tableAttrs = computed(() => {
  // 过滤出属于 table 组件的插槽
  const attrs = { ...$attrs };
  delete attrs.class;
  return attrs;
});

// 多选列item
const selectionColumn = computed(() => {
  const item = props.columns.find((x) => x.type === "selection");
  return item;
});
// 序号列item
const indexColumn = computed(() => {
  const item = props.columns.find((x) => x.type === "index");
  return item;
});
// 表格合并数据
const tableSpanData = computed(() => {
  const resultData = computeMergeTableSpanData(props.tableSpan);
  return resultData;
});

function copyText(text) {
  let r = "";
  const execCommandCopy = () => {
    let textarea = null;
    try {
      textarea = document.createElement("textarea");
      document.body.appendChild(textarea);
      textarea.style.position = "fixed"; // 隐藏此输入框
      textarea.style.clip = "rect(0 0 0 0)";
      textarea.style.top = "10px";
      textarea.value = text; // 赋值
      textarea.select(); // 选中
      r = document.execCommand("copy", true);
      if (r) {
        ElMessage({
          message: "复制成功!",
          dangerouslyUseHTMLString: true,
          duration: 1000,
          type: "success",
        });
      } else {
        ElMessage({
          message: "复制失败!",
          dangerouslyUseHTMLString: true,
          duration: 1000,
          type: "error",
        });
      }
    } catch (error) {
      ElMessage({
        message: "复制失败!",
        dangerouslyUseHTMLString: true,
        duration: 1000,
        type: "error",
      });
    } finally {
      if (textarea) {
        document.body.removeChild(textarea); // 移除输入框
      }
    }
  };
  try {
    // clipboard api 复制
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      ElMessage({
        message: "复制成功!",
        dangerouslyUseHTMLString: true,
        duration: 1000,
        type: "success",
      });
    } else {
      // 复制
      execCommandCopy();
    }
  } catch (error) {
    execCommandCopy();
  }
}

// 鼠标右键菜单处理
function handleContextmenuClick(type) {
  if (type === "copy-cell") {
    const text = cellContextmenuData.value;
    copyText(text);
  }
  if (type === "copy-row") {
    let text = "";
    dyTableColumns.value.forEach((item) => {
      const key = item.widgetAttrs.prop;
      text += rowContextmenuData.value[key] + "   ";
    });
    copyText(text);
  }
  if (type === "copy-checked-row") {
    const textRows = [];
    multipleSelection.value.forEach((row) => {
      const textRow = [];
      dyTableColumns.value.forEach((item) => {
        const key = item.widgetAttrs.prop;
        textRow.push(row[key] + "   ");
      });
      textRows.push(textRow);
    });
    // 将二维数组转换为制表符分隔的字符串
    const text = textRows.map((row) => row.join("\t")).join("\n");
    copyText(text);
  }
}

// 生成转化处理后的TableColumns
function generateDyTableColumns(columns) {
  const newColumns = columns.filter(
    (x) => !x.hidden && !["selection", "index"].includes(x.type)
  );
  const columnList = cloneDeep(newColumns);

  // 格式化TableColumns的配置
  setTableColumnsFormatAttr(columnList);
  // 转化成自动RowCol布局JSON
  // if (props.isAutoConvertToRowCol) {
  //   setFormItemsAutoRowCol(itemList)
  // }
  // 给每个组件设置额外属性
  setFormItemExtraProp(columnList);
  // console.log("dyTableColumns:", columnList);
  return columnList;
}
// 格式化用户端的formItem的属性
function setTableColumnsFormatAttr(columnList) {
  for (let i = 0; i < columnList.length; i++) {
    const item = columnList[i];
    if (!item.widget) {
      item.widgetAttrs = {
        ...columnList[i],
        prop: item.prop || "",
      };
      if (item.slot) {
        if (!item.childWidget) {
          item.childWidget = {};
        }
        item.childWidget.widget = "slot";
        item.childWidget.slot = item.slot;
      }
      if (typeof item.render === "function") {
        if (!item.childWidget) {
          item.childWidget = {};
        }
        item.childWidget.widget = "render";
        item.childWidget.render = item.render;
      }
      if (
        item.childWidget &&
        typeof item.childWidget === "object" &&
        !["slot", "render"].includes(item.childWidget.widget)
      ) {
        item.childWidget.formDataKey = `${item.prop || "_"}`;
      }
      item.widget = "table-item";
      // 删除table-item中的无效字段
      const needToExist = [
        "widget",
        "childWidget",
        "children",
        "widgetAttrs",
        "headerRender",
        "_id",
        "_widget_type",
      ];
      Object.keys(item).forEach((key) => {
        if (!needToExist.includes(key)) {
          delete item[key];
        }
      });
      // 删除widgetAttrs中的无效字段
      const needToDeletes2 = ["widget", "childWidget", "children"];
      needToDeletes2.forEach((key) => {
        delete item.widgetAttrs[key];
      });

      // 删除form-item中的无效字段
      // const needToDeletes2 = ['widget', 'isSingleRow', 'width', 'span']
      // needToDeletes2.forEach(key => {
      //   delete item.childWidget[key]
      // })
    }
    if (item.children?.length) {
      setTableColumnsFormatAttr(item.children);
    }
  }
}
// 给每个组件设置额外属性
function setFormItemExtraProp(widgetInfo, index) {
  if (typeof widgetInfo === "object") {
    if (!widgetInfo._id && index === undefined) {
      widgetInfo._id = generateHash(widgetInfo, 6);
    }
    if (!widgetInfo._widget_type) {
      widgetInfo._widget_type = getWidgeType(widgetInfo.widget);
    }
    if (widgetInfo.widget === "table-item") {
      if (index || index === 0) {
        const hashId = generateHash(widgetInfo, 6);
        widgetInfo._id = `${
          widgetInfo.widgetAttrs.prop || ""
        }_${index}_${hashId}`;
      } else if (!widgetInfo._id) {
        widgetInfo._id = generateHash(widgetInfo, 6);
      }
      if (widgetInfo.widgetAttrs.defaultShow === undefined) {
        widgetInfo.widgetAttrs.defaultShow = !widgetInfo.widgetAttrs.hidden;
      }
      if (widgetInfo.widgetAttrs.sortable === undefined) {
        widgetInfo.widgetAttrs.sortable = true;
      }
      if (widgetInfo.widgetAttrs["show-overflow-tooltip"] === undefined) {
        widgetInfo.widgetAttrs["show-overflow-tooltip"] = true;
      }
    }
    // 设置form-item的默认属性值，如rules,placeholder
    if (["form-item"].includes(widgetInfo.widget)) {
      setWidgetDefaultAttr(widgetInfo);
    }
    if (widgetInfo.childWidget) {
      setFormItemExtraProp(widgetInfo.childWidget);
    }
    if (widgetInfo.children) {
      setFormItemExtraProp(widgetInfo.children);
    }
  }
  if (Array.isArray(widgetInfo)) {
    widgetInfo.forEach((x, i) => {
      setFormItemExtraProp(x, i);
    });
  }
}
// 设置form-item的默认属性值，如rules,placeholder
function setWidgetDefaultAttr(widgetInfo) {
  if (widgetInfo.childWidget.widget === "slot") {
    widgetInfo.widgetAttrs.rules = [
      {
        required: true,
        message:
          widgetInfo.widgetAttrs.requiredErrorMsg ||
          widgetInfo.childWidget.widgetAttrs.placeholder,
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
// 通过组件名称获取组件类型
function getWidgeType(widgetName) {
  let result = "";
  const widgetsTypeMap = widgets.value.widgetsTypeMap;
  Object.keys(widgetsTypeMap).forEach((key) => {
    if (!result && widgetsTypeMap[key].includes(widgetName)) {
      result = key;
    }
  });
  return result;
}
function rowStyle({ row, rowIndex }) {
  // if (rowIndex % 2 === 0) {
  //   return { height: '35px', background: '#F5F8FB' }
  // } else {
  //   return { height: '35px' }
  // }
  if (typeof props.rowStyle === "function") {
    props.rowStyle({ row, rowIndex });
  }
}

function cellStyle({ row, column, rowIndex, columnIndex }) {
  // if (rowIndex % 2 === 0 && columnIndex % 2 === 0) {
  //   return { background: 'rgb(245, 248, 251)' }
  // }
  if (typeof props.cellStyle === "function") {
    props.cellStyle({ row, column, rowIndex, columnIndex });
  }
}
function tableRowClassName({ row, rowIndex }) {
  if (typeof props.rowClassName === "function") {
    props.rowClassName({ row, rowIndex });
  } else {
    return `rowIndex_${rowIndex}`;
  }
}
function tableCellClassName({ row, column, rowIndex, columnIndex }) {
  if (typeof props.cellClassName === "function") {
    props.cellClassName({ row, column, rowIndex, columnIndex });
  } else {
    return column.property || "";
  }
}
function computeMergeTableSpanData(tableSpanList) {
  const toDeleteTableSpan = [];
  const mergeTableSpan = JSON.parse(JSON.stringify(tableSpanList));
  mergeTableSpan.forEach((x) => {
    if (x.colspan > 1 && x.rowspan <= 1) {
      // 列合并时
      for (let i = 1; i < x.colspan; i++) {
        const item = {
          ...x,
          colspan: 0,
          rowspan: 0,
          columnIndex: x.columnIndex + i,
        };
        toDeleteTableSpan.push(item);
      }
    } else if (x.colspan <= 1 && x.rowspan > 1) {
      // 行合并时
      for (let i = 1; i < x.rowspan; i++) {
        const item = {
          ...x,
          rowspan: 0,
          colspan: 0,
          rowIndex: x.rowIndex + i,
        };
        toDeleteTableSpan.push(item);
      }
    } else if (x.colspan > 1 && x.rowspan > 1) {
      // 行、列同时合并时
      for (let i = 1; i < x.colspan; i++) {
        const item1 = {
          ...x,
          rowspan: 0,
          colspan: 0,
          columnIndex: x.columnIndex + i,
        };
        toDeleteTableSpan.push(item1);
        for (let j = 1; j < x.rowspan; j++) {
          const item2 = {
            ...x,
            rowspan: 0,
            colspan: 0,
            columnIndex: item1.columnIndex,
          };
          item2.rowIndex += j;
          toDeleteTableSpan.push(item2);
        }
      }

      // 行、列同时合并时
      for (let i = 1; i < x.rowspan; i++) {
        const item1 = {
          ...x,
          rowspan: 0,
          colspan: 0,
          rowIndex: x.rowIndex + i,
        };
        toDeleteTableSpan.push(item1);
        for (let j = 1; j < x.colspan; j++) {
          const item2 = {
            ...x,
            rowspan: 0,
            colspan: 0,
            rowIndex: item1.rowIndex,
          };
          item2.columnIndex += j;
          toDeleteTableSpan.push(item2);
        }
      }
    }
  });
  const result = toDeleteTableSpan.concat(mergeTableSpan);
  return result;
}

// 处理表格合并
function mergeTableSpanMethod({ row, column, rowIndex, columnIndex }) {
  if ($attrs["span-method"]) {
    return $attrs["span-method"]({ row, column, rowIndex, columnIndex });
  } else if (tableSpanData.value.length) {
    const item = tableSpanData.value.find(
      (item) => item.rowIndex === rowIndex && item.columnIndex === columnIndex
    );
    if (item) {
      return {
        rowspan: item.rowspan,
        colspan: item.colspan,
      };
    }
  }
}

function select(val) {
  emits("notify", {
    eventType: "select",
    value: val,
  });
}
function selectAll(val) {
  // handleCheckboxSelectAll(val);
  emits("notify", {
    eventType: "select-all",
    value: val,
  });
}
function selectionChange(val) {
  multipleSelection.value = val;
  emits("notify", {
    eventType: "selection-change",
    multipleSelection: val,
  });
}
function cellMouseEnter(val) {
  emits("notify", {
    eventType: "cell-mouse-enter",
    value: val,
  });
}
function cellMouseLeave(val) {
  emits("notify", {
    eventType: "cell-mouse-leave",
    value: val,
  });
}
function cellClick(val) {
  console.log("cellClick", val);
  emits("notify", {
    eventType: "cell-click",
    value: val,
  });
}
function cellDblclick(val) {
  emits("notify", {
    eventType: "cell-dblclick",
    value: val,
  });
}
function cellContextmenu(row, column) {
  cellContextmenuData.value = row[column.property];
  emits("notify", {
    eventType: "cell-contextmenu",
    row: row,
    column: column,
  });
}
function rowClick(val) {
  emits("notify", {
    eventType: "row-click",
    value: val,
  });
}
function rowContextmenu(row) {
  rowContextmenuData.value = row;
  emits("notify", {
    eventType: "row-contextmenu",
    row: row,
  });
}
function rowDblclick(val) {
  emits("notify", {
    eventType: "row-dblclick",
    value: val,
  });
}
function headerClick(val) {
  emits("notify", {
    eventType: "header-click",
    value: val,
  });
}
function headerContextmenu(val) {
  emits("notify", {
    eventType: "header-contextmenu",
    value: val,
  });
}
function sortChange(val) {
  emits("notify", {
    eventType: "sort-change",
    value: val,
  });
}
function filterChange(val) {
  emits("notify", {
    eventType: "filter-change",
    value: val,
  });
}
function currentChange(val) {
  emits("notify", {
    eventType: "current-change",
    value: val,
  });
}
function headerDragend(val) {
  emits("notify", {
    eventType: "header-dragend",
    value: val,
  });
}
function expandChange(val) {
  emits("notify", {
    eventType: "expand-change",
    value: val,
  });
}

function handleSizeChange(val) {
  pageInfo.value.page_size = val;
  emits("notify", {
    eventType: "size-change",
    isPageEvent:true,
    page: {
      ...props.page,
      page_size: val,
    },
  });
}
function handleCurrentPage(val) {
  pageInfo.value.page_num = val;
  emits("notify", {
    eventType: "current-change",
    isPageEvent:true,
    page: {
      ...props.page,
      page_num: val,
    },
  });
}
function initPage() {
  if (!props.page) {
    pageInfo.value = {
      page_num: 1,
      page_size: 50,
      total_num: 0,
    };
  } else {
    if (!props.page.page_num) {
      pageInfo.value.page_num = 1;
    }
    if (!props.page.page_size) {
      pageInfo.value.page_size = 50;
    }
    if (!props.page.total_num) {
      pageInfo.value.total_num = 0;
    }
  }
}
function handleTableWidgetNotify(params) {
  emits("notify", params);
}
function setTableLineHeight() {
  if (tableLineHeight.value) {
    return `--jzt-default-table-line-height: ${tableLineHeight.value}px; --jzt-default-table-input-height: ${tableLineHeight.value}px;`;
  }
}
// watch(
//   () => store.state.comp.table.currentTableId,
//   (nv) => {
//     const tableId = nv.split(";")[0];
//     const type = nv.split(";")[1];
//     if (tableId && type === "setLineHeight") {
//       tableLineHeight.value = store.state.comp.table.tables[tableId].lineHeight;
//     }
//     // if (tableId && type === 'setTableColumns') {
//     //   tableLineHeight.value = store.state.comp.table.tables[tableId].lineHeight
//     // }
//   }
// );
watch(
  () => props.columns,
  async (list) => {
    dyTableColumns.value = generateDyTableColumns(list);
  },
  {
    immediate: true,
    deep: true,
  }
);

provide(injectDataKey, {
  formData: tableData,
  widgets: widgets,
});

// onBeforeMount(() => {
//   if (props.id) {
//     store.commit("comp/table/setTables", {
//       tableId: props.id,
//     });
//   }
// });
onMounted(() => {
  initPage();
});
defineExpose({
  elTableRef,
});
</script>
<style lang="scss">
.v-contextmenu {
  z-index: 9999;
}
</style>
<style lang="scss" scoped>
.dynamic-table {
  height: 100%;
  display: flex;
  flex-direction: column;
  .table-container {
    flex: 1;
    height: 0;

    :deep(.el-table) {
      height: 100%;
      width: 100%;
    }
    /** start 以下是表格框选样式优化，避免样式冲突 */
    &.is-use-mouse-selection {
      :deep(.el-table) {
        .el-table__body-wrapper {
          // width: 100%;
          .el-scrollbar {
            .el-scrollbar__view {
              // display: block !important;
              .el-table__body {
                tbody tr td .cell .el-form-item {
                  margin: 0px;
                }
                // tr > td {
                //   -webkit-user-select: none;
                //   -moz-user-select: none;
                //   -khtml-user-select: none;
                //   -ms-user-select: none;
                //   -o-user-select: none;
                //   user-select: none;
                //   --el-table-row-hover-bg-color: unset;
                // }
                tr.table-row-selected {
                  background-color: #ddefff;
                }
              }
            }
          }
        }
      }
    }
    /** end 以上是表格框选样式优化，避免样式冲突 */
  }

  .table-slot-container {
    padding: 5px;
    border-top: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    // display: flex;
    :deep(.el-card__body) {
      padding: 5px;
      display: flex;
      justify-content: space-between;
    }
    &.left {
      :deep(.el-card__body) {
        justify-content: flex-start;
      }
    }
    &.right {
      :deep(.el-card__body) {
        justify-content: flex-end;
      }
    }
    &.center {
      :deep(.el-card__body) {
        justify-content: center;
      }
    }
    &.auto {
      :deep(.el-card__body) {
        justify-content: space-between;
      }
    }
  }
  .page-container {
    padding: 5px;
    border-top: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    // display: flex;
    :deep(.el-card__body) {
      padding: 5px;
      display: flex;
      justify-content: flex-start;
      .el-pagination--small .el-select {
        width: 90px;
      }
    }
    &.right {
      :deep(.el-card__body) {
        justify-content: flex-end;
      }
    }
    &.center {
      :deep(.el-card__body) {
        justify-content: center;
      }
    }
  }
}
</style>
<style lang="css">
.selection-moving tr.hover-row.table-row-selected td.el-table__cell {
  background-color: #ddefff !important;
}
</style>
