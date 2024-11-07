import { ref } from "vue";
import { ElTag } from "element-plus";
export const searchFormItems = ref([
  {
    formDataKey: "approveStatus",
    labelName: "审核状态",
    labelWidth: "90px",
    span: 6,
    childWidget: {
      widget: "select",
      widgetAttrs: {
        clearable: true,
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
  //   span: 4,
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
  // {
  //   width: "0px",
  //   isRowRight: true,
  //   formDataKey: "op-btn-bar",
  //   childWidget: {
  //     widget: "button-group",
  //     widgetAttrs: {
  //       buttons: [
  //         {
  //           name: "批量审批",
  //           shortcutKey: "",
  //           eventKey: "batchApproveTableRow",
  //           widgetAttrs: {
  //             type: "primary",
  //           },
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
  {
    name: "批量审批",
    shortcutKey: "",
    eventKey: "batchApproveTableRow",
    widgetAttrs: {
      type: "primary",
    }
  }
]);
export const tableOperationButtons = ref([
  {
    name: "审批",
    shortcutKey: "",
    eventKey: "openApproveDialog",
    widgetAttrs: {
      show: true,
      type: "primary",
    },
  },
]);
export const tableColumns = ref([
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
    label: "操作",
    align: "center",
    fixed: "right",
    width: 120,
    sortable: false,
    prop: "operation",
    slot: "operation",
  },
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
            { scope.row?.apiTypeName || '普通接口' }
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
export const approveFormItems = ref([
  {
    formDataKey: "approve",
    labelName: "审核状态",
    labelWidth: "120px",
    required: true,
    span: 24,
    childWidget: {
      widget: "select",
      widgetAttrs: {
        clearable: true,
        options: [
          {
            label: "通过",
            value: "1",
          },
          {
            label: "驳回",
            value: "2",
          },
        ],
      },
    },
  },
  // {
  //   formDataKey: "dbFlag",
  //   labelName: "分库标识",
  //   labelWidth: "120px",
  //   span: 24,
  //   childWidget: {
  //     widget: "input",
  //     widgetAttrs: {
  //       clearable: true,
  //     },
  //   },
  // },
  {
    formDataKey: "approveMsg",
    labelName: "审核意见",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        type: "textarea",
        clearable: true,
      },
    },
  },
]);
