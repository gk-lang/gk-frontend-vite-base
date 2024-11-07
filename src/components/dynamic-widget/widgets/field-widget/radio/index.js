import widgetRadio from './radio.vue'

/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(widgetInfo) {
  const defaultOption = {
    widget: 'form-item',
    widgetAttrs: {},
    childWidget: {
      widget: 'radio',
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
 * 组件type属性对应解析的类型，radio
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [{ label: '单选框', value: 'radio', hidden: false }]
}

export default widgetRadio
