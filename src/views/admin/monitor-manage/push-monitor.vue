<template>
  <el-card class="push-monitor-page" shadow="never">
    <!-- 头部 -->
    <el-card class="search-bar" shadow="never">
      <el-form :model="queryParams" :inline="true" label-width="80px">
        <el-row>
          <el-col :span="7">
            <el-form-item label="时间范围" prop="time">
              <el-date-picker
                v-model="datePick"
                :clearable="false"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd"
                :picker-options="pickerOptions"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="应用名称" prop="appId">
              <el-select
                v-model="queryParams.appId"
                placeholder="应用名称"
                :clearable="isCanClearableAppId"
                @change="changeAppName"
              >
                <el-option
                  v-for="item in appNames"
                  :key="item.appId"
                  :label="item.appName"
                  :value="item.appId"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="定时刷新" prop="refresh">
              <el-select
                v-model="refresh"
                :clearable="false"
                @change="changeSelect"
              >
                <el-option
                  v-for="item in refreshList"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item>
              <el-button class="search-btn" type="primary" @click="handleQuery"
                >搜索</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-form-item label="API名称" prop="apiName">
            <el-select v-model="queryParams.apiCode" placeholder="API名称" clearable style="width: 200px;">
              <el-option v-for="item in apiNames" :key="item.apiCode" :label="item.apiName" :value="item.apiCode" />
            </el-select>
          </el-form-item> -->
      </el-form>
    </el-card>
    <el-card class="main-content" v-loading="loading" shadow="never">
      <!-- 总数据展示 -->
      <div>
        <div class="flex span-lable">
          <span>总推送次数</span>
          <span>错误数</span>
          <span>平均推送耗时(ms)</span>
          <span>异常数</span>
          <span>积压数</span>
        </div>
        <div class="flex span-num">
          <span>{{ counts.callCount }}</span>
          <span>{{ counts.failCount }}</span>
          <span>{{ counts.useTime }}</span>
          <span>0</span>
          <span>0</span>
        </div>
      </div>
      <!-- 图表 -->
      <div class="common-toolbar chart-box">
        <smoothed-line-chart
          v-if="xSchartData.length > 0"
          :xs-chart-data="xSchartData"
          :ys-chart-data="ySchartData"
          :width="'96%'"
          :time-type="timeType"
        />
        <div v-if="xSchartData.length == 0">暂无数据</div>
      </div>
    </el-card>
  </el-card>
</template>

