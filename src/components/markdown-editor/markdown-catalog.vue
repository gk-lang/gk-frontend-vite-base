<template>
  <div class="catalog">
    <div class="affix">
      <MdCatalog
        :editorId="props.editorId"
        theme="light"
        :scrollElement="scrollRoot"
        :scrollElementOffsetTop="10"
        @onClick="onClick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import { MdCatalog } from "md-editor-v3";
const props = defineProps({
  editorId: {
    type: String,
    default: "",
  },
  scrollRoot:{
    type: String,
    default: "",
  },
});
// const scrollElement = '#markdown-preview';
// const scrollElement = document.documentElement;

const onClick = (e, t) => {
  history.replaceState({}, "", `${location.pathname}${location.search}#${t.text}`);
};
</script>

<style lang="scss">
.affix {
  position: sticky;
  top: 10px;
  max-height: 100vh;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
}
</style>
