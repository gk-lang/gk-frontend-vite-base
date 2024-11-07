<template>
  <div class="portal-home">
    <div class="banner-container">
      <el-carousel height="580px" arrow="never">
        <el-carousel-item>
          <div class="introduce">
            <div class="title">九州通物流开放平台</div>
            <div class="content">
              一款为行业应用开发者提供便捷需求开发的工业级开放平台
            </div>
          </div>
          <img :src="bannerPath" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="platfrom-advantage">
      <div class="advantage-wrap">
        <p class="advantage-title">易用、高效、稳定的平台服务</p>
        <div class="advantage-content">
          <div>
            <div class="advantage-item">
              <div
                class="img-icon adv_sequence_API"
                style="background-position-y: 256px"
              ></div>
              <div class="adv">丰富的API支持</div>
              <div class="tip">提供多种业务服务和科技能力应用API对接</div>
            </div>
          </div>
          <div>
            <div class="advantage-item">
              <div
                class="img-icon adv_sequence_sandbox"
                style="background-position-y: 0px"
              ></div>
              <div class="adv">沙盒自助联调</div>
              <div class="tip">
                提供全套沙盒工具支撑，支持7X24小时自助对接测试联调
              </div>
            </div>
          </div>
          <div>
            <div class="advantage-item">
              <div
                class="img-icon adv_sequence_print"
                style="background-position-y: 256px"
              ></div>
              <div class="adv">云打印电子面单</div>
              <div class="tip">
                面单模板云管理，支持SDK，桌面工具，接口等多种打印方式
              </div>
            </div>
          </div>
          <div>
            <div class="advantage-item">
              <div
                class="img-icon adv_sequence_multiple"
                style="background-position-y: 256px"
              ></div>
              <div class="adv">多应用管理</div>
              <div class="tip">
                支持创建多个业务应用，实现系统分类管理，让业务结构更清晰
              </div>
            </div>
          </div>
          <div>
            <div class="advantage-item">
              <div
                class="img-icon adv_sequence_onestation"
                style="background-position-y: 0px"
              ></div>
              <div class="adv">一站式服务</div>
              <div class="tip">
                为客户提供完善的文档指引及售后服务，一站式响应客户需求
              </div>
            </div>
          </div>
          <div>
            <div class="advantage-item">
              <div
                class="img-icon adv_sequence_input"
                style="background-position-y: 256px"
              ></div>
              <div class="adv">多方式接入</div>
              <div class="tip">
                为开发者客户提供API接入，为普通客户提供第三方软件接入
              </div>
            </div>
          </div>
          <div>
            <div class="advantage-item">
              <div
                class="img-icon adv_sequence_safe"
                style="background-position-y: 0px"
              ></div>
              <div class="adv">信息防护全面</div>
              <div class="tip">
                严谨和规范的对接流程，多重业务校验保证信息流的安全性
              </div>
            </div>
          </div>
          <div>
            <div class="advantage-item">
              <div
                class="img-icon adv_sequence_stable"
                style="background-position-y: 256px"
              ></div>
              <div class="adv">服务稳定可靠</div>
              <div class="tip">可靠的运维机制保证，系统可用性高达99.99%</div>
            </div>
          </div>
        </div>
        <div class="experience">
          <button class="experience-btn">立即体验</button>
        </div>
      </div>
    </div>
    <div class="support-container">
      <div class="introduce">解决方案</div>
      <div class="inner-container">
        <div class="left">
          <div
            v-for="item in supportList"
            :class="['title', { selected: item.isSelected }]"
            @click="handleSupportMenuClick(item)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="right">
          <div class="slide">
            <div class="describe">
              <div class="title">
                {{ selectedSupportItem.title }}
              </div>
              <div class="divide"></div>
              <div class="content">{{ selectedSupportItem.content }}</div>
            </div>
            <img :src="selectedSupportItem.imgPath" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="learn-more-container">
      <div class="learn-more-wrap">
        <p class="learn-title">了解九州通物流的开放能力与服务从这里开始</p>
        <div class="learn-content">
          <div class="learn-item">
            <p>SDK下载</p>
            <p>下载SDK，更便捷接入九州通物流开放能力。</p>
            <p class="action-con">
              <span> 下载最新版本 </span>
            </p>
          </div>
          <div class="learn-item">
            <p>开发支持文档</p>
            <p>浏览最新文档，了解平台规则及开发指南</p>
            <p class="action-con">
              <span> 阅读文档 </span>
            </p>
          </div>
          <div class="learn-item">
            <p>教程视频</p>
            <p>观看教程视频，快速掌握平台功能使用技巧。</p>
            <p class="action-con">
              <span> 浏览视频 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
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
} from "element-plus";
import logoPath from "@/assets/portal/logo.png";
import logoPath2 from "@/assets/portal/logo-白字.png";

