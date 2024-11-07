<template>
  <div class="register-container">
    <div class="form-box">
      <div class="title">忘记密码</div>
      <div class="step">
        <el-steps :active="stepIndex">
          <el-step title="步骤1" description="选择注册方式" />
          <el-step title="步骤2" description="开始注册" />
        </el-steps>
      </div>
      <div class="content">
        <div v-if="stepIndex === 1" class="step1-content">
          <el-form
            ref="formRef1"
            label-width="0"
            :model="formData"
            :rules="formRules"
            style="max-width: 600px"
          >
            <el-form-item prop="phoneNumber">
              <el-input
                size="large"
                v-model="formData.phoneNumber"
                placeholder="请输入注册手机号"
                :prefix-icon="Iphone"
              />
            </el-form-item>
            <el-form-item class="vaild-code" prop="verifyCode">
              <el-input
                size="large"
                v-model="formData.verifyCode"
                placeholder="请输入验证码"
                :prefix-icon="CircleCheck"
              />
              <el-button type="primary" @click="openDialogVerify"
                >发送验证码</el-button
              >
            </el-form-item>
          </el-form>
          <div class="bt-next">
            <div class="bt-left is-disable">
              <img :src="btLeftPath" alt="" />
            </div>

            <div :class="['bt-right']" @click="goNextStep()">
              <img :src="btRightPath" alt="" />
            </div>
          </div>
          <div class="bt-pre">
            <el-link type="primary" @click="goLoginPage" :underline="false"
              >已有账号，返回登录</el-link
            >
          </div>
        </div>
        <div v-if="stepIndex === 2" class="step2-content">
          <el-form
            ref="formRef2"
            label-width="0"
            :model="formData"
            :rules="formRules"
            style="max-width: 600px"
          >
            <el-form-item prop="password1">
              <el-input
                size="large"
                type="password"
                v-model="formData.password1"
                placeholder="请输入登录密码"
                show-password
                :prefix-icon="Lock"
              />
            </el-form-item>
            <el-form-item prop="password2">
              <el-input
                size="large"
                type="password"
                v-model="formData.password2"
                placeholder="请再次输入登录密码"
                show-password
                :prefix-icon="Lock"
              />
            </el-form-item>
          </el-form>
          <div class="bt-next">
            <div class="bt-left" @click="goPreStep()">
              <img :src="btLeftPath" alt="" />
            </div>

            <div :class="['bt-right']" @click="submitFormData()">
              <img :src="btRightPath" alt="" />
            </div>
          </div>
          <div class="bt-pre">
            <el-link type="primary" @click="goLoginPage" :underline="false"
              >已有账号，返回登录</el-link
            >
          </div>
        </div>
      </div>
    </div>
    <DialogVerify
      v-model:isShow="isShowDialogVerify"
      @save="handleDialogVerify"
    ></DialogVerify>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import DialogVerify from "@/components/dialog/dialog-verify.vue";
import {
  Lock,
  OfficeBuilding,
  CircleCheck,
  Iphone,
  Back,
  Right,
} from "@element-plus/icons-vue";
import {
  ElSteps,
  ElStep,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElLink,
  ElCheckbox,
} from "element-plus";
import btLeftPath from "@/assets/login/left.png";
import btRightPath from "@/assets/login/right.png";
const router = useRouter();
const stepIndex = ref(1);

