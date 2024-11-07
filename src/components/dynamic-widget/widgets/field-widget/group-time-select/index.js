import widgetGroupTimeSelect from './group-time-select.vue'
import { getPropValue, getWidgetType } from '../../../utils/config.js'
/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(widgetInfo) {
  const defaultOption = {
    widget: 'form-item',
    widgetAttrs: {},
    childWidget: {
      widget: 'group-time-select',
      widgetAttrs: {
        placeholder: '请选择',
        timeAttrs: {
          format: 'HH:mm',
          'value-format': 'HH:mm',
          placeholder: '请选择时间'
        }
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
    const validateRequired = (rule, value, callback) => {
      if (
        !value ||
        value.selectValue === null ||
        value.selectValue === undefined ||
        value.selectValue === '' ||
        !value.timeValue
      ) {
        callback(
          new Error(widgetInfo.widgetAttrs.requiredErrorMsg || placeholder)
        )
      } else {
        callback()
      }
    }
    defaultOption.widgetAttrs.rules = [
      {
        required: true,
        validator: validateRequired,
        trigger: 'change'
      }
    ]
  }
  return defaultOption
}
/**
 * 渲染组件时的默认数据
 */
export function widgetDefaultValue(widgetInfo, formData) {
  const formDataMap = widgetInfo?.formDataMap
  if (formData && formDataMap) {
    const result = {
      type: Object,
      value: {
        selectValue: '',
        timeValue: ''
      }
    }
    const selectKey = formDataMap.selectValue
    const timeKey = formDataMap.timeValue
    const keys = [selectKey, timeKey]
    keys.forEach(key => {
      // if (formData[key] === null || formData[key] === undefined) {
      //   formData[key] = ''
      // }
      formData[key] = ''
    })
    result.value.selectValue = formData[selectKey]
    result.value.timeValue = formData[timeKey] || ''
    return result
  } else {
    return {
      type: Object,
      value: {
        selectValue: '',
        timeValue: ''
      }
    }
  }
}
/**
 * 组件表单值映射
 */
export function widgetFormDataMap(widgetInfo, formData, formDataKey, type) {
  const { formDataMap } = widgetInfo
  if (!formDataMap) return
  // 获取映射后的表单值,从组件内部向外层的formData映射数据
  if (type === 'setFormDataMap') {
    const key1 = formDataMap.selectValue
    const key2 = formDataMap.timeValue
    if (
      formData[formDataKey].selectValue === null ||
      formData[formDataKey].selectValue === undefined
    ) {
      formData[key1] = ''
    } else {
      formData[key1] = formData[formDataKey].selectValue
    }
    formData[key2] = formData[formDataKey].timeValue || ''
  }
  // 回显映射后的组件值，从外层的formData向组件内部映射数据
  if (type === 'setCompValueMap') {
    const key1 = formDataMap.selectValue
    const key2 = formDataMap.timeValue
    if (!formData[formDataKey]) {
      formData[formDataKey] = {
        selectValue: '',
        timeValue: ''
      }
    }
    if (formData[key1] === null || formData[key1] === undefined) {
      formData[key1] = ''
      formData[formDataKey].selectValue = ''
    }
    if (formData[key2] === null || formData[key2] === undefined) {
      formData[key2] = ''
      formData[formDataKey].timeValue = ''
    }
    formData[formDataKey].selectValue = formData[key1]
    formData[formDataKey].timeValue = formData[key2]
  }
}
/**
 * 解析导出时映射的文本值（非id）
 */
export function widgetValue2Title(option) {
  return option.value || ''
}

/**
 * 组件type属性对应解析的类型，group-time-select
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [
    { label: '时间下拉组合控件', value: 'group-time-select', hidden: false }
  ]
}

export default widgetGroupTimeSelect
