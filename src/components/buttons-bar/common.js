import { getQueryString,findTreeNode } from '#/utils'
import { listMenuMethods } from '#/api/common'
import store from '#/store'
import { ref, watch } from 'vue'
export async function getButtonsData(memuKey) {
  const result = ref({
    initTrigger: []
  })
  let menu_id = getQueryString(location.href).menuId
  
  if(memuKey){
    const menuItem = findTreeNode(
      store.state.user.menuData,
      x => x.menu_url === memuKey
    )
    menu_id = menuItem.menu_id
  }
  
  const resp = await listMenuMethods({
    menu_id,
    role_id: store.state.user.role_id
  })
  if (resp.code === 200 && resp.data && resp.data.length) {
    resp.data.forEach(item => {
      const methodConfig = JSON.parse(item.method_config)
      const btnItemCOnfig = {
        _id: item.method_id,
        name: item.method_name,
        shortcutKey: methodConfig.method_key,
        eventKey: item.method_url,
        $ref: null,
        widgetAttrs: {
          ...methodConfig.attrs,
          disabled: methodConfig.disabled,
          disabled_expression: methodConfig.disabled,
          show: methodConfig.show,
          run: methodConfig.run
        }
      }
      if (!item.method_place) {
        item.method_place = 'default'
      }
      if (!result.value[item.method_place]) {
        result.value[item.method_place] = []
      }
      if (methodConfig.run) {
        result.value.initTrigger.push(btnItemCOnfig)
      }
      result.value[item.method_place].push(btnItemCOnfig)
    })
  }
  // 需要初始化触发的按钮，监听ref的变化，然后触发一次
  if (result.value.initTrigger.length) {
    result.value.initTrigger.forEach(item => {
      const stopWatch = watch(
        () => item.$ref,
        (nv, ov) => {
          if (nv) {
            setTimeout(() => {
              item.$ref.ref.click()
              stopWatch()
            })
          }
        }
      )
    })
  }

  return result
}
