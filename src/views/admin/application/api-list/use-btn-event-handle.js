import { onMounted, ref, nextTick } from "vue";
import { queryOpenAppList, deleteOpenApp } from "@/api/application";
import { queryApiDocTypeTree } from "@/api/archive";
import { queryAppBindApiPageList } from "@/api/application";
export default function useBtnEventHandle({ searchFormItems }) {
  const searchFormRef = ref(null);
  const dataTableRef = ref(null);
  const isShowPushApiConfigDialog = ref(false);

  const tableLoading = ref(false);
  const tablePage = ref({
    page_num: 1,
    page_size: 50,
  });
  const formData = ref({
    apiDocTypeId: "",
    parentId: "",
  });
  const tableData = ref([]);
  const treeData = ref([]);
  const multipleSelection = ref([]);
  const editTableRowData = ref(null);
  const pushApiConfigData = ref(null);

  function openPushApiConfigDialog({ row }) {
    isShowPushApiConfigDialog.value = true;
    pushApiConfigData.value = row;
  }
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
      resp?.data?.dataList?.forEach((x, i) => {
        x.sortIndex = i + 1;
        x.createTime = window
          .$dayjs(x.createTime)
          .format("YYYY-MM-DD HH:mm:ss");
        x.updateTime = window
          .$dayjs(x.updateTime)
          .format("YYYY-MM-DD HH:mm:ss");
      });
      tableData.value = resp?.data?.dataList || [];
      tablePage.value.total_num = resp?.data?.totalRecords || 0;
    }
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
    Object.keys(params).forEach((key) => {
      if (!params[key]) delete params[key];
    });
    return params;
  }
  async function loadTreeData() {
    const resp = await queryApiDocTypeTree({
      parentId: 0,
      queryAllSub: 1,
      level: 100,
    });
    treeData.value = resp.data || [];
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
  async function removeTreeNode(node, data) {
    const resp = await deleteApiDocType({
      id: data.id,
    });
    if (resp.code == 200) {
      loadTreeData();
      window.$msg.success(resp.message || "删除成功!");
    } else {
      window.$msg.error(resp.message || "删除失败!");
    }
  }
  function handleTreeNodeClick(treeNode) {
    formData.value.apiDocTypeId = treeNode.id;
    searchTableData();
  }
  function handleTableOperation(data) {
    if (data.btnItem.eventKey === "delete") {
      handleTableDataDelete([data.row]);
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
  onMounted(() => {
    searchAppOptionList();
    loadApiTypeTreeData();
    setTimeout(() => {
      searchTableData();
    });
  });
  return {
    searchFormRef,
    dataTableRef,
    tableLoading,
    tablePage,
    formData,
    tableData,
    treeData,
    searchTableData,
    editTableRowData,
    pushApiConfigData,
    isShowPushApiConfigDialog,
    openPushApiConfigDialog,
    removeTreeNode,
    resetSearchForm,
    handlePageChange,
    handleTableDataDelete,
    selectionChange,
    handleTableOperation,
    handleTreeNodeClick,
    multipleSelection,
  };
}
