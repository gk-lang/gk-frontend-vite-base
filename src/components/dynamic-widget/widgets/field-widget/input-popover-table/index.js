import widgetInputPopoverTable from './input-popover-table.vue'
import { getPropValue, getWidgetType } from '../../../utils/config.js'

/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(widgetInfo) {
  const defaultOption = {
    widget: 'form-item',
    widgetAttrs: {},
    childWidget: {
      widget: 'input-popover-table',
      widgetAttrs: {
        placeholder: '',
        inputAttrs: {},
        searchAttrs: {
          clearable: true
        },
        tableAttrs: {}
      }
    }
  }
  if(!widgetInfo.childWidget?.widgetAttrs){
    widgetInfo.childWidget.widgetAttrs = {}
  }
  const labelName =
    widgetInfo?.widgetAttrs?.labelName?.replaceAll('\n', '') || ''

  if (widgetInfo && widgetInfo.labelName) {
    if (!widgetInfo.childWidget?.widgetAttrs?.inputAttrs?.placeholder) {
      defaultOption.childWidget.widgetAttrs.inputAttrs.placeholder =
        '请选择' + labelName
    }
    if (!widgetInfo.childWidget?.widgetAttrs.title) {
      defaultOption.childWidget.widgetAttrs.title =
        widgetInfo.widgetAttrs.labelName
    }
  }

  if (labelName && !widgetInfo.childWidget.widgetAttrs.placeholder) {
    defaultOption.childWidget.widgetAttrs.placeholder = '请选择' + labelName
  }

  const placeholder =
    widgetInfo?.childWidget?.widgetAttrs?.placeholder ||
    defaultOption.childWidget.widgetAttrs.placeholder

  if (labelName && widgetInfo.widgetAttrs.required) {
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
  } else {
    return {
      type: Object,
      value: {
        selectRow: null,
        inputValue: '',
        searchValue: ''
      }
    }
  }
}

/**
 * 组件表单值映射
 */
export function widgetFormDataMap(widgetInfo, formData, type) {
  const formDataMap = widgetInfo?.formDataMap
  const formDataKey = widgetInfo.formDataKey
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
    formData[inputKey] =
      formData[formDataKey]?.inputValue ||
      formData[formDataKey]?.selectRow[inputKey]
  }
  // 回显映射后的组件值，从外层的formData向组件内部映射数据
  if (type === 'setCompValueMap') {
    if (!formData[formDataKey]) {
      formData[formDataKey] = {}
    }
    if (!formData[formDataKey].selectRow) {
      formData[formDataKey].selectRow = {}
    }
    const keys = Object.keys(formDataMap.selectRow)
    keys.forEach(k => {
      const key = formDataMap.selectRow[k]
      if (formData[key] === null || formData[key] === undefined) {
        formData[key] = ''
      }
      formData[formDataKey].selectRow[k] = formData[key]
    })
    const inputKey = formDataMap.inputValue
    formData[formDataKey].inputValue = formData[inputKey] || ''
    formData[formDataKey].searchValue = formData[formDataKey].searchValue || ''
    // console.log(formDataKey + ':', formData[formDataKey])
  }
}

/**
 * 解析导出时映射的文本值（非id）
 */
export function widgetValue2Title(option) {
  return option.value || ''
}

/**
 * 组件type属性对应解析的类型，input-popover-table
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [
    {
      label: '带下拉表格的输入框',
      value: 'input-popover-table',
      hidden: false
    }
  ]
}

export default widgetInputPopoverTable