import bannerPath from "@/assets/portal/banner1.png";
import hydtPath from "@/assets/portal/货运地图.png";
import dsPath from "@/assets/portal/电商.png";
import kdwlPath from "@/assets/portal/快递物流.png";
import shfwPath from "@/assets/portal/售后服务.png";

const router = useRouter();

const menuList = ref([
  {
    title: "首页",
    width: "60px",
    value: "",
    isSelected: true,
  },
  {
    title: "开发文档",
    width: "70px",
    value: "",
  },
  {
    title: "解决方案",
    width: "70px",
    value: "",
  },
  {
    title: "服务与支持",
    width: "85px",
    value: "",
  },
]);
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
function handleMainMenuItemClick(item) {
  menuList.value.forEach((x) => (x.isSelected = false));
  item.isSelected = true;
  loadApiDocList(item);
}
function handleControlBtnLogin() {
  router.push("/admin");
}
function handleLoginBtnLogin() {
  router.push("/login");
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
onMounted(() => {
  selectedSupportItem.value = supportList.value.find((x) => x.isSelected);
});
</script>
<style lang="scss" scoped>
.portal-home {
  .banner-container {
    height: 580px;
    width: 100%;
    position: relative;
    :deep(.el-carousel__container) {
      height: 580px;
      .introduce {
        position: absolute;
        top: 181px;
        left: calc(50% - 600px);
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        padding: 30px 23px;
        .title {
          height: 39px;
          font-size: 32px;
          color: #2562ff;
          line-height: 45px;
          font-family: AlibabaPuHuiTi;
          font-weight: 700;
        }
        .content {
          margin-top: 20px;
          height: 25px;
          font-size: 18px;
          color: #222;
          line-height: 25px;
        }
      }
    }
    img {
      height: 580px;
      width: 100%;
    }
  }
  .platfrom-advantage {
    width: 100%;
    height: 100%;
    background: #fff;
    text-align: center;
    .advantage-wrap {
      // width: 1200px;
      margin: 0 auto;
      padding: 40px 0 60px;
      .advantage-title {
        font-weight: 500;
        font-size: 30px;
        line-height: normal;
        letter-spacing: 0;
        text-align: center;
        padding-bottom: 3px;
      }
      .advantage-content {
        margin-bottom: 50px;

        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 210px 210px;
        grid-gap: 12px;
        .advantage-item {
          width: 200px;
          height: 210px;
          display: inline-block;
          text-align: center;
          .img-icon {
            display: inline-block;
            width: 128px;
            height: 128px;
            background-size: cover;
            cursor: pointer;
            &.adv_sequence_API {
              background-image: url("@/assets/portal/adv_sequence_API.png");
            }
            &.adv_sequence_sandbox {
              background-image: url("@/assets/portal/adv_sequence_sandbox.png");
            }
            &.adv_sequence_print {
              background-image: url("@/assets/portal/adv_sequence_print.png");
            }
            &.adv_sequence_multiple {
              background-image: url("@/assets/portal/adv_sequence_multiple.png");
            }
            &.adv_sequence_onestation {
              background-image: url("@/assets/portal/adv_sequence_onestation.png");
            }
            &.adv_sequence_input {
              background-image: url("@/assets/portal/adv_sequence_input.png");
            }
            &.adv_sequence_safe {
              background-image: url("@/assets/portal/adv_sequence_safe.png");
            }
            &.adv_sequence_stable {
              background-image: url("@/assets/portal/adv_sequence_stable.png");
            }
          }
          .adv {
            color: #000;
            font-weight: 500;
            font-size: 18px;
            margin-bottom: 12px;
          }
          .tip {
            color: #828395;
            font-size: 14px;
          }
        }
      }
      .experience {
        margin-top: 50px;
        .experience-btn {
          position: abosulte;
          top: 0;
          width: 200px;
          height: 50px;
          margin: 0 auto;
          line-height: 50px;
          border: none;
          background: linear-gradient(98.23deg, #ff5c6a, #dc1f2f);
          color: #fff;
          font-weight: medium;
          font-size: 16px;
          text-align: center;
          transition: all 0.1s linear;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  }
  .support-container {
    height: 643px;
    width: 100%;
    background: #eee;
    overflow: hidden;
    .introduce {
      margin-top: 40px;
      margin-bottom: 40px;
      width: 100%;
      text-align: center;
      height: 33px;
      font-size: 24px;
      color: #222;
      line-height: 33px;
    }
    .inner-container {
      margin: 0 auto;
      max-width: 1231px;
      width: calc(100% - 300px);
      height: 400px;
      display: flex;
      .left {
        display: flex;
        flex-direction: column;
        width: 130px;
        height: 400px;
        .title {
          width: 130px;
          height: 32px;
          margin-bottom: 28px;
          line-height: 32px;
          cursor: pointer;
          font-size: 16px;
          color: #222;
          &.selected {
            width: 130px;
            height: 32px;
            margin-bottom: 28px;
            line-height: 32px;
            background: linear-gradient(
              270deg,
              rgba(37, 98, 255, 0.2) 0%,
              rgba(37, 98, 255, 0) 100%
            );
            cursor: pointer;
            font-size: 16px;
            color: #2562ff;
            border-right: 4px solid #2562ff;
          }
        }
      }
      .right {
        width: 1101px;
        height: 400px;
        position: relative;
        overflow: hidden;
        .slide {
          width: 1101px;
          height: 400px;
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.2s linear;
          .describe {
            position: absolute;
            top: 82px;
            left: 64px;
            .title {
              white-space: pre-wrap;
              font-size: 22px;
              color: #222;
              line-height: 42px;
            }
            .divide {
              width: 71px;
              height: 1px;
              border: 1px solid #222222;
              background-color: #222;
              margin-top: 15px;
              margin-bottom: 15px;
            }
            .content {
              height: 28px;
              font-size: 14px;
              color: #666;
              line-height: 28px;
            }
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .learn-more-container {
    width: 100%;
    height: 435px;
    background: #fff;
    .learn-more-wrap {
      // padding: 50px 0 60px 0;
      margin: 0 auto;
      text-align: center;
      position: relative;
      .learn-title {
        font-weight: 500;
        font-size: 30px;
        margin: 0px;
        padding: 50px 0px;
      }
      .learn-content {
        height: 212px;
        //   display: grid;
        //   grid-template-columns: repeat(3, 33.33%);
        //   grid-template-rows: 212px;
        //   grid-gap: 12px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .learn-item {
          // float: left;
          width: 380px;
          height: 212px;
          text-align: left;
          padding: 30px 0 38px 36px;
          cursor: pointer;
          box-sizing: border-box;
          p {
            color: #141222;
            font-weight: 500;
            font-size: 20px;
            margin-bottom: 16px;
            &:nth-of-type(2) {
              width: 200px;
              color: #828395;
              font-weight: regular;
              font-size: 14px;
              margin-bottom: 35px;
            }
            &:nth-of-type(3) {
              span {
                color: #141222;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                overflow: hidden;
                padding-bottom: 2px;
                transition: all 0.3s ease-in-out;
              }
            }
          }
          .action-con {
          }
          &:nth-of-type(1) {
            background-image: url("@/assets/portal/start_bg_download.png");
            background-repeat: no-repeat;
            background-size: cover;
          }
          &:nth-of-type(2) {
            background-image: url("@/assets/portal/start_bg_document.png");
            background-repeat: no-repeat;
            background-size: cover;
            margin-left: 135px;
            margin-right: 135px;
          }
          &:nth-of-type(3) {
            background-image: url("@/assets/portal/start_bg_video.png");
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1460px) {
    .banner-container {
      :deep(.el-carousel__container) {
        .introduce {
          left: calc(50% - 486px);
        }
      }
    }
  }
  @media screen and (max-width: 1460px) {
    .learn-more-container .learn-more-wrap .learn-content .learn-item {
      width: 310px;
      &:nth-of-type(2) {
        margin-left: 95px;
        margin-right: 95px;
      }
    }
  }
}
</style>
