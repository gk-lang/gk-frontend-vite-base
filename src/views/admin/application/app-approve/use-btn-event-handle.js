import { onMounted, ref } from "vue";
import { queryOpenAppList,deleteOpenApp } from "@/api/application";
export default function useBtnEventHandle({ router, user }) {
  const searchFormRef = ref(null);
  const dialogApproveIsShow = ref(false);

  const tableLoading = ref(false);
  const tablePage = ref({});
  const formData = ref({
    name: "",
    approveStatus:"0",
    admin:""
  });
  const tableData = ref([]);
  const treeData = ref([]);
  const multipleSelection = ref([]);
  const editTableRowData = ref(null);
  const editOpenAppData = ref(null);

  
  function openApproveDialog(row) {
    dialogApproveIsShow.value = true;
    editTableRowData.value = row;
  }
  function resetSearchForm() {
    searchFormRef.value.resetFields();
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
      resp = await queryOpenAppList(params);
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
    return params;
  }
 
  
  function handleTableOperation(data) {
    if (data.btnItem.eventKey === "openApproveDialog") {
      openApproveDialog(data.row)
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
        const resp = await deleteOpenApp({ idList });
        if (resp.code === "200") {
          searchTableData();
          window.$msg.success(resp.message || "删除成功");
        } else {
          window.$msg.error(resp.message || "删除失败");
        }
      });
  }
  onMounted(() => {
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
    openApproveDialog,
    resetSearchForm,
    handlePageChange,
    handleTableDataDelete,
    selectionChange,
    handleTableOperation,
  };
}
