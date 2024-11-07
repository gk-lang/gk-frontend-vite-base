<template>
  <div class="login-container">
    <el-row>
      <el-col :lg="14" :md="11" :sm="24" :xl="14" :xs="24">
        <div style="color: transparent">占位符</div>
      </el-col>
      <el-col :lg="9" :md="12" :sm="24" :xl="9" :xs="24">
        <el-form
          ref="formRef"
          :model="formData"
          :rules="rules"
          class="login-form"
          label-position="left"
        >
          <div class="title">hello !</div>
          <div class="title-tips">欢迎来到{{ title }}！</div>
          <el-form-item prop="username" class="username">
            <el-input
              v-model.trim="formData.username"
              v-focus
              placeholder="请输入用户名"
              tabindex="1"
              type="text"
            >
              <!-- <template #prefix><vab-icon icon="user-line" /></template> -->
            </el-input>
          </el-form-item>
          <el-form-item prop="password" class="password">
            <el-input
              :key="passwordType"
              ref="password"
              v-model.trim="formData.password"
              placeholder="请输入密码"
              :type="passwordType"
              @keyup.enter.native="handleLogin"
            >
              <template #prefix>
                <!-- <vab-icon icon="lock-line" /> -->
              </template>
              <template v-if="passwordType === 'password'" #suffix>
                <!-- <vab-icon
                  class="show-password"
                  icon="eye-off-line"
                  @click="handlePassword"
                /> -->
              </template>
              <template v-else #suffix>
                <!-- <vab-icon
                  class="show-password"
                  icon="eye-line"
                  @click="handlePassword"
                /> -->
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="imagecode" class="imagecode">
            <el-input
              v-model.trim="formData.imagecode"
              placeholder="请输入验证码"
            >
            </el-input>
            <img
              class="validate-code-image"
              :src="imagecodeUrl"
              @click="refreshImageCode"
            />
          </el-form-item>
          <el-button
            :loading="loading"
            class="login-btn"
            type="primary"
            @click="handleLogin"
          >
            登录
          </el-button>
          <div class="login-tool">
            <el-button class="register" type="primary" @click="goRegisterPage">
              注册
            </el-button>
            <el-button
              class="forget-password"
              link
              type="primary"
              @click="goForgotPasswordPage"
            >
              忘记密码
            </el-button>
          </div>
        </el-form>
      </el-col>
      <el-col :lg="1" :md="1" :sm="24" :xl="1" :xs="24">
        <div style="color: transparent">占位符</div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref, watch,onMounted,onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import {
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElInput,
  ElButton,
  ElMessage
} from "element-plus";
import { useAppStore } from "@/store/modules/app";
import { useUserStore } from "@/store/modules/user";
import { usePermissionStore } from "@/store/modules/permission";
import { login, getUserInfo, getCurrentUserMenu } from "@/api/user.js";
import { cloneDeep } from "lodash-es";
import { treeToList, eachTree } from "@/utils/tree";
import { dynamicRoutes } from "@/router/routes";

const router = useRouter();
const appStore = useAppStore();
const userStore = useUserStore();
const permissionStore = usePermissionStore();

