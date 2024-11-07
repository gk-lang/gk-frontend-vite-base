<template>
  <dialog-base
    title="详情"
    :visible="dialogVisible"
    width="60%"
    @cancel="cancel()"
    @confirm="confirm()"
  >
    <div class="box-flex">
      <div class="title">
        <div>应用名称</div>
        <div>服务名称</div>
        <div>状态码</div>
        <div>请求类型</div>
        <div>请求时间</div>
        <div>请求大小（K）</div>
        <div>响应时间</div>
        <div>响应大小（K）</div>
        <div>任务耗时（ms）</div>
      </div>
      <div class="msg">
        <div>{{ editData.appName? editData.appName : '无' }}</div>
        <div>无</div>
        <div>{{ editData.status? editData.status : '无' }}</div>
        <div>{{ editData.httpMethod? editData.httpMethod : '无' }}</div>
        <div>{{ editData.requestTime? editData.requestTime : '无' }}</div>
        <div>无</div>
        <div>{{ editData.responseTime? editData.responseTime : '无' }}</div>
        <div>无</div>
        <div>{{ editData.useTime? editData.useTime : '无' }}</div>
      </div>
    </div>
    <div>
      <div>
        <span class="span-title">
          请求内容
        </span>
        <span class="span-open" @click="UnfoldAndFold">
          {{ reqName }}
        </span>
      </div>
      <div v-show="reqFlag" class="open-box">
        <pre v-show="requestBodyIsJsonFlag">{{ JSON.stringify(requestBody, null, 7) }}</pre>
        <div v-show="!requestBodyIsJsonFlag">
          {{ requestBody }}
        </div>
      </div>
      <div v-show="!reqFlag" class="replace">{</div>
    </div>
    <div>
      <div>
        <span class="span-title">
          响应内容
        </span>
        <span class="span-open" @click="resUnfoldAndFold">
          {{ resName }}
        </span>
      </div>
      <div v-show="resFlag" class="open-box">
        <pre v-show="responseDataIsJsonFlag">{{ JSON.stringify(responseData, null, 7) }}</pre>
        <div v-show="!responseDataIsJsonFlag">
          {{ responseData }}
        </div>
      </div>
      <div v-show="!resFlag" class="replace">{</div>
    </div>
  </dialog-base>
</template>
<script setup>
import { ref,computed } from 'vue'
import DialogBase from "@/components/dialog/dialog-base.vue";
import { reSendByGeneral } from '@/api/monitor-manage'
const emits = defineEmits(["update:isShow", "save"]);

const props = defineProps({
  isShow: {
    type: Boolean,
    default: "",
  },
  editData: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const reqFlag = ref(false)
const resFlag = ref(false)
const reqName = ref('展开')
const resName = ref('展开')
const sendLoading = ref(false)

const dialogVisible = computed({
  get() {
    return props.isShow;
  },
  set(val) {
    emits("update:isShow", val);
  },
});

const responseDataIsJsonFlag = computed({
  get() {
    return isJSON(props.editData.responseData)
  }
});
const requestBodyIsJsonFlag = computed({
  get() {
    return isJSON(props.editData.requestHeader)
  }
});
const responseData = computed({
  get() {
    if (isJSON(props.editData.responseData)) { // 判断是不是正常json
        return JSON.parse(props.editData.responseData)
    } else {
        return props.editData.responseData
    }
  }
});
const requestBody = computed({
  get() {
    if (isJSON(props.editData.requestHeader)) { // 判断是不是正常json
        return JSON.parse(props.editData.requestHeader)
    } else {
        return props.editData.requestHeader
    }
  }
});


function cancel(){
  dialogVisible.value = false
}

function isJSON(str) {
  if (typeof str === 'string') {
    try {
      JSON.parse(str)
      return true
    } catch (e) {
      return false
    }
  }
}
function UnfoldAndFold() {
  reqFlag.value = !reqFlag.value
  reqName.value = reqFlag.value ? '收起' : '展开'
}
function resUnfoldAndFold() {
  resFlag.value = !resFlag.value
  resName.value = resFlag.value ? '收起' : '展开'
}
function confirm() {
  const { id } = props.editData || {}
  sendLoading.value = true
  reSendByGeneral({ id }).then(res => {
    if (res.Flag) {
      window.$msg.success('请求成功!')
      emits('save',res.Flag)
      dialogVisible.value = false
    }
  }).finally(() => {
    sendLoading.value = false
  })
}
</script>
<style lang="scss" scoped>
.box-flex{
  display: flex;
  .title{
    margin-right: 10px;
    color: #333;
    font-size: 14px;
    font-weight: bold;
    width: 120px;
    display: inline-block;
    line-height: 30px;
  }
  .msg{
    display: inline-block;
    word-break: break-all;
    word-wrap: break-word;
    max-width: 100%;
    line-height: 30px;
  }
}
.span-title{
  margin-right: 10px;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  line-height: 30px;
}
.span-open{
  color: #2469F3;
  cursor:pointer;
}
.open-box{
  width: 870px;
  padding: 10px;
  background-color: #f4f4f4;
}
.replace{
  background-color: #f4f4f4;
  padding: 10px;
}
.dialog-footer{
  margin-top: 10px;
  display: flex;
  flex-direction: row-reverse;
}
</style>
