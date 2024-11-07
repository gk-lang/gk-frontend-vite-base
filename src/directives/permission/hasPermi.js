import router from '@/router'


const hasPermission = (value) => {
  const permission = (router.currentRoute.value.meta.permission || [])
  if (!value) {
    throw new Error('权限校验失败!')
  }
  if (permission.includes(value)) {
    return true
  }
  return false
}
function hasPermi(el, binding) {
  const value = binding.value

  const flag = hasPermission(value)
  if (!flag) {
    el.parentNode?.removeChild(el)
  }
}
const mounted = (el, binding) => {
  hasPermi(el, binding)
}

const permiDirective = {
  mounted
}

export const setupPermissionDirective = (app) => {
  app.directive('hasPermi', permiDirective)
}

export default permiDirective
