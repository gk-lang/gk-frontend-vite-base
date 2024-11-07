import { onMounted, ref } from "vue";
import {
  queryOpenAppList,
  queryAppBindApiPageList,
  deleteOpenApp,
} from "@/api/application";
import { queryApiDocTypeTree } from "@/api/archive";
import { cloneDeep } from "lodash-es";
export default function useBtnEventHandle({ router, user, searchFormItems }) {
  const searchFormRef = ref(null);
  const dialogAddOrEditIsShow = ref(false);
  const dialogApproveIsShow = ref(false);
  const tableLoading = ref(false);
  const tablePage = ref({});
  const formData = ref({
    approveStatus: "0",
    apiDocTypeId: "",
  });
  const tableData = ref([]);
  const treeData = ref([]);
  const multipleSelection = ref([]);
  const editTableRowData = ref(null);
  const editOpenAppData = ref(null);
  const approveDataList = ref([]);

  function resetSearchForm() {
    searchFormRef.value.resetFields();
    formData.value.apiDocTypeId = "";
  }
  async function searchTableData(btnItem, resolve) {
    tableLoading.value = true;
    if (btnItem?.widgetAttrs) {
      btnItem.widgetAttrs.loading = true;
    }
    if (btnItem?.eventKey === "searchTableData") {
      tablePage.value.page_num = 1;
    }
    let resp = {};
    try {
      const params = generateSearchParams();
      resp = await queryAppBindApiPageList(params);
    } catch (error) {
      resp = {
        code: 200,
        data: [],
        total_num: 0,
      };
    } finally {
      tableLoading.value = false;
      if (btnItem?.widgetAttrs) {
        btnItem.widgetAttrs.loading = false;
      }
    }
    if (resolve) {
      resolve();
    }
    if (resp.code === "200") {
      const docTypeMap = {
        1: "Markdown",
        2: "富文本",
        3: "附件",
      };
      resp?.data?.dataList?.forEach((x, i) => {
        x.sortIndex = i + 1;
        x.createTime = window
          .$dayjs(x.createTime)
          .format("YYYY-MM-DD HH:mm:ss");
        x.updateTime = window
          .$dayjs(x.updateTime)
          .format("YYYY-MM-DD HH:mm:ss");
        x.docTypeTitle = docTypeMap[x.docType];
      });
      tableData.value = resp?.data?.dataList || [];
      tablePage.value.total_num = resp?.data?.totalPages || 0;
    }
  }
  function handlePageChange(page) {
    searchTableData();
  }
  function selectionChange(params) {
    multipleSelection.value = params.multipleSelection;
  }
  function generateSearchParams() {
    const params = {
      ...formData.value,
    };
    params.pageNo = tablePage.value.page_num;
    params.pageSize = tablePage.value.page_size;
    params.admin = true;
    Object.keys(params).forEach((key) => {
      if (!params[key]) delete params[key];
    });
    return params;
  }
  function openApproveDialog(row) {
    if (row.openAppApproveStatus === 0) {
      return window.$msg.error("请先对应用进行审核！");
    }
    if (row.openAppApproveStatus === 2) {
      return window.$msg.error("该应用未审核通过，无法进行Api审批！");
    }
    dialogApproveIsShow.value = true;
    editTableRowData.value = row;
    approveDataList.value = cloneDeep([row]);
  }
  function batchApproveTableRow() {
    if (!multipleSelection.value.length) {
      return window.$msg.error("请先勾选需要进行审批的表格数据!");
    } else {
      dialogApproveIsShow.value = true;
      approveDataList.value = cloneDeep(multipleSelection.value);
    }
  }
  function handleTableOperation(data) {
    if (data.btnItem.eventKey === "openApproveDialog") {
      openApproveDialog(data.row);
    }
    if (data.btnItem.eventKey === "delete") {
      handleTableDataDelete([data.row]);
    }
    if (data.btnItem.eventKey === "preview") {
      router.push(
        `/archive-preview?id=${data.row.id}&apiCode=${data.row.serviceCode}`
      );
    }
  }
  function handleTableDataDelete(itemList) {
    let idList = [];
    if (itemList?.length) {
      idList = itemList.map((x) => x.id);
    } else {
      idList = multipleSelection.value.map((x) => x.id);
    }
    if (!idList?.length) {
      return window.$msg.error("请在勾选后再进行删除操作!");
    }
    window.$msgbox
      .confirm("是否确定删除?", "删除确认", {
        confirmButtonText: "是的",
        cancelButtonText: "取消",
        type: "warning",
      })
      .then(async () => {
        const resp = await deleteOpenApp({ id: idList[0] });
        if (resp.code === "200") {
          searchTableData();
          window.$msg.success(resp.message || "删除成功");
        } else {
          window.$msg.error(resp.message || "删除失败");
        }
      });
  }
  async function searchAppOptionList() {
    if (searchFormItems?.value) {
      let resp = await queryOpenAppList({ pageNo: 1, pageSize: 999999 });
      if (resp.code === "200") {
        resp?.data?.dataList?.forEach((x, i) => {
          x.sortIndex = i + 1;
          x.label = x.appName;
          x.value = x.id + "";
        });
        const item = searchFormItems.value.find(
          (x) => x.formDataKey === "openAppId"
        );
        item.childWidget.widgetAttrs.options = resp?.data?.dataList || [];
      }
    }
  }
  async function loadApiTypeTreeData() {
    const resp = await queryApiDocTypeTree({
      parentId: 0,
      queryAllSub: 1,
      level: 100,
    });
    const item = searchFormItems.value.find(
      (x) => x.formDataKey === "apiDocTypeId"
    );
    resp.data.forEach((item) => {
      item.value = item.id;
      item.label = item.name;
    });
    const apiRoot = resp.data.find((x) => x.menu === 'api')
    item.childWidget.widgetAttrs.options = apiRoot?.children || [];
  }
  onMounted(() => {
    searchAppOptionList();
    loadApiTypeTreeData();
    setTimeout(() => {
      searchTableData();
    });
  });
  return {
    searchFormRef,
    tableLoading,
    tablePage,
    formData,
    tableData,
    treeData,
    searchTableData,
    editTableRowData,
    editOpenAppData,
    dialogApproveIsShow,
    dialogAddOrEditIsShow,
    resetSearchForm,
    handlePageChange,
    handleTableDataDelete,
    selectionChange,
    handleTableOperation,
    batchApproveTableRow,
    approveDataList,
  };
}
