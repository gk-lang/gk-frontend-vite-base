<template>
    <div>
      <el-card class="auth-test-tool">
        <el-row>
          <el-col :span="24">
            <span class="title">所属环境:</span>
            <el-radio-group v-model="envId">
              <el-radio-button
                v-for="item in envList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <span class="title">所属应用:</span>
            <el-select v-model="appId" placeholder="请选择应用">
              <el-option
                v-for="item in appList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" @click="getToken">生成token</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-input
              v-model="token"
              :autosize="{ minRows: 4, maxRows: 6 }"
              type="textarea"
              placeholder="请点击生成按钮生成token"
            />
          </el-col>
        </el-row>
        
      </el-card>
    </div>
</template>
<script lang="jsx" setup>
import {
  queryOpenAppList,
  queryAppBindApiPageList
} from "@/api/application";
import { getRequestApiToken, queryOpenEnvList } from "@/api/api-debugger";
import {
  ElCard,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElRadioButton,
  ElInput,
  ElButton,
  ElPopconfirm,
  ElTree,
  ElTabs,
  ElTabPane,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElTag,
  ElCollapse,
  ElCollapseItem,
} from "element-plus";
import { ref, onMounted } from 'vue'
const envId = ref('')
const appId = ref('')
const token = ref('')
const appList = ref([])
const envList = ref([])
async function queryAppList(){
  const resp = await queryOpenAppList({
    pageNo:1,
    pageSize:9999,
    approveStatus:1,//"审批通过
    admin:false
  });
  if(resp?.data?.dataList){
    resp.data.dataList.forEach(x=>{
      x.label = x.appName
      x.value = x.id
    })
  }
  appList.value = resp?.data?.dataList || []
}
async function queryEnvList(){
  const resp = await queryOpenEnvList();
  if(resp?.data){
    resp.data.forEach(x=>{
      x.label = x.envName
      x.value = x.env
    })
    envList.value = resp?.data || []
    envId.value = envList.value[0].value
  }
}
async function getToken(){
  if(!envId.value){
    return window.$msg.error('请先选择所属环境!')
  }
  if(!appId.value){
    return window.$msg.error('请先选择所属应用!')
  }
  // 计算所需参数
  const selectedAppItem = appList.value.find(x=>x.value===appId.value)
  const client_id = selectedAppItem.apiKey
  const client_secret = selectedAppItem.secretKey
  // 计算选中的环境url
  const selectedEnvItem = envList.value.find(x=>x.value === envId.value)
  const urlPrefix = selectedEnvItem.urlPrefix
  const requestUrl = `${urlPrefix}/admin/client/token?client_id=${client_id}&client_secret=${client_secret}`
  const resp = await getRequestApiToken(requestUrl)
  token.value = resp.data?.access_token || ''
  window.$msg.success('token生成成功！')
}
onMounted(()=>{
  queryEnvList()
  queryAppList()
})
</script>
<style lang="scss" scoped>
.auth-test-tool{
  width: 550px;
  height: 400px;
  padding: 10px;
  margin: auto;
  margin-top: 100px;
  :deep(.el-row){
    margin: 10px 0px;
    .el-col{
      display: flex;
      align-items: center;
      .title{
        width: 70px;
      }
      .el-select{
        width: 450px;
      }
      .el-button{
        width: 100%;
      }
    }
  }
}
</style>
  