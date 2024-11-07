import { onMounted, ref } from "vue";
import {
  getSelectAppName,
  getSelectApiName,
  getLogDetailList,
  getLogResStatistics,
} from "@/api/monitor-manage";
import { queryOpenAppList, deleteOpenApp } from "@/api/application";

export default function useBtnEventHandle(searchFormItems, user) {
  const searchFormRef = ref(null);
  const isShowLogDetailDialog = ref(false);

  const tabActiveKey = ref("first");
  const tableLoading1 = ref(false);
  const tablePage1 = ref({});
  const tableData1 = ref([]);
  const multipleSelection1 = ref([]);
  const editTableRowData1 = ref(null);

  const tableLoading2 = ref(false);
  const tablePage2 = ref({});
  const tableData2 = ref([]);
  const multipleSelection2 = ref([]);
  const editTableRowData2 = ref(null);

  // const user = store.state.user
  const formData = ref({
    range_date: setDefaultUpdateDateRange(),
  });

  async function openDetailsDialog({ row }) {
    isShowLogDetailDialog.value = true;
    editTableRowData1.value = row || null;
  }
  function resetSearchForm() {
    searchFormRef.value.resetFields();
    const item = searchFormItems.value.find((x) => x.formDataKey === "appId");
    formData.value.appId = item.childWidget.widgetAttrs.options[0]?.appId;
  }
  async function searchTableData(btnItem, resolve) {
    if (tabActiveKey.value === "first") {
      await searchTableData1(btnItem, resolve);
    }
    if (tabActiveKey.value === "second") {
      await searchTableData2(btnItem, resolve);
    }
  }
  async function searchTableData1(btnItem, resolve) {
    if (btnItem?.eventKey === "searchTableData") {
      // if (!formData.value.province_code_list.length) {
      //   return resolve('error', '请选择发收货省份!')
      // }
    }
    tableLoading1.value = true;
    if (btnItem?.widgetAttrs) {
      btnItem.widgetAttrs.loading = true;
    }
    if (btnItem?.eventKey === "searchTableData") {
      tablePage1.value.page_num = 1;
    }
    let resp = {};
    try {
      const params = await generateSearchParams("first");
      resp = await getLogDetailList(params);
    } catch (error) {
      resp = {
        code: 200,
        data: [],
        total_num: 0,
      };
    } finally {
      tableLoading1.value = false;
      if (btnItem?.widgetAttrs) {
        btnItem.widgetAttrs.loading = false;
      }
    }
    if (resolve) {
      resolve();
    }
    if (resp.code === 200) {
      resp?.data?.records?.forEach((x, i) => {
        x.sortIndex = i + 1;
      });
      tableData1.value = resp?.data?.records || [];
      tablePage1.value.total_num = parseInt(resp?.data?.total || 0);
    }
  }
  async function searchTableData2(btnItem, resolve) {
    if (btnItem?.eventKey === "searchTableData") {
      // if (!formData.value.province_code_list.length) {
      //   return resolve('error', '请选择发收货省份!')
      // }
    }
    tableLoading2.value = true;
    if (btnItem?.widgetAttrs) {
      btnItem.widgetAttrs.loading = true;
    }
    if (btnItem?.eventKey === "searchTableData") {
      tablePage2.value.page_num = 1;
    }
    let resp = {};
    try {
      const params = await generateSearchParams("second");
      resp = await getLogResStatistics(params);
    } catch (error) {
      resp = {
        code: 200,
        data: [],
        total_num: 0,
      };
    } finally {
      tableLoading2.value = false;
      if (btnItem?.widgetAttrs) {
        btnItem.widgetAttrs.loading = false;
      }
    }
    if (resolve) {
      resolve();
    }
    if (resp.code === 200) {
      resp?.data?.records?.forEach((x, i) => {
        x.sortIndex = i + 1;
      });
      tableData2.value = resp?.data?.records || [];
      tablePage2.value.total_num = parseInt(resp?.data?.total || 0);
    }
  }
  function handlePageChange1(page) {
    searchTableData1();
  }
  function selectionChange1(params) {
    multipleSelection1.value = params.multipleSelection;
  }
  function handlePageChange2(page) {
    searchTableData2();
  }
  function selectionChange2(params) {
    multipleSelection2.value = params.multipleSelection;
  }
  async function generateSearchParams(type) {
    const params = {
      ...formData.value,
      apiCode: "",
      startTime: "",
      endTime: "",
      type: "PUSH",
    };
    if (type === "first") {
      params.page = tablePage1.value.page_num;
      params.limit = tablePage1.value.page_size;
      // params.ids = multipleSelection1.value.map(x => x.id).join(',')
    }
    if (type === "second") {
      params.page = tablePage2.value.page_num;
      params.limit = tablePage2.value.page_size;
      // params.ids = multipleSelection2.value.map(x => x.id).join(',')
    }
    if (params.status && params.status.length) {
      params.status = params.status.join();
    }
    if (params.range_date && params.range_date.length) {
      params.startTime = window
        .$dayjs(params.range_date[0])
        .format("YYYY-MM-DD");
      params.endTime = window.$dayjs(params.range_date[1]).format("YYYY-MM-DD");
    }
    delete params.range_date;
    return params;
  }
  function formatDate(date) {
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const d = date.getDate().toString().padStart(2, "0");
    const hh = date.getHours().toString().padStart(2, "0");
    const mm = date.getMinutes().toString().padStart(2, "0");
    return `${y}-${m}-${d} ${hh}:${mm}`;
  }
  function setDefaultUpdateDateRange() {
    // 创建今天日期的对象
    const today = new Date();
    // 重置时间为0点0分0秒0毫秒，以得到今天0点0分
    today.setHours(0, 0, 0, 0);

    // 获取昨天的日期
    const yesterday = new Date(today);
    // 将日期减去1天
    yesterday.setDate(yesterday.getDate() - 1);

    // 获取今天的23点59分的日期对象
    const endOfToday = new Date(today);
    endOfToday.setHours(23, 59, 0, 0);

    return [formatDate(yesterday), formatDate(endOfToday)];
  }
  async function searchAppOptionList() {
    if (searchFormItems?.value) {
      const isAdmin = user.value.user_type === "super";
      let resp = await queryOpenAppList({
        pageNo: 1,
        pageSize: 999999,
        admin: isAdmin,
      });
      if (resp.code === "200") {
        resp?.data?.dataList?.forEach((x, i) => {
          x.sortIndex = i + 1;
          x.label = x.appName;
          x.value = x.appId + "";
        });
        const item = searchFormItems.value.find(
          (x) => x.formDataKey === "appId"
        );
        item.childWidget.widgetAttrs.options = resp?.data?.dataList || [];
        if (!isAdmin) {
          item.childWidget.widgetAttrs.clearable = false;
          formData.value.appId = resp?.data?.dataList[0]?.appId;
        } else {
          item.childWidget.widgetAttrs.clearable = true;
        }
        setTimeout(() => {
          searchTableData1();
          searchTableData2();
        }, 100);
      }
    }
  }
  onMounted(() => {
    searchAppOptionList();
  });
  return {
    searchFormRef,
    tabActiveKey,
    tableLoading1,
    tablePage1,
    tableData1,
    tableLoading2,
    tablePage2,
    tableData2,
    formData,
    searchTableData,
    searchTableData1,
    searchTableData2,
    isShowLogDetailDialog,
    editTableRowData1,
    editTableRowData2,
    openDetailsDialog,
    resetSearchForm,
    handlePageChange1,
    selectionChange1,
    handlePageChange2,
    selectionChange2,
  };
}
