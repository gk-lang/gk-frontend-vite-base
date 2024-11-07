<template>
  <div class="api-test-tool-container auto-container">
    <ApiDebuggerTool v-model="debuggerToolConfig"/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import ApiDebuggerTool from "@/components/api-test-tool/index.vue";
const debuggerToolConfig = ref({})
</script>
<style lang="scss" scoped>
.api-test-tool-container {
  width: 75%;
  margin: auto;
}
</style>
