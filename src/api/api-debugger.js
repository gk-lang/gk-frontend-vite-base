import http from "@/http";
const gatewayBaseURL = import.meta.env.VITE_API_GATEWAY_PATH;
const baseURL = import.meta.env.VITE_API_BASE_PATH;
const service = http(baseURL);
const gatewayService = http(gatewayBaseURL);

/**
 * 代理请求
 * @returns
 */
export async function proxyRequest(data,token) {
  const resp = await service({
    url: "openmanage/proxy/request",
    method: "post",
    data,
    token
  });
  return resp;
}
/**
 * 查询api调用记录
 * @returns
 */
export async function queryApiUseLogList(data) {
  const startTime = data.startTime;
  const endTime = data.endTime;
  delete data.startTime;
  delete data.endTime;
  const resp = await service({
    url: `/tenant/apiLogController/list?startTime=${startTime}&endTime=${endTime}`,
    method: "get",
    data,
  });
  return resp;
}
/**
 * 通过apicode查询应用
 * @returns
 */
export async function queryOpenAppListByServiceCode(data) {
  const resp = await service({
    url: "openmanage/queryOpenAppListByServiceCode",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 查询订阅应用列表
 * @returns
 */
export async function querySubscribeListByServiceCode(data) {
  const resp = await service({
    url: "openmanage/querySubscribeListByServiceCode",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 获取Api请求token
 * @returns
 */
export async function getRequestApiToken(url) {
  const resp = await service({
    url,
    method: "get",
  });
  return resp;
}
/**
 * 查询环境list
 * @returns
 */
export async function queryOpenEnvList() {
  const resp = await service({
    url: "openmanage/getEnvInfo",
    method: "post",
  });
  return resp;
}
