<!-- 分页 -->
<template>
  <div class="common-pagination">
    <el-pagination
      background
      layout="total, prev, pager, next, sizes, jumper"
      :total="total"
      :current-page.sync="pageNumComp"
      :page-size="pageSize"
      :pager-count="5"
      @current-change="changeHandler"
      @size-change="sizeChangeHandler"
    />
  </div>
</template>

<script>
import {
  ElPagination
} from "element-plus";
export default {
  name: 'CommonPagination',
  components:{ElPagination},
  props: {
    pageNum: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
    }
  },
  computed: {
    pageNumComp: {
      get () {
        return this.pageNum
      },
      set () { }
    }
  },
  methods: {
    // 翻页
    changeHandler (val) {
      // this.$emit('update:pageNum', val)
      this.$emit('change', val)
    },
    // pageSize改变
    sizeChangeHandler (val) {
      // this.pageSize = val
      // 显示第一页数据
      this.$emit('size-change', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.common-pagination {
  .el-pagination {
    padding: 0;
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
    &.is-background {
      .btn-prev,
      .btn-next,
      .el-pager li {
        margin: 0px 4px 8px;
        background-color: transparent;
        font-weight: normal;
        min-width: 32px;
        line-height: 30px;
      }
      .el-pagination__sizes {
        margin-right: 16px;
        .el-select__caret.el-input__icon {
          display: block !important;
          &.el-icon-circle-close {
            display: none !important;
          }
        }
      }
      .el-pagination__jump {
        margin-left: 0;
        display: flex;
      }
      .el-input__validateIcon {
        display: none;
      }
    }
  }
}
</style>
