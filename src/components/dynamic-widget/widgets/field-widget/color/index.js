import widgetColor from './color.vue'

/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(widgetInfo) {
  return {
    widget: 'form-item',
    widgetAttrs: {},
    childWidget: {
      widget: 'color',
      widgetAttrs: {
        width: '100%',
        placeholder: '请选择'
      }
    }
  }
}

/**
 * 渲染组件时的默认数据
 */
export function widgetDefaultValue(option) {
  return {
    type: String,
    value: '#C81D1D'
  }
}

/**
 * 解析导出时映射的文本值（非id）
 */
export function widgetValue2Title(option) {
  return option.value || ''
}

/**
 * 组件type属性对应解析的类型，color
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [{ label: '颜色选择器', value: 'color', hidden: false }]
}

export default widgetColor
