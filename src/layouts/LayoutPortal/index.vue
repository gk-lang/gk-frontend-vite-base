<template>
  <div class="layout-portal">
    <div class="layout-header">
      <div class="header-container">
        <div class="header-tab">
          <div class="logo">
            <img :src="logoPath" alt="" />
          </div>
          <HeaderMenu />
        </div>
        <div class="header-func">
          <div v-if="user" class="tag control" @click="goToAdminPage">
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link"> 控制台 </span>
            </el-dropdown>
          </div>
          <div v-if="user" class="tag user-info">
            <el-dropdown :hide-on-click="false" @command="handleCommand">
              <span class="el-dropdown-link">
                <el-avatar
                  :size="40"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <span class="user-name">{{ user.user_name }}</span>
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="layout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div v-else>
            <span class="tag" @click="goToLoginPage">
              <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link"> 登录 </span>
              </el-dropdown>
            </span>
            <span> | </span>
            <span class="tag" @click="goToRegisterPage">
              <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link"> 注册 </span>
              </el-dropdown>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="layout-content">
      <MainContent />
    </div>
    <div class="footer-container" v-if="isShowPortalFooter">
      <div class="footer-con-wrap">
        <div class="footer-content">
          <div class="qiao-logo">
            <div class="new-logo">
              <img :src="logoPath2" class="new-logo-img" alt="" />
              <!-- <span class="short-line"></span> -->
              <div>九州通物流开放平台</div>
            </div>
          </div>
          <div class="qiao-link" v-for="item in linkList">
            <div class="link-item">
              <p>{{ item.title }}</p>
              <ul>
                <li v-for="childItem in item.children">
                  <span>{{ childItem.title }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright-wrap">
        <div class="footer-copyright">
          九州通物流版权所有 Copyright ©2024 sf-express.com Inc. All rights
          reserved. 粤ICP备08034243号
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Download, ArrowDown } from "@element-plus/icons-vue";
import {
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElInput,
  ElButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElScrollbar,
  ElCarousel,
  ElCarouselItem,
  ElIcon,
  ElAvatar,
} from "element-plus";
import { useAppStore } from "@/store/modules/app";
import logoPath from "@/assets/portal/logo.png";
import logoPath2 from "@/assets/portal/logo-白字.png";

import bannerPath from "@/assets/portal/banner1.png";
import hydtPath from "@/assets/portal/货运地图.png";
import dsPath from "@/assets/portal/电商.png";
import kdwlPath from "@/assets/portal/快递物流.png";
import shfwPath from "@/assets/portal/售后服务.png";
import HeaderMenu from "./components/HeaderMenu.vue";
import MainContent from "@/layouts/components/MainContent/index.vue";
import { useUserStoreWithOut } from "@/store/modules/user";
const appStore = useAppStore();
const router = useRouter();
const userStore = useUserStoreWithOut();
const supportList = ref([
  {
    name: "快递物流",
    title: "痛点：中转调度效率需提升、地址识别 准确率不高、人员区域管理",
    content: "客户细分：快递、物流、同城派送",
    imgPath: kdwlPath,
    isSelected: true,
  },
  {
    name: "货运地图",
    title:
      "痛点：货运路线运输成本高、禁行区域无提示、在途安全无保障、货运油耗成本高",
    content: "客户细分：快递、物流、货运企业",
    imgPath: hydtPath,
    isSelected: false,
  },
  {
    name: "售后客服",
    title:
      "痛点：协助客户下单流程中，常遇到客户地址不清晰无法识别业务区，分单效率",
    content: "客户细分：售后客服",
    imgPath: shfwPath,
    isSelected: false,
  },
]);
const selectedSupportItem = ref({});
function handleSupportMenuClick(item) {
  supportList.value.forEach((x) => (x.isSelected = false));
  item.isSelected = true;
  selectedSupportItem.value = item;
}

