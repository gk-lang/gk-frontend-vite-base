import { ref } from "vue";
import { ElButton,ElMessage, ElTag } from "element-plus";
function copyText(text) {
  let r = "";
  const execCommandCopy = () => {
    let textarea = null;
    try {
      textarea = document.createElement("textarea");
      document.body.appendChild(textarea);
      textarea.style.position = "fixed"; // 隐藏此输入框
      textarea.style.clip = "rect(0 0 0 0)";
      textarea.style.top = "10px";
      textarea.value = text; // 赋值
      textarea.select(); // 选中
      r = document.execCommand("copy", true);
      if (r) {
        ElMessage({
          message: "复制成功!",
          dangerouslyUseHTMLString: true,
          duration: 1000,
          type: "success",
        });
      } else {
        ElMessage({
          message: "复制失败!",
          dangerouslyUseHTMLString: true,
          duration: 1000,
          type: "error",
        });
      }
    } catch (error) {
      ElMessage({
        message: "复制失败!",
        dangerouslyUseHTMLString: true,
        duration: 1000,
        type: "error",
      });
    } finally {
      if (textarea) {
        document.body.removeChild(textarea); // 移除输入框
      }
    }
  };
  try {
    // clipboard api 复制
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      ElMessage({
        message: "复制成功!",
        dangerouslyUseHTMLString: true,
        duration: 1000,
        type: "success",
      });
    } else {
      // 复制
      execCommandCopy();
    }
  } catch (error) {
    execCommandCopy();
  }
}
export const appSearchFormItems = ref([
  {
    formDataKey: "approveStatus",
    labelName: "审批状态",
    labelWidth: "90px",
    span: 6,
    childWidget: {
      widget: "select",
      widgetAttrs: {
        clearable: true,
        options: [
          {
            label: "待审批",
            value: "0",
          },
          {
            label: "审批通过",
            value: "1",
          },
          {
            label: "审批驳回",
            value: "2",
          },
        ],
      },
    },
  },
  {
    formDataKey: "name",
    labelName: "应用名称",
    labelWidth: "90px",
    span: 6,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
      },
    },
  },
  {
    span: 6,
    formDataKey: "search-btn-bar",
    childWidget: {
      widget: "button-group",
      widgetAttrs: {
        buttons: [
          {
            name: "查询",
            shortcutKey: "",
            eventKey: "searchAppTableData",
            widgetAttrs: {
              type: "primary",
              autoLoading: false,
            },
          },
          {
            name: "重置",
            shortcutKey: "",
            eventKey: "resetAppSearchForm",
          },
        ],
      },
    },
  },
  {
    width: "0px",
    isRowRight: true,
    formDataKey: "op-btn-bar",
    childWidget: {
      widget: "button-group",
      widgetAttrs: {
        buttons: [
          {
            name: "新增应用",
            shortcutKey: "",
            eventKey: "openDialogAddOrEdit",
            widgetAttrs: {
              type: "primary",
            },
          },
        ],
      },
    },
  },
]);
export const apiSearchItems = ref([
  {
    formDataKey: "apiDocTypeId",
    labelName: "API分类",
    labelWidth: "90px",
    span: 9,
    childWidget: {
      widget: "treeselect",
      widgetAttrs: {
        clearable: true,
        filterable: true,
        "check-strictly": true,
        options: [],
      },
    },
  },
  {
    formDataKey: "keyword",
    labelName: "关键字",
    labelWidth: "90px",
    span: 9,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
      },
    },
  },
  {
    span: 6,
    // isRowRight: true,
    formDataKey: "search-btn-bar",
    childWidget: {
      widget: "button-group",
      widgetAttrs: {
        buttons: [
          {
            name: "查询",
            shortcutKey: "",
            eventKey: "searchApiTableData",
            widgetAttrs: {
              type: "primary",
              autoLoading: false,
            },
          },
          {
            name: "重置",
            shortcutKey: "",
            eventKey: "resetApiSearchForm",
          },
        ],
      },
    },
  },
]);
export const selectedApiSearchItems = ref([
  {
    formDataKey: "apiName",
    labelName: "API名称",
    labelWidth: "90px",
    span: 14,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
      },
    },
  },
  {
    span: 10,
    // isRowRight: true,
    formDataKey: "search-btn-bar",
    childWidget: {
      widget: "button-group",
      widgetAttrs: {
        buttons: [
          {
            name: "查询",
            shortcutKey: "",
            eventKey: "searchTableData",
            widgetAttrs: {
              type: "primary",
              autoLoading: false,
            },
          },
          {
            name: "重置",
            shortcutKey: "",
            eventKey: "resetSearchForm",
          },
        ],
      },
    },
  },
]);

