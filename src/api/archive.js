import http from "@/http";
const gatewayBaseURL = import.meta.env.VITE_API_GATEWAY_PATH;
const baseURL = import.meta.env.VITE_API_BASE_PATH;
const service = http(baseURL);
const gatewayService = http(gatewayBaseURL);

import { eachTree } from "@/utils/tree";
/**
 * 新增/更新文档分类
 * @returns
 */
export async function saveOrUpdateApiDocType(data) {
  const resp = await service({
    url: "openmanage/saveOrUpdateApiDocType",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 查询文档分类树
 * @returns
 */
export async function queryApiDocTypeTree(data) {
  const resp = await gatewayService({
    url: "openmanage/queryApiDocTypeTree",
    method: "post",
    data,
    isNoAuthToken: true,
  });
  if (resp.code == 200 && resp.data?.length) {
    eachTree(resp.data, (item) => {
      item.label = item.name;
      item.value = item.id;
      if (!item.children?.length) {
        delete item.children;
      }
    });
  }
  return resp;
}
/**
 * 删除文档分类
 * @returns
 */
export async function deleteApiDocType(data) {
  const resp = await service({
    url: "openmanage/deleteApiDocType",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 新增/更新文档
 * @returns
 */
export async function saveOrUpdateApiDoc(data) {
  const resp = await service({
    url: "openmanage/saveOrUpdateApiDoc",
    method: "post",
    data,
  });
  return resp;
}
export async function doRequestAction(data) {
  const resp1 = await service({
    url: "openmanage/saveOrUpdateApiDoc",
    method: "post",
    data:data.docData,
  });
  if (resp1.code == "200") {
    data.apiParamData.docId = resp1.data;
    const resp2 = await service({
      url: "openmanage/saveOrUpdateApiRequestParam",
      method: "post",
      data:data.apiParamData,
    });
  }
}
/**
 * 查询文档列表
 * @returns
 */
export async function queryApiDocList(data) {
  const resp = await service({
    url: "openmanage/queryApiDocList",
    method: "post",
    data,
    isNoAuthToken: true,
  });
  return resp;
}
/**
 * 查询文档详情
 * @returns
 */
export async function queryApiDocDetail(data) {
  const resp = await service({
    url: "openmanage/queryApiDocDetail",
    method: "post",
    data,
    isNoAuthToken: true,
  });
  return resp;
}
/**
 * 删除文档
 * @returns
 */
export async function deleteApiDoc(data) {
  const resp = await service({
    url: "openmanage/deleteApiDoc",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 保存请求参数
 * @returns
 */
export async function saveOrUpdateApiRequestParam(data) {
  const resp = await service({
    url: "openmanage/saveOrUpdateApiRequestParam",
    method: "post",
    data,
  });
  return resp;
}
/**
 * 查询请求参数
 * @returns
 */
export async function queryApiRequestParam(data) {
  const resp = await service({
    url: "openmanage/queryApiRequestParam",
    method: "post",
    data,
  });
  return resp;
}
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
