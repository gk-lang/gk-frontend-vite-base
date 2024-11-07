import { ref, watch, computed, inject } from "vue";
// import {resolveWidgets} from "../widgets/index.js";
// import { getDataByDictKey, getDataBySpecialKey } from '../common/indexedDB.js'
import { injectDataKey } from "../common/constants.js";
export function baseProps(type) {
  // const widgets = resolveWidgets()
  // const formItemOption = widgets[type].formItemDefaultOption()
  // const formItemOption = {
  //   childWidget: {
  //     widgetAttrs: {},
  //   },
  // };
  return {
    widgetInfo: {
      type: Object,
      default: () => {
        return {
        };
      },
    },
    tableRowIndex: {
      type: Number,
      default: () => -1,
    },
  };
}

export function useWidgetBase(props, emits) {
  const injectData = inject(injectDataKey);
  const widgetValueLabel = ref(null);
  const lastModelValue = ref(null);
  const { formData, widgets, resetFieldFormDataKey } = injectData;
  const dictKeyData = ref([]);
  const specialData = ref([]);

  const formDataKey = computed(() => {
    return props.widgetInfo.formDataKey;
  });

  const formDataIsArray = computed(() => {
    if (
      props.tableRowIndex !== undefined &&
      props.tableRowIndex !== null &&
      props.tableRowIndex !== -1
    ) {
      return true;
    } else {
      return false;
    }
  });

  const formDataModel = computed(() => {
    if (formDataIsArray.value) {
      return formData.value[props.tableRowIndex];
    } else {
      return formData.value;
    }
  });

  const widgetValue = computed({
    get() {
      mapWidgetFormData("setCompValueMap");
      return formDataModel.value[formDataKey.value];
    },
    set(value) {
      formDataModel.value[formDataKey.value] = value;
      mapWidgetFormData("setFormDataMap");
    },
  });

  // 映射组件的formData数据值
  function mapWidgetFormData(type) {
    const widgetName = props.widgetInfo.widget;
    if (["slot", "render"].includes(widgetName)) return;
    if (props.widgetInfo._widget_type !== "field-widget") return;
    const info = widgets.value[widgetName];

    const setCompValueMap = () => {
      if (!formDataModel.value[formDataKey.value]) {
        if (info) {
          const defaultV = info.widgetDefaultValue(
            props.widgetInfo,
            formDataModel.value
          );
          formDataModel.value[formDataKey.value] = defaultV.value;
        } else {
          formDataModel.value[formDataKey.value] = "";
        }
      }
    };
    if (!props.widgetInfo.formDataMap) {
      if (type === "setCompValueMap") setCompValueMap();
      return;
    }
    if (widgetName) {
      if (info && typeof info.widgetFormDataMap === "function") {
        info.widgetFormDataMap(
          props.widgetInfo,
          formDataModel.value,
          formDataKey.value,
          type
        );
      } else if (type === "setCompValueMap") {
        setCompValueMap();
      }
    }
  }
  // function mapWidgetFormData(type) {
  //   const widgetName = props.widgetInfo.widget
  //   if (['slot', 'render'].includes(widgetName)) return
  //   if (props.widgetInfo._widget_type !== 'field-widget') return
  //   if (!props.widgetInfo.formDataMap) {
  //     formDataModel.value[formDataKey.value] =
  //       formDataModel.value[formDataKey.value] || ''
  //     return
  //   }
  //   if (widgetName) {
  //     const info = widgets.value[widgetName]
  //     if (info && typeof info.widgetFormDataMap === 'function') {
  //       info.widgetFormDataMap(
  //         props.widgetInfo,
  //         formDataModel.value,
  //         formDataKey.value,
  //         type
  //       )
  //     }
  //   }
  // }

  function resetFieldFormData() {
    const widgetName = props.widgetInfo.widget;
    if (widgetName) {
      const info = widgets.value[widgetName];
      const defaultValue = info.widgetDefaultValue(
        props.widgetInfo,
        formDataModel.value
      );
      formDataModel.value[formDataKey.value] = defaultValue.value;
    }
  }

  const widgetInfo = computed(() => {
    return props.widgetInfo;
  });

  const widgetAttrs = computed(() => {
    if (!widgetInfo.value.widgetAttrs) {
      const newWidgetAttrs = JSON.parse(JSON.stringify(props.widgetInfo));
      const needToDeletes = ["widgetAttrs", "widget", "formDataKey"];
      needToDeletes.forEach((key) => {
        delete newWidgetAttrs[key];
      });
      return newWidgetAttrs;
    }
    return widgetInfo.value.widgetAttrs || {};
  });

  const dictKey = computed(() => {
    return props.widgetInfo.dictKey || "";
  });

  const specialKey = computed(() => {
    return props.widgetInfo.specialKey || "";
  });

  const isDisabledField = computed(() => {
    return widgetAttrs.value.disabled || widgetAttrs.value.isDisabled;
  });
  const widgetRootClass = computed(() => {
    return widgetAttrs.value.widgetRootClass || "";
  });
  const formatValue = computed(() => {
    if (typeof props.widgetInfo.format === "function") {
      return props.widgetInfo.format(widgetValue.value);
    }
    return widgetValue.value;
  });

  const isMapValueLabel = computed(() => {
    return props.widgetInfo.isMapValueLabel;
  });

  watch(()=>resetFieldFormDataKey, async (nv, ov) => {
    if (nv) {
      const key = nv.split("_")[0];
      if (key === formDataKey.value || key === "all") {
        resetFieldFormData();
      }
    }
  });

  watch(
    dictKey,
    async (val) => {
      if (val) {
        // dictKeyData.value = await getDataByDictKey(val)
      }
    },
    { immediate: true }
  );

  watch(
    specialKey,
    async (key) => {
      if (key) {
        // specialData.value = await getDataBySpecialKey(
        //   key,
        //   props.widgetInfo.specialKeyPayload || {}
        // )
      }
    },
    { immediate: true }
  );
  return {
    dictKey,
    dictKeyData,
    specialKey,
    specialData,
    formDataKey,
    formatValue,
    widgetValue,
    widgetAttrs,
    widgetValueLabel,
    isDisabledField,
    isMapValueLabel,
    widgetRootClass,
    lastModelValue,
    injectData,
  };
}