<script>
import {
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElButton,
  ElCard,
  ElRow,
  ElCol,
  ElTooltip,
  ElLink,
  ElPopconfirm,
  ElTree,
  ElInput,
} from "element-plus";
import {
  getDataStatistics,
  getChartStatistics,
  getSelectAppName,
  getSelectApiName,
} from "@/api/monitor-manage";
import BasicLineChart from "./components/basic-line-chart.vue";
import SmoothedLineChart from "./components/smoothed-line-chart.vue";
import { queryOpenAppList } from "@/api/application";
import { useUserStore } from "@/store/modules/user";
export default {
  name: "PushMonitor",
  components: {
    ElForm,
    ElFormItem,
    ElSelect,
    ElOption,
    ElDatePicker,
    ElButton,
    SmoothedLineChart,
    ElCard,
    ElRow,
    ElCol,
  },
  data() {
    return {
      user: null,
      isCanClearableAppId: true,
      queryParams: { appId: "", apiCode: "" },
      counts: {},
      timeType: "",
      loading: false,
      datePick: this.getToday(),
      refresh: 5,
      dataInterval: 300000, // 设置定时刷新时间 1分钟:60000   5分钟:300000  30分钟:1800000
      updateInterval: null, // 定时器标识，清除用
      refreshList: [
        { label: "1分钟", id: 1 },
        { label: "5分钟", id: 5 },
        { label: "30分钟", id: 30 },
      ],
      xSchartData: [],
      ySchartData: [],
      appNames: [],
      apiNames: [],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近三天",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },
  created() {
    const userStore = useUserStore();
    this.user = userStore.getUserInfo;
    this.getSelectName();
    const that = this;
    this.updateInterval = setInterval(function () {
      that.getData();
    }, that.dataInterval); // 定时刷新
  },
  beforeDestroy() {
    clearInterval(this.updateInterval); // 清楚定时刷新，不清除会一直运行，关闭页面也会定时刷新
  },
  methods: {
    async searchAppOptionList() {
      let resp = await queryOpenAppList({
        pageNo: 1,
        pageSize: 999999,
        admin: this.user.user_type === "super",
      });
      if (resp.code === "200") {
        resp?.data?.dataList?.forEach((x, i) => {
          x.sortIndex = i + 1;
          x.label = x.appName;
          x.value = x.appId + "";
        });
        this.appNames = resp?.data?.dataList || [];
        const isAdmin = this.user.user_type === "super";
        if (!isAdmin) {
          this.queryParams.appId = this.appNames[0].appId;
          this.isCanClearableAppId = false;
        }
      }
      this.getData();
    },
    changeSelect(e) {
      // 更新定时器
      clearInterval(this.updateInterval);
      const that = this;
      if (e === 1) {
        this.dataInterval = 60000;
        this.updateInterval = setInterval(function () {
          that.getData();
        }, 60000); // 定时刷新
      } else if (e === 5) {
        this.dataInterval = 300000;
        this.updateInterval = setInterval(function () {
          that.getData();
        }, 300000); // 定时刷新
      } else {
        this.dataInterval = 1800000;
        this.updateInterval = setInterval(function () {
          that.getData();
        }, 1800000); // 定时刷新
      }
    },
    handleQuery() {
      this.getData();
      const that = this;
      clearInterval(this.updateInterval); // 请求过后重新计时
      this.updateInterval = setInterval(function () {
        that.getData();
      }, that.dataInterval);
    },
    resetQuery() {
      console.log("resetQuery");
    },
    getStatisticData() {
      // 获取总数量
      const data = {
        type: "PUSH",
        startTime: this.datePick[0],
        endTime: this.datePick[1],
        ...this.queryParams,
      };
      getDataStatistics(data).then((res) => {
        if (res.data) {
          this.counts = Object.assign({}, res.data);
        }
      });
    },
    getChartData() {
      // 获取图表数据
      const data = {
        type: "PUSH",
        startTime: this.datePick[0],
        endTime: this.datePick[1],
        ...this.queryParams,
      };
      getChartStatistics(data).then((res) => {
        if (res.data) {
          const list = res.data;
          if (list.length > 0) {
            if (list[0].timeType === "h") {
              this.timeType = "3小时";
            } else if (list[0].timeType === "d") {
              this.timeType = "3天";
            } else {
              this.timeType = "3个月";
            }
          }
          this.xSchartData = [];
          this.ySchartData = [];
          res.data.forEach((item) => {
            this.$nextTick(() => {
              this.xSchartData.push(item.date);
              this.ySchartData.push(item.useTime);
            });
          });
        }
      });
    },
    getAppName() {
      // 获取应用名称
      getSelectAppName().then((res) => {
        if (res.data) {
          this.appNames = res.data;
        }
      });
    },
    getApiName(appId) {
      // 获取API名称
      const data = {
        appId: appId,
      };
      getSelectApiName(data).then((res) => {
        if (res.data) {
          this.apiNames = res.data;
        }
      });
    },
    changeAppName(e) {
      this.getApiName(e);
      this.queryParams.apiCode = "";
    },
    getSelectName() {
      this.searchAppOptionList();
    },
    getData() {
      this.loading = true;
      this.getStatisticData();
      this.getChartData();
      this.loading = false;
    },
    getToday() {
      // 获取默认时间
      // 当前时间
      const date = new Date();
      const y = date.getFullYear();
      const m =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      const d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      const today = y + "-" + m + "-" + d;
      // 两天后
      const date2 = new Date(date.getTime() - 48 * 60 * 60 * 1000);
      const y2 = date2.getFullYear();
      const m2 =
        date2.getMonth() + 1 < 10
          ? "0" + (date2.getMonth() + 1)
          : date2.getMonth() + 1;
      const d2 = date2.getDate() < 10 ? "0" + date2.getDate() : date2.getDate();
      const today2 = y2 + "-" + m2 + "-" + d2;
      return [today2, today];
    },
  },
};
</script>
<style lang="scss">
.push-monitor-page {
  box-sizing: border-box;
  & > .el-card__body {
    padding: 7px;
    .search-bar {
      padding: 0px;
      & > .el-card__body {
        padding: 10px 10px 10px 0px;
        .el-form-item {
          margin-bottom: 0px;
          width: 100%;
          .search-btn {
            margin-left: 10px;
            width: 80px;
          }
        }
      }
    }
    .main-content {
      margin-top: 10px;
      .flex {
        display: flex;
        justify-content: space-around;
        margin-top: 15px;
        span {
          width: 130px;
          text-align: center;
        }
      }
      .span-lable {
        font-size: 12px;
        color: #b4b4b4;
      }
      .span-num {
        font-size: 18px;
        font-weight: 700;
      }
      .chart-box {
        margin-top: 15px;
        padding-top: 20px;
        display: flex;
        justify-content: space-around;
        padding-left: 20px;
      }
    }
  }
}
</style>