const loading = ref(false);
const formRef = ref(null);
const passwordRef = ref(null);
const passwordType = ref("password");
const redirect = ref("");
const title = ref("开放后台管理");
const formData = ref({
  username: "",
  password: "",
  imagecode: "",
  random: randomLenNum(4, true),
});
const rules = ref({
  username: [
    {
      required: true,
      trigger: "blur",
      validator: validateUsername,
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: validatePassword,
    },
  ],
});
const remember = ref(userStore.getRememberMe);
const imagecodeUrl = ref(
  `${import.meta.env.VITE_API_BASE_PATH}/admin/code/${formData.value.random}`
);
// 校验用户名
function validateUsername(rule, value, callback) {
  if ("" === value) callback(new Error("用户名不能为空"));
  else callback();
}
// 校验密码
function validatePassword(rule, value, callback) {
  if (value.length < 6) callback(new Error("密码不能少于6位"));
  else callback();
}
function handlePassword() {
  passwordType.value === "password"
    ? (passwordType.value = "")
    : (passwordType.value = "password");
  nextTick(() => {
    passwordRef.value.$el.focus();
  });
}
// 记住账号密码
function rememberUserAndPassword() {
  if (remember.value) {
    userStore.setLoginInfo({
      username: formData.username,
      password: formData.password,
    });
  } else {
    userStore.setLoginInfo(undefined);
  }
  userStore.setRememberMe(remember.value);
}
function transformMenusData(list) {
  const routeList = treeToList(dynamicRoutes);
  const roleMenuList = cloneDeep(list);
  eachTree(roleMenuList, (item) => {
    const menu_config = JSON.parse(item.menu_config)
    const routeInfo = routeList.find((node) => node.path == item.menu_url);
    item.meta = {};
    if (routeInfo) {
      item.name = routeInfo.name;
      item.meta = cloneDeep(routeInfo.meta);
    }
    item.meta.menuInfo = cloneDeep(item);
    item.meta.icon = menu_config.menu_icon;
    item.meta.title = item.menu_name;
    item.path = item.menu_url;
    if (!item.name) item.name = item.path;
    delete item.meta.menuInfo.children;
    delete item.meta.menuInfo.meta;
    Object.keys(item).forEach((key) => {
      if (!["meta", "name", "path", "children"].includes(key)) {
        delete item[key];
      }
    });
  });
  return roleMenuList;
}
function handleLogin() {
  formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        loading.value = true
        const resp = await login(formData.value);
        if (resp?.data?.access_token) {
          // 保存token
          userStore.setToken(resp.data.access_token);
          // 获取用户信息
          const userInfo = await getUserInfo(resp.data.openid);
          
          if(!userInfo) {
            loading.value = false
            return window.$msg.error("未检测到该账户的用户信息，请重新登录！")
          }
          // 记住账号密码
          rememberUserAndPassword();
          userStore.setUserInfo(userInfo);
          // 获取菜单信息
          const menuList = await getCurrentUserMenu();
          const roleMenuList = transformMenusData(menuList);
          userStore.setRoleMenuList(roleMenuList);
          userStore.$persist();
          router.push("/admin");
        }

        // if (resp) {
        //   // 是否使用动态路由
        //   if (appStore.getDynamicRouter) {
        //   } else {
        //     await permissionStore.generateRoutes("static").catch(() => {});
        //     permissionStore.getAddRouters.forEach((route) => {
        //       router.addRoute(route); // 动态添加可访问路由表
        //     });
        //     permissionStore.setIsAddRouters(true);
        //     router.push({
        //       path: redirect.value || permissionStore.addRouters[0].path,
        //     });
        //   }
        // }
      } finally {
        loading.value = false;
      }
    }
  });
}
/**
 * 生成随机len位数字
 * @param {*} len 长度
 * @param {*} date 是否加上时间
 * @returns len位数字
 */
function randomLenNum(len, date) {
  let random = "";
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substring(0, typeof len === "number" ? len : 4);
  if (date) random = random + Date.now();
  return random;
}
// 刷新验证码
function refreshImageCode() {
  formData.value.imagecode = "";
  formData.value.random = randomLenNum(4, true);
  imagecodeUrl.value = `${import.meta.env.VITE_API_BASE_PATH}/admin/code/${
    formData.value.random
  }`;
}
// 跳转到注册页面
function goRegisterPage() {
  router.push("/register");
}
// 跳转到忘记密码页面
function goForgotPasswordPage() {
  router.push("/forgot-password");
}
function removeTipErrMsg(url) {
    // 使用正则表达式去掉 tipErrMsg 参数
    const newUrl = url.replace(/([&?])tipErrMsg=[^&]*(&|$)/, (match, p1, p2) => {
        // 如果是第一个参数，直接用`?`替换，否则用`&`替换
        return p1 === '?' ? '?' : p2 === '&' ? p1 : '';
    }).replace(/(\?|&)$/, ''); // 去掉最后的 `?` 或 `&` 如果存在
    return newUrl;
}
watch(
  () => router.currentRoute.value,
  (route) => {
    redirect.value = route?.query?.redirect;
    const tipErrMsg = route?.query?.tipErrMsg;
    // if(tipErrMsg) {
    //   window.$msg.error(tipErrMsg);
    //   window.location.search = removeTipErrMsg(window.location.search);
    // }
    tipErrMsg && window.$msg.error(tipErrMsg)
  },
  {
    immediate: true,
  }
);
function handleKeyupEvent(event){
  event.preventDefault();
  if (event.keyCode === 13) {
      document.querySelector(".login-btn").click();
  }
}
onMounted(()=>{
  document.addEventListener("keyup", handleKeyupEvent);
})
onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyupEvent);
})
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  background: url("@/assets/login/background.jpg") center center fixed no-repeat;
  background-size: cover;
}

