<template>
  <el-dialog
    v-model="visibleDialog"
    title="请完成安全验证"
    width="350"
    align-center
    @close="handleClose"
  >
    <div class="silde_box">
      <slide-verify
        class="silde_box"
        ref="block"
        slider-text="向右滑动->"
        :accuracy="1"
        @again="onAgain"
        @success="onSuccess"
        @fail="onFail"
        @refresh="onRefresh"
        :imgs="img"
      ></slide-verify>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import { ElDialog } from "element-plus";
import SlideVerify from "vue3-slide-verify"; //引入滑动验证组件
import "vue3-slide-verify/dist/style.css"; //引入滑动验证组件样式
const emits = defineEmits(["update:isShow", "save"]);
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});

const msg = ref("");
//自定义图片
const img = ref([
  "https://img0.baidu.com/it/u=1552632757,378376738&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
  "https://img2.baidu.com/it/u=4260616497,4153321689&fm=253&fmt=auto&app=138&f=JPEG?w=656&h=435",
]);
const block = ref();
const visibleDialog = computed({
  get() {
    return props.isShow;
  },
  set(val) {
    emits("update:isShow", val);
  },
});
function handleClose() {
  visibleDialog.value = false;
}
const onAgain = () => {
  msg.value = "检测到非人为操作的哦！ try again";
  // 刷新
  block.value?.refresh();
};
//成功的回调
const onSuccess = (times) => {
  msg.value = "验证通过，耗时" + (times / 1000).toFixed(1) + "秒";
  visibleDialog.value = false;
  emits("save", true);
};
//失败的回调
const onFail = () => {
  msg.value = "验证不通过";
  emits("save", false);
};
//点击刷新回调
const onRefresh = () => {
  msg.value = "点击了刷新小图标";
};

const handleClick = () => {
  // 刷新
  block.value?.refresh();
  msg.value = "";
};
</script>
<style scoped>
.silde_box {
  margin: 0 auto;
}
</style>
