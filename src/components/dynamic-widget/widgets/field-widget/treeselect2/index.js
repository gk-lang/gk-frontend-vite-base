import widgetTreeselect from "./treeselect.vue";

/**
 * 该组件在formItem渲染时，formItem的默认配置
 */
export function formItemDefaultOption(widgetInfo) {
  const defaultOption = {
    widget: "form-item",
    widgetAttrs: {},
    childWidget: {
      widget: "treeselect2",
      widgetAttrs: {
        options: [],
        normalizer: (node) => {
          return {
            id: node.value,
            label: node.label,
            children: node.children,
          };
        },
        placeholder: "请选择",
        noResultsText: "未匹配到搜索内容",
        noOptionsText: "无可用选择项",
        noChildrenText: "无子节点",
        loadingText: "加载中...",
      },
    },
  };
  const labelName =
    widgetInfo?.widgetAttrs?.labelName?.replaceAll("\n", "") || "";
  if (labelName && !widgetInfo.childWidget.widgetAttrs.placeholder) {
    defaultOption.childWidget.widgetAttrs.placeholder = "请选择" + labelName;
  }

  const placeholder =
    widgetInfo?.childWidget?.widgetAttrs?.placeholder ||
    defaultOption.childWidget.widgetAttrs.placeholder;

  if (labelName && widgetInfo.widgetAttrs.required) {
    defaultOption.widgetAttrs.rules = [
      {
        required: true,
        message: widgetInfo.widgetAttrs.requiredErrorMsg || placeholder,
        trigger: "change",
      },
    ];
  }
  if (widgetInfo?.childWidget?.widgetAttrs?.props?.lazy) {
    // if (widgetInfo?.childWidget?.props?.lazyLoadRequestKey) {
    //   defaultOption.childWidget.props = {
    //     lazy: true,
    //     lazyLoadRequestKey: widgetInfo.childWidget.props.lazyLoadRequestKey,
    //     lazyLoad(node, resolve) {
    //       // resolve(node)
    //       if (emits) {
    //         emits('notify', {
    //           eventType: 'lazyLoad',
    //           lazyLoadRequestKey:
    //             widgetInfo.childWidget.props.lazyLoadRequestKey,
    //           formDataKey: widgetInfo.formDataKey,
    //           node,
    //           resolve
    //         })
    //       }
    //     }
    //   }
    // }
  }
  return defaultOption;
}

/**
 * 渲染组件时的默认数据
 */
export function widgetDefaultValue(option) {
  return {
    type: String,
    value: null,
  };
}

/**
 * 解析导出时映射的文本值（非id）
 */
export function widgetValue2Title(option) {
  return option.value || "";
}

/**
 * 组件type属性对应解析的类型，treeselect
 * 组件动态解析从这里开始映射
 */
export function widgetDescription() {
  return [{ label: "树形下拉选择框", value: "treeselect2", hidden: false }];
}

export default widgetTreeselect;
