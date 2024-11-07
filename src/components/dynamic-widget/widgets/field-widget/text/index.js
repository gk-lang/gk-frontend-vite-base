import widgetText from './text.vue'

/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(widgetInfo) {
  return {
    widget: 'form-item',
    widgetAttrs: {},
    childWidget: {
      widget: 'text',
      widgetAttrs: {
        isShowHoverTip: false, // 文本hover时显示气泡提示
        overflowHiddenText: true // 文本溢出时隐藏
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
 * 组件type属性对应解析的类型，text
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [{ label: '静态文本', value: 'text', hidden: false }]
}

export default widgetText
