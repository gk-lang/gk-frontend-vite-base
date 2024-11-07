<template>
  <div :class="className" :style="{height: height,width: width}" />
</template>

<script>
import * as echarts from 'echarts'
// require('echarts/theme/macarons') // echarts theme

export default {
  name: 'BasicLineChart',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    timeType: {
      type: String,
      default: '3小时'
    },
    width: {
      type: String,
      default: '47%'
    },
    height: {
      type: String,
      default: '400px'
    },
    xbChartData: {
      type: Array,
      required: true
    },
    ybChartData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        title: {
          text: `时间段请求平均响应 /${this.timeType}`,
          textStyle: {
            fontSize: 12,
            color: '#b4b4b4'
          }
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            data: this.xbChartData
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            // name: 'Email',
            type: 'line',
            stack: 'Total',
            smooth: false,
            // data: [120, 132, 101, 134, 90, 230, 210]
            data: this.ybChartData
          }
        ]
      })
    }
  }
}
</script>
