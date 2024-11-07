import TableItemWidget from './table-item.vue'

/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(option) {
  const defaultOption = {}
  return defaultOption
}
/**
 * 渲染组件时的默认数据
 */
export function widgetDefaultValue(option) {
  return {
    type: String,
    value: ''
  }
}

/**
 * 解析导出时映射的文本值（非id）
 */
export function widgetValue2Title(option) {
  return option.value || ''
}

/**
 * 组件type属性对应解析的类型，table-item
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [{ label: '表格的TableItem', value: 'table-item', hidden: false }]
}

export default TableItemWidget
