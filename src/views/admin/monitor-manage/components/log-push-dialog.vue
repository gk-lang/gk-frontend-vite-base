<template>
  <div>
    <el-dialog
      title="详情"
      v-model="dialogVisible"
      width="60%"
    >
      <div class="box-flex">
        <div class="title">
          <div>应用名称</div>
          <div>应用标识</div>
          <div>状态码</div>
          <div>推送时间</div>
          <div>推送地址</div>
          <div>推送耗时（ms）</div>
        </div>
        <div class="msg">
          <div>{{ model.appName? model.appName : '无' }}</div>
          <div>{{ model.appId? model.appId : '无' }}</div>
          <div>{{ model.status? model.status : '无' }}</div>
          <div>{{ model.requestTime? model.requestTime : '无' }}</div>
          <div>{{ model.url? model.url : '无' }}</div>
          <div>{{ model.useTime? model.useTime : '无' }}</div>
        </div>
      </div>
      <div>
        <div>
          <span class="span-title">
            请求内容
          </span>
          <span
            class="span-open"
            @click="UnfoldAndFold"
          >
            {{ reqName }}
          </span>
        </div>
        <div
          v-show="reqFlag"
          class="open-box"
        >
          <pre v-show="requestBodyIsJsonFlag">{{ JSON.stringify(requestBody, null, 7) }}</pre>
          <div v-show="!requestBodyIsJsonFlag">
            {{ requestBody }}
          </div>
        </div>
        <div
          v-show="!reqFlag"
          class="replace"
        >{</div>
      </div>
      <div>
        <div>
          <span class="span-title">
            响应内容
          </span>
          <span
            class="span-open"
            @click="resUnfoldAndFold"
          >
            {{ resName }}
          </span>
        </div>
        <div
          v-show="resFlag"
          class="open-box"
        >
          <pre v-show="responseDataIsJsonFlag">{{ JSON.stringify(responseData, null, 7) }}</pre>
          <div v-show="!responseDataIsJsonFlag">
            {{ responseData }}
          </div>
        </div>
        <div
          v-show="!resFlag"
          class="replace"
        >{</div>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          :loading="sendLoading"
          @click="reSendForPush"
        >重 推</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  ElDialog,
  ElButton,
} from "element-plus";
import { reSendByPush } from '@/api/monitor-manage'

export default {
  name: 'LogPushDialog',
  components:{
    ElDialog,
    ElButton,
  },
  data () {
    return {
      dialogVisible: false,
      reqFlag: false,
      resFlag: false,
      reqName: '展开',
      resName: '展开',
      model: {},
      responseData: {},
      requestBody: {},
      requestHeader: {},
      responseDataIsJsonFlag: true,
      requestBodyIsJsonFlag: true,
      sendLoading: false
    }
  },
  methods: {
    open (data) {
      this.reqName = '展开'
      this.resName = '展开'
      this.reqFlag = false
      this.resFlag = false
      this.responseDataIsJsonFlag = true
      this.requestBodyIsJsonFlag = true
      this.model = Object.assign({}, data)
      if (this.isJSON(this.model.responseData)) { // 判断是不是正常json
        this.responseDataIsJsonFlag = true
        this.responseData = JSON.parse(this.model.responseData)
      } else {
        this.responseDataIsJsonFlag = false
        this.responseData = this.model.responseData
      }
      if (this.isJSON(this.model.requestHeader) && this.isJSON(this.model.requestBody)) {
        this.requestBodyIsJsonFlag = true
        this.requestBody = Object.assign(JSON.parse(this.model.requestHeader), JSON.parse(this.model.requestBody))
      } else {
        this.requestBodyIsJsonFlag = false
        this.requestBody = this.model.requestHeader + this.model.requestBody
      }
      this.dialogVisible = true
    },
    isJSON (str) {
      if (typeof str === 'string') {
        try {
          JSON.parse(str)
          return true
        } catch (e) {
          return false
        }
      }
    },
    UnfoldAndFold () {
      this.reqFlag = !this.reqFlag
      this.reqName = this.reqFlag ? '收起' : '展开'
    },
    resUnfoldAndFold () {
      this.resFlag = !this.resFlag
      this.resName = this.resFlag ? '收起' : '展开'
    },
    handleClose (done) {
      console.log(done)
    },
    reSendForPush () {
      const { id } = this.model || {}
      this.sendLoading = true
      const params = {
        id
      }
      reSendByPush(params).then(res => {
        if (res.Flag) {
          this.$message.success('请求成功!')
          this.$emit('refresh')
          this.dialogVisible = false
        }
      }).finally(() => {
        this.sendLoading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.box-flex {
  display: flex;
  .title {
    margin-right: 10px;
    color: #333;
    font-size: 14px;
    font-weight: bold;
    width: 120px;
    display: inline-block;
    line-height: 30px;
  }
  .msg {
    display: inline-block;
    word-break: break-all;
    word-wrap: break-word;
    max-width: 100%;
    line-height: 30px;
  }
}
.span-title {
  margin-right: 10px;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  line-height: 30px;
}
.span-open {
  color: #2469f3;
  cursor: pointer;
}
.open-box {
  width: 870px;
  padding: 10px;
  background-color: #f4f4f4;
}
.replace {
  background-color: #f4f4f4;
  padding: 10px;
}
</style>
