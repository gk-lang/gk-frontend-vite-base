import { onMounted, ref } from "vue";
import {
  queryApiDocTypeTree,
  deleteApiDocType,
  queryApiDocList,
  deleteApiDoc,
} from "@/api/archive";
import { sendRequestSaveHistoryData } from "./genHisFormData";
export default function useBtnEventHandle({ router, user }) {
  const searchFormRef = ref(null);
  const dialogSaveArchiveTypeIsShow = ref(false);
  const tableLoading = ref(false);
  const tablePage = ref({});
  const formData = ref({
    apiDocTypeIds: "",
  });
  const tableData = ref([]);
  const treeData = ref([]);
  const multipleSelection = ref([]);
  const editTableRowData = ref(null);
  const editArchiveTypeData = ref(null);

  async function openAddOrEditPage({ row }) {
    if (row?.id) {
      router.push(`/archive-edit?id=${row.id}&apiCode=${row.serviceCode}&mainType=${row.mainType}`);
    } else {
      router.push(`/archive-add`);
    }
  }
  function openDialogSaveArchiveType(data) {
    dialogSaveArchiveTypeIsShow.value = true;
    editArchiveTypeData.value = data;
  }
  function resetSearchForm() {
    // sendRequestSaveHistoryData();
    searchFormRef.value.resetFields();
    formData.value.apiDocTypeIds = "";
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
      resp = await queryApiDocList(params);
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
        x.mainType = x.type===1?'api-doc':'common-doc'
      });
      tableData.value = resp?.data?.dataList || [];
      tablePage.value.total_num = resp?.data?.totalRecords || 0;
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
    if (!params.name) delete params.name;
    // params.ids = multipleSelection.value.map((x) => x.id).join(",");
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
  function handleDialogSaveArchiveTypeSave() {
    loadTreeData();
  }
  function handleTreeNodeClick(treeNode) {
    formData.value.apiDocTypeIds = treeNode.id;
    searchTableData();
  }
  function handleTableOperation(data) {
    if (data.btnItem.eventKey === "edit") {
      openAddOrEditPage(data);
    }
    if (data.btnItem.eventKey === "delete") {
      handleTableDataDelete([data.row]);
    }
    if (data.btnItem.eventKey === "preview") {
      router.push(`/archive-preview?apiCode=${data.row.serviceCode}&id=${data.row.id}`);
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
        const resp = await deleteApiDoc({ idList });
        if (resp.code === "200") {
          searchTableData();
          window.$msg.success(resp.message || "删除成功");
        } else {
          window.$msg.error(resp.message || "删除失败");
        }
      });
  }
  onMounted(() => {
    loadTreeData();
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
    editArchiveTypeData,
    dialogSaveArchiveTypeIsShow,
    openDialogSaveArchiveType,
    removeTreeNode,
    handleDialogSaveArchiveTypeSave,
    openAddOrEditPage,
    resetSearchForm,
    handlePageChange,
    handleTableDataDelete,
    selectionChange,
    handleTableOperation,
    handleTreeNodeClick,
  };
}