.login-form {
  position: relative;
  max-width: 100%;
  padding: 4.5vh;
  margin: calc((100vh - 475px) / 2) 5vw 5vw;
  overflow: hidden;
  background: url("@/assets/login/login_form.png");
  background-size: 100% 100%;
  .username {
    margin: 20px 0;
  }
  .password {
    margin: 20px 0;
  }

  .title {
    font-size: 54px;
    font-weight: 500;
    color: $base-color-white;
  }

  .title-tips {
    margin-top: 29px;
    font-size: 26px;
    font-weight: 400;
    color: $base-color-white;
  }

  .login-btn {
    display: inherit;
    width: 100%;
    height: 50px;
    margin-top: 5px;
    border: 0;

    &:hover {
      opacity: 0.9;
    }

    .forget-passwordword {
      width: 100%;
      margin-top: 40px;
      text-align: left;

      .forget-password {
        width: 129px;
        height: 19px;
        font-size: 20px;
        font-weight: 400;
        color: rgba(92, 102, 240, 1);
      }
    }
  }
  .login-tool {
    margin-top: 20px;
    .register {
      padding: 5px 20px;
    }
  }
  .tips {
    margin-bottom: 10px;
    font-size: $base-font-size-default;
    color: $base-color-white;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .title-container {
    position: relative;

    .title {
      margin: 0 auto 40px auto;
      font-size: 34px;
      font-weight: bold;
      color: $base-color-blue;
      text-align: center;
    }
  }

  i {
    position: absolute;
    top: 8px;
    left: 5px;
    z-index: $base-z-index;
    font-size: 16px;
    color: #d7dee3;
    cursor: pointer;
    user-select: none;
  }

  .show-password {
    position: absolute;
    right: 25px;
    left: -35px;
    font-size: 16px;
    color: #d7dee3;
    cursor: pointer;
    user-select: none;
  }
  :deep(.el-form-item) {
    padding-right: 0;
    margin: 20px 0;
    color: #454545;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 2px;

    .el-form-item__content {
      min-height: $base-input-height;
      line-height: $base-input-height;
    }

    .el-form-item__error {
      position: absolute;
      top: 100%;
      left: 18px;
      font-size: $base-font-size-small;
      line-height: 18px;
      color: $base-color-red;
    }
    .el-input {
      box-sizing: border-box;

      input {
        height: 48px;
        padding-left: 35px;
        font-size: $base-font-size-default;
        line-height: 58px;
        background: #f6f4fc;
        border: 0;
        border-radius: 5px;
      }
    }
    &.imagecode {
      .el-form-item__content {
        display: flex;
        justify-content: space-between !important;
        .el-input {
          width: 320px;
          width: calc(100% - 160px);
        }
        .validate-code-image {
          // margin-left: $jzt-base-distance;
          width: 140px;
          height: 48px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          // background-color: $jzt-color-border-3;
          // border-radius: $jzt-border-radius;
          text-align: center;
          border-radius: 4px;
          // @include jztFontSize2();
          // color: $jzt-color-text-1;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
