import { ref } from 'vue'
const defaultStartDayList = Array.from({ length: 1 }, (v, k) => {
  return {
    label: k + 'D',
    value: k
  }
})
const defaultEndDayList = Array.from({ length: 10 }, (v, k) => {
  return {
    label: k + 'D',
    value: k
  }
})
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
    span: 5,
    childWidget: {
      widget: 'date-picker',
      widgetAttrs: {
        type: 'datetimerange',
        'unlink-panels': '',
        'start-placeholder': '请选择开始时间',
        'end-placeholder': '请选择结束时间',
        shortcuts: shortcuts,
        // 'default-time': ['2000-01-01 00:00', '2000-01-01 23:59'],
        format: 'YYYY-MM-DD',
        'value-format': 'YYYY-MM-DD'
      }
    }
  },
  {
    formDataKey: 'appId',
    labelName: '应用名称',
    labelWidth: '90px',
    span: 5,
    childWidget: {
      widget: 'select',
      widgetAttrs: {
        clearable: true,
        options:[]
      }
    }
  },
  {
    formDataKey: 'status',
    labelName: '状态码',
    labelWidth: '90px',
    span: 5,
    childWidget: {
      widget: 'select',
      widgetAttrs: {
        clearable: true,
        multiple: true,
        options:[
          {
            value: '1',
            label: '信息-1**'
          }, {
            value: '2',
            label: '成功-200'
          }, {
            value: '3',
            label: '重定向-3**'
          }, {
            value: '4',
            label: '客户端错误-4**'
          }, {
            value: '5',
            label: '服务器错误-5**'
          }, {
            value: '9',
            label: '服务器错误-9**'
          }
        ]
      }
    }
  },
  {
    formDataKey: 'apiName',
    labelName: 'api名称',
    labelWidth: '90px',
    span: 5,
    hidden:true,
    childWidget: {
      widget: 'input',
      widgetAttrs: {
        clearable: true,
      }
    }
  },
  {
    formDataKey: 'searchValue',
    labelName: '关键词',
    labelWidth: '90px',
    span: 5,
    childWidget: {
      widget: 'input',
      widgetAttrs: {
        clearable: true,
      }
    }
  },
  {
    span: 4,
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
  }
])

export const searchButtons = ref([
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
])

export const tableButtons = ref([
  {
    name: '导出',
    shortcutKey: '',
    eventKey: 'exportTableData',
    widgetAttrs: {
      autoLoading: false
    }
  },
])

