<!-- 应用审核弹框 -->
<template>
  <dialog-base
    v-model:visible="visibleDialog"
    :title="dialogTitle"
    width="800px"
    custom-class="dialog-add-or-edit archive-type"
    @cancel="cancel()"
    @confirm="confirm()"
  >
    <div>
      <DynamicForm
        :loading="saveLoading"
        ref="dynamicFormRef"
        :formItems="formItems"
        v-model="formData"
      />
    </div>
  </dialog-base>
</template>
<script>
import { cloneDeep } from "lodash-es";
import { ref, computed, watch } from "vue";
import { approveFormItems } from "./json-config";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DialogBase from "@/components/dialog/dialog-base.vue";
import { approvalOpenApp } from "@/api/application";
import {
  queryOperatorByName,
  queryConsignorByName,
  queryLogisticsCenterByName,
} from "@/api/user";
export default {
  name: "DialogAddOrEdit",
  components: { DynamicForm, DialogBase },
  props: {
    isShow: {
      type: Boolean,
      default: "",
    },
    editFormData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props, context) {
    const dialogTitle = ref("审核应用");
    const dynamicFormRef = ref(null);
    const saveLoading = ref(false);
    const formData = ref({});
    const defaultFormData = ref({
      id: "",
      approve: "",
      approveMsg: "",
      dbFlag: "",
    });
    const formItems = ref([]);
    const visibleDialog = computed({
      get() {
        return props.isShow;
      },
      set(val) {
        context.emit("update:isShow", val);
      },
    });

    async function initFormData(callback) {
      dialogTitle.value = "审批应用";
      formItems.value = cloneDeep(approveFormItems.value);
      formData.value = cloneDeep(defaultFormData.value);
      formData.value.id = props.editFormData?.id || "";
      // await initSelectOptions();
      callback();
    }
    async function initSelectOptions() {
      const resp1 = await queryOperatorByName({});
      const resp2 = await queryConsignorByName({});
      const resp3 = await queryLogisticsCenterByName({});
      const resultOptions = {
        operatorId: resp1.data || [],
        consignorId: resp2.data || [],
        logisticsCenterId: resp3.data || [],
      };
      [("operatorId", "consignorId", "logisticsCenterId")].forEach((key) => {
        const item = formItems.value.find((x) => x.formDataKey === key);
        item.childWidget.widgetAttrs.options = resultOptions[key];
      });
    }
    function generateSaveParams() {
      const params = cloneDeep(formData.value);
      // 运营方
      if (params._proxy_operatorId) {
        params.operatorId = params._proxy_operatorId.selectRow.operatorId
      }
      // 委托方
      if (params._proxy_consignorId) {
        params.conId = params._proxy_consignorId.selectRow.conId
      }
      // 物流中心
      if (params._proxy_logisticsCenterId) {
        params.ldcId = params._proxy_logisticsCenterId.selectRow.ldcId
      }
      ['_proxy_operatorId','_proxy_consignorId','_proxy_logisticsCenterId'].forEach((key) => {
        delete params[key]
      })
      return params;
    }
    async function handleSave() {
      const params = generateSaveParams();
      let resp = null;
      saveLoading.value = true;
      try {
        resp = await approvalOpenApp(params);
      } catch (error) {
        saveLoading.value = false;
        console.error(error);
      }
      saveLoading.value = false;
      if (resp && resp.code == 200) {
        visibleDialog.value = false;
        window.$msg.success(resp.message || "审核成功!");
        context.emit("save", true);
      } else {
        window.$msg.error(resp.message || "审核失败!");
      }
    }
    function cancel() {
      visibleDialog.value = false;
      context.emit("close");
    }
    function confirm() {
      dynamicFormRef.value.elFormRef.validate((valid, fields) => {
        if (valid) {
          handleSave();
        }
      });
    }
    watch(
      () => props.isShow,
      (val) => {
        if (val) {
          initFormData(() => {
            setTimeout(() => {
              if (dynamicFormRef.value && dynamicFormRef.value.elFormRef) {
                dynamicFormRef.value.elFormRef.clearValidate();
              }
            });
          });
        }
      }
    );

    return {
      saveLoading,
      visibleDialog,
      dynamicFormRef,
      confirm,
      cancel,
      dialogTitle,
      formData,
      defaultFormData,
      formItems,
    };
  },
};
</script>
<style lang="scss">
.el-overlay {
  .el-overlay-dialog {
    div[custom-class*="dialog-add-or-edit warehouse-shift"] {
      .jzt-global-modal-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tip-msg {
          display: flex;
          align-items: center;
          color: var(--el-color-primary);
          /* color: var(--el-color-warning); */
          background: #ddefff;
          border-radius: 4px 4px 4px 4px;
          border: 1px solid #0083ff;
          padding: 5px 20px 5px 7px;
          .el-icon {
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
