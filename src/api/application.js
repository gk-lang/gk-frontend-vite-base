import http from "@/http";
const gatewayBaseURL = import.meta.env.VITE_API_GATEWAY_PATH;
const baseURL = import.meta.env.VITE_API_BASE_PATH;
const service = http(baseURL);
const gatewayService = http(gatewayBaseURL);
/**
 * 新增/更新应用
 * @returns
 */
export async function saveOpenApp(data) {
  const resp = await service({
    url: "openmanage/addOpenApp",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 接口关联应用
 * @returns
 */
export async function batchSaveAppBindApi(data) {
  const resp = await service({
    url: "openmanage/batchSaveAppBindApi",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 查询应用详情
 * @returns
 */
export async function queryOpenAppDetail(data) {
  const resp = await service({
    url: "openmanage/queryOpenAppDetail",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 删除应用
 * @returns
 */
export async function deleteOpenApp(data) {
  const resp = await service({
    url: "openmanage/deleteOpenApp",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 应用审批
 * @returns
 */
export async function approvalOpenApp(data) {
  const resp = await service({
    url: "openmanage/approvalOpenApp",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 应用关联API
 * @returns
 */
export async function saveAppBindApi(data) {
  const resp = await service({
    url: "openmanage/saveAppBindApi",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 查看应用关联API
 * @returns
 */
export async function queryAppBindApiPageList(data) {
  const resp = await service({
    url: "openmanage/queryAppBindApiPageList",
    method: "post",
    data,
  });
  return resp;
}

/**
 * 查询应用列表
 * @returns
 */
export async function queryOpenAppList(data) {
  const resp = await service({
    url: "openmanage/queryOpenAppList",
    method: "post",
    data,
  });
  return resp;
}