export const tableColumns1 = ref([
  {
    type: 'selection',
    width: 50,
    align: 'center',
    fixed: true
  },
  {
    prop: 'sortIndex',
    label: '序号',
    width: 80,
    align: 'center',
    fixed: true,
    sortable: true
  },
  {
    prop: 'id',
    label: 'id',
    hidden: true
  },
  { label: '应用名称', prop: 'appName' },
  { label: 'Api名称', prop: 'apiName' },
  { label: '状态码', prop: 'status' },
  { label: '请求时间', prop: 'requestTime' },
  { label: '耗时（ms）', prop: 'useTime' },
  {
    label: '操作',
    align: 'center',
    fixed: "right",
    width: 100,
    sortable: false,
    childWidget: {
      widget: 'button',
      eventKey: 'openDetailsDialog',
      widgetAttrs: {
        name: '查看',
        shortcutKey: '',
        link: true,
        type:'primary',
        autoLoading: false
      }
    }
    // slot: 'operation'
  },
])
export const tableColumns2 = ref([
  {
    type: 'selection',
    width: 50,
    align: 'center',
    fixed: true
  },
  {
    prop: 'sortIndex',
    label: '序号',
    width: 80,
    align: 'center',
    fixed: true,
    sortable: true
  },
  {
    prop: 'id',
    label: 'id',
    hidden: true
  },
  { label: '应用名称', prop: 'appName' },
  { label: 'Api名称', prop: 'apiName' },
  { label: '状态码', prop: 'status' },
  { label: '返回状态码次数', prop: 'statusCount' },
  // {
  //   label: '操作',
  //   align: 'center',
  //   fixed: "right",
  //   width: 100,
  //   sortable: false,
  //   childWidget: {
  //     widget: 'button-group',
  //     widgetAttrs: {
  //       buttons: [
  //         {
  //           name: '查看',
  //           shortcutKey: '',
  //           eventKey: 'handleLook',
  //           widgetAttrs: {
  //             autoLoading: false
  //           }
  //         }
  //       ]
  //     }
  //   }
  //   // slot: 'operation'
  // },
])
export const addOrEditFormItems = ref([
  {
    formDataKey: 'businessbill_no',
    labelName: '班次编码',
    labelWidth: '100px',
    // isSingleRow: true,
    childWidget: {
      widget: 'input',
      widgetAttrs: {
        disabled: true,
        clearable: true,
        placeholder: '保存时自动生成，无需填写'
      }
    }
  },
  {
    formDataKey: '_proxy_allocate_center',
    labelName: '分拨名称',
    labelWidth: '100px',
    childWidget: {
      widget: 'select',
      formDataMap: {
        selectRow: {
          ldc_name: 'allocate_center_name',
          ldc_no: 'allocate_center_no',
          ldc_id: 'allocate_center_id',
          ldc_code: 'allocate_center_code',
          operator_name: 'operator_name',
          operator_id: 'operator_id',
          province: 'province_code',
          city: 'city_code',
          area: 'area_code',
          town: 'town_code'
        },
        inputValue: 'allocate_center_name',
        searchValue: ''
      },
      widgetAttrs: {
        clearable: true,
        filterable: true,
        remote: true,
        'remote-show-suffix': true,
        remoteSearchUrl: 'route/common/getWarehouseList',
        remoteSearchParams: {
          // 1:仓、2:分拨、3:站点、传空查所有
          route_ldc_type: '2'
        },
        optionValueMapKey: 'ldc_name',
        optionLabelMapKey: 'ldc_name'
      }
    }
  },
  {
    formDataKey: 'allocate_shift_name',
    labelName: '班次名称',
    labelWidth: '100px',
    required: true,
    childWidget: {
      widget: 'input',
      widgetAttrs: {
        clearable: true,
        maxlength: '50',
        'show-word-limit': true
      }
    }
  },
  {
    formDataKey: 'ageing_product',
    labelName: '时效标准',
    labelWidth: '100px',
    required: true,
    childWidget: {
      widget: 'select',
      dictKey: 'ageing_product',
      widgetAttrs: {
        clearable: true,
        multiple: true
      }
    }
  },
  {
    formDataKey: 'allocate_shift_type',
    labelName: '集散类型',
    labelWidth: '100px',
    required: true,
    childWidget: {
      widget: 'select',
      dictKey: 'route_shift_type',
      widgetAttrs: {
        clearable: true
      }
    }
  },
  {
    formDataKey: 'cycle',
    labelName: '周期',
    labelWidth: '100px',
    required: true,
    childWidget: {
      widget: 'select',
      dictKey: 'order_cycle',
      widgetAttrs: {
        clearable: true,
        multiple: true,
        'collapse-tags': true,
        'collapse-tags-tooltip': true,
        'max-collapse-tags': 5
      }
    }
  },
  {
    formDataKey: '_proxy_allocate_shift_start',
    labelName: '班次开始时间',
    labelWidth: '100px',
    required: true,
    childWidget: {
      widget: 'group-time-select',
      formDataMap: {
        selectValue: 'allocate_shift_start_day',
        timeValue: 'allocate_shift_start_time'
      },
      widgetAttrs: {
        options: [...defaultStartDayList],
        clearable: true
      }
    }
  },
  {
    formDataKey: '_proxy_allocate_shift_end',
    labelName: '班次结束时间',
    labelWidth: '100px',
    required: true,
    childWidget: {
      widget: 'group-time-select',
      formDataMap: {
        selectValue: 'allocate_shift_end_day',
        timeValue: 'allocate_shift_end_time'
      },
      widgetAttrs: {
        options: [...defaultEndDayList],
        clearable: true
      }
    }
  },
  {
    formDataKey: '_proxy_latest_arrival_time',
    labelName: '最晚到达',
    labelWidth: '100px',
    required: true,
    childWidget: {
      widget: 'group-time-select',
      formDataMap: {
        selectValue: 'latest_arrival_day',
        timeValue: 'latest_arrival_time'
      },
      widgetAttrs: {
        options: [...defaultEndDayList],
        clearable: true
      }
    }
  },
  {
    formDataKey: '_proxy_latest_send',
    labelName: '最晚发出',
    labelWidth: '100px',
    required: true,
    childWidget: {
      widget: 'group-time-select',
      dictKey: 'delivery_day',
      formDataMap: {
        selectValue: 'latest_send_day',
        timeValue: 'latest_send_time'
      },
      widgetAttrs: {
        options: [...defaultEndDayList],
        clearable: true
      }
    }
  },
  {
    formDataKey: 'remark',
    labelName: '班次说明',
    labelWidth: '100px',
    span: 24,
    childWidget: {
      widget: 'input',
      widgetAttrs: {
        clearable: true,
        maxlength: '100',
        'show-word-limit': true
      }
    }
  }
])
