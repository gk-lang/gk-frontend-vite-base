import { SystemModuleKey } from '@/config/application'

/**
 * 获取应用顶层窗口
 * @returns 返回窗口对象
 */
export const getAppTopWindow = () => {
  // 开发模式下没有_IS_APP_TOP
  if (process.env === 'development') return window
  let rel = window
  while (!rel._IS_APP_TOP && rel !== rel.parent) {
    rel = rel.parent
  }
  return rel
}

/**
 * 设置cookie
 * @param {*} cname 名称
 * @param {*} cvalue 值
 * @param {*} exdays 有效期
 */
export const setCookie = (cname, cvalue, exdays) => {
  exdays = exdays || 30 * 24 * 60
  const d = new Date()
  d.setTime(d.getTime() + exdays * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  const cookieName = SystemModuleKey + '_' + cname
  getAppTopWindow().document.cookie =
    cookieName + '=' + cvalue + ';' + expires + ';path=/'
}

/**
 * 获取cookie
 * @param {*} cname 名称
 * @returns 返回值
 */
export const getCookie = cname => {
  const cookieName = SystemModuleKey + '_' + cname
  const name = cookieName + '='
  const doc = getAppTopWindow().document.cookie
  const ca = doc.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
  }
  return ''
}

/**
 * 清除cookie
 * @returns 不存在返回false
 */
export function clearCookie() {
  if (arguments.length <= 0) return false
  Array.from(arguments).forEach(cname => {
    setCookie(cname, '', -1)
  })
}

/**
 * 获取全局配置
 * @returns 全局配置
 */
export const getGlobalSetting = () => {
  const globalSetting = getCookie('globalSetting')
  if (globalSetting) {
    return JSON.parse(globalSetting)
  } else {
    return {}
  }
}

/**
 * 设置全局配置
 * @param {*} obj 需要更新的对象
 */
export const setGlobalSetting = obj => {
  const globalSetting = getGlobalSetting()
  setCookie('globalSetting', JSON.stringify(Object.assign(globalSetting, obj)))
}

/**
 * 清空全局配置
 */
export const clearGlobalSetting = () => {
  clearCookie('globalSetting')
}

/**
 * 获取首页配置
 * @returns 首页配置
 */
export const getHomeSetting = () => {
  const homeSetting = getCookie('homeSetting')
  if (homeSetting) {
    return JSON.parse(homeSetting)
  } else {
    return {}
  }
}

/**
 * 设置首页配置
 * @param {*} obj 需要更新的对象
 */
export const setHomeSetting = obj => {
  const homeSetting = getHomeSetting()
  setCookie('homeSetting', JSON.stringify(Object.assign(homeSetting, obj)))
}

/** token相关cookie操作 */
export const setTokenCookie = val => {
  setCookie('access_token', val)
}
export const getTokenCookie = () => {
  return getCookie('access_token')
}
export const clearTokenCookie = () => {
  clearCookie('access_token')
}

/** user相关cookie操作 */
export const setUserCookie = val => {
  setCookie('user_id', val)
}
export const getUserCookie = () => {
  return getCookie('user_id')
}
export const clearUserCookie = () => {
  clearCookie('user_id')
}

/**
 * 登录
 */
export const goLogin = val => {
  clearTokenCookie()
  // 如果是修改密码，并且之前已经记住用户名、密码，需把密码清空
  if (val === 'updatePassword') {
    const str = getCookie('recordPassword')
    let recordPassword = {}
    if (str) {
      recordPassword = JSON.parse(str)
      recordPassword.password = ''
    }
    setCookie('recordPassword', JSON.stringify(recordPassword))
  }
  // end
  const win = getAppTopWindow()
  const href = win.location.href
  const hashPath = win.location.hash
  if (hashPath.indexOf('#/login') === -1) {
    win.location.href = href.split('#')[0] + '#/login'
  }
  win.location.reload()
}

export const getDictLabelByValue = (dicKey, value) => {
  const dictData = sessionStorage.getItem(dicKey)
  const dictList = JSON.parse(dictData || `[]`)
  const dictItem = dictList.find(x => x.value_data === value)
  return dictItem?.value_desc || ''
}
