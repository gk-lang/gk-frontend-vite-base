<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" height="440">
      <el-table-column label="序号" type="index" align="center" width="55" />
      <el-table-column prop="appName" label="应用名称" align="center" />
      <el-table-column prop="apiName" label="Api名称" align="center" />
      <el-table-column prop="status" label="状态码" align="center" />
      <el-table-column prop="requestTime" label="请求时间" align="center" />
      <el-table-column prop="useTime" label="耗时（ms）" align="center" />
      <!-- <el-table-column prop="msg" label="请求大小（K）" align="center" />
      <el-table-column prop="time" label="响应大小（K）" align="center" /> -->
      <el-table-column
        label="操作"
        width="120px"
        align="center"
      >
        <template #default="scope">
          <el-button
            type="primary"
            link
            @click="handleLook(scope.row)"
          >查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <log-detail-dialog ref="logDetailDialog" @refresh="$emit('refresh')" />
  </div>
</template>
<script>
import {
  ElTable,
  ElTableColumn,
  ElButton,
} from "element-plus";
import { getLogDetailById } from '@/api/monitor-manage'
import LogDetailDialog from './log-detail-dialog.vue'
export default {
  name: 'LogDetailTable',
  components: { 
    ElTable,
    ElTableColumn,
    ElButton,
    LogDetailDialog 
  },
  props: {
    logDetailData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      tableData: [],
      detailData: {}
    }
  },
  watch: {
    logDetailData: {
      handler(data) {
        this.tableData = data.records
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleLook(row) {
      const data = {
        id: row.id
        // id: 901
      }
      getLogDetailById(data).then(res => {
        if (res.data) {
          this.detailData = res.data
          this.$refs.logDetailDialog.open(this.detailData)
        }
      })
    },
    checkData(row) {
      console.log(row)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
