<template>
  <el-table-column v-bind="widgetInfo.widgetAttrs" class="table-column-item">
    <!-- 表格头render -->
    <template
      v-if="
        widgetInfo.headerRender && typeof widgetInfo.headerRender === 'function'
      "
      #header
    >
      <component :is="widgetInfo.headerRender(h, widgetInfo)"></component>
    </template>
    <template #default="{ row, $index }">
      <!-- <template v-else-if="widgetInfo.childWidget?.widget">
        <el-form-item
          :prop="`tableData.${$index}.${column.prop}`"
          :rules="formItemRules"
        >
          <component
            :is="widgets[widgetName].component"
            :option="formItemOption"
            v-model="row[column.prop]"
            v-bind="widgetAttrs"
            @notify="
              handleTableWidgetNotify($event, {
                row,
                rowIndex: $index,
                column
              })
            "
          />
        </el-form-item>
      </template> -->

      <template v-if="childWidgetList.length">
        <DynamicWidget
          v-for="childWidget in childWidgetList"
          :key="childWidget._id"
          :widgetInfo="childWidget"
          :tableRowIndex="$index"
          @notify="
            handleTableWidgetNotify($event, {
              row,
              rowIndex: $index,
              column: widgetInfo
            })
          "
        >
          <template #[name]="scope" v-for="name in slotNames">
            <slot
              :name="name"
              :data="{
                ...scope.data,
                row,
                index: $index
              }"
            ></slot>
          </template>
        </DynamicWidget>
      </template>

      <DynamicWidget
        v-else-if="widgetInfo.childWidget"
        :widgetInfo="widgetInfo.childWidget"
        :tableRowIndex="$index"
        @notify="
          handleTableWidgetNotify($event, {
            row,
            rowIndex: $index,
            column: widgetInfo
          })
        "
      >
        <template #[name]="scope" v-for="name in slotNames">
          <slot
            :name="name"
            :data="{
              ...scope.data,
              row,
              index: $index
            }"
          ></slot>
        </template>
      </DynamicWidget>

      <!-- 文字 -->
      <span v-else>{{
        widgetInfo.widgetAttrs.type === "index"
          ? $index + 1
          : row[widgetInfo.widgetAttrs.prop]
      }}</span>
    </template>
  </el-table-column>
</template>
<script setup>
import { ElTableColumn } from "element-plus";
import DynamicWidget from "../../../widgets/dynamic-widget.vue";
import { useSlots, computed } from "vue";

const emits = defineEmits(["notify", "update:modelValue"]);
const props = defineProps({
  widgetInfo: {
    type: Object,
    default: () => {},
  },
});

// 所有插槽，这里是个对象，所以用计算属性把插槽名称取出来
const allSlot = useSlots();

const slotNames = computed(() => {
  // 过滤出属于 form 组件的插槽
  const solts = Object.keys(allSlot);
  return solts;
});

const childWidgetList = computed(() => {
  if (Array.isArray(props.widgetInfo.children)) {
    return props.widgetInfo.children;
  }
  if (Array.isArray(props.widgetInfo.childWidget)) {
    return props.widgetInfo.childWidget;
  }
  return [];
});

// 向外抛出组件内发出的事件
function handleTableWidgetNotify(params1, params2) {
  emits("notify", {
    ...params1,
    ...params2,
  });
}
</script>
<style lang="scss">
.table-column-item {
  .el-form-item {
    margin: 0px;
  }
}
</style>
