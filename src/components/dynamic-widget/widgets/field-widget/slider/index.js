import widgetSlider from './slider.vue'

/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(option) {
  return {
    widget: 'form-item',
    widgetAttrs: {},
    childWidget: {
      widget: 'slider',
      widgetAttrs: {
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
    type: Number,
    value: 0
  }
}

/**
 * 解析导出时映射的文本值（非id）
 */
export function widgetValue2Title(option) {
  return option.value || ''
}

/**
 * 组件type属性对应解析的类型，slider
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [{ label: '滑块', value: 'slider', hidden: false }]
}

export default widgetSlider