export const appTableOperationButtons = ref([
  {
    name: "应用详情",
    shortcutKey: "",
    eventKey: "openDialogDetailAppInfo",
    widgetAttrs: {
      show: true,
      type: "primary",
    },
  },
  {
    name: "删除",
    shortcutKey: "",
    eventKey: "handleTableDataDelete",
    widgetAttrs: {
      show: true,
      type: "danger",
    },
  },
  {
    name: "编辑应用",
    shortcutKey: "",
    eventKey: "openDialogAddOrEdit",
    widgetAttrs: {
      show: true,
      type: "danger",
    },
  },
  {
    name: "关联api",
    shortcutKey: "",
    eventKey: "openDialogAppApiRelateIsShow",
    widgetAttrs: {
      show: true,
      type: "warning",
    },
  },
  {
    name: "查看api",
    shortcutKey: "",
    eventKey: "openApiListPage",
    widgetAttrs: {
      show: true,
      type: "success",
    },
  },
]);
export const apiTableOperationButtons = ref([
  {
    name: "删除关联",
    shortcutKey: "",
    eventKey: "delete",
    widgetAttrs: {
      show: true,
      type: "danger",
    },
  },
  {
    name: "api详情",
    shortcutKey: "",
    eventKey: "preview",
    widgetAttrs: {
      show: true,
      type: "success",
    },
  },
]);
export const appTableColumns = ref([
  {
    prop: "sortIndex",
    label: "序号",
    width: 80,
    align: "center",
    fixed: true,
    sortable: true,
  },
  {
    prop: "id",
    label: "id",
    hidden: true,
  },
  {
    prop: "appName",
    label: "应用名称",
    sortable: false,
    minWidth: 120,
  },
  {
    prop: "appNameEn",
    label: "应用英文名",
    minWidth: 150,
  },
  {
    prop: "appType",
    label: "应用类型",
    minWidth: 120,
  },
  {
    prop: "appDesc",
    label: "应用描述",
    minWidth: 120,
  },
  {
    prop: "appOs",
    label: "应用操作系统",
    minWidth: 150,
  },
  {
    prop: "website",
    label: "官网地址",
    minWidth: 120,
  },
  {
    prop: "approveStatus",
    label: "审批状态",
    minWidth: 120,
    render: (h, scope) => {
      if (scope.row?.approveStatus === 0) {
        return (
          <ElTag key="1" type="primary" effect="plain">
            待审批
          </ElTag>
        );
      } else if (scope.row?.approveStatus === 1) {
        return (
          <ElTag key="1" type="success" effect="plain">
            审批通过
          </ElTag>
        );
      } else {
        return (
          <ElTag key="2" type="danger" effect="plain">
            审批驳回
          </ElTag>
        );
      }
    },
  },
  {
    prop: "createTime",
    label: "创建时间",
    minWidth: 120,
  },
  {
    prop: "updateTime",
    label: "更新时间",
    minWidth: 120,
  },
]);
export const apiTableColumns = ref([
  {
    type: "selection",
    width: 50,
    align: "center",
    fixed: true,
  },
  {
    prop: "sortIndex",
    label: "序号",
    width: 80,
    align: "center",
    fixed: true,
    sortable: true,
  },
  {
    prop: "id",
    label: "id",
    hidden: true,
  },
  {
    prop: "approveStatus",
    label: "审批状态",
    minWidth: 120,
    hidden: true,
    render: (h, scope) => {
      if (scope.row?.approveStatus === 0) {
        if (scope.row.isNewData) {
          return (
            <div class="new-data">
              <ElTag key="1" type="primary" effect="plain">
                待审批
              </ElTag>
            </div>
          );
        } else {
          return (
            <ElTag key="1" type="primary" effect="plain">
              待审批
            </ElTag>
          );
        }
      } else if (scope.row?.approveStatus === 1) {
        return (
          <ElTag key="1" type="success" effect="plain">
            审批通过
          </ElTag>
        );
      } else {
        return (
          <ElTag key="2" type="danger" effect="plain">
            审批驳回
          </ElTag>
        );
      }
    },
  },
  {
    prop: "apiTypeName",
    label: "接口类型",
    minWidth: "120px",
    render: (h, scope) => {
      scope.row.apiType += ''
      if (scope.row?.apiType === '1') {
        return (
          <ElTag key="1" type="primary" effect="plain">
            { scope.row?.apiTypeName }
          </ElTag>
        );
      } else {
        return (
          <ElTag key="2" type="danger" effect="plain">
            { scope.row?.apiTypeName || '推送接口' }
          </ElTag>
        );
      }
    },
  },
  {
    prop: "apiStatus",
    label: "API状态",
    minWidth: "120px",
    hidden: true,
    render: (h, scope) => {
      if (scope.row?.apiStatus === 0) {
        return (
          <ElTag key="0" type="danger" effect="plain">
            待配置
          </ElTag>
        );
      } else if (scope.row?.apiStatus === 1) {
        return (
          <ElTag key="1" type="warning" effect="plain">
            测试中
          </ElTag>
        );
      } else if (scope.row?.apiStatus === 2) {
        return (
          <ElTag key="2" type="primary" effect="plain">
            待上线
          </ElTag>
        );
      } else if (scope.row?.apiStatus === 3) {
        return (
          <ElTag key="2" type="success" effect="plain">
            已上线
          </ElTag>
        );
      }
    },
  },
  {
    prop: "apiName",
    label: "API名称",
    sortable: false,
    minWidth: "150px",
  },
  {
    prop: "apiDocTypeName",
    label: "API类别",
    minWidth: "120px",
  },
  {
    prop: "apiCode",
    label: "服务代码",
    minWidth: "150px",
  },
  {
    prop: "requestMethod",
    label: "请求方式",
    minWidth: "120px",
  },
  {
    prop: "apiUrl",
    label: "API地址",
    minWidth: "200px",
  },
  {
    prop: "apiVersion",
    label: "API版本",
    minWidth: "120px",
  },
  
]);
export const appInfoFormItems = ref([
  {
    formDataKey: "appName",
    labelName: "应用名称",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      widget: "text",
    },
  },
  {
    formDataKey: "appNameEn",
    labelName: "应用英文名",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      widget: "text",
    },
  },
  {
    formDataKey: "appType",
    labelName: "应用类型",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      widget: "text",
    },
  },
  {
    formDataKey: "appDesc",
    labelName: "应用描述",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      widget: "text",
    },
  },
  {
    formDataKey: "appOs",
    labelName: "移动操作系统",
    labelWidth: "120px",
    span: 24,
    hidden: true,
    childWidget: {
      widget: "text",
    },
  },
  {
    formDataKey: "website",
    labelName: "官网地址",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      widget: "text",
    },
  },
  {
    formDataKey: "secretKey",
    labelName: "client_id",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      // widget: "text",
      render: (h, scope) => {
        return (
          <div>
            <span style="margin-right:10px;">{scope.formData?.secretKey}</span>
            <ElButton onClick={()=>copyText(scope.formData?.secretKey||'')} type="primary" plain size="small">
              复制
            </ElButton>
          </div>
        );
      },
    },
  },
  {
    formDataKey: "apiKey",
    labelName: "client_secret",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      render: (h, scope) => {
        return (
          <div>
            <span style="margin-right:10px;">{scope.formData?.apiKey}</span>
            <ElButton onClick={()=>copyText(scope.formData?.apiKey||'')} type="primary" plain size="small">
              复制
            </ElButton>
          </div>
        );
      },
    },
  },
  {
    formDataKey: "approveStatus",
    labelName: "审批状态",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      render: (h, scope) => {
        if (scope.formData?.approveStatus === 1) {
          return (
            <ElTag key="1" type="success" effect="plain">
              审批通过
            </ElTag>
          );
        } else {
          return (
            <ElTag key="2" type="danger" effect="plain">
              审批驳回
            </ElTag>
          );
        }
      },
    },
  },
]);
export const addOrEditFormItems = ref([
  {
    formDataKey: "appName",
    labelName: "应用名称",
    labelWidth: "120px",
    required: true,
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
        disabled: false,
      },
    },
  },
  {
    formDataKey: "appNameEn",
    labelName: "应用英文名",
    labelWidth: "120px",
    required: true,
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
        disabled: false,
      },
    },
  },
  {
    formDataKey: "appType",
    labelName: "应用类型",
    labelWidth: "120px",
    required: true,
    span: 24,
    childWidget: {
      widget: "select",
      widgetAttrs: {
        clearable: true,
        disabled: false,
        options: [
          {
            label: "服务应用",
            value: "server",
          },
          {
            label: "手机应用",
            value: "app",
          },
          {
            label: "PC网页应用",
            value: "pc",
          },
          {
            label: "手机网页应用",
            value: "wap",
          },
        ],
      },
    },
  },
  {
    formDataKey: "appDesc",
    labelName: "应用描述",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
        disabled: false,
      },
    },
  },
  {
    formDataKey: "appOs",
    labelName: "移动操作系统",
    labelWidth: "120px",
    span: 24,
    hidden: true,
    required: true,
    childWidget: {
      widget: "select",
      widgetAttrs: {
        clearable: true,
        disabled: false,
        options: [
          {
            label: "ios-苹果",
            value: "ios",
          },
          {
            label: "android-安卓",
            value: "android",
          },
        ],
      },
    },
  },
  {
    formDataKey: "website",
    labelName: "官网地址",
    labelWidth: "120px",
    required: true,
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
        disabled: false,
      },
    },
  },
]);
