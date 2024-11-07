import { ref } from "vue";
import { ElTag } from "element-plus";
const IptTableColumnsLogisticsCenter = [
  {
    type: 'index',
    label: '序号',
    width: 80,
    align: 'center',
    fixed: true
  },
  {
    prop: 'ldcName',
    label: '物流中心名称'
  },
  {
    prop: 'ldcNo',
    label: '物流中心编码'
  }
]
const IptTableColumnsConsignor = [
  {
    type: 'index',
    label: '序号',
    width: 80,
    align: 'center',
    fixed: true
  },
  {
    prop: 'conName',
    label: '委托方名称'
  },
  {
    prop: 'conNo',
    label: '委托方编码'
  }
]
const IptTableColumnsOperator = [
  {
    type: 'index',
    label: '序号',
    width: 80,
    align: 'center',
    fixed: true
  },
  {
    prop: 'operatorName',
    label: '运营方名称'
  },
  {
    prop: 'operatorNo',
    label: '运营方编码'
  }
]
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
      widget: 'button-group',
      widgetAttrs: {
        buttons: [
          {
            name: '查询',
            shortcutKey: '',
            eventKey: 'searchTableData',
            widgetAttrs: {
              type: 'primary',
              autoLoading: false
            }
          },
          {
            name: '重置',
            shortcutKey: '',
            eventKey: 'resetSearchForm'
          }
        ]
      }
    }
  },
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
  //   name: "批量审批",
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
    name: "审批",
    shortcutKey: "",
    eventKey: "openApproveDialog",
    widgetAttrs: {
      show: true,
      type: "primary",
    },
  }
]);
export const tableColumns = ref([
  // {
  //   type: "selection",
  //   width: 50,
  //   align: "center",
  //   fixed: true,
  // },
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
    minWidth:'120px',
    sortable: false,
  },
  {
    prop: "appNameEn",
    minWidth:'120px',
    label: "应用英文名",
  },
  {
    prop: "appType",
    minWidth:'120px',
    label: "应用类型",
  },
  {
    prop: "appDesc",
    minWidth:'150px',
    label: "应用描述",
  },
  {
    prop: "appOs",
    minWidth:'150px',
    label: "应用操作系统",
  },
  {
    prop: "website",
    minWidth:'150px',
    label: "官网地址",
  },
  {
    prop: "approveStatus",
    minWidth:'120px',
    label: "审批状态",
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
    minWidth:'150px',
  },
  {
    prop: "createdStaff",
    label: "创建人",
    minWidth:'100px',
  },
  {
    prop: "updateTime",
    label: "更新时间",
    minWidth:'150px',
  },
  {
    prop: "updateStaff",
    label: "更新人",
    minWidth:'100px',
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
  {
    formDataKey: "dbFlag",
    labelName: "分库标识",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
      },
    },
  },
  {
    formDataKey: '_proxy_operatorId',
    required: true,
    formDataMap: {
      selectRow: {
        operatorName: 'operatorName',
        operatorNo: 'operatorNo',
        operatorId: 'operatorId',
      },
      inputValue: 'operatorName',
      searchValue: ''
    },
    labelName: '运营方',
    labelWidth: '120px',
    span: 24,
    childWidget: {
      widget: 'input-popover-table',
      widgetAttrs:{
        title:'运营方',
        tableColumns: IptTableColumnsOperator,
        displayMapKey: 'operatorName',
        remoteSearchUrl: 'openmanage/queryOperatorByName',
        inputAttrs: {
          clearable: true,
          placeholder: '请输入运营方'
        },
        tableAttrs:{
          page:null,
          height: 250,
          stripe: true,
        }
      }
    }
  },
  {
    formDataKey: '_proxy_consignorId',
    required: true,
    formDataMap: {
      selectRow: {
        conName: 'conName',
        conNo: 'conNo',
        conId: 'conId',
      },
      inputValue: 'conName',
      searchValue: ''
    },
    labelName: '委托方',
    labelWidth: '120px',
    span: 24,
    childWidget: {
      widget: 'input-popover-table',
      widgetAttrs:{
        title:'委托方',
        tableColumns: IptTableColumnsConsignor,
        displayMapKey: 'conName',
        remoteSearchUrl: 'openmanage/queryConsignorByName',
        inputAttrs: {
          clearable: true,
          placeholder: '请输入委托方'
        },
        tableAttrs:{
          page:null,
          height: 250,
          stripe: true,
        }
      }
    }
  },
  {
    formDataKey: '_proxy_logisticsCenterId',
    required: true,
    formDataMap: {
      selectRow: {
        ldcName: 'ldcName',
        ldcNo: 'ldcNo',
        ldcId: 'ldcId',
      },
      inputValue: 'ldcName',
      searchValue: ''
    },
    labelName: '物流中心',
    labelWidth: '120px',
    span: 24,
    childWidget: {
      widget: 'input-popover-table',
      widgetAttrs:{
        title:'物流中心',
        tableColumns: IptTableColumnsLogisticsCenter,
        displayMapKey: 'ldcName',
        remoteSearchUrl: 'openmanage/queryLogisticsCenterByName',
        inputAttrs: {
          clearable: true,
          placeholder: '请输入物流中心'
        },
        tableAttrs:{
          page:null,
          height: 250,
          stripe: true,
        }
      }
    }
  },
  {
    formDataKey: "approveMsg",
    labelName: "审核意见",
    labelWidth: "120px",
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        type:'textarea',
        clearable: true,
      },
    },
  },
]);
