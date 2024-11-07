<!-- 文档分类新增修改弹框 -->
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
import { ElMessage } from "element-plus";
import { archiveTypeFormItems } from "./json-config";
import DynamicForm from "@/components/dynamic-widget/dynamic-form.vue";
import DialogBase from "@/components/dialog/dialog-base.vue";
import { useUserStore } from "@/store/modules/user";

import {
  saveOrUpdateApiDocType,
  queryApiDocTypeTree,
  deleteApiDocType,
} from "@/api/archive";

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
    const dialogTitle = ref("新增文档分类");
    const dynamicFormRef = ref(null);
    const saveLoading = ref(false);
    const formData = ref({});
    const optionsMap = ref({});

    const defaultFormData = ref({
      parentId: null,
      menu:''
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
      formItems.value = cloneDeep(archiveTypeFormItems.value);
      const resp = await queryApiDocTypeTree({
        parentId: 0,
        queryAllSub: 1,
        level: 100,
      });
      const parentNodeItem = formItems.value.find(
        (x) => x.formDataKey === "parentId"
      );
      parentNodeItem.childWidget.widgetAttrs.options = resp.data || [];
      if (props.editFormData?.id) {
        dialogTitle.value = "编辑文档分类";
        formData.value = props.editFormData;
      } else {
        dialogTitle.value = "新增文档分类";
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
        resp = await saveOrUpdateApiDocType(params);
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
