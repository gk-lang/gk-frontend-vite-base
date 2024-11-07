import { computed, inject, h } from "vue";
import { injectDataKey } from "../common/constants.js";
export default function useDynamicWidget(props, emits) {
  const injectData = inject(injectDataKey);
  const { formData } = injectData;
  const widgetId = computed(() => {
    return "widget-id-" + props.widgetInfo?._id;
  });

  const formDataKey = computed(() => {
    return props.widgetInfo?.formDataKey;
  });

  const widgetName = computed(() => {
    return props.widgetInfo?.widget;
  });

  const widgetAttrs = computed(() => {
    if (props.widgetInfo && !props.widgetInfo?.widgetAttrs) {
      const newWidgetAttrs = JSON.parse(JSON.stringify(props.widgetInfo));
      const needToDeletes = ["childWidget", "widget", "formDataKey"];
      needToDeletes.forEach((key) => {
        delete newWidgetAttrs[key];
      });
      return newWidgetAttrs;
    }
    return props.widgetInfo?.widgetAttrs || {};
  });
  const isFuncRender = computed(() => {
    if (typeof props.widgetInfo?.render === "function") {
      return true;
    } else {
      return false;
    }
  });
  // 重载配置里面的render函数
  function handleRender(renderFunc) {
    if (typeof renderFunc === "function") {
      const scope = {
        widgetInfo: props.widgetInfo,
        modelValue: props.modelValue,
      };
      if (
        props.tableRowIndex >= 0 &&
        props.tableRowIndex !== null &&
        props.tableRowIndex !== undefined
      ) {
        scope.row = formData.value[props.tableRowIndex];
        scope.index = props.tableRowIndex;
      } else {
        scope.formData = formData.value;
        scope.modelValue = formData.value[formDataKey.value];
      }
      return renderFunc(h, scope);
    } else {
      return renderFunc;
    }
  }

  return {
    widgetId,
    widgetName,
    widgetAttrs,
    formData,
    formDataKey,
    isFuncRender,
    handleRender,
  };
}
