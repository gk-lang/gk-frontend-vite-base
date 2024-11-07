import { getTreeDataAtLevel } from '#/utils'
import { SpecialKeys } from './constants.js'
import idb from '#/indexedDB'
export function getDataBySpecialKey(key, payload) {
  if (!key) {
    return
  }
  return new Promise(resolve => {
    if (key === SpecialKeys.regions) {
      idb
        .get(key)
        .then(resp => {
          if (resp.data?.children && resp.data?.children.length) {
            if (key === 'regions') {
              const resultData = getTreeDataAtLevel(
                resp.data.children,
                payload.level || 4
              )
              resolve(resultData)
            }
          }
        })
        .catch(() => {
          resolve()
        })
    } else {
      resolve()
    }
  })
}
export function getAllDictData() {
  return new Promise(resolve => {
    idb
      .get('dictData')
      .then(resp => {
        if (resp.data) {
          resolve(resp.data)
        } else {
          resolve([])
        }
      })
      .catch(() => {
        resolve([])
      })
  })
}

export function getDataByDictKey(key) {
  if (!key) {
    return
  }
  return new Promise(resolve => {
    idb
      .get('dictData')
      .then(resp => {
        if (resp.data && resp.data[key]) {
          resolve(resp.data[key])
        } else {
          resolve([])
        }
      })
      .catch(() => {
        resolve([])
      })
  })
}
