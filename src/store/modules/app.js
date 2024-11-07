import { defineStore } from "pinia";
import { store } from "../index";
// import { setCssVar, humpToUnderline } from '@/utils'
// import { colorIsDark, hexToRGB, lighten, mix } from '@/utils/color'
// import { ElMessage, ComponentSize } from 'element-plus'
// import { unref } from 'vue'
import defaultTheme from "@/config/theme.config.js";
import { isJson } from "@/utils/validate";
const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  if (isJson(value)) {
    return JSON.parse(value);
  } else {
    return false;
  }
};

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      title: import.meta.env.VITE_APP_TITLE, // 标题
      pageLoading:false,
      collapse: false, // 折叠菜单
      leftSideBarWidth:'266px',//侧边栏宽度
      uniqueOpened: false, // 是否只保持一个子菜单的展开
      theme: getLocalStorage("theme") || { ...defaultTheme },
      isShowPortalFooter:true
    };
  },
  getters: {
    getLeftSideBarWidth() {
      return this.leftSideBarWidth
    },
    getCollapse() {
      return this.collapse
    },
    getUniqueOpened() {
      return this.uniqueOpened
    },
    getTitle(){
      return this.title;
    },
    getPageLoading() {
      return this.pageLoading;
    },
    getTheme() {
      return this.theme;
    },
    getIsShowPortalFooter(){
      return this.isShowPortalFooter;
    },
  },
  actions: {
    setLeftSideBarWidth(leftSideBarWidth){
      this.leftSideBarWidth = leftSideBarWidth
    },
    setCollapse(collapse) {
      this.collapse = collapse
      let el_left_menu_width = ''
      if(this.collapse){
        el_left_menu_width = document.documentElement.style.getPropertyValue('--left-menu-min-width')
      }else{
        el_left_menu_width = document.documentElement.style.getPropertyValue('--left-menu-width')
      }
      this.setLeftSideBarWidth(el_left_menu_width)
      document.documentElement.style.setProperty('--el-left-menu-width', el_left_menu_width);
    },
    toggleCollapse(){
      this.collapse = !this.collapse
      let el_left_menu_width = ''
      if(this.collapse){
        el_left_menu_width = document.documentElement.style.getPropertyValue('--left-menu-min-width')
      }else{
        el_left_menu_width = document.documentElement.style.getPropertyValue('--left-menu-width')
      }
      this.setLeftSideBarWidth(el_left_menu_width)
      document.documentElement.style.setProperty('--el-left-menu-width', el_left_menu_width);
    },
    setUniqueOpened(uniqueOpened) {
      this.uniqueOpened = uniqueOpened
    },
    setPageLoading(pageLoading) {
      this.pageLoading = pageLoading
    },
    setTheme(theme) {
      this.theme = Object.assign(this.theme, theme);
    },
    resetTheme() {
      this.theme = { ...defaultTheme }
      localStorage.removeItem('theme')
      document.getElementsByTagName(
        'body'
      )[0].className = `app-theme-${this.theme.themeName}`
      document.documentElement.style.setProperty('--el-left-menu-width', this.leftSideBarWidth);
    },
    setIsShowPortalFooter(isShowPortalFooter) {
      this.isShowPortalFooter = isShowPortalFooter;
    },
  },
  persist: true,
});

export const useAppStoreWithOut = () => {
  return useAppStore(store);
};
