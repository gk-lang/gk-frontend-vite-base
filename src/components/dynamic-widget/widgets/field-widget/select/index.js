import widgetSelect from './select.vue'
import { getPropValue, getWidgetType } from '../../../utils/config.js'

/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(widgetInfo) {
  const defaultOption = {
    widget: 'form-item',
    widgetAttrs: {},
    childWidget: {
      widget: 'select',
      widgetAttrs: {
        placeholder: '请选择',
        options: []
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

  if (widgetInfo?.widgetAttrs?.required) {
    if (
      widgetInfo.childWidget?.formDataMap &&
      widgetInfo?.childWidget?.widgetAttrs?.remote
    ) {
      const validateRequired = (rule, value, callback) => {
        if (!value || !value.inputValue) {
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
    } else {
      defaultOption.widgetAttrs.rules = [
        {
          required: true,
          message: widgetInfo.widgetAttrs.requiredErrorMsg || placeholder,
          trigger: 'change'
        }
      ]
    }
  }
  return defaultOption
}
/**
 * 渲染组件时的默认数据
 */
export function widgetDefaultValue(widgetInfo, formData) {
  const formDataMap = widgetInfo?.formDataMap
  if (formData && formDataMap) {
    const formDataKey = widgetInfo.formDataKey
    if (!formData[formDataKey]) {
      formData[formDataKey] = { inputValue: '', searchValue: '', selectRow: {} }
    }
    const { selectRow } = formData[formDataKey]
    const keys = Object.keys(formDataMap.selectRow)
    keys.forEach(k => {
      const key = formDataMap.selectRow[k]
      formData[key] = ''
      selectRow[k] = formData[key]
    })
    const inputKey = formDataMap.inputValue
    formData[inputKey] = ''
    return {
      type: Object,
      value: formData[formDataKey]
    }
  } else if (widgetInfo?.widgetAttrs?.multiple) {
    return {
      type: Array,
      value: []
    }
  } else if (widgetInfo?.widgetAttrs?.remote) {
    return {
      type: Object,
      value: {
        inputValue: '',
        searchValue: '',
        selectRow: null
      }
    }
  } else {
    return {
      type: String,
      value: ''
    }
  }
}

/**
 * 组件表单值映射
 */
export function widgetFormDataMap(widgetInfo, formData, formDataKey, type) {
  const { formDataMap } = widgetInfo
  // const formDataKey = getPropValue(widgetInfo)
  if (!formDataMap) return
  // 获取映射后的表单值,从组件内部向外层的formData映射数据
  if (type === 'setFormDataMap') {
    const keys = Object.keys(formDataMap.selectRow)
    keys.forEach(k => {
      const key = formDataMap.selectRow[k]
      if (formData[formDataKey]?.selectRow) {
        formData[key] = formData[formDataKey].selectRow[k]
      } else {
        formData[key] = ''
      }
    })
    const inputKey = formDataMap.inputValue
    formData[inputKey] = formData[formDataKey]?.inputValue || ''
    if (
      formData[formDataKey]?.selectRow &&
      formData[formDataKey]?.selectRow[inputKey] !== null &&
      formData[formDataKey]?.selectRow[inputKey] !== undefined
    ) {
      formData[inputKey] = formData[formDataKey]?.selectRow[inputKey]
    }
  }
  // 回显映射后的组件值，从外层的formData向组件内部映射数据
  if (type === 'setCompValueMap') {
    if (!formData[formDataKey]) {
      formData[formDataKey] = {}
    }
    if (!formData[formDataKey].selectRow) {
      formData[formDataKey].selectRow = {}
    }
    const selectRow = formData[formDataKey].selectRow
    const keys = Object.keys(formDataMap.selectRow)
    keys.forEach(k => {
      const key = formDataMap.selectRow[k]
      if (formData[key] === null || formData[key] === undefined) {
        formData[key] = ''
      }
      selectRow[k] = formData[key]
    })
    const valueMapKey = widgetInfo.widgetAttrs?.optionValueMapKey
    const labelMapKey = widgetInfo.widgetAttrs?.optionLabelMapKey
    if (valueMapKey && labelMapKey) {
      selectRow.value = selectRow[valueMapKey] || ''
      selectRow.label = selectRow[labelMapKey] || ''
    }
    const inputKey = formDataMap.inputValue
    formData[formDataKey].inputValue = formData[inputKey] || ''
    formData[formDataKey].searchValue = formData[formDataKey].searchValue || ''
  }
  if (type === 'reset') {
    if (!formData[formDataKey]) {
      formData[formDataKey] = {}
    }
    if (!formData[formDataKey].selectRow) {
      formData[formDataKey].selectRow = {}
    }
    const selectRow = formData[formDataKey].selectRow
    const keys = Object.keys(formDataMap.selectRow)
    keys.forEach(k => {
      const key = formDataMap.selectRow[k]
      formData[key] = ''
      selectRow[k] = formData[key]
    })
    const valueMapKey = widgetInfo.widgetAttrs?.optionValueMapKey
    const labelMapKey = widgetInfo.widgetAttrs?.optionLabelMapKey
    if (valueMapKey && labelMapKey) {
      selectRow.value = ''
      selectRow.label = ''
    }
    const inputKey = formDataMap.inputValue
    formData[inputKey] = ''
    formData[formDataKey].searchValue = ''
  }
}

/**
 * 解析导出时映射的文本值（非id）
 */
export function widgetValue2Title(option) {
  return option.value || ''
}

/**
 * 组件type属性对应解析的类型，select
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [{ label: '下拉选择框', value: 'select', hidden: false }]
}

export default widgetSelect
