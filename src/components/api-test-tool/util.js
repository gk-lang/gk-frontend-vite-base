import { cloneDeep, lowerCase, result } from "lodash-es";
const tableColumns = [
  {
    type: "selection",
    width: 50,
    align: "center",
    fixed: true,
  },
  {
    prop: "code",
    label: "参数名",
    sortable: false,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        placeholder: "请输入",
        clearable: true,
      },
    },
  },
  {
    prop: "value",
    label: "参数值",
    sortable: false,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        placeholder: "请输入",
        clearable: true,
      },
    },
  },
  {
    label: "操作",
    align: "center",
    fixed: "right",
    width: 150,
    sortable: false,
    prop: "operation",
    slot: "operation",
  },
];
const paramsData = {
  jsonData: "",
  isShowTable: true,
  tableLoading: false,
  tableColumns: cloneDeep(tableColumns),
  tableData: [
    {
      id: randomLenNum(6),
      code: "",
      value: "",
    },
  ],
};
const requestConfigMeta = {
  id: "",
  paramCategory: "body",
  serviceInfo: {
    appId: "",
    apiCode: "",
    apiName: "",
    apiDesc: "",
    apiVersion: "",
    env: "",
    envInfoList: [],
    token: "",
  },
  main: {
    url: "",
    fullUrl: "",
    method: "",
  },
  url: {
    paramsType: "paramsData",
    paramsData: cloneDeep(paramsData),
  },
  body: {
    paramsType: "raw",
    contentType: "application/json",
    none: cloneDeep(paramsData),
    "form-data": cloneDeep(paramsData),
    "x-www-form-urlencoded": cloneDeep(paramsData),
    raw: cloneDeep(paramsData),
  },
  header: {
    paramsType: "paramsData",
    paramsData: cloneDeep(paramsData),
  },
  cookie: {
    paramsType: "paramsData",
    paramsData: cloneDeep(paramsData),
  },
};
export const formDataDefaultValue = {
  id: "",
  apiCode: "",
  apiName: "",
  apiDesc: "",
  apiVersion: "",
  env: "",
  envInfoList: [],
  url: "",
  method: "POST",
  paramCategory: "body",
  contentType: "application/json",
  headerData: "",
  cookieData: "",
  paramType: "raw",
  formData: "",
  formEncodeParam: "",
  bodyData: "",
};
export function parseNonStrictJsonString(jsonString) {
  try {
    // 使用 eval 解析字符串
    const jsonObject = eval("(" + jsonString + ")");

    // 验证是否为对象
    if (typeof jsonObject === "object") {
      return jsonObject;
    } else {
      throw new Error("Not a valid JSON object.");
    }
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return null;
  }
}
export function randomLenNum(len, date) {
  let random = "";
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substring(0, typeof len === "number" ? len : 4);
  if (date) random = random + Date.now();
  return random;
}
export function genRequestConfigByFormData(data) {
  const formData = cloneDeep(data);
  const result = cloneDeep(requestConfigMeta);
  result.id = formData.id || "";
  result.paramCategory = formData.paramCategory || "body";
  result.main.url = formData.url;
  result.main.method = formData.method;
  // 服务详情
  result.serviceInfo.appId = formData.appId || "";
  result.serviceInfo.apiCode = formData.apiCode || "";
  result.serviceInfo.apiName = formData.apiName || "";
  result.serviceInfo.apiDesc = formData.apiDesc || "";
  result.serviceInfo.apiVersion = formData.apiVersion || "";
  result.serviceInfo.envInfoList = formData.envInfoList || [];
  result.serviceInfo.env = formData.env || "";

  if (formData.envInfoList?.length) {
    const chooseItem = formData.envInfoList.find((x) => x.choose);
    result.serviceInfo.env = chooseItem?.env || formData.envInfoList[0].env;
    const selectedEnvItem = formData.envInfoList.find(
      (x) => x.env === result.serviceInfo.env
    );
    if (selectedEnvItem) {
      result.main.fullUrl = `${selectedEnvItem.urlPrefix}${formData.url}`;
    }
  }

  if (formData.contentType) {
    result.body.contentType = formData.contentType;
  }
  if (formData.headerData) {
    setProcessData(result.header.paramsData, formData.headerData);
  }
  if (formData.cookieData) {
    setProcessData(result.cookie.paramsData, formData.cookieData);
  }
  if (formData.urlParam) {
    setProcessData(result.url.paramsData, formData.urlParam);
  }
  if (formData.paramType) {
    result.body.paramsType = formData.paramType;
  }

  if (formData.paramType === "form-data" && formData.formData) {
    setProcessData(result.body["form-data"], formData.formData);
  }
  if (
    formData.paramType === "x-www-form-urlencoded" &&
    formData.formEncodeParam
  ) {
    setProcessData(
      result.body["x-www-form-urlencoded"],
      formData.formEncodeParam
    );
  }
  if (formData.paramType === "raw" && formData.bodyData) {
    setProcessData(result.body["raw"], formData.bodyData);
  }
  return result;
}
function setProcessData(paramsData, data) {
  let processData = data || "";
  if (typeof data === "string") {
    try {
      processData = parseNonStrictJsonString(data);
    } catch (error) {
      console.log("json数据格式化错误", error);
    }
    if (!processData) {
      processData = data || "";
    }
  }
  if (Array.isArray(processData)) {
    let isShowTable = true;
    for (let a = 0; a < processData.length; a++) {
      const row = processData[a];
      const keys = Object.keys(row);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = row[key];
        if (typeof value === "object") {
          isShowTable = false;
          break;
        }
      }
    }
    paramsData.isShowTable = isShowTable;
    if (isShowTable) {
      paramsData.tableData = processData;
    } else {
      paramsData.jsonData = JSON.stringify(processData, null, 2);
    }
  } else if (typeof processData === "object") {
    paramsData.isShowTable = false;
    paramsData.jsonData = JSON.stringify(processData, null, 2);
  } else {
    paramsData.isShowTable = false;
    paramsData.jsonData = processData;
  }
}
export function genFormDataByRequestConfig(requestConfig) {
  const result = {
    id: requestConfig.id || "",
    apiCode: requestConfig.serviceInfo.apiCode || "",
    paramCategory: requestConfig.paramCategory || "body",
    url: requestConfig.main.fullUrl,
    method: requestConfig.main.method.toLowerCase(),
    contentType: requestConfig.body.contentType,
    headerData: [],
    cookieData: [],
    paramType: requestConfig.body.paramsType,
    formData: "",
    formEncodeParam: "",
    urlParam: [],
    bodyData: "",
  };
  // header的参数
  if (!requestConfig.header.paramsData.isShowTable) {
    let jsonData = requestConfig.header.paramsData.jsonData;
    let data = parseNonStrictJsonString(jsonData);
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (data[key]) {
        if (typeof data[key] === "object") {
          result.headerData.push({
            code: key,
            value: JSON.stringify(data[key]),
          });
        } else {
          result.headerData.push({
            code: key,
            value: data[key],
          });
        }
      }
    }
    result.headerData = JSON.stringify(result.headerData);
  } else {
    let data = requestConfig.header.paramsData.tableData;
    data.forEach((x) => {
      if (x.code) {
        result.headerData.push({
          code: x.code,
          value: x.value || null,
        });
      }
    });
    result.headerData = JSON.stringify(result.headerData);
  }

  // cookie的参数
  if (!requestConfig.cookie.paramsData.isShowTable) {
    let jsonData = requestConfig.cookie.paramsData.jsonData;
    let data = parseNonStrictJsonString(jsonData);
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (data[key]) {
        if (typeof data[key] === "object") {
          result.cookieData.push({
            code: key,
            value: JSON.stringify(data[key]),
          });
        } else {
          result.cookieData.push({
            code: key,
            value: data[key],
          });
        }
      }
    }
    result.cookieData = JSON.stringify(result.cookieData);
  } else {
    let data = requestConfig.cookie.paramsData.tableData;
    data.forEach((x) => {
      if (x.code) {
        result.cookieData.push({
          code: x.code,
          value: x.value || null,
        });
      }
    });
    result.cookieData = JSON.stringify(result.cookieData);
  }

  // url的参数
  if (!requestConfig.url.paramsData.isShowTable) {
    let jsonData = requestConfig.url.paramsData.jsonData;
    let data = parseNonStrictJsonString(jsonData);
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (data[key]) {
        if (typeof data[key] === "object") {
          result.urlParam.push({
            code: key,
            value: JSON.stringify(data[key]),
          });
        } else {
          result.urlParam.push({
            code: key,
            value: data[key],
          });
        }
      }
    }
    result.urlParam = JSON.stringify(result.urlParam);
  } else {
    let data = requestConfig.url.paramsData.tableData;
    data.forEach((x) => {
      if (x.code) {
        result.urlParam.push({
          code: x.code,
          value: x.value || null,
        });
      }
    });
    result.urlParam = JSON.stringify(result.urlParam);
  }

  // body参数 - form-data
  if (result.paramType === "form-data") {
    const bodyParamsData = requestConfig.body[result.paramType];
    if (bodyParamsData.isShowTable) {
      const paramData = bodyParamsData.tableData.filter((x) => x.code);
      paramData.forEach((x) => {
        delete x.id;
      });
      if (paramData.length) {
        result.formData = JSON.stringify(paramData);
      } else {
        result.formData = "";
      }
    } else {
      result.formData = bodyParamsData.jsonData;
    }
  }
  // body参数 - x-www-form-urlencoded
  if (result.paramType === "x-www-form-urlencoded") {
    const bodyParamsData = requestConfig.body[result.paramType];
    if (bodyParamsData.isShowTable) {
      const paramData = bodyParamsData.tableData.filter((x) => x.code);
      paramData.forEach((x) => {
        delete x.id;
      });
      if (paramData.length) {
        result.formEncodeParam = JSON.stringify(paramData);
      } else {
        result.formEncodeParam = "";
      }
    } else {
      result.formEncodeParam = bodyParamsData.jsonData;
    }
  }
  // body参数 - raw
  if (result.paramType === "raw") {
    const bodyParamsData = requestConfig.body[result.paramType];
    if (bodyParamsData.isShowTable) {
      const paramData = bodyParamsData.tableData.filter((x) => x.code);
      paramData.forEach((x) => {
        delete x.id;
      });
      if (paramData.length) {
        result.bodyData = JSON.stringify(paramData);
      } else {
        result.bodyData = "";
      }
    } else {
      result.bodyData = bodyParamsData.jsonData;
    }
  }
  Object.keys(result).forEach((key) => {
    if (!result[key] || result[key] === "[]") {
      result[key] = null;
    }
  });
  return result;
}
export function validRequestConfigData(requestConfig) {
  const r = {
    result: true,
    message: "",
  };
  function doVaild(type) {
    let jsonData = requestConfig[type].paramsData.jsonData;
    if (jsonData) {
      try {
        let data = parseNonStrictJsonString(jsonData);
        if (Object.prototype.toString.call(data) === "[object Object]") {
          const headerDataKeys = Object.keys(data);
          for (let i = 0; i < headerDataKeys.length; i++) {
            const key = headerDataKeys[i];
            if (data[key]) {
              if (typeof data[key] === "object") {
                r.result = false;
                r.message = `${type}参数数据格式错误，【${key}】字段的值不能为对象或数组`;
                return "error";
              }
            }
          }
        } else {
          r.result = false;
          r.message = `${type}参数数据格式错误，应该为对象类型！`;
          return "error";
        }
      } catch (error) {
        r.result = false;
        r.message = `${type}参数数据格式错误，应该为对象类型！`;
        return "error";
      }
    }
  }
  // header的参数
  if (!requestConfig.header.paramsData.isShowTable) {
    const vaildFlag = doVaild("header");
    if (vaildFlag === "error") {
      return r;
    }
  }
  // cookie的参数
  if (!requestConfig.cookie.paramsData.isShowTable) {
    const vaildFlag = doVaild("cookie");
    if (vaildFlag === "error") {
      return r;
    }
  }
  // url的参数
  if (!requestConfig.url.paramsData.isShowTable) {
    const vaildFlag = doVaild("url");
    if (vaildFlag === "error") {
      return r;
    }
  }
  return r;
}
