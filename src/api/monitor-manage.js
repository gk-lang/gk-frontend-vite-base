import http from "@/http";
const gatewayBaseURL = import.meta.env.VITE_API_GATEWAY_PATH;
const baseURL = import.meta.env.VITE_API_BASE_PATH;
const downLoadURL = import.meta.env.VITE_API_DOWNLOAD_PATH;
const service = http(baseURL);
const gatewayService = http(gatewayBaseURL);


// 普通类监控,推送类监控 总的统计数据
export const getDataStatistics = (params) => {
  return service({
    url: 'tenant/apiLogController/selectTotalStatistics',
    params,
    method: 'get'
  })
}

// 普通类监控,推送类监控，折线统计图 查询访问量和响应时间统计数据
export const getChartStatistics = (params) => {
  return service({
    url: 'tenant/apiLogController/selectTimeStatistics',
    params,
    method: 'get'
  })
}

// 普通类监控,推送类监控, 应用名称查询
export const getSelectAppName = (params) => {
  return service({
    url: 'tenant/apiLogController/selectAppName',
    params,
    method: 'get'
  })
}

// 普通类监控,推送类监控, API名称查询
export const getSelectApiName = (params) => {
  return service({
    url: 'tenant/apiLogController/selectApiNameByAppId',
    params,
    method: 'get'
  })
}

// 普通类日志
export const getLogDetailList = (params) => {
  return service({
    url: 'tenant/apiLogController/list',
    params,
    method: 'get'
  })
}

// 日志响应统计
export const getLogResStatistics = (params) => {
  return service({
    url: 'tenant/apiLogController/listStatistics',
    params,
    method: 'get'
  })
}

// 日志详情
export const getLogDetailById = (params) => {
  return service({
    url: 'tenant/apiLogController/getById',
    params,
    method: 'get'
  })
}

// 普通类-重推
export const reSendByGeneral = (data) => {
  return service({
    url: 'httpclients/send/pullRetry',
    method: 'post',
    data
  })
}

// 推送类-重推
export const reSendByPush = (data) => {
  return service({
    url: 'httpclients/send/pushRetry',
    method: 'post',
    data
  })
}