function goToAdminPage() {
  router.push("/admin");
}
function goToLoginPage() {
  router.push("/login?redirect=/");
}
function goToRegisterPage() {
  router.push("/register");
}
function handleCommand(type) {
  if (type === "layout") {
    userStore.logout("/");
  }
}
const linkList = ref([
  {
    title: "新手入门",
    children: [
      {
        title: "接入指南",
        href: "",
      },
      {
        title: "平台规则",
        href: "",
      },
      {
        title: "平台公告",
        href: "",
      },
    ],
  },
  {
    title: "技术支持",
    children: [
      {
        title: "API文档",
        href: "",
      },
      {
        title: "业务文档",
        href: "",
      },
      {
        title: "开发规范",
        href: "",
      },
    ],
  },
  {
    title: "客服帮助",
    children: [
      {
        title: "FAQ",
        href: "",
      },
      {
        title: "在线报障",
        href: "",
      },
      {
        title: "联系我们",
        href: "",
      },
    ],
  },
  {
    title: "友情链接",
    children: [
      {
        title: "九州通",
        href: "",
      },
      {
        title: "企业服务平台",
        href: "",
      },
      {
        title: "九州通物流官网",
        href: "",
      },
    ],
  },
]);
const user = computed(() => userStore.getUserInfo);
const isShowPortalFooter = computed(() => appStore.getIsShowPortalFooter);
onMounted(() => {
  selectedSupportItem.value = supportList.value.find((x) => x.isSelected);
});
</script>
<style lang="scss" scoped>
.layout-portal {
  --layout-header-height: 56px;
  --layout-footer-content-height: 250px;
  --layout-footer-copyright-height: 30px;
  --layout-content-height: calc(
    100vh - var(--layout-footer-content-height) -
      var(--layout-footer-copyright-height)
  );

  .layout-header {
    --header-base-font: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui",
      "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
    user-select: none;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 2px 6px #2222221a;
    backdrop-filter: blur(10px);
    color: #222;
    font-family: var(--header-base-font);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    .header-container {
      margin: 0 auto;
      width: 1390px;
      display: flex;
      justify-content: space-between;
      height: var(--layout-header-height);
      line-height: var(--layout-header-height);

      .header-tab {
        display: flex;
        align-items: center;
        .logo {
          width: 120px;
          height: 56px;
          display: flex;
          align-items: center;
          margin-right: 60px;
          img {
            height: 25px;
          }
        }
      }
      .header-func {
        margin-right: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tag {
          position: relative;
          text-align: center;
          &.control {
            background-image: url("@/assets/portal/控制台.png");
            background-repeat: no-repeat;
            background-size: 16px 16px;
            background-position: left center;
            padding-left: 5px;
            min-width: 80px;
          }
          &.user-info {
            .user-name{
              margin-left: 5px;
            }
          }
          :deep(.el-dropdown) {
            height: 56px;
            line-height: 56px;
            color: #222;
            &:hover {
              color: #2562ff;
              cursor: pointer;
            }
            .el-dropdown-link {
              font-size: 16px;
              cursor: pointer;
              outline: none !important;
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
  .layout-content {
    // min-height: calc(100% - 306px);
    min-height: var(--layout-content-height);
    :deep(.main-content) {
      padding: 0px;
    }
  }
  .footer-container {
    width: 100%;
    .footer-con-wrap {
      width: 100%;
      height: var(--layout-footer-content-height);
      background: #141222;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      .footer-content {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .qiao-logo {
        float: left;
        height: 35px;
        width: 250px;
        //   margin-top: 105px;
        line-height: 35px;
        //   &.logo {

        //     img {
        //       height: 25px;
        //     }
        //   }
        .new-logo {
          text-align: center;
          .new-logo-img {
            height: 25px;
          }
          span {
            color: #fff;
            font-size: 16px;
            text-align: left;
            font-weight: 700;
          }
          .short-line {
            align-self: center;
            width: 1px;
            opacity: 0.4;
            background: #bec0e7;
            height: 14px;
            margin: 0 8px;
          }
        }
      }
      .qiao-link {
        margin-left: 157px;
        margin-top: 50px;
        display: inline-block;
        .link-item {
          display: inline-block;
          width: 119px;
          text-align: left;
          margin-right: 50px;
          p {
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 26px;
          }
          ul {
            padding-left: 0px;
          }
          li {
            list-style: none;
            color: #828395;
            font-size: 14px;
            line-height: 32px;
            cursor: pointer;
          }
        }
      }
    }
    .footer-copyright-wrap {
      width: 100%;
      height: var(--layout-footer-copyright-height);
      background: #000;
      .footer-copyright {
        width: 1010px;
        margin: 0 auto;
        opacity: 0.7;
        color: #828395;
        font-size: 12px;
        line-height: var(--layout-footer-copyright-height);
        letter-spacing: 1px;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 1460px) {
    .layout-header .header-container {
      width: 1000px;
      .header-func {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 1460px) {
    .footer-container .footer-con-wrap .qiao-link {
      margin-left: 60px;
    }
  }
}
</style>
