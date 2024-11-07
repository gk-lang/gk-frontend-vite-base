import { ref } from "vue";
export const searchFormItems = ref([
  {
    formDataKey: "keyword",
    labelName: "关键字",
    labelWidth: "90px",
    span: 8,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
      },
    },
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
  {
    name: "新增文档",
    shortcutKey: "",
    eventKey: "openAddOrEditPage",
    widgetAttrs: {
      type: "primary",
    },
  },
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
  {
    name: "批量删除",
    shortcutKey: "",
    eventKey: "handleTableDataDelete",
    widgetAttrs: {
      loading: false,
    },
  },
]);
export const tableOperationButtons = ref([
  {
    name: "编辑",
    shortcutKey: "",
    eventKey: "edit",
    widgetAttrs: {
      show:true,
      type: "primary",
    },
  },
  {
    name: "删除",
    shortcutKey: "",
    eventKey: "delete",
    widgetAttrs: {
      show:true,
      type: "danger",
    },
  },
  {
    name: "预览",
    shortcutKey: "",
    eventKey: "preview",
    widgetAttrs: {
      show:true,
      type: "success",
    },
  },
])
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
    width: 150,
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
    prop: "name",
    label: "文档名称",
    width: 150,
    sortable: false,
  },
  {
    prop: "serviceCode",
    label: "服务代码",
    width: 120,
  },
  {
    prop: "docTypeTitle",
    label: "文档类型",
    width: 120,
  },
  {
    prop: "apiDocTypeName",
    label: "所属目录",
    width: 150,
  },
  {
    prop: "shareDesc",
    label: "使用说明",
    width: 180,
  },
  {
    prop: "createdStaff",
    label: "创建人",
    width: 120,
  },
  {
    prop: "createTime",
    label: "创建时间",
    width: 180,
  },
  {
    prop: "updateStaff",
    label: "更新人",
    width: 120,
  },
  {
    prop: "updateTime",
    label: "更新时间",
    width: 180,
  },
]);
export const archiveTypeFormItems = ref([
  // {
  //   formDataKey: "parentId",
  //   labelName: "父级分类",
  //   labelWidth: "100px",
  //   span: 24,
  //   childWidget: {
  //     widget: "input",
  //     widgetAttrs: {
  //       clearable: true,
  //       disabled: true,
  //     },
  //   },
  // },
  {
    formDataKey: "parentId",
    labelName: "父级分类",
    labelWidth: "100px",
    required: true,
    span: 24,
    childWidget: {
      widget: "treeselect",
      widgetAttrs: {
        clearable: true,
        "check-strictly": true,
        options: [],
      },
    },
  },
  {
    formDataKey: "name",
    labelName: "分类名称",
    labelWidth: "100px",
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
    formDataKey: "sort",
    labelName: "排序编号",
    labelWidth: "100px",
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
      },
    },
  },
  {
    formDataKey: "typeKey",
    labelName: "标识key",
    labelWidth: "100px",
    span: 24,
    childWidget: {
      widget: "input",
      widgetAttrs: {
        clearable: true,
      },
    },
  },
  {
    formDataKey: "menu",
    labelName: "所属门户主菜单",
    labelWidth: "100px",
    span: 24,
    childWidget: {
      widget: "select",
      widgetAttrs: {
        clearable: true,
        options:[{
          label:'开发文档',
          value:'api'
        },{
          label:'解决方案',
          value:'solution'
        },{
          label:'服务与支持',
          value:'support'
        }]
      },
    },
  },
]);
