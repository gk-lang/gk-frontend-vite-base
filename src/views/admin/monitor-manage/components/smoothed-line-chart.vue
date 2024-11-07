<template>
  <div :class="className" :style="{height: height,width: width}" />
</template>

<script>
import * as echarts from 'echarts'
// require('echarts/theme/macarons') // echarts theme

export default {
  name: 'SmoothedLineChart',
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
    xsChartData: {
      type: Array,
      required: true
    },
    ysChartData: {
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
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
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
            data: this.xsChartData
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            type: 'line',
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },
            data: this.ysChartData
          }
        ]
      })
    }
  }
}
</script>
