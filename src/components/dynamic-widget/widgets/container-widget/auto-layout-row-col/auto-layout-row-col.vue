<template>
  <template v-for="(key, i) in formLayoutKeys" :key="keyRow(i)">
    <el-row :gutter="10">
      <el-col
        v-for="(item, j) in formLayout[key]"
        :key="keyRowCol(i, j)"
        :style="{ width: item.widgetAttrs.width }"
        v-bind="item.widgetAttrs"
        :class="[
          {
            'el-col-right': item.widgetAttrs.isRowRight
          }
        ]"
      >
        <DynamicWidget
          :widgetInfo="item.childWidget"
          @notify="handleFormWidgetNotify"
        >
          <template #[name]="scope" v-for="name in slotNames">
            <slot :name="name" :data="scope.data"></slot>
          </template>
        </DynamicWidget>
      </el-col>
    </el-row>
  </template>
</template>

<script setup>
import { ElRow,ElCol } from "element-plus";
import { computed, useSlots } from 'vue'
import DynamicWidget from '../../dynamic-widget.vue'
const emits = defineEmits(['notify', 'update:modelValue'])
const props = defineProps({
  /* 表单配置 */
  formItems: {
    type: Array,
    default: () => {
      return []
    }
  }
})
// 所有插槽，这里是个对象，所以用计算属性把插槽名称取出来
const allSlot = useSlots()
// 插槽名称
const slotNames = computed(() => {
  // 过滤出属于 form 组件的插槽
  const solts = Object.keys(allSlot)
  return solts
})

// 表单布局配置
const formLayout = computed(() => {
  const itemList = props.formItems.filter(x => !x.hidden)
  return generateFormLayout(itemList)
})

// 表单布局的key,主要是row信息,用于生成row、col
const formLayoutKeys = computed(() => {
  const keys = Object.keys(formLayout.value)
  return keys.sort((a, b) => {
    // 将每个字符串分解为文本部分和数字部分
    const matchA = a.match(/([a-z]+)-(\d+)/i)
    const matchB = b.match(/([a-z]+)-(\d+)/i)

    // 提取文本部分
    const prefixA = matchA[1]
    const prefixB = matchB[1]

    // 比较文本部分
    if (prefixA < prefixB) return -1
    if (prefixA > prefixB) return 1

    // 如果文本部分相同，转换数字部分为数字类型后比较
    const numberA = parseInt(matchA[2], 10)
    const numberB = parseInt(matchB[2], 10)
    return numberA - numberB
  })
})

// row的key
function keyRow(i) {
  return 'row_' + i
}

// col的key
function keyRowCol(i, j) {
  return 'row_' + i + '_col_' + j
}

// 根据传入的配置，生成表单的布局配置
function generateFormLayout(formItems) {
  const formLayout = {}
  let row = []
  let index = 0
  const newFormItems = formItems.filter(x => !x.hidden)
  for (let i = 0; i < newFormItems.length; i++) {
    if (newFormItems[i].widgetAttrs.span > 24) {
      throw new Error(`formItems中第${i}个item的colSpan超出最长限制24`)
    }
    if (newFormItems[i].widgetAttrs.span < 0) {
      throw new Error(`formItems中第${i}个item的colSpan的值不能为负数`)
    }
    if (
      !newFormItems[i].widgetAttrs.span &&
      !newFormItems[i].widgetAttrs.width
    ) {
      newFormItems[i].widgetAttrs.span = 12
    }
    if (
      !newFormItems[i].widgetAttrs.span &&
      newFormItems[i].widgetAttrs.width
    ) {
      newFormItems[i].widgetAttrs.span = 0
    }
    row.push(newFormItems[i])
    // 是否单独占一行
    if (newFormItems[i].widgetAttrs.isSingleRow) {
      formLayout[`row-${index}`] = [...row]
      row = []
      index++
    } else {
      let rowColSpan = 0
      row.forEach(item => {
        rowColSpan += item.widgetAttrs.span
      })
      if (rowColSpan === 24) {
        formLayout[`row-${index}`] = [...row]
        row = []
        index++
      } else if (rowColSpan > 24) {
        const lastItem = row.pop()
        formLayout[`row-${index}`] = [...row]
        index++
        row = [lastItem]
      }
      // 对最后一行的处理
      if (row.length && i === newFormItems.length - 1) {
        formLayout[`row-${index}`] = [...row]
        row = []
        index++
      }
    }
  }
  return formLayout
}

// 向外抛出组件内发出的事件
function handleFormWidgetNotify(params) {
  emits('notify', params)
}
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
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  :deep(.el-form .el-form-item .el-form-item__content .el-input) {
    width: 100%;
  }
}
</style>
