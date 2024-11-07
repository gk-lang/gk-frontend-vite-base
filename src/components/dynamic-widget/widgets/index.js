import { ref, shallowRef, markRaw, defineAsyncComponent } from "vue";
// import Button from './field-widget/button';
// import ButtonGroup from './field-widget/button-group';
// import {formItemDefaultOption,widgetDefaultValue,widgetValue2Title,widgetDescription} from './field-widget/text';
// import TableItem from './container-widget/table-item';
// import {
//   formItemDefaultOption,
//   widgetDefaultValue,
//   widgetValue2Title,
//   widgetDescription,
// } from "./field-widget/text";

// 解析widgets文件夹下的组件
export function resolveWidgets(type) {
  try {
    const widgets = ref({});
    const widgetFileMapObj = import.meta.glob("../widgets/**/index.js", {
      eager: true,
    });
    for (let i = 0; i < Object.keys(widgetFileMapObj).length; i++) {
      const filePath = Object.keys(widgetFileMapObj)[i];
      const fileMatch = filePath.match(/\/([^/]+)\/[^/]*$/);
      const fileName = fileMatch ? fileMatch[1] : "";

      const folderMatch = filePath.match(/\.\/([^/]+)\//);
      const folderName = folderMatch ? folderMatch[1] : "";

      if (fileName && folderName) {
        const fileInfo = widgetFileMapObj[filePath];
        widgets.value[fileName] = {
          ...fileInfo,
          component: shallowRef(fileInfo.default),
        };

        /* @vite-ignore */
        // const asyncComponent = defineAsyncComponent(() =>
        //   import(
        //     `@/components/dynamic-widget/widgets/${folderName}/${fileName}/index.js`
        //   )
        // );
        // widgets.value[fileName].component = shallowRef(asyncComponent);
        // widgets.value[fileName].component = shallowRef(fileInfo.default);

        if (!widgets.value.widgetsTypeMap) {
          widgets.value.widgetsTypeMap = {};
        }
        if (!widgets.value.widgetsTypeMap[folderName]) {
          widgets.value.widgetsTypeMap[folderName] = [];
        }
        widgets.value.widgetsTypeMap[folderName].push(fileName);
      }
    }
    if (type) {
      return widgets.value[type];
    } else {
      return widgets;
    }
  } catch (error) {
    console.error("resolveWidgets:", error);
  }
}
// const widgets = ref({});
// const modules = import.meta.glob("../widgets/**/index.js", { eager: true });
// for (const path in modules) {
//   let cname = modules[path].default.name;
//   widgets.value[cname] = modules[path].default;
// }
// export default widgets;
