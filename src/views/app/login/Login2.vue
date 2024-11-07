<template>
  <div class="page-container-login">
    <div class="login-box">
      <!-- <img class="left-img" src="/src/assets/svgs/login-box-bg.svg" alt="" /> -->
      <el-form>
        <h3>欢迎登录</h3>
        <p class="desc">WELCOME LOGIN</p>
        <el-input type="text" placeholder="请输入账号" required />
        <el-input type="password" placeholder="请输入密码" required />
        <el-button>登录</el-button>
        <p class="no">
          <span>忘记密码</span>
          <span>没有账号？立即注册</span>
        </p>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { ElForm, ElInput, ElButton } from "element-plus";
</script>
<style lang="scss" scoped>
.page-container-login {
  height: 100%;
  width: 100%;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url(/src/assets/login/login-bg2.svg);
    background-position: center;
    background-repeat: no-repeat;
    content: "";
  }

  .login-box {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    padding: 4.5vh;
    margin: auto;
    overflow: hidden;
    background: var(--el-color-white);
    background-size: 100% 100%;
    border: 1px solid var(--el-border-color);
    border-radius: 15px;
    transition: var(--el-transition);

    .left-img {
      width: 50%;
    }
    form {
      width: 45%;
    }
  }
}
</style>
