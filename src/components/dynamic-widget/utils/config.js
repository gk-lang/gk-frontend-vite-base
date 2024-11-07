export const formDataKeys = [
  'propName',
  'formDataKey',
  'formDataKey',
  'prop',
  'key',
  'name'
]
export const widgetTypeKeys = ['widget', 'childWidget.widget']

// 获取属性key（做属性兼容用的）
export function getformDataKey(item) {
  let formDataKey = ''
  formDataKeys.forEach(key => {
    if (item[key]) {
      formDataKey = key
    }
  })
  return formDataKey
}
// 获取属性value（做属性兼容用的）
export function getPropValue(item) {
  const formDataKey = getformDataKey(item)
  return item[formDataKey]
}
// 获取对象值
function getValueByPath(obj, path) {
  const keys = path.split('.')
  return keys.reduce((accumulator, currentKey) => {
    return accumulator && accumulator[currentKey] !== undefined
      ? accumulator[currentKey]
      : undefined
  }, obj)
}
// 获取组件类型
export function getWidgetType(item) {
  let widgetType = ''
  widgetTypeKeys.forEach(key => {
    if (!widgetType) {
      widgetType = getValueByPath(item, key)
    }
  })
  return widgetType
}
