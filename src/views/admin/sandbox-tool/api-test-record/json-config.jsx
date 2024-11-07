import { ref } from "vue";
const shortcuts = [
  {
    text: '一周前',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '一个月前',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '三个月前',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
export const searchFormItems = ref([
  {
    formDataKey: 'range_date',
    labelName: '时间范围',
    labelWidth: '90px',
    span: 6,
    required: true,
    childWidget: {
      widget: 'date-picker',
      widgetAttrs: {
        type: 'datetimerange',
        'unlink-panels': '',
        'start-placeholder': '请选择开始时间',
        'end-placeholder': '请选择结束时间',
        shortcuts: shortcuts,
        'default-time': ['2000-01-01 00:00', '2000-01-01 23:59'],
        format: 'YYYY-MM-DD HH:mm',
        'value-format': 'YYYY-MM-DD HH:mm'
      }
    }
  },
  {
    formDataKey: "parentId",
    labelName: "API分类",
    labelWidth: "100px",
    span: 6,
    childWidget: {
      widget: "treeselect",
      widgetAttrs: {
        clearable: true,
        options: [
          {
            id: "fruits",
            label: "Fruits",
            children: [
              {
                id: "apple",
                label: "Apple 🍎",
                isNew: true,
              },
              {
                id: "grapes",
                label: "Grapes 🍇",
              },
              {
                id: "pear",
                label: "Pear 🍐",
              },
              {
                id: "strawberry",
                label: "Strawberry 🍓",
              },
              {
                id: "watermelon",
                label: "Watermelon 🍉",
              },
            ],
          },
          {
            id: "vegetables",
            label: "Vegetables",
            children: [
              {
                id: "corn",
                label: "Corn 🌽",
              },
              {
                id: "carrot",
                label: "Carrot 🥕",
              },
              {
                id: "eggplant",
                label: "Eggplant 🍆",
              },
              {
                id: "tomato",
                label: "Tomato 🍅",
              },
            ],
          },
        ],
      },
    },
  },
  {
    formDataKey: "name",
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
    prop: "apiCategory",
    label: "API类别",
    minWidth:"120px"
  },
  {
    prop: "apiName",
    label: "API名称",
    sortable: false,
    minWidth:"150px"
  },
  {
    prop: "apiCode",
    label: "服务代码",
    minWidth:"150px"
  },
  {
    prop: "requestMethod",
    label: "请求方式",
    minWidth:"120px"
  },
  {
    prop: "apiUrl",
    label: "API地址",
    minWidth:"200px"
  },
  {
    prop: "apiVersion",
    label: "API版本",
    minWidth:"120px"
  },
  {
    prop: "apiStatus",
    label: "API状态",
    minWidth:"120px"
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
      },
    },
  },
]);
