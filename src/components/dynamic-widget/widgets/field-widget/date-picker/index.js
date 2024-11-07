import widgetDatePicker from './date-picker.vue'

/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(widgetInfo) {
  const defaultOption = {
    widget: 'form-item',
    widgetAttrs: {},
    childWidget: {
      widget: 'date-picker',
      widgetAttrs: {
        placeholder: '请选择'
      }
    }
  }
  const labelName =
    widgetInfo?.widgetAttrs?.labelName?.replaceAll('\n', '') || ''

  if (labelName && !widgetInfo.childWidget.widgetAttrs.placeholder) {
    defaultOption.childWidget.widgetAttrs.placeholder = '请选择' + labelName
  }
  const placeholder =
    widgetInfo?.childWidget?.widgetAttrs?.placeholder ||
    defaultOption.childWidget.widgetAttrs.placeholder

  if (labelName && widgetInfo.widgetAttrs.required) {
    defaultOption.widgetAttrs.rules = [
      {
        required: true,
        message: widgetInfo.widgetAttrs.requiredErrorMsg || placeholder,
        trigger: 'change'
      }
    ]
  }
  return defaultOption
}
/**
 * 渲染组件时的默认数据
 */
export function widgetDefaultValue(option) {
  if (option?.widgetAttrs?.type.datetimerange === 'datetimerange') {
    return {
      type: Array,
      value: []
    }
  } else {
    return {
      type: String,
      value: ''
    }
  }
}

/**
 * 解析导出时映射的文本值（非id）
 */
export function widgetValue2Title(option) {
  return option.value || ''
}

/**
 * 组件type属性对应解析的类型，date-picker
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [{ label: '日期选择器', value: 'date-picker', hidden: false }]
}

export default widgetDatePicker
