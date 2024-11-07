<template>
  <ElConfigProvider
    :namespace="variables.elNamespace"
    :message="{ max: 1 }"
    :size="size"
    :locale="zhCn"
  >
    <slot></slot>
  </ElConfigProvider>
</template>
<script setup>
import { onMounted,computed,watch, ref,provide } from "vue";
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useWindowSize } from '@vueuse/core'
import { setCssVar } from '@/utils'
import { useAppStore } from '@/store/modules/app'
import { useDesign } from '@/hooks/web/useDesign'

const appStore = useAppStore()
const { width } = useWindowSize()
const { variables } = useDesign()

const props = defineProps({
  size: {
    type: String || Number,
    default: () => {
      return ''
    }
  },
})


// 监听窗口变化
watch(
  () => width.value,
  (width) => {
    if (width < 768) {
      !appStore.getMobile ? appStore.setMobile(true) : undefined
      setCssVar('--left-menu-min-width', '0')
      appStore.setCollapse(true)
      appStore.getLayout !== 'classic' ? appStore.setLayout('classic') : undefined
    } else {
      appStore.getMobile ? appStore.setMobile(false) : undefined
      setCssVar('--left-menu-min-width', '64px')
    }
  },
  {
    immediate: true
  }
)

provide('configGlobal', props)

// 初始化所有主题色
onMounted(() => {
//   appStore.setCssVarTheme()
})
</script>
