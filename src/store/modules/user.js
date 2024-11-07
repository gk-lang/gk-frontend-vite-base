import { defineStore } from "pinia";
import { store } from "../index";
import { ElMessageBox } from "element-plus";
import { loginOutApi } from "@/api/login";
import { useTagsViewStore } from "./tagsView";

import router from "@/router";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userInfo: undefined,
      tokenKey: "Authorization",
      token: "",
      roleMenuList: undefined,
      // 记住我
      rememberMe: true,
      loginInfo: undefined,
      isDynamicAddedRoute: false,
    };
  },
  getters: {
    getTokenKey() {
      return this.tokenKey;
    },
    getToken() {
      return this.token;
    },
    getUserInfo() {
      return this.userInfo;
    },
    getRoleMenuList() {
      return this.roleMenuList;
    },
    getRememberMe() {
      return this.rememberMe;
    },
    getLoginInfo() {
      return this.loginInfo;
    },
    getIsDynamicAddedRoute() {
      return this.isDynamicAddedRoute;
    },
  },
  actions: {
    setTokenKey(tokenKey) {
      this.tokenKey = tokenKey;
    },
    setToken(token) {
      this.token = token;
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    },
    setRoleMenuList(roleMenuList) {
      this.roleMenuList = roleMenuList;
    },
    logoutConfirm() {
      const { t } = useI18n();
      ElMessageBox.confirm("common.loginOutMessage", "common.reminder", {
        confirmButtonText: "common.ok",
        cancelButtonText: "common.cancel",
        type: "warning",
      })
        .then(async () => {
          const res = await loginOutApi().catch(() => {});
          if (res) {
            this.reset();
          }
        })
        .catch(() => {});
    },
    reset(to) {
      const tagsViewStore = useTagsViewStore();
      tagsViewStore.delAllViews();
      this.setToken("");
      this.setUserInfo(undefined);
      this.setRoleMenuList([]);
      router.replace(to || "/login");
    },
    logout(to) {
      this.reset(to);
    },
    setRememberMe(rememberMe) {
      this.rememberMe = rememberMe;
    },
    setLoginInfo(loginInfo) {
      this.loginInfo = loginInfo;
    },
    setIsDynamicAddedRoute(isFlag) {
      this.isDynamicAddedRoute = isFlag;
    },
  },
  persist: {
    paths: [
      "userInfo",
      "tokenKey",
      "token",
      "roleMenuList",
      "rememberMe",
      "loginInfo",
    ],
  },
});

export const useUserStoreWithOut = () => {
  return useUserStore(store);
};
