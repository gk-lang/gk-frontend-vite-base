<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" height="440">
      <el-table-column type="index" align="center" width="55" />
      <el-table-column prop="appName" label="应用名称" align="center" />
      <el-table-column prop="apiName" label="Api名称" align="center" />
      <el-table-column prop="status" label="状态码" align="center" />
      <el-table-column prop="statusCount" label="返回状态码次数" align="center" />
      <!-- <el-table-column
        label="操作"
        width="80px"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="handleedit(scope.row)"
          >查看</el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
import {
  ElTable,
  ElTableColumn,
  ElButton
} from "element-plus";
export default {
  name: 'LogResTable',
  components: { 
    ElTable,
    ElTableColumn,
    ElButton
  },
  props: {
    logResData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  watch: {
    logResData: {
      handler(data) {
        this.tableData = data.records
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleedit(aa) {
      console.log(aa)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
