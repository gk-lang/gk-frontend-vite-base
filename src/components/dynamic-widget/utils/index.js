import sha256 from 'crypto-js/sha256'

// 判断是否是纯粹对象
const isPlainObject = obj => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
// 深度合并
export function assignDeep() {
  const args = Array.from(arguments)
  if (args.length < 2) return args[0]
  let result = args[0]
  args.shift()
  args.forEach(item => {
    if (isPlainObject(item)) {
      if (!isPlainObject(result)) result = {}
      for (const key in item) {
        if (result[key] && isPlainObject(item[key])) {
          result[key] = assignDeep(result[key], item[key])
        } else {
          result[key] = item[key]
        }
      }
    } else if (item instanceof Array) {
      if (!(result instanceof Array)) result = []
      item.forEach((arrItem, arrIndex) => {
        if (isPlainObject(arrItem)) {
          result[arrIndex] = assignDeep(result[arrIndex])
        } else {
          result[arrIndex] = arrItem
        }
      })
    }
  })
  return result
}

export function stringifyWithFunctions(obj) {
  // 自定义函数转换
  const replacer = (key, value) => {
    if (typeof value === 'function') {
      return value.toString()
    }
    return value
  }
  return JSON.stringify(obj, replacer)
}

export function generateHash(obj, length) {
  const objString = stringifyWithFunctions(obj)
  const hash = sha256(objString).toString()
  return hash.substring(0, length)
}

export function uniqueId(len) {
  return Math.floor(Math.random() * Date.now())
    .toString()
    .substring(0, len)
}
