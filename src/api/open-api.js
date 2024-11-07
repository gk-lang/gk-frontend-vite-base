import http from "@/http";
const gatewayBaseURL = import.meta.env.VITE_API_GATEWAY_PATH;
const baseURL = import.meta.env.VITE_API_BASE_PATH;
const downLoadURL = import.meta.env.VITE_API_DOWNLOAD_PATH;
const service = http(baseURL);
const gatewayService = http(gatewayBaseURL);

/**
 * 查询api 列表
 * @returns
 */
export async function queryOpenApiList(data) {
  const resp = await service({
    url: "openmanage/queryOpenApiList",
    method: "post",
    data,
  });
  return resp;
}
/**
 * API审批
 * @returns
 */
export async function approveAppBindApi(data) {
  const resp = await service({
    url: "openmanage/approveAppBindApi",
    method: "post",
    data,
  });
  return resp;
}
/**
 * API发布
 * @returns
 */
export async function goOnlineBindOpenApi(data) {
  const resp = await service({
    url: "openmanage/goOnlineBindOpenApi",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 新增or编辑推送接口配置
 * @returns
 */
export async function saveOrUpdateApiClientConfig(data) {
  const resp = await service({
    url: "openmanage/saveOrUpdateApiClientConfig",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 查询推送接口详情
 * @returns
 */
export async function queryApiClientConfigDetail(data) {
  const resp = await service({
    url: "openmanage/queryApiClientConfigDetail",
    method: "post",
    data,
  });
  return resp;
}

/**
 * 文件上传
 * @returns
 */
export async function fileUpload(data) {
  const resp = await service({
    url: "openmanage/upload",
    method: "post",
    data,
    isUpload: true,
  });
  if(resp.code=='200'){
    resp.data = `${downLoadURL}\/${resp.data}`
  }
  return resp;
}