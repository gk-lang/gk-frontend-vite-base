import { onMounted, ref } from "vue";
import { queryOpenAppList, deleteOpenApp } from "@/api/application";
import { queryOpenApiList } from "@/api/open-api";
export default function useBtnEventHandle({ router, user }) {
  const appSearchFormRef = ref(null);
  const apiSearchFormRef = ref(null);
  const dataTableRef = ref();
  const dialogAddOrEditIsShow = ref(false);
  const dialogAppInfoIsShow = ref(false);
  const dialogAppApiRelateIsShow = ref(false);

  const appTableLoading = ref(false);
  const apiTableLoading = ref(false);
  const appTablePage = ref({ page_num: 1, page_size: 50 });
  const apiTablePage = ref({});
  const appSearchFormData = ref({
    name: "",
    approveStatus:""
  });
  const apiSearchFormData = ref({
    apiDocTypeId: "",
  });
  const appTableData = ref([]);
  const apiTableData = ref([]);
  const multipleSelection = ref([]);
  const editTableRowData = ref(null);
  const editOpenAppData = ref(null);

  function openDialogAddOrEdit(row) {
    dialogAddOrEditIsShow.value = true;
    editOpenAppData.value = row;
  }

  function openDialogDetailAppInfo(row) {
    dialogAppInfoIsShow.value = true;
    editOpenAppData.value = row;
  }
  function openDialogAppApiRelateIsShow(row) {
    dialogAppApiRelateIsShow.value = true;
    editOpenAppData.value = row;
  }
  function openApiListPage(row) {
    router.push(`/api-list?id=${row?.id || ""}`);
  }
  function resetAppSearchForm() {
    appSearchFormRef.value.resetFields();
    appSearchFormData.value.apiDocTypeId = "";
  }
  function resetApiSearchForm() {
    apiSearchFormRef.value.resetFields();
    apiSearchFormData.value.apiDocTypeId = "";
  }
  async function searchAppTableData(btnItem, resolve) {
    appTableLoading.value = true;
    if (btnItem?.widgetAttrs) {
      btnItem.widgetAttrs.loading = true;
    }
    if (btnItem?.eventKey === "searchAppTableData") {
      appTablePage.value.page_num = 1;
    }
    let resp = {};
    try {
      const params = generateSearchParams1();
      resp = await queryOpenAppList(params);
    } catch (error) {
      resp = {
        code: 200,
        data: [],
        total_num: 0,
      };
    } finally {
      appTableLoading.value = false;
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
      apiTableData.value = [];
      appTableData.value = resp?.data?.dataList || [];
      appTablePage.value.total_num = resp?.data?.totalPages || 0;
    }
  }
  async function searchApiTableData(btnItem, resolve) {
    apiTableLoading.value = true;
    if (btnItem?.widgetAttrs) {
      btnItem.widgetAttrs.loading = true;
    }
    if (btnItem?.eventKey === "searchTableData") {
      apiTablePage.value.page_num = 1;
    }
    let resp = {};
    try {
      const params = generateSearchParams2();
      resp = await queryOpenApiList(params);
    } catch (error) {
      resp = {
        code: 200,
        data: [],
        total_num: 0,
      };
    } finally {
      apiTableLoading.value = false;
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
      apiTableData.value = resp?.data?.dataList || [];
      apiTablePage.value.total_num = resp?.data?.totalPages || 0;
    }
  }
  function handlePageChange(page) {
    // searchTableData();
  }
  function selectionChange(params) {
    multipleSelection.value = params.multipleSelection;
  }
  function generateSearchParams1() {
    const params = {
      ...appSearchFormData.value,
    };
    params.pageNo = appTablePage.value.page_num;
    params.pageSize = appTablePage.value.page_size;
    params.admin = user.is_admin === "Y";
    return params;
  }
  function generateSearchParams2() {
    const params = {
      ...apiSearchFormData.value,
    };
    params.pageNo = apiTablePage.value.page_num;
    params.pageSize = apiTablePage.value.page_size;
    if (!params.name) delete params.name;
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
  function handleAppTableRowClick(row) {
    apiSearchFormData.value.appId = row.id;
    searchApiTableData();
  }
  function handleTableOperation(data) {
    if (data.btnItem.eventKey === "openApiListPage") {
      openApiListPage(data.row);
    }
    if (data.btnItem.eventKey === "openDialogDetailAppInfo") {
      openDialogDetailAppInfo(data.row);
    }
    if (data.btnItem.eventKey === "openDialogAddOrEdit") {
      openDialogAddOrEdit(data.row);
    }
    
    if (data.btnItem.eventKey === "openDialogAppApiRelateIsShow") {
      openDialogAppApiRelateIsShow(data.row);
    }
    if (data.btnItem.eventKey === "handleTableDataDelete") {
      handleTableDataDelete(data.row);
    }
  }
  function handleTableDataDelete(row) {
    window.$msgbox
      .confirm("是否确定删除?", "删除确认", {
        confirmButtonText: "是的",
        cancelButtonText: "取消",
        type: "warning",
      })
      .then(async () => {
        const resp = await deleteOpenApp({ id: row.id });
        if (resp.code === "200") {
          searchAppTableData();
          window.$msg.success(resp.message || "删除成功");
        } else {
          window.$msg.error(resp.message || "删除失败");
        }
      });
  }
  onMounted(() => {
    setTimeout(() => {
      searchAppTableData();
      // dataTableRef.value.elTableRef.setCurrentRow(appTableData.value[0]);
    });
  });
  return {
    appSearchFormRef,
    apiSearchFormRef,
    dataTableRef,
    appTableLoading,
    apiTableLoading,
    appTableData,
    apiTableData,
    appTablePage,
    apiTablePage,
    appSearchFormData,
    apiSearchFormData,

    searchAppTableData,
    searchApiTableData,
    resetAppSearchForm,
    resetApiSearchForm,
    editTableRowData,
    editOpenAppData,
    dialogAddOrEditIsShow,
    dialogAppInfoIsShow,
    dialogAppApiRelateIsShow,
    openDialogDetailAppInfo,
    openDialogAddOrEdit,
    openDialogAppApiRelateIsShow,
    handlePageChange,
    handleTableDataDelete,
    selectionChange,
    handleTableOperation,
    handleAppTableRowClick,
  };
}
