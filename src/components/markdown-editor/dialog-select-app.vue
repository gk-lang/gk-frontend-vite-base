<!-- 选择应用弹框 -->
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
        @notify="handleDynamicFormNotify"
      />
    </div>
  </dialog-base>
</template>
<script>
import { cloneDeep } from "lodash-es";
import { ref, computed, watch } from "vue";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DialogBase from "@/components/dialog/dialog-base.vue";
import { useUserStore } from "@/store/modules/user";

import { querySubscribeListByServiceCode } from "@/api/api-debugger";
import { batchSaveAppBindApi } from "@/api/application";

export default {
  name: "DialogAddOrEdit",
  components: { DynamicForm, DialogBase },
  props: {
    isShow: {
      type: Boolean,
      default: "",
    },
    editData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props, context) {
    const userStore = useUserStore();
   
    const dialogTitle = ref("关联应用");
    const dynamicFormRef = ref(null);
    const saveLoading = ref(false);
    const formData = ref({});

    const defaultFormData = ref({
      appName: "",
      appNameEn: "",
      appDesc: "",
      appOs: "",
      appType: "",
      website: "",
    });
    const formItems = ref([
      {
        formDataKey: "appIds",
        labelName: "关联应用",
        labelWidth: "120px",
        span: 24,
        childWidget: {
          widget: "checkbox",
          widgetAttrs: {
            options: [],
          },
        },
      }
    ]);
    const visibleDialog = computed({
      get() {
        return props.isShow;
      },
      set(val) {
        context.emit("update:isShow", val);
      },
    });
    const user = computed(() => userStore.getUserInfo);

    async function initFormData(callback) {
      formData.value.appIds = props.editData.appList.filter(x=>x.check).map(x=>x.value)
      formItems.value[0].childWidget.widgetAttrs.options = props.editData.appList
      callback();
    }

    function generateSaveParams() {
      const openAppIdList =  cloneDeep(formData.value.appIds)
      const openAuthorityAppList = [
        {
          authorityId: props.editData.articleMeta.authorityId,
          apiCode: props.editData.articleMeta.serviceCode,
          apiId: props.editData.articleMeta.apiId
        }
      ]
      return {
        openAppIdList,
        openAuthorityAppList
      };
    }
    async function handleSave() {
      const params = generateSaveParams();
      let resp = null;
      saveLoading.value = true;
      try {
        resp = await batchSaveAppBindApi(params);
      } catch (error) {
        saveLoading.value = false;
        console.error(error);
      }
      saveLoading.value = false;
      if (resp && resp.code == 200) {
        visibleDialog.value = false;
        window.$msg.success(resp.message || "保存成功!");
        context.emit("save", true);
      } else {
        window.$msg.error(resp.message || "保存失败!");
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
    function handleDynamicFormNotify(params) {
      const { formDataKey, eventType } = params;
      if (eventType === "change" && formDataKey === "appType") {
        if (formData.value["appType"] === "app") {
          const item = formItems.value.find((x) => x.formDataKey === "appOs");
          item.hidden = false;
          formData.value["appOs"] = "";
        } else {
          const item = formItems.value.find((x) => x.formDataKey === "appOs");
          item.hidden = true;
          formData.value["appOs"] = "";
        }
      }
    }
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
      handleDynamicFormNotify,
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
