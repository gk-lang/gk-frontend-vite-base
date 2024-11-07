// 需要全局引入一些组件，如ElScrollbar，不然一些下拉项样式有问题
import { ElLoading, ElMessage, ElMessageBox,ElNotification, ElScrollbar } from "element-plus";
const plugins = [ElLoading];

const components = [ElScrollbar];

export const setupElementPlus = (app) => {
  window.$msg = ElMessage;
  window.$msgbox = ElMessageBox;
  window.$alert = ElMessageBox.alert;
  window.$confirm = ElMessageBox.confirm;
  window.$prompt = ElMessageBox.prompt;
  window.$notify = ElNotification;

  plugins.forEach((plugin) => {
    app.use(plugin);
  });
  components.forEach((component) => {
    app.component(component.name, component);
  });
  // 为了开发环境启动更快，一次性引入所有样式
  if (import.meta.env.VITE_USE_ALL_ELEMENT_PLUS_STYLE === "true") {
    import("element-plus/dist/index.css");
    return;
  }
};
