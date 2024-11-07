<template>
  <div class="admin-home auto-container">
    欢迎来到九州通物流开放平台！
  </div>
</template>
<script setup>
import { queryOpenEnvList } from "@/api/api-debugger";
import { ElCard } from "element-plus";
import { ref, watch, computed, onBeforeMount, onMounted } from "vue";
onMounted(()=>{
  queryOpenEnvList()
  
})
</script>
<style lang="scss" scoped>
.admin-home {
  height: var(--el-container-height);
  width: 100%;
  font-size: 26px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>