const registerType = ref("person");
const isShowDialogVerify = ref(false);
const isPerson = ref(false);
const isAgreeService = ref(false);
const formRef1 = ref();
const formRef2 = ref();
const formData = ref({});
const formRules = ref({
  enterpriseName: [{ validator: validateEnterpriseName, trigger: "blur" }],
  phoneNumber: [{ validator: validatePhoneNumber, trigger: "blur" }],
  verifyCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
  password1: [{ validator: validatePass1, trigger: "blur" }],
  password2: [{ validator: validatePass2, trigger: "blur" }],
});
const isDisableSubmitBtn = computed(() => {
  return !isPerson.value || !isAgreeService.value;
});
function validateEnterpriseName(rule, value, callback) {
  if (!value) {
    return callback(new Error("请输入企业名称"));
  }
  if (value.length < 2 || value.length > 50) {
    return callback(new Error("企业名称的字符长度应该在2-50字符之间"));
  }
  callback();
}
function validatePhoneNumber(rule, value, callback) {
  const phonePattern = /^1\d{10}$/;
  if (!value) {
    return callback(new Error("请输入注册手机号"));
  }
  if (!phonePattern.test(value)) {
    return callback(new Error("手机号格式错误"));
  }
  callback();
}
function validatePass1(rule, value, callback) {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
  if (!value) {
    return callback(new Error("请输入登录密码"));
  }
  if (!passwordPattern.test(value)) {
    return callback(
      new Error("密码需由6位以上组成,包含英文大小写+英文符号+数字")
    );
  }
  callback();
}
function validatePass2(rule, value, callback) {
  if (!value) {
    return callback(new Error("请输入登录密码"));
  }
  if (value !== formData.value.password1) {
    return callback(new Error("两次密码输入不一致，请重新输入"));
  }
  callback();
}
function goPreStep() {
  stepIndex.value = 1;
}
function goNextStep(type) {
  if (!formRef1.value) return;
  formRef1.value.validate((valid) => {
    if (valid) {
      registerType.value = type;
      stepIndex.value = 2;
      console.log("submit!");
    } else {
      console.log("error submit!");
    }
  });
}
function goLoginPage() {
  router.push("/login?redirect=/");
  stepIndex.value = 2;
}
function openDialogVerify() {
  isShowDialogVerify.value = true;
}
function handleDialogVerify(result) {
  if (result) {
    isPerson.value = true;
    sendVerifyCode();
  }
}
function sendVerifyCode() {}
function submitFormData() {
  if (!formRef2.value) return;
  formRef2.value.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
    }
  });
}
</script>
<style lang="scss" scoped>
.register-container {
  height: 100%;
  background-image: url("@/assets/login/register_background.png");
  background-size: cover;
  --title-base-font: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui",
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  .form-box {
    background: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 6px;
    box-shadow: inset 0 0 6px #fff3;
    position: absolute;
    width: 684px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    .title {
      text-align: center;
      font-size: 1.4rem;
      font-family: var(--title-base-font);
      padding: 30px 14% 20px;
      color: #000;
    }
    .step {
      padding: 0px 80px;
      .el-steps {
        .el-step {
          &:last-child {
            flex-basis: auto !important;
            flex-shrink: 0;
            flex-grow: 0;
          }
        }
      }
    }
    .content {
      display: flex;
      justify-content: center;
      margin-bottom: 35px;
      .step1-content,
      .step2-content {
        padding: 10px 0;
        width: 380px;
        font-family: var(--title-base-font);
        color: #000;
        :deep(.el-form) {
          .el-input__wrapper {
            --el-input-hover-border-color: #3b8cff;
            border-radius: 8px;
            background-color: #d8d9e080;
          }
          .el-form-item.is-error .el-input__wrapper {
            box-shadow: 0 0 0 1px var(--el-color-danger) inset;
          }
          .vaild-code {
            .el-form-item__content {
              display: flex;
              justify-content: space-between;
              .el-input {
                width: 250px;
              }
            }
          }
        }
        .bt-view {
          display: flex;
          align-items: center;
        }
        .bt-next {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0px 0px 0px;
          img {
            width: 23px;
            height: 23px;
          }
          .bt-left {
            background: #136dff;
            width: 45px;
            height: 45px;
            border-radius: 27px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            &.is-disable {
              width: 45px;
              height: 45px;
              border-radius: 27px;
              color: #fff;
              background: rgba(216, 217, 224, 0.5);
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: no-drop;
            }
          }
          .bt-right {
            background: #136dff;
            width: 45px;
            height: 45px;
            border-radius: 27px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-left: 70px;
            &.is-disable {
              width: 45px;
              height: 45px;
              border-radius: 27px;
              color: #fff;
              background: rgba(216, 217, 224, 0.5);
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: no-drop;
            }
          }
        }
        .bt-pre {
          display: flex;
          margin-top: 30px;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
//遮罩层的css设置
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.5);
}
//用来放置验证模块css
.verification {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
}
</style>
