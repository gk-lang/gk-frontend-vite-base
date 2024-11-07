<!-- 应用新增修改弹框 -->
<template>
  <dialog-base
    v-model:visible="visibleDialog"
    :title="dialogTitle"
    width="800px"
    custom-class="dialog-app-info"
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
import { ElMessage } from "element-plus";
import { appInfoFormItems } from "./json-config";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DialogBase from "@/components/dialog/dialog-base.vue";
import { useUserStore } from "@/store/modules/user";

import { queryOpenAppDetail, saveOpenApp } from "@/api/application";

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
    const userStore = useUserStore();
    const disabledProps = [
      "_proxy_warehouse_name",
      // '_proxy_allocate_center',
      // 'allocate_shift_id'
    ];
    const dialogTitle = ref("应用详情");
    const dynamicFormRef = ref(null);
    const saveLoading = ref(false);
    const formData = ref({});
    const optionsMap = ref({});

    const defaultFormData = ref({
      appName: "",
      appNameEn: "",
      appDesc: "",
      appOs: "",
      appType: "",
      website: "",
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
    const user = computed(() => userStore.getUserInfo);

    async function initFormData(callback) {
      formItems.value = cloneDeep(appInfoFormItems.value);
      if (props.editFormData?.id) {
        dialogTitle.value = "应用详情";
        formData.value = props.editFormData;
        const resp = await queryOpenAppDetail({
          id: props.editFormData?.id,
        });
        if (resp.code == 200) {
          formData.value = resp.data||{}
          
        }
        if (formData.value["appType"] === "app") {
          const item = formItems.value.find((x) => x.formDataKey === "appOs");
          item.hidden = false;
        } else {
          const item = formItems.value.find((x) => x.formDataKey === "appOs");
          item.hidden = true;
        }
      } else {
        dialogTitle.value = "应用详情";
        formData.value = JSON.parse(JSON.stringify(defaultFormData.value));
      }
      callback();
    }

    function generateSaveParams() {
      const params = cloneDeep(formData.value);
      // params.menu = "";
      return params;
    }
    async function handleSave() {
      const params = generateSaveParams();
      let resp = null;
      saveLoading.value = true;
      try {
        resp = await saveOpenApp(params);
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
    div[custom-class*="dialog-app-info"] {
      .dynamic-form{
        .widgets-text{
          line-height: 1;
        }
      }
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
