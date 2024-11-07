<template>
  <uploader
    :options="options"
    :file-status-text="statusText"
    class="example-uploader"
    ref="uploaderRef"
    @file-complete="fileComplete"
    @complete="complete"
  >
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <p>拖拽文件到这里进行上传</p>
      <uploader-btn>选择文件</uploader-btn>
      <uploader-btn :attrs="attrs">选择图片</uploader-btn>
      <uploader-btn :directory="true">选择文件夹</uploader-btn>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
</template>

<script>
import { nextTick, ref, onMounted } from "vue";
// import {
//   Uploader,
//   UploaderBtn,
//   UploaderDrop,
//   UploaderUnsupport,
//   UploaderList,
//   UploaderFiles,
//   UploaderFile,
// } from "vue-simple-uploader";
// import "vue-simple-uploader/dist/style.css";
export default {
  setup() {
    const uploaderRef = ref(null);
    const options = {
      target: "//localhost:3000/upload", // '//jsonplaceholder.typicode.com/posts/',
      testChunks: false,
    };
    const attrs = {
      accept: "image/*",
    };
    const statusText = {
      success: "success",
      error: "error",
      uploading: "uploading",
      paused: "paused",
      waiting: "waiting",
    };
    const complete = () => {
      console.log("complete", arguments);
    };
    const fileComplete = () => {
      console.log("file complete", arguments);
    };
    onMounted(() => {
      nextTick(() => {
        window.uploader = uploaderRef.value.uploader;
      });
    });
    return {
      uploaderRef,
      options,
      attrs,
      statusText,
      complete,
      fileComplete,
    };
  },
};
</script>

<style>
.example-uploader {
  width: 100%;
  height: 100%;
  padding: 15px;
  font-size: 12px;
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); */
}
.example-uploader .uploader-btn {
  margin-right: 4px;
}
.example-uploader .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
