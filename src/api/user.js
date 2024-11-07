import http from "@/http";
import application from "@/config/application";
import { useUserStore } from "@/store/modules/user";
const baseURL = import.meta.env.VITE_API_BASE_PATH;
const service = http(baseURL);
/**
 * 登录
 * @param {*} data 入参
 * @returns
 */
export function login(data) {
  return service({
    url: "admin/login/token",
    method: "post",
    data,
    isFormData: true,
    isNoAuthToken: true,
  });
}
/**
 * 获取用户
 * @returns
 */
export async function getUserInfo(staff_id) {
  const resp = await service({
    url: "auth/auth/getUserAccountInfo",
    method: "post",
    data: {
      app_id: application.app_id,
      staff_id: staff_id,
    },
  });
  if (resp?.data && resp.data[0]) {
    const userInfo = resp.data[0];
    return userInfo || null;
  }
  return null;
}
/**
 * 获取菜单
 * @returns
 */
export async function getCurrentUserMenu(warehouseId) {
  // const userStore = useUserStore();
  // const user = userStore.getUserInfo;
  const resp = await service({
    url: "auth/auth/getMenuTreeByStaff",
    method: "post",
    data: {
      app_id: application.app_id,
      warehouse_id: warehouseId,
      menu_type: "PC",
      // staff_id: user.user_id,
    },
  });
  // return resp
  // const resp = Promise.resolve({
  //   code: 200,
  //   data: [
  //     {
  //       menu_id: 'f8a2cf2daf7d4a55ae5573644b86724e',
  //       menu_no: 'AM0387',
  //       menu_name: '一级菜单',
  //       menu_type: 'PC',
  //       menu_level: '24',
  //       parent_id: '0',
  //       menu_icon: null,
  //       menu_url: '',
  //       doc_url: '',
  //       menu_config:
  //         '{"menu_icon":"icon-buhuoguanli","single_tenant":true,"single_warehouse":true,"condition_default_way":"global","show_condition":false,"developer":"","hidden":false}',
  //       is_active: '1',
  //       created_staff_id: '90',
  //       created_staff_name: '梅贤军',
  //       created_time: '1703266361000',
  //       updated_staff_id: '521677655146233856',
  //       updated_staff_name: '超级管理员',
  //       updated_time: '1706231787000',
  //       flag: null,
  //       changetype: null,
  //       children: [
  //         {
  //           menu_id: '1c9eabdbf3ef42aa9b6bc33921f0c659',
  //           menu_no: 'AM0388',
  //           menu_name: '二级菜单',
  //           menu_type: 'PC',
  //           menu_level: '1',
  //           parent_id: 'f8a2cf2daf7d4a55ae5573644b86724e',
  //           menu_icon: null,
  //           menu_url: 'demo',
  //           doc_url: '',
  //           menu_config:
  //             '{"menu_icon":"","single_tenant":true,"single_warehouse":true,"condition_default_way":"global","show_condition":false,"developer":"赵江雨，张恒，董武震，席元波","hidden":false}',
  //           is_active: '1',
  //           created_staff_id: '90',
  //           created_staff_name: '梅贤军',
  //           created_time: '1703266544000',
  //           updated_staff_id: '90',
  //           updated_staff_name: '梅贤军',
  //           updated_time: '1703777801000',
  //           flag: null,
  //           changetype: null,
  //           children: []
  //         }
  //       ]
  //     }
  //   ],
  //   message: null,
  //   timestamp: '1708926916818'
  // })
  return resp?.data || [];
}


/**
 * 查询运营方信息
 * @returns
 */
export async function queryOperatorByName(data) {
  let list = []
  const resp = await service({
    url: "openmanage/queryOperatorByName",
    method: "post",
    data,
  });
  if(resp?.data?.length){
    list = resp?.data?.map((item) => {
      return {
        label: item.operatorName,
        value: item.operatorId,
      };
    });
  }
  resp.data = list || []
  return resp;
}
/**
 * 查询委托方信息
 * @returns
 */
export async function queryConsignorByName(data) {
  let list = []
  const resp = await service({
    url: "openmanage/queryConsignorByName",
    method: "post",
    data,
  });
  if(resp?.data?.length){
    list = resp?.data?.map((item) => {
      return {
        label: item.consignorName,
        value: item.consignorId,
      };
    });
  }
  resp.data = list || []
  return resp;
}
/**
 * 查询物流中心信息
 * @returns
 */
export async function queryLogisticsCenterByName(data) {
  let list = []
  const resp = await service({
    url: "openmanage/queryLogisticsCenterByName",
    method: "post",
    data,
  });
  if(resp?.data?.length){
    list = resp?.data?.map((item) => {
      return {
        label: item.logisticsCenterName,
        value: item.logisticsCenterId,
      };
    });
  }
  resp.data = list || []
  return resp;
}
