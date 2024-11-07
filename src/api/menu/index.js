import request from '@/http'

export const getMenuListApi = () => {
  return request.get({ url: '/mock/menu/list' })
}
