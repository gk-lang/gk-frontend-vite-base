import widgetButtonGroup from './button-group.vue'

/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(option) {
  const defaultOption = {
    widget: 'form-item',
    widgetAttrs: {},
    childWidget: {
      widget: 'button-group',
      loading: false
    }
  }
  return defaultOption
}

/**
 * 渲染组件时的默认数据
 */
export function widgetDefaultValue(option) {
  return {
    type: Array,
    value: []
  }
}

/**
 * 解析导出时映射的文本值（非id）
 */
export function widgetValue2Title(option) {
  return option.value || ''
}

/**
 * 组件type属性对应解析的类型，button-group
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [{ label: '按钮组', value: 'button-group', hidden: false }]
}

export default widgetButtonGroup
