import { ref } from "vue";
import { ElTag } from "element-plus";
export const searchFormItems = ref([
  {
    formDataKey: "openAppId",
    labelName: "所属应用",
    labelWidth: "90px",
    span: 6,
    childWidget: {
      widget: "select",
      widgetAttrs: {
        clearable: true,
        disabled: false,
        options: [],
      },
    },
  },
  {
    formDataKey: "apiDocTypeId",
    labelName: "API分类",
    labelWidth: "90px",
    span: 6,
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
    formDataKey: "approveStatus",
    labelName: "审核状态",
    labelWidth: "90px",
    span: 6,
    childWidget: {
      widget: "select",
      widgetAttrs: {
        clearable: true,
        filterable: true,
        options:[
          {
            label:'待审批',
            value:'0'
          },
          {
            label:'审批通过',
            value:'1'
          },
          {
            label:'审批驳回',
            value:'2'
          }
        ]
      },
    },
  },
  {
    formDataKey: "keyword",
    labelName: "关键字",
    labelWidth: "90px",
    span: 6,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        placeholder: "请输入API名称或代码",
        clearable: true,
      },
    },
  },
  // {
  //   span: 6,
  //   formDataKey: "search-btn-bar",
  //   childWidget: {
  //     widget: "button-group",
  //     widgetAttrs: {
  //       buttons: [
  //         {
  //           name: "查询",
  //           shortcutKey: "",
  //           eventKey: "searchTableData",
  //           widgetAttrs: {
  //             type: "primary",
  //             autoLoading: false,
  //           },
  //         },
  //         {
  //           name: "重置",
  //           shortcutKey: "",
  //           eventKey: "resetSearchForm",
  //         },
  //       ],
  //     },
  //   },
  // },
]);
export const searchButtons = ref([
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
]);
export const tableButtons = ref([
  // {
  //   name: "新增应用",
  //   shortcutKey: "",
  //   eventKey: "openDialogAddOrEdit",
  //   widgetAttrs: {
  //     type: "primary",
  //   },
  // },
  // {
  //   name: "停用",
  //   shortcutKey: "",
  //   eventKey: "handleExpire",
  //   widgetAttrs: {
  //     loading: false,
  //   },
  // },
  // {
  //   name: "启用",
  //   shortcutKey: "",
  //   eventKey: "handleEnable",
  //   widgetAttrs: {
  //     loading: false,
  //   },
  // },
  // {
  //   name: "批量删除",
  //   shortcutKey: "",
  //   eventKey: "handleTableDataDelete",
  //   widgetAttrs: {
  //     loading: false,
  //   },
  // },
]);
export const tableOperationButtons = ref([
  {
    name: "应用详情",
    shortcutKey: "",
    eventKey: "edit",
    widgetAttrs: {
      show: true,
      type: "primary",
    },
  },
  {
    name: "删除",
    shortcutKey: "",
    eventKey: "delete",
    widgetAttrs: {
      show: true,
      type: "danger",
    },
  },
  {
    name: "查看api",
    shortcutKey: "",
    eventKey: "preview",
    widgetAttrs: {
      show: true,
      type: "success",
    },
  },
]);

export const tableColumns = ref([
  // {
  //   type: "selection",
  //   width: 50,
  //   align: "center",
  //   fixed: true,
  //   "reserve-selection": true,
  // },
  {
    prop: "sortIndex",
    label: "序号",
    width: 80,
    align: "center",
    fixed: true,
    sortable: true,
  },
  // {
  //   label: "操作",
  //   align: "center",
  //   fixed: true,
  //   width: 220,
  //   sortable: false,
  //   prop: "operation",
  //   slot: "operation",
  // },
  {
    prop: "id",
    label: "id",
    hidden: true,
  },
  {
    prop: "openAppName",
    label: "关联应用",
    minWidth: "120px",
    render: (h, scope) => {
      const row = scope.row;
      const openAppApproveStatus = row.openAppApproveStatus;
      return (
        <div class={`open-app-approve-status status-${openAppApproveStatus}`}>
          {row.openAppName}
        </div>
      );
    },
  },
  {
    prop: "apiDocTypeName",
    label: "API类别",
    minWidth: "120px",
  },
  {
    prop: "apiName",
    label: "API名称",
    sortable: false,
    minWidth: "150px",
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
            { scope.row?.apiTypeName }
          </ElTag>
        );
      }
    },
  },
  {
    prop: "approveStatus",
    label: "审批状态",
    minWidth: "120px",
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
    prop: "apiStatus",
    label: "API状态",
    minWidth: "120px",
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
]);
export const dialogPushApiFormItems = ref([
  {
    formDataKey: "apiUrl",
    labelName: "调用地址",
    labelWidth: "90px",
    required: true,
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
      },
    },
  },
  {
    formDataKey: "apiMethod",
    labelName: "调用方法",
    labelWidth: "90px",
    required: false,
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true
      },
    },
  },
  {
    formDataKey: "apiVersion",
    labelName: "api版本",
    labelWidth: "90px",
    required: false,
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
      },
    },
  },
  {
    formDataKey: "requestType",
    labelName: "请求方式",
    labelWidth: "90px",
    span: 24,
    childWidget: {
      widget: "select",
      widgetAttrs: {
        clearable: false,
        options: [
          {
            label:'POST',
            value:'post'
          },
          {
            label:'GET',
            value:'get'
          }
        ]
      },
    },
  },
  {
    formDataKey: "headJson",
    labelName: "请求头信息",
    labelWidth: "90px",
    required: false,
    span: 24,
    childWidget: {
      widget: "slot",
      slot: "headJson",
    },
  },
  {
    formDataKey: "paramJson",
    labelName: "请求参数",
    labelWidth: "90px",
    required: false,
    span: 24,
    childWidget: {
      widget: "slot",
      slot: "paramJson",
    },
  },
  {
    formDataKey: "contentType",
    labelName: "内容类型",
    labelWidth: "90px",
    required: false,
    span: 24,
    childWidget: {
      widget: "select",
      widgetAttrs: {
        clearable: true,
        options: [
          { label: "application/json", value: "application/json" },
          { label: "x-www-form-urlencoded", value: "application/x-www-form-urlencoded" },
          { label: "multipart/form-data", value: "multipart/form-data" },
          // { label: "application/html", value: "application/html" },
          // { label: "application/xm", value: "application/xml" },
          // { label: "application/javascript", value: "application/javascript" },
          // { label: "application/text", value: "application/text" },
        ],
      },
    },
  },
  
]);
