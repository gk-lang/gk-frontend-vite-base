import { historyDataListV1, historyDataListV2 } from "./history-data";
import RequestScheduler from "@/utils/requestScheduler";
import { doRequestAction } from "@/api/archive";

export async function sendRequestSaveHistoryData() {
  const rs = new RequestScheduler(2);
  const list = genFormDataList();
  for (let i = 0; i < list.length; i++) {
    const action = () => doRequestAction(list[i]);
    rs.add(action);
  }
  const result = await rs.waitForAll(); // 确保所有请求完成
  // result.forEach((resp) => {
  //   if (resp.code === "200") {
  //     console.log(resp.message || "保存失败!");
  //   } else {
  //     console.log(resp.message || "保存失败!");
  //   }
  // });
  console.log("result!", result);
  window.$msg.success("数据处理完成");
  return result;
}
function genFormDataList() {
  let result = [];
  historyDataListV1.forEach((item) => {
    let docData = {
      ...item,
    };
    docData.type = "1";
    docData.docType = "1";
    docData.apiType = "1";
    docData.pushApiCode = "";
    docData.richEditorValue = "";
    docData.attachmentValue = "";
    docData.content = genMDData(item);
    delete docData.requestParamList;
    delete docData.responseParamList;

    result.push({
      docData,
      apiParamData: item.apiRequestParam,
    });
  });
  historyDataListV2.forEach((item) => {
    let docData = {
      ...item,
    };
    docData.type = "1";
    docData.docType = "1";
    docData.apiType = "1";
    docData.pushApiCode = "";
    docData.richEditorValue = "";
    docData.attachmentValue = "";
    docData.content = genMDData(item);
    delete docData.requestParamList;
    delete docData.responseParamList;
    result.push({
      docData,
      apiParamData: item.apiRequestParam,
    });
  });
  return result;
}

// 遍历树的函数
function traverseTreeArray(nodes, callback, depth = 0) {
  if (!Array.isArray(nodes) || nodes.length === 0) return;

  for (let node of nodes) {
    traverseTree(node, callback, depth);
  }
}
// 遍历树的函数
function traverseTree(node, callback, depth = 0) {
  if (!node) return;

  // 调用回调函数，传递当前节点和层级
  callback(node, depth);

  if (node?.children?.length) {
    // 遍历子节点
    for (let child of node.children) {
      traverseTree(child, callback, depth + 1);
    }
  }
}
function genMDData(item) {
  // 请求参数示例demo
  let requestParamDemo = item.apiRequestParam.bodyData
  if(requestParamDemo) {
    const jsonData = JSON.parse(requestParamDemo)
    requestParamDemo = JSON.stringify(jsonData, null, 2)
  }
  // 返回响应示例demo
  let responseDataDemo = JSON.stringify({}, null, 2)
  // 请求参数说明表格
  let requestParamTable = `<table width='100%'> 
      <tr><th width='30%'>参数名</th> <th width='15%'>类型</th> <th width='15%'>参数位置</th> <th width='15%'>必填</th> <th>说明</th></tr>`;
  traverseTreeArray(item.requestParamList, (node, depth) => {
    requestParamTable += `
      <tr><td>`;
    if (node.paramName) {
      if (depth === 1) {
        requestParamTable += `--- `;
      }
      if (depth === 2) {
        requestParamTable += `------ `;
      }
      if (depth === 3) {
        requestParamTable += `--------- `;
      }
    }
    requestParamTable += `${node.paramName || "-"} </td> <td>${
      node.paramType || "-"
    } </td> <td> ${node.paramLocation || "-"} </td> <td> ${
      !node.isNeed ? "-" : " 是 "
    } </td> <td> 	${node.description || "-"} </td></tr>`;
  });
  requestParamTable += `
    </table>`;

  // 响应参数说明表格
  let responsStatusTable = ``;
  let responseDataTable = ``;

  if (item.responseParamList?.length) {
    const statusInfo = item.responseParamList[0];
    // 响应状态表格
    responsStatusTable = `<table width='100%'> 
            <tr><th width='25%'>状态码</th> <th width='25%'>类型</th> <th>说明</th></tr>
            <tr><td>${statusInfo.statusCode}</td> <td>${statusInfo.paramType}</td> <td>${statusInfo.description}</td></tr>
          </table>`;

    // 响应数据表格
    responseDataTable = `<table width='100%'> 
            <tr><th width='33.33%'>参数名</th> <th width='33.33%'>类型</th> <th width='33.33%'>说明</th></tr>`;
    traverseTreeArray(statusInfo.children, (node, depth) => {
      responseDataTable += `
            <tr><td>`;
      if (node.paramName) {
        if (depth === 1) {
          responseDataTable += `--- `;
        }
        if (depth === 2) {
          responseDataTable += `------ `;
        }
        if (depth === 3) {
          responseDataTable += `--------- `;
        }
      }
      responseDataTable += `${node.paramName || "-"} </td> <td>${
        node.paramType || "-"
      } </td> <td> ${node.description || "-"} </td></tr>`;
    });
    responseDataTable += `
          </table>`;
  }

  const mdContent = `## 一.接口地址
  > [${item.prefixUrl + item.url}](${item.prefixUrl + item.url})
  ## 二.请求方式
  > **${item.method}**
  
  ## 三.请求数据类型
  > **${item.contentType}**
  
  ## 四.接口说明
  > **${item.name}**
  
  ## 五.接口描述
  > **${item.description}**
  
  ## 六.请求参数示例
  \`\`\` js
  ${requestParamDemo}
  \`\`\`

  ## 七.请求参数说明
  ${requestParamTable}
  
  ## 八.返回状态
  ${responsStatusTable || "暂无数据"}
  
  ## 九.返回结果示例
  \`\`\` js
  ${responseDataDemo}
  \`\`\`

  ## 十.返回结果说明
  ${responseDataTable || "暂无数据"}
    `;
  return mdContent;
}
